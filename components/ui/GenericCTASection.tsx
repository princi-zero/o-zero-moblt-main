import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

export interface CTAButton {
  label: string;
  href: string;
}

export interface GenericCTASectionProps {
  heading: string;
  subheading?: string;
  cta: CTAButton;
  // Theming
  sectionBg?: string;       // default "bg-[#1a46c4]"
  headingColor?: string;    // default "text-white"
  subheadingColor?: string; // default "text-blue-200"
  btnBg?: string;           // default "bg-[#F5C518]"
  btnHoverBg?: string;      // default "hover:bg-[#e0b415]"
  btnTextColor?: string;    // default "text-gray-900"
}

// ─── Component ───────────────────────────────────────────────────────────────

export default function GenericCTASection({
  heading,
  subheading,
  cta,
  sectionBg       = "bg-[#1a46c4]",
  headingColor    = "text-white",
  subheadingColor = "text-blue-200",
  btnBg           = "bg-[#F5C518]",
  btnHoverBg      = "hover:bg-[#e0b415]",
  btnTextColor    = "text-gray-900",
}: GenericCTASectionProps) {
  return (
    <section className={`w-full ${sectionBg} py-24 px-6 lg:px-16 xl:px-24`}>
      <div className="max-w-[1440px] mx-auto flex flex-col items-center text-center gap-6">

        <h2 className={`text-[1.875rem] sm:text-[2.25rem] lg:text-[2.75rem] font-bold leading-tight tracking-tight max-w-2xl ${headingColor}`}>
          {heading}
        </h2>

        {subheading && (
          <p className={`text-base max-w-lg leading-relaxed ${subheadingColor}`}>
            {subheading}
          </p>
        )}

        <Link
          href={cta.href}
          className={`mt-2 inline-flex items-center justify-center rounded-full ${btnBg} ${btnHoverBg} ${btnTextColor} font-semibold px-8 py-3.5 text-sm transition-all duration-200 shadow-md hover:shadow-lg`}
        >
          {cta.label}
        </Link>

      </div>
    </section>
  );
}