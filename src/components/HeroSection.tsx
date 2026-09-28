import { ArrowRight, Sparkles, ChevronDown, Award, Briefcase, Trophy, Globe } from "lucide-react";
import { founder } from "@/data/site";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="hero-glow relative min-h-screen overflow-hidden pt-28 pb-16 lg:flex lg:items-center lg:pt-36 lg:pb-24"
    >
      {/* Ambient background blur elements */}
      <div className="pointer-events-none absolute -top-40 -left-40 size-[32rem] rounded-full bg-gold/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/2 -right-40 size-[28rem] rounded-full bg-blue-500/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Small Badge */}
            <div className="animate-reveal inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-[0.2em] text-gold uppercase backdrop-blur-md">
              <Sparkles className="size-3.5" />
              <span>{founder.badge}</span>
            </div>

            {/* Large Headline */}
            <h1
              className="animate-reveal mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
              style={{ animationDelay: "100ms" }}
            >
              Building Ideas That Create{" "}
              <span className="gold-text italic">Meaningful Impact.</span>
            </h1>

            {/* Sub-label & Statement */}
            <p
              className="animate-reveal mt-4 text-xs font-semibold tracking-[0.25em] text-gold/90 uppercase sm:text-sm"
              style={{ animationDelay: "180ms" }}
            >
              {founder.title}
            </p>

            <div
              className="gold-rule animate-reveal my-6"
              style={{ animationDelay: "240ms" }}
            />

            <p
              className="animate-reveal max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
              style={{ animationDelay: "300ms" }}
            >
              {founder.statement}
            </p>

            {/* Two CTAs */}
            <div
              className="animate-reveal mt-8 flex flex-wrap items-center gap-4 sm:gap-5"
              style={{ animationDelay: "380ms" }}
            >
              <a
                href="#journey"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-gold bg-gradient-to-r from-gold via-amber-400 to-gold px-7 py-3.5 text-xs font-semibold tracking-widest text-primary-foreground uppercase shadow-lg shadow-gold/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-gold"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-xs font-semibold tracking-widest text-foreground uppercase backdrop-blur-md transition-all duration-300 hover:border-gold/60 hover:bg-gold/10 hover:text-gold"
              >
                <span>Let's Connect</span>
              </a>
            </div>

            {/* Quick Proof Points */}
            <div
              className="animate-reveal mt-12 grid grid-cols-3 gap-4 border-t border-border/70 pt-8 sm:gap-8"
              style={{ animationDelay: "450ms" }}
            >
              <div>
                <p className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  12<span className="text-gold">+</span>
                </p>
                <p className="mt-1 text-[0.68rem] tracking-wider text-muted-foreground uppercase">
                  Years Leadership
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  25k<span className="text-gold">+</span>
                </p>
                <p className="mt-1 text-[0.68rem] tracking-wider text-muted-foreground uppercase">
                  People Impacted
                </p>
              </div>
              <div>
                <p className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                  25<span className="text-gold">+</span>
                </p>
                <p className="mt-1 text-[0.68rem] tracking-wider text-muted-foreground uppercase">
                  Cities Scaled
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Founder Portrait & Floating Badges */}
          <div className="relative flex justify-center lg:col-span-5 xl:col-span-5">
            {/* Ambient circular halo glow */}
            <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-gold/25 via-blue-600/10 to-transparent blur-3xl" />

            <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
              {/* Main Organic / Circular Image Frame */}
              <div className="zoom-frame relative mx-auto aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] border border-gold/30 bg-card shadow-2xl shadow-black/60 transition-all duration-500 hover:border-gold/60">
                <img
                  src="/images/founder-portrait.jpg"
                  alt="Pradip Divansing Jadhav — Founder, International Athlete & Mentor"
                  className="size-full object-cover object-top transition-transform duration-700"
                  loading="eager"
                />
                {/* Subtle vignette gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/15 to-transparent" />

                {/* Bottom Portrait Name Badge */}
                <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/10 bg-background/70 p-4 shadow-xl backdrop-blur-xl">
                  <p className="font-display text-lg font-semibold text-foreground">
                    Pradip Divansing Jadhav
                  </p>
                  <p className="text-[0.65rem] tracking-widest text-gold uppercase">
                    Founder • Athlete • Mentor
                  </p>
                </div>
              </div>

              {/* Floating Card 1: 12+ Years Experience (Top Left) */}
              <div className="animate-float absolute -top-5 -left-4 hidden rounded-2xl border border-gold/30 bg-background/85 p-3.5 shadow-xl shadow-black/40 backdrop-blur-xl sm:flex sm:items-center sm:gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Trophy className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">12+ Years</p>
                  <p className="text-[0.65rem] tracking-wider text-muted-foreground uppercase">
                    Executive Mastery
                  </p>
                </div>
              </div>

              {/* Floating Card 2: 50+ Global Projects (Middle Right) */}
              <div className="animate-float-reverse absolute top-1/3 -right-6 hidden rounded-2xl border border-gold/30 bg-background/85 p-3.5 shadow-xl shadow-black/40 backdrop-blur-xl sm:flex sm:items-center sm:gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                  <Globe className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">50+ Projects</p>
                  <p className="text-[0.65rem] tracking-wider text-muted-foreground uppercase">
                    Scaled Nationwide
                  </p>
                </div>
              </div>

              {/* Floating Card 3: Founder & CEO (Bottom Left) */}
              <div className="animate-float absolute -bottom-5 -left-5 hidden rounded-2xl border border-gold/30 bg-background/85 p-3.5 shadow-xl shadow-black/40 backdrop-blur-xl sm:flex sm:items-center sm:gap-3">
                <div className="flex size-10 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Briefcase className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">Founder & CEO</p>
                  <p className="text-[0.65rem] tracking-wider text-muted-foreground uppercase">
                    Samsy Group
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center justify-center gap-2 text-center lg:mt-24">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="group flex flex-col items-center gap-2 text-xs font-medium tracking-[0.25em] text-muted-foreground uppercase transition-colors hover:text-gold"
          >
            <span>Scroll to explore</span>
            <div className="flex size-8 items-center justify-center rounded-full border border-border bg-card/50 transition-transform group-hover:translate-y-1 group-hover:border-gold/50">
              <ChevronDown className="size-4 text-gold" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
