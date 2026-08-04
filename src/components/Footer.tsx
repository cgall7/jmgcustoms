import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line bg-wood-dark text-background/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <Logo className="[&_.text-foreground]:text-background [&_.text-wood]:text-background/60" />
        <div className="flex flex-col gap-1 text-sm text-background/70 sm:text-right">
          <a href="mailto:hello@jmgcustoms.com" className="hover:text-background">
            hello@jmgcustoms.com
          </a>
          <p>&copy; {new Date().getFullYear()} JMG Customs. Built by hand, one piece at a time.</p>
        </div>
      </div>
    </footer>
  );
}
