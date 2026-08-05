import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Shop | JMG Customs",
  description: "JMG Customs merch — coming soon.",
};

function TeeMockup() {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg bg-wood/5">
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full text-[#efe6d6]"
        aria-hidden="true"
      >
        <path
          d="M70 30 L40 45 L20 75 L38 92 L52 82 L52 175 L148 175 L148 82 L162 92 L180 75 L160 45 L130 30 C130 44 116 54 100 54 C84 54 70 44 70 30 Z"
          fill="currentColor"
          stroke="var(--color-wood)"
          strokeOpacity="0.25"
          strokeWidth="2"
        />
      </svg>
      <div className="absolute left-1/2 top-[46%] h-16 w-16 -translate-x-1/2 -translate-y-1/2 sm:h-20 sm:w-20">
        <Image
          src="/images/logo-mark.png"
          alt="JMG Customs mark screen-printed on a t-shirt"
          fill
          className="object-contain"
          sizes="80px"
        />
      </div>
    </div>
  );
}

function CapMockup() {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg bg-wood/5">
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full text-[#efe6d6]"
        aria-hidden="true"
      >
        <path
          d="M100 40 C60 40 30 68 26 105 C60 96 140 96 174 105 C170 68 140 40 100 40 Z"
          fill="currentColor"
          stroke="var(--color-wood)"
          strokeOpacity="0.25"
          strokeWidth="2"
        />
        <path
          d="M26 105 C55 98 145 98 174 105 C176 112 172 118 163 119 C140 111 60 111 37 119 C28 118 24 112 26 105 Z"
          fill="currentColor"
          stroke="var(--color-wood)"
          strokeOpacity="0.25"
          strokeWidth="2"
        />
      </svg>
      <div className="absolute left-1/2 top-[46%] h-14 w-14 -translate-x-1/2 -translate-y-1/2 sm:h-16 sm:w-16">
        <Image
          src="/images/logo-mark.png"
          alt="JMG Customs mark embroidered on a cap"
          fill
          className="object-contain"
          sizes="64px"
        />
      </div>
    </div>
  );
}

const MERCH = [
  {
    name: "JMG Customs Tee",
    blurb: "Heavyweight cotton, mark printed front and center.",
    Mockup: TeeMockup,
  },
  {
    name: "JMG Customs Cap",
    blurb: "Structured six-panel, mark embroidered on the front.",
    Mockup: CapMockup,
  },
];

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
        <div>
          <h1 className="font-display text-4xl font-semibold text-foreground">
            Shop
          </h1>
          <p className="mt-3 max-w-md text-foreground/70">
            We&apos;re not selling online just yet — but merch is on the way.
            Here&apos;s a first look at the mark on a couple of shop
            staples.
          </p>
        </div>
        <div className="relative order-first aspect-[4/3] overflow-hidden rounded-lg sm:order-last">
          <Image
            src="/images/logo-illustration.png"
            alt="JMG Customs mark — St. Joseph the Worker"
            fill
            className="object-contain bg-wood/5"
            sizes="(min-width: 640px) 50vw, 100vw"
            priority
          />
        </div>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2">
        {MERCH.map(({ name, blurb, Mockup }) => (
          <div key={name}>
            <Mockup />
            <div className="mt-4 flex items-center justify-between">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {name}
              </h3>
              <span className="rounded-full border border-wood/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-wood">
                Coming soon
              </span>
            </div>
            <p className="mt-1 text-sm text-foreground/60">{blurb}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 max-w-xl text-sm text-foreground/60">
        Want first dibs when merch drops — or a piece of furniture in the
        meantime?{" "}
        <a
          href="/contact"
          className="font-semibold text-ember-dark hover:underline"
        >
          Get in touch
        </a>
        .
      </p>
    </div>
  );
}
