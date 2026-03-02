import type { HiringSectionData, HiringStep } from "@/types/index";

function HiringIcon({ icon }: { icon: HiringStep["icon"] }) {
  const s = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none", stroke: "#111", strokeWidth: "1.6", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <>
      {icon === "doc"       && <svg {...s}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>}
      {icon === "phone"     && <svg {...s}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.74a16 16 0 0 0 6.35 6.35l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>}
      {icon === "pen"       && <svg {...s}><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>}
      {icon === "handshake" && <svg {...s}><path d="M17 11l-5-5H5l-2 6 5 1 9 3 2-2-2-3z" /><path d="M9 11l2 6 4-2" /><path d="M21 15l-4-4" /></svg>}
    </>
  );
}

export default function HiringProcessSection({ data }: { data: HiringSectionData }) {
  return (
    <section className="w-full bg-[#1a46c4] py-10 px-6 lg:px-10 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">

        {/* Header */}
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-[1.875rem] sm:text-[2.25rem] lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight">
            {data.heading}
          </h2>
          <p className="text-base text-blue-200 max-w-xl mx-auto leading-relaxed">{data.subheading}</p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Dashed connector */}
          <div className="hidden md:block absolute top-[28px] left-[12.5%] right-[12.5%] border-t-2 border-dashed border-white/30 z-0" />

          {data.steps.map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center gap-5">
              {/* Icon circle with number badge */}
              <div className="relative">
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md">
                  <HiringIcon icon={step.icon} />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#F5C518] flex items-center justify-center">
                  <span className="text-[10px] font-bold text-gray-900">{step.id}</span>
                </div>
              </div>
              <div>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-blue-200 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}