import Image from "next/image";
import Link from "next/link";
import GenericCardSection, { type CardItem } from "@/components/ui/Genericcardsection";
import type { CampusSectionData, CampusFeature } from "@/types";

// ─── Icons ────────────────────────────────────────────────────────────────────

const stroke = "#F5C518";

const ShieldIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const SearchIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const HeartIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={stroke} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

const iconMap: Record<CampusFeature["icon"], React.ReactNode> = {
  shield: <ShieldIcon />,
  search: <SearchIcon />,
  heart:  <HeartIcon />,
};

// ─── Component ────────────────────────────────────────────────────────────────

interface CampusSectionProps {
  data: CampusSectionData;
}

export default function CampusSection({ data }: CampusSectionProps) {
  const cards: CardItem[] = data.features.map((feature) => ({
    id: feature.id.toString(),
    title: feature.title,
    description: feature.description,
    icon: iconMap[feature.icon] ?? null,
  }));

  return (
    <section className="relative w-full overflow-hidden bg-gray-950">

      {/* Background image */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src={data.backgroundImage.src}
          alt={data.backgroundImage.alt}
          fill
          className="object-cover object-center"
          sizes="900px"
        />
      </div>

      {/* Split header — heading left, subheading right */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-16 xl:px-24 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <h2 className="text-[1.875rem] sm:text-[2.25rem] lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight">
            {data.heading}
          </h2>
          <p className="text-base text-gray-300 leading-relaxed lg:pt-2">
            {data.subheading}
          </p>
        </div>
      </div>

      {/* Cards — via GenericCardSection, heading/subheading suppressed */}
      <div className="relative z-10">
        <GenericCardSection
          heading=""
          cards={cards}
          columns={3}
          sectionBg="bg-transparent"
          cardBg="bg-transparent"
          iconBg="bg-transparent"
          borderColor="border-gray-700"
          titleColor="text-white"
          descColor="text-gray-400"
          headingColor="text-white"
        />
      </div>

      {/* CTA button */}
      <div className="relative z-10 flex justify-center pb-20">
        <Link
          href={data.cta.href}
          className="inline-flex items-center justify-center rounded-full bg-[#F5C518] hover:bg-[#e0b415] text-gray-900 font-semibold px-8 py-3.5 text-sm transition-all duration-200 shadow-md hover:shadow-lg"
        >
          {data.cta.label}
        </Link>
      </div>

    </section>
  );
}