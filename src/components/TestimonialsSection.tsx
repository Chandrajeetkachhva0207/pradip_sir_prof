import { useState, useEffect, useCallback } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prev = () => {
    setCurrent((idx) => (idx === 0 ? testimonials.length - 1 : idx - 1));
  };

  const next = useCallback(() => {
    setCurrent((idx) => (idx === testimonials.length - 1 ? 0 : idx + 1));
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next, isPaused]);

  const active = testimonials[current];
  if (!active) return null;

  return (
    <section id="testimonials" className="relative overflow-hidden py-24 lg:py-32 bg-card/25 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Endorsements & Trust"
          title="Executive Testimonials"
          subtitle="Perspectives from physicians, venture partners, community directors, and elite coaches who have built alongside Pradip."
        />

        <div
          className="mt-16 relative mx-auto max-w-4xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Testimonial Card */}
          <Reveal>
            <div className="surface-card relative overflow-hidden rounded-3xl p-8 sm:p-14 transition-all duration-500 hover:border-gold/40">
              <Quote className="size-12 text-gold/30 sm:size-16" />

              <blockquote className="mt-6 font-display text-xl font-medium italic leading-relaxed text-foreground sm:text-2xl md:text-3xl">
                "{active.quote}"
              </blockquote>

              <div className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-border/70 pt-8">
                {/* Person details */}
                <div className="flex items-center gap-4">
                  <img
                    src={active.photo}
                    alt={active.name}
                    className="size-14 rounded-full border-2 border-gold/40 object-cover shadow-md"
                    loading="lazy"
                  />
                  <div>
                    <h4 className="font-display text-lg font-semibold text-foreground sm:text-xl">
                      {active.name}
                    </h4>
                    <p className="text-xs text-gold/90 font-medium">
                      {active.designation}
                    </p>
                    <p className="text-[0.7rem] text-muted-foreground">
                      {active.company}
                    </p>
                  </div>
                </div>

                {/* Rating Stars & Navigation Controls */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="size-4 fill-gold text-gold" />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prev}
                      aria-label="Previous testimonial"
                      className="flex size-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-all hover:border-gold hover:bg-gold hover:text-primary-foreground"
                    >
                      <ChevronLeft className="size-5" />
                    </button>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next testimonial"
                      className="flex size-10 items-center justify-center rounded-full border border-border bg-card/60 text-foreground transition-all hover:border-gold hover:bg-gold hover:text-primary-foreground"
                    >
                      <ChevronRight className="size-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Dots Indicator */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === i ? "w-8 bg-gold" : "w-2 bg-muted hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
