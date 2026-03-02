"use client";
// components/apply/ApplyFormUI.tsx
// ─────────────────────────────────────────────────────────────────
// Small standalone UI pieces used by the apply page:
//   - SuccessOverlay  (shown after successful submission)
//   - ApplyFormTopBar (Back link + Zero logo)
// ─────────────────────────────────────────────────────────────────

import Link from "next/link";

// ── Success overlay ───────────────────────────────────────────────
export function SuccessOverlay({ visible }: { visible: boolean }) {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl px-10 py-8 max-w-sm w-full mx-4 text-center shadow-2xl">
        <div className="w-12 h-12 rounded-full bg-[#1a46c4] flex items-center justify-center mx-auto mb-5">
          <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
            <path
              d="M5 11.5l4 4 8-8"
              stroke="white"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed font-medium">
          Your Application have been shared our recruiter will contact you if
          there&apos;s a match
        </p>
      </div>
    </div>
  );
}
