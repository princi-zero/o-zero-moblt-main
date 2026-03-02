import type { CareersCTAData } from "@/types/index";

export default function CareersCTASection({ data }: { data: CareersCTAData }) {
  return (
    <section className="w-full bg-[#1a46c4] py-10 px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

        {/* Left */}
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold text-white leading-tight">{data.heading}</h2>
          <p className="text-sm text-blue-200 leading-relaxed max-w-sm">{data.subheading}</p>
        </div>

        {/* Right */}
        <div className="flex flex-col gap-1 md:text-right">
          <p className="text-base text-blue-200">Email your resume to</p>
          <a
            href={`mailto:${data.email}`}
            className="text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] font-bold text-white hover:text-[#F5C518] transition-colors duration-200 break-all"
          >
            {data.email}
          </a>
        </div>

      </div>
    </section>
  );
}