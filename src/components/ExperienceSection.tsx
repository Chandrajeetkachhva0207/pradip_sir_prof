import { Briefcase, MapPin, Calendar, CheckCircle2, ChevronRight } from "lucide-react";
import { experience } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative overflow-hidden py-24 lg:py-32 bg-card/25 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Executive Background"
          title="Professional Experience"
          subtitle="Measurable leadership impact, corporate governance, and multi-year track record of high-performance execution."
        />

        <div className="mt-16 space-y-8">
          {experience.map((exp, index) => (
            <Reveal key={exp.company + exp.role} delay={index * 90}>
              <div className="surface-card group relative rounded-3xl p-7 transition-all duration-300 sm:p-10 hover:border-gold/50">
                <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
                  {/* Left Column: Role, Company & Meta */}
                  <div className="lg:col-span-5 space-y-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-bold tracking-widest text-gold uppercase">
                      {exp.type}
                    </span>

                    <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-gold transition-colors sm:text-3xl">
                      {exp.role}
                    </h3>

                    <p className="text-base font-medium text-foreground/90">
                      {exp.company}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground pt-1">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="size-3.5 text-gold" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="size-3.5 text-gold" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground pr-4">
                      {exp.description}
                    </p>
                  </div>

                  {/* Right Column: Key Measurable Achievements */}
                  <div className="lg:col-span-7 rounded-2xl border border-border/70 bg-background/50 p-6 backdrop-blur-md">
                    <h4 className="text-xs font-bold tracking-widest text-gold uppercase">
                      Key Measurable Achievements
                    </h4>

                    <div className="mt-4 space-y-3.5">
                      {exp.achievements.map((ach, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-gold" />
                          <span className="text-sm font-medium leading-relaxed text-foreground/90">
                            {ach}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
