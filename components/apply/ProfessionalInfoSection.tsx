"use client";
// components/apply/ProfessionalInfoSection.tsx
// ─────────────────────────────────────────────────────────────────
// Professional Information section: Years of Experience,
// Resume upload (PDF, 5MB), and Cover Letter (500 chars).
// ─────────────────────────────────────────────────────────────────

import { useRef } from "react";
import { Label, Input, Textarea, FieldError } from "./FormPrimitives";
import type { FormState, FormErrors } from "@/types/apply";

interface Props {
  form: FormState;
  errors: FormErrors;
  resumeFile: File | null;
  resumeError: string;
  setField: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
  touchField: (key: keyof FormState) => void;
  onResumeChange: (file: File | null) => void;
}

export function ProfessionalInfoSection({
  form,
  errors,
  resumeFile,
  resumeError,
  setField,
  touchField,
  onResumeChange,
}: Props) {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <div className="space-y-4">

      {/* Years of Experience */}
      <div>
        <Label htmlFor="experience" required>Years of Experience</Label>
        <Input
          id="experience"
          placeholder="e.g. 5 years"
          value={form.yearsOfExperience}
          onChange={(v) => setField("yearsOfExperience", v)}
          onBlur={() => touchField("yearsOfExperience")}
          required
          error={errors.yearsOfExperience}
        />
      </div>

      {/* Resume Upload */}
      <div>
        <Label htmlFor="resume" required>
          Resume / CV{" "}
          <span className="font-normal text-gray-400">(PDF, max 5MB)</span>
        </Label>

        <div
          onClick={() => fileRef.current?.click()}
          className={`border rounded-lg px-4 py-7 flex flex-col items-center justify-center
            cursor-pointer transition-colors
            ${resumeError
              ? "border-red-400 bg-red-50"
              : resumeFile
              ? "border-[#1a46c4] bg-blue-50"
              : "border-gray-200 hover:border-[#1a46c4]"
            }`}
        >
          {resumeFile ? (
            <>
              {/* PDF icon */}
              <svg
                width="24" height="24" fill="none" viewBox="0 0 24 24"
                className="text-[#1a46c4] mb-2"
              >
                <path
                  d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Z"
                  stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"
                />
                <path
                  d="M14 2v6h6M9 13h6M9 17h4"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                />
              </svg>
              <p className="text-sm text-[#1a46c4] font-medium">{resumeFile.name}</p>
              <p className="text-xs text-gray-400 mt-1">
                {(resumeFile.size / 1024).toFixed(0)} KB · Click to change
              </p>
            </>
          ) : (
            <>
              {/* Upload icon */}
              <svg
                width="24" height="24" fill="none" viewBox="0 0 24 24"
                className="text-gray-400 mb-2"
              >
                <path
                  d="M12 16V8M12 8l-3 3M12 8l3 3"
                  stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"
                />
                <path
                  d="M20 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2"
                  stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                />
              </svg>
              <p className="text-sm text-gray-500">
                <span className="text-[#1a46c4] font-medium">Click to upload</span>{" "}
                or drag and drop
              </p>
            </>
          )}
        </div>

        <FieldError msg={resumeError} />

        {/* Hidden actual file input */}
        <input
          ref={fileRef}
          id="resume"
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={(e) => onResumeChange(e.target.files?.[0] ?? null)}
        />
      </div>

      {/* Cover Letter — 500 chars */}
      <div>
        <Label htmlFor="coverLetter">Cover Letter</Label>
        <Textarea
          id="coverLetter"
          placeholder="Tell us about yourself and why you're interested in this role..."
          value={form.coverLetter}
          onChange={(v) => setField("coverLetter", v.slice(0, 500))}
          rows={4}
          maxLength={500}
          error={errors.coverLetter}
        />
      </div>
    </div>
  );
}