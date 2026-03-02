// lib/applyValidation.ts
// ─────────────────────────────────────────────────────────────────
// Pure validation functions for the job application form.
// Each function returns "" (valid) or an error string.
// To add/change a rule — edit only this file.
// ─────────────────────────────────────────────────────────────────

import type { FormState, FormErrors, TouchedFields } from "@/types/apply";

export function validateEmail(email: string): string {
  if (!email) return "Email is required.";
  if (!/^[^\s@]+@gmail\.com$/i.test(email))
    return "Please enter a valid Gmail address (@gmail.com).";
  return "";
}

export function validatePhone(phone: string): string {
  if (!phone) return "Phone number is required.";
  if (!/^\d{10}$/.test(phone)) return "Enter a valid 10-digit phone number.";
  return "";
}

export function validatePortfolio(url: string): string {
  if (!url) return ""; // optional
  if (!/^https?:\/\/.+/.test(url)) return "URL must start with https:// or http://";
  return "";
}

export function validateSalary(val: string): string {
  if (!val) return ""; // optional
  if (!/^\d+$/.test(val)) return "Enter numbers only (e.g. 1200000).";
  return "";
}

// Computes all errors from current form state + touched state.
// Only shows an error for a field once it has been touched.
export function computeErrors(
  form: FormState,
  touched: TouchedFields
): FormErrors {
  return {
    fullName:
      touched.fullName && !form.fullName ? "Full name is required." : "",
    email:
      touched.email ? validateEmail(form.email) : "",
    phone:
      touched.phone ? validatePhone(form.phone) : "",
    location:
      touched.location && !form.location ? "Location is required." : "",
    linkedinUsername:
      touched.linkedinUsername && !form.linkedinUsername
        ? "LinkedIn username is required."
        : "",
    portfolio:
      touched.portfolio ? validatePortfolio(form.portfolio) : "",
    yearsOfExperience:
      touched.yearsOfExperience && !form.yearsOfExperience ? "Required." : "",
    coverLetter:
      touched.coverLetter && form.coverLetter.length > 500
        ? "Max 500 characters."
        : "",
    whyZeroMobIt:
      touched.whyZeroMobIt && !form.whyZeroMobIt
        ? "Required."
        : form.whyZeroMobIt.length > 200
        ? "Max 200 characters."
        : "",
    salaryExpectation:
      touched.salaryExpectation ? validateSalary(form.salaryExpectation) : "",
    howDidYouHear:
      touched.howDidYouHear && !form.howDidYouHear
        ? "Please select an option."
        : "",
    agreed:
      touched.agreed && !form.agreed ? "You must agree to continue." : "",
  };
}