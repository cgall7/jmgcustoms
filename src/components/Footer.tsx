import Link from "next/link";
import { Logo } from "./Logo";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/our-story", label: "Our Story" },
  { href: "/the-craft", label: "The Craft" },
  { href: "/start-a-project", label: "Start a Project" },
  { href: "/shop", label: "Shop" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-wood-dark text-background/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Logo className="[&_.text-foreground]:text-background [&_.text-wood]:text-background/60" />
          <p className="mt-4 max-w-xs text-sm text-background/60">
            Furniture made to be kept.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-background/70">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-background"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-col gap-1 text-sm text-background/70 sm:text-right">
          <a
            href="mailto:hello@jmgcustoms.com"
            className="hover:text-background"
          >
            hello@jmgcustoms.com
          </a>
          <p>&copy; {new Date().getFullYear()} JMG Customs.</p>
          <p>Built by hand, one piece at a time.</p>
        </div>
      </div>
    </footer>
  );
}
