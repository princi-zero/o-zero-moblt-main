import type { SafetyData } from "@/types/index";;
import { StatCardUI, DataSectionWrapper, ClockIcon, ShieldIcon, ClockIcon as TimerIcon, RadioIcon } from "./OpenDataUI";

// Simple SVG line chart
function SafetyLineChart({ data }: { data: SafetyData["trend"] }) {
  const W = 900; const H = 200;
  const PAD = { left: 48, right: 24, top: 16, bottom: 28 };
  const pts = data.points;
  const minY = 96; const maxY = 100;
  const xStep = (W - PAD.left - PAD.right) / (pts.length - 1);

  const toX = (i: number) => PAD.left + i * xStep;
  const toY = (v: number) => PAD.top + ((maxY - v) / (maxY - minY)) * (H - PAD.top - PAD.bottom);

  const d = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(p.y)}`).join(" ");
  const yLabels = [100, 99, 98, 97, 96];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="xMidYMid meet">
      {/* Y grid lines + labels */}
      {yLabels.map((v) => (
        <g key={v}>
          <line x1={PAD.left} y1={toY(v)} x2={W - PAD.right} y2={toY(v)} stroke="#e5e7eb" strokeWidth="1" />
          <text x={PAD.left - 6} y={toY(v) + 4} textAnchor="end" fontSize="11" fill="#9ca3af">{v}</text>
        </g>
      ))}
      {/* Smooth line */}
      <path d={d} stroke="#22c55e" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* Dots + x labels */}
      {pts.map((p, i) => (
        <g key={p.x}>
          <circle cx={toX(i)} cy={toY(p.y)} r="4" fill="#22c55e" />
          <text x={toX(i)} y={H - 4} textAnchor="middle" fontSize="11" fill="#9ca3af">{p.x}</text>
        </g>
      ))}
    </svg>
  );
}

const ICONS = [<ClockIcon />, <ShieldIcon />, <TimerIcon />, <RadioIcon />];

export default function SafetyPerformanceSection({ data }: { data: SafetyData }) {
  return (
    <DataSectionWrapper
      heading="Safety Performance"
      subheading="Real-time metrics showing our commitment to keeping every child safe on every journey."
      bg="bg-[#f5f5f0]"
    >
      {/* 4 stat cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.stats.map((s, i) => <StatCardUI key={s.label} card={s} icon={ICONS[i]} />)}
      </div>

      {/* Line chart card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <p className="text-sm font-bold text-gray-800 mb-1">{data.trend.title}</p>
        <p className="text-xs text-gray-400 mb-4">{data.trend.subtitle}</p>
        <SafetyLineChart data={data.trend} />
      </div>
    </DataSectionWrapper>
  );
}