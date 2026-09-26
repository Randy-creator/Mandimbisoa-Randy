"use client";

import type { ComponentType } from "react";
import { useSite } from "@/components/providers";
import { profile, sectionIds, socials } from "@/lib/content";
import { ContactForm } from "./contact-form";
import { Reveal } from "@/components/ui";
import { Blossom, Sprig, Vine } from "@/components/decor";
import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  PinIcon,
  type IconProps,
} from "@/components/ui";

const channels = [
  { key: "email", icon: MailIcon, value: profile.email, href: `mailto:${profile.email}` },
  { key: "phone", icon: PhoneIcon, value: profile.phone, href: profile.phoneHref },
  { key: "location", icon: PinIcon, value: profile.location, href: null },
] as const;

const labelKeys = { email: "emailLabel", phone: "phoneLabel", location: "locationLabel" } as const;

const socialList: { name: string; href: string; icon: ComponentType<IconProps> }[] = [
  { name: "GitHub", href: socials.github, icon: GithubIcon },
  { name: "LinkedIn", href: socials.linkedin, icon: LinkedinIcon },
];

export function Contact() {
  const { t, locale } = useSite();

  return (
    <section id={sectionIds[locale].contact} className="relative scroll-mt-24 py-20 sm:py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="wash animate-drift -bottom-56 left-1/2 size-[40rem] -translate-x-1/2 bg-[var(--glow-2)]" />
        <Vine
          color="var(--vine)"
          opacity={0.13}
          className="absolute -top-24 -left-14 h-[38rem] w-auto rotate-[8deg]"
          float
          delay={1}
        />
        <Sprig
          color="var(--vine)"
          opacity={0.14}
          className="absolute -right-6 bottom-16 h-28 w-auto rotate-[168deg]"
          float
          delay={4}
        />

                <Blossom
          opacity={0.7}
          rotate={18}
          className="absolute bottom-3 left-3 h-9 w-auto sm:bottom-9 sm:left-6 sm:h-11"
          float
          delay={2}
        />
      </div>

      <div className="mx-auto w-full max-w-[110rem] px-6 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:p-12 lg:p-14">
          <div aria-hidden className="bg-grain pointer-events-none absolute inset-0 opacity-[0.03]" />
          <div
            aria-hidden
            className="wash -top-40 -left-24 size-[26rem] bg-[var(--wash-1)] opacity-70"
          />

          <div className="relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-20">
                        <Reveal from="left" className="min-w-0">
              <p className="eyebrow-underline mb-3 inline-block text-xs font-semibold tracking-[0.22em] text-accent uppercase">
                {t.contact.eyebrow}
              </p>
              <h2 className="text-3xl font-semibold text-balance sm:text-4xl md:text-[2.6rem] md:leading-[1.1]">
                {t.contact.title}
              </h2>
              <p className="mt-4 max-w-md text-lg leading-relaxed text-muted">
                {t.contact.subtitle}
              </p>

              <div className="mt-9 space-y-3.5">
                {channels.map(({ key, icon: Icon, value, href }) => {
                  const inner = (
                    <>
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-line bg-bg-alt/60 text-accent transition group-hover:border-accent/40">
                        <Icon className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                          {t.contact[labelKeys[key]]}
                        </span>
                        <span className="block truncate text-base text-fg">{value}</span>
                      </span>
                    </>
                  );

                  return href ? (
                    <a
                      key={key}
                      href={href}
                      className="btn btn-lift !rounded-xl group w-full justify-start border border-line bg-surface px-5 py-4 hover:border-line-strong hover:bg-surface-2"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div
                      key={key}
                      className="btn !rounded-xl group w-full justify-start border border-line bg-surface px-5 py-4"
                    >
                      {inner}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6">
                <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-muted uppercase">
                  {t.contact.socialsTitle}
                </p>
                <ul className="flex flex-wrap gap-2.5">
                  {socialList.map(({ name, href, icon: Icon }) => (
                    <li key={name}>
                      {href ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="btn btn-lift !rounded-xl border border-line bg-surface px-5 py-3 text-base text-muted hover:border-brand hover:text-fg hover:shadow-md hover:shadow-black/5"
                        >
                          <Icon className="size-4.5 transition-transform duration-300 group-hover:scale-110" />
                          {name}
                        </a>
                      ) : (

                        <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-xl border border-dashed border-line px-5 py-3 text-base text-muted/60">
                          <Icon className="size-4.5" />
                          {name}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

                        <Reveal from="right" delay={140} className="min-w-0">
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
