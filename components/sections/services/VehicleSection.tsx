import GenericCardSection, { type CardItem } from "@/components/ui/Genericcardsection";
import type { VehicleSectionData, VehicleFeature } from "@/types";

// ─── Icons ────────────────────────────────────────────────────────────────────

const WrenchIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const SeatbeltIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v8" />
    <path d="M8 11l4 4 4-4" />
    <path d="M7 19h10" />
  </svg>
);

const SlidersIcon = () => (
  <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </svg>
);

const iconMap: Record<VehicleFeature["icon"], React.ReactNode> = {
  wrench:   <WrenchIcon />,
  seatbelt: <SeatbeltIcon />,
  sliders:  <SlidersIcon />,
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function VehicleSection({ data }: { data: VehicleSectionData }) {
  const cards: CardItem[] = data.features.map((f) => ({
    id: f.id.toString(),
    title: f.title,
    description: f.description,
    icon: iconMap[f.icon] ?? null,
  }));

  return (
    <GenericCardSection
      heading={data.heading}
      subheading={data.subheading}
      cards={cards}
      columns={3}
      sectionBg="bg-[#1a46c4]"
      cardBg="bg-transparent"
      iconBg="bg-transparent"
      borderColor="border-white/10"
      headingColor="text-white"
      subheadingColor="text-blue-200"
      titleColor="text-white"
      descColor="text-blue-200"
    />
  );
}