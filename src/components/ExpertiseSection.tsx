import { TrendingUp, Crown, Activity, Network, Users, Mic, ArrowUpRight } from "lucide-react";
import { expertise } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const iconMap = {
  TrendingUp,
  Crown,
  Activity,
  Network,
  Users,
  Mic,
};

export function ExpertiseSection() {
  return (
    <section id="expertise" className="relative overflow-hidden py-24 lg:py-32 bg-card/25 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Competencies"
          title="Leadership & Strategic Expertise"
          subtitle="A multidisciplinary domain portfolio spanning zero-to-one enterprise creation, lifestyle health, and elite team mentorship."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap] || TrendingUp;

            return (
              <Reveal key={item.id} delay={index * 70}>
                <div className="surface-card group relative flex h-full flex-col justify-between rounded-2xl p-7 transition-all duration-300 hover:border-gold/50 hover:shadow-gold">
                  <div>
                    <div className="flex items-center justify-between">
                      <div className="flex size-12 items-center justify-center rounded-xl bg-gold/15 text-gold transition-all duration-300 group-hover:bg-gold group-hover:text-primary-foreground group-hover:scale-105">
                        <Icon className="size-6" />
                      </div>
                      <span className="text-[0.68rem] font-semibold tracking-wider text-gold/90 uppercase">
                        {item.metrics}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-xl font-semibold text-foreground group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4 text-xs font-medium text-muted-foreground group-hover:text-gold transition-colors">
                    <span>Explore practice</span>
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
