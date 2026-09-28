import { Newspaper, ArrowUpRight, Radio, ExternalLink, Calendar, Clock } from "lucide-react";
import { mediaFeatures } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const publicationBrands = [
  "The Economic Times",
  "Business Standard",
  "SportStar",
  "YourStory",
  "Entrepreneur India",
  "Mid-Day",
];

export function MediaSection() {
  return (
    <section id="media" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute top-10 left-1/3 size-[28rem] rounded-full bg-gold/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Press & Coverage"
          title="Featured In & Media Highlights"
          subtitle="Insightful interviews, national journalism profiles, and thought leadership commentary across major business and sports publications."
        />

        {/* Publication Brand Strip */}
        <div className="mt-14 overflow-hidden rounded-2xl border border-border/70 bg-card/40 py-6 px-8 backdrop-blur-md">
          <p className="text-center text-[0.65rem] font-semibold tracking-[0.25em] text-muted-foreground uppercase mb-4">
            Recognized & Featured Across National Platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-center">
            {publicationBrands.map((brand) => (
              <span
                key={brand}
                className="font-display text-lg font-semibold tracking-wide text-foreground/75 transition-colors hover:text-gold sm:text-xl"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

        {/* Media Article Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {mediaFeatures.map((item, index) => (
            <Reveal key={item.id} delay={index * 90}>
              <div className="surface-card group relative flex h-full flex-col justify-between rounded-2xl p-7 transition-all duration-300 hover:border-gold/50">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold tracking-wider text-gold uppercase">
                      <Newspaper className="size-3.5" />
                      {item.outlet}
                    </span>
                    <span className="rounded-full border border-border bg-card/60 px-3 py-0.5 text-[0.65rem] font-semibold tracking-wider text-muted-foreground uppercase">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-foreground group-hover:text-gold transition-colors sm:text-2xl">
                    {item.headline}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="size-3.5 text-gold" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="size-3.5 text-gold" />
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 font-semibold text-gold hover:underline"
                  >
                    <span>Read feature</span>
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
