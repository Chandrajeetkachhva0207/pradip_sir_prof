import { useState } from "react";
import { Trophy, CheckCircle, Sparkles, Award, Medal, ShieldCheck } from "lucide-react";
import { achievements } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type FilterCategory = "all" | "world" | "awards" | "martial-arts";

const filters: { id: FilterCategory; label: string }[] = [
  { id: "all", label: "All Honors & Events (19)" },
  { id: "world", label: "World Titles & Records" },
  { id: "awards", label: "National & Civic Awards" },
  { id: "martial-arts", label: "Martial Arts & Credentials" },
];

export function AchievementsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");

  const filteredAchievements = achievements.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "world") {
      return item.category === "World Championship" || item.category === "World Record";
    }
    if (activeFilter === "awards") {
      return (
        item.category === "National Award" ||
        item.category === "National Honor" ||
        item.category === "State Honor" ||
        item.category === "Civic Honor" ||
        item.category === "Mentorship Honor" ||
        item.category === "Community Honor" ||
        item.category === "State Award" ||
        item.category === "Life Achievement" ||
        item.category === "Sports Honor"
      );
    }
    if (activeFilter === "martial-arts") {
      return (
        item.category.includes("Championship") ||
        item.category.includes("Tournament") ||
        item.category.includes("Credential") ||
        item.category.includes("Rank") ||
        item.category === "Global Citation"
      );
    }
    return true;
  });

  return (
    <section id="achievements" className="relative overflow-hidden py-24 lg:py-32">
      {/* Background Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[35rem] rounded-full bg-gold/5 blur-[150px]" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Honors, Titles & World Records"
          title="Achievements & Recognition"
          subtitle="From orphan student roots to O-Sport World Champion, 3x World Record Holder, and recipient of the Bharat Ratna Atal Rashtriya Gaurav Puraskar."
        />

        {/* Filter Navigation */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                type="button"
                className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${isActive
                    ? "border border-gold bg-gold text-navy shadow-md shadow-gold/25"
                    : "border border-border bg-card/60 text-muted-foreground hover:border-gold/40 hover:text-foreground"
                  }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>

        {/* Grid of Achievements */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAchievements.map((item, index) => (
            <Reveal key={item.title + item.year} delay={Math.min(index * 60, 400)}>
              <div className="surface-card group relative flex h-full flex-col justify-between rounded-2xl p-7 transition-all duration-300 hover:border-gold/50">
                <div>
                  {/* Top Bar: Year & Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-bold tracking-widest text-gold uppercase">
                      <Trophy className="size-3.5" />
                      {item.year}
                    </span>
                    <span className="rounded-full border border-border bg-card/60 px-3 py-0.5 text-[0.65rem] font-semibold tracking-wider text-muted-foreground uppercase">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-foreground group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs font-semibold tracking-wider text-gold/80 uppercase">
                    {item.issuer}
                  </p>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-border/70 pt-4 text-[0.72rem] font-medium text-foreground/80">
                  <div className="flex items-center gap-1.5 text-gold">
                    <CheckCircle className="size-3.5" />
                    <span>Official Citation</span>
                  </div>
                  <span className="text-[0.68rem] tracking-wider text-muted-foreground uppercase">
                    {item.category}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
