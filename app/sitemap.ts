import type { MetadataRoute } from "next";

const routes = [
  { path: "", priority: 1 },
  { path: "/filemaker-consulting", priority: 0.9 },
  { path: "/pricing", priority: 0.9 },
  { path: "/filemaker-ai-development", priority: 0.8 },
  { path: "/filemaker-plugin-development", priority: 0.8 },
  { path: "/filemaker-performance-optimization", priority: 0.8 },
  { path: "/filemaker-modernization", priority: 0.8 },
  { path: "/filemaker-training", priority: 0.8 },
  { path: "/about-nick-hunter", priority: 0.7 },
  { path: "/contact", priority: 0.6 },
  { path: "/webinars", priority: 0.6 },
  { path: "/filemaker-webinars", priority: 0.6 },
  { path: "/lab-notes", priority: 0.6 },
  { path: "/tools", priority: 0.6 },
  { path: "/about", priority: 0.6 }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thefilemakerlab.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route.priority
  }));
}
