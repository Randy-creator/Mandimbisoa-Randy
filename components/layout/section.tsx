import type { ReactNode } from "react";
import { Garden } from "@/components/decor";
import { Reveal, type RevealDirection } from "@/components/ui";
import { VineRule } from "@/components/decor";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;

  align?: "left" | "center";
  className?: string;

  headingFrom?: RevealDirection;

  band?: boolean;

  garden?: "left" | "right" | "top" | "bottom" | "corners" | "none";

  rule?: boolean;
};

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  align = "left",
  className = "",
  headingFrom = "up",
  band = false,
  garden = "corners",
  rule = false,
}: SectionProps) {
  const centered = align === "center";

  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-20 sm:py-24 ${band ? "bg-hero text-hero-fg" : ""} ${className}`}
    >
      {band ? (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="bg-grain absolute inset-0 opacity-[0.05] mix-blend-overlay" />
          <div className="wash animate-drift -top-56 -left-40 size-[38rem] bg-white/14" />
          <div
            className="wash animate-float-slow -right-48 bottom-0 size-[34rem] bg-black/10"
            style={{ animationDelay: "-8s" }}
          />
        </div>
      ) : null}

      <Garden variant={garden} tone={band ? "band" : "page"} />

      <div className="relative mx-auto w-full max-w-[110rem] px-6 lg:px-10">
        <Reveal
          from={headingFrom}
          className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
        >
          <p
            className={`eyebrow-underline mb-4 inline-block text-sm font-semibold tracking-[0.22em] uppercase ${
              band ? "text-hero-fg" : "text-accent"
            }`}
          >
            {eyebrow}
          </p>
          <h2 className="text-[2rem] font-semibold tracking-[-0.02em] text-balance sm:text-[2.6rem] md:text-[3rem] md:leading-[1.08]">
            {title}
          </h2>
          {subtitle ? (
            <p
              className={`mt-5 text-lg leading-relaxed sm:text-xl ${
                band ? "text-hero-muted" : "text-muted"
              }`}
            >
              {subtitle}
            </p>
          ) : null}
        </Reveal>

        <div className="mt-16">{children}</div>
      </div>

            {rule ? (
        <div aria-hidden className="relative mx-auto mt-10 h-8 w-[calc(100%-3rem)] max-w-[64rem]">
          <VineRule
            color={band ? "var(--vine-on-band)" : "var(--vine)"}
            className="h-full w-full opacity-45"
          />
        </div>
      ) : (
        <div
          aria-hidden
          className={`mx-auto mt-14 h-px w-[calc(100%-3rem)] max-w-[110rem] bg-gradient-to-r from-transparent to-transparent ${
            band ? "via-hero-line" : "via-line"
          }`}
        />
      )}
    </section>
  );
}
