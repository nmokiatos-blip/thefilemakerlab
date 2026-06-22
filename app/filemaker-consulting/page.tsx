import { SeoServicePage } from "@/components/seo-service-page";
import { seoPages } from "@/data/seo-pages";
import {
  buildFaqPageSchema,
  buildMetadata,
  fileMakerConsultingServiceSchema
} from "@/lib/seo";

const page = seoPages.consulting;

export const metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path
});

export default function FileMakerConsultingPage() {
  return (
    <SeoServicePage
      page={page}
      jsonLd={[
        fileMakerConsultingServiceSchema,
        buildFaqPageSchema(page.faqs ?? [])
      ]}
    />
  );
}
