import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "The Craft | JMG Customs",
  description: "How JMG Customs selects wood, builds, and finishes every piece by hand.",
};

const STEPS = [
  {
    title: "01 — The Conversation",
    body: "We talk about the space. How will you use the piece? Who will use it? What are you hoping it becomes? From there, we start developing the idea.",
  },
  {
    title: "02 — The Design",
    body: "We work through proportions, dimensions, materials, and details until the design feels right — sometimes a sketch, sometimes photographs and inspiration, sometimes standing in the room with a tape measure.",
  },
  {
    title: "03 — Choosing the Wood",
    body: "Once we know what we're building, we select the material. We look for the right combination of grain, color, character, and stability. The wood isn't just a material — it's part of the design.",
  },
  {
    title: "04 — Building",
    body: "This is where the drawings become something real. Boards are milled, parts are cut, joints are fitted, and everything gets assembled, checked, adjusted, and refined. This is the part that takes time — and we're okay with that.",
  },
  {
    title: "05 — Finishing",
    body: "The final finish is applied by hand to protect the piece and bring out the natural character of the wood. The goal isn't to make the wood look like something else. The goal is to make the wood look like itself, at its best.",
  },
  {
    title: "06 — Delivery",
    body: "For built-ins and larger projects, installation is completed on-site so the finished work fits the actual space, not just the original drawing.",
  },
];

export default function TheCraftPage() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-dark">
          The Craft
        </p>
        <h1 className="text-balance mt-3 max-w-2xl font-display text-4xl font-semibold text-foreground sm:text-5xl">
          Before it&apos;s furniture, it&apos;s just wood.
        </h1>
        <p className="mt-5 max-w-xl leading-relaxed text-foreground/70">
          Every piece begins with rough lumber. There&apos;s a lot that
          happens between that first board and the finished piece sitting in
          someone&apos;s home. We select. We measure. We cut. We fit. We
          sand. We finish. And sometimes we start over — that&apos;s part of
          making something by hand.
        </p>
      </div>

      <div className="relative aspect-[16/9] w-full sm:aspect-[21/9]">
        <Image
          src="/gallery/tables/table-20.jpg"
          alt="Live-edge tabletop mid-build in the JMG Customs workshop"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <section>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            The details you don&apos;t notice are often the ones that matter
            most.
          </h2>
          <p className="mt-4 max-w-2xl leading-relaxed text-foreground/70">
            Good furniture isn&apos;t just about what you see — it&apos;s
            about what&apos;s underneath it. We use traditional woodworking
            techniques where they make sense for the piece. We don&apos;t use
            a complicated joint just so we can say we used one. Every joint
            has a job. Every material has a reason. Every detail is
            considered with the life of the piece in mind.
          </p>
        </section>

        <div className="mt-16 grid gap-10 sm:grid-cols-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              The Wood
            </h3>
            <p className="mt-2 leading-relaxed text-foreground/70">
              We look at grain, color, character, movement, and how each
              board will work within the finished design. We choose the
              board that fits each job — not simply whatever is closest.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              Joinery
            </h3>
            <p className="mt-2 leading-relaxed text-foreground/70">
              Mortise-and-tenon. Dovetails. Dowels. Carefully fitted joints.
              The specific construction depends on the piece, but the
              principle stays the same: build it so it can live a long life.
            </p>
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              The Finish
            </h3>
            <p className="mt-2 leading-relaxed text-foreground/70">
              We use hand-applied finishes chosen to protect the furniture
              while allowing the natural character of the wood to remain
              visible. You should be able to see the grain and feel the
              material.
            </p>
          </div>
        </div>

        <p className="mt-16 max-w-2xl border-t border-line pt-10 leading-relaxed text-foreground/70">
          Before anything leaves the shop, we take the time to look at the
          edges, surfaces, joints, finish, and fit. Everything needs to feel
          right — because once it leaves the shop, it&apos;s no longer just
          something we built. It&apos;s something we&apos;re putting our name
          on.
        </p>
      </div>

      <div className="border-t border-line bg-wood/5">
        <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
          <h2 className="font-display text-3xl font-semibold text-foreground">
            Our Process
          </h2>
          <p className="mt-3 max-w-xl text-foreground/70">
            Every project starts with a conversation. You don&apos;t need to
            arrive with a finished drawing — tell us what you&apos;re trying
            to accomplish, and we&apos;ll figure out the rest together.
          </p>
          <ol className="mt-12 space-y-10 border-l border-line pl-8">
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
      </div>
    </div>
  );
}
