/**
 * lib/submitApplication.ts
 * ─────────────────────────────────────────────────────────────────
 * Full submission flow:
 *
 *   1. Upload resume PDF  →  POST /api/upload       → Google Drive
 *   2. Save application   →  POST /api/applications → Google Sheets
 *   3. Backup to localStorage (always, silently)
 *
 * Both API routes use the same service account (lib/googleAuth.ts).
 * To swap backends later, only edit the two API route files.
 * ─────────────────────────────────────────────────────────────────
 */

export interface ApplicationPayload {
  jobId: string;
  jobTitle: string;
  submittedAt: string;
  // Personal
  fullName: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  portfolio: string;
  // Professional
  yearsOfExperience: string;
  resumeFile?: File | null;   // raw File object from <input type="file">
  coverLetter: string;
  // Additional
  whyZeroMobIt: string;
  salaryExpectation: string;
  howDidYouHear: string;
}

export async function submitApplication(data: ApplicationPayload): Promise<void> {

  // ── Step 1: Upload resume to Google Drive ──────────────────────
  let resumeUrl = "";
  if (data.resumeFile) {
    const fd = new FormData();
    fd.append("resume", data.resumeFile);

    const uploadRes = await fetch("/api/upload", { method: "POST", body: fd });
    if (!uploadRes.ok) {
      const { error } = await uploadRes.json().catch(() => ({}));
      throw new Error(error ?? "Resume upload failed");
    }
    const { url } = await uploadRes.json();
    resumeUrl = url;
  }

  // ── Step 2: Save application row to Google Sheets ─────────────
  const payload = {
    jobId:             data.jobId,
    jobTitle:          data.jobTitle,
    submittedAt:       data.submittedAt,
    fullName:          data.fullName,
    email:             data.email,
    phone:             data.phone,
    location:          data.location,
    linkedin:          data.linkedin,
    portfolio:         data.portfolio,
    yearsOfExperience: data.yearsOfExperience,
    coverLetter:       data.coverLetter,
    whyZeroMobIt:      data.whyZeroMobIt,
    salaryExpectation: data.salaryExpectation,
    howDidYouHear:     data.howDidYouHear,
    resumeUrl,
  };

  const appRes = await fetch("/api/applications", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!appRes.ok) {
    const { error } = await appRes.json().catch(() => ({}));
    throw new Error(error ?? "Failed to save application");
  }

  // ── Step 3: Backup to localStorage ────────────────────────────
  try {
    const existing = JSON.parse(localStorage.getItem("zmj_applications") ?? "[]");
    existing.push({ ...payload, resumeUrl });
    localStorage.setItem("zmj_applications", JSON.stringify(existing));
  } catch {
    // localStorage unavailable — not critical
  }
}