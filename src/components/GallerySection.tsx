import { useState } from "react";
import { X, ZoomIn, Sparkles, Filter } from "lucide-react";
import { galleryItems } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const categories = ["All", "Keynotes", "Athletics", "Ventures", "Awards", "Mentorship"] as const;

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeImage, setActiveImage] = useState<typeof galleryItems[0] | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="gallery" className="relative overflow-hidden py-24 lg:py-32 bg-card/25 border-y border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visual Chronicles"
          title="Moments & Milestones"
          subtitle="A visual journey across international tracks, leadership keynotes, corporate headquarters, and mentorship sessions."
        />

        {/* Filter Categories */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${selectedCategory === cat
                  ? "border border-gold bg-gold text-navy shadow-md shadow-gold/20"
                  : "border border-border bg-card text-muted-foreground hover:border-gold/40 hover:text-foreground"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <Reveal key={item.id} delay={index * 60}>
              <div
                onClick={() => setActiveImage(item)}
                className="surface-card group relative flex flex-col cursor-pointer overflow-hidden rounded-2xl border border-border/70 transition-all duration-500 hover:border-gold/60 hover:shadow-gold"
              >
                <div className="zoom-frame relative aspect-4/3 w-full overflow-hidden bg-card/60 flex items-center justify-center p-2">
                  {/* Subtle blurred background to eliminate harsh bars for vertical or non-standard photos */}
                  <img
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 size-full object-cover blur-lg opacity-25 scale-110"
                  />
                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 size-full object-contain object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="rounded-full border border-gold/30 bg-card/90 px-3 py-1 text-[0.65rem] font-bold tracking-wider text-gold uppercase backdrop-blur-md shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Zoom indicator on hover */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-background/20 backdrop-blur-[1px]">
                    <div className="flex size-12 items-center justify-center rounded-full bg-card/90 text-gold shadow-lg backdrop-blur-md border border-gold/40">
                      <ZoomIn className="size-5" />
                    </div>
                  </div>
                </div>

                {/* Caption Area Below Photo */}
                <div className="flex flex-1 flex-col justify-between p-5 border-t border-border/60 bg-card/40">
                  <h3 className="font-display text-base font-semibold leading-snug text-foreground group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl overflow-hidden rounded-3xl border border-gold/40 bg-card p-4 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              aria-label="Close modal"
              className="absolute top-6 right-6 z-10 flex size-10 items-center justify-center rounded-full border border-gold/30 bg-card/90 text-foreground transition-colors hover:bg-gold hover:text-primary"
            >
              <X className="size-5" />
            </button>

            <img
              src={activeImage.image}
              alt={activeImage.title}
              className="max-h-[70vh] w-full rounded-2xl object-contain"
            />

            <div className="p-4 sm:p-6">
              <span className="text-xs font-bold tracking-widest text-gold uppercase">
                {activeImage.category}
              </span>
              <h3 className="mt-1 font-display text-2xl font-semibold text-foreground">
                {activeImage.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {activeImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
