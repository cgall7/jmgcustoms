import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Process | JMG Customs",
  description: "How JMG Customs designs and builds every piece, start to finish.",
};

const STEPS = [
  {
    title: "1. Conversation & sketch",
    body: "Every project starts with a conversation about how the piece will actually be used, then a rough sketch to nail down scale and proportions before any wood is touched.",
  },
  {
    title: "2. Material selection",
    body: "We hand-pick solid stock — no veneers, no MDF — choosing boards for grain and character, not just for what's cheapest to run through the shop.",
  },
  {
    title: "3. Build & joinery",
    body: "Joints are cut, not stapled together. Mortise-and-tenon, dovetails, and doweled joinery where it counts, so pieces hold up for decades of real use.",
  },
  {
    title: "4. Finish",
    body: "Hand-applied finishes that protect the wood without burying the grain under a plastic sheen.",
  },
  {
    title: "5. Delivery & install",
    body: "For kitchens and built-ins, we deliver and install on-site, fitting the piece to the actual room, not just the drawing.",
  },
];

export default function ProcessPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="font-display text-4xl font-semibold text-foreground">
        Our Process
      </h1>
      <p className="mt-3 max-w-2xl text-foreground/70">
        JMG Customs is a family shop — hi, we&apos;re the Gallaghers. Every
        piece that leaves the shop goes through the same five steps, whether
        it&apos;s a full kitchen or a single side table.
      </p>

      <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:items-center">
        <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
          <Image
            src="/images/family.jpg"
            alt="The Gallagher family, owners of JMG Customs"
            fill
            className="object-cover"
            sizes="(min-width: 640px) 50vw, 100vw"
          />
        </div>
        <div>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Why we build this way
          </h2>
          <p className="mt-4 leading-relaxed text-foreground/70">
            We got into this because we wanted furniture that would still be
            around for our kids&apos; kids — not the kind you replace in five
            years. That&apos;s still the standard for every piece we build
            today.
          </p>
        </div>
      </div>

      <ol className="mt-16 space-y-10 border-l border-line pl-8">
        {STEPS.map((step) => (
          <li key={step.title}>
            <h3 className="font-display text-xl font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 max-w-2xl leading-relaxed text-foreground/70">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
