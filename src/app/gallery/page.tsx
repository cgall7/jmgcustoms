import type { Metadata } from "next";
import { PlaceholderPanel } from "@/components/PlaceholderPanel";

export const metadata: Metadata = {
  title: "Gallery | JMG Customs",
  description: "Custom kitchen and table projects from JMG Customs.",
};

const KITCHEN_SHOTS = Array.from({ length: 6 }, (_, i) => i);
const TABLE_SHOTS = Array.from({ length: 6 }, (_, i) => i);

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl font-semibold text-foreground">
        Gallery
      </h1>
      <p className="mt-3 max-w-xl text-foreground/70">
        A look at recent builds. Photos below are placeholders — real project
        shots are being pulled in next.
      </p>

      <section id="kitchen" className="mt-16 scroll-mt-24">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Full Kitchen Build
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {KITCHEN_SHOTS.map((i) => (
            <PlaceholderPanel
              key={i}
              label={`Kitchen ${i + 1}`}
              className="aspect-square rounded-md"
            />
          ))}
        </div>
      </section>

      <section id="tables" className="mt-16 scroll-mt-24">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Dining &amp; Occasional Tables
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {TABLE_SHOTS.map((i) => (
            <PlaceholderPanel
              key={i}
              label={`Table ${i + 1}`}
              className="aspect-square rounded-md"
            />
          ))}
        </div>
      </section>
    </div>
  );
}
