import { GlowingEffect } from "@/components/ui/glowing-effect";
import type { ReactNode } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface CardItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  linkText?: string;
  linkUrl?: string;
}

export interface GenericCardSectionProps {
  heading: string;
  subheading?: string;
  cards: CardItem[];
  sectionBg?: string;
  iconBg?: string;
  cardBg?: string;
  titleColor?: string;
  descColor?: string;
  headingColor?: string;
  subheadingColor?: string;
  columns?: 1 | 2 | 3 | 4;
  borderColor?: string;
}

// ─── Column map ──────────────────────────────────────────────────────────────

const colMap: Record<number, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function GenericCardSection({
  heading,
  subheading,
  cards,
  sectionBg = "bg-[#EEF1F8]",
  iconBg = "bg-[#dce6f5]",
  cardBg = "bg-white",
  titleColor = "text-gray-900",
  descColor = "text-gray-500",
  headingColor = "text-gray-900",
  subheadingColor = "text-gray-500",
  columns = 3,
  borderColor = "border-gray-200",
}: GenericCardSectionProps) {
  return (
    <section className={`w-full ${sectionBg} py-20 px-6 lg:px-16 xl:px-24`}>
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">

        {/* Header */}
        <div className="text-center flex flex-col gap-3">
          <h2 className={`text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold leading-tight tracking-tight ${headingColor}`}>
            {heading}
          </h2>
          {subheading && (
            <p className={`text-base max-w-2xl mx-auto ${subheadingColor}`}>
              {subheading}
            </p>
          )}
        </div>

        {/* Cards */}
        <div className={`grid ${colMap[columns]} gap-10 lg:gap-16`}>
          {cards.map((card) => (
            <div key={card.id} className={`relative rounded-2xl border ${borderColor} p-2`}>
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className={`relative flex flex-col items-center text-center ${cardBg} rounded-xl px-8 py-10`}>
                <div className={`w-11 h-11 rounded-full ${iconBg} flex items-center justify-center mb-5`}>
                  {card.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${titleColor}`}>
                  {card.title}
                </h3>
                <p className={`text-sm leading-relaxed ${descColor}`}>
                  {card.description}
                  {card.linkText && card.linkUrl && (
                    <>
                      {" "}
                      <a
                        href={card.linkUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-300 underline"
                      >
                        {card.linkText}
                      </a>
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}