import type { DriverData } from "@/types/index";
import { StatCardUI, DataSectionWrapper, UsersIcon, ShieldIcon, StarIcon, ClockIcon } from "./OpenDataUI";

// SVG circular gauge
function ScoreGauge({ score, outOf }: { score: number; outOf: number }) {
  const R = 60; const CX = 80; const CY = 80;
  const circumference = 2 * Math.PI * R;
  const pct = score / outOf;
  const strokeDash = pct * circumference;

  return (
    <svg viewBox="0 0 160 160" className="w-36 h-36 mx-auto">
      {/* Track */}
      <circle cx={CX} cy={CY} r={R} fill="none" stroke="#e5e7eb" strokeWidth="10" />
      {/* Progress */}
      <circle
        cx={CX} cy={CY} r={R}
        fill="none"
        stroke="#22c55e"
        strokeWidth="10"
        strokeDasharray={`${strokeDash} ${circumference}`}
        strokeLinecap="round"
        transform={`rotate(-90 ${CX} ${CY})`}
      />
      {/* Score text */}
      <text x={CX} y={CY - 6} textAnchor="middle" fontSize="28" fontWeight="bold" fill="#1a2e5a">{score}</text>
      <text x={CX} y={CY + 14} textAnchor="middle" fontSize="11" fill="#9ca3af">out of {outOf}</text>
    </svg>
  );
}

const STAT_ICONS = [<UsersIcon />, <ShieldIcon />, <StarIcon />, <ClockIcon />, <UsersIcon />];

export default function DriverAssuranceSection({ data }: { data: DriverData }) {
  return (
    <DataSectionWrapper
      heading="Driver Assurance"
      subheading="Every driver is thoroughly vetted, verified, and trained to ensure your child's safety."
      bg="bg-[#f5f5f0]"
    >
      {/* Verified banner */}
      <div className="bg-white border border-gray-200 rounded-2xl px-6 py-5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1a46c4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <div>
            <p className="text-base font-bold text-gray-900">{data.verifiedBanner.title}</p>
            <p className="text-sm text-gray-400">{data.verifiedBanner.subtitle}</p>
          </div>
        </div>
        <span className="bg-green-500 text-white text-sm font-semibold px-5 py-2 rounded-full">All Clear</span>
      </div>

      {/* 5 stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {data.stats.map((s, i) => (
          <div key={s.label} className="bg-white border border-gray-200 rounded-2xl px-4 py-4 flex flex-col gap-2 shadow-sm">
            <div className="flex items-center gap-1.5 text-gray-400 text-xs">
              <span>{STAT_ICONS[i]}</span>
              <span>{s.label}</span>
              {s.subLabel && <span className="ml-auto text-gray-400">{s.subLabel}</span>}
            </div>
            <p className="text-[1.5rem] font-bold text-gray-900 leading-none">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Reliability score card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm flex flex-col items-center gap-4">
        <p className="text-sm font-bold text-gray-800">Driver Reliability Score</p>
        <ScoreGauge score={data.reliabilityScore.score} outOf={data.reliabilityScore.outOf} />
        <p className="text-xs text-gray-400 text-center max-w-sm">{data.reliabilityScore.note}</p>
      </div>
    </DataSectionWrapper>
  );
}