import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import portraitAthlete from "@/assets/portrait-athlete.png.asset.json";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { companies } from "@/data/site";

export const Route = createFileRoute("/companies")({
  head: () => ({
    meta: [
      { title: "Companies — Samsy Wellness Network & Samsy Uni Private Limited" },
      {
        name: "description",
        content:
          "Samsy Wellness Network and Samsy Uni Private Limited — the ventures founded by Pradip Divansing Jadhav.",
      },
      {
        property: "og:title",
        content: "Companies — Samsy Wellness Network & Samsy Uni Private Limited",
      },
      {
        property: "og:description",
        content:
          "Samsy Wellness Network and Samsy Uni Private Limited — the ventures founded by Pradip Divansing Jadhav.",
      },
    ],
  }),
  component: Companies,
});

function Companies() {
  return (
    <>
      <PageHero
        eyebrow="Companies"
        title={
          <>
            Two ventures, one <span className="gold-text">standard</span>
          </>
        }
        subtitle="Samsy Wellness Network and Samsy Uni Private Limited, both founded and led by Pradip Divansing Jadhav."
      />

      <section className="mx-auto max-w-7xl space-y-16 px-6 py-24">
        {companies.map((c, i) => (
          <Reveal key={c.name} delay={i * 80}>
            <article className="surface-card grid gap-10 rounded-sm p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <p className="eyebrow">{c.role}</p>
                <h2 className="mt-4 text-3xl sm:text-4xl">{c.name}</h2>
                <div className="gold-rule mt-6" />
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {c.body}
                </p>

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {c.services.map((s) => (
                    <div
                      key={s}
                      className="rounded-sm border border-border px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-gold/50 hover:text-foreground"
                    >
                      {s}
                    </div>
                  ))}
                </div>

                <a
                  href={c.website}
                  className="link-underline mt-8 inline-flex items-center gap-2 text-[0.75rem] tracking-[0.2em] text-gold uppercase"
                >
                  Visit website <ArrowUpRight className="size-4" />
                </a>
              </div>

              <div className="grid content-start gap-4">
                {c.metrics.map((m) => (
                  <div key={m.label} className="rounded-sm border border-border bg-background/40 p-6">
                    <p className="font-display text-2xl text-gold">{m.value}</p>
                    <p className="mt-2 text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="border-t border-border bg-card/20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">On the ground</p>
            <h2 className="mt-5 text-3xl sm:text-4xl">Leading from the front</h2>
            <div className="gold-rule mt-6" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Placeholder text describing day-to-day involvement across both ventures — training,
              partner meetings, programme reviews and field visits.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="zoom-frame rounded-sm border border-gold/25 shadow-[var(--shadow-luxe)]">
              <img
                src={portraitAthlete.url}
                alt="Pradip Divansing Jadhav in Samsy Wellness Network apparel"
                loading="lazy"
                className="aspect-4/5 w-full object-cover object-top"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
