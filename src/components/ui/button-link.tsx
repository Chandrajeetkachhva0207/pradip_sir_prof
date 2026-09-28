import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-7 py-3.5 text-[0.78rem] font-semibold tracking-[0.18em] uppercase transition-all duration-300 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

const variants = {
  gold: "bg-gold text-primary-foreground hover:shadow-[var(--shadow-gold)] hover:-translate-y-0.5",
  outline:
    "border border-gold/45 text-gold hover:bg-gold-soft hover:border-gold hover:-translate-y-0.5",
  ghost: "text-foreground hover:text-gold",
} as const;

type Variant = keyof typeof variants;

export function ButtonLink({
  variant = "gold",
  className = "",
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; children: ReactNode }) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

export function ButtonAction({
  variant = "gold",
  className = "",
  children,
  ...props
}: ComponentProps<"button"> & { variant?: Variant; children: ReactNode }) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
