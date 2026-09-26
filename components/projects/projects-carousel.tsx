"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useSite } from "@/components/providers";
import { Reveal } from "@/components/ui";
import { ProjectArt } from "./project-art";
import {
  CheckIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@/components/ui";

const MOBILE_QUERY = "(max-width: 639px)";

export function ProjectsCarousel() {
  const { t } = useSite();
  const items = t.projects.items;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const slideRefs = useRef<Array<HTMLLIElement | null>>([]);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const go = useCallback(
    (next: number) => {
      const wrapped = ((next % items.length) + items.length) % items.length;
      setIndex(wrapped);
      if (mqMatches()) {
        slideRefs.current[wrapped]?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    },
    [items.length],
  );

  function mqMatches() {
    return typeof window !== "undefined" && window.matchMedia(MOBILE_QUERY).matches;
  }

  const step = useCallback(
    (delta: number) => {
      setIndex((current) => {
        const wrapped = (current + delta + items.length) % items.length;
        if (mqMatches()) {
          slideRefs.current[wrapped]?.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
        return wrapped;
      });
    },
    [items.length],
  );

  const next = useCallback(() => step(1), [step]);
  const prev = useCallback(() => step(-1), [step]);

  const onTrackScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const centre = track.scrollLeft + track.clientWidth / 2;
    let closest = 0;
    let best = Infinity;
    slideRefs.current.forEach((slide, i) => {
      if (!slide) return;
      const mid = slide.offsetLeft + slide.clientWidth / 2;
      const distance = Math.abs(mid - centre);
      if (distance < best) {
        best = distance;
        closest = i;
      }
    });
    setIndex(closest);
  }, []);

  useEffect(() => {
    if (paused || isMobile) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") {
        setIndex((i) => (i + 1) % items.length);
      }
    }, 7000);

    return () => window.clearInterval(timer);
  }, [paused, isMobile, items.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <Reveal from="scale">
      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocusCapture={() => setPaused(true)}
        onBlurCapture={() => setPaused(false)}
      >
                <div
          className="overflow-hidden rounded-3xl"
          role="group"
          aria-roledescription="carousel"
          aria-label={t.projects.title}
        >
          <ul
            ref={trackRef}
            onScroll={isMobile ? onTrackScroll : undefined}
            className={
              isMobile
                ? "flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                : "flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
            }
            style={isMobile ? undefined : { transform: `translateX(-${index * 100}%)` }}
            onTouchStart={(e) => {
              touchStart.current = e.touches[0]?.clientX ?? null;
            }}
            onTouchEnd={(e) => {

              if (isMobile) return;
              const start = touchStart.current;
              const end = e.changedTouches[0]?.clientX;
              touchStart.current = null;
              if (start == null || end == null) return;
              const delta = start - end;
              if (Math.abs(delta) > 45) (delta > 0 ? next : prev)();
            }}
          >
            {items.map((project, i) => (
              <li
                key={project.title}
                ref={(el) => {
                  slideRefs.current[i] = el;
                }}
                className={
                  isMobile
                    ? "w-[86%] shrink-0 snap-center px-0.5 sm:w-full sm:px-0"
                    : "w-full shrink-0"
                }
                aria-hidden={i !== index}
                aria-roledescription="slide"
                aria-label={`${i + 1} / ${items.length}`}
              >
                <article className="card relative m-1 overflow-hidden">
                                    <div
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-brand/60 via-brand/25 to-transparent"
                  />

                  <div className="p-5 sm:p-10">
                    <div className="relative grid gap-8 sm:gap-10 lg:grid-cols-[1.5fr_0.5fr] lg:gap-16 xl:gap-20">
                      <div>
                        <p className="text-sm font-semibold tracking-[0.14em] text-accent uppercase">
                          {project.context}
                        </p>

                        <h3 className="mt-4 font-display text-xl leading-tight font-semibold text-balance sm:text-4xl">
                          {project.title}
                        </h3>

                        <p className="mt-4 max-w-2xl border-l-2 border-brand/40 pl-4 text-base leading-relaxed text-muted sm:mt-5 sm:pl-5 sm:text-lg">
                          {project.description}
                        </p>

                        <ul className="mt-6 space-y-3 sm:mt-8 sm:space-y-3.5">
                          {project.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex gap-3 text-[0.95rem] leading-relaxed text-muted sm:text-base"
                            >
                              <CheckIcon className="mt-1 size-4 shrink-0 text-accent sm:size-4.5" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        <ul className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-2 border-t border-line pt-5 text-sm text-muted sm:mt-8 sm:pt-6">
                          {project.tags.map((tag, tagIdx) => (
                            <li key={tag} className="flex items-center gap-2.5">
                              {tagIdx > 0 ? (
                                <span aria-hidden className="text-brand">
                                  /
                                </span>
                              ) : null}
                              <span>{tag}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <aside className="lg:border-l lg:border-line lg:pl-10">
                                                <ProjectArt
                          index={i}
                          label={`${project.title} — ${t.projects.preview}`}
                        />

                        <p className="mt-6 text-xs font-semibold tracking-[0.2em] text-muted uppercase sm:mt-8">
                          {t.projects.counter} {items.length}
                        </p>
                        <p className="mt-2 font-display text-5xl font-bold text-gradient sm:text-6xl">
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        {project.metric ? (
                          <div className="mt-6 border-t border-line pt-5 sm:mt-8 sm:pt-6">
                            <p className="font-display text-2xl font-bold text-accent sm:text-3xl">
                              {project.metric.value}
                            </p>
                            <p className="mt-1 text-sm leading-snug text-muted">
                              {project.metric.label}
                            </p>
                          </div>
                        ) : null}
                      </aside>
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>

                <div className="mt-6 flex flex-col gap-5 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
                    <ul aria-hidden className="flex items-center gap-2 sm:hidden">
            {items.map((item, i) => (
              <li key={item.title} className="flex-1">
                <button
                  type="button"
                  onClick={() => go(i)}
                  tabIndex={-1}
                  aria-label={`${t.projects.goTo} ${i + 1}`}
                  className="block h-1.5 w-full rounded-full bg-line-strong"
                >
                  <span
                    className="block h-full rounded-full bg-brand transition-[width] duration-500 ease-out"
                    style={{ width: i <= index ? "100%" : "0%" }}
                  />
                </button>
              </li>
            ))}
          </ul>

          <ul className="hidden min-w-0 flex-wrap items-center gap-x-1 gap-y-2 sm:flex">
            {items.map((item, i) => (
              <li key={item.title}>
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-current={i === index}
                  className={`btn btn-sheen group !rounded-lg max-w-full px-2.5 py-1.5 text-left ${
                    i === index ? "bg-brand/10" : "hover:bg-surface"
                  }`}
                >
                  <span
                    className={`font-mono text-xs transition-colors ${
                      i === index ? "text-accent" : "text-line-strong group-hover:text-muted"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`truncate text-sm transition-colors ${
                      i === index ? "font-medium text-fg" : "text-muted group-hover:text-fg"
                    }`}
                  >
                    {item.title}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="flex shrink-0 items-center justify-between gap-3 sm:justify-end sm:gap-2.5">
            <p aria-live="polite" className="text-sm text-muted">
              <span className="text-fg">{String(index + 1).padStart(2, "0")}</span>
              <span className="mx-1">/</span>
              {String(items.length).padStart(2, "0")}
            </p>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={prev}
                aria-label={t.projects.prev}
                className="btn btn-icon btn-lift btn-sheen size-11 border border-line bg-surface text-fg hover:border-brand hover:shadow-md hover:shadow-black/10 sm:size-10"
              >
                <ChevronLeftIcon className="size-4.5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label={t.projects.next}
                className="btn btn-icon btn-lift btn-sheen size-11 border border-line bg-surface text-fg hover:border-brand hover:shadow-md hover:shadow-black/10 sm:size-10"
              >
                <ChevronRightIcon className="size-4.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
