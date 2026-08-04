import Link from "next/link";
import { PlaceholderPanel } from "@/components/PlaceholderPanel";

export default function Home() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-24">
        <div className="max-w-2xl">
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
      </section>

      <section className="border-y border-line bg-wood/5">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Featured work
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <Link href="/gallery#kitchen" className="group block">
              <PlaceholderPanel
                label="Kitchen project photos"
                className="aspect-[4/3] rounded-lg"
              />
              <h3 className="mt-4 font-display text-xl font-semibold text-foreground group-hover:text-ember-dark">
                Full Kitchen Build
              </h3>
              <p className="mt-1 text-sm text-foreground/60">
                Custom cabinetry, island, and trim — designed and installed
                start to finish.
              </p>
            </Link>
            <Link href="/gallery#tables" className="group block">
              <PlaceholderPanel
                label="Table project photos"
                className="aspect-[4/3] rounded-lg"
              />
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
          <PlaceholderPanel
            label="Family / shop photo"
            className="aspect-[4/3] rounded-lg order-2 sm:order-1"
          />
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
