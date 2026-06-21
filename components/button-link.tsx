import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg px-5 py-3 text-sm font-semibold transition duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-lab-cyan/70",
        variant === "primary" &&
          "bg-lab-cyan text-graphite-950 shadow-glow hover:bg-white",
        variant === "secondary" &&
          "border border-white/15 bg-white/[0.04] text-white hover:border-lab-cyan/55 hover:bg-white/[0.08]",
        className
      )}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="transition group-hover:translate-x-0.5">
        -&gt;
      </span>
    </Link>
  );
}
