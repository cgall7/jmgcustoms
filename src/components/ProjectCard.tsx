import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const cover = project.photos[0];

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-wood/5">
        {cover ? (
          <Image
            src={cover}
            alt={project.heroAlt ?? project.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
            sizes="(min-width: 640px) 33vw, 100vw"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 border border-dashed border-wood/25 bg-wood/[0.04] px-4 text-center">
            <span className="font-display text-sm text-wood/50">
              Photos coming soon
            </span>
          </div>
        )}
      </div>
      <h3 className="mt-4 font-display text-lg font-semibold text-foreground group-hover:text-ember-dark">
        {project.title}
      </h3>
      <p className="mt-1 text-sm text-foreground/60">
        {project.wood} · {project.type}
        {project.dimensions ? ` · ${project.dimensions}` : ""}
      </p>
    </Link>
  );
}
