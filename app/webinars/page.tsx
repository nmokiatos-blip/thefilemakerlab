import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ListingCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { webinars, pageIntros } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FileMaker Webinars | AI, Plugins, Automation & Performance",
  description:
    "Practical FileMaker webinars about AI workflows, DDR analysis, Codex, plugins, automation, modernization, and performance.",
  path: "/webinars"
});

export default function WebinarsPage() {
  return (
    <main>
      <PageHero {...pageIntros.webinars} />
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
    </main>
  );
}
