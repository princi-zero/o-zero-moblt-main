import Link from "next/link";
import Image from "next/image";
import type { FooterData } from "@/types";

export default function Footer({ data }: { data: FooterData }) {
  return (
    <footer className="w-full bg-[#f7f7f5] border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-6 py-6 md:py-14 flex flex-col gap-6 md:gap-14">

        {/* Top Row */}
        <div className="flex flex-col gap-8 md:grid md:grid-cols-3 md:gap-12">

          {/* Left — tagline + heading */}
          <div className="flex flex-col gap-3 text-center md:text-left">
            <p className="text-sm text-gray-500">{data.tagline}</p>
            <h3 className="text-[1.75rem] sm:text-[2rem] font-bold text-gray-900 leading-tight">
              {data.heading}
            </h3>
          </div>

          {/* Center — nav links */}
          <nav aria-label="Footer navigation" className="flex justify-center md:justify-start w-full md:w-auto">
            <ul className="w-full grid grid-cols-3 gap-6 md:grid-cols-2 md:w-auto">
              {data.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right — logo + wordmark */}
          <div className="flex flex-col items-center md:items-end gap-1">
            <Image
              src={data.logoSrc}
              alt={data.logoAlt}
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-light text-gray-900 tracking-wide">
              zero
            </span>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-4 md:pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-gray-400">{data.copyright}</p>
          <div className="flex items-center gap-6">
            {data.legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-gray-400 hover:text-gray-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <Link
            href={data.linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-gray-900 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </Link>
        </div>

      </div>
    </footer>
  );
}