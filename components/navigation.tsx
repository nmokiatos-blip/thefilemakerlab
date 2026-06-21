import Link from "next/link";
import { navItems } from "@/data/site";
import { Container } from "@/components/container";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-graphite-950/80 backdrop-blur-xl">
      <Container className="flex min-h-16 items-center justify-center">
        <nav aria-label="Primary navigation" className="hidden items-center justify-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                item.label === "Work With Nick"
                  ? "inline-flex items-center gap-2 rounded-lg border border-lab-green/40 bg-lab-green/10 px-4 py-2 text-sm font-semibold text-lab-green shadow-[0_0_28px_rgba(89,240,165,0.12)] transition hover:border-lab-green/70 hover:bg-lab-green hover:text-graphite-950"
                  : "rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/[0.06] hover:text-white"
              }
            >
              <span>{item.label}</span>
              {item.label === "Work With Nick" ? (
                <span aria-hidden="true">-&gt;</span>
              ) : null}
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
            className={
              item.label === "Work With Nick"
                ? "inline-flex shrink-0 items-center gap-2 rounded-lg border border-lab-green/40 bg-lab-green/10 px-3 py-2 text-xs font-semibold text-lab-green"
                : "shrink-0 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs font-medium text-slate-300"
            }
          >
            <span>{item.label}</span>
            {item.label === "Work With Nick" ? (
              <span aria-hidden="true">-&gt;</span>
            ) : null}
          </Link>
        ))}
      </nav>
    </header>
  );
}
