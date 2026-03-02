import type { PerksSectionData, PerkCard } from "@/types/index";

function PerkIcon({ icon }: { icon: PerkCard["icon"] }) {
  const cls = "w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center mb-5";
  const s = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "#1a46c4", strokeWidth: "1.6" } as const;
  return (
    <div className={cls}>
      {icon === "heart"  && <svg {...s}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>}
      {icon === "trend"  && <svg {...s}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>}
      {icon === "home"   && <svg {...s}><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>}
      {icon === "gift"   && <svg {...s}><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" /><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" /></svg>}
      {icon === "book"   && <svg {...s}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>}
      {icon === "sun"    && <svg {...s}><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>}
    </div>
  );
}

export default function PerksSection({ data }: { data: PerksSectionData }) {
  return (
    <section className="w-full bg-[#eef1f8] py-10 px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">
        <h2 className="text-[1.875rem] sm:text-[2.25rem] lg:text-[2.75rem] font-bold text-[#1a2e5a] text-center leading-tight tracking-tight">
          {data.heading}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.perks.map((perk) => (
            <div key={perk.id} className="bg-white rounded-2xl p-7 flex flex-col shadow-sm hover:shadow-md transition-shadow duration-200">
              <PerkIcon icon={perk.icon} />
              <h3 className="text-base font-semibold text-[#1a2e5a] mb-2">{perk.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{perk.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}