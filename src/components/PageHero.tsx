import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <section className="hero-glow border-b border-border">
      <div className="mx-auto max-w-6xl px-6 pt-36 pb-16 sm:pt-44 sm:pb-24">
        <p className="eyebrow animate-reveal">{eyebrow}</p>
        <h1
          className="animate-reveal mt-5 text-4xl leading-[1.05] sm:text-5xl md:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          {title}
        </h1>
        <div className="gold-rule animate-reveal mt-8" style={{ animationDelay: "160ms" }} />
        {subtitle ? (
          <p
            className="animate-reveal mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base"
            style={{ animationDelay: "220ms" }}
          >
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
