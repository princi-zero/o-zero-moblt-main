"use client";

import { useState } from "react";
import Link from "next/link";
import type { OpenDataSectionData } from "@/types";

const chartTabs = ["This week", "This month", "This year", "All time"];

const chartPaths: Record<string, string> = {
  "This week":  "M 40 160 C 80 130, 120 110, 160 90 C 200 70, 240 60, 280 55 C 320 50, 360 70, 400 120",
  "This month": "M 40 140 C 100 120, 160 80, 220 70 C 280 60, 320 90, 400 130",
  "This year":  "M 40 170 C 100 140, 180 90, 250 60 C 310 40, 360 80, 400 150",
  "All time":   "M 40 150 C 90 100, 160 70, 230 55 C 300 40, 360 100, 400 140",
};

const xLabels: Record<string, string[]> = {
  "This week":  ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  "This month": ["1", "5", "10", "15", "20", "25", "30"],
  "This year":  ["Jan", "Mar", "May", "Jul",  "Sep",  "Nov" ],
  "All time":   ["2022", "2023", "2024", "2025", "2026"],
};

export default function OpenDataSection({ data }: { data: OpenDataSectionData }) {
  const [activeTab, setActiveTab] = useState(chartTabs[0]);

  const labels = xLabels[activeTab];
  const count = labels.length;
  const chartWidth = 400;
  const startX = 40;
  const spacing = chartWidth / (count -0.5);

  return (
    <section className="w-full bg-[#1a46c4] py-10 px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left — text + stats */}
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-[1.875rem] sm:text-[2.25rem] lg:text-[2.75rem] font-bold text-white leading-tight tracking-tight">
              {data.heading}
            </h2>
            <p className="text-base text-blue-200 leading-relaxed max-w-[480px]">
              {data.subheading}
            </p>
            <Link
              href={data.linkHref}
              className="inline-flex items-center gap-1.5 text-[#F5C518] font-semibold text-sm hover:underline w-fit"
            >
              {data.linkLabel}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 divide-x divide-blue-400/50">
            {data.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1 pr-2 pl-2 ">
                <span className="text-[2rem] font-bold text-white leading-none">{stat.value}</span>
                <span className="text-sm text-blue-200">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — chart card */}
        <div className="bg-white rounded-2xl p-6 shadow-xl">
          {/* Tab row */}
          <div className="flex gap-2 mb-6 flex-wrap">
            {chartTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeTab === tab
                    ? "bg-[#1a2e5a] text-white"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* SVG Line chart */}
          <svg viewBox="0 0 440 200" className="w-full" fill="none">
            {/* Grid line */}
            <line x1="40" y1="170" x2="410" y2="170" stroke="#e5e7eb" strokeWidth="1" />

            {/* Chart line */}
            <path
              d={chartPaths[activeTab]}
              stroke="#1a46c4"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
            />

            {/* Dynamic x-axis labels */}
            {labels.map((label, i) => (
              <text
                key={label}
                x={startX + i * spacing}
                y="190"
                textAnchor="middle"
                fontSize="10"
                fill="#9ca3af"
              >
                {label}
              </text>
            ))}
          </svg>
        </div>

      </div>
    </section>
  );
}