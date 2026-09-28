import { createFileRoute } from "@tanstack/react-router";
import portraitSuit from "@/assets/pradip-jadhav-suit.png";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { founder, values } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pradip Divansing Jadhav" },
      {
        name: "description",
        content:
          "Background, education, career experience and leadership philosophy of Pradip Divansing Jadhav.",
      },
      { property: "og:title", content: "About — Pradip Divansing Jadhav" },
      {
        property: "og:description",
        content:
          "Background, education, career experience and leadership philosophy of Pradip Divansing Jadhav.",
      },
    ],
  }),
  component: About,
});

const background = [
  {
    heading: "Education",
    body: "Placeholder content. Education details to be provided — school, college and any specialised training.",
  },
  {
    heading: "Sport",
    body: "Placeholder content. International athletic background, disciplines and training years to be provided.",
  },
  {
    heading: "Career experience",
    body: "Placeholder content. Professional roles held before and alongside founding the Samsy ventures.",
  },
  {
    heading: "Mentorship",
    body: "Placeholder content. Mentoring work with young athletes, entrepreneurs and team members.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About the founder"
        title={
          <>
            A life built on <span className="gold-text">effort</span>
          </>
        }
        subtitle={founder.statement}
      />

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="relative">
          <div className="zoom-frame rounded-sm border border-gold/25 shadow-[var(--shadow-luxe)]">
            <img
              src={portraitSuit}
              alt="Pradip Divansing Jadhav in a formal suit"
              loading="lazy"
              className="aspect-4/5 w-full object-cover object-top"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="Introduction"
            title="Founder, athlete and mentor"
            subtitle="Placeholder introduction. Pradip Divansing Jadhav is the founder of Samsy Wellness Network and Samsy Uni Private Limited. His work sits at the intersection of wellness, enterprise and people development."
          />
          <div className="mt-12 space-y-8">
            {background.map((b, i) => (
              <Reveal key={b.heading} delay={i * 90}>
                <div className="border-l border-gold/30 pl-6">
                  <p className="eyebrow">{b.heading}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Leadership philosophy"
            title="Values that guide the work"
            align="center"
          />
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
    </>
  );
}
