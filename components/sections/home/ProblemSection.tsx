import GenericCardSection, { type CardItem } from "@/components/ui/Genericcardsection";
import type { ProblemSectionData, ProblemItem } from "@/types";

// ─── Icons ────────────────────────────────────────────────────────────────────

const ClockIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4A72B8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const HistoryIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4A72B8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 1 0 .49-4.5" />
    <polyline points="12 7 12 12 15 13" />
  </svg>
);

const EyeOffIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#4A72B8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

// ─── Icon map ─────────────────────────────────────────────────────────────────

const iconMap: Record<ProblemItem["icon"], React.ReactNode> = {
  clock:   <ClockIcon />,
  history: <HistoryIcon />,
  "eye-off": <EyeOffIcon />,
};

// ─── Component ────────────────────────────────────────────────────────────────

interface ProblemSectionProps {
  data: ProblemSectionData;
}

export default function ProblemSection({ data }: ProblemSectionProps) {
  const cards: CardItem[] = data.problems.map((problem) => ({
    id: problem.id.toString(),
    title: problem.title,
    description: problem.description,
    icon: iconMap[problem.icon] ?? null,
  }));

  return (
    <GenericCardSection
      heading={data.heading}
      subheading={data.subheading}
      cards={cards}
      columns={3}
    />
  );
}