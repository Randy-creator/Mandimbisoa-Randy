"use client";

import { useSite } from "@/components/providers";
import { sectionIds } from "@/lib/content";
import { Reveal } from "@/components/ui";
import { Section } from "@/components/layout";
import {
  BriefcaseIcon,
  CheckIcon,
  GraduationIcon,
  TrophyIcon,
} from "@/components/ui";

const FEATURED = 2;

function bobDelay(i: number) {
  return `${-(i % 4) * 2.1}s`;
}

export function Experience() {
  const { t, locale } = useSite();
  const items = t.experience.items;
  const featured = items.slice(0, FEATURED);
  const rest = items.slice(FEATURED);

  return (
    <Section
      id={sectionIds[locale].experience}
      eyebrow={t.experience.eyebrow}
      title={t.experience.title}
      subtitle={t.experience.subtitle}
      garden="right"
    >
            <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-12">
        <Reveal from="left" className="min-w-0">
          <h3 className="mb-8 inline-flex items-center gap-2.5 text-sm font-semibold tracking-[0.16em] text-accent uppercase">
            <GraduationIcon className="size-4.5" />
            {t.education.eyebrow}
          </h3>

          <ol className="relative space-y-4">
                        <div
              aria-hidden
              className="absolute top-2 bottom-2 left-[1.1875rem] w-px bg-gradient-to-b from-accent/60 via-accent-2/30 to-transparent"
            />

            {t.education.items.map((item, i) => (
              <Reveal
                as="li"
                key={item.degree}
                from="left"
                delay={140 + i * 120}
                className="relative pl-14"
              >
                <span className="absolute top-4 left-0 grid size-10 animate-bob-tiny place-items-center rounded-full border border-line bg-surface-2 text-accent" style={{ animationDelay: bobDelay(i) }}>
                  <GraduationIcon className="size-4" />
                </span>

                <div
                  className="animate-bob-tiny"
                  style={{ animationDelay: bobDelay(i) }}
                >
                  <article className="card p-5 transition duration-300 hover:-translate-y-0.5 hover:border-line-strong sm:p-6">
                    <h4 className="font-display text-lg font-semibold text-balance sm:text-xl">
                      {item.degree}
                    </h4>
                    <p className="mt-1.5 text-base text-fg/80">{item.school}</p>
                    <p className="mt-2 text-sm font-medium text-accent">{item.period}</p>
                    <p className="mt-2.5 text-base leading-relaxed text-muted">{item.detail}</p>
                  </article>
                </div>
              </Reveal>
            ))}
          </ol>
        </Reveal>

        <Reveal from="right" delay={80} className="min-w-0">
          <h3 className="mb-8 inline-flex items-center gap-2.5 text-sm font-semibold tracking-[0.16em] text-accent uppercase">
            <BriefcaseIcon className="size-4.5" />
            {t.experience.eyebrow}
          </h3>

          <ol className="relative space-y-4">
            <div
              aria-hidden
              className="absolute top-2 bottom-2 left-[0.9375rem] w-px bg-gradient-to-b from-accent/60 via-accent-2/30 to-transparent sm:left-[1.1875rem]"
            />

            {featured.map((item, i) => (
              <Reveal
                as="li"
                key={`${item.org}-${i}`}
                from="right"
                delay={200 + i * 130}
                className="relative pl-12 sm:pl-16"
              >
                <span
                  className={`absolute top-1.5 left-0 grid size-8 animate-bob-tiny place-items-center rounded-full border sm:size-10 ${
                    item.badge
                      ? "border-accent/40 bg-accent/10 text-accent"
                      : "border-line bg-surface-2 text-muted"
                  }`}
                  style={{ animationDelay: bobDelay(i) }}
                >
                  {item.badge ? (
                    <TrophyIcon className="size-4" />
                  ) : (
                    <BriefcaseIcon className="size-4" />
                  )}
                </span>

                <div
                  className="animate-bob-tiny"
                  style={{ animationDelay: bobDelay(i) }}
                >
                  <article className="card p-5 transition duration-300 hover:-translate-y-0.5 hover:border-line-strong sm:p-6">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      <h4 className="font-display text-lg font-semibold text-balance sm:text-xl">
                        {item.role}
                      </h4>
                      {item.badge ? (
                        <span className="rounded-full bg-accent px-2.5 py-0.5 text-[0.68rem] font-bold text-white">
                          {item.badge}
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
                      <span className="font-medium text-accent">{item.org}</span>
                      <span aria-hidden className="text-line-strong">
                        ·
                      </span>
                      <span>{item.location}</span>
                      <span aria-hidden className="text-line-strong">
                        ·
                      </span>
                      <span className="text-sm">{item.period}</span>
                    </p>

                    <ul className="mt-4 space-y-2.5">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-base leading-relaxed text-muted"
                        >
                          <CheckIcon className="mt-1 size-4 shrink-0 text-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-lg border border-line bg-bg-alt/60 px-3 py-1.5 text-sm text-muted"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </Reveal>
            ))}
          </ol>
        </Reveal>
      </div>

            {rest.length ? (
        <div className="mt-14">
          <h3 className="mb-8 inline-flex items-center gap-2.5 text-sm font-semibold tracking-[0.16em] text-accent uppercase">
            <SparkRailIcon />
            {t.experience.more}
          </h3>

          <ol className="relative">
            <div
              aria-hidden
              className="absolute top-2 bottom-2 left-[0.9375rem] w-px bg-gradient-to-b from-accent/60 via-accent-2/30 to-transparent sm:left-[1.1875rem]"
            />

            {rest.map((item, i) => (
              <Reveal
                as="li"
                key={`${item.org}-rest-${i}`}
                from="left"
                delay={i * 110}
                className="relative pl-12 sm:pl-16"
              >
                <span
                  className={`absolute top-1.5 left-0 grid size-8 animate-bob-tiny place-items-center rounded-full border sm:size-10 ${
                    item.badge
                      ? "border-accent/40 bg-accent/10 text-accent"
                      : "border-line bg-surface-2 text-muted"
                  }`}
                  style={{ animationDelay: bobDelay(i) }}
                >
                  {item.badge ? (
                    <TrophyIcon className="size-4" />
                  ) : (
                    <BriefcaseIcon className="size-4" />
                  )}
                </span>

                <div
                  className="animate-bob-tiny"
                  style={{ animationDelay: bobDelay(i) }}
                >
                  <article className="card group mb-6 p-6 transition duration-300 hover:border-line-strong hover:shadow-xl hover:shadow-black/5 sm:p-8">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                      <h4 className="font-display text-xl font-semibold text-balance sm:text-2xl">
                        {item.role}
                      </h4>
                      {item.badge ? (
                        <span className="rounded-full bg-accent px-2.5 py-0.5 text-[0.68rem] font-bold text-white">
                          {item.badge}
                        </span>
                      ) : null}
                    </div>

                    <p className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-base text-muted">
                      <span className="font-medium text-accent">{item.org}</span>
                      <span aria-hidden className="text-line-strong">
                        ·
                      </span>
                      <span>{item.location}</span>
                      <span aria-hidden className="text-line-strong">
                        ·
                      </span>
                      <span className="text-sm">{item.period}</span>
                    </p>

                    <ul className="mt-5 space-y-3">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3 text-lg leading-relaxed text-muted">
                          <CheckIcon className="mt-1.5 size-4.5 shrink-0 text-accent" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-lg border border-line bg-bg-alt/60 px-3 py-1.5 text-sm text-muted"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </article>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      ) : null}
    </Section>
  );
}

function SparkRailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-4.5"
      aria-hidden
    >
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M6.3 17.7l2.1-2.1M15.6 8.4l2.1-2.1" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
