import type { Metadata } from "next";

export const siteUrl = "https://thefilemakerlab.com";
export const socialImage = "/images/the-filemaker-lab-command-center.png";

type SeoMetadataOptions = {
  title: string;
  description: string;
  path: string;
};

export function buildMetadata({
  title,
  description,
  path
}: SeoMetadataOptions): Metadata {
  return {
    title: {
      absolute: title
    },
    description,
    robots: {
      index: true,
      follow: true
    },
    alternates: {
      canonical: path
    },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      siteName: "The FileMaker Lab",
      images: [
        {
          url: socialImage,
          width: 1680,
          height: 944,
          alt: "The FileMaker Lab command center for FileMaker consulting, AI, plugins, and modernization"
        }
      ],
      locale: "en_US",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage]
    }
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The FileMaker Lab",
  url: siteUrl,
  founder: {
    "@type": "Person",
    name: "Nick Hunter"
  },
  sameAs: []
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Nick Hunter",
  url: `${siteUrl}/about-nick-hunter`,
  jobTitle: "FileMaker Developer and Consultant",
  worksFor: {
    "@type": "Organization",
    name: "The FileMaker Lab",
    url: siteUrl
  },
  knowsAbout: [
    "FileMaker consulting",
    "FileMaker development",
    "FileMaker architecture",
    "FileMaker plugin development",
    "FileMaker AI development",
    "FileMaker performance optimization",
    "FileMaker modernization"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "The FileMaker Lab",
  url: siteUrl,
  publisher: {
    "@type": "Organization",
    name: "The FileMaker Lab",
    url: siteUrl
  }
};

export const fileMakerConsultingServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "FileMaker Consulting",
  serviceType: "FileMaker consulting",
  provider: {
    "@type": "Person",
    name: "Nick Hunter",
    url: `${siteUrl}/about-nick-hunter`
  },
  areaServed: {
    "@type": "Country",
    name: "United States"
  },
  url: `${siteUrl}/filemaker-consulting`,
  description:
    "Expert FileMaker consulting for architecture, troubleshooting, modernization, performance, AI-assisted workflows, plugins, and automation.",
  offers: {
    "@type": "Offer",
    price: "75",
    priceCurrency: "USD",
    unitText: "HOUR",
    url: `${siteUrl}/pricing`
  }
};

export type FaqItem = {
  question: string;
  answer: string;
};

export function buildFaqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
