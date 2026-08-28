import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | JMG Customs",
  description: "Start a custom woodworking project with JMG Customs.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20">
      <h1 className="font-display text-4xl font-semibold text-foreground">
        Start a project
      </h1>
      <p className="mt-3 text-foreground/70">
        Tell us what you&apos;re picturing — a kitchen, a table, a full room
        of built-ins — and we&apos;ll follow up to talk scope, timeline, and
        budget.
      </p>

      <form className="mt-10 space-y-6" action="mailto:hello@jmgcustoms.com" method="post" encType="text/plain">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="mt-2 w-full rounded-md border border-line bg-background px-4 py-2.5 text-foreground focus:border-ember-dark focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full rounded-md border border-line bg-background px-4 py-2.5 text-foreground focus:border-ember-dark focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="project" className="block text-sm font-medium text-foreground">
            Tell us about your project
          </label>
          <textarea
            id="project"
            name="project"
            rows={5}
            required
            className="mt-2 w-full rounded-md border border-line bg-background px-4 py-2.5 text-foreground focus:border-ember-dark focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="rounded-full bg-wood-dark px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-ember-dark"
        >
          Send
        </button>
      </form>

      <p className="mt-8 text-sm text-foreground/60">
        Prefer email? Reach us directly at{" "}
        <a href="mailto:hello@jmgcustoms.com" className="text-ember-dark hover:underline">
          hello@jmgcustoms.com
        </a>
        .
      </p>
    </div>
  );
}
