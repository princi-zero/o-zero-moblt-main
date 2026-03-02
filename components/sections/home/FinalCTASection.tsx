import GenericCTASection from "@/components/ui/GenericCTASection";
import type { FinalCTASectionData } from "@/types";

export default function FinalCTASection({ data }: { data: FinalCTASectionData }) {
  return (
    <GenericCTASection
      heading={data.heading}
      subheading={data.subheading}
      cta={data.cta}
    />
  );
}