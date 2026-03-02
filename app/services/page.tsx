import type { Metadata } from "next";
import ServicesHeroSection     from "@/components/sections/services/ServicesHeroSection";
import SmartCommuteSection     from "@/components/sections/services/SmartCommuteSection";
import SeamlessScheduleSection from "@/components/sections/services/SeamlessScheduleSection";
import VehicleSection          from "@/components/sections/services/VehicleSection";
import SafetySection           from "@/components/sections/services/SafetySection";
import OnboardingSection       from "@/components/sections/services/OnboardingSection";
import ServicesCTASection      from "@/components/sections/services/ServicesCTASection";
import {
  servicesPageHeroData,
  smartCommuteSectionData,
  seamlessScheduleData,
  vehicleSectionData,
  safetySectionData,
  onboardingSectionData,
  servicesCTAData,
} from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Safe, reliable student transport for school runs, tuition classes, and daily activities with verified drivers and live tracking.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <ServicesHeroSection data={servicesPageHeroData} />

      {/* Section 2 — Smarter Way To Commute */}
      <SmartCommuteSection data={smartCommuteSectionData} />

      {/* Section 3 — Seamless Travel For Every Schedule */}
      <SeamlessScheduleSection data={seamlessScheduleData} />

      {/* Section 4 — Vehicle Quality */}
      <VehicleSection data={vehicleSectionData} />

      {/* Section 5 — Safety Standards */}
      <SafetySection data={safetySectionData} />

      {/* Section 6 — Onboarding Steps */}
      <OnboardingSection data={onboardingSectionData} />

      {/* Section 7 — CTA */}
      <ServicesCTASection data={servicesCTAData} />
    </>
  );
}