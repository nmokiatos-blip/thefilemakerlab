import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://thefilemakerlab.com"),
  title: {
    default: "The FileMaker Lab | AI Workflows for FileMaker Developers",
    template: "%s | The FileMaker Lab"
  },
  description:
    "Experiments, tools, webinars, and AI workflows for serious FileMaker developers exploring automation, DDR/XML analysis, plugins, Codex, and performance.",
  applicationName: "The FileMaker Lab",
  keywords: [
    "FileMaker",
    "FileMaker AI",
    "FileMaker automation",
    "DDR XML analysis",
    "Codex workflows",
    "FileMaker plugins",
    "FileMaker performance"
  ],
  openGraph: {
    title: "The FileMaker Lab",
    description:
      "Experiments, tools, and AI workflows for serious FileMaker developers.",
    url: "https://thefilemakerlab.com",
    siteName: "The FileMaker Lab",
    images: [
      {
        url: "/images/lab-hero.png",
        width: 1897,
        height: 829,
        alt: "A dark developer laboratory workstation with data analysis panels"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "The FileMaker Lab",
    description:
      "Experiments, tools, and AI workflows for serious FileMaker developers.",
    images: ["/images/lab-hero.png"]
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
