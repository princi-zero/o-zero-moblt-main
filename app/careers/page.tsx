import type { Metadata } from "next";
import CareersHeroSection    from "@/components/sections/careers/CareersHeroSection";
import PerksSection          from "@/components/sections/careers/PerksSection";
import CultureSection        from "@/components/sections/careers/CultureSection";
import TwoPathsSection       from "@/components/sections/careers/TwoPathsSection";
import HiringProcessSection  from "@/components/sections/careers/HiringProcessSection";
import OpenRolesSection      from "@/components/sections/careers/OpenRolesSection";
import CareersCTASection     from "@/components/sections/careers/CareersCTASection";
import {
  careersHeroData,
  perksSectionData,
  cultureSectionData,
  twoPathsSectionData,
  hiringSectionData,
  openRolesSectionData,
  careersCTAData,
} from "@/data/careers";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join a team that ships fast, learns constantly, and solves real-world safety problems every single day.",
};

export default function CareersPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <CareersHeroSection data={careersHeroData} />

      {/* Section 2 — Perks */}
      <PerksSection data={perksSectionData} />

      {/* Section 3 — Culture */}
      <CultureSection data={cultureSectionData} />

      {/* Section 4 — Two Paths */}
      <TwoPathsSection data={twoPathsSectionData} />

      {/* Section 5 — Hiring Process */}
      <HiringProcessSection data={hiringSectionData} />

      {/* Section 6 — Open Roles */}
      <OpenRolesSection data={openRolesSectionData} />

      {/* Section 7 — CTA */}
      <CareersCTASection data={careersCTAData} />
    </>
  );
}