import { Eye, Target, CheckCircle2, Sparkles, ArrowRight } from "lucide-react";
import { visionMission } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function VisionMission() {
  return (
    <section id="vision" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-40 right-1/4 size-[30rem] rounded-full bg-gold/5 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 size-[25rem] rounded-full bg-blue-500/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Purpose & Execution"
          title="Vision & Mission"
          subtitle="A clear long-term north star paired with unyielding day-to-day operational execution."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Card 1: Long-Term Vision */}
          <Reveal delay={100}>
            <div className="surface-card group relative h-full rounded-3xl p-8 sm:p-10 transition-all duration-500 hover:border-gold/50">
              <div className="flex items-center justify-between gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/15 text-gold shadow-lg shadow-gold/15 transition-transform duration-300 group-hover:scale-105">
                  <Eye className="size-7" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-bold tracking-widest text-gold uppercase">
                  Long-Term
                </span>
              </div>

              <h3 className="mt-8 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                {visionMission.vision.title}
              </h3>

              <p className="mt-2 text-xs font-semibold tracking-wider text-gold uppercase">
                {visionMission.vision.subtitle}
              </p>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {visionMission.vision.description}
              </p>

              <div className="mt-8 space-y-3.5 border-t border-border/70 pt-6">
                {visionMission.vision.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span className="text-sm text-foreground/90">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Card 2: Active Mission */}
          <Reveal delay={200}>
            <div className="surface-card group relative h-full rounded-3xl p-8 sm:p-10 transition-all duration-500 hover:border-gold/50">
              <div className="flex items-center justify-between gap-4">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-gold/40 bg-gold/15 text-gold shadow-lg shadow-gold/15 transition-transform duration-300 group-hover:scale-105">
                  <Target className="size-7" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-3.5 py-1 text-xs font-bold tracking-widest text-primary uppercase">
                  Daily Execution
                </span>
              </div>

              <h3 className="mt-8 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                {visionMission.mission.title}
              </h3>

              <p className="mt-2 text-xs font-semibold tracking-wider text-gold uppercase">
                {visionMission.mission.subtitle}
              </p>

              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                {visionMission.mission.description}
              </p>

              <div className="mt-8 space-y-3.5 border-t border-border/70 pt-6">
                {visionMission.mission.points.map((pt, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-gold" />
                    <span className="text-sm text-foreground/90">{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
