import type {
  AboutPageHeroData,
  NonNegotiablesSectionData,
  JourneySectionData,
  TeamSectionData,
  OpenDataSectionData,
  AboutCTAData,
} from "@/types";

export const aboutPageHeroData: AboutPageHeroData = {
  heading: "Building a Student-Centric Mobility System for Everyday India.",
  teamImage: { src: "/images/about/section1.png", alt: "ZeroMobIt team photo" },
  whoHeading: "Who We Are\n& Why We Exist",
  whoBody: "ZeroMoblt was created by parents and technologists who saw how much time students lose to long, uncertain commutes. We exist to make daily travel safer, transparent, and stress-free for every family.",
};

export const nonNegotiablesSectionData: NonNegotiablesSectionData = {
  heading: "Built on Three Non-Negotiables",
  items: [
    { id: 1, icon: "shield", title: "Uncompromising Safety",   description: "We never compromise. If it is not safe enough for our own children, it is not safe enough for yours." },
    { id: 2, icon: "search", title: "Absolute Transparency",   description: "No hidden systems. We share our data, our mistakes, and our wins openly with every parent." },
    { id: 3, icon: "heart",  title: "Parent First Design",     description: "We build for families because we are parents. Every feature solves real anxiety — not just a business goal." },
  ],
};

export const journeySectionData: JourneySectionData = {
  heading: "Our Journey to Zero Compromise",
  cards: [
    { id: 1, date: "Early 2024",      description: "It started with a frustrating realization — tracking a food delivery was easier than tracking a school bus. The anxiety around a child's commute had to end.", image: { src: "/images/about/section3-b1.png", alt: "School bus traffic" } },
    { id: 2, date: "April 13, 2024",  description: "ZeroMoblt went from a whiteboard idea to reality in 48 hours. Bootstrapped with ₹4 lakhs, we launched our first pilot to prove that safety does not have to be complicated.", image: { src: "/images/about/section3-b2.png", alt: "Students illustration" } },
    { id: 3, date: "Jan 2025",        description: "We transitioned from manual coordination to a fully integrated digital platform. The Zero App gave parents real-time visibility, turning daily anxiety into clarity.", image: { src: "/images/about/section3-b3.png", alt: "Zero app launch" } },
  ],
};

export const teamSectionData: TeamSectionData = {
  heading: "The Minds Behind the Mission",
  watermarkText: "One Team",
  members: [
    { id: 1, name: "Abhinav Dantuluri", role: "COS",      image: { src: "/images/about/section4-cos.png", alt: "Abhinav Dantuluri" }, linkedinHref: "https://in.linkedin.com/in/abhinav-dantuluri-a4a38a119" },
    { id: 2, name: "Vijay Ganagam",     role: "CEO",      image: { src: "/images/about/section4-d1.png",  alt: "Vijay Ganagam"     }, linkedinHref: "https://in.linkedin.com/in/vijay-ganagam" },
    { id: 3, name: "Alfred Lazarus",    role: "CVO",      image: { src: "/images/about/section4-d2.png",  alt: "Alfred Lazarus"    }, linkedinHref: "https://in.linkedin.com/in/alfred-jerome-lazarus" },
    { id: 4, name: "Rishi Dixit",       role: "Director", image: { src: "/images/about/section4-d3.png",  alt: "Rishi Dixit"       }, linkedinHref: "https://in.linkedin.com/in/riishidixit" },
    { id: 5, name: "Manish Kumar",      role: "CTO",      image: { src: "/images/about/section4-cto.png", alt: "Manish Kumar"      }, linkedinHref: "https://in.linkedin.com/in/manish-kumar-6a2371349" },
  ],
};

export const aboutOpenDataData: OpenDataSectionData = {
  heading: "Open Data. Because Safety Has Nothing to Hide.",
  subheading: "Trust is built on truth. See the real-time metrics behind our safety standards, updated live.",
  linkLabel: "View Full Transparency Report",
  linkHref: "/open-data",
  stats: [
    { value: "1600+",  label: "Active students" },
    { value: "40K+",   label: "Total trips" },
    { value: "96%",    label: "On-Time Arrival" },
    { value: "17,120", label: "Hours saved" },
  ],
};

export const aboutCTAData: AboutCTAData = {
  heading: "Make Your Mornings Simpler.",
  subheading: "Get a transparent, fixed-price quote for your child's route in under 2 minutes.",
  backgroundImage: { src: "/images/about/section6.png", alt: "Children boarding school transport" },
  cta: { label: "Check Coverage & Fare", href: "https://start.zeromoblt.com/" },
};