import Image from "next/image";
import type { SeamlessScheduleData } from "@/types";

export default function SeamlessScheduleSection({ data }: { data: SeamlessScheduleData }) {
  return (
    <section className="w-full bg-white py-10 px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left — text */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-gray-900 leading-tight tracking-tight">
              {data.heading}
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">{data.subheading}</p>
          </div>

          {/* Icon list */}
          <ul className="flex flex-col gap-6">
            {data.items.map((item) => (
              <li key={item.id} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-50 border border-blue-200 flex items-center justify-center mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1a46c4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — image */}
        <div className="relative flex justify-center">
          {/* Top-right dot pattern */}
          <div
            className="absolute -top-6 -right-4 w-24 h-24 opacity-20"
            style={{ backgroundImage: "radial-gradient(circle, #1a46c4 1.5px, transparent 1.5px)", backgroundSize: "12px 12px" }}
          />
          {/* Bottom-left dot pattern */}
          <div
            className="absolute -bottom-6 -left-4 w-24 h-24 opacity-20"
            style={{ backgroundImage: "radial-gradient(circle, #1a46c4 1.5px, transparent 1.5px)", backgroundSize: "12px 12px" }}
          />

          <div className="relative w-[65%] sm:w-[50%] lg:w-full max-w-[340px] lg:max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden shadow-lg z-10">
            <Image
              src={data.image.src}
              alt={data.image.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 65vw, (max-width: 1024px) 50vw, 420px"
            />
          </div>
        </div>

      </div>
    </section>
  );
}