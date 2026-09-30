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
      <div className="pointer-events-none absolute bottom-0 left-10 size-96 rounded-full bg-primary/5 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Founder Biography & Values"
          title="From Combat Champion to Enterprise Leader"
          subtitle="How an international combat sports career and orphan student resilience forged the relentless standard behind enterprise ventures."
        />

        {/* Split Screen Layout */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Image with Luxury Frame & Athletic Legacy */}
          <div className="lg:col-span-5">
            <Reveal className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-gold/20 via-gold/5 to-transparent blur-2xl" />

              <div className="zoom-frame relative overflow-hidden rounded-3xl border border-gold/30 bg-card shadow-2xl shadow-primary/10">
                <img
                  src="/images/founder.jpg"
                  alt="Pradip Divansing Jadhav — O-Sport World Champion & 3rd Dan Black Belt"
                  className="h-[700px] w-full object-cover object-center"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/15 to-transparent" />

                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-gold/25 bg-card/90 p-5 shadow-lg shadow-primary/5 backdrop-blur-xl">
                  <div className="flex items-center gap-2 text-gold">
                    <CheckCircle2 className="size-4" />
                    <span className="text-[0.68rem] font-semibold tracking-widest uppercase">
                      Combat Mastery & Resilience
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-foreground">
                    "Growing up as an orphan student taught me that adversity is fuel. In combat and business, champions are forged when nobody is watching."
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
                  is an O-Sport World Champion Gold Medalist, International UFI Kickboxing Champion,
                  Mixed Martial Artist (3rd Dan Black Belt Degree), and Holder of 3 World Records (London, Asian, Bharat).
                  Rising from an orphan student background with zero inherited privilege, he mastered combat disciplines
                  through relentless perseverance.
                </p>
                <p>
                  Channeling his warrior work ethic into enterprise leadership, he founded{" "}
                  <span className="text-gold font-medium">Samsy Uni Private Limited</span> (spearheading enterprise IT
                  solutions, custom software development, and digital infrastructure) alongside{" "}
                  <span className="text-gold font-medium">Samsy Wellness Network</span>. His mission is to deliver world-class
                  technology solutions while empowering independent youth and micro-entrepreneurs.
                </p>
                <p>
                  Honored with the prestigious <span className="text-foreground font-medium">Bharat Ratna Atal Rashtriya Gaurav Puraskar</span>,{" "}
                  <span className="text-foreground font-medium">MASA India Mentor Award</span>, and multiple state honors, he continues to train,
                  referee national grappling competitions, and mentor over 25,000 active individuals across India.
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
