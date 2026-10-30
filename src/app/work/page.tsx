import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { PhotoGrid } from "@/components/PhotoGrid";

export const metadata: Metadata = {
  title: "The Work | JMG Customs",
  description:
    "Custom furniture and renovations from JMG Customs — every piece started with a person, a space, and an idea.",
};

const SHOP_FLOOR_SHOTS = [
  "05",
  "09",
  "13",
  "17",
  "27",
  "29",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "40",
  "41",
  "42",
  "43",
].map((n) => `/gallery/tables/table-${n}.jpg`);

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-dark">
        The Work
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-foreground sm:text-5xl">
        This isn&apos;t a catalog.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/70">
        It&apos;s a collection of projects we&apos;ve had the opportunity to
        build. Every piece started with a person, a space, and an idea.
      </p>

      <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.slug} project={project} priority={index < 3} />
        ))}
      </div>

      <section
        id="tables"
        className="mt-24 scroll-mt-24 border-t border-line pt-16"
      >
        <h2 className="font-display text-2xl font-semibold text-foreground">
          More From the Shop
        </h2>
        <p className="mt-2 max-w-xl text-foreground/70">
          A closer look at tables and pieces built along the way.
        </p>
        <PhotoGrid photos={SHOP_FLOOR_SHOTS} alt="Custom table" />
      </section>
    </div>
  );
}
