"use client";

import { createContext, useCallback, useContext, useMemo, useSyncExternalStore } from "react";
import { copy, type Locale } from "@/lib/content";

type SiteContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (typeof copy)["fr"];
};

const SiteContext = createContext<SiteContextValue | null>(null);

const STORAGE_KEY = "mr-locale";
const CHANGE_EVENT = "mr:locale-change";

function subscribe(onStoreChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onStoreChange);
  return () => window.removeEventListener(CHANGE_EVENT, onStoreChange);
}

function getSnapshot(): Locale {
  return document.documentElement.lang === "en" ? "en" : "fr";
}

function getServerSnapshot(): Locale {
  return "fr";
}

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLocale = useCallback((next: Locale) => {
    document.documentElement.lang = next;
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
    window.dispatchEvent(new Event(CHANGE_EVENT));
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(getSnapshot() === "fr" ? "en" : "fr");
  }, [setLocale]);

  const t = copy[locale];
  const value = useMemo<SiteContextValue>(
    () => ({ locale, setLocale, toggleLocale, t }),
    [locale, setLocale, toggleLocale, t],
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used inside <SiteProvider>");
  return ctx;
}
