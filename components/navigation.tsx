import Link from "next/link";
import { navItems } from "@/data/site";
import { Container } from "@/components/container";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-graphite-950/80 backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-between gap-5">
        <Link href="/" className="flex items-center gap-3" aria-label="The FileMaker Lab home">
          <span className="relative grid size-9 place-items-center rounded-lg border border-lab-cyan/35 bg-lab-cyan/10 shadow-glow">
            <span className="size-3 rounded-b-full border border-lab-cyan border-t-transparent" />
            <span className="absolute bottom-2 size-1.5 rounded-full bg-lab-green" />
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
            The FileMaker Lab
          </span>
        </Link>
        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
      <nav
        aria-label="Mobile navigation"
        className="flex gap-2 overflow-x-auto border-t border-white/10 px-5 py-3 md:hidden"
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="shrink-0 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-slate-300"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
