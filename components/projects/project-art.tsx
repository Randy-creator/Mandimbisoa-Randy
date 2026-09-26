type Props = {
  index: number;
  label: string;
};

export function ProjectArt({ index, label }: Props) {
  const scenes = [Modules, ApiGraph, Pipeline, Podium];
  const Scene = scenes[index % scenes.length];

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-line bg-bg-alt"
      role="img"
      aria-label={label}
    >
            <div
        aria-hidden
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "radial-gradient(circle at center, var(--line-strong) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-brand/12 via-transparent to-accent/10"
      />

      <svg
        viewBox="0 0 400 240"
        className="relative block w-full"
        fill="none"
        aria-hidden
      >
                <rect
          x="46"
          y="30"
          width="308"
          height="180"
          rx="14"
          className="fill-bg stroke-line"
          strokeWidth="1.5"
        />
        <path
          d="M46 62h308"
          className="stroke-line"
          strokeWidth="1.5"
        />
                <circle cx="66" cy="46" r="4" className="fill-brand" />
        <circle cx="80" cy="46" r="4" className="fill-line-strong" />
        <circle cx="94" cy="46" r="4" className="fill-line-strong" />
                <rect
          x="116"
          y="39"
          width="120"
          height="14"
          rx="7"
          className="fill-line/50"
        />

        <Scene />
      </svg>
    </div>
  );
}

function Modules() {
  return (
    <g>
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={86 + i * 58}
          y={86 + (i % 2) * 8}
          width="46"
          height="34"
          rx="7"
          className={i === 1 ? "fill-brand" : "fill-surface-2 stroke-line"}
          strokeWidth="1.5"
        />
      ))}
            <path
        d="M109 137v18h182v-18"
        className="stroke-accent"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="200" y="168" width="66" height="24" rx="7" className="fill-accent" />
    </g>
  );
}

function ApiGraph() {
  return (
    <g>
      {ENDPOINTS.map(([x, y]) => (
        <path
          key={`${x}-${y}`}
          d={`M200 118L${x} ${y}`}
          className="stroke-accent"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeDasharray="4 5"
        />
      ))}
      {ENDPOINTS.map(([x, y]) => (
        <circle
          key={`${x}-${y}-n`}
          cx={x}
          cy={y}
          r="6"
          className="fill-bg stroke-accent"
          strokeWidth="1.75"
        />
      ))}
      <circle cx="200" cy="118" r="9" className="fill-accent" />
    </g>
  );
}

const ENDPOINTS: Array<[number, number]> = [
  [110, 88],
  [290, 88],
  [110, 160],
  [290, 160],
];

function Pipeline() {
  return (
    <g>
            {[93, 129, 165].map((y) => (
        <g key={y}>
          <rect
            x="72"
            y={y - 13}
            width="26"
            height="26"
            rx="6"
            className="fill-surface-2 stroke-line"
            strokeWidth="1.5"
          />
          <path
            d={`M98 ${y}H118`}
            className="stroke-accent"
            strokeWidth="1.75"
            strokeLinecap="round"
          />
        </g>
      ))}

            <path
        d="M118 93V165"
        className="stroke-accent"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <path
        d="M118 129h22"
        className="stroke-accent"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
      <rect x="140" y="114" width="34" height="30" rx="8" className="fill-brand" />

            <path
        d="M174 129h28v20"
        className="stroke-accent"
        strokeWidth="1.75"
        strokeLinecap="round"
      />

      <path d="M186 196h150" className="stroke-line-strong" strokeWidth="1.5" />
      {[0, 1, 2, 3, 4].map((i) => {
        const h = 18 + i * 12;
        return (
          <rect
            key={i}
            x={196 + i * 29}
            y={196 - h}
            width="22"
            height={h}
            rx="4"
            className={i === 4 ? "fill-brand" : "fill-accent/45"}
          />
        );
      })}
    </g>
  );
}

function Podium() {
  return (
    <g>
      {[0, 1, 2].map((i) => {
        const y = 84 + i * 38;
        const on = i === 2;
        return (
          <g key={i}>
            <circle
              cx="88"
              cy={y + 14}
              r="11"
              className="fill-surface-2 stroke-line"
              strokeWidth="1.5"
            />
            <text
              x="88"
              y={y + 19}
              textAnchor="middle"
              className="fill-muted"
              style={{ font: "600 13px var(--font-display), sans-serif" }}
            >
              {i + 1}
            </text>
            <rect
              x="104"
              y={y}
              width="192"
              height="28"
              rx="8"
              className={on ? "fill-brand" : "fill-surface-2 stroke-line"}
              strokeWidth="1.5"
            />
            {on ? (

              <path
                d="M118 178h164"
                className="stroke-accent"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            ) : null}
          </g>
        );
      })}
    </g>
  );
}
