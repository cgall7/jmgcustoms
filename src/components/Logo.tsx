import Image from "next/image";

type LogoProps = {
  className?: string;
  mark?: boolean;
};

/**
 * v2 mark — St. Joseph the Worker, cropped tight on the halo and hands so it
 * stays legible at header size. Full illustration (with workbench) lives at
 * /images/logo-illustration.png for larger, standalone placements.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={`relative block ${className}`}>
      <Image
        src="/images/logo-mark.png"
        alt=""
        fill
        className="object-contain"
        sizes="64px"
        priority
      />
    </span>
  );
}

export function Logo({ className = "", mark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      {mark && <LogoMark className="h-12 w-12" />}
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
