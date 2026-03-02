/**
 * lib/googleAuth.ts
 * ─────────────────────────────────────────────────────────────────
 * Shared Google service account auth used by both:
 *   - /api/upload    (Google Drive)
 *   - /api/applications (Google Sheets)
 *
 * SETUP:
 *   1. Go to console.cloud.google.com
 *   2. Create a project → enable "Google Drive API" + "Google Sheets API"
 *   3. Create a Service Account → download JSON key
 *   4. Copy email + private_key into .env.local (see .env.local.example)
 *   5. Share your Drive folder with the service account email (Editor)
 *   6. Share your Google Sheet with the service account email (Editor)
 * ─────────────────────────────────────────────────────────────────
 */

import { google } from "googleapis";

const SCOPES = [
  "https://www.googleapis.com/auth/drive",
  "https://www.googleapis.com/auth/spreadsheets",
];

export function getGoogleAuth() {
  const email = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const key   = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!email || !key) {
    throw new Error(
      "Missing GOOGLE_SERVICE_ACCOUNT_EMAIL or GOOGLE_PRIVATE_KEY in environment variables."
    );
  }

  return new google.auth.JWT({
    email,
    key,
    scopes: SCOPES,
  });
}