"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";

const NAV = [
  { href: "/work", label: "Work" },
  { href: "/our-story", label: "Our Story" },
  { href: "/the-craft", label: "The Craft" },
  { href: "/shop", label: "Shop" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 sm:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium tracking-wide text-foreground/80 transition-colors hover:text-ember-dark"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/start-a-project"
            className="rounded-full bg-wood-dark px-5 py-2 text-sm font-semibold text-background transition-colors hover:bg-ember-dark"
          >
            Start a Project
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
        >
          <span
            className={`h-px w-6 bg-foreground transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-foreground transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-6 py-4 sm:hidden">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm font-medium tracking-wide text-foreground/80"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/start-a-project"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-wood-dark px-5 py-2.5 text-center text-sm font-semibold text-background"
          >
            Start a Project
          </Link>
        </nav>
      )}
    </header>
  );
}
