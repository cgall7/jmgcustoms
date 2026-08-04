import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="grid gap-12 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-dark">
              Custom woodworking, built by hand
            </p>
            <h1 className="text-balance mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
              Solid wood. No shortcuts. Built to outlast us.
            </h1>
            <p className="text-balance mt-6 max-w-xl text-lg leading-relaxed text-foreground/70">
              JMG Customs designs and builds custom kitchens, tables, and
              furniture — every piece shaped, joined, and finished by hand in
              the shop, not pulled off a shelf.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/gallery"
                className="rounded-full bg-wood-dark px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-ember-dark"
              >
                View the work
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-wood/30 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-ember-dark hover:text-ember-dark"
              >
                Start a project
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="/gallery/tables/table-05.jpg"
              alt="Live-edge slab conference table with hand-forged steel base"
              fill
              className="object-cover"
              sizes="(min-width: 640px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-wood/5">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Featured work
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <Link href="/gallery#kitchen" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/gallery/kitchen/kitchen-15.jpg"
                  alt="Full custom kitchen build with sage cabinetry"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(min-width: 640px) 50vw, 100vw"
                  priority
                />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground group-hover:text-ember-dark">
                Full Kitchen Build
              </h3>
              <p className="mt-1 text-sm text-foreground/60">
                Custom cabinetry, island, and trim — designed and installed
                start to finish.
              </p>
            </Link>
            <Link href="/gallery#tables" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="/gallery/tables/table-13.jpg"
                  alt="Round walnut pedestal table with inlaid map top"
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(min-width: 640px) 50vw, 100vw"
                  priority
                />
              </div>
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground group-hover:text-ember-dark">
                Dining &amp; Occasional Tables
              </h3>
              <p className="mt-1 text-sm text-foreground/60">
                Solid slab tops, hand-cut joinery, finishes that show the
                grain, not hide it.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
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
            <h2 className="font-display text-2xl font-semibold text-foreground">
              A family shop, built on craft
            </h2>
            <p className="mt-4 leading-relaxed text-foreground/70">
              JMG Customs is a small, family-run shop. Every project starts
              with a conversation and a sketch, and ends with a piece
              that&apos;s meant to stay in the family for generations — not
              get replaced in five years.
            </p>
            <Link
              href="/process"
              className="mt-6 inline-block text-sm font-semibold text-ember-dark hover:underline"
            >
              See how we build →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
