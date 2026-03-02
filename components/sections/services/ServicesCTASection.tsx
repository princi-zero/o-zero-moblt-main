import GenericCTASection from "@/components/ui/GenericCTASection";
import type { ServicesCTAData } from "@/types";

export default function ServicesCTASection({ data }: { data: ServicesCTAData }) {
  return (
    <GenericCTASection
      heading={data.heading}
      subheading={data.subheading}
      cta={data.cta}
    />
  );
}
