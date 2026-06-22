import type { Metadata } from "next";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { pageIntros } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About The FileMaker Lab | FileMaker Consulting, AI & Plugins",
  description:
    "About The FileMaker Lab, where Nick Hunter shares more than 40 years of FileMaker development experience in consulting, AI, plugins, modernization, and performance.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <main>
      <PageHero {...pageIntros.about} />
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <SectionHeader
              eyebrow="Founder perspective"
              title="Less generic content, more useful experiments."
            />
            <div className="space-y-5 text-lg leading-8 text-slate-300">
              <p>
                The FileMaker Lab is run by Nick Hunter, a FileMaker developer
                and consultant with more than 40 years of FileMaker development
                experience. The lab focuses on the problems that actually show
                up in mature systems: schema complexity, script dependencies,
                performance, automation boundaries, and the gap between
                prototype and production.
              </p>
              <p>
                AI is treated as a serious tool, not a magic layer. Plugins are treated as native
                software, not shortcuts. DDR XML is treated as structured intelligence, not an
                archive artifact. That is the lab.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="border-y border-white/10 bg-white/[0.02] py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Practical", "Every experiment has to point back to real FileMaker work."],
              ["Measured", "Claims are stronger when they come with tests, data, and constraints."],
              ["Native-minded", "The lab respects platform behavior, performance, and production reality."]
            ].map(([title, text]) => (
              <article key={title} className="lab-card p-6">
                <h2 className="text-xl font-semibold text-white">{title}</h2>
                <p className="mt-4 text-sm leading-6 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
