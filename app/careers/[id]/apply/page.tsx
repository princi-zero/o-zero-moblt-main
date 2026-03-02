"use client";
// app/careers/[id]/apply/page.tsx
// ─────────────────────────────────────────────────────────────────
// Apply page — pure layout only.
// All state, validation, and submit logic lives in useApplyForm.
// All field rendering lives in section components.
// ─────────────────────────────────────────────────────────────────

import Link from "next/link";
import { useParams } from "next/navigation";
import { getJobById } from "@/data/careers";
import { useApplyForm } from "@/hooks/useApplyForm";
import { SectionHeading, FieldError } from "@/components/apply/FormPrimitives";
import { SuccessOverlay } from "@/components/apply/ApplyFormUI";
import { PersonalInfoSection } from "@/components/apply/PersonalInfoSection";
import { ProfessionalInfoSection } from "@/components/apply/ProfessionalInfoSection";
import { AdditionalQuestionsSection } from "@/components/apply/AdditionalQuestionsSection";

export default function ApplyPage() {
  const { id: jobId } = useParams<{ id: string }>();
  const job = getJobById(jobId ?? "");

  const {
    form, errors, touched,
    resumeFile, resumeError,
    submitting, submitStatus,
    showSuccess, submitError,
    buttonLabel,
    setField, touchField,
    handleResumeChange,
    handleSubmit,
  } = useApplyForm({ jobId, jobTitle: job?.title ?? "" });

  return (
    <>
      <SuccessOverlay visible={showSuccess} />

      <main className="min-h-screen bg-[#f7f7f5]">

        <div className="max-w-6xl mx-auto px-4 py-10">
          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-2xl border border-gray-100 shadow-sm px-8 py-8"
          >
            {/* Header */}
            <h1 className="text-xl font-bold text-gray-900 mb-1">
              Apply for {job?.title ?? "this role"}
            </h1>
            <p className="text-xs text-gray-400 mb-2">
              Please fill out the form below. All fields marked with * are required.
            </p>

            {/* ── Personal Information ─────────────────────── */}
            <h2 className="text-sm font-bold text-gray-900 mb-4 mt-5">
              Personal Information
            </h2>
            <PersonalInfoSection
              form={form}
              errors={errors}
              touched={touched}
              setField={setField}
              touchField={touchField}
            />

            {/* ── Professional Information ─────────────────── */}
            <SectionHeading>Professional Information</SectionHeading>
            <ProfessionalInfoSection
              form={form}
              errors={errors}
              resumeFile={resumeFile}
              resumeError={resumeError}
              setField={setField}
              touchField={touchField}
              onResumeChange={handleResumeChange}
            />

            {/* ── Additional Questions ─────────────────────── */}
            <SectionHeading>Additional Questions</SectionHeading>
            <AdditionalQuestionsSection
              form={form}
              errors={errors}
              setField={setField}
              touchField={touchField}
            />

            {/* ── Agreement ────────────────────────────────── */}
            <div className="mt-6">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.agreed}
                  onChange={(e) => setField("agreed", e.target.checked)}
                  className="mt-0.5 accent-[#1a46c4]"
                />
                <span className="text-xs text-gray-500">
                  I agree to the{" "}
                  <Link href="/privacy" className="text-[#1a46c4] underline">
                    Privacy Policy
                  </Link>{" "}
                  and{" "}
                  <Link href="/terms" className="text-[#1a46c4] underline">
                    Terms of Service
                  </Link>
                </span>
              </label>
              <FieldError msg={errors.agreed} />
            </div>

            {/* ── Global submit error ───────────────────────── */}
            {submitError && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-xs text-red-600">{submitError}</p>
              </div>
            )}

            {/* ── Submit button ─────────────────────────────── */}
            <button
              type="submit"
              disabled={submitting}
              className="mt-5 w-full bg-[#1a46c4] hover:bg-[#1538a8] disabled:opacity-60
                text-white text-sm font-semibold py-3.5 rounded-xl transition-colors"
            >
              {buttonLabel}
            </button>

            {submitting && (
              <p className="text-center text-xs text-gray-400 mt-2">
                {submitStatus === "uploading"
                  ? "Uploading your resume..."
                  : "Saving your application to our system..."}
              </p>
            )}
          </form>
        </div>
      </main>
    </>
  );
}