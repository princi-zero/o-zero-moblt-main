interface SectionBadgeProps {
  label: string;
  className?: string;
}

export default function SectionBadge({ label, className = "" }: SectionBadgeProps) {
  return (
    <span
      className={`inline-block text-xs font-semibold tracking-widest uppercase text-gray-500 border border-gray-200 rounded-full px-4 py-1.5 ${className}`}
    >
      {label}
    </span>
  );
}