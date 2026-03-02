import type { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import ProblemSection from "@/components/sections/home/ProblemSection";
import ServiceOverviewSection from "@/components/sections/home/ServiceOverviewSection";
import HowItWorksSection from "@/components/sections/home/HowItWorksSection";
import AppSection from "@/components/sections/home/AppSection";
import CampusSection from "@/components/sections/home/CampusSection";
import TestimonialSection from "@/components/sections/home/TestimonialSection";
import OpenDataSection from "@/components/sections/opendata/OpenDataSection";
import SustainabilitySection from "@/components/sections/home/SustainabilitySection";
import FinalCTASection from "@/components/sections/home/FinalCTASection";
import {
  heroData,
  problemSectionData,
  serviceOverviewData,
  howItWorksSectionData,
  appSectionData,
  campusSectionData,
  testimonialSectionData,
  openDataSectionData,
  sustainabilitySectionData,
  finalCTASectionData,
} from "@/data/home";

export const metadata: Metadata = {
  title: "Home",
  description: "Scheduled pickup and drop for school, tuition, and daily activities with verified drivers and live tracking.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection         data={heroData} />
      <ProblemSection      data={problemSectionData} />
      <ServiceOverviewSection data={serviceOverviewData} />
      <HowItWorksSection   data={howItWorksSectionData} />
      <AppSection          data={appSectionData} />
      <CampusSection       data={campusSectionData} />
      <TestimonialSection  data={testimonialSectionData} />
      <OpenDataSection     data={openDataSectionData} />
      <SustainabilitySection data={sustainabilitySectionData} />
      <FinalCTASection     data={finalCTASectionData} />
    </>
  );
}