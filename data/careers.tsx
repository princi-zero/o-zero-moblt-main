import type {
  CareersHeroData,
  PerkCard,
  PerksSectionData,
  CulturePoint,
  CultureSectionData,
  PathCard,
  TwoPathsSectionData,
  HiringStep,
  HiringSectionData,
  JobRole,
  OpenRolesSectionData,
  CareersCTAData

} from "@/types";

// ─── Static Data ─────────────────────────────────────────────────────────────

export const careersHeroData: CareersHeroData = {
  badge: "CAREERS AT ZEROMOBLT",
  heading: "Do Work That Actually Matters",
  subheading: "Join a team that ships fast, learns constantly, and solves real-world safety problems every single day.",
  cta: { label: "View Open Roles", href: "#open-roles" },
  images: [
    { src: "/images/careers/section1-p1.png", alt: "Team member presenting" },
    { src: "/images/careers/section1-p2.png", alt: "Team discussion" },
    { src: "/images/about/section1.png",      alt: "ZeroMobIt team photo" },
  ],
};

export const perksSectionData: PerksSectionData = {
  heading: "Perks That Support Your Whole Life",
  perks: [
    { id: 1, icon: "heart",  title: "Comprehensive Insurance",  description: "Top-tier group medical cover for you, your spouse, children, and dependent parents." },
    { id: 2, icon: "trend",  title: "Generous ESOPs",           description: "You are not just an employee; you are an owner. We offer competitive stock options so you grow as we grow." },
    { id: 3, icon: "home",   title: "Flexible Hybrid Model",    description: "Work from our Hyderabad HQ or from home. We focus on output, not punch-in times." },
    { id: 4, icon: "gift",   title: "Performance Bonuses",      description: "We reward impact. Competitive annual bonuses and spot awards for exceptional work." },
    { id: 5, icon: "book",   title: "Learning Wallet",          description: "Annual stipend for courses, books, and conferences. If it helps you upskill, it's on us." },
    { id: 6, icon: "sun",    title: "Recharge Breaks",          description: "24 days of paid leave plus public holidays. We also encourage mental health days whenever you need them." },
  ],
};

export const cultureSectionData: CultureSectionData = {
  heading: "A Culture That Respects Your Life",
  subheading: "Do your best work with trust, flexibility, and balance.",
  points: [
    { title: "Zero Burnout",        detail: "Deep work over long hours" },
    { title: "Flexible by Default", detail: "You control your schedule" },
    { title: "Trust Over Tracking", detail: "Results matter, not presence" },
  ],
  image: { src: "/images/careers/section3.png", alt: "Team collaborating at a table" },
};

export const twoPathsSectionData: TwoPathsSectionData = {
  heading: "Two Paths. One Mission.",
  subheading: "Whether you want to build products or build communities, we have a launchpad for you.",
  paths: [
    {
      id: 1,
      title: "ZeroX: The Startup Immersion",
      description: "A selective program for students who want to turn ideas into ventures. Earn an apprenticeship certificate, build a portfolio of real-world milestones, and get exclusive access to founders.",
      cta: { label: "Apply for ZeroX", href: "https://forms.gle/JiZha6fmhccgx6xC8" },
      image: { src: "/images/careers/section4-p1.png", alt: "Student presenting on stage" },
      imagePosition: "right",
    },
    {
      id: 2,
      title: "The Campus Ambassador Squad",
      description: "Make your campus lit. Organize events, run campaigns, and unlock exclusive rewards. Join a nationwide crew of go-getters and learn leadership by doing.",
      cta: { label: "Join the Squad", href: "https://forms.gle/JiZha6fmhccgx6xC8" },
      image: { src: "/images/careers/section4-p2.png", alt: "Campus ambassador team" },
      imagePosition: "left",
    },
  ],
};

export const hiringSectionData: HiringSectionData = {
  heading: "Hiring Should Be Human",
  subheading: "No ghosting. No black holes. We promise a fast, transparent process that respects your time.",
  steps: [
    { id: 1, icon: "doc",       title: "Apply Online",    description: "Submit your resume and portfolio. We review every application within 48 hours." },
    { id: 2, icon: "phone",     title: "Intro Call",      description: "A casual 30-minute chat to align on values, mission, and your career goals." },
    { id: 3, icon: "pen",       title: "Skill Check",     description: "A practical, take-home challenge relevant to your role. No whiteboard coding." },
    { id: 4, icon: "handshake", title: "Welcome Aboard",  description: "If it's a match, we make a competitive offer and start your onboarding journey." },
  ],
};



export const careersCTAData: CareersCTAData = {
  heading: "Can't find the right role?",
  subheading: "Send us your profile and we'll reach out when something matches your experience.",
  email: "careers@zeromoblt.com",
};

// ─── Job Description (for /careers/[id] page) ────────────────────────────────

export interface JobDescription {
  id: string;
  department: string;
  title: string;
  location: string;
  description: string,
  type: string;
  salary?: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  applyEmail: string;
}

export const jobDescriptions: JobDescription[] = [
  {
    id: "zmj-001",
    department: "Engineering",
    title: "Software Development Engineer - II",
    location: "Hyderabad Telangana",
    type: "Full-time",
    salary: "Competitive",
    about: "We're a high-agency startup solving real-world problems with elegant tech. Our mission: build world-class systems from scratch that are lean, fast, and intelligent. We’re currently operating in stealth mode, crafting deeply technical products involving Kotlin, React, AWS, GCP, Google Maps, and algorithmically intense backends. If you’re tired of working as a ticket taker and want to build, lead, and own your work end-to-end — we’re your people.",
    description: "You'll build the core systems that power ZeroMobIt — real-time ride tracking, route optimization, subscription billing, and the safety command layer. You'll work on systems that need to be fast, reliable, and always on.",
    responsibilities: [
          "Lead end-to-end ownership of complex systems: design, build, deploy, monitor, and iterate at scale.",
          "Architect high-performance backends in Kotlin (or JVM langs) that handle real-time routing and IoT data.",
    "Craft scalable React UIs that power ops dashboards and parent-facing apps.",
    "Drive cloud decisions across AWS, Azure/GCP—optimising costs for our bootstrap runway.",
    "Apply DSA/system design to solve hard problems like dynamic route optimization and predictive scaling.",
    "Shape the engineering roadmap: propose, prioritise, and ship features with founders.",
    "Mentor juniors while executing solo on high-impact bets—no layers, just results."
    ],
    requirements: [
          "4+ years of hands-on engineering where you've owned and shipped production systems (prove it with code/stories).",
    "Elite CS fundamentals: advanced DSA, system design (distributed systems a must), design patterns.",
    "Mastery of Kotlin/Java + modern React; real AWS experience (EC2, IAM, CLI—you know our stack).",
    "Proven leap-taker: startup grit, side projects, or open-source that screams hunger.",
    "Figure-it-out velocity: you thrive in chaos, learn our domain overnight, and deliver 10x faster than peers.",
    "This Role Is Not For You If…",
    "You need structured roadmaps, PM hand-holding, or big-tech process.",
    "Comfort > impact: stable salary over equity upside and chaos.",
    "You've never worn all hats (dev, ops, product) in a resource-constrained environment."
    ],
    niceToHave: [
      "•4+ years of experience in Engineering.",
      "Commute to this job’s location",
      "3+ years of work experience with Kotlin"
    ],
    applyEmail: "careers@zeromoblt.com",
  },
  {
    id: "zmj-002",
    department: "Engineering",
    title: "Senior Software Engineer",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    salary: "Competitive",
    description: "You'll build the core systems that power ZeroMobIt — real-time ride tracking, route optimization, subscription billing, and the safety command layer. You'll work on systems that need to be fast, reliable, and always on.",
    about: "We're a high-agency startup solving real-world problems with elegant tech. Our mission: build world-class systems from scratch that are lean, fast, and intelligent. We’re currently operating in stealth mode, crafting deeply technical products involving Kotlin, React, AWS, GCP, Google Maps, and algorithmically intense backends. If you’re tired of working as a ticket taker and want to build, lead, and own your work end-to-end — we’re your people.",
    responsibilities: [
          "Own systems end-to-end — from design, development, deployment to monitoring.",
    "Architect robust and scalable services, especially in Kotlin (or similar JVM languages).",
    "Build fast, clean UIs in React that can scale with feature complexity.",
    "Work closely with founders and product stakeholders to translate real problems into tech solutions.",
    "Make critical decisions on cloud architecture using AWS and/or GCP.",
    "Optimize performance and apply algorithms that give us a tech edge.",
    "Contribute to product and engineering roadmap with a strong voice.",
    "Write clean, testable, maintainable code that you’re proud of."
    ],
    requirements: [
          "2–4 years of deep hands-on engineering experience, not just development.",
    "Strong CS fundamentals: DSA, design patterns, system design.",
    "Experience with Kotlin or similar (Java/Scala), and modern React.",
    "Solid knowledge of cloud infra (AWS, GCP) and deploying scalable systems.",
    "Experience with Google Maps API or similar integrations is a plus.",
    "Ownership mentality — you don’t wait for specs, you shape them.",
    "A “figure it out” mindset — self-starters who learn fast and execute faster.",
    "Bonus: Startup experience, open-source contributions, or side projects.",
    "This Role Is Not For You If…",

    "You need hand-holding or detailed tasks to start contributing.",
    "You only want to code what’s assigned and avoid product thinking.",
    "You prefer big team structure and layered management.",

    "Why Join Us",
    "You’ll get a front-row seat in building systems and culture from scratch.",
    "Flexible remote work, flat org, high trust.",
    "Your impact = immediate and visible.",
    ],
    niceToHave: [
      "Work on 0→1 products with massive ownership and no red tape.",
    ],
    applyEmail: "careers@zeromoblt.com",
  },
  {
    id: "zmj-003",
    department: "Sales",
    title: "Customer Relationship Management Specialist",
    location: "Hyderabad Telangana",
    type: "Full-time",
    description: "Join the ZeroMoblt Revolution – Be the Maverick Guiding Tomorrow's Engineers!",
    salary: "Competitive",
    about: "At ZeroMoblt, we're transforming engineering education with cutting-edge experiences that propel students into real-world success. We're hiring a Customer Relationship Manager Specialist for a specific campus to own the customer journey – from first query to triumphant outcomes. If you're an extroverted powerhouse who thrives on people, crushes targets fearlessly, and lives for wow moments, this is your arena.",
    responsibilities: [
          "Be the go-to hero for campus customers: Answer queries lightning-fast, troubleshoot issues, and guide them every step of the way.",
    "Build unbreakable relationships – nurture leads, drive renewals, and ensure every interaction screams Engineering Excellence.",
    "Hit bold targets: Track satisfaction, upsell value, and turn feedback into fuel for campus growth.",
    "Collaborate with our ops and product teams to make experiences seamless and unforgettable."
    ],
    requirements: [
          "1-3 years in customer success, sales, or relationship management (edtech/campus experience a plus).",
    "Flawless Spoken English, confident, clear, and captivating on calls or in-person.",
    "Extrovert energy: Fearless networker, outcome-obsessed, and thrives in high-stakes chaos.",
    "Tech-savvy bonus: Comfortable with CRM tools, Google Workspace, and quick learning curves.",
    "Hyderabad-based or willing to travel to assigned campus – ready to hustle!"
    ],
    niceToHave: [
      "Prior work on transport, logistics, or safety-critical systems",
    ],
    applyEmail: "careers@zeromoblt.com",
  },
  {
    id: "zmj-004",
    department: "Engineering",
    title: "Mobile App Developer",
    location: "Hyderabad Telangana",
    type: "Full-time",
    description: "We're a high-agency startup solving real-world problems with elegant tech.  Our mission: build world-class systems from scratch that are lean, fast, and intelligent. We’re currently operating in stealth mode, crafting deeply technical products involving Kotlin, React, Azure, AWS, GCP, Google Maps, and algorithmically intense backends. If you’re tired of working as a ticket taker and want to build, lead, and own your work end-to-end — we’re your people.",
    salary: "Competitive + ESOPs",
    about: "We're a high-agency startup solving real-world problems with elegant tech. Our mission: build world-class systems from scratch that are lean, fast, and intelligent. We’re currently operating in stealth mode, crafting deeply technical products involving Kotlin, React, AWS, GCP, Google Maps, and algorithmically intense backends. If you’re tired of working as a ticket taker and want to build, lead, and own your work end-to-end — we’re your people.",
    responsibilities: [
      "Build and maintain cross-platform mobile features in React Native",
      "Own live tracking, push notifications, and trip history experiences end to end",
      "Integrate with backend APIs and WebSocket streams for real-time updates",
      "Optimise app performance, reduce crashes, and maintain high store ratings",
      "Implement offline-tolerant patterns for users on patchy mobile connections",
      "Collaborate closely with design and backend to ship features in short cycles",
    ],
    requirements: [
      "3+ years building production React Native apps on iOS and Android",
      "Strong JavaScript / TypeScript fundamentals",
      "Experience integrating mapping SDKs (Google Maps, Mapbox) in mobile",
      "Hands-on with push notifications (FCM / APNs) and background location services",
      "Good eye for UI detail and motion polish",
    ],
    niceToHave: [
      "Experience with native modules or Expo managed workflow",
      "Prior work on consumer apps with 100k+ users",
      "Familiarity with Reanimated or gesture-heavy UI patterns",
    ],
    applyEmail: "careers@zeromoblt.com",
  },
  {
    id: "zmj-005",
    department: "Design",
    title: "Product Designer",
    location: "Hyderabad, Telangana",
    type: "Full-time",
    salary: "Competitive",
    description: "ZeroMoblt is building India’s first AI-Native Digital Public Infrastructure for student mobility. We’re looking for one person who owns everything design, with product design at the core. This role shapes how the product thinks, feels, and works. Product Designer(Everything Design) Location  : Hyderabad (On-site) Role : Full-time CTC Range: ₹4–8 LPA",
    about: "ZeroMoblt is building India’s first AI-Native Digital Public Infrastructure for student mobility. We’re looking for one person who owns everything design, with product design at the core. This role shapes how the product thinks, feels, and works. Product Designer(Everything Design) Location  : Hyderabad (On-site) Role : Full-time CTC Range: ₹4–8 LPA",
    responsibilities: [
          "Product design end-to-end (problem → flow → UI → system)",
          "Mobile apps & internal systems",
          "Interaction design, UI, and design systems",
          "Design decisions across product, ops, and tech",
          "Fast iteration using AI"
    ],
    requirements: [
      "Strong product design fundamentals",
    "Systems thinking",
    "Clear design judgment",
    "Solid Figma skills",
    "High ownership"
    ],
    niceToHave: [
      "Predictable. Self-serve. Intuitive.",
    ],
    applyEmail: "careers@zeromoblt.com",
  },
  {
    id: "zmj-006",
    department: "Partnerships",
    title: "ZeroX Apprenticeship Program",
    location: "Hyderabad, Telangana",
    description: "Are you a student leader ready to experience the real world of startups? ZeroMobIt is launching ZeroX - our flagship Experience and Exposure Program designed exclusively for driven college students who want to go beyond textbooks and classrooms. This isn't an internship. This isn't a job. This is your gateway to understanding how startups really work. As part of our Student Centric Bharat initiative, we're inviting ambitious 3rd and 4th year students to join us in building the future of mobility in India. Get unfiltered access to our operations, leadership, and the startup hustle that's redefining transportation.",
    type: "Full-time",
    salary: "Competitive",
    about:"Are you a student leader ready to experience the real world of startups? ZeroMobIt is launching ZeroX - our flagship Experience and Exposure Program designed exclusively for driven college students who want to go beyond textbooks and classrooms. This isn't an internship. This isn't a job. This is your gateway to understanding how startups really work. As part of our Student Centric Bharat initiative, we're inviting ambitious 3rd and 4th year students to join us in building the future of mobility in India. Get unfiltered access to our operations, leadership, and the startup hustle that's redefining transportation.",
      responsibilities: [
      "Identify, pitch, and onboard new school and campus partners in target cities",
      "Build long-term relationships with school leadership and transport coordinators",
      "Own the end-to-end school onboarding process from demo to first operational day",
      "Coordinate with operations team to set up routes, assign drivers, and launch new campuses",
      "Track partner health metrics and proactively address issues before they escalate",
      "Represent ZeroMobIt at education conferences, PTMs, and community events",
    ],
    requirements: [
      "3+ years in B2B sales, partnerships, or account management",
      "Strong relationship-building skills with institutional stakeholders",
      "Self-directed with the ability to manage a pipeline of 20+ partner accounts",
      "Excellent verbal and written communication in English and at least one regional language",
    ],
    niceToHave: [
      "Prior experience selling into schools, edtech, or government institutions",
      "Existing relationships with school chains or education groups in India",
    ],
    applyEmail: "careers@zeromoblt.com",
  },
];
export const openRolesSectionData: OpenRolesSectionData = {
  badge: "CAREERS AT ZEROMOBLT",
  heading: "Open Roles",
  subheading:
    "From operations to engineering, we're looking for people who want to make student transportation safer and more reliable.",
  roles: jobDescriptions.map((job) => ({
    id: job.id,
    department: job.department,
    title: job.title,
    description: job.description, // or create shortDescription field instead
    location: job.location,
    type: job.type,
  })),
};
// Helper to find a job by id
export function getJobById(id: string): JobDescription | undefined {
  return jobDescriptions.find((j) => j.id === id);
}

// For generateStaticParams
export function getAllJobIds(): string[] {
  return jobDescriptions.map((j) => j.id);
}