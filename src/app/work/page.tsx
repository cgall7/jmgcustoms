import type { Metadata } from "next";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "The Work | JMG Customs",
  description:
    "Custom furniture and renovations from JMG Customs — every piece started with a person, a space, and an idea.",
};

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-dark">
        Selected Projects
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-foreground sm:text-5xl">
        The Work
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-relaxed text-foreground/70">
        Custom furniture and considered renovations. Every project starts with
        a person, a space, and an idea.
      </p>

      <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={project.slug} project={project} priority={index < 3} />
        ))}
      </div>


    </div>
  );
}
