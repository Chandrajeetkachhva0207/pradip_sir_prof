import { Shield, Scale, HeartHandshake, Compass, CheckCircle2, ArrowRight } from "lucide-react";
import { founder, values, stats } from "@/data/site";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const iconMap = {
  Shield: Shield,
  Scale: Scale,
  HeartHandshake: HeartHandshake,
  Compass: Compass,
};

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background ambient mesh */}
      <div className="pointer-events-none absolute top-1/4 right-0 size-96 rounded-full bg-gold/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-10 size-96 rounded-full bg-blue-600/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Founder Biography & Values"
          title="From the Discipline of Track to Executive Mastery"
          subtitle="How an international athletic career forged the relentless standard behind high-growth wellness enterprises."
        />

        {/* Split Screen Layout */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Image with Luxury Frame & Athletic Legacy */}
          <div className="lg:col-span-5">
            <Reveal className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-gold/20 via-gold/5 to-transparent blur-2xl" />

              <div className="zoom-frame relative overflow-hidden rounded-3xl border border-gold/30 bg-card shadow-2xl shadow-black/60">
                <img
                  src="/images/founder-athlete.jpg"
                  alt="Pradip Divansing Jadhav — Athletic Foundations & Discipline"
                  className="aspect-[4/5] w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />

                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-gold/20 bg-background/80 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-2 text-gold">
                    <CheckCircle2 className="size-4" />
                    <span className="text-[0.68rem] font-semibold tracking-widest uppercase">
                      Athletic Lineage
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    "Track teaches you that fatigue is a suggestion. Real progress happens in the repetitions that nobody applauds."
                  </p>
                  <p className="mt-2 text-[0.7rem] text-muted-foreground">
                    — Pradip Divansing Jadhav
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Narrative, Philosophy & Values */}
          <div className="space-y-8 lg:col-span-7">
            <Reveal delay={100}>
              <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                <p>
                  <strong className="text-foreground font-semibold">
                    Pradip Divansing Jadhav
                  </strong>{" "}
                  embodies the rare synthesis of athletic grit and visionary corporate execution.
                  Having competed as an international track athlete representing India, he spent a decade
                  mastering human endurance, metabolic discipline, and high-pressure focus.
                </p>
                <p>
                  Observing the alarming rise of preventable chronic ailments and economic insecurity across
                  Indian communities, he founded{" "}
                  <span className="text-gold font-medium">Samsy Wellness Network</span> and subsequently{" "}
                  <span className="text-gold font-medium">Samsy Uni Private Limited</span>. His mission was
                  unequivocal: build an accessible, community-led preventative health ecosystem powered by
                  independent micro-entrepreneurs.
                </p>
                <p>
                  Today, his organizations span over 25 cities, providing livelihood, certified wellness training,
                  and leadership coaching to more than 25,000 active individuals.
                </p>
              </div>
            </Reveal>

            {/* Core Values Cards */}
            <Reveal delay={200}>
              <h3 className="font-display text-2xl font-semibold text-foreground">
                Core Leadership Philosophy
              </h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {values.map((val) => {
                  const Icon = iconMap[val.icon as keyof typeof iconMap] || Shield;
                  return (
                    <div
                      key={val.title}
                      className="surface-card group rounded-2xl p-5 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold transition-colors group-hover:bg-gold group-hover:text-primary-foreground">
                          <Icon className="size-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-foreground group-hover:text-gold transition-colors">
                            {val.title}
                          </h4>
                          <p className="text-[0.65rem] tracking-wider text-muted-foreground uppercase">
                            {val.tagline}
                          </p>
                        </div>
                      </div>
                      <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                        {val.body}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Reveal>

            <Reveal delay={280}>
              <div className="pt-2">
                <a
                  href="#journey"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-gold uppercase hover:underline"
                >
                  <span>Explore the complete founder journey</span>
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Animated Statistics Area */}
        <Reveal delay={300} className="mt-20">
          <div className="rounded-3xl border border-gold/20 bg-gradient-to-r from-card/80 via-card/50 to-card/80 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
            <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-12">
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-3 text-xs font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
