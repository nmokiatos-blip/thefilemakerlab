import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { PageHero } from "@/components/page-hero";
import { SectionHeader } from "@/components/section-header";
import { pageIntros } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact The FileMaker Lab about webinars, tool requests, AI workflow questions, consulting, or collaboration."
};

export default function ContactPage() {
  return (
    <main>
      <PageHero {...pageIntros.contact} />
      <section className="py-20 sm:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <SectionHeader
              eyebrow="Contact"
              title="Tell the lab what you are exploring."
              description="Share a project, question, webinar idea, tool request, or collaboration thread worth investigating."
            />
            <ContactForm />
          </div>
        </Container>
      </section>
    </main>
  );
}
