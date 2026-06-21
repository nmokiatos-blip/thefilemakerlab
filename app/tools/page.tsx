import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ListingCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { pageIntros, tools } from "@/data/site";

export const metadata: Metadata = {
  title: "Tools",
  description:
    "Prototype FileMaker developer tools for DDR inspection, script dependency mapping, WebViewer templates, PDF extraction, and AI prompts."
};

export default function ToolsPage() {
  return (
    <main>
      <PageHero {...pageIntros.tools} />
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
    </main>
  );
}
