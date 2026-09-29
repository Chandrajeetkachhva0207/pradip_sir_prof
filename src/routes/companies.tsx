import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ventures } from "@/data/site";
import { VenturesSection } from "@/components/VenturesSection";
import { CtaSection } from "@/components/CtaSection";

export const Route = createFileRoute("/companies")({
  head: () => ({
    meta: [
      { title: "Ventures & Companies — Pradip Divansing Jadhav" },
      {
        name: "description",
        content:
          "Samsy Wellness Network, Samsy Uni Private Limited (IT Solutions), and Hope Multipurpose Foundation — the ventures founded and led by Pradip Divansing Jadhav.",
      },
      {
        property: "og:title",
        content: "Ventures & Companies — Pradip Divansing Jadhav",
      },
      {
        property: "og:description",
        content:
          "Samsy Wellness Network, Samsy Uni Private Limited (IT Solutions), and Hope Multipurpose Foundation — the ventures founded and led by Pradip Divansing Jadhav.",
      },
      { property: "og:image", content: "/images/samsy-it-solutions.jpg" },
    ],
  }),
  component: Companies,
});

function Companies() {
  return (
    <>
      <PageHero
        eyebrow="Commercial Enterprises & Foundations"
        title={
          <>
            Ventures Built for <span className="gold-text">Generational Impact</span>
          </>
        }
        subtitle="Samsy Uni Private Limited (Enterprise IT Solutions), Samsy Wellness Network, and Hope Multipurpose Foundation, founded and directed by Pradip Divansing Jadhav."
      />

      <VenturesSection />

      {/* On The Ground Section */}
      <section className="border-t border-border bg-card/20 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">Operational Leadership</p>
            <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
              Leading from the Field, Not Behind Closed Doors
            </h2>
            <div className="gold-rule mt-6" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Across all Samsy initiatives, executive governance is paired with active field presence. From direct software engineering reviews and distributor mentorship bootcamps to grassroots youth martial arts and sports camps — Pradip believes credibility is earned on the ground.
            </p>
            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-sm text-foreground/90">
                <CheckCircle2 className="size-4 text-gold shrink-0" />
                <span>200+ direct field masterclasses and wellness workshops conducted</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/90">
                <CheckCircle2 className="size-4 text-gold shrink-0" />
                <span>Zero-compromise ISO-certified formulation compliance</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-foreground/90">
                <CheckCircle2 className="size-4 text-gold shrink-0" />
                <span>Direct mentorship pipelines for regional leaders across 25+ cities</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="zoom-frame overflow-hidden rounded-3xl border border-gold/30 bg-card shadow-2xl">
              <img
                src="/images/founder-keynote.jpg"
                alt="Pradip Divansing Jadhav addressing key leadership partners"
                loading="lazy"
                className="aspect-4/3 w-full object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
