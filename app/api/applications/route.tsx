/**
 * app/api/applications/route.ts
 * ─────────────────────────────────────────────────────────────────
 * Accepts a JSON POST with the full application payload.
 * Appends one row to your Google Sheet via service account.
 *
 * Sheet columns (written automatically on first run):
 *   Timestamp | Job ID | Job Title | Name | Email | Phone |
 *   Location | LinkedIn | Portfolio | Experience | Cover Letter |
 *   Why ZeroMobIt | Salary Expectation | How Did You Hear | Resume URL
 *
 * ENV required:
 *   GOOGLE_SERVICE_ACCOUNT_EMAIL
 *   GOOGLE_PRIVATE_KEY
 *   GOOGLE_SHEET_ID   ← from Sheet URL:
 *                        docs.google.com/spreadsheets/d/<SHEET_ID>/edit
 * ─────────────────────────────────────────────────────────────────
 */

import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { getGoogleAuth } from "@/lib/googleAuth";

export const runtime = "nodejs";

const HEADERS = [
  "Timestamp",
  "Job ID",
  "Job Title",
  "Full Name",
  "Email",
  "Phone",
  "Location",
  "LinkedIn",
  "Portfolio",
  "Years of Experience",
  "Cover Letter",
  "Why ZeroMobIt",
  "Salary Expectation",
  "How Did You Hear",
  "Resume URL",
];

export async function POST(req: NextRequest) {
  try {
    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!sheetId) {
      return NextResponse.json({ error: "GOOGLE_SHEET_ID not set" }, { status: 500 });
    }

    const body = await req.json();
    const auth   = getGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth });

    // Write header row if sheet is empty
    const existing = await sheets.spreadsheets.values.get({
      spreadsheetId: sheetId,
      range: "Sheet1!A1:O1",
    });
    if (!existing.data.values || existing.data.values.length === 0) {
      await sheets.spreadsheets.values.update({
        spreadsheetId: sheetId,
        range: "Sheet1!A1",
        valueInputOption: "RAW",
        requestBody: { values: [HEADERS] },
      });
    }

    // Append the application row
    const row = [
      new Date().toISOString(),
      body.jobId             ?? "",
      body.jobTitle          ?? "",
      body.fullName          ?? "",
      body.email             ?? "",
      body.phone             ?? "",
      body.location          ?? "",
      body.linkedin          ?? "",
      body.portfolio         ?? "",
      body.yearsOfExperience ?? "",
      body.coverLetter       ?? "",
      body.whyZeroMobIt      ?? "",
      body.salaryExpectation ?? "",
      body.howDidYouHear     ?? "",
      body.resumeUrl         ?? "",   // Drive link from /api/upload
    ];

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range: "Sheet1!A1",
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: { values: [row] },
    });

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err: unknown) {
    console.error("[/api/applications]", err);
    const message = err instanceof Error ? err.message : "Failed to save application";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}