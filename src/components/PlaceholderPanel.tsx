/** Stand-in for real project photography until it's dropped into /public/gallery. */
export function PlaceholderPanel({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-grain flex items-center justify-center border border-line bg-wood/10 ${className}`}
    >
      <span className="rounded-full border border-wood/30 bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-wood">
        {label}
      </span>
    </div>
  );
}
