import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { journey } from "@/data/site";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title: "Journey — Pradip Divansing Jadhav" },
      {
        name: "description",
        content:
          "Milestones, turning points and defining chapters in the journey of Pradip Divansing Jadhav.",
      },
      { property: "og:title", content: "Journey — Pradip Divansing Jadhav" },
      {
        property: "og:description",
        content:
          "Milestones, turning points and defining chapters in the journey of Pradip Divansing Jadhav.",
      },
    ],
  }),
  component: Journey,
});

function Journey() {
  return (
    <>
      <PageHero
        eyebrow="Founder's journey"
        title={
          <>
            Milestones and <span className="gold-text">turning points</span>
          </>
        }
        subtitle="Placeholder timeline. Each chapter can be replaced with verified dates, details and images."
      />

      <section className="mx-auto max-w-4xl px-6 py-24">
        <ol className="relative border-l border-border pl-8 sm:pl-12">
          {journey.map((item, i) => (
            <Reveal key={item.title} delay={i * 80} className="relative pb-14 last:pb-0">
              <span className="absolute top-2 -left-[2.28rem] size-3 rotate-45 border border-gold bg-background sm:-left-[3.28rem]" />
              <p className="eyebrow">{item.year}</p>
              <h3 className="mt-3 text-2xl sm:text-3xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {item.body}
              </p>
            </Reveal>
          ))}
        </ol>
      </section>
    </>
  );
}
