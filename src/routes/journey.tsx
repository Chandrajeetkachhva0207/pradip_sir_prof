import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { CtaSection } from "@/components/CtaSection";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Journey & Milestones — Pradip Divansing Jadhav" },
      {
        name: "description",
        content:
          "Milestones, turning points, athletic roots, and corporate scaling in the journey of Pradip Divansing Jadhav.",
      },
      { property: "og:title", content: "Journey & Milestones — Pradip Divansing Jadhav" },
      {
        property: "og:description",
        content:
          "Milestones, turning points, athletic roots, and corporate scaling in the journey of Pradip Divansing Jadhav.",
      },
      { property: "og:image", content: "/images/founder-portrait.jpg" },
    ],
  }),
  component: Journey,
});

function Journey() {
  return (
    <>
      <PageHero
        eyebrow="Milestones & Timeline"
        title={
          <>
            The Path of <span className="gold-text">Discipline & Scale</span>
          </>
        }
        subtitle="From international combat championship rings and world records to establishing enterprise IT solutions and wellness networks across 25+ cities in India."
      />

      <JourneyTimeline />
      <CtaSection />
    </>
  );
}
