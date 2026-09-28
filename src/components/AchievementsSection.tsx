import { Award, Trophy, Medal, Star, CheckCircle } from "lucide-react";
import { achievements } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[35rem] rounded-full bg-gold/5 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Honors & Milestones"
          title="Achievements & Recognition"
          subtitle="A chronicle of athletic triumphs, executive citations, and national leadership milestones."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <Reveal key={item.title + item.year} delay={index * 80}>
              <div className="surface-card group relative flex h-full flex-col justify-between rounded-2xl p-7 transition-all duration-300 hover:border-gold/50">
                <div>
                  {/* Top Bar: Year & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold tracking-widest text-gold uppercase">
                      <Trophy className="size-3.5" />
                      {item.year}
                    </span>
                    <span className="rounded-full border border-border bg-card/60 px-3 py-0.5 text-[0.65rem] font-semibold tracking-wider text-muted-foreground uppercase">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-foreground group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs font-semibold tracking-wider text-gold/80 uppercase">
                    {item.issuer}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 border-t border-border/70 pt-4 text-[0.72rem] font-medium text-foreground/80">
                  <CheckCircle className="size-3.5 text-gold" />
                  <span>Verified Distinction</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
