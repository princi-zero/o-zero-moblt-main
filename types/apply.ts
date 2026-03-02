// types/apply.ts
// ─────────────────────────────────────────────────────────────────
// Shared types used across the apply form, validation, and hooks.
// Import from here — never redefine these inline.
// ─────────────────────────────────────────────────────────────────

export interface FormState {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedinUsername: string;
  portfolio: string;
  yearsOfExperience: string;
  coverLetter: string;
  whyZeroMobIt: string;
  salaryExpectation: string;
  howDidYouHear: string;
  agreed: boolean;
}

export const EMPTY_FORM: FormState = {
  fullName: "",
  email: "",
  phone: "",
  location: "",
  linkedinUsername: "",
  portfolio: "",
  yearsOfExperience: "",
  coverLetter: "",
  whyZeroMobIt: "",
  salaryExpectation: "",
  howDidYouHear: "",
  agreed: false,
};

export type FormErrors = Record<keyof FormState, string>;
export type TouchedFields = Partial<Record<keyof FormState, boolean>>;
export type SubmitStatus = "idle" | "uploading" | "saving";