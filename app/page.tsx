import type { Metadata } from "next";
import Image from "next/image";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: {
    absolute: "The FileMaker Lab | FileMaker Consulting, AI, Plugins & Modernization"
  },
  description:
    "The FileMaker Lab by Nick Hunter — FileMaker consulting, AI-assisted development, plugin development, performance optimization, modernization, automation, and training.",
  alternates: {
    canonical: "https://thefilemakerlab.com/"
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    title: "The FileMaker Lab | FileMaker Consulting, AI, Plugins & Modernization",
    description:
      "The FileMaker Lab by Nick Hunter — FileMaker consulting, AI-assisted development, plugin development, performance optimization, modernization, automation, and training.",
    url: "https://thefilemakerlab.com/",
    images: [
      {
        url: "/images/the-filemaker-lab-command-center.png",
        width: 1680,
        height: 944,
        alt: "The FileMaker Lab command center visual"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "The FileMaker Lab | FileMaker Consulting, AI, Plugins & Modernization",
    description:
      "The FileMaker Lab by Nick Hunter — FileMaker consulting, AI-assisted development, plugin development, performance optimization, modernization, automation, and training.",
    images: ["/images/the-filemaker-lab-command-center.png"]
  }
};

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-black">
      <section className="relative grid min-h-screen place-items-center overflow-hidden">
        <Image
          src="/images/the-filemaker-lab-command-center.png"
          alt="The FileMaker Lab preview visual"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/55 to-transparent" />
        <div className="absolute inset-x-0 top-10 z-10 flex justify-center px-6 sm:top-16">
          <div className="-rotate-6 border-4 border-lab-green bg-black/70 px-7 py-4 text-center shadow-[0_0_45px_rgba(89,240,165,0.28)] sm:px-12 sm:py-6">
            <p className="font-mono text-3xl font-black uppercase tracking-[0.16em] text-lab-green sm:text-6xl">
              Coming Soon
            </p>
          </div>
        </div>
        <div className="relative z-10 mt-auto w-full px-6 pb-10 sm:pb-16">
          <div className="mx-auto max-w-6xl">
            <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-tight text-white sm:text-6xl">
              The FileMaker Lab
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-200">
              FileMaker consulting, AI-assisted development, plugin
              development, performance optimization, modernization,
              automation, and training with Nick Hunter.
            </p>
            <p className="mt-4 max-w-3xl text-base font-semibold leading-7 text-lab-green">
              Nick Hunter has more than 40 years of FileMaker development
              experience.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
