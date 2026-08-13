import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery | JMG Customs",
  description: "Custom kitchen and table projects from JMG Customs.",
};

const KITCHEN_SHOTS = ["02", "05", "08", "11", "15", "17", "20", "28"].map(
  (n) => `/gallery/kitchen/kitchen-${n}.jpg`
);
const TABLE_END_RESULT_SHOTS = [
  "05", "09", "13", "17", "27", "29", "30", "31", "32", "33", "34", "35",
  "36", "37", "38", "39", "40", "41", "42", "43", "44",
].map((n) => `/gallery/tables/table-${n}.jpg`);
const TABLE_PROCESS_SHOTS = [
  "/gallery/tables/table-11.jpg",
  "/gallery/tables/table-20.jpg",
  ...["01", "02", "03", "04", "05", "06", "07", "08", "09"].map(
    (n) => `/gallery/tables/process/process-${n}.jpg`
  ),
];

function PhotoGrid({
  photos,
  alt,
  priority = false,
}: {
  photos: string[];
  alt: string;
  priority?: boolean;
}) {
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
            priority={priority && i < 3}
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
        <PhotoGrid photos={KITCHEN_SHOTS} alt="Kitchen build" priority />
      </section>

      <section id="tables" className="mt-16 scroll-mt-24">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Dining &amp; Occasional Tables
        </h2>
        <p className="mt-2 max-w-xl text-sm text-foreground/60">
          Finished pieces first, then a look at how each one gets there.
        </p>

        <h3 className="mt-10 font-display text-lg font-semibold text-foreground">
          End Results
        </h3>
        <PhotoGrid
          photos={TABLE_END_RESULT_SHOTS}
          alt="Finished table"
          priority
        />

        <h3 className="mt-12 font-display text-lg font-semibold text-foreground">
          In The Shop
        </h3>
        <PhotoGrid photos={TABLE_PROCESS_SHOTS} alt="Table build in progress" />
      </section>
    </div>
  );
}
