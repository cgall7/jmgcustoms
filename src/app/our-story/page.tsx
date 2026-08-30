import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Our Story | JMG Customs",
  description: "Meet the Gallaghers — the family behind JMG Customs.",
};

const BELIEFS = [
  {
    title: "Good materials matter.",
    body: "We believe solid hardwood deserves to be treated like the material it is — not covered up or engineered to look like something it's not.",
  },
  {
    title: "Good construction matters.",
    body: "The parts you don't see are just as important as the parts you do.",
  },
  {
    title: "Good design matters.",
    body: "A beautiful piece should also work beautifully in the room where it lives.",
  },
  {
    title: "Time matters.",
    body: "Handmade furniture takes longer. We think that's part of the point.",
  },
  {
    title: "The future matters.",
    body: "We aren't building pieces for a five year lifespan. We're building with the hope that someone will still be using them long after we're done.",
  },
];

export default function OurStoryPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-dark">
        Our Story
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-foreground sm:text-5xl">
        Meet the Gallaghers.
      </h1>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/images/family.jpg"
            alt="The Gallagher family, owners of JMG Customs"
            fill
            className="object-cover"
            sizes="(min-width: 640px) 50vw, 100vw"
            priority
          />
        </div>
        <div>
          <p className="leading-relaxed text-foreground/70">
            JMG Customs is a family woodworking business built around a fairly
            simple idea: make things well, make them honestly, make them
            worth keeping.
          </p>
          {/*
            TODO(Colin): swap this paragraph for the real story of how JMG
            started — the brief flags this as a placeholder for your actual
            family history rather than something we should write for you.
          */}
          <p className="mt-4 leading-relaxed text-foreground/70">
            We started JMG because we wanted to build the kind of furniture we
            wanted in our own home — solid, thoughtful, beautiful, and made to
            become part of our family&apos;s story.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/70">
            We&apos;re drawn to old fashioned craftsmanship for a reason.
            Furniture used to be made with the expectation that it would be
            around for a long time. We like that idea. We like knowing that a
            piece we build today might still be in someone&apos;s home decades
            from now.
          </p>
          <p className="mt-4 leading-relaxed text-foreground/70">
            Maybe it&apos;ll have a few scratches. Maybe the finish will have
            changed. Maybe it will have a story or two attached to it.
            That&apos;s okay. Wood is meant to be lived with. And furniture
            should be, too.
          </p>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Why JMG?
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-foreground/70">
          We&apos;re a small shop, which means we&apos;re personally involved
          in the work. You don&apos;t hand your project off to a salesperson
          and wonder who is actually building it. You talk to us. You make
          decisions with us. You see the materials. You see the progress. And
          when the piece is finished, you know the people who made it.
          That&apos;s important to us.
        </p>
      </section>

      <section className="mt-20">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          What We Believe
        </h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {BELIEFS.map((b) => (
            <div key={b.title}>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {b.title}
              </h3>
              <p className="mt-2 leading-relaxed text-foreground/70">
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
