import type { Metadata } from "next";
import { PhotoGrid } from "@/components/PhotoGrid";

export const metadata: Metadata = {
  title: "Gallery | JMG Customs",
  description: "Custom kitchen projects from JMG Customs.",
};

const KITCHEN_SHOTS = ["02", "05", "08", "11", "15", "17", "20", "28"].map(
  (n) => `/gallery/kitchen/kitchen-${n}.jpg`
);

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
    </div>
  );
}
