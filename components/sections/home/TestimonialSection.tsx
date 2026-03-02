"use client";

import { useState } from "react";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import type { TestimonialSectionData } from "@/types";

interface TestimonialSectionProps {
  data: TestimonialSectionData;
}

export default function TestimonialSection({ data }: TestimonialSectionProps) {
  const [activeTab, setActiveTab] = useState(data.tabs[0]);

  const items = data.testimonials[activeTab] ?? [];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  // Map your data — use avatar.src as the image shown in the animated stack
  const testimonials = items.map((t) => ({
    quote: t.quote,
    name: t.name,
    designation: t.role,
    src: t.avatar.src, // ← this is what renders in the image stack
  }));

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-10">

        {/* Header */}
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-[1.875rem] sm:text-[2.25rem] lg:text-[2.75rem] font-bold text-gray-900 leading-tight tracking-tight">
            {data.heading}
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">{data.subheading}</p>
        </div>

        {/* Tab toggle */}
        <div className="flex justify-center">
          <div className="flex bg-gray-100 rounded-full p-1 gap-1">
            {data.tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => handleTabChange(tab)}
                className={`px-7 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-[#1a2e5a] text-white shadow-sm"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Animated Testimonials */}
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />

      </div>
    </section>
  );
}