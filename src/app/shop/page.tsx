import type { Metadata } from "next";
import { PhotoGrid } from "@/components/PhotoGrid";
export const metadata: Metadata = {
  title: "Shop | JMG Customs",
  description:
    "Handcrafted games, play kitchens, dining tables, and cutting boards from the JMG Customs workshop.",
};
const products = [
  {
    name: "Wahoo Marble Game",
    detail: "$100",
    photos: ["wahoo-edited.webp"],
  },
  {
    name: "Kid’s Play Kitchen",
    detail:
      "Available in green, dusty rose, and white. Contact us for pricing.",
    photos: ["play-kitchen-edited.webp"],
  },
  {
    name: "Bible Stand",
    detail: "Contact us for details and pricing.",
    photos: [],
  },
  {
    name: "Dining Table",
    detail: "Optional benches available as an add on. Contact us for pricing.",
    photos: ["dining-edited.webp"],
  },
  {
    name: "Cutting Board Set",
    detail: "Contact us for pricing and availability.",
    photos: ["p61-01.jpg", "p59-01.jpg", "p66-01.jpg"],
  },
];
export default function ShopPage() {
  return (
    <>
      <header className="mx-auto max-w-4xl px-6 py-20">
        <p className="eyebrow">Shop</p>
        <h1 className="mt-4 font-display text-5xl">Things from the shop.</h1>
        <p className="mt-5 max-w-xl text-foreground/70">
          Handcrafted pieces for everyday life. Get in touch to ask about
          availability, finishes, and ordering.
        </p>
      </header>
      {products.map((p, i) => (
        <section key={p.name} className="border-t border-line bg-background">
          <div className="mx-auto max-w-4xl px-6 py-16">
            <h2 className="font-display text-3xl">{p.name}</h2>
            <p className="mt-3 text-foreground/70">{p.detail}</p>
            {p.photos.length > 0 && (
              <PhotoGrid
                photos={p.photos.map((n) => `/revisions/${n}`)}
                layout="curated"
                alt={p.name}
                  priority={i === 0}
              />
            )}
            <a
              className="button mt-6"
              href={`mailto:hello@jmgcustoms.com?subject=${encodeURIComponent(`Shop inquiry: ${p.name}`)}`}
            >
              Ask about {p.name}
            </a>
          </div>
        </section>
      ))}
      <section className="bg-wood-dark px-6 py-20 text-center text-background">
        <p className="eyebrow">Merch</p>
        <h2 className="mt-4 font-display text-4xl">
          Something else is in the works.
        </h2>
        <p className="mx-auto mt-5 max-w-xl">
          We’re working on a small collection of JMG Customs goods that you can
          purchase without commissioning a full project.
        </p>
        <p className="mt-4">Check back soon.</p>
      </section>
    </>
  );
}
