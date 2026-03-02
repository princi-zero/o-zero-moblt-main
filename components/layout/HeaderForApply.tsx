"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import type { NavbarData } from "@/types";

interface NavbarProps {
    data: NavbarData;
}

export default function HeaderForApply({ data }: NavbarProps) {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return (
        <header
            className={`w-full bg-white sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-md" : "border-b border-gray-100"
                }`}
        >
            {/* Top bar */}
            <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between max-w-full">
                <Link
                    href={`/careers#openposition`}
                    className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-800 transition-colors"
                >
                    <svg width="16" height="16" fill="none" viewBox="0 0 16 16">
                        <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back to Jobs
                </Link>
                {/* Logo */}
                <div className="flex items-center gap-2">
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
                </div>
            </div>
        </header>
    );
}