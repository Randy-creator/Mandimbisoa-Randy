"use client";

import { useSite } from "@/components/providers";
import { profile, sectionIds, socials } from "@/lib/content";
import { ArrowUpIcon, GithubIcon, LinkedinIcon, MailIcon, PinIcon } from "@/components/ui";
import { Vine } from "@/components/decor";

export function Footer() {
  const { t, locale } = useSite();
  const year = new Date().getFullYear();

  const quickLinks = t.nav.links
    .filter((l) => l.id !== "contact")
    .map((l) => ({

      key: l.id,
      label: l.label,
      href: `#${sectionIds[locale][l.id as keyof typeof sectionIds.fr]}`,
    }));

  return (
    <footer className="relative overflow-hidden bg-hero text-hero-fg">
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-tr from-white/30 via-white/8 to-transparent dark:from-white/[0.07] dark:via-white/[0.02]" />
        <div className="bg-grain absolute inset-0 opacity-[0.05] mix-blend-overlay" />
        <div className="wash animate-float-slow -bottom-48 left-1/4 size-[34rem] bg-white/20" />
        <div
          className="wash animate-drift -right-40 -top-40 size-[30rem] bg-black/10"
          style={{ animationDelay: "-9s" }}
        />

                <Vine
          color="var(--vine-on-band)"
          opacity={0.2}
          className="absolute -bottom-24 -left-14 h-[30rem] w-auto -rotate-12"
          float
          delay={2}
        />
        <Vine
          color="var(--vine-on-band)"
          opacity={0.16}
          className="absolute -top-24 -right-12 h-[26rem] w-auto rotate-[166deg]"
          float
          delay={5}
        />
      </div>

      <div className="relative mx-auto w-full max-w-[110rem] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-10">
                    <div>
            <p className="font-display text-lg font-semibold tracking-tight">
              Mandimbisoa&nbsp;Randy
            </p>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-hero-muted">
              {t.contact.note}
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-5 inline-flex items-center gap-2 text-base text-hero-fg transition hover:opacity-75"
            >
              <MailIcon className="size-4.5" />
              {profile.email}
            </a>
          </div>

                    <nav aria-label={t.footer.quickLinks}>
            <h2 className="text-sm font-semibold tracking-[0.16em] text-hero-fg uppercase">
              {t.footer.quickLinks}
            </h2>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <a
                    href={link.href}
                    className="inline-block text-base text-hero-muted transition hover:translate-x-1 hover:text-hero-fg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={profile.cv.href}
                  download={profile.cv.filename}
                  className="inline-block text-base text-hero-muted transition hover:translate-x-1 hover:text-hero-fg"
                >
                  {t.cv.cta}
                </a>
              </li>
            </ul>
          </nav>

                    <div>
            <h2 className="text-sm font-semibold tracking-[0.16em] text-hero-fg uppercase">
              {t.contact.socialsTitle}
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {socials.github ? (
                <li>
                  <a
                    href={socials.github}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2.5 text-base text-hero-muted transition hover:text-hero-fg"
                  >
                    <GithubIcon className="size-4.5 shrink-0" />
                    GitHub
                  </a>
                </li>
              ) : (
                <li className="inline-flex items-center gap-2.5 text-base text-hero-fg/45">
                  <GithubIcon className="size-4.5 shrink-0" />
                  GitHub
                </li>
              )}
              {socials.linkedin ? (
                <li>
                  <a
                    href={socials.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2.5 text-base text-hero-muted transition hover:text-hero-fg"
                  >
                    <LinkedinIcon className="size-4.5 shrink-0" />
                    LinkedIn
                  </a>
                </li>
              ) : (
                <li className="inline-flex items-center gap-2.5 text-base text-hero-fg/45">
                  <LinkedinIcon className="size-4.5 shrink-0" />
                  LinkedIn
                </li>
              )}
              <li className="inline-flex items-center gap-2.5 text-base text-hero-muted">
                <PinIcon className="size-4.5 shrink-0" />
                {profile.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-6 border-t border-hero-line pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-hero-muted">
            © {year} {profile.fullName}. {t.footer.rights}
          </p>

          <p className="text-sm text-hero-fg/60">{t.footer.builtWith}</p>

          <a
            href="#top"
            className="btn btn-lift btn-sheen whitespace-nowrap border border-hero-line px-4 py-2 text-sm text-hero-muted hover:border-hero-fg hover:text-hero-fg"
          >
            {t.footer.backToTop}
            <ArrowUpIcon className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
