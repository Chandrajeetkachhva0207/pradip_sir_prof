import { ArrowUpRight, Sparkles, Building, Layers } from "lucide-react";
import { ventures } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function VenturesSection() {
  return (
    <section id="ventures" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -bottom-20 right-10 size-[30rem] rounded-full bg-gold/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Portfolio & Enterprises"
          title="Projects & Ventures"
          subtitle="Commercial entities, social foundations, and scalable institutions founded and stewarded by Pradip Divansing Jadhav."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {ventures.map((venture, index) => (
            <Reveal key={venture.id} delay={index * 100}>
              <div className="surface-card group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/80 transition-all duration-500 hover:border-gold/60">
                {/* Image Container with Zoom Effect */}
                <div className="zoom-frame relative aspect-16/9 w-full overflow-hidden bg-card">
                  <img
                    src={venture.image}
                    alt={venture.title}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />

                  {/* Category Pill Over Image */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-background/80 px-3.5 py-1 text-xs font-semibold tracking-wider text-gold backdrop-blur-md uppercase">
                      {venture.category}
                    </span>
                  </div>

                  {/* Role Pill */}
                  <div className="absolute top-4 right-4">
                    <span className="rounded-full border border-white/20 bg-background/80 px-3 py-1 text-[0.68rem] font-medium tracking-wide text-foreground/90 backdrop-blur-md">
                      {venture.role}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="flex flex-1 flex-col justify-between p-7 sm:p-8">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-foreground group-hover:text-gold transition-colors sm:text-3xl">
                      {venture.title}
                    </h3>

                    <p className="mt-1 text-xs font-semibold tracking-wider text-gold/90 uppercase">
                      {venture.tagline}
                    </p>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {venture.description}
                    </p>

                    {/* Tag Pills */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {venture.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-lg border border-border/80 bg-card/60 px-2.5 py-1 text-[0.68rem] font-medium text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics Bar & CTA */}
                  <div className="mt-8 border-t border-border/70 pt-6">
                    <div className="grid grid-cols-3 gap-3 text-center sm:text-left">
                      {venture.metrics.map((m) => (
                        <div key={m.label}>
                          <p className="font-display text-lg font-bold text-foreground sm:text-xl">
                            {m.value}
                          </p>
                          <p className="text-[0.65rem] tracking-wider text-muted-foreground uppercase">
                            {m.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold uppercase hover:underline"
                      >
                        <span>Collaborate with venture</span>
                        <ArrowUpRight className="size-4" />
                      </a>
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
