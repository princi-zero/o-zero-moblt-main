/**
 * OPEN DATA — Static seed data
 *
 * ─── HOW TO MAKE THIS LIVE / STREAMING ───────────────────────────────────────
 *
 * Each exported constant maps to one logical API endpoint.
 * When you're ready to stream, follow this pattern per section:
 *
 * 1. CREATE a Route Handler (App Router):
 *    app/api/open-data/safety/route.ts   → returns SafetyData as JSON
 *    app/api/open-data/trips/route.ts    → returns TripData as JSON
 *    app/api/open-data/drivers/route.ts  → returns DriverData as JSON
 *    app/api/open-data/riders/route.ts   → returns RiderData as JSON
 *    app/api/open-data/cities/route.ts   → returns CityData as JSON
 *
 * 2. REPLACE the static import in each section with:
 *    const data = await fetch('/api/open-data/safety', { next: { revalidate: 30 } })
 *    For live streaming: use a Client Component + SWR/React Query + polling
 *    For WebSocket: connect to your WS server and call setState on each message
 *
 * 3. KEEP the same TypeScript interface — the UI never changes, only the source.
 *
 * Each section component already accepts its data as props, so swapping
 * static → async fetch → WebSocket is a one-line change per section.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── Types ───────────────────────────────────────────────────────────────────
import type {
  StatCard,
  ChartPoint,
  SafetyData,
  TripData,
  DriverStat,
  DriverData,
  RiderData,
  CityData

} from "@/types";

// ─── Static seed values (swap these with fetch() when live) ──────────────────

export const safetySeedData: SafetyData = {
  stats: [
    { label: "On-Time Pickups",      value: "98.5%", badge: "+0.2%" },
    { label: "Success Rate",         value: "99.8%" },
    { label: "Non-Incidents",        value: "99.9%", badgeLabel: "Last 30 days" },
    { label: "Live Monitored Routes",value: "100%" },
  ],
  trend: {
    title: "6-Month Safety Trend",
    subtitle: "Safety reviews conducted weekly. All metrics audited monthly.",
    points: [
      { x: "Jun", y: 97.3 },
      { x: "Jul", y: 97.8 },
      { x: "Aug", y: 98.1 },
      { x: "Sep", y: 98.4 },
      { x: "Oct", y: 98.7 },
      { x: "Nov", y: 98.7 },
    ],
  },
};

export const tripSeedData: TripData = {
  stats: [
    { label: "Rides This Month",  value: "42,156", badge: "+8.3%" },
    { label: "Completed Today",   value: "1,847" },
    { label: "Trips Canceled",    value: "12",    badgeLabel: "0.03% rate" },
    { label: "Avg. Wait Time",    value: "2.3 min" },
  ],
  chart: {
    title: "Weekly Performance Overview",
    subtitle: "Daily ride volume and on-time performance for the current week",
    bars: [
      { x: "Mon", y: 8200 },
      { x: "Tue", y: 8500 },
      { x: "Wed", y: 8000 },
      { x: "Thu", y: 8600 },
      { x: "Fri", y: 9000 },
    ],
  },
};

export const driverSeedData: DriverData = {
  verifiedBanner: {
    title:    "100% Verified Drivers",
    subtitle: "Every driver is police-verified & ID-matched",
  },
  stats: [
    { label: "Total Verified Drivers", value: "847" },
    { label: "Background Checked",     value: "100%" },
    { label: "Avg. Driver Rating",     value: "4.9",     subLabel: "Out of 5.0" },
    { label: "Avg. Service Tenure",    value: "3.2 yrs" },
    { label: "Daily Active Drivers",   value: "623" },
  ],
  reliabilityScore: {
    score: 98,
    outOf: 100,
    note: "Calculated based on punctuality, parent feedback, safety compliance, and service consistency",
  },
};

export const riderSeedData: RiderData = {
  stats: [
    { label: "Today's Total",   value: "201", badge: "+12%" },
    { label: "Approved",        value: "189" },
    { label: "Pending Review",  value: "8" },
    { label: "In Progress",     value: "4" },
  ],
  trend: {
    title: "Monthly Registration Trend",
    subtitle: "New rider registrations over the past month",
    points: [
      { x: "Week 1", y: 148 },
      { x: "Week 2", y: 168 },
      { x: "Week 3", y: 185 },
      { x: "Week 4", y: 210 },
    ],
  },
};

export const citySeedData: CityData = {
  stats: [
    { label: "Cities Covered",     value: "12",  badge: "+2 new" },
    { label: "Partner Schools",    value: "156", badge: "+8 this month" },
    { label: "Daily Active Routes",value: "423" },
  ],
  map: {
    title:    "Service Coverage Map",
    subtitle: "Active service areas across major metropolitan regions",
    imageSrc: "/images/opendata/section6.png",
  },
};