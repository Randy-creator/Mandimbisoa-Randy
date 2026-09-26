"use client";

import { useSite } from "@/components/providers";
import { marquee, sectionIds } from "@/lib/content";
import { Reveal } from "@/components/ui";
import { Section } from "@/components/layout";
import {
  CloudIcon,
  CodeIcon,
  MonitorIcon,
  SparkIcon,
  WrenchIcon,
  type IconProps,
} from "@/components/ui";

const groupIcons: Array<(props: IconProps) => React.ReactNode> = [
  CodeIcon,
  SparkIcon,
  CloudIcon,
  WrenchIcon,
  MonitorIcon,
];

function Marquee() {
  const row = [...marquee, ...marquee];
  return (
    <div className="marquee-fade relative mt-16 flex overflow-hidden py-1" aria-hidden>
      <div className="marquee-track flex w-max shrink-0 items-center gap-3 pr-3">
        {row.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="whitespace-nowrap rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-muted transition-colors duration-500 hover:border-brand hover:text-fg"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  const { t, locale } = useSite();

  return (
    <Section
      id={sectionIds[locale].skills}
      eyebrow={t.skills.eyebrow}
      title={t.skills.title}
      subtitle={t.skills.subtitle}
      garden="left"
      rule
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {t.skills.groups.map((group, i) => {
          const Icon = groupIcons[i] ?? CodeIcon;
          return (
            <Reveal key={group.title} from="up" delay={i * 80} className="h-full">
              <article className="card group relative h-full overflow-hidden p-6 transition-[transform,border-color,box-shadow] duration-500 ease-out hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-lg hover:shadow-black/5">
                                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 [background:radial-gradient(340px_circle_at_12%_0%,color-mix(in_oklab,var(--brand)_30%,transparent),transparent_62%)]"
                />

                                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand via-accent to-transparent transition-transform duration-500 ease-out group-hover:scale-x-100"
                />

                <div className="relative">
                                    <span className="absolute top-0 right-0 font-mono text-xs text-line-strong transition-all duration-500 ease-out group-hover:translate-x-0.5 group-hover:text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-xl bg-brand/12 text-accent transition-all duration-500 ease-out group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-brand group-hover:text-bg">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold transition-colors duration-500 group-hover:text-accent">
                      {group.title}
                    </h3>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item}>
                        <span className="group/t inline-flex items-center gap-2 rounded-xl border border-line bg-surface px-2.5 py-1.5 text-sm whitespace-nowrap text-muted transition-colors duration-300 hover:border-brand/50 hover:text-fg">
                          <span
                            aria-hidden
                            className="size-2 rounded-[3px] bg-brand/50 transition-colors duration-300 group-hover/t:bg-brand"
                          />
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          );
        })}

                <Reveal from="scale" delay={400} className="h-full">
          <article className="ring-gradient group relative flex h-full flex-col justify-center gap-3 overflow-hidden p-6 transition-transform duration-500 ease-out hover:-translate-y-1.5">
            <span
              aria-hidden
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 [background:radial-gradient(340px_circle_at_12%_0%,color-mix(in_oklab,var(--brand)_30%,transparent),transparent_62%)]"
            />

            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.18em] text-accent uppercase">
                {t.skills.summary}
              </p>
              <p className="mt-1 font-display text-lg font-semibold text-balance transition-colors duration-500 group-hover:text-accent">
                {t.hero.role}
              </p>
              <p className="mt-2 text-base leading-relaxed text-muted">
                {t.skills.roles.map((role, idx, arr) => (
                  <span key={role}>
                    <span className="transition-colors duration-500 group-hover:text-fg">
                      {role}
                    </span>
                    {idx < arr.length - 1 ? (
                      <span className="text-brand">{" · "}</span>
                    ) : null}
                  </span>
                ))}
              </p>
            </div>
          </article>
        </Reveal>
      </div>

      <Reveal from="up" delay={120}>
        <Marquee />
      </Reveal>
    </Section>
  );
}
