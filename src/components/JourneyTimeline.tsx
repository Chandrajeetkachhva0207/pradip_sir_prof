import { Medal, BookOpen, Rocket, Building2, TrendingUp, Sparkles, CheckCircle } from "lucide-react";
import { journey } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const stageIcons = [
  Medal,
  BookOpen,
  TrendingUp,
  Rocket,
  Building2,
  Sparkles,
];

export function JourneyTimeline() {
  return (
    <section id="journey" className="relative overflow-hidden py-24 lg:py-32 bg-card/20 border-y border-border/60">
      {/* Background soft ambient accents */}
      <div className="pointer-events-none absolute top-1/3 left-0 size-80 rounded-full bg-gold/5 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-10 right-0 size-80 rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Milestones & Evolution"
          title="The Founder's Journey"
          subtitle="From national track competitions to establishing nationwide wellness enterprises and mentoring the next generation of leaders."
        />

        <div className="relative mt-20">
          {/* Vertical central spine line */}
          <div className="absolute top-4 bottom-4 left-6 w-[2px] bg-gradient-to-b from-gold/60 via-gold/30 to-gold/10 lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {journey.map((item, index) => {
              const Icon = stageIcons[index % stageIcons.length] ?? Medal;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.year + item.title}
                  className={`relative flex flex-col gap-6 pl-14 lg:pl-0 ${
                    isEven ? "lg:flex-row-reverse" : "lg:flex-row"
                  }`}
                >
                  {/* Timeline Node Marker */}
                  <div className="absolute top-1.5 left-6 -translate-x-1/2 lg:left-1/2">
                    <div className="relative flex size-12 items-center justify-center rounded-full border-2 border-gold bg-background shadow-xl shadow-gold/20 transition-transform duration-300 hover:scale-110">
                      <Icon className="size-5 text-gold" />
                      <span className="absolute -inset-1 rounded-full border border-gold/30 animate-pulse-gold" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className="w-full lg:w-1/2 lg:px-8">
                    <Reveal delay={index * 80}>
                      <div className="surface-card group relative rounded-2xl p-6 transition-all duration-300 sm:p-8">
                        {/* Year & Category Header */}
                        <div className="flex flex-wrap items-center justify-between gap-3">
                          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-bold tracking-widest text-gold uppercase">
                            {item.year}
                          </span>
                          <span className="text-[0.68rem] font-semibold tracking-wider text-muted-foreground uppercase">
                            {item.category}
                          </span>
                        </div>

                        {/* Title & Stage */}
                        <h3 className="mt-4 font-display text-xl font-semibold text-foreground group-hover:text-gold transition-colors sm:text-2xl">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs font-semibold tracking-wider text-gold/80 uppercase">
                          {item.stage}
                        </p>

                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {item.description}
                        </p>

                        {/* Highlight Badge */}
                        <div className="mt-5 flex items-center gap-2 border-t border-border/70 pt-4 text-xs font-medium text-foreground/90">
                          <CheckCircle className="size-4 shrink-0 text-gold" />
                          <span>{item.highlight}</span>
                        </div>
                      </div>
                    </Reveal>
                  </div>

                  {/* Empty spacer for alignment on desktop */}
                  <div className="hidden lg:block lg:w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
