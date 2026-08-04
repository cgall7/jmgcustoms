type LogoProps = {
  className?: string;
  mark?: boolean;
};

/**
 * v1 mark — riffs on the flint-and-spark reference Colin shared: a chisel
 * striking a wedge of wood, spark lines standing in for "forged by hand."
 * Treat as a placeholder pass for Deezine to refine, not final brand art.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M14 40 L30 24 L36 30 L20 46 Z"
        fill="currentColor"
        className="text-wood"
      />
      <path
        d="M30 24 L46 10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        className="text-wood-dark"
      />
      <g className="text-ember" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M38 20 L46 14" />
        <path d="M40 26 L50 24" />
        <path d="M36 14 L40 6" />
      </g>
    </svg>
  );
}

export function Logo({ className = "", mark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {mark && <LogoMark className="h-8 w-8" />}
      <span className="font-display leading-none">
        <span className="block text-lg font-semibold tracking-wide text-foreground">
          JMG CUSTOMS
        </span>
        <span className="block text-[10px] font-normal uppercase tracking-[0.2em] text-wood">
          Handcrafted Woodworks
        </span>
      </span>
    </span>
  );
}
