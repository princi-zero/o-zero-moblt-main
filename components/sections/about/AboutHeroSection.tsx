import Image from "next/image";
import type { AboutPageHeroData } from "@/types";

export default function AboutHeroSection({ data }: { data: AboutPageHeroData }) {
  return (
    <section className="w-full bg-white py-10 px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10">
        {/* Heading */}
        <h1 className="text-[1.875rem] sm:text-[2.25rem] lg:text-[2.75rem] font-bold text-gray-900 leading-tight tracking-tight text-center max-w-3xl mx-auto">
          {data.heading}
        </h1>

        {/* Team photo */}
        <div className="relative w-full aspect-[16/6] rounded-2xl overflow-hidden shadow-sm">
  <Image src={data.teamImage.src} alt={data.teamImage.alt} fill className="object-cover object-top" priority sizes="80vw" />
</div>

        {/* Who We Are — two columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-4">
          <h2 className="text-[1.75rem] sm:text-[2rem] font-bold text-gray-900 leading-tight whitespace-pre-line">
            {data.whoHeading}
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">{data.whoBody}</p>
        </div>
      </div>
    </section>
  );
}