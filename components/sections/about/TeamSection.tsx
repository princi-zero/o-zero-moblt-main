import Image from "next/image";
import Link from "next/link";
import type { TeamSectionData } from "@/types";

function MemberCard({ member }: { member: TeamSectionData["members"][0] }) {
  return (
    <div className="relative rounded-2xl overflow-hidden aspect-[3/4] group">
      {/* Photo */}
      <Image
        src={member.image.src}
        alt={member.image.alt}
        fill
        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 50vw, 25vw"
      />

      {/* Bottom overlay — name + role + LinkedIn */}
      <div className="absolute bottom-14 left-4 right-4 flex items-center justify-between bg-[#1a2e5a]/90 backdrop-blur-sm rounded-2xl px-4 py-3 gap-3">
        {/* Name + Role */}
        <div className="flex flex-col min-w-0">
          <p className="text-white text-sm font-bold leading-tight truncate">{member.name}</p>
          <p className="text-blue-300 text-xs mt-0.5">{member.role}</p>
        </div>

        {/* LinkedIn button — separate rounded square */}
        <Link
          href={member.linkedinHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${member.name} on LinkedIn`}
          className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default function TeamSection({ data }: { data: TeamSectionData }) {
  const topRow    = data.members.slice(0, 4);
  const bottomOne = data.members[4];

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-16 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-8">

        <h2 className="text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem] font-bold text-gray-900 leading-tight tracking-tight">
          {data.heading}
        </h2>

        {/* Top row — 4 cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {topRow.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Bottom row — 1 card left + watermark right */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 items-center">
          <div className="col-span-1">
            <MemberCard member={bottomOne} />
          </div>
          <div className="col-span-1 md:col-span-3 flex items-center justify-center md:justify-start pl-0 md:pl-8">
            <span className="text-[3rem] sm:text-[5rem] lg:text-[7rem] font-bold text-gray-100 leading-none select-none pointer-events-none">
              {data.watermarkText}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}