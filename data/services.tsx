import type {
  ServicesPageHeroData,
  SmartCommuteSectionData,
  SeamlessScheduleData,
  VehicleSectionData,
  SafetySectionData,
  OnboardingSectionData,
  ServicesCTAData,
} from "@/types";

export const servicesPageHeroData: ServicesPageHeroData = {
  heading: "One Trusted Service for Your Child's Daily Commute.",
  subheading: "From school runs to tuitions and activities, we provide safe, verified rides for every part of your child's day.",
  cta: { label: "Check Fare Estimate", href: "https://start.zeromoblt.com/" },
  backgroundImage: { src: "/images/services/section1.png", alt: "Child safely seated in car" },
};

export const smartCommuteSectionData: SmartCommuteSectionData = {
  heading: "A Smarter Daily Commute.",
  subheading: "From doorstep pickup to transparent pricing, every feature is built to simplify your routine.",
  cards: [
    { id: 1, icon: "clock",    title: "Door-to-Door Service",    description: "No bus stops. Pickup and drop right at your gate, safely from start to finish." },
    { id: 2, icon: "history",  title: "Dedicated Driver & Seat", description: "Verified driver. Guaranteed seat. Every day." },
    { id: 3, icon: "eye-off",  title: "No Surge Pricing",        description: "Fixed pricing. No hidden fees. No fluctuating fares." },
  ],
};

export const seamlessScheduleData: SeamlessScheduleData = {
  heading: "Seamless Travel for Every Schedule.",
  subheading: "We handle the logistics of your child's active life so you never have to worry about transport again.",
  items: [
    { id: 1, title: "Daily School Commutes",  description: "Punctual pickup and drop so they're never late for the first bell." },
    { id: 2, title: "Tuitions And Coaching",  description: "Smooth transfers from school to classes without you leaving work." },
    { id: 3, title: "Sports And Activities",  description: "Safe travel to every practice, lesson, or weekend activity." },
  ],
  image: { src: "/images/services/section3.png", alt: "Student waving goodbye at car" },
};

export const vehicleSectionData: VehicleSectionData = {
  heading: "A Ride That Feels Like Your Own.",
  subheading: "We maintain every vehicle to the same standard you expect for your own family — clean, safe, and reliable.",
  features: [
    { id: 1, icon: "wrench",   title: "Daily Vehicle Checks",   description: "Every vehicle undergoes regular mechanical checks to prevent breakdowns." },
    { id: 2, icon: "seatbelt", title: "Clean And Safe Seats",   description: "Interiors are cleaned daily. Every seat has a working seatbelt, and usage is mandatory." },
    { id: 3, icon: "sliders",  title: "Your Choice Of Comfort", description: "Choose the ride that fits your needs — standard ventilation or fully climate-controlled AC." },
  ],
};

export const safetySectionData: SafetySectionData = {
  heading: "Zero Compromise on Safety.",
  subheading: "We go beyond compliance — from background checks to real-time intervention, every ride is built for safety.",
  rows: [
    { id: 1, title: "Independent Driver Verification",  description: "We conduct our own audit of every driver's police record, license history, and background. Only those who pass our 5-point safety check drive with ZeroMoblt.", image: { src: "/images/services/section5-p1.png", alt: "Driver verification"    }, imagePosition: "right" },
    { id: 2, title: "Proactive Route Supervision",      description: "Beyond GPS tracking, our system detects speed violations, route deviations, and harsh braking instantly. Real-time intervention ensures safer driving.",                image: { src: "/images/services/section5-p2.png", alt: "GPS route map"        }, imagePosition: "left"  },
    { id: 3, title: "Rapid Emergency Response",         description: "We maintain a dedicated Quick Response Team (QRT) and backup fleet, ensuring no child is ever left stranded during unexpected breakdowns.",       image: { src: "/images/services/section5-p3.png", alt: "Emergency response"   }, imagePosition: "right" },
  ],
};

export const onboardingSectionData: OnboardingSectionData = {
  heading: "Start in Minutes.",
  subheading: "No paperwork. No long waits. Book in minutes.",
  steps: [
    { id: 1, icon: "pin",    title: "Set Your Route",  description: "Enter home and school locations to see your fixed monthly fare." },
    { id: 2, icon: "person", title: "Get Matched",     description: "We assign a dedicated, verified driver to your route." },
    { id: 3, icon: "video",  title: "Meet & Greet",    description: "View your driver's profile and complete a quick virtual introduction before the first ride." },
    { id: 4, icon: "phone",  title: "Track & Ride",    description: "Get live updates from day one and manage everything in the app." },
  ],
};

export const servicesCTAData: ServicesCTAData = {
  heading: "Make Your Mornings Simpler.",
  subheading: "Get a transparent, fixed-price quote for your child's route in under 2 minutes.",
  cta: { label: "Check Coverage & Fare", href: "https://start.zeromoblt.com/" },
};