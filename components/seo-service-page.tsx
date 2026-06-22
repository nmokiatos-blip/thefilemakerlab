import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { majorSeoLinks, type SeoServicePage } from "@/data/seo-pages";

type SeoServicePageProps = {
  page: SeoServicePage;
  jsonLd?: object;
};

function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SeoServicePage({ page, jsonLd }: SeoServicePageProps) {
  return (
    <main className="overflow-hidden">
      {jsonLd ? <JsonLd data={jsonLd} /> : null}

      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 lab-grid opacity-30" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(56,232,255,0.11),transparent_38%,rgba(89,240,165,0.08)_72%,transparent)]" />
        <Container className="relative grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-lab-cyan">
              {page.eyebrow}
            </p>
            <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {page.intro}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={page.cta.href}>{page.cta.label}</ButtonLink>
              <ButtonLink href="/filemaker-pricing" variant="secondary">
                View Pricing
              </ButtonLink>
            </div>
          </div>

          <aside className="lab-card p-6 sm:p-8" aria-label="Core FileMaker services">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-lab-green">
              Focus areas
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {page.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-semibold text-slate-200"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </aside>
        </Container>
      </section>

      <section className="section-reveal py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {page.sections.map((section, index) => (
              <article key={section.title} className="lab-card p-6">
                <p className="font-mono text-sm text-lab-cyan">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-6 text-2xl font-semibold leading-tight text-white">
                  {section.title}
                </h2>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-reveal border-y border-white/10 bg-white/[0.02] py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader
              eyebrow="Explore the lab"
              title="Related FileMaker services."
              description="Move between consulting, pricing, AI, plugins, performance, modernization, training, and Nick Hunter's background."
            />
            <nav
              aria-label="Major FileMaker service pages"
              className="grid gap-3 sm:grid-cols-2"
            >
              {majorSeoLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="lab-panel flex min-h-16 items-center justify-between gap-4 p-4 text-sm font-semibold text-slate-200 transition hover:border-lab-cyan/45 hover:text-white"
                >
                  <span>{link.label}</span>
                  <span aria-hidden="true" className="text-lab-green">
                    -&gt;
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </section>

      <section className="section-reveal py-24 sm:py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-lab-cyan">
              Work with Nick
            </p>
            <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl">
              {page.cta.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              {page.cta.body}
            </p>
            <div className="mt-9">
              <ButtonLink href={page.cta.href}>{page.cta.label}</ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
