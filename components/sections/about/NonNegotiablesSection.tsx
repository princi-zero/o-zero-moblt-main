import GenericCardSection, { type CardItem } from "@/components/ui/Genericcardsection";
import type { NonNegotiablesSectionData, NonNegotiable } from "@/types";

// ─── Icons ────────────────────────────────────────────────────────────────────

const ShieldIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const SearchIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const HeartIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const iconMap: Record<NonNegotiable["icon"], React.ReactNode> = {
  shield: <ShieldIcon />,
  search: <SearchIcon />,
  heart:  <HeartIcon />,
};

// ─── Component ────────────────────────────────────────────────────────────────

export default function NonNegotiablesSection({ data }: { data: NonNegotiablesSectionData }) {
  const cards: CardItem[] = data.items.map((item) => ({
    id: item.id.toString(),
    title: item.title,
    description: item.description,
    icon: iconMap[item.icon] ?? null,
  }));

  return (
    <GenericCardSection
      heading={data.heading}
      cards={cards}
      columns={3}
      sectionBg="bg-[#1a46c4]"
      cardBg="bg-transparent"
      iconBg="bg-transparent"
      borderColor="border-white/10"
      headingColor="text-white"
      titleColor="text-white"
      descColor="text-blue-200"
    />
  );
}