import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PW = process.env.GMAIL_APP_PW;
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? GMAIL_USER ?? "randyherynyaina187@gmail.com";

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

type Payload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;

  website?: unknown;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const MAX_NAME = 120;
const MAX_SUBJECT = 200;
const MAX_MESSAGE = 5000;

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function headerSafe(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

async function sendViaGmail(input: { name: string; email: string; subject: string; message: string }) {
  const transport = createTransport({
    service: "gmail",
    auth: { user: GMAIL_USER, pass: GMAIL_APP_PW },
    connectionTimeout: 8000,
    greetingTimeout: 8000,
    socketTimeout: 15000,
  });

  await transport.sendMail({
    from: `Portfolio <${GMAIL_USER}>`,
    to: TO_EMAIL,
    replyTo: input.email,
    subject: `[Portfolio] ${input.subject}`,
    text: `${input.name} (${input.email}) a écrit via le portfolio :\n\n${input.message}`,
  });
}

async function sendViaResend(input: { name: string; email: string; subject: string; message: string }) {
  const res = await fetch(RESEND_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      reply_to: input.email,
      subject: `[Portfolio] ${input.subject}`,
      text: `${input.name} (${input.email}) wrote via the portfolio:\n\n${input.message}`,
    }),
  });
  if (!res.ok) throw new Error(`resend ${res.status}: ${await res.text()}`);
}

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (clean(body.website, 200)) {
    return NextResponse.json({ ok: true, delivered: true });
  }

  const name = headerSafe(clean(body.name, MAX_NAME));
  const email = clean(body.email, 320);
  const subject = headerSafe(clean(body.subject, MAX_SUBJECT));
  const message = clean(body.message, MAX_MESSAGE);

  if (!name || !subject || !message) {
    return NextResponse.json({ error: "missing_fields" }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }

  const payload = { name, email, subject, message };
  const hasGmail = Boolean(GMAIL_USER && GMAIL_APP_PW);
  const hasResend = Boolean(RESEND_API_KEY);

  if (!hasGmail && !hasResend) {
    console.info("[contact] submission (no mail provider configured)", {
      name,
      email,
      subject,
      length: message.length,
    });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const providers: Array<{ name: string; send: () => Promise<void> }> = [];
  if (hasGmail) providers.push({ name: "gmail", send: () => sendViaGmail(payload) });
  if (hasResend) providers.push({ name: "resend", send: () => sendViaResend(payload) });

  const failures: string[] = [];

  for (const provider of providers) {
    try {
      await provider.send();
      return NextResponse.json({ ok: true, delivered: true });
    } catch (error) {
      console.error(`[contact] ${provider.name} send failed`, error);
      failures.push(`${provider.name}:${failureCode(error)}`);
    }
  }

  return NextResponse.json({ error: "provider_error", failures }, { status: 502 });
}

function failureCode(error: unknown) {
  if (error && typeof error === "object" && "code" in error) {
    const code = String((error as { code?: unknown }).code ?? "");
    if (code) return code.slice(0, 40);
  }
  if (error instanceof Error) return error.name.slice(0, 40);
  return "unknown";
}
