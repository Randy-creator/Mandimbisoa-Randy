"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

export type RevealDirection = "up" | "down" | "left" | "right" | "scale" | "none";

type RevealProps = {
  children: ReactNode;

  delay?: number;
  className?: string;
  as?: ElementType;

  threshold?: number;

  from?: RevealDirection;
};

const TRAVEL: Record<RevealDirection, string> = {
  up: "translate3d(0, 26px, 0)",
  down: "translate3d(0, -26px, 0)",
  left: "translate3d(-30px, 0, 0)",
  right: "translate3d(30px, 0, 0)",
  scale: "translate3d(0, 0, 0) scale(0.94)",
  none: "none",
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  threshold = 0.15,
  from = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{
        ...(delay ? { transitionDelay: `${delay}ms` } : null),

        ...(visible ? null : ({ "--reveal-from": TRAVEL[from] } as React.CSSProperties)),
      }}
    >
      {children}
    </Tag>
  );
}
