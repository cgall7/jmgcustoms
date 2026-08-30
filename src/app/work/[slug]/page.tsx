import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROJECTS, getProject } from "@/data/projects";
import { PhotoGrid } from "@/components/PhotoGrid";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | JMG Customs`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <Link
        href="/work"
        className="text-sm font-semibold text-ember-dark hover:underline"
      >
        ← Back to The Work
      </Link>

      <h1 className="mt-6 font-display text-4xl font-semibold text-foreground">
        {project.title}
      </h1>
      <p className="mt-2 text-foreground/60">
        {project.wood} · {project.type}
        {project.dimensions ? ` · ${project.dimensions}` : ""}
      </p>

      {project.photos.length > 0 ? (
        <div className="mt-10">
          <PhotoGrid photos={project.photos} alt={project.title} priority />
        </div>
      ) : (
        <div className="mt-10 flex aspect-[16/9] items-center justify-center rounded-lg border border-dashed border-wood/25 bg-wood/[0.04]">
          <span className="font-display text-wood/50">
            Photos coming soon
          </span>
        </div>
      )}

      <div className="mt-12 max-w-2xl">
        <h2 className="font-display text-xl font-semibold text-foreground">
          The Idea
        </h2>
        {project.story.length > 0 ? (
          project.story.map((paragraph, i) => (
            <p key={i} className="mt-4 leading-relaxed text-foreground/70">
              {paragraph}
            </p>
          ))
        ) : (
          <p className="mt-4 leading-relaxed text-foreground/50 italic">
            Story details coming soon.
          </p>
        )}
      </div>

      <div className="mt-16 border-t border-line pt-12 text-center">
        <p className="font-display text-xl font-semibold text-foreground">
          Made for them. Built to last.
        </p>
        <p className="mt-2 text-foreground/70">Every project is different.</p>
        <p className="mt-4 max-w-md mx-auto text-foreground/70">
          If you&apos;re thinking about having something made specifically
          for your home, we&apos;d love to hear what you&apos;re imagining.
        </p>
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
