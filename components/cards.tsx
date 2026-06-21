import { cn } from "@/lib/utils";

type FeatureCardProps = {
  title: string;
  eyebrow: string;
  description: string;
  accent?: string;
};

const accentClasses: Record<string, string> = {
  cyan: "border-lab-cyan/40 text-lab-cyan",
  blue: "border-lab-blue/40 text-lab-blue",
  violet: "border-lab-violet/40 text-lab-violet",
  green: "border-lab-green/40 text-lab-green",
  amber: "border-lab-amber/40 text-lab-amber"
};

export function FeatureCard({
  title,
  eyebrow,
  description,
  accent = "cyan"
}: FeatureCardProps) {
  return (
    <article className="lab-card group relative overflow-hidden p-6 transition duration-200 hover:-translate-y-1 hover:border-white/24">
      <div
        className={cn(
          "mb-5 inline-flex rounded-lg border px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em]",
          accentClasses[accent]
        )}
      >
        {eyebrow}
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-slate-300">{description}</p>
      <div className="mt-6 h-px w-full bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
    </article>
  );
}

type ListingCardProps = {
  title: string;
  description: string;
  meta: string;
  index?: number;
};

export function ListingCard({ title, description, meta, index }: ListingCardProps) {
  return (
    <article className="lab-card p-6 transition duration-200 hover:-translate-y-1 hover:border-lab-cyan/35">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-lab-cyan">
          {meta}
        </span>
        {typeof index === "number" ? (
          <span className="font-mono text-sm text-slate-500">
            {String(index + 1).padStart(2, "0")}
          </span>
        ) : null}
      </div>
      <h3 className="text-xl font-semibold leading-snug text-white">{title}</h3>
      <p className="mt-4 text-sm leading-6 text-slate-300">{description}</p>
    </article>
  );
}
