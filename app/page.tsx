import Image from "next/image";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { FeatureCard, ListingCard } from "@/components/cards";
import { LabConsole } from "@/components/lab-console";
import { SectionHeader } from "@/components/section-header";
import { labAreas, labNotes, tools, webinars } from "@/data/site";

export default function Home() {
  return (
    <main>
      <section className="relative min-h-[calc(100svh-8rem)] overflow-hidden border-b border-white/10">
        <Image
          src="/images/lab-hero.png"
          alt="A dark developer laboratory workstation with translucent data panels"
          fill
          priority
          className="object-cover object-center opacity-56"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,6,8,0.98)_0%,rgba(5,6,8,0.9)_28%,rgba(5,6,8,0.56)_58%,rgba(5,6,8,0.84)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,8,0.15)_0%,rgba(5,6,8,0.42)_74%,#050608_100%)]" />
        <Container className="relative flex min-h-[calc(100svh-8rem)] items-center py-16">
          <div className="grid w-full gap-10 lg:grid-cols-[1fr_420px] lg:items-end">
            <div className="max-w-4xl">
              <p className="mb-5 font-mono text-xs font-semibold uppercase tracking-[0.24em] text-lab-cyan">
                The FileMaker Lab
              </p>
              <h1 className="text-balance text-5xl font-semibold leading-[0.98] text-white sm:text-7xl lg:text-8xl">
                The FileMaker Lab
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-8 text-slate-200 sm:text-2xl">
                Experiments, tools, and AI workflows for serious FileMaker developers.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/tools">Explore the Lab</ButtonLink>
                <ButtonLink href="/webinars" variant="secondary">
                  Watch Webinars
                </ButtonLink>
              </div>
            </div>
            <LabConsole />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              eyebrow="What this is"
              title="A practical research space for advanced FileMaker work."
            />
            <div className="space-y-5 text-lg leading-8 text-slate-300">
              <p>
                The FileMaker Lab is where FileMaker developers can explore AI-assisted development,
                performance analysis, XML and DDR intelligence, plugin workflows, automation, and
                modern development practice without losing the practical edge that real systems require.
              </p>
              <p>
                It is built for experiments that can become reusable tools, webinars, prototypes,
                field notes, and production patterns. The goal is not novelty. The goal is better
                FileMaker work with clearer leverage.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="lab-areas" className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Featured lab areas"
            title="Research tracks for the next generation of FileMaker development."
            description="Each area starts as investigation, then becomes methods, tools, reusable workflows, or training."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {labAreas.map((area) => (
              <FeatureCard key={area.title} {...area} />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              eyebrow="Webinars"
              title="Deep sessions, practical experiments, useful takeaways."
            />
            <ButtonLink href="/webinars" variant="secondary">
              View Webinars
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {webinars.map((webinar, index) => (
              <ListingCard
                key={webinar.title}
                title={webinar.title}
                description={webinar.description}
                meta={webinar.status}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-graphite-900/60 py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeader
              eyebrow="Lab Notes"
              title="Short research notes for sharper developer workflows."
            />
            <ButtonLink href="/lab-notes" variant="secondary">
              Read Notes
            </ButtonLink>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {labNotes.map((note, index) => (
              <ListingCard
                key={note.title}
                title={note.title}
                description={note.description}
                meta={note.category}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeader
            eyebrow="Tools"
            title="Prototype utilities for FileMaker developers who want stronger signals."
            description="These placeholders are ready to become product pages, downloads, private previews, or documentation hubs."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {tools.map((tool, index) => (
              <ListingCard
                key={tool.title}
                title={tool.title}
                description={tool.description}
                meta={tool.state}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              eyebrow="About"
              title="Built by a long-time FileMaker developer experimenting with what comes next."
            />
            <div className="space-y-5 text-lg leading-8 text-slate-300">
              <p>
                The FileMaker Lab is led from the perspective of a developer who has spent years
                inside real FileMaker systems and is now testing how AI, plugins, automation,
                performance tools, and better workflows can change the craft.
              </p>
              <p>
                The lab favors useful experiments over hype: small prototypes, careful analysis,
                native tooling where it matters, and workflows that survive contact with production.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <SectionHeader
              eyebrow="Contact"
              title="Have a hard FileMaker problem or a lab idea?"
              description="Send a note about webinars, tool requests, AI workflow questions, consulting, or collaboration."
            />
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
