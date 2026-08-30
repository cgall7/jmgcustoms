import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Shop | JMG Customs",
  description:
    "The JMG Customs apparel & workwear collection — a first look at what's coming.",
};

/** Colorway system from the apparel spec (Design_JMG_merch, rev A). */
const COLORWAYS = {
  natural: { name: "Natural Canvas", hex: "#EFE9DF" },
  walnut: { name: "Walnut", hex: "#493324" },
  charcoal: { name: "Charcoal", hex: "#2C2A28" },
  bronze: { name: "Bronze", hex: "#C9A96E" },
} as const;

type ColorwayKey = keyof typeof COLORWAYS;

const MERCH: {
  name: string;
  blurb: string;
  image: string;
  alt: string;
  colorways: ColorwayKey[];
}[] = [
  {
    name: "Dad Hat · 6 Panel",
    blurb:
      "Unstructured washed cotton with a brass slide buckle. Monogram embroidered on the front panel, wordmark on the back closure.",
    image: "/images/merch/dad-hat.png",
    alt: "Walnut brown six panel dad hat with the JMG monogram embroidered on the front",
    colorways: ["walnut", "charcoal", "natural"],
  },
  {
    name: "Trucker · Mesh Back",
    blurb:
      "Structured cream front panel with charcoal mesh and brim. Monogram in walnut thread, kept inside the front panel seams.",
    image: "/images/merch/trucker-hat.png",
    alt: "Mesh back trucker hat with a cream front panel and the JMG monogram",
    colorways: ["natural", "charcoal"],
  },
  {
    name: "Cuffed Beanie",
    blurb:
      "Fine rib knit with a double cuff. Wordmark embroidered flat on the cuff in bronze, centered to the front seam.",
    image: "/images/merch/beanie.png",
    alt: "Charcoal cuffed beanie with JMG Customs embroidered on the cuff in bronze",
    colorways: ["charcoal", "walnut", "natural"],
  },
  {
    name: "Tee",
    blurb:
      "Heavyweight 6 oz cotton, natural undyed. Wordmark screened small on the left chest in walnut ink. Nothing on the back.",
    image: "/images/merch/tee.png",
    alt: "Natural undyed tee with the JMG Customs wordmark on the left chest",
    colorways: ["natural", "walnut", "charcoal"],
  },
  {
    name: "Pullover Hoodie",
    blurb:
      "Walnut 400 gsm fleece with bronze drawcords. Monogram embroidered on the left chest; full stack screened large across the back.",
    image: "/images/merch/hoodie.png",
    alt: "Walnut brown pullover hoodie with bronze drawcords and the JMG monogram on the chest",
    colorways: ["walnut", "charcoal", "natural"],
  },
  {
    name: "Crewneck Sweatshirt",
    blurb:
      "Charcoal cotton fleece. Wordmark screened across the chest in cream ink, centered between the side seams.",
    image: "/images/merch/crewneck.png",
    alt: "Charcoal crewneck sweatshirt with the JMG Customs wordmark across the chest",
    colorways: ["charcoal", "natural"],
  },
  {
    name: "Cross Back Work Apron",
    blurb:
      "14 oz waxed duck canvas with a split tool pocket and copper rivets. Monogram embroidered on the bib above the pocket line.",
    image: "/images/merch/work-apron.png",
    alt: "Walnut brown cross back work apron with a split tool pocket and the JMG monogram on the bib",
    colorways: ["walnut", "charcoal"],
  },
];

function ColorwayDots({ colorways }: { colorways: ColorwayKey[] }) {
  return (
    <div className="mt-3 flex items-center gap-1.5">
      {colorways.map((key) => (
        <span
          key={key}
          title={COLORWAYS[key].name}
          className="h-3.5 w-3.5 rounded-full border border-wood/20"
          style={{ backgroundColor: COLORWAYS[key].hex }}
        />
      ))}
    </div>
  );
}

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-dark">
            Shop
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-foreground sm:text-5xl">
            Apparel &amp; workwear.
          </h1>
          <p className="mt-3 max-w-md text-foreground/70">
            A small collection of JMG Customs goods — the same marks we put on
            our furniture, on things you can wear in the shop or out of it.
            Here&apos;s a first look — check back soon.
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

      <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {MERCH.map(({ name, blurb, image, alt, colorways }) => (
          <div key={name}>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-wood/5">
              <Image
                src={image}
                alt={alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="mt-4 flex items-center justify-between gap-3">
              <h3 className="font-display text-xl font-semibold text-foreground">
                {name}
              </h3>
              <span className="shrink-0 rounded-full border border-wood/30 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-wood">
                Coming soon
              </span>
            </div>
            <p className="mt-1 text-sm text-foreground/60">{blurb}</p>
            <ColorwayDots colorways={colorways} />
          </div>
        ))}
      </div>

      <section className="mt-20 border-t border-line pt-12">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Colorways &amp; Ink
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {(
            [
              ["natural", "Undyed cotton · prints walnut or charcoal"],
              ["walnut", "Garment dye · prints cream or bronze"],
              ["charcoal", "Prints cream or bronze"],
              ["bronze", "Accent only · thread and drawcords"],
            ] as [ColorwayKey, string][]
          ).map(([key, note]) => (
            <div key={key} className="flex items-start gap-3">
              <span
                className="mt-0.5 h-10 w-10 shrink-0 rounded-md border border-wood/20"
                style={{ backgroundColor: COLORWAYS[key].hex }}
              />
              <div>
                <p className="font-display font-semibold text-foreground">
                  {COLORWAYS[key].name}
                </p>
                <p className="mt-0.5 text-sm text-foreground/60">{note}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

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
