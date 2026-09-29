import { Quote, Sparkles } from "lucide-react";
import { founderQuote } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export function QuoteSection() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36 border-y border-gold/20 bg-gradient-to-b from-card/60 via-card/90 to-card/60">
      {/* Background radial gold glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.10),transparent_65%)]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <Reveal>
          <div className="mx-auto flex size-16 items-center justify-center rounded-full border border-gold/40 bg-gold/15 text-gold shadow-xl shadow-gold/15">
            <Quote className="size-8" />
          </div>

          <blockquote className="mt-8 font-display text-2xl font-medium leading-relaxed tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            "{founderQuote.quote}"
          </blockquote>

          <p className="mt-6 text-sm italic text-muted-foreground sm:text-base">
            "{founderQuote.subtext}"
          </p>

          <div className="gold-rule mx-auto my-8" />

          <div>
            <h4 className="font-display text-xl font-bold tracking-wide text-foreground sm:text-2xl">
              {founderQuote.author}
            </h4>
            <p className="mt-1 text-xs font-semibold tracking-widest text-gold uppercase">
              {founderQuote.role}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
