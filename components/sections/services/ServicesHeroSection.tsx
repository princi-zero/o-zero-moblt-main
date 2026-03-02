import Image from "next/image";
import Link from "next/link";
import type { ServicesPageHeroData } from "@/types";

export default function ServicesHeroSection({ data }: { data: ServicesPageHeroData }) {
  return (
    <section className="max-w-[1440px] w-full  mx-auto px-4 py-4 sm:py-6">
      <div className="relative w-full h-[280px] md:h-[440px] lg:h-[480px] rounded-2xl overflow-hidden">
        <Image
          src={data.backgroundImage.src}
          alt={data.backgroundImage.alt}
          fill
          className="object-cover object-center"
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1440px"
        />
        {/* Overlay for better text legibility on small screens */}

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-8 gap-3 sm:gap-5">
          <h1 className="text-[1.4rem] sm:text-[1.875rem] lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight max-w-xs sm:max-w-xl lg:max-w-3xl">
            {data.heading}
          </h1>
          <p className="text-xs sm:text-sm lg:text-base text-white/80 max-w-[280px] sm:max-w-md lg:max-w-xl leading-relaxed">
            {data.subheading}
          </p>
          <Link
            href={data.cta.href}
            className="mt-1 sm:mt-2 inline-flex items-center justify-center rounded-full bg-[#F5C518] hover:bg-[#e0b415] text-gray-900 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 text-xs sm:text-sm transition-all duration-200 shadow-md"
          >
            {data.cta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}