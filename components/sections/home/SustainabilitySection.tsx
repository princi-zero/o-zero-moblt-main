import Image from "next/image";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import type { SustainabilitySectionData } from "@/types";

export default function SustainabilitySection({ data }: { data: SustainabilitySectionData }) {
  return (
    <section className="w-full bg-white py-10 lg:py-20 px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-16 items-start">

        {/* Left — text */}
        <div className="flex flex-col gap-4 lg:gap-6">
          <span className="inline-block bg-[#e6f4ec] text-[#2d7a4f] text-[10px] font-bold tracking-widest uppercase rounded-full px-4 py-1.5 w-fit">
            {data.badge}
          </span>
          <h2 className="text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-gray-900 leading-tight tracking-tight">
            {data.heading}
          </h2>
          <p className="text-base text-gray-500 leading-relaxed">{data.subheading}</p>
          <blockquote>
            <p className="text-[#2d7a4f] font-medium text-base leading-relaxed">
              <span className="text-2xl font-bold leading-none mr-1">{"\u201C"}</span>
              {data.pullQuote}
              <span className="text-2xl font-bold leading-none mr-1">{"\u201D"}</span>
            </p>
          </blockquote>
        </div>

        {/* Right — 2x2 grid */}
        <div className="grid grid-cols-2 gap-4 w-full">

          {/* Card 1 — Lower Emissions */}
          <div className="relative rounded-2xl bg-gray-50">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative z-10 p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1a2e5a] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c4.97 0 9-4.03 9-9-4.97 0-9 4.03-9 9z" />
                  <path d="M3.42 15.42A9 9 0 0 0 12 22c0-4.97-4.03-9-9-9 .14.5.27.99.42 1.42z" />
                  <path d="M12 2C6.48 2 2 6.48 2 12h10V2z" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-[#1a2e5a]">{data.cards[0].title}</h3>
              <p className="text-sm text-gray-500">{data.cards[0].description}</p>
            </div>
          </div>

          {/* Card 2 — Energy-Efficient Routing */}
          <div className="relative rounded-2xl bg-gray-50">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative z-10 p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1a2e5a] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-[#1a2e5a]">{data.cards[1].title}</h3>
              <p className="text-sm text-gray-500">{data.cards[1].description}</p>
            </div>
          </div>

          {/* Card 3 — Fewer Vehicles */}
          <div className="relative rounded-2xl bg-gray-50">
            <GlowingEffect
              spread={40}
              glow={true}
              disabled={false}
              proximity={64}
              inactiveZone={0.01}
            />
            <div className="relative z-10 p-6 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1a2e5a] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5C518" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" rx="2" />
                  <path d="M16 8h4l3 3v5h-7V8z" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <h3 className="text-base font-semibold text-[#1a2e5a]">{data.cards[2].title}</h3>
              <p className="text-sm text-gray-500">{data.cards[2].description}</p>
            </div>
          </div>

          {/* Card 4 — Peak Hour Relief: two overlapping images (no GlowingEffect) */}
          <div className="relative bg-gray-50 rounded-2xl overflow-hidden min-h-[220px] sm:min-h-[260px]">

            {/* Back image — tilted */}
            <div className="absolute right-0 top-0 bottom-0 w-[65%] rounded-2xl overflow-hidden shadow-xl border-2 border-white -rotate-16">
              <Image
                src={data.images[0].src}
                alt={data.images[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 60vw, 150px"
              />
            </div>

            {/* Front image */}
            <div className="absolute right-0 top-0 bottom-0 w-[65%] rounded-2xl overflow-hidden shadow-xl border-2 border-white">
              <Image
                src={data.images[1].src}
                alt={data.images[1].alt}
                fill
                className="object-cover object-center scale-x-[-1]"
                sizes="(max-width: 640px) 60vw, 170px"
              />
              {/* Caption overlay at bottom */}
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm px-3 py-2">
                <p className="text-xs font-semibold text-gray-900">Peak Hour Relief</p>
                <p className="text-[10px] text-gray-500">Less traffic at schools</p>
                <p className="text-[10px] text-gray-400">One trip, many stops</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}