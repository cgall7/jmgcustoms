import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Start a Project | JMG Customs",
  description: "Start a custom woodworking project with JMG Customs.",
};

const FAQS = [
  {
    q: "How much does custom furniture cost?",
    a: "Every project is different. Size, wood species, design, construction, and finishing all affect the final price. We'd rather understand the project first and give you an honest number than try to fit every piece into a predetermined price.",
  },
  {
    q: "How long does a custom piece take?",
    a: "Because each piece is made individually, custom furniture takes longer than ordering something from a showroom. That's intentional.",
  },
  {
    q: "What kind of wood do you use?",
    a: "We primarily work with solid hardwoods and select each piece of lumber based on the project.",
  },
  {
    q: "Do you use plywood or MDF?",
    a: "For furniture where solid hardwood is appropriate, we prioritize solid wood and traditional construction. If a particular material makes sense for a specific application, we'll explain why.",
  },
  {
    q: "Can I provide my own design?",
    a: "Absolutely. If you already have plans, sketches, photographs, or inspiration, we'd love to see them. If you don't, that's okay too — we can develop the design together.",
  },
  {
    q: "Can you build something I've seen somewhere else?",
    a: "Send it to us. We can talk about what you like about it and develop a design that makes sense for your space and needs.",
  },
  {
    q: "Do you deliver?",
    a: "For larger furniture, kitchens, and built-ins, we can coordinate delivery and installation as appropriate.",
  },
  {
    q: "Do you only build tables?",
    a: "No. Beyond dining tables, coffee tables, and desks, we also do full room renovations, kitchens, cabinetry, vanities, shelving, and bedroom furniture.",
  },
];

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        {!required && (
          <span className="ml-1 font-normal text-foreground/40">(optional)</span>
        )}
      </label>
      {children}
    </div>
  );
}

const inputClass =
  "mt-2 w-full rounded-md border border-line bg-background px-4 py-2.5 text-foreground focus:border-ember-dark focus:outline-none";

export default function StartAProjectPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:py-24">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-ember-dark">
        Start a Project
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-foreground sm:text-5xl">
        Let&apos;s build something worth keeping.
      </h1>
      <p className="mt-5 leading-relaxed text-foreground/70">
        Maybe you know exactly what you want. Maybe you have a room that needs
        something but don&apos;t know where to begin. Maybe you&apos;ve been
        looking for the right piece for years and haven&apos;t found it.
        Start there — tell us what you&apos;re thinking, and we&apos;ll start
        with a conversation.
      </p>

      <form
        className="mt-12 space-y-6"
        action="mailto:hello@jmgcustoms.com"
        method="post"
        encType="text/plain"
      >
        <Field id="name" label="Name" required>
          <input id="name" name="name" type="text" required className={inputClass} />
        </Field>

        <Field id="email" label="Email" required>
          <input id="email" name="email" type="email" required className={inputClass} />
        </Field>

        <Field id="phone" label="Phone">
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </Field>

        <Field id="project" label="What are you thinking about having built?">
          <textarea id="project" name="project" rows={4} className={inputClass} />
        </Field>

        <Field id="wood" label="What type of wood are you considering?">
          <input id="wood" name="wood" type="text" className={inputClass} />
        </Field>

        <Field id="timeline" label="When would you ideally like the project completed?">
          <input id="timeline" name="timeline" type="text" className={inputClass} />
        </Field>

        <Field id="budget" label="What investment range are you considering?">
          <input id="budget" name="budget" type="text" className={inputClass} />
        </Field>

        <Field id="inspiration" label="Links to inspiration or space photos">
          <input
            id="inspiration"
            name="inspiration"
            type="text"
            placeholder="Paste a Google Photos / Drive link, or just attach them when we reply"
            className={inputClass}
          />
        </Field>

        <Field id="notes" label="Tell us anything else we should know">
          <textarea id="notes" name="notes" rows={4} className={inputClass} />
        </Field>

        <button
          type="submit"
          className="rounded-full bg-wood-dark px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-ember-dark"
        >
          Start the Conversation
        </button>
      </form>

      <p className="mt-8 text-sm text-foreground/60">
        Prefer email? Reach us directly at{" "}
        <a href="mailto:hello@jmgcustoms.com" className="text-ember-dark hover:underline">
          hello@jmgcustoms.com
        </a>
        .
      </p>

      <section className="mt-20 border-t border-line pt-12">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          What happens next?
        </h2>
        <p className="mt-4 leading-relaxed text-foreground/70">
          Once we receive your inquiry, we&apos;ll review the project and
          reach out to continue the conversation. From there we&apos;ll talk
          through the scope, design, materials, timeline, and budget. No
          pressure — just a conversation about what you&apos;re hoping to
          build.
        </p>
      </section>

      <section className="mt-16 border-t border-line pt-12">
        <h2 className="font-display text-2xl font-semibold text-foreground">
          Frequently Asked Questions
        </h2>
        <div className="mt-8 space-y-8">
          {FAQS.map((f) => (
            <div key={f.q}>
              <h3 className="font-display text-lg font-semibold text-foreground">
                {f.q}
              </h3>
              <p className="mt-2 leading-relaxed text-foreground/70">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
