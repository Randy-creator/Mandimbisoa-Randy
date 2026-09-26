"use client";

import { useState, type FormEvent } from "react";
import { useSite } from "@/components/providers";
import { profile } from "@/lib/content";
import { CheckIcon, MailIcon, SendIcon } from "@/components/ui";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-xl border border-line bg-surface-2/70 px-4 py-3.5 text-base text-fg transition outline-none placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/25";

export function ContactForm() {
  const { t } = useSite();

  const { form, note } = t.contact;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });

  const update = (key: keyof typeof values) => (value: string) =>
    setValues((prev) => ({ ...prev, [key]: value }));

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!res.ok) {
        const body = (await res.json().catch(() => null)) as { error?: string } | null;
        setError(body?.error ?? "unknown");
        setStatus("error");
        return;
      }

      const body = (await res.json().catch(() => null)) as { delivered?: boolean } | null;
      setStatus("success");
      setValues({ name: "", email: "", subject: "", message: "", website: "" });

      if (body && body.delivered === false) {
        setError("no_provider");
      }
    } catch {
      setError("network");
      setStatus("error");
    }
  }

  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent(
    `[${values.subject || "Hello"}] ${values.name}`,
  )}&body=${encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)}`;

  if (status === "success") {
    return (
      <div className="card flex flex-col items-start gap-4 p-7">
        <span className="grid size-12 place-items-center rounded-2xl bg-accent/15 text-accent">
          <CheckIcon className="size-6" />
        </span>
        <div>
          <p className="font-display text-2xl font-semibold">{form.success}</p>
          <p className="mt-1.5 text-muted">
            {error === "no_provider" ? (
              <>
                {note}{" "}
                <a
                  href={mailtoHref}
                  className="font-medium text-accent underline underline-offset-4 hover:opacity-80"
                >
                  {form.openMail}
                </a>
              </>
            ) : (
              note
            )}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-7 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-base font-medium">
            {form.name} <span className="text-accent">*</span>
          </span>
          <input
            type="text"
            required
            autoComplete="name"
            value={values.name}
            onChange={(e) => update("name")(e.target.value)}
            className={fieldClass}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-base font-medium">
            {form.email} <span className="text-accent">*</span>
          </span>
          <input
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={(e) => update("email")(e.target.value)}
            className={fieldClass}
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-base font-medium">
          {form.subject} <span className="text-accent">*</span>
        </span>
        <input
          type="text"
          required
          value={values.subject}
          onChange={(e) => update("subject")(e.target.value)}
          className={fieldClass}
        />
      </label>

      <label className="mt-5 block">
        <span className="mb-2 block text-base font-medium">
          {form.message} <span className="text-accent">*</span>
        </span>
        <textarea
          required
          rows={5}
          value={values.message}
          onChange={(e) => update("message")(e.target.value)}
          className={`${fieldClass} resize-y`}
        />
      </label>

            <div aria-hidden className="absolute h-0 w-0 overflow-hidden opacity-0">
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(e) => update("website")(e.target.value)}
          />
        </label>
      </div>

      {status === "error" ? (
        <p role="alert" className="mt-4 rounded-xl border border-accent-3/40 bg-accent-3/10 px-4 py-3 text-sm text-fg">
          {form.error}{" "}
          <a
            href={mailtoHref}
            className="font-medium text-accent underline underline-offset-4 hover:opacity-80"
          >
            {form.openMail}
          </a>
        </p>
      ) : null}

      <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3.5">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-lift btn-sheen group justify-center whitespace-nowrap bg-gradient-to-r from-accent to-accent-2 px-7 py-3.5 text-base font-semibold text-white hover:gap-3.5 hover:brightness-110 hover:shadow-xl hover:shadow-[var(--glow-2)] disabled:pointer-events-none disabled:opacity-60 dark:text-[#14190f]"
        >
          {status === "sending" ? form.sending : form.submit}
          {status === "sending" ? (
            <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          ) : (
            <SendIcon className="size-4 transition-transform group-hover:translate-x-0.5" />
          )}
        </button>

        <a
          href={`mailto:${profile.email}`}
          className="btn btn-lift w-full min-w-0 border border-line-strong px-5 py-3.5 text-base font-medium hover:border-accent hover:bg-surface sm:w-auto"
        >
          <MailIcon className="size-4.5 shrink-0" />
          <span className="min-w-0 truncate">{profile.email}</span>
        </a>
      </div>
    </form>
  );
}
