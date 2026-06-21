import { Container } from "@/components/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(56,232,255,0.08),transparent_35%,rgba(154,108,255,0.09)_72%,transparent)]" />
      <Container className="relative py-20 sm:py-24">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-lab-cyan">
          {eyebrow}
        </p>
        <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          {description}
        </p>
      </Container>
    </section>
  );
}
