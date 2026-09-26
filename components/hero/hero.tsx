"use client";

import Image from "next/image";
import { useSite } from "@/components/providers";
import { profile, sectionIds, socials } from "@/lib/content";
import { Reveal } from "@/components/ui";
import { Apple, Sprig, Vine } from "@/components/decor";
import {
  ArrowRightIcon,
  DownloadIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  PinIcon,
  SparkIcon,
} from "@/components/ui";

function PortraitArch() {
  return (
    <div className="animate-bob-tilt relative mx-auto w-64 sm:w-80 lg:w-88">
            <div className="aspect-square overflow-hidden rounded-full bg-white">
        <Image
          src="/images/portrait.png"
          alt=""
          width={792}
          height={1200}
          priority

          className="h-full w-full origin-top scale-[1.28] object-contain"
        />
      </div>

            <div
        aria-hidden
        className="pointer-events-none absolute -inset-3 rounded-full border border-hero-line"
      />

            <svg
        aria-hidden
        viewBox="0 0 200 40"
        fill="none"
        className="pointer-events-none absolute -bottom-5 left-1/2 h-9 w-[70%] -translate-x-1/2 text-hero-fg/40"
      >
        <path
          d="M8 32c34-26 74-30 108-16 26 11 50 12 76-4"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export function Hero() {
  const { t, locale } = useSite();

  return (
    <section
      id="top"
      className="relative left-1/2 flex w-screen -translate-x-1/2 min-h-[100svh] flex-col justify-center overflow-hidden bg-hero text-hero-fg"
    >
            <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-linear-to-br from-white/35 via-white/10 to-transparent dark:from-white/[0.08] dark:via-white/[0.02]"
        />
        <div className="bg-grain absolute inset-0 opacity-[0.05] mix-blend-overlay" />
        <div className="wash animate-drift -top-52 -left-40 size-[44rem] bg-white/25" />
        <div
          className="wash animate-float-slow -right-48 bottom-0 size-[38rem] bg-black/12"
          style={{ animationDelay: "-8s" }}
        />
        <div
          className="wash animate-drift top-1/3 left-1/2 size-[30rem] -translate-x-1/2 bg-white/15"
          style={{ animationDelay: "-14s" }}
        />

                <Vine
          color="var(--vine-on-band)"
          opacity={0.3}
          className="absolute -bottom-32 -left-20 h-[40rem] w-auto -rotate-12"
          float
          delay={0}
        />
        <Vine
          color="var(--vine-on-band)"
          opacity={0.22}
          className="absolute -top-28 -right-16 h-[34rem] w-auto rotate-[166deg]"
          float
          delay={3}
        />
        <Sprig
          color="var(--vine-on-band)"
          opacity={0.26}
          className="absolute top-1/2 right-10 h-24 w-auto -rotate-[152deg]"
          float
          delay={5}
        />

                <Apple
          opacity={0.85}
          className="absolute bottom-3 left-3 h-11 w-auto sm:bottom-9 sm:left-6 sm:h-12"
          float
          delay={1}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[110rem] flex-1 flex-col justify-center px-6 pt-28 pb-14 sm:pt-32 lg:px-10">
                <div className="text-center">
          <Reveal from="down">
            <p className="inline-flex items-center gap-3 text-base font-medium text-hero-muted">
              <span className="h-px w-9 bg-hero-line" />
              {t.hero.eyebrow}
              <span className="h-px w-9 bg-hero-line" />
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-[2.6rem] leading-[1.02] font-extrabold tracking-[-0.035em] text-balance sm:text-7xl lg:text-[6.5rem]">
              <span className="text-hero-fg/70">{t.hero.title}</span>{" "}
              {profile.firstName} {profile.lastName}
            </h1>
          </Reveal>

          <Reveal delay={150}>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-balance text-hero-muted sm:text-xl">
              {t.hero.role}
            </p>
          </Reveal>
        </div>

                <div className="mt-14 grid items-center gap-10 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-10 xl:gap-14">
                    <Reveal from="left" className="order-2 lg:order-1">
            <figure
              className="animate-bob mx-auto max-w-2xl text-center lg:ml-auto lg:text-right"
              style={{ animationDelay: "-3s" }}
            >
              <SparkIcon className="mx-auto size-7 text-hero-fg/70 lg:ml-auto" />
              <blockquote className="mt-4 text-xl leading-relaxed text-balance text-hero-fg/90">
                {t.hero.quote}
              </blockquote>
              <figcaption className="mt-3 text-base text-hero-muted">— {t.hero.quoteBy}</figcaption>

              <dl className="mt-8 flex justify-center gap-8 border-t border-hero-line pt-6 lg:justify-end">
                {t.hero.stats.slice(0, 2).map((stat, si) => (
                  <div
                    key={stat.label}
                    className="animate-bob"
                    style={{ animationDelay: `${-1.5 * (si + 1)}s` }}
                  >
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-display text-3xl font-bold">{stat.value}</span>
                      <span className="mt-1 block text-sm text-hero-muted">{stat.label}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </figure>
          </Reveal>

                    <Reveal from="scale" delay={100} className="order-1 lg:order-2">
            <PortraitArch />
          </Reveal>

                    <Reveal from="right" delay={180} className="order-3">
            <div
              className="animate-bob-slow mx-auto max-w-2xl text-center lg:text-left"
              style={{ animationDelay: "-6s" }}
            >
              <p className="text-sm font-semibold tracking-[0.2em] text-hero-muted uppercase">
                {t.hero.socialsTitle}
              </p>

              <ul className="mt-5 flex flex-wrap justify-center gap-2.5 lg:justify-start">
                <li>
                  <a
                    href={`mailto:${profile.email}`}
                    className="btn btn-lift btn-sheen border border-hero-line px-5 py-2.5 text-base text-hero-fg hover:bg-hero-fg hover:text-hero"
                  >
                    <MailIcon className="size-4.5" />
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href={profile.phoneHref}
                    className="btn btn-lift btn-sheen border border-hero-line px-5 py-2.5 text-base text-hero-fg hover:bg-hero-fg hover:text-hero"
                  >
                    <PinIcon className="size-4.5" />
                    {profile.city}
                  </a>
                </li>
                {socials.github ? (
                  <li>
                    <a
                      href={socials.github}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn-lift btn-sheen border border-hero-line px-5 py-2.5 text-base text-hero-fg hover:bg-hero-fg hover:text-hero"
                    >
                      <GithubIcon className="size-4.5" />
                      GitHub
                    </a>
                  </li>
                ) : null}
                {socials.linkedin ? (
                  <li>
                    <a
                      href={socials.linkedin}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn-lift btn-sheen border border-hero-line px-5 py-2.5 text-base text-hero-fg hover:bg-hero-fg hover:text-hero"
                    >
                      <LinkedinIcon className="size-4.5" />
                      LinkedIn
                    </a>
                  </li>
                ) : null}
              </ul>

              <p className="mt-7 text-lg leading-relaxed text-balance text-hero-muted">
                {t.hero.lead}
              </p>
            </div>
          </Reveal>
        </div>

                <Reveal from="up" delay={120} className="mt-14 flex flex-wrap justify-center gap-3.5 lg:mt-20">
          <a
            href={`#${sectionIds[locale].projects}`}
            className="btn btn-lift btn-sheen group bg-[#1b1b1b] px-8 py-4 text-base font-semibold text-white hover:gap-3 hover:bg-black hover:shadow-xl hover:shadow-black/25"
          >
            {t.hero.ctaPrimary}
            <ArrowRightIcon className="size-4.5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href={profile.cv.href}
            download={profile.cv.filename}
            className="btn btn-lift btn-sheen bg-white px-7 py-4 text-base font-semibold text-[#1b1b1b] hover:bg-white/85 hover:shadow-xl hover:shadow-black/15"
          >
            <DownloadIcon className="size-4.5" />
            {t.cv.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
