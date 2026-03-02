# ZeroMoblt — Web Platform

Student transportation platform built with Next.js 15. Covers the public marketing site, job applications, and an open-data dashboard.

---

## Tech Stack

| Layer | Technology | Why |
|---|---|---|
| Framework | Next.js 15 (App Router) | File-based routing, SSG, and API routes in one repo |
| Language | TypeScript | Type safety across data, components, and APIs |
| Styling | Tailwind CSS v4 | Utility-first, no separate CSS files needed |
| Charts | Inline SVG | Zero dependencies, full control over rendering |
| File Upload | Google Shared Drive | Simple, free-tier storage for resumes |
| Spreadsheet | Google Sheets API | Job applications land as rows automatically |
| Auth (server) | Google Service Account | No OAuth flow — server-to-server only |
| State (client) | React `useState` | Simple local state, no Redux needed |
| Draft Saving | `localStorage` | Form data persists on page refresh |

---

## Getting Started

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site. The page auto-updates as you edit files.


---

## Project Structure

```
your-project/
│
├── app/                              # All pages (Next.js App Router)
│   ├── layout.tsx                    # Root layout — Navbar + Footer
│   ├── globals.css                   # Global styles, Tailwind base
│   ├── page.tsx                      # / Home
│   ├── services/
│   │   └── page.tsx                  # /services
│   ├── about/
│   │   └── page.tsx                  # /about
│   ├── open-data/
│   │   └── page.tsx                  # /open-data
│   ├── careers/
│   │   ├── page.tsx                  # /careers
│   │   └── [id]/
│   │       ├── page.tsx              # /careers/zmj-001
│   │       └── apply/
│   │           └── page.tsx          # /careers/zmj-001/apply
│   └── api/
│       ├── upload/
│       │   └── route.ts              # POST: PDF → Google Drive
│       └── applications/
│           └── route.ts              # POST: form data → Google Sheets
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── SectionBadge.tsx
│   ├── sections/
│   │   ├── home/                     # 10 sections
│   │   ├── services/                 # 7 sections
│   │   ├── about/                    # 6 sections
│   │   ├── opendata/                 # 7 sections
│   │   └── careers/                  # 7 sections
│   └── careers/
│       └── ApplyForm.tsx
│
├── data/                             # All static content
│   ├── home.ts
│   ├── services.ts
│   ├── about.ts
│   ├── opendata.ts
│   ├── careers.ts                    # Job listings + helpers
│   ├── navbar.ts
│   └── types/
│       └── index.ts
│
├── lib/
│   ├── googleAuth.ts                 # Service account JWT setup
│   └── submitApplication.ts         # Client-side submission logic
│
├── public/
│   └── images/
│       ├── home/
│       ├── services/
│       ├── about/
│       ├── opendata/
│       └── careers/
│
├── tailwind.config.ts
└── tsconfig.json
```

---

## Key Integrations

- **Google Drive** — Resume/PDF uploads from the careers application form  
  [Open Drive Folder →](https://drive.google.com/drive/folders/10wLqYWo269hbmc4BkCX5UQYRg-k4k5HP)

- **Google Sheets** — Application submissions stored as rows  
  [Open Sheet →](https://docs.google.com/spreadsheets/d/1tRRNdjSHZcc8-Ufba3InbMPzopG3huQOq-cZ7pL0o4M/edit?gid=0#gid=0)

---

## Content Management

All page copy lives in `/data/*.ts` files — no CMS required. To update text, headings, or stats, edit the relevant data file and the page re-renders automatically.

| File | Controls |
|---|---|
| `data/home.ts` | Home page |
| `data/services.ts` | Services page |
| `data/about.ts` | About page |
| `data/opendata.ts` | Open Data dashboard |
| `data/careers.ts` | Job listings and descriptions |
| `data/navbar.ts` | Navigation links |

---
