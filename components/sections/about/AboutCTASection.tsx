import Image from "next/image";
import Link from "next/link";
import type { AboutCTAData } from "@/types";

export default function AboutCTASection({ data }: { data: AboutCTAData }) {
  return (
    <section className="relative w-full overflow-hidden flex items-center min-h-[200px] lg:min-h-[400px]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute right-0 top-0 h-full w-1/2">
          <Image
            src={data.backgroundImage.src}
            alt={data.backgroundImage.alt}
            fill
            className="object-cover object-left"
            sizes="50vw"
          />
        </div>
        {/* Solid dark left side fading to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1c201c] from-[50%] via-[#1c201c]/90 via-[58%] to-transparent to-[98%]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full px-4 lg:px-16 xl:px-24 py-8 lg:py-24">
        <div className="flex flex-col gap-3 lg:gap-5 max-w-[55%] lg:max-w-lg">
          <h2 className="text-lg sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-white leading-tight tracking-tight">
            {data.heading}
          </h2>
          <p className="text-xs sm:text-base text-white/80 leading-relaxed hidden sm:block">
            {data.subheading}
          </p>
          <div className="pt-1 lg:pt-2">
            <Link
              href={data.cta.href}
              className="inline-flex items-center justify-center rounded-full bg-[#F5C518] hover:bg-[#e0b415] text-gray-900 font-semibold px-4 py-2 lg:px-8 lg:py-3.5 text-xs lg:text-sm transition-all duration-200 shadow-md"
            >
              {data.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}