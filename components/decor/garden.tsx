import { Sprig, Vine, VineRule } from "./vine";

type GardenProps = {

  tone?: "page" | "band";

  variant?: "left" | "right" | "top" | "bottom" | "corners" | "none";

  rule?: boolean;
  className?: string;
};

export function Garden({
  tone = "page",
  variant = "corners",
  rule = false,
  className = "",
}: GardenProps) {
  if (variant === "none") return null;
  const color = tone === "band" ? "var(--vine-on-band)" : "var(--vine)";
  const faint = tone === "band" ? 0.16 : 0.13;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}
    >
      {variant === "left" ? (
        <Vine
          color={color}
          opacity={faint}
          className="absolute -bottom-24 -left-16 h-[46rem] w-auto -rotate-12"
          float
          delay={0}
        />
      ) : null}

      {variant === "right" ? (
        <Vine
          color={color}
          opacity={faint}
          className="absolute -top-24 -right-16 h-[46rem] w-auto rotate-[168deg]"
          float
          delay={3}
        />
      ) : null}

      {variant === "top" ? (
        <>
          <Vine
            color={color}
            opacity={faint}
            className="absolute -top-28 -left-10 h-[38rem] w-auto rotate-[8deg]"
            float
            delay={1}
          />
          <Sprig
            color={color}
            opacity={faint * 1.1}
            className="absolute top-24 -right-6 h-28 w-auto -rotate-12"
            float
            delay={4}
          />
        </>
      ) : null}

      {variant === "bottom" ? (
        <>
          <Vine
            color={color}
            opacity={faint}
            className="absolute -bottom-28 -right-12 h-[42rem] w-auto rotate-[186deg]"
            float
            delay={2}
          />
          <Sprig
            color={color}
            opacity={faint * 1.1}
            className="absolute bottom-28 -left-5 h-24 w-auto rotate-[18deg]"
            float
            delay={5}
          />
        </>
      ) : null}

      {variant === "corners" ? (
        <>
          <Sprig
            color={color}
            opacity={faint}
            className="absolute -top-6 -left-6 h-32 w-auto -rotate-12"
            float
            delay={2}
          />
          <Sprig
            color={color}
            opacity={faint * 0.85}
            className="absolute -right-6 bottom-4 h-28 w-auto rotate-[168deg]"
            float
            delay={5}
          />
        </>
      ) : null}

      {rule ? (
        <VineRule
          color={color}
          className="absolute inset-x-0 bottom-0 mx-auto h-6 w-[min(100%,44rem)] opacity-70"
        />
      ) : null}
    </div>
  );
}
