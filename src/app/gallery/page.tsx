import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery | JMG Customs",
  description: "Custom kitchen and table projects from JMG Customs.",
};

const KITCHEN_SHOTS = Array.from(
  { length: 29 },
  (_, i) => `/gallery/kitchen/kitchen-${String(i + 1).padStart(2, "0")}.jpg`
);
const TABLE_SHOTS = Array.from(
  { length: 29 },
  (_, i) => `/gallery/tables/table-${String(i + 1).padStart(2, "0")}.jpg`
);

function PhotoGrid({ photos, alt }: { photos: string[]; alt: string }) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
      {photos.map((src, i) => (
        <div
          key={src}
          className="relative aspect-square overflow-hidden rounded-md bg-wood/10"
        >
          <Image
            src={src}
            alt={`${alt} ${i + 1}`}
            fill
            className="object-cover"
            sizes="(min-width: 640px) 33vw, 50vw"
            priority={i < 3}
          />
        </div>
      ))}
    </div>
  );
}

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl font-semibold text-foreground">
        Gallery
      </h1>
      <p className="mt-3 max-w-xl text-foreground/70">
        A look at recent builds, straight from the shop floor.
      </p>

      <section id="kitchen" className="mt-16 scroll-mt-24">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Full Kitchen Build
        </h2>
        <PhotoGrid photos={KITCHEN_SHOTS} alt="Kitchen build" />
      </section>

      <section id="tables" className="mt-16 scroll-mt-24">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Dining &amp; Occasional Tables
        </h2>
        <PhotoGrid photos={TABLE_SHOTS} alt="Table build" />
      </section>
    </div>
  );
}
