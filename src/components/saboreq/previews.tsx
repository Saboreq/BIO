import { StatusChip } from "./primitives";

export function FilehavenPreview() {
  const items = [
    { name: "releases/", meta: "folder", priv: false },
    { name: "sabpack-1.4.zip", meta: "38.2 MB", priv: false },
    { name: "drafts/", meta: "folder", priv: true },
    { name: "notes-2026.pdf", meta: "1.1 MB", priv: true },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] text-sab-text-muted">
          filehaven / downloads
        </span>
        <StatusChip tone="purple">INVITE-ONLY</StatusChip>
      </div>
      <div className="space-y-1.5">
        {items.map((f) => (
          <div
            key={f.name}
            className="flex items-center justify-between rounded-md border border-sab-border bg-sab-bg-soft px-2.5 py-1.5 font-mono text-[11px]"
          >
            <span
              className={f.priv ? "text-sab-text-secondary" : "text-sab-text"}
            >
              {f.name}
            </span>
            <span className="flex items-center gap-2.5 text-[10px]">
              <span className="text-sab-text-faint">{f.meta}</span>
              <span
                className={
                  f.priv ? "text-sab-purple-light" : "text-sab-success"
                }
              >
                {f.priv ? "● private" : "○ public"}
              </span>
            </span>
          </div>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between font-mono text-[10px] text-sab-text-muted">
        <span>signed url · expires 60s</span>
        <span>rls enforced</span>
      </div>
    </div>
  );
}

export function SabControlPreview() {
  return (
    <div className="flex h-full flex-col gap-3 p-4 font-mono text-[11px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sab-text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-sab-success shadow-[0_0_0_3px_rgba(105,214,163,0.15)]" />
          <span>NODE-01 · ONLINE</span>
        </div>
        <span className="text-sab-text-faint">24/50 players</span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: "SAVE", tone: "text-sab-text" },
          {
            label: "BROADCAST",
            tone: "text-sab-purple-light border-sab-border-purple bg-[rgba(139,92,246,0.08)]",
          },
          { label: "RESTART", tone: "text-sab-text-muted" },
        ].map((b) => (
          <div
            key={b.label}
            className={`rounded-md border border-sab-border bg-sab-bg-soft px-2 py-1.5 text-center text-[10px] ${b.tone}`}
          >
            {b.label}
          </div>
        ))}
      </div>
      <div className="mt-auto rounded-md border border-sab-border bg-black/40 p-2.5 text-[10.5px] leading-relaxed text-sab-text-secondary">
        <div>
          <span className="text-sab-text-faint">$</span> plugin.reload
          sabcontrol
        </div>
        <div className="text-sab-success">✓ modules loaded</div>
        <div>
          <span className="text-sab-text-faint">$</span> broadcast --to online
        </div>
        <div className="text-sab-purple-light">→ 24 delivered</div>
      </div>
    </div>
  );
}

export function SabTeamsPreview() {
  const players = [
    { n: "voidwalker", online: true },
    { n: "nyx.mp", online: true },
    { n: "kestrel", online: false },
    { n: "sable_", online: true },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] rounded border border-sab-border-purple bg-[rgba(139,92,246,0.12)] px-1.5 py-0.5 text-sab-purple-light">
            [OBSD]
          </span>
          <span className="font-display text-sm font-semibold text-sab-text">
            Obsidian
          </span>
        </div>
        <span className="font-mono text-[10px] text-sab-text-muted">
          4 / 12
        </span>
      </div>
      <div className="space-y-1.5">
        {players.map((p) => (
          <div
            key={p.n}
            className="flex items-center justify-between rounded-md border border-sab-border bg-sab-bg-soft px-2.5 py-1.5 font-mono text-[11px]"
          >
            <span className="text-sab-text">{p.n}</span>
            <span
              className={
                p.online
                  ? "text-sab-success text-[10px]"
                  : "text-sab-text-faint text-[10px]"
              }
            >
              {p.online ? "● online" : "○ offline"}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-auto flex items-center justify-between font-mono text-[10px] text-sab-text-muted">
        <span>invite · pending 2</span>
        <span>cost · 2,500</span>
      </div>
    </div>
  );
}

export function HorrorPreview() {
  return (
    <div className="relative flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between">
        <StatusChip tone="warning">SIGNAL UNSTABLE</StatusChip>
        <span className="font-mono text-[10px] text-sab-text-muted">
          SECTOR 07-B
        </span>
      </div>
      <div className="relative flex-1 overflow-hidden rounded-md border border-sab-border bg-black/50">
        <svg viewBox="0 0 200 120" className="h-full w-full">
          <defs>
            <pattern
              id="hgrid"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 20 0 L 0 0 0 20"
                fill="none"
                stroke="rgba(255,255,255,0.06)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="200" height="120" fill="url(#hgrid)" />

          <rect
            x="20"
            y="20"
            width="55"
            height="35"
            fill="none"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1"
          />
          <rect
            x="85"
            y="15"
            width="45"
            height="50"
            fill="none"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1"
          />
          <rect
            x="140"
            y="25"
            width="45"
            height="45"
            fill="none"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1"
          />
          <rect
            x="30"
            y="72"
            width="80"
            height="32"
            fill="none"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1"
          />
          <rect
            x="120"
            y="80"
            width="60"
            height="25"
            fill="none"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="1"
          />

          <circle cx="47" cy="37" r="2.2" fill="#69d6a3" />
          <circle cx="105" cy="40" r="2.2" fill="#69d6a3" />

          <circle cx="160" cy="48" r="2.2" fill="#a78bfa" opacity="0.7" />
          <circle
            cx="160"
            cy="48"
            r="5"
            fill="none"
            stroke="rgba(167,139,250,0.35)"
            strokeWidth="0.8"
          />

          <polyline
            points="10,110 40,110 45,100 50,110 90,110 95,95 100,110 140,110 145,88 150,110 190,110"
            fill="none"
            stroke="rgba(239,113,133,0.55)"
            strokeWidth="1"
          />
        </svg>
      </div>
      <div className="font-mono text-[10px] text-sab-text-muted">
        ♥ 62 · 68 · 71 · <span className="text-sab-warning">98</span> BPM
      </div>
    </div>
  );
}

export function TopologyPreview() {
  const nodes = ["DOMAIN", "PROXY", "PANEL", "NODE", "SERVER"];
  return (
    <div className="flex h-full flex-col gap-3 p-4">
      <div className="flex items-center justify-between font-mono text-[10px] text-sab-text-muted">
        <span>infra.topology</span>
        <StatusChip tone="success">OPERATIONAL</StatusChip>
      </div>
      <div className="flex flex-1 flex-col justify-center gap-2">
        {nodes.map((n, i) => (
          <div
            key={n}
            className="flex items-center gap-3 rounded-md border border-sab-border bg-sab-bg-soft px-2.5 py-1.5 font-mono text-[11px]"
          >
            <span className="text-sab-text-faint w-5">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1 text-sab-text-secondary">{n}</span>
            <span className="text-sab-text-faint">
              {i < nodes.length - 1 ? "→" : " "}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-sab-success" />
          </div>
        ))}
      </div>
    </div>
  );
}

export const PREVIEWS = {
  filehaven: FilehavenPreview,
  sabcontrol: SabControlPreview,
  sabteams: SabTeamsPreview,
  horror: HorrorPreview,
  topology: TopologyPreview,
} as const;
