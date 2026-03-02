import type { SmartCommuteSectionData, SmartCommuteCard } from "@/types";

function CommuteIcon({ icon }: { icon: SmartCommuteCard["icon"] }) {
  return (
    <div className="mb-5">
      {icon === "clock" && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a2e5a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
        </svg>
      )}
      {icon === "history" && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a2e5a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1 4 1 10 7 10" />
          <path d="M3.51 15a9 9 0 1 0 .49-4.5" />
          <polyline points="12 7 12 12 15 13" />
        </svg>
      )}
      {icon === "eye-off" && (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1a2e5a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
          <line x1="1" y1="1" x2="23" y2="23" />
        </svg>
      )}
    </div>
  );
}

export default function SmartCommuteSection({ data }: { data: SmartCommuteSectionData }) {
  return (
    <section className="w-full bg-white py-10 px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-14">
        {/* Header */}
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-[1.875rem] sm:text-[2.25rem] lg:text-[2.75rem] font-bold text-gray-900 leading-tight tracking-tight">
            {data.heading}
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto leading-relaxed">{data.subheading}</p>
        </div>

        {/* 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {data.cards.map((card) => (
            <div key={card.id} className="border border-gray-200 rounded-2xl p-8 flex flex-col hover:shadow-md transition-shadow duration-200">
              <CommuteIcon icon={card.icon} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}