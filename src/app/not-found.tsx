import Link from "next/link";
export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <p className="eyebrow">Page not found</p>
      <h1 className="mt-4 font-display text-4xl">
        Let’s get you back to the workshop.
      </h1>
      <p className="mt-5 text-foreground/70">
        That page may have moved. Explore our work or tell us what you’d like to
        have made.
      </p>
      <Link href="/work" className="button mt-8">
        Explore the Work
      </Link>
    </section>
  );
}
