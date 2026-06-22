import { SeoServicePage } from "@/components/seo-service-page";
import { seoPages } from "@/data/seo-pages";
import { buildMetadata } from "@/lib/seo";

const page = seoPages.training;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path
});

export default function FileMakerTrainingPage() {
  return <SeoServicePage page={page} />;
}
