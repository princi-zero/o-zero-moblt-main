/**
 * app/api/upload/route.ts
 * ─────────────────────────────────────────────────────────────────
 * Accepts a multipart/form-data POST with a PDF file.
 * Uploads it to Google Drive (shared folder) via service account.
 * Returns { url } — the public Drive view link.
 *
 * ENV required:
 *   GOOGLE_SERVICE_ACCOUNT_EMAIL
 *   GOOGLE_PRIVATE_KEY
 *   GOOGLE_DRIVE_FOLDER_ID   ← folder ID from your Drive folder URL
 * ─────────────────────────────────────────────────────────────────
 */

import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { Readable } from "stream";
import { getGoogleAuth } from "@/lib/googleAuth";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
    if (!folderId) {
      return NextResponse.json({ error: "GOOGLE_DRIVE_FOLDER_ID not set" }, { status: 500 });
    }

    const formData = await req.formData();
    const file = formData.get("resume") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }
    if (!file.name.toLowerCase().endsWith(".pdf")) {
      return NextResponse.json({ error: "Only PDF files are accepted" }, { status: 400 });
    }
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ error: "File too large. Max 5MB." }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const stream = Readable.from(buffer);

    const auth = getGoogleAuth();
    const drive = google.drive({ version: "v3", auth });

    const response = await drive.files.create({
      requestBody: {
        name: `resume_${Date.now()}_${file.name}`,
        mimeType: "application/pdf",
        parents: [folderId],
      },
      media: { mimeType: "application/pdf", body: stream },
      fields: "id, webViewLink",
      supportsAllDrives: true,
    });

    const fileId = response.data.id!;
    const webViewLink = response.data.webViewLink!;

    // Make readable by anyone with the link
    await drive.permissions.create({
      fileId,
      requestBody: { role: "reader", type: "anyone" },
      supportsAllDrives: true,
    });

    return NextResponse.json({ url: webViewLink }, { status: 200 });

  } catch (err: unknown) {
    console.error("[/api/upload]", err);
    const message = err instanceof Error ? err.message : "Upload failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}