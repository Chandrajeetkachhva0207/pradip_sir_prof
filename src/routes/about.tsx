import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { founder, values, stats } from "@/data/site";
import { Counter } from "@/components/Counter";
import { Shield, Sparkles, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Pradip Divansing Jadhav" },
      {
        name: "description",
        content:
          "Background, athletic career, corporate governance, and leadership philosophy of Pradip Divansing Jadhav.",
      },
      { property: "og:title", content: "About — Pradip Divansing Jadhav" },
      {
        property: "og:description",
        content:
          "Background, athletic career, corporate governance, and leadership philosophy of Pradip Divansing Jadhav.",
      },
      { property: "og:image", content: "/images/founder-portrait.jpg" },
    ],
  }),
  component: About,
});

const backgroundPillars = [
  {
    heading: "Athletic Rigor",
    body: "Trained and competed as a national and international track athlete for over a decade. Representing India cemented the mental fortitude, aerobic endurance, and extreme accountability that govern all current enterprise ventures.",
  },
  {
    heading: "Academic & Scientific Foundations",
    body: "Synthesized business strategy and human physiology to understand how preventative health, nutritional biochemistry, and daily lifestyle habits drive lifelong human performance.",
  },
  {
    heading: "Commercial Governance & Enterprise",
    body: "Founded Samsy Wellness Network and Samsy Uni Private Limited, scaling product development, modern supply chain distribution, and partner enablement apps across 25+ cities in India.",
  },
  {
    heading: "Grassroots Mentorship & Philanthropy",
    body: "Established the Samsy Leadership Academy and Rural Athletic Health Mission, mentoring over 25,000 active community members and providing athletic sponsorships to underrepresented sports youth.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Founder Profile"
        title={
          <>
            A Life Built on <span className="gold-text">Discipline & Purpose</span>
          </>
        }
        subtitle={founder.statement}
      />

      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-12 items-center">
        {/* Left Column: Portrait */}
        <div className="lg:col-span-5">
          <Reveal className="relative">
            <div className="zoom-frame overflow-hidden rounded-3xl border border-gold/30 bg-card shadow-2xl">
              <img
                src="/images/founder-portrait.jpg"
                alt="Pradip Divansing Jadhav"
                loading="eager"
                className="aspect-4/5 w-full object-cover object-top"
              />
            </div>
          </Reveal>
        </div>

        {/* Right Column: Narrative */}
        <div className="lg:col-span-7 space-y-8">
          <SectionHeading
            eyebrow="Biography"
            title="The Architect Behind the Samsy Movement"
            subtitle="Pradip Divansing Jadhav is an entrepreneur, former international athlete, and mentor dedicated to solving India's lifestyle health crisis through preventative wellness and grassroots micro-entrepreneurship."
          />

          <div className="grid gap-6 sm:grid-cols-2 pt-4">
            {backgroundPillars.map((b, i) => (
              <Reveal key={b.heading} delay={i * 80}>
                <div className="surface-card rounded-2xl p-6 border-l-2 border-l-gold">
                  <p className="text-xs font-bold tracking-widest text-gold uppercase">{b.heading}</p>
                  <p className="mt-2.5 text-xs leading-relaxed text-muted-foreground">{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Counter Bar */}
      <section className="border-y border-border/70 bg-card/30 py-16">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl sm:text-5xl font-bold">
                <Counter value={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="Leadership Philosophy"
          title="Values That Guide the Enterprise"
          subtitle="Non-negotiable ethical standards rooted in athletic perseverance."
          align="center"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <article className="surface-card h-full rounded-2xl p-7 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">{v.title}</h3>
                  <div className="gold-rule my-4" />
                  <p className="text-xs leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-gold text-[0.7rem] font-semibold tracking-wider uppercase">
                  <CheckCircle2 className="size-3.5" />
                  <span>Verified Standard</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
