import type { Metadata } from "next";
import AboutHeroSection       from "@/components/sections/about/AboutHeroSection";
import NonNegotiablesSection  from "@/components/sections/about/NonNegotiablesSection";
import JourneySection         from "@/components/sections/about/JourneySection";
import TeamSection            from "@/components/sections/about/TeamSection";
import OpenDataSection        from "@/components/sections/opendata/OpenDataSection";
import AboutCTASection        from "@/components/sections/about/AboutCTASection";
import {
  aboutPageHeroData,
  nonNegotiablesSectionData,
  journeySectionData,
  teamSectionData,
  aboutOpenDataData,
  aboutCTAData,
} from "@/data/about";

export const metadata: Metadata = {
  title: "About Us",
  description: "Built by parents for parents. Learn how ZeroMobIt is making student transportation safer and stress-free for every family.",
};

export default function AboutPage() {
  return (
    <>
      {/* Section 1 — Hero + Who We Are */}
      <AboutHeroSection data={aboutPageHeroData} />

      {/* Section 2 — Three Non-Negotiables */}
      <NonNegotiablesSection data={nonNegotiablesSectionData} />

      {/* Section 3 — Journey Timeline */}
      <JourneySection data={journeySectionData} />

      {/* Section 4 — Team */}
      <TeamSection data={teamSectionData} />

      {/* Section 5 — Open Data (reused from home) */}
      <OpenDataSection data={aboutOpenDataData} />

      {/* Section 6 — CTA with background image */}
      <AboutCTASection data={aboutCTAData} />
    </>
  );
}