"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

const slideDuration = 8000;

const slides = [
  {
    eyebrow: "What this is",
    title: "Decades of FileMaker development experience, opened up.",
    shortLabel: "Intro Short",
    shortTitle: "The FileMaker Lab Intro",
    body: [
      "The FileMaker Lab is where Nick Hunter opens the doors to more than 40 years of FileMaker development experience.",
      "This is a dedicated space for sharing the knowledge, best practices, techniques, methods, architecture, and problem-solving habits that come from building real systems for real people.",
      "From the first customer idea to the final working solution, The FileMaker Lab explores every stage of development: how to conceive the file, structure the architecture, build the solution, improve old systems, modernize workflows, connect AI, create custom plugins, automate processes, and push FileMaker beyond its traditional limits.",
      "Through webinars, videos, tools, experiments, and field notes, Nick shares what he is learning and building in his everyday work with FileMaker, AI-assisted development, performance analysis, custom plugins, automation, and modern development practice."
    ],
    statement: [
      "The goal is not novelty.",
      "The goal is better FileMaker work with clearer leverage."
    ]
  },
  {
    eyebrow: "Foundation",
    title: "What is FileMaker",
    shortLabel: "FileMaker Short",
    shortTitle: "What Is FileMaker?",
    body: [
      "Placeholder text coming soon."
    ],
    statement: []
  },
  {
    eyebrow: "Work with Nick",
    title: "Bring your problem into the lab.",
    shortLabel: "Clinic Short",
    shortTitle: "Work With Nick",
    body: [
      "Placeholder text coming soon."
    ],
    statement: []
  }
];

function ShortVideoPlaceholder({
  label,
  title
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="lab-scan-video lab-card group mx-auto w-full max-w-sm overflow-hidden p-3">
      <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-[radial-gradient(circle_at_72%_28%,rgba(56,232,255,0.25),transparent_34%),linear-gradient(135deg,rgba(89,240,165,0.14),rgba(5,6,8,0.98))]">
        <div className="lab-grid absolute inset-0 opacity-70" />
        <div className="lab-scanline absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />
        <div className="absolute left-5 top-5 rounded-lg border border-white/10 bg-black/35 px-3 py-2 font-mono text-xs uppercase tracking-[0.2em] text-lab-cyan">
          {label}
        </div>
        <div className="absolute inset-0 grid place-items-center">
          <span className="grid size-16 place-items-center rounded-full border border-white/15 bg-white/10 text-lab-cyan shadow-glow transition group-hover:scale-105 group-hover:bg-lab-cyan group-hover:text-graphite-950">
            <span className="ml-1 h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-current" />
          </span>
        </div>
        <div className="absolute inset-x-5 bottom-5">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-lab-green">
            YouTube Short Placeholder
          </p>
          <p className="mt-2 text-xl font-semibold leading-tight text-white">
            {title}
          </p>
        </div>
      </div>
      <div className="grid gap-4 px-3 py-4 sm:grid-cols-[1fr_auto] sm:items-center">
        <p className="text-sm text-slate-400">
          Replace with the YouTube Shorts embed when published.
        </p>
        <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
          Coming Soon
        </span>
      </div>
    </div>
  );
}

export function IntroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, slideDuration);

    return () => window.clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div>
      <div
        key={activeIndex}
        className="lab-scan-slide grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
      >
        <ShortVideoPlaceholder
          label={activeSlide.shortLabel}
          title={activeSlide.shortTitle}
        />
        <div className="space-y-5 text-lg leading-8 text-slate-300">
          <div>
            <h2 className="lab-scan-title text-balance text-3xl font-semibold leading-tight text-white sm:text-5xl">
              {activeSlide.title}
            </h2>
          </div>
          {activeSlide.body.map((paragraph, index) => (
            <p
              key={paragraph}
              className="lab-scan-copy"
              style={{ "--scan-delay": `${140 + index * 70}ms` } as CSSProperties}
            >
              {paragraph}
            </p>
          ))}
          {activeSlide.statement.length > 0 ? (
            <div
              className="lab-scan-copy border-l border-lab-green/40 pl-5"
              style={{ "--scan-delay": "500ms" } as CSSProperties}
            >
              <p className="text-xl font-semibold text-white">
                {activeSlide.statement[0]}
              </p>
              <p className="mt-2 text-xl font-semibold text-lab-green">
                {activeSlide.statement[1]}
              </p>
            </div>
          ) : (
            <div className="min-h-48 rounded-lg border border-dashed border-white/10 bg-white/[0.02]" />
          )}
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            aria-label={`Show slide ${index + 1}: ${slide.title}`}
            aria-pressed={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            className={
              activeIndex === index
                ? "lab-selector-progress h-2 w-16 rounded-full transition"
                : "h-2 w-10 rounded-full bg-lab-green/30 transition hover:bg-lab-green/70"
            }
          />
        ))}
      </div>
    </div>
  );
}
