import type { Metadata } from "next";
import OpenDataHeroSection       from "@/components/sections/opendata/OpenDataHeroSection";
import SafetyPerformanceSection  from "@/components/sections/opendata/SafetyPerformanceSection";
import TripReliabilitySection    from "@/components/sections/opendata/TripReliabilitySection";
import DriverAssuranceSection    from "@/components/sections/opendata/DriverAssuranceSection";
import RiderRegistrationsSection from "@/components/sections/opendata/RiderRegistrationsSection";
import CitiesServedSection       from "@/components/sections/opendata/CitiesServedSection";
import FinalCTASection from "@/components/sections/home/FinalCTASection";
import {finalCTASectionData} from "@/data/home";

import {
  safetySeedData,
  tripSeedData,
  driverSeedData,
  riderSeedData,
  citySeedData,
} from "@/data/opendata";

export const metadata: Metadata = {
  title: "Open Data",
  description: "Real numbers that show how student time is saved, safety is improved, and families stay informed every day.",
};

/**
 * TO MAKE THIS PAGE LIVE / STREAMING:
 *
 * Option A — Server-side polling (simplest, no client changes):
 *   Replace each `seedData` import with:
 *   const safetySeedData = await fetch('https://your-api.com/open-data/safety', {
 *     next: { revalidate: 30 }   // ISR: re-fetch every 30 seconds
 *   }).then(r => r.json())
 *
 * Option B — Client-side live updates (true streaming):
 *   1. Add "use client" to each section component
 *   2. Replace the `data` prop with useSWR('/api/open-data/safety', { refreshInterval: 5000 })
 *   3. Or connect a WebSocket and call setState on each incoming message
 *   The component UI never changes — only the data source does.
 *
 * Option C — Next.js Server-Sent Events (SSE):
 *   Create app/api/open-data/stream/route.ts returning a ReadableStream
 *   Consume with EventSource in a Client Component, push state updates
 */
export default function OpenDataPage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <OpenDataHeroSection />

      {/* Section 2 — Safety Performance */}
      <SafetyPerformanceSection data={safetySeedData} />

      {/* Section 3 — Trip Reliability */}
      <TripReliabilitySection data={tripSeedData} />

      {/* Section 4 — Driver Assurance */}
      <DriverAssuranceSection data={driverSeedData} />

      {/* Section 5 — Rider Registrations */}
      <RiderRegistrationsSection data={riderSeedData} />

      {/* Section 6 — Cities & Schools Served */}
      <CitiesServedSection data={citySeedData} />

      {/* Section 7 — CTA */}
      <FinalCTASection     data={finalCTASectionData} />
    </>
  );
}