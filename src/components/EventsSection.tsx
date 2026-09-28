import { Mic, Calendar, MapPin, Users, ArrowUpRight } from "lucide-react";
import { speakingEvents } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function EventsSection() {
  return (
    <section id="speaking" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/4 size-[25rem] rounded-full bg-gold/5 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Keynotes & Panels"
          title="Speaking & Industry Events"
          subtitle="Delivering high-voltage keynote discourses on athletic grit, organizational ethics, and preventive wellness ecosystems."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {speakingEvents.map((evt, index) => (
            <Reveal key={evt.id} delay={index * 90}>
              <div className="surface-card group relative flex h-full flex-col justify-between rounded-2xl p-7 transition-all duration-300 hover:border-gold/50">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold tracking-wider text-gold uppercase">
                      <Mic className="size-3.5" />
                      {evt.role}
                    </span>
                    <span className="flex items-center gap-1 text-[0.7rem] font-semibold text-muted-foreground">
                      <Users className="size-3.5 text-gold" />
                      {evt.attendees}
                    </span>
                  </div>

                  <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-foreground group-hover:text-gold transition-colors sm:text-2xl">
                    {evt.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium italic text-gold/90">
                    "{evt.topic}"
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-border/70 pt-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="size-3.5 text-gold" />
                      <span>{evt.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="size-3.5 text-gold" />
                      <span>{evt.location}</span>
                    </div>
                  </div>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 font-semibold text-gold hover:underline"
                  >
                    <span>Request Keynote</span>
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
