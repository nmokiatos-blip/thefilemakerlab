import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { organizationSchema, personSchema, websiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL("https://thefilemakerlab.com"),
  title: {
    default: "The FileMaker Lab | FileMaker Consulting, AI, Plugins & Modernization",
    template: "%s | The FileMaker Lab"
  },
  description:
    "FileMaker consulting, AI-assisted development, plugin development, performance optimization, modernization, and training with Nick Hunter.",
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
    title: "The FileMaker Lab | FileMaker Consulting, AI, Plugins & Modernization",
    description:
      "FileMaker consulting, AI-assisted development, plugin development, performance optimization, modernization, and training with Nick Hunter.",
    url: "https://thefilemakerlab.com",
    siteName: "The FileMaker Lab",
    images: [
      {
        url: "/images/the-filemaker-lab-command-center.png",
        width: 1680,
        height: 944,
        alt: "The FileMaker Lab futuristic command center visual"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "The FileMaker Lab | FileMaker Consulting, AI, Plugins & Modernization",
    description:
      "FileMaker consulting, AI-assisted development, plugin development, performance optimization, modernization, and training with Nick Hunter.",
    images: ["/images/the-filemaker-lab-command-center.png"]
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              personSchema,
              websiteSchema
            ])
          }}
        />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
