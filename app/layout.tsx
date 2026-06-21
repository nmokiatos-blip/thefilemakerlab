import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://thefilemakerlab.com"),
  title: {
    default: "The FileMaker Lab | Beyond the Limits",
    template: "%s | The FileMaker Lab"
  },
  description:
    "A futuristic software lab for FileMaker, AI, plugins, automation, native code, performance engineering, and real-world system building.",
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
    title: "The FileMaker Lab | Beyond the Limits",
    description:
      "A futuristic command center where FileMaker becomes something bigger.",
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
    title: "The FileMaker Lab | Beyond the Limits",
    description:
      "A futuristic command center where FileMaker becomes something bigger.",
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
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
