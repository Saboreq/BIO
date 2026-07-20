import type { ArtworkId } from "@/data/portfolio";

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

function SabHavenPiece({ accent, edge }: PieceProps) {
  return (
    <g fill="none" strokeWidth="1.25">
      <rect x="150" y="196" width="270" height="150" rx="14" stroke={lineSoft} fill={fillSoft} />
      <rect x="185" y="150" width="270" height="150" rx="14" stroke={line} fill="rgba(11,11,16,0.75)" />
      <rect x="222" y="104" width="270" height="150" rx="14" stroke={edge} fill="rgba(14,14,20,0.92)" />
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

function PortfolioPiece({ accent, edge }: PieceProps) {
  return (
    <g fill="none" strokeWidth="1.25">
      <rect x="92" y="64" width="456" height="232" rx="18" stroke={edge} fill="rgba(11,11,16,0.84)" />
      <path d="M92 108 H548" stroke={lineSoft} />
      <circle cx="120" cy="86" r="4" fill={accent} opacity="0.9" />
      <circle cx="138" cy="86" r="4" fill="rgba(247,247,248,0.2)" />
      <circle cx="156" cy="86" r="4" fill="rgba(247,247,248,0.12)" />
      <rect x="126" y="142" width="176" height="16" rx="8" fill={accent} opacity="0.35" stroke="none" />
      <rect x="126" y="174" width="238" height="10" rx="5" fill="rgba(247,247,248,0.15)" stroke="none" />
      <rect x="126" y="198" width="204" height="10" rx="5" fill="rgba(247,247,248,0.09)" stroke="none" />
      <rect x="126" y="238" width="88" height="28" rx="8" stroke={accent} fill="rgba(125,211,252,0.06)" />
      <rect x="390" y="138" width="112" height="112" rx="14" stroke={line} fill={fillSoft} />
      <path d="M414 222 L438 192 L458 208 L484 170" stroke={accent} strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="484" cy="170" r="4" fill={accent} />
    </g>
  );
}

const PIECES: Record<ArtworkId, (props: PieceProps) => React.ReactNode> = {
  sabhaven: SabHavenPiece,
  portfolio: PortfolioPiece,
};
