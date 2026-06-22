import type { Metadata } from "next";
import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { SectionHeader } from "@/components/section-header";
import { cn } from "@/lib/utils";
import { buildFaqPageSchema, buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "FileMaker Consulting Pricing | $75/hour Fixed Rate | The FileMaker Lab",
  description:
    "Simple FileMaker consulting pricing with Nick Hunter: fixed USD $75/hour, 10-hour minimum package, no surprise invoices, flexible FileMaker help.",
  path: "/pricing"
});

const hourlyRate = "USD $75/hour";

const packages = [
  {
    name: "10 Hours",
    hours: "10 hours",
    price: "USD $750",
    note: "Good for focused troubleshooting, small improvements, cleanup, or a first serious consultation."
  },
  {
    name: "20 Hours",
    hours: "20 hours",
    price: "USD $1,500",
    note: "Good for small projects, feature development, modernization work, or guided improvements."
  },
  {
    name: "30 Hours",
    hours: "30 hours",
    price: "USD $2,250",
    note: "Good for deeper FileMaker work, system cleanup, AI workflow integration, or performance improvements."
  },
  {
    name: "40 Hours",
    hours: "40 hours",
    price: "USD $3,000",
    note: "Good for a serious development sprint or larger modernization effort."
  },
  {
    name: "50 Hours",
    hours: "50 hours",
    price: "USD $3,750",
    note: "Good for extended development, complex cleanup, or multi-part system improvements."
  },
  {
    name: "60 Hours",
    hours: "60 hours",
    price: "USD $4,500",
    badge: "Full Month",
    note: "A full month of Nick's FileMaker work, ideal for serious development, architecture, rescue work, or major modernization."
  }
];

const flexibleUses = [
  ["DEV", "Development"],
  ["FIX", "Troubleshooting"],
  ["CLN", "Cleanup"],
  ["MOD", "Modernization"],
  ["AI", "AI integration"],
  ["PLG", "Plugin workflows"],
  ["ARC", "Architecture"],
  ["TRN", "Training"],
  ["PLAN", "Planning"],
  ["SOS", "Rescue work"],
  ["STR", "Strategic advice"]
];

const faqs = [
  {
    question: "What is your FileMaker consulting rate?",
    answer:
      "The FileMaker consulting rate is fixed at USD $75/hour. You choose the package size, and the rate stays the same."
  },
  {
    question: "Is there a minimum package?",
    answer: "Yes. The minimum package is 10 hours, for USD $750."
  },
  {
    question: "Can I use the hours for different FileMaker work?",
    answer:
      "Yes. Hours are flexible and can be used for development, troubleshooting, cleanup, modernization, AI integration, plugin workflows, training, architecture, planning, or strategic advice."
  },
  {
    question: "Do you work on old FileMaker systems?",
    answer:
      "Yes. Existing systems, old systems, broken systems, slow systems, messy systems, and modernization projects are welcome."
  },
  {
    question: "Do you help with FileMaker AI?",
    answer:
      "Yes. Consulting can include FileMaker AI workflows, OpenAI integration, Generate Response from Model, data extraction, document parsing, and automation."
  },
  {
    question: "Do you build FileMaker plugins?",
    answer:
      "Yes. Nick works on custom FileMaker plugin development for macOS, Windows, FileMaker Server, automation, native UI, and advanced integrations."
  },
  {
    question: "Do unused hours expire?",
    answer: "Unused hours remain available for 12 months."
  }
];

type PricingPackageCardProps = {
  item: (typeof packages)[number];
};

function PricingHero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 lab-grid opacity-35" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(56,232,255,0.12),transparent_38%,rgba(89,240,165,0.09)_72%,transparent)]" />
      <Container className="relative grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-lab-cyan">
            FileMaker consulting pricing
          </p>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
            FileMaker Consulting Pricing
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            No BS. No surprise invoice. No confusing agency pricing. Fixed
            rate: $75/hour.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="mailto:hello@thefilemakerlab.com?subject=Book%20a%20FileMaker%20Consultation">
              Book a FileMaker Consultation
            </ButtonLink>
            <ButtonLink
              href="mailto:hello@thefilemakerlab.com?subject=Start%20with%2010%20Hours"
              variant="secondary"
            >
              Start with 10 Hours
            </ButtonLink>
          </div>
        </div>

        <div className="lab-card relative overflow-hidden p-6 sm:p-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-lab-green to-transparent" />
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-lab-green">
            One rate
          </p>
          <p className="mt-5 text-balance text-5xl font-semibold leading-none text-white sm:text-7xl">
            {hourlyRate}
          </p>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            USD $75/hour. That&apos;s it.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {["No BS pricing", "10-hour minimum", "Flexible use"].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function PricingPhilosophy() {
  return (
    <section className="section-reveal py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow="No pricing theater"
            title="No complicated pricing games."
          />
          <div className="space-y-6 text-lg leading-8 text-slate-300">
            <p>
              I don&apos;t charge different rates depending on whether the work
              is development, troubleshooting, AI integration, modernization, or
              strategic advice. It is my time, my experience, and my brain. One
              rate. Clear and simple.
            </p>
            <p className="text-2xl font-semibold leading-tight text-white">
              No artificial tiers. No punishment because your problem is
              &quot;advanced.&quot;
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PricingPackageCard({ item }: PricingPackageCardProps) {
  const featured = item.name === "60 Hours";

  return (
    <article
      className={cn(
        "lab-card relative flex min-h-72 flex-col overflow-hidden p-6 transition duration-300 hover:-translate-y-1",
        featured ? "border-lab-green/60 shadow-[0_0_44px_rgba(89,240,165,0.14)]" : "hover:border-lab-cyan/45"
      )}
    >
      {featured ? (
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-lab-cyan via-lab-green to-lab-amber" />
      ) : null}
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-lab-cyan">
            {item.hours}
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-white">{item.name}</h3>
        </div>
        {item.badge ? (
          <span className="rounded-lg border border-lab-green/40 bg-lab-green/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-lab-green">
            {item.badge}
          </span>
        ) : null}
      </div>
      <p className="mt-8 text-4xl font-semibold leading-none text-white">
        {item.price}
      </p>
      <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-slate-500">
        At {hourlyRate}
      </p>
      <p className="mt-6 text-sm leading-6 text-slate-300">{item.note}</p>
      <div className="mt-auto pt-8">
        <ButtonLink
          href={`mailto:hello@thefilemakerlab.com?subject=Book%20${encodeURIComponent(item.name)}%20FileMaker%20Package`}
          className="w-full"
        >
          Book this package / Contact Nick
        </ButtonLink>
      </div>
    </article>
  );
}

function PackageGrid() {
  return (
    <section id="packages" className="section-reveal border-y border-white/10 bg-white/[0.02] py-20 sm:py-24">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Packages"
            title="Choose the amount of focused FileMaker time you want."
            description="All packages use the same fixed hourly rate. You simply choose how much time you want."
          />
          <p className="max-w-sm text-sm leading-6 text-slate-400 sm:text-right">
            You buy a block of focused FileMaker time and use it where it
            matters most.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((item) => (
            <PricingPackageCard key={item.name} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function FlexibleUseSection() {
  return (
    <section className="section-reveal py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeader
            eyebrow="Flexible use"
            title="Use the time however you need."
            description="Your package is not locked to one type of task. We can use the time for development, cleanup, troubleshooting, AI integration, plugin workflows, architecture, training, planning, or anything else your FileMaker solution needs."
          />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {flexibleUses.map(([code, label]) => (
              <div key={label} className="lab-panel flex min-h-20 items-center gap-4 p-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-lg border border-lab-cyan/30 bg-lab-cyan/10 font-mono text-xs font-semibold text-lab-cyan">
                  {code}
                </span>
                <span className="font-semibold text-white">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function MinimumEngagement() {
  return (
    <section className="section-reveal border-y border-white/10 bg-graphite-900/70 py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="lab-card p-6 sm:p-8">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-lab-green">
              Minimum engagement
            </p>
            <p className="mt-5 text-5xl font-semibold leading-none text-white sm:text-6xl">
              10-hour minimum.
            </p>
            <p className="mt-5 text-2xl font-semibold text-lab-cyan">
              USD $750
            </p>
          </div>
          <div>
            <h2 className="text-balance text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Serious work needs enough room to breathe.
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              To keep the work serious, focused, and productive, every new
              engagement starts with a 10-hour minimum package. This gives us
              enough time to understand the system, make real progress, and
              avoid wasting time with tiny disconnected tasks.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PricingCTA() {
  return (
    <section className="section-reveal relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(56,232,255,0.14),transparent_38%)]" />
      <Container className="relative">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-lab-cyan">
            Start the work
          </p>
          <h2 className="mt-4 text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
            Ready to work on your FileMaker solution?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Tell me what you want to build, fix, modernize, or understand.
          </p>
          <div className="mt-9">
            <ButtonLink href="mailto:hello@thefilemakerlab.com?subject=Book%20a%20FileMaker%20Consultation">
              Book a FileMaker Consultation
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

function PricingFAQ() {
  return (
    <section className="section-reveal border-t border-white/10 py-20 sm:py-24">
      <Container>
        <SectionHeader
          eyebrow="FAQ"
          title="Straight answers. Same pricing."
        />
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {faqs.map((faq) => (
            <article key={faq.question} className="lab-panel p-6">
              <h3 className="text-lg font-semibold leading-snug text-white">
                {faq.question}
              </h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function PricingPage() {
  return (
    <main className="overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqPageSchema(faqs))
        }}
      />
      <PricingHero />
      <PricingPhilosophy />
      <PackageGrid />
      <FlexibleUseSection />
      <MinimumEngagement />
      <PricingCTA />
      <PricingFAQ />
    </main>
  );
}
