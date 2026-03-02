import { notFound } from "next/navigation";
import Link from "next/link";
import { getJobById, getAllJobIds } from "@/data/careers";
import OpenRolesSection from "@/components/sections/careers/OpenRolesSection";
import { openRolesSectionData } from "@/data/careers";
import {  OpenRolesSectionData} from "@/types";
export async function generateStaticParams() {
    return getAllJobIds().map((id) => ({ id }));
}

interface Props {
    params: { id: string };
}


export default async function JobDetailPage({ params }: Props) {
    const p = await params
    const job = getJobById(p.id);
    if (!job) notFound();
    const filteredData: OpenRolesSectionData = {
  ...openRolesSectionData,
  roles: openRolesSectionData.roles.filter(
    (role) => role.id !== p.id
  ),
};

    return (
        <main className="min-h-screen bg-white">

            {/* ── Section 1 – Job Detail ─────────────────────────────── */}
            <section className="max-w-6xl mx-auto px-6 pt-8 pb-16">

                {/* Back link */}
                <Link
                    href="/careers"
                    className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors mb-6"
                >
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                        <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to Jobs
                </Link>

                {/* Title row */}
                <div className="flex items-start justify-between gap-6">
                    <div>
                        <h1 className="text-[2.4rem] font-bold text-gray-900 leading-tight mb-3">{job.title}</h1>
                        <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
                            <span className="flex items-center gap-1.5">
                                <svg width="15" height="15" fill="none" viewBox="0 0 15 15">
                                    <rect x="1" y="4" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3" />
                                    <path d="M5 4V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                                </svg>
                                {job.salary ?? "Competitive + ESOPs"}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                                    <path d="M7 1a4 4 0 0 1 4 4c0 3-4 8-4 8S3 8 3 5a4 4 0 0 1 4-4Z" stroke="currentColor" strokeWidth="1.3" />
                                    <circle cx="7" cy="5" r="1.3" stroke="currentColor" strokeWidth="1.3" />
                                </svg>
                                {job.location}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                                    <circle cx="7" cy="7" r="5.5" stroke="currentColor" strokeWidth="1.3" />
                                    <path d="M7 4v3.5l2 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                                </svg>
                                {job.type}
                            </span>
                        </div>
                    </div>

                    <Link
                        href={`/careers/${p.id}/apply`}
                        className="flex-shrink-0 bg-[#1a46c4] hover:bg-[#1538a8] text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
                    >
                        Apply now
                    </Link>
                </div>

                <hr className="mt-8 border-gray-100" />

                {/* About the Role */}
                <div className="mt-8">
                    <h2 className="text-base font-bold text-gray-900 mb-2">About</h2>
                    <p className="text-gray-600 leading-relaxed text-sm">{job.about}</p>
                </div>

                {/* Key Responsibilities */}
                <div className="mt-8">
                    <h2 className="text-base font-bold text-gray-900 mb-3">Key Responsibilities</h2>
                    <ul className="space-y-2.5">
                        {job.responsibilities.map((r, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed">
                                <span className="mt-[7px] w-[6px] h-[6px] rounded-full bg-[#1a46c4] flex-shrink-0" />
                                {r}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Requirements */}
                <div className="mt-8">
                    <h2 className="text-base font-bold text-gray-900 mb-3">Requirements</h2>
                    <ul className="space-y-2.5">
                        {job.requirements.map((r, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed">
                                <span className="mt-[7px] w-[6px] h-[6px] rounded-full bg-[#1a46c4] flex-shrink-0" />
                                {r}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Nice to have */}
                {job.niceToHave && job.niceToHave.length > 0 && (
                    <div className="mt-8">
                        <h2 className="text-base font-bold text-gray-900 mb-3">Nice to Have</h2>
                        <ul className="space-y-2.5">
                            {job.niceToHave.map((r, i) => (
                                <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed">
                                    <span className="mt-[7px] w-[6px] h-[6px] rounded-full bg-gray-400 flex-shrink-0" />
                                    {r}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* What We Offer */}
                <div className="mt-8">
                    <h2 className="text-base font-bold text-gray-900 mb-3">What We Offer</h2>
                    <ul className="space-y-2.5">
                        {[
                            "Competitive salary package",
                            "Health insurance for you and family",
                            "Flexible work arrangements",
                            "Learning and development budget",
                            "Team outings and events",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed">
                                <span className="mt-[7px] w-[6px] h-[6px] rounded-full bg-[#1a46c4] flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* CTA */}
                <div className="mt-12 flex justify-center">
                    <Link
                        href={`/careers/${p.id}/apply`}
                        className="bg-[#1a46c4] hover:bg-[#1538a8] text-white text-sm font-semibold px-10 py-3.5 rounded-full transition-colors"
                    >
                        Apply for this role
                    </Link>
                </div>
            </section>

            {/* ── Section 2 – More Opportunities ───────────────────────── */}
            <OpenRolesSection data={filteredData} />


        </main>
    );
}