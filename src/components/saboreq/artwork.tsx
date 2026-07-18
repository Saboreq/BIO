import type { ArtworkId } from "@/data/portfolio";

/**
 * Abstract per-project artwork. Deliberately not fake screenshots or fake
 * metrics — each piece is a geometric motif for what the system actually is,
 * drawn with the project's accent inside the site palette.
 */
export function Artwork({
  id,
  accent,
  className,
}: {
  id: ArtworkId;
  accent: string;
  className?: string;
}) {
  const Piece = PIECES[id];
  return (
    <svg
      viewBox="0 0 640 360"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-hidden="true"
      className={className}
      style={{ display: "block", width: "100%", height: "100%" }}
    >
      <defs>
        <radialGradient id={`glow-${id}`} cx="50%" cy="42%" r="65%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.14" />
          <stop offset="100%" stopColor={accent} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`edge-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={accent} stopOpacity="0.75" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.12" />
        </linearGradient>
      </defs>
      <rect width="640" height="360" fill={`url(#glow-${id})`} />
      <Piece accent={accent} edge={`url(#edge-${id})`} />
    </svg>
  );
}

type PieceProps = { accent: string; edge: string };

const line = "rgba(247,247,248,0.14)";
const lineSoft = "rgba(247,247,248,0.07)";
const fillSoft = "rgba(247,247,248,0.03)";

/** Filehaven — ascending planes, the top one signed/highlighted. */
function FilehavenPiece({ accent, edge }: PieceProps) {
  return (
    <g fill="none" strokeWidth="1.25">
      <rect
        x="150"
        y="196"
        width="270"
        height="150"
        rx="14"
        stroke={lineSoft}
        fill={fillSoft}
      />
      <rect
        x="185"
        y="150"
        width="270"
        height="150"
        rx="14"
        stroke={line}
        fill="rgba(11,11,16,0.75)"
      />
      <rect
        x="222"
        y="104"
        width="270"
        height="150"
        rx="14"
        stroke={edge}
        fill="rgba(14,14,20,0.92)"
      />
      <path d="M252 140 h122" stroke={line} strokeLinecap="round" />
      <path d="M252 168 h86" stroke={lineSoft} strokeLinecap="round" />
      <path d="M252 196 h150" stroke={lineSoft} strokeLinecap="round" />
      <circle cx="462" cy="134" r="5" fill={accent} opacity="0.9" />
      <path
        d="M120 300 C 240 268, 420 268, 540 232"
        stroke={accent}
        strokeOpacity="0.45"
        strokeDasharray="3 9"
        strokeLinecap="round"
      />
    </g>
  );
}

/** SabControl — one core, orbiting modules, clean links. */
function SabControlPiece({ accent, edge }: PieceProps) {
  const sats = [
    { x: 150, y: 110 },
    { x: 490, y: 96 },
    { x: 132, y: 268 },
    { x: 502, y: 258 },
  ];
  return (
    <g fill="none" strokeWidth="1.25">
      {sats.map((s) => (
        <path
          key={`${s.x}-${s.y}`}
          d={`M320 180 L ${s.x} ${s.y}`}
          stroke={lineSoft}
        />
      ))}
      <circle cx="320" cy="180" r="86" stroke={lineSoft} />
      <circle
        cx="320"
        cy="180"
        r="130"
        stroke={lineSoft}
        strokeDasharray="2 10"
      />
      <rect
        x="282"
        y="142"
        width="76"
        height="76"
        rx="18"
        stroke={edge}
        fill="rgba(14,14,20,0.92)"
      />
      <circle cx="320" cy="180" r="7" fill={accent} opacity="0.9" />
      {sats.map((s) => (
        <rect
          key={`sat-${s.x}-${s.y}`}
          x={s.x - 17}
          y={s.y - 17}
          width="34"
          height="34"
          rx="9"
          stroke={line}
          fill="rgba(11,11,16,0.85)"
        />
      ))}
      {sats.map((s) => (
        <circle
          key={`dot-${s.x}-${s.y}`}
          cx={s.x}
          cy={s.y}
          r="3"
          fill={accent}
          opacity="0.65"
        />
      ))}
    </g>
  );
}

/** SabTeams — clustered members, one carrying the tag. */
function SabTeamsPiece({ accent, edge }: PieceProps) {
  const clusters: Array<{
    cx: number;
    cy: number;
    dots: Array<[number, number]>;
  }> = [
    {
      cx: 190,
      cy: 150,
      dots: [
        [-34, -12],
        [22, -34],
        [8, 26],
        [-20, 30],
      ],
    },
    {
      cx: 430,
      cy: 120,
      dots: [
        [-28, 18],
        [30, -8],
        [4, -32],
      ],
    },
    {
      cx: 350,
      cy: 264,
      dots: [
        [-36, -6],
        [28, 14],
        [-6, 34],
        [34, -22],
      ],
    },
  ];
  return (
    <g fill="none" strokeWidth="1.25">
      <path
        d="M190 150 L 430 120 L 350 264 Z"
        stroke={lineSoft}
        strokeDasharray="2 8"
      />
      {clusters.map((c, i) => (
        <g key={c.cx}>
          <circle
            cx={c.cx}
            cy={c.cy}
            r="52"
            stroke={i === 0 ? edge : line}
            fill="rgba(11,11,16,0.6)"
          />
          {c.dots.map(([dx, dy]) => (
            <circle
              key={`${dx}-${dy}`}
              cx={c.cx + dx}
              cy={c.cy + dy}
              r="4"
              fill="rgba(247,247,248,0.4)"
            />
          ))}
          <circle cx={c.cx} cy={c.cy} r="5.5" fill={accent} opacity="0.9" />
        </g>
      ))}
      <rect
        x="162"
        y="86"
        width="56"
        height="20"
        rx="6"
        stroke={accent}
        strokeOpacity="0.6"
        fill="rgba(14,14,20,0.9)"
      />
      <path
        d="M172 96 h36"
        stroke={accent}
        strokeOpacity="0.8"
        strokeLinecap="round"
      />
    </g>
  );
}

/** Horror — assembled rooms, a winding path, a presence. */
function HorrorPiece({ accent, edge }: PieceProps) {
  return (
    <g fill="none" strokeWidth="1.25">
      <rect
        x="96"
        y="70"
        width="130"
        height="102"
        stroke={lineSoft}
        fill="rgba(8,8,11,0.8)"
      />
      <rect
        x="226"
        y="118"
        width="112"
        height="140"
        stroke={line}
        fill="rgba(8,8,11,0.8)"
      />
      <rect
        x="338"
        y="70"
        width="150"
        height="112"
        stroke={lineSoft}
        fill="rgba(8,8,11,0.8)"
      />
      <rect
        x="300"
        y="216"
        width="150"
        height="96"
        stroke={lineSoft}
        fill="rgba(8,8,11,0.8)"
      />
      <rect
        x="120"
        y="210"
        width="140"
        height="94"
        stroke={lineSoft}
        fill="rgba(8,8,11,0.8)"
      />
      <rect
        x="450"
        y="152"
        width="94"
        height="120"
        stroke={edge}
        fill="rgba(11,11,16,0.85)"
      />
      <path
        d="M130 132 H 262 V 190 H 366 V 122 M 366 182 V 250 H 470 V 206"
        stroke={accent}
        strokeOpacity="0.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="497"
        cy="206"
        r="5"
        fill={accent}
        opacity="0.95"
        className="sab-pulse"
      />
      <circle cx="130" cy="132" r="3.5" fill="rgba(247,247,248,0.5)" />
    </g>
  );
}

/** Infrastructure — request path descending through layers. */
function TopologyPiece({ accent, edge }: PieceProps) {
  const layers = [86, 140, 194, 248, 302];
  return (
    <g fill="none" strokeWidth="1.25">
      {layers.map((y) => (
        <path key={y} d={`M96 ${y} H 544`} stroke={lineSoft} />
      ))}
      <path
        d="M132 86 H 296 V 140 H 380 V 194 H 300 V 248 H 430 V 302 H 508"
        stroke={edge}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {[
        [132, 86],
        [296, 140],
        [380, 194],
        [300, 248],
        [430, 302],
      ].map(([x, y]) => (
        <g key={`${x}-${y}`}>
          <rect
            x={x - 14}
            y={y - 14}
            width="28"
            height="28"
            rx="8"
            stroke={line}
            fill="rgba(11,11,16,0.9)"
          />
          <circle cx={x} cy={y} r="3" fill="rgba(247,247,248,0.45)" />
        </g>
      ))}
      <circle cx="508" cy="302" r="5.5" fill={accent} opacity="0.95" />
    </g>
  );
}

const PIECES: Record<ArtworkId, (p: PieceProps) => React.ReactNode> = {
  filehaven: FilehavenPiece,
  sabcontrol: SabControlPiece,
  sabteams: SabTeamsPiece,
  horror: HorrorPiece,
  topology: TopologyPiece,
};
