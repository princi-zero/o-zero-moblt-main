import GenericCardSection, { type CardItem } from "@/components/ui/Genericcardsection";
import type { HowItWorksSectionData, HowItWorksStep } from "@/types";

// ─── Icons ────────────────────────────────────────────────────────────────────

const PhoneIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const PinIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CheckIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const iconMap: Record<HowItWorksStep["icon"], React.ReactNode> = {
  phone: <PhoneIcon />,
  pin: <PinIcon />,
  check: <CheckIcon />,
};

// ─── Step icon with badge — built as ReactNode so generic card renders it as-is
function buildStepIcon(icon: HowItWorksStep["icon"], step: number): React.ReactNode {
  return (
    <div className="relative w-16 h-16">
      <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
        {iconMap[icon]}
      </div>
      {/* Yellow step number badge */}
      <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#F5C518] flex items-center justify-center">
        <span className="text-xs font-bold text-gray-900">{step}</span>
      </div>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────

interface HowItWorksSectionProps {
  data: HowItWorksSectionData;
}

export default function HowItWorksSection({ data }: HowItWorksSectionProps) {
  const cards: CardItem[] = data.steps.map((step) => ({
    id: step.id.toString(),
    title: step.title,
    description: step.description,
    icon: buildStepIcon(step.icon, step.id),
    linkText: step.linkText, // optional
    linkUrl: step.linkUrl,   // optional
  }));

  return (
    <GenericCardSection
      heading={data.heading}
      subheading={data.subheading}
      cards={cards}
      columns={3}
      // Dark blue theme
      sectionBg="bg-[#1a46c4]"
      cardBg="bg-transparent"
      iconBg="bg-transparent"
      headingColor="text-white"
      subheadingColor="text-blue-200"
      titleColor="text-white"
      descColor="text-blue-200"
      borderColor="border-white/10"
    />
  );
}