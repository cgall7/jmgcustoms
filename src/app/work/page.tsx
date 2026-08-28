import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Work | JMG Customs",
  description:
    "Custom kitchens, tables, and furniture designed and built by JMG Customs.",
};

const KITCHEN_SHOTS = ["02", "05", "08", "11", "15", "17", "20", "28"].map(
  (n) => `/gallery/kitchen/kitchen-${n}.jpg`
);
const TABLE_SHOTS = ["05", "09", "13", "17", "27"].map(
  (n) => `/gallery/tables/table-${n}.jpg`
);

function EditorialGrid({ photos, alt }: { photos: string[]; alt: string }) {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-6 sm:gap-6">
      {photos.map((src, i) => {
        // Asymmetric rhythm: every third photo runs large and full-width.
        const large = i % 3 === 0;
        return (
          <div
            key={src}
            className={`relative overflow-hidden rounded-lg bg-wood/10 ${
              large
                ? "col-span-2 aspect-[16/10] sm:col-span-6"
                : "col-span-1 aspect-square sm:col-span-3"
            }`}
          >
            <Image
              src={src}
              alt={`${alt} ${i + 1}`}
              fill
              className="object-cover"
              sizes={large ? "100vw" : "(min-width: 640px) 50vw, 100vw"}
              priority={i < 2}
            />
          </div>
        );
      })}
    </div>
  );
}

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-dark">
        Work
      </p>
      <h1 className="text-balance mt-3 max-w-2xl font-display text-4xl font-semibold text-foreground sm:text-5xl">
        Every piece has a reason for being made.
      </h1>
      <p className="mt-5 max-w-xl leading-relaxed text-foreground/70">
        Some begin with a room that needs something specific. Others begin
        with a piece of wood that deserves to become something more. Here are
        a few of the pieces we&apos;ve had the privilege of building.
      </p>

      <section id="kitchen" className="mt-20 scroll-mt-24">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Full Kitchen Build
        </h2>
        <p className="mt-2 max-w-md text-sm text-foreground/60">
          Custom cabinetry, island, and trim — designed and installed start to
          finish.
        </p>
        <EditorialGrid photos={KITCHEN_SHOTS} alt="Kitchen build" />
      </section>

      <section id="tables" className="mt-20 scroll-mt-24">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Dining &amp; Occasional Tables
        </h2>
        <p className="mt-2 max-w-md text-sm text-foreground/60">
          Solid slab tops, hand-cut joinery, finishes that show the grain, not
          hide it.
        </p>
        <EditorialGrid photos={TABLE_SHOTS} alt="Table build" />
      </section>

      <div className="mt-20 border-t border-line pt-12 text-center">
        <p className="font-display text-xl font-semibold text-foreground">
          Made for them. Built to last.
        </p>
        <p className="mt-2 text-foreground/70">Every project is different.</p>
        <Link
          href="/start-a-project"
          className="mt-6 inline-block rounded-full bg-wood-dark px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-ember-dark"
        >
          Start a Project
        </Link>
      </div>
    </div>
  );
}
