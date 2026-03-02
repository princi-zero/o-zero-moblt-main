"use client";
// components/apply/PersonalInfoSection.tsx
// ─────────────────────────────────────────────────────────────────
// Personal Information section of the apply form.
// Receives form state + actions from useApplyForm hook via props.
// ─────────────────────────────────────────────────────────────────

import {
  Label,
  Input,
  FieldError,
  CharCount,
  borderClass,
  inputBase,
} from "./FormPrimitives";
import type { FormState, FormErrors, TouchedFields } from "@/types/apply";

interface Props {
  form: FormState;
  errors: FormErrors;
  touched: TouchedFields;
  setField: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
  touchField: (key: keyof FormState) => void;
}

export function PersonalInfoSection({
  form,
  errors,
  touched,
  setField,
  touchField,
}: Props) {
  return (
    <div className="space-y-4">

      {/* Full Name */}
      <div>
        <Label htmlFor="fullName" required>Full Name</Label>
        <Input
          id="fullName"
          placeholder="John Doe"
          value={form.fullName}
          onChange={(v) => setField("fullName", v)}
          onBlur={() => touchField("fullName")}
          required
          error={errors.fullName}
        />
      </div>

      {/* Email — Gmail only */}
      <div>
        <Label htmlFor="email" required>Email Address</Label>
        <Input
          id="email"
          type="email"
          placeholder="john@gmail.com"
          value={form.email}
          onChange={(v) => setField("email", v)}
          onBlur={() => touchField("email")}
          required
          error={errors.email}
        />
        {!errors.email && touched.email && form.email && (
          <p className="mt-1 text-xs text-green-600 flex items-center gap-1">
            <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.3" />
              <path
                d="M3.5 6l2 2 3-3"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Valid Gmail address
          </p>
        )}
      </div>

      {/* Phone — +91 prefix locked */}
      <div>
        <Label htmlFor="phone" required>Phone Number</Label>
        <div className="flex">
          <span className="inline-flex items-center px-3.5 border border-r-0 border-gray-200 rounded-l-lg bg-gray-50 text-sm text-gray-600 font-medium select-none">
            +91
          </span>
          <input
            id="phone"
            type="tel"
            placeholder="98765 43210"
            value={form.phone}
            maxLength={10}
            onChange={(e) => setField("phone", e.target.value.replace(/\D/g, ""))}
            onBlur={() => touchField("phone")}
            required
            className={`flex-1 ${inputBase} rounded-l-none ${borderClass(errors.phone)}`}
          />
        </div>
        <FieldError msg={errors.phone} />
      </div>

      {/* Location — 300 char limit, required */}
      <div>
        <Label htmlFor="location" required>Current Location</Label>
        <Input
          id="location"
          placeholder="Mumbai, India"
          value={form.location}
          onChange={(v) => setField("location", v.slice(0, 300))}
          onBlur={() => touchField("location")}
          required
          error={errors.location}
          maxLength={300}
        />
        <CharCount current={form.location.length} max={300} />
      </div>

      {/* LinkedIn — prefix locked, username only */}
      <div>
        <Label htmlFor="linkedin">LinkedIn Profile</Label>
        <div className="flex">
          <span className="inline-flex items-center px-3 border border-r-0 border-gray-200 rounded-l-lg bg-gray-50 text-xs text-gray-500 select-none whitespace-nowrap">
            linkedin.com/in/
          </span>
          <input
            id="linkedin"
            type="text"
            placeholder="johndoe"
            value={form.linkedinUsername}
            onChange={(e) =>
              setField("linkedinUsername", e.target.value.replace(/\s/g, ""))
            }
            onBlur={() => touchField("linkedinUsername")}
            className={`flex-1 ${inputBase} rounded-l-none ${borderClass(errors.linkedinUsername)}`}
          />
        </div>
        <FieldError msg={errors.linkedinUsername} />
      </div>

      {/* Portfolio — https:// or http:// only */}
      <div>
        <Label htmlFor="portfolio">Portfolio / Website</Label>
        <Input
          id="portfolio"
          type="url"
          placeholder="https://yourportfolio.com"
          value={form.portfolio}
          onChange={(v) => setField("portfolio", v)}
          onBlur={() => touchField("portfolio")}
          error={errors.portfolio}
        />
        {!errors.portfolio && form.portfolio && (
          <p className="mt-1 text-xs text-gray-400">
            Must start with https:// or http://
          </p>
        )}
      </div>
    </div>
  );
}