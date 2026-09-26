"use client";

import { useEffect, useState } from "react";
import { useSite } from "@/components/providers";
import { sectionIds } from "@/lib/content";
import {
  ArrowRightIcon,
  CloseIcon,
  GlobeIcon,
  MenuIcon,
  MoonIcon,
  SunIcon,
} from "@/components/ui";

function ThemeToggle() {
  return (
    <button
      type="button"
      onClick={() => {
        const root = document.documentElement;
        const next = root.dataset.theme === "dark" ? "light" : "dark";
        root.dataset.theme = next;
        try {
          localStorage.setItem("mr-theme", next);
        } catch {}
      }}
      aria-label="Toggle colour theme"

      className="btn btn-icon btn-lift btn-sheen group size-9 border border-line bg-surface text-muted hover:border-[var(--nav-ring)] hover:bg-[var(--nav-ring)] hover:text-bg"
    >
            <SunIcon className="hidden size-4.5 dark:block group-hover:animate-[spin-y_0.5s_ease-out]" />
      <MoonIcon className="size-4.5 dark:hidden group-hover:animate-[spin-y_reverse_0.5s_ease-out]" />
    </button>
  );
}

function LanguageToggle({ onNavigate }: { onNavigate: () => void }) {
  const { locale, toggleLocale } = useSite();
  const next = locale === "fr" ? "EN" : "FR";

  return (
    <button
      type="button"
      onClick={() => {
        toggleLocale();
        onNavigate();
      }}
      aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
      className="btn btn-lift btn-sheen group h-9 border border-line bg-surface px-3.5 text-muted hover:border-[var(--nav-line)] hover:bg-[var(--nav-hover)] hover:text-fg"
    >
      <GlobeIcon className="size-4.5 transition-transform duration-500 group-hover:rotate-[120deg]" />
      <span className="text-xs font-semibold tracking-widest">{next}</span>
    </button>
  );
}

export function Nav() {
  const { t, locale } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = t.nav.links.map((l) => sectionIds[locale][l.id as keyof typeof sectionIds.fr]);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [t, locale]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
            <header
        className={`site-header fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "is-scrolled border-b border-line xl:glass" : "border-b border-transparent"
        }`}
      >
        <nav
          className={`glass mx-auto flex items-center justify-between gap-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] xl:!bg-transparent xl:backdrop-filter-none xl:h-16 xl:max-w-[110rem] xl:px-10 ${
            scrolled
              ? "mt-2.5 h-14 w-[calc(100%-1.5rem)] rounded-2xl border border-line px-3 shadow-lg shadow-black/10 xl:mt-0 xl:h-16 xl:w-full xl:rounded-none xl:border-0 xl:px-10 xl:shadow-none"
              : "mt-2.5 h-14 w-[calc(100%-1.5rem)] rounded-2xl border border-line/60 px-3 xl:mt-0 xl:h-16 xl:w-full xl:rounded-none xl:border-0 xl:px-10"
          }`}
        >
          <a
            href="#top"
            className="shrink-0 font-display text-base font-semibold tracking-tight sm:text-lg"
          >
            Mandimbisoa&nbsp;Randy
          </a>

          <ul className="hidden items-center gap-0.5 xl:flex">
            {t.nav.links.map((link) => {
              const id = sectionIds[locale][link.id as keyof typeof sectionIds.fr];
              const isActive = active === id;
              return (
                <li key={link.id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "true" : undefined}

                    className={`group relative block overflow-hidden rounded-lg px-2.5 py-2 text-[0.95rem] whitespace-nowrap transition-all duration-300 ease-out ${
                      isActive
                        ? "text-fg"
                        : "text-muted hover:scale-[1.06] hover:text-fg active:scale-95"
                    }`}
                  >
                                        <span
                      aria-hidden
                      className="absolute inset-0 -z-10 origin-bottom scale-y-0 rounded-lg bg-[var(--nav-hover)] transition-transform duration-300 ease-out group-hover:scale-y-100"
                    />
                    <span className="relative transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
                      {link.label}
                    </span>
                    <span
                      aria-hidden
                      className="absolute inset-x-2.5 bottom-1 h-px origin-left scale-x-0 bg-[var(--nav-line)] transition-transform duration-300 ease-out group-hover:scale-x-100"
                    />
                    {isActive ? (
                      <span
                        aria-hidden
                        className="absolute inset-x-2.5 -bottom-0.5 h-px bg-[var(--nav-line)]"
                      />
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <LanguageToggle onNavigate={() => setOpen(false)} />
            <ThemeToggle />
            <a
              href={`#${sectionIds[locale].contact}`}
              className="btn btn-lift btn-sheen hidden whitespace-nowrap bg-[#17240a] px-5 py-2.5 text-[0.95rem] font-medium text-white hover:shadow-lg hover:shadow-black/20 dark:bg-white dark:text-[#14190f] md:inline-flex"
            >
              {t.nav.cta}
              <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? t.nav.close : t.nav.menu}
              className="btn btn-icon btn-lift group size-10 border border-line bg-surface text-fg hover:border-brand xl:hidden"
            >
                            <CloseIcon
                className={`absolute size-5 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  open ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-50 opacity-0"
                }`}
              />
              <MenuIcon
                className={`size-5 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  open ? "-rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

            <div
        className={`fixed inset-0 z-40 xl:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/45 backdrop-blur-md transition-opacity duration-400 ease-out ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          className={`glass absolute inset-x-3 top-[4.5rem] rounded-[1.75rem] border border-line p-2.5 shadow-2xl shadow-black/20 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            open
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-4 scale-95 opacity-0"
          }`}
        >
          <ul className="flex flex-col">
            {t.nav.links.map((link, i) => {
              const id = sectionIds[locale][link.id as keyof typeof sectionIds.fr];
              return (
                <li key={link.id}>
                  <a
                    href={`#${id}`}
                    onClick={() => setOpen(false)}

                    style={{ transitionDelay: open ? `${60 + i * 45}ms` : "0ms" }}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg text-fg/90 transition-all duration-300 ease-out hover:bg-fg/5 ${
                      open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                    }`}
                  >
                    {link.label}
                    <ArrowRightIcon className="size-4 text-muted" />
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href={`#${sectionIds[locale].contact}`}
            onClick={() => setOpen(false)}
            style={{ transitionDelay: open ? "240ms" : "0ms" }}
            className={`btn btn-lift mt-2 w-full bg-fg px-5 py-3.5 text-base font-medium text-bg transition-all duration-400 ease-out ${
              open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
            }`}
          >
            {t.nav.cta}
            <ArrowRightIcon className="size-4" />
          </a>
        </div>
      </div>
    </>
  );
}
