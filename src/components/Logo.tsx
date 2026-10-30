import Image from "next/image";

type LogoProps = {
  className?: string;
  mark?: boolean;
};

/**
 * v3 mark — JMG monogram under a brass ring. The ring and letters run to
 * the edges of the source photo, so a circular mask clips them; contain
 * the whole emblem instead of cropping it.
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <span className={`relative block overflow-hidden  ${className}`}>
      <Image
        src="/images/logo-mark.jpg"
        alt=""
        fill
        className="object-contain p-1"
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
