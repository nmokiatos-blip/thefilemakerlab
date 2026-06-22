import type { MetadataRoute } from "next";

const routes = [
  "",
  "/filemaker-consulting",
  "/filemaker-pricing",
  "/filemaker-ai-development",
  "/filemaker-plugin-development",
  "/filemaker-performance-optimization",
  "/filemaker-modernization",
  "/filemaker-webinars",
  "/about-nick-hunter",
  "/lab-notes",
  "/tools",
  "/contact"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thefilemakerlab.com";

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/filemaker") ? 0.85 : 0.7
  }));
}
