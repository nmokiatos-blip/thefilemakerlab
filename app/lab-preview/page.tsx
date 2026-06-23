import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { IntroCarousel } from "@/components/intro-carousel";
import { SectionHeader } from "@/components/section-header";
import { majorSeoLinks } from "@/data/seo-pages";
import {
  fieldReports,
  labNoteShorts,
  labSessions,
  labToolCards,
  services
} from "@/data/site";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "The FileMaker Lab Preview",
  robots: {
    index: false,
    follow: false
  }
};

const homeSeoLinks = [
  ...majorSeoLinks,
  { href: "/contact", label: "Contact The FileMaker Lab" }
];

function PlayIcon() {
  return (
    <span className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/10 text-lab-cyan shadow-glow transition group-hover:scale-105 group-hover:bg-lab-cyan group-hover:text-graphite-950">
      <span className="ml-0.5 h-0 w-0 border-y-[6px] border-l-[9px] border-y-transparent border-l-current" />
    </span>
  );
}

function DownloadIcon() {
  return (
    <span aria-hidden="true" className="relative size-4">
      <span className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-current" />
      <span className="absolute bottom-0 left-1/2 size-2 -translate-x-1/2 rotate-45 border-b border-r border-current" />
    </span>
  );
}

function ShortThumbnail({ accent }: { accent: string }) {
  const accentMap: Record<string, string> = {
    cyan: "from-lab-cyan/35 via-lab-cyan/10",
    green: "from-lab-green/35 via-lab-green/10",
    blue: "from-lab-blue/35 via-lab-blue/10",
    violet: "from-lab-violet/35 via-lab-violet/10",
    red: "from-red-400/35 via-red-400/10"
  };

  return (
    <div className={`relative aspect-[9/14] overflow-hidden rounded-lg bg-gradient-to-br ${accentMap[accent] ?? accentMap.cyan} to-graphite-950`}>
      <div className="lab-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-x-5 top-5 h-20 rounded-lg border border-white/10 bg-black/20" />
      <div className="absolute inset-x-5 bottom-5 space-y-2">
        <div className="h-2 rounded-full bg-white/35" />
        <div className="h-2 w-2/3 rounded-full bg-white/20" />
      </div>
      <div className="absolute right-4 top-4 size-2 rounded-full bg-red-300 shadow-[0_0_18px_rgba(252,165,165,0.9)]" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden">
      <section className="relative border-b border-white/10 bg-black">
        <Image
          src="/images/the-filemaker-lab-command-center.png"
          alt="The FileMaker Lab futuristic command center visual with Nick Hunter, FileMaker panels, code, and green lab branding"
          width={1680}
          height={944}
          priority
          className="mx-auto h-auto w-full max-w-[1680px]"
          sizes="100vw"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-graphite-950 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-10 pb-8 sm:pb-12">
          <Container>
            <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
              The FileMaker Lab
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
              FileMaker consulting, AI-assisted development, plugin
              development, performance optimization, modernization,
              automation, and training with Nick Hunter.
            </p>
          </Container>
        </div>
      </section>

      <section className="section-reveal border-b border-white/10 py-20 sm:py-28">
        <Container>
          <IntroCarousel />
        </Container>
      </section>

      <section className="section-reveal border-b border-white/10 bg-white/[0.02] py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader
              eyebrow="FileMaker services"
              title="Find the exact kind of FileMaker help you need."
              description="The FileMaker Lab has focused pages for consulting, pricing, AI development, plugin development, performance optimization, modernization, training, webinars, Nick Hunter's background, and contact."
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {homeSeoLinks.map((link) => (
                <ButtonLink key={link.href} href={link.href} variant="secondary">
                  {link.label}
                </ButtonLink>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="lab-notes" className="section-reveal py-24 sm:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              eyebrow="Lab Notes"
              title="Short ideas, sharp observations, and companion notes from the lab."
            />
            <ButtonLink href="/lab-notes" variant="secondary">
              View All Lab Notes
            </ButtonLink>
          </div>
          <div className="mt-12 flex gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {labNoteShorts.map((note) => (
              <article key={note.title} className="group w-64 shrink-0">
                <div className="lab-card overflow-hidden p-3 transition duration-300 group-hover:-translate-y-1 group-hover:border-lab-cyan/45">
                  <ShortThumbnail accent={note.accent} />
                  <div className="p-3">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="rounded-full border border-lab-cyan/30 bg-lab-cyan/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-lab-cyan">
                        Short
                      </span>
                      <PlayIcon />
                    </div>
                    <h3 className="text-lg font-semibold leading-snug text-white">
                      {note.title}
                    </h3>
                    <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
                      {note.date}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="lab-sessions" className="section-reveal border-y border-white/10 bg-white/[0.02] py-24 sm:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              eyebrow="Lab Sessions"
              title="Deep dives, webinars, and long-form experiments."
            />
            <ButtonLink href="/filemaker-webinars" variant="secondary">
              Watch Lab Sessions
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {labSessions.slice(0, 2).map((session) => (
              <article key={session.number} className="group lab-card overflow-hidden p-4 transition duration-300 hover:-translate-y-1 hover:border-lab-cyan/45">
                <div className="relative aspect-video overflow-hidden rounded-lg bg-[radial-gradient(circle_at_70%_25%,rgba(56,232,255,0.28),transparent_36%),linear-gradient(135deg,rgba(89,240,165,0.15),rgba(5,6,8,0.96))]">
                  <div className="lab-grid absolute inset-0 opacity-65" />
                  <div className="absolute left-5 top-5 rounded-lg border border-white/10 bg-black/25 px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-lab-green">
                    Session {session.number}
                  </div>
                  <div className="absolute inset-0 grid place-items-center">
                    <PlayIcon />
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <span className="rounded-full border border-lab-cyan/30 bg-lab-cyan/10 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-lab-cyan">
                    Lab Session
                  </span>
                  <h3 className="mt-5 text-2xl font-semibold leading-tight text-white">
                    {session.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {session.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="lab-tools" className="section-reveal py-24 sm:py-32">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              eyebrow="Lab Tools"
              title="Sample files, plugins, snippets, and prompts."
            />
            <ButtonLink href="/tools" variant="secondary">
              Download Lab Tools
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {labToolCards.map((tool) => (
              <article key={tool.title} className="lab-card group flex min-h-72 flex-col p-6 transition duration-300 hover:-translate-y-1 hover:border-lab-green/45">
                <div className="grid size-14 place-items-center rounded-lg border border-lab-cyan/30 bg-lab-cyan/10 font-mono text-sm font-semibold text-lab-cyan shadow-glow">
                  {tool.icon}
                </div>
                <h3 className="mt-8 text-2xl font-semibold text-white">{tool.title}</h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{tool.description}</p>
                <a
                  href="mailto:hello@thefilemakerlab.com?subject=Lab%20Tools"
                  className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-semibold text-lab-cyan transition group-hover:text-white"
                >
                  Download <DownloadIcon />
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="field-reports" className="section-reveal border-y border-white/10 bg-graphite-900/70 py-24 sm:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <SectionHeader
                eyebrow="Field Reports"
                title="Real-world problems. Real systems. Real solutions."
              />
              <div className="mt-8">
                <ButtonLink href="/lab-notes" variant="secondary">
                  Read Field Reports
                </ButtonLink>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {fieldReports.map((report, index) => (
                <article key={report.title} className="lab-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-lab-cyan/45">
                  <p className="font-mono text-sm text-lab-green">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-8 text-xl font-semibold leading-tight text-white">
                    {report.title}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {report.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="beyond" className="section-reveal relative py-28 sm:py-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(56,232,255,0.16),transparent_36%)]" />
        <Container className="relative">
          <div className="mx-auto max-w-5xl text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.26em] text-lab-cyan">
              FileMaker and AI
            </p>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
              FileMaker has always been more than a database. It has always been a bridge.
            </h2>
            <div className="mx-auto mt-10 max-w-3xl space-y-6 text-lg leading-8 text-slate-300">
              <p>
                FileMaker crossed every major technology wave: business networks,
                the internet, mobile, APIs, cloud services, automation, and now AI.
              </p>
              <p>
                AI does not make FileMaker less relevant. It makes FileMaker more
                powerful.
              </p>
              <p>
                The future belongs to builders who connect FileMaker to the next
                wave: AI, native code, plugins, automation engines, APIs, and
                serious real-world systems.
              </p>
            </div>
            <p className="mt-12 text-balance text-3xl font-semibold leading-tight text-lab-green sm:text-5xl">
              Don&apos;t run from the AI wave. Learn to ride it.
            </p>
          </div>
        </Container>
      </section>

      <section id="work" className="section-reveal border-t border-white/10 py-24 sm:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <SectionHeader
                eyebrow="Work With Nick"
                title="Bring your problem into the lab."
                description="No heavy contracts. No complicated process. Book the time you need. Bring the problem. Let's solve it."
              />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="mailto:hello@thefilemakerlab.com">Work With Nick</ButtonLink>
                <ButtonLink href="mailto:hello@thefilemakerlab.com?subject=Book%20a%20Lab%20Clinic" variant="secondary">
                  Bring Your FileMaker Problem to the Lab
                </ButtonLink>
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {services.map((service) => (
                <article key={service.title} className="lab-card p-6 transition duration-300 hover:-translate-y-1 hover:border-lab-cyan/45">
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-slate-300">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
