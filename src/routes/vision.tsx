import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { values } from "@/data/site";

export const Route = createFileRoute("/vision")({
  head: () => ({
    meta: [
      { title: "Vision & Mission — Pradip Divansing Jadhav" },
      {
        name: "description",
        content:
          "The vision, mission, core values and long-term goals guiding Pradip Divansing Jadhav's ventures.",
      },
      { property: "og:title", content: "Vision & Mission — Pradip Divansing Jadhav" },
      {
        property: "og:description",
        content:
          "The vision, mission, core values and long-term goals guiding Pradip Divansing Jadhav's ventures.",
      },
    ],
  }),
  component: Vision,
});

const goals = [
  "Placeholder goal. Strengthen wellness access in underserved regions.",
  "Placeholder goal. Build a structured mentorship pipeline for young athletes.",
  "Placeholder goal. Grow the group's ventures with disciplined, sustainable expansion.",
  "Placeholder goal. Develop leaders who can run the organisation independently.",
];

function Vision() {
  return (
    <>
      <PageHero
        eyebrow="Vision & mission"
        title={
          <>
            Where this is <span className="gold-text">going</span>
          </>
        }
      />

      <section className="mx-auto max-w-5xl px-6 py-24">
        <Reveal>
          <blockquote className="surface-card rounded-sm p-10 sm:p-14">
            <p className="text-2xl leading-snug sm:text-3xl md:text-4xl">
              “Placeholder vision statement. To build wellness and enterprise that outlive me — and
              to leave people stronger than I found them.”
            </p>
            <footer className="mt-8 text-xs tracking-[0.22em] text-gold uppercase">
              Pradip Divansing Jadhav
            </footer>
          </blockquote>
        </Reveal>

        <div className="mt-20">
          <SectionHeading
            eyebrow="Mission"
            title="The work, stated plainly"
            subtitle="Placeholder mission statement. To deliver honest wellness solutions, create livelihood opportunities through the network, and mentor the next generation with the same discipline sport demands."
          />
        </div>
      </section>

      <section className="border-y border-border bg-card/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading eyebrow="Core values" title="Non-negotiables" align="center" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <article className="surface-card h-full rounded-sm p-7">
                  <h3 className="text-xl">{v.title}</h3>
                  <div className="gold-rule mt-4" />
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24">
        <SectionHeading eyebrow="Long-term goals" title="The roadmap ahead" />
        <ul className="mt-12 space-y-5">
          {goals.map((g, i) => (
            <Reveal key={g} delay={i * 80}>
              <li className="flex gap-4 border-b border-border pb-5">
                <Check className="mt-0.5 size-5 shrink-0 text-gold" />
                <span className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {g}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
