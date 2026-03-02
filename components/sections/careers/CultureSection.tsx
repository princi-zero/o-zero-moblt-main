"use client";

import Image from "next/image";
import type { CultureSectionData } from "@/types/index";

export default function CultureSection({ data }: { data: CultureSectionData }) {
  return (
    <section className="w-full bg-white py-10 px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left — text */}
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-[#1a2e5a] leading-tight tracking-tight">
              {data.heading}
            </h2>
            <p className="text-base text-gray-400">{data.subheading}</p>
          </div>

          {/* Checklist */}
          <ul className="flex flex-col gap-5">
            {data.points.map((pt) => (
              <li key={pt.title} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-[#1a2e5a]/40 flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#1a2e5a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p className="text-base text-[#1a2e5a]">
                  <span className="font-semibold">{pt.title}</span>
                  <span className="text-gray-400"> — {pt.detail}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>

              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

      </div>
    </section>
  );
}