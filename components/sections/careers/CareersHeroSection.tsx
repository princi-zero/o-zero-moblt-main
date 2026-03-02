import Image from "next/image";
import Link from "next/link";
import type { CareersHeroData } from "@/types/index";

export default function CareersHeroSection({ data }: { data: CareersHeroData }) {
  return (
    <section className="w-full bg-white py-10 px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left — text */}
        <div className="flex flex-col gap-6">
          <span className="inline-block border border-[#1a46c4]/30 text-[#1a46c4] text-[10px] font-bold tracking-widest uppercase rounded-full px-4 py-1.5 w-fit bg-blue-50/60">
            {data.badge}
          </span>
          <h1 className="text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-bold text-[#1a2e5a] leading-tight tracking-tight">
            {data.heading}
          </h1>
          <p className="text-base text-gray-500 leading-relaxed max-w-sm">{data.subheading}</p>
          <Link
            href={data.cta.href}
            className="inline-flex items-center justify-center rounded-full bg-[#F5C518] hover:bg-[#e0b415] text-gray-900 font-semibold px-7 py-3 text-sm transition-all duration-200 shadow-sm w-fit"
          >
            {data.cta.label}
          </Link>
        </div>

        {/* Right — image collage: top row 2 images, bottom 1 wide image */}
        <div className="grid grid-cols-2 grid-rows-2 gap-3 h-[420px]">
          {/* Top-left */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image src={data.images[0].src} alt={data.images[0].alt} fill className="object-cover object-top" sizes="25vw" />
          </div>
          {/* Top-right */}
          <div className="relative rounded-2xl overflow-hidden">
            <Image src={data.images[1].src} alt={data.images[1].alt} fill className="object-cover object-center" sizes="25vw" />
          </div>
          {/* Bottom — spans 2 cols */}
          <div className="relative rounded-2xl overflow-hidden col-span-2">
            <Image src={data.images[2].src} alt={data.images[2].alt} fill className="object-cover object-top" sizes="50vw" />
          </div>
        </div>

      </div>
    </section>
  );
}