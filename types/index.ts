// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarData {
  logoSrc: string;
  logoAlt: string;
  links: NavLink[];
  cta: CTAButton;
}

// ─── Shared Primitives ────────────────────────────────────────────────────────
export interface AvatarItem {
  src: string;
  alt: string;
}

export interface CTAButton {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
}

export interface StatItem {
  value: string;
  label: string;
}

// ─── Home Page ────────────────────────────────────────────────────────────────
export interface HeroData {
  socialProof: {
    avatars: AvatarItem[];
    text: string;
  };
  heading: string;
  subheading: string;
  cta: CTAButton;
  heroImage: ImageAsset;
}

// ─── Services Page ────────────────────────────────────────────────────────────
export interface ServiceCard {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface ServicesHeroData {
  badge: string;
  heading: string;
  subheading: string;
  cta: CTAButton;
}

export interface ServicesGridData {
  sectionLabel: string;
  heading: string;
  cards: ServiceCard[];
}

// ─── About Page ───────────────────────────────────────────────────────────────
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: ImageAsset;
}

export interface AboutHeroData {
  badge: string;
  heading: string;
  subheading: string;
  heroImage: ImageAsset;
}

export interface AboutMissionData {
  heading: string;
  body: string[];
  stats: StatItem[];
}

export interface AboutTeamData {
  sectionLabel: string;
  heading: string;
  members: TeamMember[];
}

// ─── Page SEO Meta ────────────────────────────────────────────────────────────
export interface PageMeta {
  title: string;
  description: string;
}

// ─── Home Section 2 — Problem ─────────────────────────────────────────────────
export interface ProblemItem {
  id: number;
  icon: "clock" | "history" | "eye-off";
  title: string;
  description: string;
}

export interface ProblemSectionData {
  heading: string;
  subheading: string;
  problems: ProblemItem[];
}

// ─── Home Section 3 — Service Overview ───────────────────────────────────────
export interface FeatureItem {
  id: number;
  title: string;
  description: string;
}

export interface ServiceOverviewCTA {
  label: string;
  href: string;
  variant: "primary" | "secondary";
}

export interface ServiceOverviewData {
  heading: string;
  subheading: string;
  image: ImageAsset;
  features: FeatureItem[];
  ctas: ServiceOverviewCTA[];
}

// ─── Home Section 4 — How It Works ───────────────────────────────────────────
export interface HowItWorksStep {
  id: number;
  icon: "phone" | "pin" | "check";
  title: string;
  description: string;
  linkText: string
linkUrl: string,
}

export interface HowItWorksSectionData {
  heading: string;
  subheading: string;
  steps: HowItWorksStep[];
}

// ─── Home Section 5 — App Features ───────────────────────────────────────────
export interface AppFeature {
  id: number;
  title: string;
  description: string;
  image: ImageAsset;
  imagePosition: "left" | "right";
}

export interface AppSectionData {
  heading: string;
  subheading: string;
  features: AppFeature[];
}

// ─── Home Section 6 — Campus Partner ─────────────────────────────────────────
export interface CampusFeature {
  id: number;
  icon: "shield" | "search" | "heart";
  title: string;
  description: string;
}

export interface CampusSectionData {
  heading: string;
  subheading: string;
  backgroundImage: ImageAsset;
  features: CampusFeature[];
  cta: CTAButton;
}

// ─── Home Section 7 — Testimonials ───────────────────────────────────────────
export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: ImageAsset;
}

export interface TestimonialSectionData {
  heading: string;
  subheading: string;
  tabs: string[];
  testimonials: Record<string, Testimonial[]>;
}

// ─── Home Section 8 — Open Data ──────────────────────────────────────────────
export interface OpenDataStat {
  value: string;
  label: string;
}

export interface OpenDataSectionData {
  heading: string;
  subheading: string;
  linkLabel: string;
  linkHref: string;
  stats: OpenDataStat[];
}

// ─── Home Section 9 — Sustainability ─────────────────────────────────────────
export interface SustainabilityCard {
  id: number;
  icon: "leaf" | "bolt";
  title: string;
  description: string;
}

export interface SustainabilitySectionData {
  badge: string;
  heading: string;
  subheading: string;
  pullQuote: string;
  cards: SustainabilityCard[];
  images: ImageAsset[];
}

// ─── Home Section 10 — Final CTA ─────────────────────────────────────────────
export interface FinalCTASectionData {
  heading: string;
  subheading: string;
  cta: CTAButton;
}

// ─── Footer ───────────────────────────────────────────────────────────────────
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterData {
  tagline: string;
  heading: string;
  links: FooterLink[];
  logoSrc: string;
  logoAlt: string;
  copyright: string;
  legalLinks: FooterLink[];
  linkedinHref: string;
}

// ─── Services Page ────────────────────────────────────────────────────────────
export interface ServicesPageHeroData {
  heading: string;
  subheading: string;
  cta: CTAButton;
  backgroundImage: ImageAsset;
}

export interface SmartCommuteCard {
  id: number;
  icon: "clock" | "history" | "eye-off";
  title: string;
  description: string;
}

export interface SmartCommuteSectionData {
  heading: string;
  subheading: string;
  cards: SmartCommuteCard[];
}

export interface ScheduleItem {
  id: number;
  title: string;
  description: string;
}

export interface SeamlessScheduleData {
  heading: string;
  subheading: string;
  items: ScheduleItem[];
  image: ImageAsset;
}

export interface VehicleFeature {
  id: number;
  icon: "wrench" | "seatbelt" | "sliders";
  title: string;
  description: string;
}

export interface VehicleSectionData {
  heading: string;
  subheading: string;
  features: VehicleFeature[];
}

export interface SafetyRow {
  id: number;
  title: string;
  description: string;
  image: ImageAsset;
  imagePosition: "left" | "right";
}

export interface SafetySectionData {
  heading: string;
  subheading: string;
  rows: SafetyRow[];
}

export interface OnboardingStep {
  id: number;
  icon: "pin" | "person" | "video" | "phone";
  title: string;
  description: string;
}

export interface OnboardingSectionData {
  heading: string;
  subheading: string;
  steps: OnboardingStep[];
}

export interface ServicesCTAData {
  heading: string;
  subheading: string;
  cta: CTAButton;
}

// ─── About Page ───────────────────────────────────────────────────────────────
export interface AboutPageHeroData {
  heading: string;
  teamImage: ImageAsset;
  whoHeading: string;
  whoBody: string;
}

export interface NonNegotiable {
  id: number;
  icon: "shield" | "search" | "heart";
  title: string;
  description: string;
}

export interface NonNegotiablesSectionData {
  heading: string;
  items: NonNegotiable[];
}

export interface JourneyCard {
  id: number;
  date: string;
  description: string;
  image: ImageAsset;
}

export interface JourneySectionData {
  heading: string;
  cards: JourneyCard[];
}

export interface TeamMemberAbout {
  id: number;
  name: string;
  role: string;
  image: ImageAsset;
  linkedinHref: string;
}

export interface TeamSectionData {
  heading: string;
  watermarkText: string;
  members: TeamMemberAbout[];
}

export interface AboutCTAData {
  heading: string;
  subheading: string;
  backgroundImage: ImageAsset;
  cta: CTAButton;
}

// ─── Open data Page ───────────────────────────────────────────────────────────────

export interface StatCard {
  label: string;
  value: string;
  badge?: string;         // e.g. "+0.2%" in green
  badgeLabel?: string;    // e.g. "Last 30 days"
}

export interface ChartPoint {
  x: string;
  y: number;
}

export interface SafetyData {
  stats: StatCard[];
  trend: { title: string; subtitle: string; points: ChartPoint[] };
}

export interface TripData {
  stats: StatCard[];
  chart: { title: string; subtitle: string; bars: ChartPoint[] };
}

export interface DriverStat extends StatCard {
  subLabel?: string;
}

export interface DriverData {
  verifiedBanner: { title: string; subtitle: string };
  stats: DriverStat[];
  reliabilityScore: { score: number; outOf: number; note: string };
}

export interface RiderData {
  stats: StatCard[];
  trend: { title: string; subtitle: string; points: ChartPoint[] };
}

export interface CityData {
  stats: StatCard[];
  map: { title: string; subtitle: string; imageSrc: string };
}

// ─── Open data Page ───────────────────────────────────────────────────────────────

export interface CareersHeroData {
  badge: string;
  heading: string;
  subheading: string;
  cta: { label: string; href: string };
  images: { src: string; alt: string }[];
}

export interface PerkCard {
  id: number;
  icon: "heart" | "trend" | "home" | "gift" | "book" | "sun";
  title: string;
  description: string;
}

export interface PerksSectionData {
  heading: string;
  perks: PerkCard[];
}

export interface CulturePoint {
  title: string;
  detail: string;
}

export interface CultureSectionData {
  heading: string;
  subheading: string;
  points: CulturePoint[];
  image: { src: string; alt: string };
}

export interface PathCard {
  id: number;
  title: string;
  description: string;
  cta: { label: string; href: string };
  image: { src: string; alt: string };
  imagePosition: "left" | "right";
}

export interface TwoPathsSectionData {
  heading: string;
  subheading: string;
  paths: PathCard[];
}

export interface HiringStep {
  id: number;
  icon: "doc" | "phone" | "pen" | "handshake";
  title: string;
  description: string;
}

export interface HiringSectionData {
  heading: string;
  subheading: string;
  steps: HiringStep[];
}

export interface JobRole {
  id: string;          // unique slug used in URL: /careers/[id]
  department: string;
  title: string;
  description: string;
  location: string;
  type: string;
}

export interface OpenRolesSectionData {
  badge: string;
  heading: string;
  subheading: string;
  roles: JobRole[];
}

export interface CareersCTAData {
  heading: string;
  subheading: string;
  email: string;
}


// ─── Application Form ───────────────────────────────────────────────────────
export interface FormState {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedinUsername: string;
  portfolio: string;
  yearsOfExperience: string;
  coverLetter: string;
  whyZeroMobIt: string;
  salaryExpectation: string;
  howDidYouHear: string;
  agreed: boolean;
}

