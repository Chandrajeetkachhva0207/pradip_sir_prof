import { createFileRoute } from "@tanstack/react-router";
import { Check, Target, Compass, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { values, visionMission } from "@/data/site";
import { VisionMission } from "@/components/VisionMission";
import { QuoteSection } from "@/components/QuoteSection";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision & Mission — Pradip Divansing Jadhav" },
      {
        name: "description",
        content:
          "To build a stronger, smarter, healthier, and globally respected India through education, innovation, blockchain technology, entrepreneurship, and leadership.",
      },
      { property: "og:title", content: "Vision & Mission — Pradip Divansing Jadhav" },
      {
        property: "og:description",
        content:
          "To build a stronger, smarter, healthier, and globally respected India through education, innovation, blockchain technology, entrepreneurship, and leadership.",
      },
      { property: "og:image", content: "/images/founder-portrait.jpg" },
    ],
  }),
  component: Vision,
});

const strategicGoals = [
  "Build a stronger, smarter, healthier, and globally respected India through education, innovation, and ethical leadership.",
  "Pioneer enterprise software, blockchain technology, and secure digital architecture via Samsy Uni Private Limited.",
  "Democratize preventative wellness education and certified community health solutions to millions across India via Samsy Wellness Network.",
  "Empower orphan students and grassroots youth with scholarships, sports sponsorships, and mentorship via Hope Multipurpose Foundation.",
];

function Vision() {
  return (
    <>
      <PageHero
        eyebrow="Vision & Strategic Horizon"
        title={
          <>
            A Stronger, Smarter, <span className="gold-text">Healthier India</span>
          </>
        }
        subtitle="To build a stronger, smarter, healthier, and globally respected India through education, innovation, blockchain technology, entrepreneurship, and leadership."
      />

      <VisionMission />

      {/* Strategic Roadmap */}
      <section className="mx-auto max-w-5xl px-6 py-24">
        <SectionHeading
          eyebrow="Strategic Roadmap"
          title="Milestones for the Coming Decade"
          subtitle="Clear, measurable benchmarks governing our enterprise expansion."
        />

        <div className="mt-12 space-y-5">
          {strategicGoals.map((g, i) => (
            <Reveal key={g} delay={i * 80}>
              <div className="surface-card flex items-start gap-4 rounded-2xl p-6 transition-all hover:border-gold/40">
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                  <Check className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-medium leading-relaxed text-foreground sm:text-base">
                    {g}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <QuoteSection />
    </>
  );
}
