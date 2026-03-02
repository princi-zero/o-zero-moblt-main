"use client";
// hooks/useApplyForm.ts

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { submitApplication } from "@/lib/submitApplication";
import type { FormState, TouchedFields, SubmitStatus } from "@/types/apply";
import { EMPTY_FORM } from "@/types/apply";
import { computeErrors } from "@/lib/applyValidation";

interface UseApplyFormProps {
  jobId: string;
  jobTitle: string;
}

export function useApplyForm({ jobId, jobTitle }: UseApplyFormProps) {
  const router    = useRouter();
  const DRAFT_KEY = `zmj_draft_${jobId}`;

  // ── State ───────────────────────────────────────────────────
  const [form, setForm]                   = useState<FormState>(EMPTY_FORM);
  const [touched, setTouched]             = useState<TouchedFields>({});
  const [resumeFile, setResumeFileState]  = useState<File | null>(null);
  const [resumeError, setResumeError]     = useState("");
  const [submitting, setSubmitting]       = useState(false);
  const [submitStatus, setSubmitStatus]   = useState<SubmitStatus>("idle");
  const [showSuccess, setShowSuccess]     = useState(false);
  const [submitError, setSubmitError]     = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  // ── Load draft from localStorage on mount ──────────────────
  useEffect(() => {
    try {
      const saved = localStorage.getItem(DRAFT_KEY);
      if (saved) setForm(JSON.parse(saved));
    } catch { /* ignore */ }
  }, [DRAFT_KEY]);

  // ── Auto-save draft on every form change ───────────────────
  useEffect(() => {
    try { localStorage.setItem(DRAFT_KEY, JSON.stringify(form)); }
    catch { /* ignore */ }
  }, [form, DRAFT_KEY]);

  // ── Field setter — updates value + marks as touched ────────
  function setField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setTouched((prev) => ({ ...prev, [key]: true }));
  }

  // ── Touch a field manually (e.g. on blur) ──────────────────
  function touchField(key: keyof FormState) {
    setTouched((prev) => ({ ...prev, [key]: true }));
  }

  // ── Resume file handler ─────────────────────────────────────
  function handleResumeChange(file: File | null) {
    if (!file) return;
    if (!file.name.toLowerCase().endsWith(".pdf")) {
      setResumeError("Only PDF files are accepted.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setResumeError(
        `File is too large (${(file.size / (1024 * 1024)).toFixed(1)}MB). Max allowed is 5MB.`
      );
      return;
    }
    setResumeError("");
    setResumeFileState(file);
  }

  // ── Computed errors (live, touch-gated) ────────────────────
  const errors = computeErrors(form, touched);
  const hasErrors = Object.values(errors).some(Boolean) || !!resumeError;

  // ── Submit handler ──────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // Force-touch all fields so every error becomes visible
    const allTouched = Object.keys(EMPTY_FORM).reduce(
      (acc, k) => ({ ...acc, [k]: true }),
      {} as TouchedFields
    );
    setTouched(allTouched);

    if (!resumeFile) {
      setResumeError("Please upload your resume (PDF).");
      return;
    }
    if (hasErrors) return;

    setSubmitError("");
    setSubmitting(true);
    setSubmitStatus("uploading");

    const linkedinFull = `https://linkedin.com/in/${form.linkedinUsername.replace(/^\/+/, "")}`;

    try {
      setSubmitStatus("saving");
      await submitApplication({
        jobId,
        jobTitle,
        submittedAt:       new Date().toISOString(),
        fullName:          form.fullName,
        email:             form.email,
        phone:             `+91${form.phone}`,
        location:          form.location,
        linkedin:          linkedinFull,
        portfolio:         form.portfolio,
        yearsOfExperience: form.yearsOfExperience,
        resumeFile,
        coverLetter:       form.coverLetter,
        whyZeroMobIt:      form.whyZeroMobIt,
        salaryExpectation: form.salaryExpectation,
        howDidYouHear:     form.howDidYouHear,
      });

      // Clear draft after successful submit
      try { localStorage.removeItem(DRAFT_KEY); } catch { /* ignore */ }

      setShowSuccess(true);
      setTimeout(() => router.push("/careers/"), 2800);
    } catch (err) {
      setSubmitError(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
      setSubmitting(false);
      setSubmitStatus("idle");
    }
  }

  // ── Button label based on current status ───────────────────
  const buttonLabel =
    !submitting              ? "Submit Application"    :
    submitStatus === "uploading" ? "Uploading Resume..." :
                               "Saving Application...";

  return {
    // State
    form,
    errors,
    touched,
    resumeFile,
    resumeError,
    submitting,
    submitStatus,
    showSuccess,
    submitError,
    buttonLabel,
    fileRef,
    // Actions
    setField,
    touchField,
    handleResumeChange,
    handleSubmit,
  };
}