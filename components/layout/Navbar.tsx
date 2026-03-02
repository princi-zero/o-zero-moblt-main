"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import type { NavbarData } from "@/types";

interface NavbarProps {
  data: NavbarData;
}

export default function Navbar({ data }: NavbarProps) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu whenever route changes
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <header
      className={`w-full bg-white sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md" : "border-b border-gray-100"
      }`}
    >
      <nav
        className="max-w-[1440px] mx-auto px-4 h-[72px] flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* ── Logo ── */}
        <Link href="/" aria-label="Zero — go to homepage" className="flex-shrink-0">
          <Image
            src={data.logoSrc}
            alt={data.logoAlt}
            width={44}
            height={44}
            className="object-contain"
            priority
          />
        </Link>

        {/* ── Desktop links ── */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10" role="list">
          {data.links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-sm transition-colors duration-150 ${
                    isActive
                      ? "font-semibold text-gray-900"
                      : "font-normal text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Desktop CTA ── */}
        <div className="hidden md:block">
          <Button href={data.cta.href} variant="primary" size="md">
            {data.cta.label}
          </Button>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          className="md:hidden p-2 -mr-2 text-gray-700 hover:text-gray-900 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <div className="w-6 flex flex-col gap-[5px]">
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </nav>

      {/* ── Mobile drawer ── */}
      <div
        id="mobile-menu"
        aria-hidden={!menuOpen}
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pt-2 pb-6 bg-white border-t border-gray-100 flex flex-col gap-4">
          <ul className="flex flex-col gap-3" role="list">
            {data.links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`block text-base py-1 transition-colors ${
                      isActive
                        ? "font-semibold text-gray-900"
                        : "font-normal text-gray-500 hover:text-gray-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Button href={data.cta.href} variant="primary" size="md" fullWidth>
            {data.cta.label}
          </Button>
        </div>
      </div>
    </header>
  );
}