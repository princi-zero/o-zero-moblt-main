import Image from "next/image";
import Link from "next/link";
import type { TwoPathsSectionData } from "@/types/index";

export default function TwoPathsSection({ data }: { data: TwoPathsSectionData }) {
  return (
    <section className="w-full bg-white py-8 px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">

        {/* Header */}
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-[1.875rem] sm:text-[2.25rem] lg:text-[2.75rem] font-bold text-[#1a2e5a] leading-tight tracking-tight">
            {data.heading}
          </h2>
          <p className="text-base text-gray-400 max-w-xl mx-auto">{data.subheading}</p>
        </div>

        {/* Alternating rows */}
        <div className="flex flex-col gap-16">
          {data.paths.map((path) => {
            const isImgRight = path.imagePosition === "right";
            return (
              <div
                key={path.id}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  isImgRight ? "" : "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1"
                }`}
              >
                {/* Text */}
                <div className="flex flex-col gap-5">
                  <h3 className="text-[1.5rem] sm:text-[1.75rem] font-bold text-gray-900 leading-snug">
                    {path.title}
                  </h3>
                  <p className="text-base text-gray-500 leading-relaxed">{path.description}</p>
                  <Link
                    href={path.cta.href}
                    className="inline-flex items-center justify-center rounded-full bg-[#F5C518] hover:bg-[#e0b415] text-gray-900 font-semibold px-6 py-2.5 text-sm transition-all duration-200 w-fit shadow-sm"
                  >
                    {path.cta.label}
                  </Link>
                </div>

                {/* Image */}
                <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
                  <Image src={path.image.src} alt={path.image.alt} fill className="object-cover object-center" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}