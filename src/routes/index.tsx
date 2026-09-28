import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import portraitVest from "@/assets/portrait-vest.png.asset.json";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ui/button-link";
import { achievements, founder, posts, stats, testimonials, values } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pradip Divansing Jadhav — Founder, International Athlete, Mentor" },
      {
        name: "description",
        content:
          "Founder of Samsy Wellness Network and Samsy Uni Private Limited. International athlete, mentor and entrepreneur.",
      },
      {
        property: "og:title",
        content: "Pradip Divansing Jadhav — Founder, International Athlete, Mentor",
      },
      {
        property: "og:description",
        content:
          "Founder of Samsy Wellness Network and Samsy Uni Private Limited. International athlete, mentor and entrepreneur.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="hero-glow relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 pt-36 pb-20 sm:pt-44 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
          <div>
            <p className="eyebrow animate-reveal">Official Portfolio</p>
            <h1
              className="animate-reveal mt-6 text-4xl leading-[1.04] uppercase sm:text-5xl lg:text-6xl"
              style={{ animationDelay: "80ms" }}
            >
              Pradip Divansing <span className="gold-text">Jadhav</span>
            </h1>
            <p
              className="animate-reveal mt-6 text-xs tracking-[0.26em] text-muted-foreground uppercase sm:text-sm"
              style={{ animationDelay: "160ms" }}
            >
              {founder.title}
            </p>
            <div className="gold-rule animate-reveal mt-8" style={{ animationDelay: "220ms" }} />
            <p
              className="animate-reveal mt-8 max-w-xl text-base leading-relaxed text-muted-foreground"
              style={{ animationDelay: "280ms" }}
            >
              {founder.statement}
            </p>
            <div
              className="animate-reveal mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: "340ms" }}
            >
              <ButtonLink to="/journey">Explore my journey</ButtonLink>
              <ButtonLink to="/contact" variant="outline">
                Contact me
              </ButtonLink>
            </div>
          </div>

          <Reveal delay={120} className="relative">
            <div className="absolute -inset-4 -z-10 rounded-sm bg-gold-soft blur-3xl" />
            <div className="zoom-frame relative rounded-sm border border-gold/30 shadow-[var(--shadow-luxe)]">
              <img
                src={portraitVest.url}
                alt="Portrait of Pradip Divansing Jadhav"
                loading="eager"
                className="aspect-4/5 w-full object-cover object-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/70 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>

        <div className="border-y border-border bg-card/30">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-12 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90} className="text-center lg:text-left">
                <p className="font-display text-4xl sm:text-5xl">
                  <Counter value={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-3 text-[0.7rem] tracking-[0.22em] text-muted-foreground uppercase">
                  {s.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading
          eyebrow="About"
          title="Discipline of an athlete, patience of a builder"
          subtitle="Placeholder introduction. Pradip Divansing Jadhav is the founder of Samsy Wellness Network and Samsy Uni Private Limited, an international athlete and a mentor to young entrepreneurs and sportspeople."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 90}>
              <article className="surface-card h-full rounded-sm p-7">
                <span className="font-display text-3xl text-gold">0{i + 1}</span>
                <h3 className="mt-5 text-xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="mt-12">
          <Link
            to="/about"
            className="link-underline inline-flex items-center gap-2 text-[0.75rem] tracking-[0.2em] text-gold uppercase"
          >
            Read the full story <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </section>

      <section className="border-y border-border bg-card/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading
            eyebrow="Achievements"
            title="Recognition earned over years"
            subtitle="Placeholder selection. Detailed awards, certifications and recognitions live on the achievements page."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {achievements.slice(0, 3).map((a, i) => (
              <Reveal key={a.title} delay={i * 100}>
                <article className="surface-card h-full rounded-sm p-7">
                  <p className="eyebrow">{a.year}</p>
                  <h3 className="mt-4 text-xl leading-snug">{a.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{a.issuer}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={220} className="mt-12">
            <ButtonLink to="/achievements" variant="outline">
              All achievements
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <SectionHeading eyebrow="Testimonials" title="In other people's words" align="center" />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="surface-card h-full rounded-sm p-8">
                <Quote className="size-6 text-gold" />
                <blockquote className="mt-5 text-lg leading-relaxed">{t.quote}</blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="mt-1 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    {t.role}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <SectionHeading eyebrow="Journal" title="Latest writing" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((p, i) => (
              <Reveal key={p.slug} delay={i * 100}>
                <Link to="/blog" className="surface-card block h-full rounded-sm p-7">
                  <p className="eyebrow">{p.category}</p>
                  <h3 className="mt-4 text-xl leading-snug">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                  <p className="mt-6 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    {p.date} • {p.readingTime}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <Reveal>
          <p className="eyebrow">Let's connect</p>
          <h2 className="mt-5 text-3xl sm:text-4xl md:text-5xl">
            Open to <span className="gold-text">collaborations</span>, speaking and mentorship
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <ButtonLink to="/contact">Contact me</ButtonLink>
            <ButtonLink to="/companies" variant="outline">
              View companies
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
