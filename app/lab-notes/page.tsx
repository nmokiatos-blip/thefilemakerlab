import type { Metadata } from "next";
import { Container } from "@/components/container";
import { ListingCard } from "@/components/cards";
import { PageHero } from "@/components/page-hero";
import { labNotes, pageIntros } from "@/data/site";

export const metadata: Metadata = {
  title: "Lab Notes",
  description:
    "Research notes and articles about FileMaker AI workflows, DDR XML, automation, native tools, and developer practice."
};

export default function LabNotesPage() {
  return (
    <main>
      <PageHero {...pageIntros.labNotes} />
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-5 md:grid-cols-2">
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
    </main>
  );
}
