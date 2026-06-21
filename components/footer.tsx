import Link from "next/link";
import { Container } from "@/components/container";
import { navItems } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-graphite-950">
      <Container className="grid gap-8 py-10 sm:grid-cols-[1fr_auto] sm:items-center">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-lab-cyan">
            The FileMaker Lab
          </p>
          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400">
            The place where FileMaker becomes something bigger.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-400" aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
