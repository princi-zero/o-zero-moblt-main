import type { TripData } from "@/types/index";;
import { StatCardUI, DataSectionWrapper, ActivityIcon, XCircleIcon, ClockIcon } from "./OpenDataUI";

function BarChart({ data }: { data: TripData["chart"] }) {
  const W = 900; const H = 240;
  const PAD = { left: 56, right: 24, top: 16, bottom: 32 };
  const bars = data.bars;
  const maxY = 10000;
  const yLabels = [10000, 7500, 5000, 2500, 0];
  const barW = 40;
  const slot = (W - PAD.left - PAD.right) / bars.length;

  const toY = (v: number) => PAD.top + ((maxY - v) / maxY) * (H - PAD.top - PAD.bottom);
  const barH = (v: number) => H - PAD.bottom - toY(v);

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="xMidYMid meet">
      {yLabels.map((v) => (
        <g key={v}>
          <line x1={PAD.left} y1={toY(v)} x2={W - PAD.right} y2={toY(v)} stroke="#e5e7eb" strokeWidth="1" />
          <text x={PAD.left - 8} y={toY(v) + 4} textAnchor="end" fontSize="11" fill="#9ca3af">{v === 0 ? "0" : v >= 1000 ? `${v / 1000 * 10 / 10}` : v}</text>
        </g>
      ))}
      {bars.map((b, i) => {
        const cx = PAD.left + i * slot + slot / 2;
        return (
          <g key={b.x}>
            <rect x={cx - barW / 2} y={toY(b.y)} width={barW} height={barH(b.y)} rx="4" fill="#2d5be3" />
            <text x={cx} y={H - 6} textAnchor="middle" fontSize="11" fill="#9ca3af">{b.x}</text>
          </g>
        );
      })}
    </svg>
  );
}

const ICONS = [<ActivityIcon />, <ActivityIcon />, <XCircleIcon />, <ClockIcon />];

export default function TripReliabilitySection({ data }: { data: TripData }) {
  return (
    <DataSectionWrapper
      heading="Trip Reliability"
      subheading="Consistent, dependable service that parents and schools can count on."
      bg="bg-white"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.stats.map((s, i) => <StatCardUI key={s.label} card={s} icon={ICONS[i]} />)}
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <p className="text-sm font-bold text-gray-800 mb-1">{data.chart.title}</p>
        <p className="text-xs text-gray-400 mb-4">{data.chart.subtitle}</p>
        <BarChart data={data.chart} />
      </div>
    </DataSectionWrapper>
  );
}