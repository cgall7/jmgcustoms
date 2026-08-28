import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Shop | JMG Customs",
  description: "JMG Customs merch — coming soon.",
};

function TeeMockup() {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg bg-wood/5">
      <Image
        src="/images/merch/tee-mockup.jpg"
        alt="JMG Customs mark screen-printed on a white t-shirt"
        fill
        className="object-cover"
        sizes="(min-width: 640px) 50vw, 100vw"
      />
    </div>
  );
}

function CapMockup() {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg bg-wood/5">
      <Image
        src="/images/merch/cap-mockup.jpg"
        alt="JMG Customs mark on a trucker hat"
        fill
        className="object-cover"
        sizes="(min-width: 640px) 50vw, 100vw"
      />
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
    name: "JMG Customs Trucker Hat",
    blurb: "Classic mesh-back trucker, mark on the front panel.",
    Mockup: CapMockup,
  },
];

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-dark">
            Shop
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-foreground">
            Things from the shop.
          </h1>
          <p className="mt-3 max-w-md text-foreground/70">
            We&apos;re working on a small collection of JMG Customs goods you
            can purchase without commissioning a full project. Here&apos;s a
            first look — check back soon.
          </p>
        </div>
        <div className="relative order-first aspect-[4/3] overflow-hidden rounded-lg sm:order-last">
          <Image
            src="/images/logo-illustration.jpg"
            alt="JMG Customs mark"
            fill
            className="object-cover"
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
          href="/start-a-project"
          className="font-semibold text-ember-dark hover:underline"
        >
          Get in touch
        </a>
        .
      </p>
    </div>
  );
}
