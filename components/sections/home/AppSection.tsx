"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { AppSectionData } from "@/types";

interface AppSectionProps {
  data: AppSectionData;
}

export default function AppSection({ data }: AppSectionProps) {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6">

        {/* Header */}
        <div className="text-center flex flex-col gap-3 mb-10">
          <h2 className="text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-gray-900 leading-tight tracking-tight">
            {data.heading}
          </h2>
          <p className="text-base text-gray-500 max-w-lg mx-auto leading-relaxed">
            {data.subheading}
          </p>
        </div>

        {/* Alternating feature rows */}
        <div className="flex flex-col gap-12">
          {data.features.map((feature, i) => {
            const isImageRight = feature.imagePosition === "right";
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch rounded-3xl overflow-hidden border border-gray-100 shadow-sm ${
                  isImageRight ? "" : "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                }`}
              >
                {/* Text side */}
                <div className="flex flex-col justify-center gap-5 bg-[#eef1f8] px-10 py-12">
                  <div className="w-fit px-3 py-1 rounded-full bg-white text-[#1a46c4] text-xs font-semibold tracking-wide shadow-sm">
                     {i + 1}
                  </div>
                  <h3 className="text-[1.5rem] sm:text-[1.75rem] font-bold text-gray-900 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-base text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                  <div className="w-10 h-1 rounded-full bg-[#1a46c4]" />
                </div>

                {/* Phone side */}
                <div className="flex justify-center items-center bg-white py-10 px-6 min-h-[280px]">
                  <div className="relative">
                    {/* Dot pattern top-right */}
                    <div
                      className="absolute -top-4 -right-4 w-24 h-24 opacity-20 z-0"
                      style={{
                        backgroundImage: "radial-gradient(circle, #1a46c4 1.5px, transparent 1.5px)",
                        backgroundSize: "12px 12px",
                      }}
                    />
                    {/* Dot pattern bottom-left */}
                    <div
                      className="absolute -bottom-4 -left-4 w-24 h-24 opacity-20 z-0"
                      style={{
                        backgroundImage: "radial-gradient(circle, #1a46c4 1.5px, transparent 1.5px)",
                        backgroundSize: "12px 12px",
                      }}
                    />
                    {/* Glow blob */}
                    <div className="absolute inset-0 z-0 flex items-center justify-center">
                      <div className="w-[180px] h-[180px] rounded-full bg-[#1a46c4]/10 blur-3xl" />
                    </div>
                    {/* Phone */}
                    <div
                      className="relative z-10 w-[160px] sm:w-[260px] aspect-[9/19]"
                      style={{ filter: "drop-shadow(0 20px 40px rgba(26,70,196,0.2))" }}
                    >
                      <Image
                        src={feature.image.src}
                        alt={feature.image.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 160px, 260px"
                      />
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}