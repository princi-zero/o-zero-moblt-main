import type { HeroData, ProblemSectionData, ServiceOverviewData, HowItWorksSectionData, AppSectionData, CampusSectionData, TestimonialSectionData, OpenDataSectionData, SustainabilitySectionData, FinalCTASectionData, FooterData } from "@/types";

export const heroData: HeroData = {
  socialProof: {
    avatars: [
      { src: "/images/home/section7pc3.png", alt: "Parent 1" },
      { src: "/images/home/section7pc.png", alt: "Parent 2" },
      { src: "/images/home/section7pc1.png", alt: "Parent 3" },
      { src: "/images/home/section7pc2.png", alt: "Parent 4" },
    ],
    text: "Trusted by 1,000+ parents.",
  },
  heading: "Daily student transportation that delivers safer, stress-free commutes for growing families",
  subheading: "Scheduled pickups. Verified drivers. Live tracking. Total peace of mind.",
  cta: { label: "Check Fare Estimate", href: "https://start.zeromoblt.com/" },
  heroImage: { src: "/images/home/section1-pc.png", alt: "Parent and child in car" },
};

export const problemSectionData: ProblemSectionData = {
  heading: "School Shouldn’t Start With Exhaustion",
  subheading: "Long commutes are taking time away from learning, play, and rest.",
  problems: [
    {
      id: 1,
      icon: "clock",
      title: "Longer Commutes",
      description: "Students spend hours commuting, arriving tired before the first lesson begins.",
    },
    {
      id: 2,
      icon: "history",
      title: "No Real-Time Updates",
      description: 'Without live tracking or instant alerts, parents are left asking, “Did they reach safely?” every day.',
    },
    {
      id: 3,
      icon: "eye-off",
      title: "Lack of Transparency",
      description: "Limited visibility turns every commute into uncertainty.",
    },
  ],
};

export const serviceOverviewData: ServiceOverviewData = {
  heading: "Daily Student Transportation Built for Safety and Reliability",
  subheading: "ZeroMoblt provides scheduled student transportation through different plans, combining verified safety standards with smart technology to keep every ride secure and on time.",
  image: { src: "/images/home/section3.png", alt: "Driver helping students board a van" },
  features: [
    { id: 1, title: "Service Model",    description: "Different subscription plans for daily routes." },
    { id: 2, title: "Fleet Standards",  description: "Clean, air-conditioned, non air-conditioned multi-seater vehicles." },
    { id: 3, title: "Pickup Method",    description: "Scheduled doorstep common pickup and drop." },
    { id: 4, title: "Driver Policy",    description: "Background-checked, safety-trained drivers, police verified." },
    { id: 5, title: "Legal Compliance", description: "Fully licensed commercial & compliant vehicles." },
    { id: 6, title: "Support Access",   description: "Dedicated human support when you need it." },
  ],
  ctas: [
    { label: "Check Coverage & Fare", href: "https://start.zeromoblt.com/", variant: "primary" },
    { label: "Learn more",            href: "/services",  variant: "secondary" },
  ],
};

export const howItWorksSectionData: HowItWorksSectionData = {
  heading: "Start in Minutes.",
  subheading: "Create an account, update your details, and activate your child’s commute in a few simple steps.",
  steps: [
    {
      id: 1,
      icon: "phone",
      title: "Register",
      description: "Create your account in under a minute on our",
      linkText: "Platform",           
      linkUrl: "https://start.zeromoblt.com",
    },
    {
      id: 2,
      icon: "pin",
      title: "Select Route & Plan",
      description: "Choose your pickup point, drop location, and preferred subscription plan.",
      linkText:"",
      linkUrl:""
    },
    {
      id: 3,
      icon: "check",
      title: "Activate Your Service",
      description: "Route confirmed. Driver assigned. Commute scheduled.",
      linkText:"",
      linkUrl:""
    },
  ],
};

export const appSectionData: AppSectionData = {
  heading: "Zero App. Full Control.",
  subheading: "Track, manage, and monitor every ride from one simple dashboard.",
  features: [
    {
      id: 1,
      title: "Live GPS Ride Tracking",
      description: "Track your child’s ride in real time with precise location updates.",
      image: { src: "/images/home/section5-p1.png", alt: "Live GPS tracking screen" },
      imagePosition: "right",
    },
    {
      id: 2,
      title: "Instant Safe Arrival Alerts",
      description: "Get notified instantly at pickup and drop-off.",
      image: { src: "/images/home/section5-p2.png", alt: "Safe arrival alerts screen" },
      imagePosition: "left",
    },
    {
      id: 3,
      title: "Manage Multiple Children from One Dashboard",
      description: "Manage multiple routes and students from one account.",
      image: { src: "/images/home/section5-p3.png", alt: "Multi-child dashboard screen" },
      imagePosition: "right",
    },
    {
      id: 4,
      title: "Complete Ride History & Trip Logs",
      description: "Access detailed trip history anytime.",
      image: { src: "/images/home/section5-p4.png", alt: "Ride history screen" },
      imagePosition: "left",
    },
    {
      id: 5,
      title: "Flexible Plans & Secure Payments",
      description: "Manage plans and payments securely inside the app.",
      image: { src: "/images/home/section5-p5.png", alt: "Payments and plans screen" },
      imagePosition: "right",
    },
  ],
};

export const campusSectionData: CampusSectionData = {
  heading: "Modern Transportation for Schools & Campuses",
  subheading: "Upgrade campus transport without owning vehicles, managing drivers, or handling daily routing.",
  backgroundImage: { src: "/images/home/section6.png", alt: "School campus building" },
  features: [
    {
      id: 1,
      icon: "shield",
      title: "No Vehicles. No Drivers. No Setup Costs.",
      description: "No vehicles, drivers, or routing systems required from the school.",
    },
    {
      id: 2,
      icon: "search",
      title: "Centralized Route & Student Visibility",
      description: "Unified visibility across daily transport operations and attendance.",
    },
    {
      id: 3,
      icon: "heart",
      title: "Fully Licensed & Verified Operations",
      description: "All vehicles and drivers meet regulatory and safety standards.",
    },
  ],
  cta: { label: "Partner With ZeroMoblt", href: "/contact" },
};

export const testimonialSectionData: TestimonialSectionData = {
  heading: "Trusted by Parents & Institutions",
  subheading: "Real experiences from families and campuses using Zero MobIt every day.",
  tabs: ["Parents", "Schools"],
  testimonials: {
    Parents: [
      {
        id: 1,
        quote: "I was nervous about using a new service for my daughter's after-school rides, but the verified drivers and live tracking put me at ease. Our driver, Maria, feels like family now, and I can focus on work knowing my daughter's safe.",
        name: "Ananya Reddy",
        role: "Mother",
        avatar: { src: "/images/home/section7pc.png", alt: "Ananya Reddy" },
      },
      {
        id: 2,
        quote: "Zero MobIt has completely changed our daily routine. The fixed timings and safe arrival alerts give us real peace of mind.",
        name: "Vikrant",
        role: "Father of Grade 5 Student",
        avatar: { src: "/images/home/section7pc1.png", alt: "Vikrant" },
      },
      {
        id: 3,
        quote: "We track every ride and review the history anytime. The transparency of the app is what we like most.",
        name: "Neha",
        role: "Mother of Two Students",
        avatar: { src: "/images/home/section7pc2.png", alt: "Neha" },
      },
    ],
    Schools: [
      {
        id: 1,
        quote: "Partnering with Zero MobIt eliminated our transport headaches. Students arrive on time and parents are notified instantly.",
        name: "Principal Vikas",
        role: "Delhi Public School",
        avatar: { src: "/images/home/section7pc3.png", alt: "Principal Sharma" },
      },
      {
        id: 2,
        quote: "The centralized dashboard gives us full visibility. We've reduced late arrivals by over 80% since onboarding.",
        name: "Admin Team",
        role: "ACE Academy",
        avatar: { src: "/images/home/section7pc4.png", alt: "Admin Team" },
      },
      {
        id: 3,
        quote: "Zero MobIt handles everything — drivers, routes, compliance. We focus on education, not logistics.",
        name: "Dean, Mrs. Kapoor",
        role: "ACE Academy",
        avatar: { src: "/images/home/section7pc5.png", alt: "Mrs. Kapoor" },
      },
    ],
  },
};

export const openDataSectionData: OpenDataSectionData = {
  heading: "Open Data. Full Transparency.",
  subheading: "See the real-time metrics behind our safety and reliability, updated live.",
  linkLabel: "View Full Transparency Report",
  linkHref: "/open-data",
  stats: [
    { value: "1600+", label: "Active students" },
    { value: "40K+",  label: "Total trips" },
    { value: "96%",   label: "On-Time Arrival" },
    { value: "17,120", label: "Hours saved" },
  ],
};

export const sustainabilitySectionData: SustainabilitySectionData = {
  badge: "SUSTAINABILITY IMPACT",
  heading: "Smarter Routes. Lower Impact.",
  subheading: "Shared rides reduce cars on the road. AI-optimized routing lowers fuel use and cuts emissions by up to 30% compared to individual drop-offs.",
  pullQuote: "One shared route can replace 10–12 individual cars every morning.",
  cards: [
    { id: 1, icon: "leaf", title: "Lower Emissions",         description: "Reduced daily carbon output" },
    { id: 2, icon: "bolt", title: "Energy-Efficient Routing", description: "Smarter routes, less fuel waste" },
    { id: 3, icon: "leaf", title: "Fewer Vehicles",           description: "Shared rides reduce congestion" },
  ],
  images: [
    { src: "/images/home/section9-p1.png", alt: "Students boarding transport" },
    { src: "/images/home/section9-p1.png", alt: "Peak hour relief at school" },
  ],
};

export const finalCTASectionData: FinalCTASectionData = {
  heading: "Ready to Simplify Your Child's Daily Commute?",
  subheading: "Check availability, routes, and plans in under a minute.",
  cta: { label: "Check Coverage & Fare", href: "https://start.zeromoblt.com/" },
};

export const footerData: FooterData = {
  tagline: "Because Your Child's Journey Deserves Better",
  heading: "Get started with Zero MobIt.",
  links: [
    { label: "Services",     href: "/services" },
    { label: "How It Works", href: "/#how-it-works" },
    { label: "For Campuses", href: "/#campus" },
    { label: "Open Data",    href: "/open-data" },
    { label: "Careers",      href: "/careers" },
    { label: "Contact",      href: "/" },
  ],
  logoSrc: "/images/zero-logo.png",
  logoAlt: "Zero MobIt Logo",
  copyright: "© 2025 ZeroMobIt. All rights reserved.",
  legalLinks: [
    { label: "Privacy Policy", href: "https://zeromoblt.com/terms#privacy" },
    { label: "Terms of Use",   href: "https://zeromoblt.com/terms" },
  ],
  linkedinHref: "https://in.linkedin.com/company/zero-moblt",
};