import Link from "next/link";
import Image from "next/image";
import { getProject } from "@/data/projects";

const featured = ["county-line-table", "log-house-kitchen", "laundry-room"].map(
  (slug) => getProject(slug)!,
);
const craft = [
  "p05-01.jpg",
  "p05-02.jpg",
  "p05-03.jpg",
  "p06-01.jpg",
  "p06-02.jpg",
  "p06-03.jpg",
];
export default function Home() {
  return (
    <>
      <section className="px-6 py-16 text-center sm:py-24">
        <p className="eyebrow">JMG Customs · Handcrafted Woodworks</p>
        <h1 className="mx-auto mt-5 max-w-4xl font-display text-5xl leading-tight sm:text-7xl">
          Furniture made
          <br />
          to be kept.
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/75">
          Custom hardwood furniture, built and designed by Justin Gallagher.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link className="button" href="/work">
            View the Work
          </Link>
          <Link className="button" href="/start-a-project">
            Start a Project
          </Link>
        </div>
      </section>
      <div className="relative aspect-[4/3] w-full bg-[#e9e5de] sm:aspect-[21/9]">
        <Image
          src="/revisions/boards-hero.webp"
          alt="Handcrafted end grain cutting board set, showing the natural wood pattern"
          fill
          sizes="100vw"
          className="object-cover"
          preload
        />
      </div>
      <section className="bg-[#eee8dd] px-6 py-20 sm:py-28">
        <h2 className="text-center font-display text-4xl sm:text-5xl">
          Some of my Work
        </h2>
        <div className="mx-auto mt-12 grid max-w-7xl gap-10 md:grid-cols-3">
          {featured.map((p) => (
            <article key={p.slug}>
              <Link
                href={`/work/${p.slug}`}
                className="relative block aspect-[3/4] bg-[#f5f1e9]"
              >
                <Image
                  src={p.photos[0]}
                  alt={p.heroAlt ?? p.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-contain"
                />
              </Link>
              <h3 className="mt-5 font-display text-2xl">{p.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">
                {p.slug === "county-line-table"
                  ? "Maple · Custom Map Inlay"
                  : `${p.type} · ${p.wood}`}
              </p>
              <Link href={`/work/${p.slug}`} className="button mt-5">
                View the Project
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/work" className="button">
            View All Work
          </Link>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="eyebrow">Made by hand</p>
          <h2 className="mt-4 font-display text-4xl">
            A small shop.
            <br />A family business.
            <br />A lot of sawdust.
          </h2>
          <p className="mt-6 leading-relaxed text-foreground/75">
            A custom piece begins with your home, your ideas, and a conversation
            with the people who will build it.
          </p>
          <Link href="/our-story" className="button mt-8">
            Our Story
          </Link>
        </div>
        <div className="relative aspect-[4/3]">
          <Image
            src="/images/family.jpg"
            alt="The Gallagher family behind JMG Customs"
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>
      <section className="bg-wood-dark py-20 text-background">
        <div className="px-6 text-center">
          <p className="eyebrow text-background/70">From the workshop</p>
          <h2 className="mt-4 font-display text-4xl">
            Before it’s furniture, it’s just wood.
          </h2>
        </div>
        <div
          className="mt-10 flex overflow-x-auto"
          aria-label="Workshop photographs"
        >
          {craft.map((photo, i) => (
            <div
              key={photo}
              className="relative aspect-square w-1/6 min-w-40 shrink-0"
            >
              <Image
                src={`/revisions/${photo}`}
                alt={`Woodworking process: ${["selecting lumber", "clamping joints", "cutting boards", "fitting a joint", "preparing timber", "finished wood grain"][i]}`}
                fill
                sizes="(min-width: 960px) 17vw, 160px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/the-craft" className="button">
            Explore the Craft
          </Link>
        </div>
      </section>
      <section className="px-6 py-24 text-center">
        <h2 className="font-display text-4xl sm:text-5xl">
          Made for them. Built to last.
        </h2>
        <p className="mt-5">Every project is different.</p>
        <p className="mx-auto mt-3 max-w-xl text-foreground/70">
          If you’re thinking about having something made specifically for your
          home, we’d love to hear what you’re imagining.
        </p>
        <Link href="/start-a-project" className="button mt-8">
          Start a Project
        </Link>
      </section>
    </>
  );
}
