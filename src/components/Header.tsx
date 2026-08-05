import Link from "next/link";
import { Logo } from "./Logo";

const NAV = [
  { href: "/gallery", label: "Gallery" },
  { href: "/process", label: "Process" },
  { href: "/shop", label: "Shop" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="shrink-0">
          <Logo />
        </Link>
        <nav className="flex items-center gap-8">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-ember-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
