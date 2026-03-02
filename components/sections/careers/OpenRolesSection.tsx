import Link from "next/link";
import type { OpenRolesSectionData } from "@/types/index";

export default function OpenRolesSection({ data }: { data: OpenRolesSectionData }) {
  return (
    <section id="open-roles" className="w-full bg-[#f5f5f0] py-10 px-6 lg:px-10 xl:px-24">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="text-center flex flex-col gap-4">
          <span className="inline-block border border-[#1a46c4]/30 text-[#1a46c4] text-[10px] font-bold tracking-widest uppercase rounded-full px-4 py-1.5 w-fit bg-blue-50/60 mx-auto">
            {data.badge}
          </span>
          <h2 className="text-[1.875rem] sm:text-[2.25rem] lg:text-[2.75rem] font-bold text-[#1a2e5a] leading-tight tracking-tight">
            {data.heading}
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">{data.subheading}</p>
        </div>

        {/* Role cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.roles.map((role) => (
            <Link
              key={role.id}
              href={`/careers/${role.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl p-7 flex flex-col gap-3 border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-200"
            >
              {/* Department */}
              <span className="text-sm font-semibold text-[#1a46c4]">{role.department}</span>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#1a46c4] transition-colors duration-200 leading-snug">
                {role.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500 leading-relaxed flex-1">{role.description}</p>

              {/* Tags */}
              <div className="flex items-center gap-4 pt-2 mt-auto border-t border-gray-100">
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{role.location}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>{role.type}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}