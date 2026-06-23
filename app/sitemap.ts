import type { MetadataRoute } from "next";

const routes = [
  "",
  "/pricing",
  "/filemaker-consulting",
  "/filemaker-ai-development",
  "/filemaker-plugin-development",
  "/filemaker-performance-optimization",
  "/filemaker-modernization",
  "/filemaker-training",
  "/filemaker-webinars",
  "/webinars",
  "/about-nick-hunter",
  "/lab-notes",
  "/tools",
  "/about",
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
