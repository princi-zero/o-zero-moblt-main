// components/apply/FormPrimitives.tsx
// ─────────────────────────────────────────────────────────────────
// Low-level reusable form primitives.
// These are generic — they know nothing about the apply form.
// Reuse them in any other form across the site.
// ─────────────────────────────────────────────────────────────────

// ── Shared border style helpers ───────────────────────────────────
export const inputBase =
  "w-full border rounded-lg px-3.5 py-2.5 text-sm text-gray-800 " +
  "placeholder-gray-400 focus:outline-none transition";

export const inputValid =
  "border-gray-200 focus:border-[#1a46c4] focus:ring-1 focus:ring-[#1a46c4]";

export const inputInvalid =
  "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-300";

export function borderClass(error?: string) {
  return error ? inputInvalid : inputValid;
}

// ── Label ─────────────────────────────────────────────────────────
export function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-xs font-semibold text-gray-800 mb-1.5"
    >
      {children}
      {required && " *"}
    </label>
  );
}

// ── FieldError ────────────────────────────────────────────────────
export function FieldError({ msg }: { msg: string }) {
  if (!msg) return null;
  return (
    <p className="mt-1 text-xs text-red-500 flex items-center gap-1">
      <svg width="12" height="12" fill="none" viewBox="0 0 12 12">
        <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.3" />
        <path
          d="M6 4v2.5M6 8h.01"
          stroke="currentColor"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
      {msg}
    </p>
  );
}

// ── CharCount ─────────────────────────────────────────────────────
export function CharCount({
  current,
  max,
}: {
  current: number;
  max: number;
}) {
  const near = current >= max * 0.85;
  const over = current > max;
  return (
    <p
      className={`text-right text-xs mt-1 ${
        over ? "text-red-500" : near ? "text-amber-500" : "text-gray-400"
      }`}
    >
      {current}/{max}
    </p>
  );
}

// ── Input ─────────────────────────────────────────────────────────
export function Input({
  id,
  type = "text",
  placeholder,
  value,
  onChange,
  onBlur,
  required,
  error,
  maxLength,
}: {
  id: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  required?: boolean;
  error?: string;
  maxLength?: number;
}) {
  return (
    <>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        required={required}
        maxLength={maxLength}
        className={`${inputBase} ${borderClass(error)}`}
      />
      <FieldError msg={error ?? ""} />
    </>
  );
}

// ── Textarea ──────────────────────────────────────────────────────
export function Textarea({
  id,
  placeholder,
  value,
  onChange,
  rows = 4,
  required,
  maxLength,
  error,
}: {
  id: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  required?: boolean;
  maxLength?: number;
  error?: string;
}) {
  return (
    <>
      <textarea
        id={id}
        placeholder={placeholder}
        value={value}
        rows={rows}
        required={required}
        maxLength={maxLength}
        onChange={(e) => onChange(e.target.value)}
        className={`${inputBase} resize-none ${borderClass(error)}`}
      />
      {maxLength && <CharCount current={value.length} max={maxLength} />}
      <FieldError msg={error ?? ""} />
    </>
  );
}

// ── SectionHeading ────────────────────────────────────────────────
export function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-sm font-bold text-gray-900 mb-4 mt-7 border-t border-gray-100 pt-6">
      {children}
    </h2>
  );
}