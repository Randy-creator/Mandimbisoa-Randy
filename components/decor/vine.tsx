type VineProps = {
  className?: string;

  color?: string;

  opacity?: number;

  float?: boolean;

  delay?: number;
};

const SWAY = ["animate-sway", "animate-sway-slow"] as const;

function drift(seed: number, enabled: boolean | undefined, delay: number) {
  if (!enabled) return {};
  return {
    className: SWAY[seed % SWAY.length],
    style: { animationDelay: `${-((seed + delay) % 7) * 2.4}s` } as React.CSSProperties,
  };
}

const LEAF = "M0 0C6-8 18-7 22 1 15 9 4 8 0 0Z";

const LEAVES: Array<[number, number, number]> = [
  [26, 268, -142],
  [50, 214, -18],
  [86, 160, -150],
  [112, 104, -8],
  [140, 46, -138],
  [158, 8, -20],
];

const TENDRILS =
  "M60 196c14-10 26 2 18 12-6 8-20 4-16-6M104 124c13-9 24 3 16 12-6 7-19 2-14-7";

export function Vine({
  className = "",
  color = "var(--vine)",
  opacity,
  float,
  delay = 0,
}: VineProps) {
  const motion = drift(3, float, delay);
  return (
    <div className={className} style={opacity != null ? { opacity } : undefined}>
      <div className={`h-full ${motion.className ?? ""}`.trim()} style={motion.style}>
        <svg viewBox="0 0 180 300" fill="none" aria-hidden focusable="false" className="h-full w-auto">
          <path
            d="M6 300C40 262 30 214 70 182 110 150 100 102 140 62 158 42 150 20 165 0"
            stroke={color}
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d={TENDRILS}
            stroke={color}
            strokeWidth="1.1"
            strokeLinecap="round"
            opacity="0.7"
          />
          {LEAVES.map(([x, y, r]) => (
            <path
              key={`${x}-${y}`}
              d={LEAF}
              fill={color}
              transform={`translate(${x} ${y}) rotate(${r})`}
            />
          ))}
        </svg>
      </div>
    </div>
  );
}

export function Sprig({ className = "", color = "var(--vine)", opacity, float, delay = 0 }: VineProps) {
  const motion = drift(1, float, delay);
  return (
    <div className={className} style={opacity != null ? { opacity } : undefined}>
      <div className={`h-full ${motion.className ?? ""}`.trim()} style={motion.style}>
        <svg viewBox="0 0 80 60" fill="none" aria-hidden focusable="false" className="h-full w-auto">
          <path
            d="M2 58C22 48 34 34 42 14c2-5 8-6 10 0"
            stroke={color}
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path d={LEAF} fill={color} transform="translate(20 48) rotate(-150)" />
          <path d={LEAF} fill={color} transform="translate(34 30) rotate(-25)" />
          <path d={LEAF} fill={color} transform="translate(44 8) rotate(-125)" />
        </svg>
      </div>
    </div>
  );
}

export function VineRule({ className = "", color = "var(--vine)" }: VineProps) {
  return (
    <svg
      viewBox="0 0 600 24"
      fill="none"
      aria-hidden
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
      className={className}
    >
      <path
        d="M4 16c60-10 120 6 180-2s120-12 180-4 130 10 232 2"
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      {[
        [96, 15, -160],
        [188, 9, -14],
        [286, 6, -152],
        [380, 11, -16],
        [470, 13, -158],
        [546, 15, -20],
      ].map(([x, y, r]) => (
        <path key={x} d={LEAF} fill={color} transform={`translate(${x} ${y}) rotate(${r})`} />
      ))}
    </svg>
  );
}

type BloomProps = { className?: string; color?: string; opacity?: number; float?: boolean; delay?: number };

export function Blossom({
  className = "",
  color = "var(--bloom)",
  opacity,
  float,
  delay = 0,
  rotate = 0,
}: BloomProps & { rotate?: number }) {
  const petals = [0, 72, 144, 216, 288];
  return (
    <div className={className} style={opacity != null ? { opacity } : undefined}>
      <div
        className={`h-full ${float ? (drift(2, true, delay).className ?? "") : ""}`.trim()}
        style={float ? drift(2, true, delay).style : undefined}
      >
        <svg viewBox="0 0 40 40" fill="none" aria-hidden focusable="false" className="h-full w-auto">
          <g transform={`rotate(${rotate} 20 20)`}>
            {petals.map((a) => (
              <ellipse
                key={a}
                cx="20"
                cy="11.5"
                rx="4.6"
                ry="8"
                fill={color}
                transform={`rotate(${a} 20 20)`}
              />
            ))}
            <circle cx="20" cy="20" r="3.4" fill="var(--bloom-core)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export function Apple({ className = "", color = "var(--bloom)", opacity, float, delay = 0 }: BloomProps) {
  return (
    <div className={className} style={opacity != null ? { opacity } : undefined}>
      <div
        className={`h-full ${float ? (drift(5, true, delay).className ?? "") : ""}`.trim()}
        style={float ? drift(5, true, delay).style : undefined}
      >
        <svg viewBox="0 0 40 40" fill="none" aria-hidden focusable="false" className="h-full w-auto">
                    <path
            d="M20 12c0-4 1-6 3-8"
            stroke="var(--bloom-core)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
                    <path d={LEAF} fill="var(--bloom-core)" transform="translate(23 5) rotate(-40) scale(0.62)" />
                    <path
            d="M20 14c-2-2-9-2-11 3-2 5 1 14 6 17 3 2 4-1 5-1s2 3 5 1c5-3 8-12 6-17-2-5-9-5-11-3Z"
            fill={color}
          />
        </svg>
      </div>
    </div>
  );
}
