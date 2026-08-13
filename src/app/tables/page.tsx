import type { Metadata } from "next";
import { PhotoGrid } from "@/components/PhotoGrid";

export const metadata: Metadata = {
  title: "Tables | JMG Customs",
  description: "Custom dining and occasional tables from JMG Customs.",
};

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

export default function TablesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl font-semibold text-foreground">
        Dining &amp; Occasional Tables
      </h1>
      <p className="mt-3 max-w-xl text-foreground/70">
        Solid slab tops, hand-cut joinery, finishes that show the grain, not
        hide it. Finished pieces first, then a look at how each one gets
        there.
      </p>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          End Results
        </h2>
        <PhotoGrid
          photos={TABLE_END_RESULT_SHOTS}
          alt="Finished table"
          priority
        />
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          In The Shop
        </h2>
        <PhotoGrid photos={TABLE_PROCESS_SHOTS} alt="Table build in progress" />
      </section>
    </div>
  );
}
