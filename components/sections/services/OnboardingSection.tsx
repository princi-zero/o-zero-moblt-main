import { GlowingEffect } from "@/components/ui/glowing-effect";
import type { OnboardingSectionData, OnboardingStep } from "@/types";

function StepIcon({ icon }: { icon: OnboardingStep["icon"] }) {
  return (
    <>
      {icon === "pin" && (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a2e5a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
        </svg>
      )}
      {icon === "person" && (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a2e5a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
          <polyline points="16 11 18 13 22 9" />
        </svg>
      )}
      {icon === "video" && (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a2e5a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
      )}
      {icon === "phone" && (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a2e5a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
      )}
    </>
  );
}

export default function OnboardingSection({ data }: { data: OnboardingSectionData }) {
  return (
    <section className="w-full bg-[#eef1f8] py-10 px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-16">

        {/* Header */}
        <div className="text-center flex flex-col gap-3">
          <h2 className="text-[1.875rem] sm:text-[2.25rem] lg:text-[2.75rem] font-bold text-[#1a2e5a] leading-tight tracking-tight">
            {data.heading}
          </h2>
          <p className="text-base text-gray-500 max-w-md mx-auto">{data.subheading}</p>
        </div>

        {/* Steps row */}
        <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8">

          {data.steps.map((step) => (
            <div
              key={step.id}
              className="relative z-10 rounded-2xl border border-gray-200 p-2
              [box-shadow:0_0_0_1px_rgba(26,46,90,0.1),0_0_20px_4px_rgba(26,46,90,0.08)]
              md:[box-shadow:none]"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="relative flex flex-col items-center text-center gap-5 bg-[#eef1f8] rounded-xl px-4 py-6">
                {/* Circle icon with yellow badge */}
                <div className="relative">
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-[#1a46c4]/30 flex items-center justify-center shadow-sm">
                    <StepIcon icon={step.icon} />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-[#F5C518] flex items-center justify-center">
                    <span className="text-[10px] font-bold text-gray-900">{step.id}</span>
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h3 className="text-base font-bold text-[#1a2e5a] mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}