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
          "The long-term vision, core mission, and strategic roadmap guiding Pradip Divansing Jadhav's wellness enterprises.",
      },
      { property: "og:title", content: "Vision & Mission — Pradip Divansing Jadhav" },
      {
        property: "og:description",
        content:
          "The long-term vision, core mission, and strategic roadmap guiding Pradip Divansing Jadhav's wellness enterprises.",
      },
      { property: "og:image", content: "/images/founder-portrait.jpg" },
    ],
  }),
  component: Vision,
});

const strategicGoals = [
  "Democratize preventative wellness education and certified formulations to 1,000,000 households across India.",
  "Empower 100,000 independent micro-entrepreneurs and health coaches through Samsy Leadership Academy.",
  "Build permanent sports training infrastructure and scholarships for underprivileged track talents in rural Maharashtra.",
  "Pioneer bioactive, certified lifestyle nutritional science developed with zero artificial compromise.",
];

function Vision() {
  return (
    <>
      <PageHero
        eyebrow="Vision & Strategic Horizon"
        title={
          <>
            Building Institutions That <span className="gold-text">Outlive Cycles</span>
          </>
        }
        subtitle="To pioneer accessible, preventative, and community-driven wellness ecosystems that elevate millions of lives physically and financially."
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
