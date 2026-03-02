import type { RiderData } from "@/types/index";;
import { StatCardUI, DataSectionWrapper, UsersIcon, ClockIcon, TrendUpIcon } from "./OpenDataUI";

function AreaChart({ data }: { data: RiderData["trend"] }) {
  const W = 900; const H = 260;
  const PAD = { left: 40, right: 24, top: 16, bottom: 32 };
  const pts = data.points;
  const maxY = 240; const minY = 0;
  const yLabels = [220, 165, 110, 55, 0];
  const xStep = (W - PAD.left - PAD.right) / (pts.length - 1);

  const toX = (i: number) => PAD.left + i * xStep;
  const toY = (v: number) => PAD.top + ((maxY - v) / (maxY - minY)) * (H - PAD.top - PAD.bottom);

  const linePath = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${toX(i)} ${toY(p.y)}`).join(" ");
  const areaPath = `${linePath} L ${toX(pts.length - 1)} ${H - PAD.bottom} L ${toX(0)} ${H - PAD.bottom} Z`;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor="#93c5fd" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#93c5fd" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Horizontal grid */}
      {yLabels.map((v) => (
        <g key={v}>
          <line x1={PAD.left} y1={toY(v)} x2={W - PAD.right} y2={toY(v)} stroke="#e5e7eb" strokeWidth="1" />
          <text x={PAD.left - 6} y={toY(v) + 4} textAnchor="end" fontSize="11" fill="#9ca3af">{v}</text>
        </g>
      ))}
      {/* Area fill */}
      <path d={areaPath} fill="url(#areaGrad)" />
      {/* Line */}
      <path d={linePath} stroke="#3b82f6" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* X labels */}
      {pts.map((p, i) => (
        <text key={p.x} x={toX(i)} y={H - 6} textAnchor={i === 0 ? "start" : i === pts.length - 1 ? "end" : "middle"} fontSize="11" fill="#9ca3af">{p.x}</text>
      ))}
    </svg>
  );
}

const ICONS = [<UsersIcon />, <UsersIcon />, <ClockIcon />, <TrendUpIcon />];

export default function RiderRegistrationsSection({ data }: { data: RiderData }) {
  return (
    <DataSectionWrapper
      heading="Rider Registrations"
      subheading="Growing trust with families joining our safe transportation network."
      bg="bg-white"
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {data.stats.map((s, i) => <StatCardUI key={s.label} card={s} icon={ICONS[i]} />)}
      </div>
      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
        <p className="text-sm font-bold text-gray-800 mb-1">{data.trend.title}</p>
        <p className="text-xs text-gray-400 mb-4">{data.trend.subtitle}</p>
        <AreaChart data={data.trend} />
      </div>
    </DataSectionWrapper>
  );
}