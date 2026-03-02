import Image from "next/image";
import type { SafetySectionData } from "@/types";

export default function SafetySection({ data }: { data: SafetySectionData }) {
  return (
    <section className="w-full bg-white py-10 px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-[1.875rem] sm:text-[2.25rem] lg:text-[2.75rem] font-bold text-gray-900 leading-tight tracking-tight">
            {data.heading}
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">{data.subheading}</p>
        </div>

        {/* Alternating rows */}
        <div className="flex flex-col gap-20">
          {data.rows.map((row) => {
            const isImageRight = row.imagePosition === "right";
            return (
              <div
                key={row.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  isImageRight ? "" : "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                }`}
              >
                {/* Text */}
                <div className="flex flex-col gap-4">
                  <h3 className="text-[1.5rem] sm:text-[1.75rem] font-bold text-gray-900 leading-snug">
                    {row.title}
                  </h3>
                  <p className="text-base text-gray-500 leading-relaxed">{row.description}</p>
                </div>

                {/* Image */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                  <Image src={row.image.src} alt={row.image.alt} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}