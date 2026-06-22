import Link from "next/link";
import { navItems } from "@/data/site";
import { Container } from "@/components/container";

const languages = [
  { label: "English", flag: "🇺🇸" },
  { label: "French", flag: "🇫🇷" },
  { label: "Spanish", flag: "🇪🇸" }
];

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-graphite-950/80 backdrop-blur-xl">
      <Container className="grid min-h-16 grid-cols-[1fr_auto_1fr] items-center gap-4">
        <div aria-hidden="true" />
        <nav aria-label="Primary navigation" className="hidden items-center justify-center gap-2 md:flex">
          {navItems.map((item) => (
            <Link
              key={`${item.href}-${item.label}`}
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
        <details className="group relative justify-self-end">
          <summary className="flex min-h-10 cursor-pointer list-none items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-lab-green/40 hover:bg-white/[0.06] [&::-webkit-details-marker]:hidden">
            <span aria-hidden="true">🇺🇸</span>
            <span className="hidden sm:inline">English</span>
            <span aria-hidden="true" className="text-lab-green transition group-open:rotate-90">
              -&gt;
            </span>
          </summary>
          <div className="absolute right-0 top-12 z-50 w-44 overflow-hidden rounded-lg border border-white/10 bg-graphite-950/95 p-1 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            {languages.map((language) => (
              <button
                key={language.label}
                type="button"
                className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm text-slate-300 transition hover:bg-white/[0.07] hover:text-white"
              >
                <span aria-hidden="true">{language.flag}</span>
                <span>{language.label}</span>
              </button>
            ))}
          </div>
        </details>
      </Container>
      <nav
        aria-label="Mobile navigation"
        className="flex gap-2 overflow-x-auto border-t border-white/10 px-5 py-3 md:hidden"
      >
        {navItems.map((item) => (
          <Link
            key={`${item.href}-${item.label}`}
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
