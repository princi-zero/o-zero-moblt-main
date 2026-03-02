"use client";

import { useState } from "react";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import type { JourneySectionData } from "@/types";

export default function JourneySection({ data }: { data: JourneySectionData }) {
  const [offset, setOffset] = useState(0);
  const max = data.cards.length - 3;

  return (
    <section className="w-full bg-white py-10 px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col">

        {/* Header row with nav arrows */}
        <div className="flex items-center justify-between">
          <h2 className="text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-gray-900 leading-tight tracking-tight">
            {data.heading}
          </h2>
          <div className="flex gap-3">
            <button
              onClick={() => setOffset((o) => Math.max(0, o - 1))}
              disabled={offset === 0}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-600 disabled:opacity-30 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              onClick={() => setOffset((o) => Math.min(Math.max(max, 0), o + 1))}
              disabled={offset >= max || max <= 0}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-600 disabled:opacity-30 transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.cards.slice(offset, offset + 3).map((card) => (
            <CardContainer key={card.id} className="w-full">
              <CardBody className="w-full bg-transparent border-0 shadow-none p-0">
                <div className="flex flex-col rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">

                  {/* Image */}
                  <CardItem translateZ="60" className="w-full">
                    <div className="relative w-full aspect-[4/3] overflow-hidden">
                      <Image
                        src={card.image.src}
                        alt={card.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </CardItem>

                  {/* Text */}
                  <CardItem translateZ="30" className="w-full">
                    <div className="p-6 flex flex-col gap-3">
                      <p className="text-base font-bold text-gray-900">{card.date}</p>
                      <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
                    </div>
                  </CardItem>

                </div>
              </CardBody>
            </CardContainer>
          ))}
        </div>

      </div>
    </section>
  );
}