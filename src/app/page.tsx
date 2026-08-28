import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid gap-12 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-dark">
              Handcrafted Woodworks
            </p>
            <h1 className="text-balance mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
              Furniture made to be kept.
            </h1>
            <p className="text-balance mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">
              Custom hardwood furniture, designed and built by the Gallagher
              family.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/work"
                className="rounded-full bg-wood-dark px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-ember-dark"
              >
                View the Work
              </Link>
              <Link
                href="/start-a-project"
                className="rounded-full border border-wood/30 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-ember-dark hover:text-ember-dark"
              >
                Start a Project
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/gallery/kitchen/kitchen-05.jpg"
              alt="Custom kitchen built by JMG Customs, sage cabinetry with white oak island"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* WORK */}
      <section className="border-y border-line bg-wood/5">
        <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-dark">
              Work
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-semibold text-foreground sm:text-4xl">
              Every piece has a reason for being made.
            </h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <Link href="/work#kitchen" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/gallery/kitchen/kitchen-15.jpg"
                  alt="Full custom kitchen build with sage cabinetry"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <p className="mt-4 font-display text-lg font-semibold text-foreground group-hover:text-ember-dark">
                Full Kitchen Build
              </p>
            </Link>
            <Link href="/work#tables" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/gallery/tables/table-13.jpg"
                  alt="Round walnut pedestal table with inlaid map top"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 640px) 50vw, 100vw"
                />
              </div>
              <p className="mt-4 font-display text-lg font-semibold text-foreground group-hover:text-ember-dark">
                Dining &amp; Occasional Tables
              </p>
            </Link>
          </div>
          <Link
            href="/work"
            className="mt-8 inline-block text-sm font-semibold text-ember-dark hover:underline"
          >
            View the Work →
          </Link>
        </div>
      </section>

      {/* CUSTOM */}
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-dark">
              Custom
            </p>
            <h2 className="text-balance mt-3 font-display text-3xl font-semibold leading-snug text-foreground sm:text-4xl">
              Made for your home.
              <br />
              Made for your family.
              <br />
              Made to stay.
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-foreground/70">
              A custom piece is designed around your room, built from wood you
              helped choose, and made by people you actually know.
            </p>
            <Link
              href="/start-a-project"
              className="mt-6 inline-block text-sm font-semibold text-ember-dark hover:underline"
            >
              Start a Project →
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/gallery/tables/table-27.jpg"
              alt="Custom dining table built by JMG Customs"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* FAMILY */}
      <section className="border-y border-line bg-wood/5">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <div className="grid gap-10 sm:grid-cols-2 sm:items-center">
            <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-lg sm:order-1">
              <Image
                src="/images/family.jpg"
                alt="The Gallagher family, owners of JMG Customs"
                fill
                className="object-cover"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="order-1 sm:order-2">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-dark">
                Family
              </p>
              <h2 className="text-balance mt-3 font-display text-3xl font-semibold text-foreground sm:text-4xl">
                A small shop. A family business. A lot of sawdust.
              </h2>
              <Link
                href="/our-story"
                className="mt-6 inline-block text-sm font-semibold text-ember-dark hover:underline"
              >
                Meet the Gallaghers →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CRAFT — quiet, editorial, one line over a full-width photo */}
      <section className="relative flex min-h-[70vh] items-end overflow-hidden sm:min-h-[80vh]">
        <Image
          src="/gallery/tables/table-11.jpg"
          alt="Rough lumber and a table build in progress on the JMG Customs shop floor"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/80 via-wood-dark/10 to-transparent" />
        <div className="relative mx-auto w-full max-w-6xl px-6 py-12 sm:py-16">
          <h2 className="text-balance max-w-xl font-display text-3xl font-semibold text-background sm:text-4xl">
            Before it&apos;s furniture, it&apos;s just wood.
          </h2>
          <Link
            href="/the-craft"
            className="mt-5 inline-block text-sm font-semibold text-background/90 hover:underline"
          >
            Explore the Craft →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-24 text-center sm:py-32">
        <h2 className="text-balance mx-auto max-w-2xl font-display text-3xl font-semibold text-foreground sm:text-5xl">
          Let&apos;s build something worth keeping.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-foreground/70">
          Tell us what you&apos;re imagining, and we&apos;ll start with a
          conversation.
        </p>
        <Link
          href="/start-a-project"
          className="mt-8 inline-block rounded-full bg-wood-dark px-8 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-ember-dark"
        >
          Start a Project
        </Link>
      </section>
    </>
  );
}
