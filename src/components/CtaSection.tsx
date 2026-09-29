import { ArrowRight, Sparkles, Mail, MessageSquare } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { founder } from "@/data/site";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,39,0.12),transparent_70%)]" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal>
          <div className="surface-card relative overflow-hidden rounded-[2.5rem] border border-gold/40 p-10 text-center sm:p-16 lg:p-20">
            {/* Ambient decorative elements */}
            <div className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-gold/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 size-64 rounded-full bg-primary/10 blur-3xl" />

            <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-widest text-gold uppercase backdrop-blur-md">
              <Sparkles className="size-3.5" />
              <span>Partnership & Dialogue</span>
            </div>

            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
              Let's Build Something{" "}
              <span className="gold-text italic">Meaningful Together.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              For enterprise partnerships, wellness advisory collaborations, keynote speaking engagements, or purposeful strategic dialogue — our doors are always open.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-gold bg-gradient-to-r from-gold via-amber-400 to-gold px-8 py-4 text-xs font-semibold tracking-widest text-primary-foreground uppercase shadow-xl shadow-gold/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-gold"
              >
                <span>Let's Connect</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={`mailto:${founder.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-8 py-4 text-xs font-semibold tracking-widest text-foreground uppercase backdrop-blur-md transition-all duration-300 hover:border-gold/60 hover:bg-gold/10 hover:text-gold"
              >
                <Mail className="size-4 text-gold" />
                <span>Email Founder Directly</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
