import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size    = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:   Variant;
  size?:      Size;
  href?:      string;
  children:   ReactNode;
  fullWidth?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:   "bg-[#F5C518] hover:bg-[#e0b415] text-gray-900 font-semibold shadow-sm hover:shadow-md",
  secondary: "bg-white hover:bg-gray-50 text-gray-900 font-semibold border border-gray-200 hover:border-gray-300",
  ghost:     "bg-transparent hover:bg-gray-100 text-gray-700 font-medium",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function Button({
  variant   = "primary",
  size      = "md",
  href,
  children,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full transition-all duration-200 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518] focus-visible:ring-offset-2 " +
    "disabled:opacity-50 disabled:pointer-events-none";

  const classes = [base, variantClasses[variant], sizeClasses[size], fullWidth ? "w-full" : "", className]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button className={classes} {...props}>{children}</button>;
}