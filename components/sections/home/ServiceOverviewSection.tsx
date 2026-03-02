import Image from "next/image";
import Link from "next/link";
import type { ServiceOverviewData } from "@/types";

interface ServiceOverviewSectionProps {
  data: ServiceOverviewData;
}

export default function ServiceOverviewSection({ data }: ServiceOverviewSectionProps) {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-14">

        {/* Top row — text left, image right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left — heading + subheading */}
          <div className="flex flex-col gap-5">
            <h2 className="text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-gray-900 leading-tight tracking-tight">
              {data.heading}
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              {data.subheading}
            </p>
          </div>

          {/* Right — image */}
          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Feature grid — 3 columns × 2 rows with vertical dividers */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border-t border-gray-100">
          {data.features.map((feature, i) => {
            const isLastRow  = i >= 3;
            const isLastCol  = (i % 3) === 2;
            return (
              <div
                key={feature.id}
                className={[
                  "flex flex-col gap-2 py-8 px-6",
                  !isLastCol  ? "sm:border-r border-gray-200" : "",
                  !isLastRow  ? "border-b border-gray-100"    : "",
                ].join(" ")}
              >
                <h3 className="text-lg font-bold text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 flex-wrap">
          {data.ctas.map((cta) => (
            <Link
              key={cta.label}
              href={cta.href}
              className={[
                "inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-200",
                cta.variant === "primary"
                  ? "bg-[#F5C518] hover:bg-[#e0b415] text-gray-900 shadow-sm hover:shadow-md"
                  : "bg-white hover:bg-gray-50 text-gray-900 border border-gray-300 hover:border-gray-400",
              ].join(" ")}
            >
              {cta.label}
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}