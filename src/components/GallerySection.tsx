
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

import { galleryItems } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const categories = [
  "All",
  "Keynotes",
  "Athletics",
  "Ventures",
  "Awards",
  "Mentorship",
  "Media",
] as const;

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeImage, setActiveImage] =
    useState<(typeof galleryItems)[0] | null>(null);

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <section
      id="gallery"
      className="relative overflow-hidden border-y border-border/60 bg-card/25 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Visual Chronicles"
          title="Moments & Milestones"
          subtitle="A visual journey across international tracks, leadership keynotes, corporate milestones, media features, and mentorship sessions."
        />

        {/* Filter Categories */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full border px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                selectedCategory === cat
                  ? "border-gold bg-gold text-navy shadow-md shadow-gold/20"
                  : "border-border bg-card text-muted-foreground hover:border-gold/40 hover:text-foreground"
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
                className="surface-card group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-border/70 transition-all duration-500 hover:border-gold/60 hover:shadow-gold"
              >
                {/* Image */}
                <div className="zoom-frame relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden bg-card/60 p-2">
                  {/* Blurred Background */}
                  <img
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 size-full scale-110 object-cover opacity-20 blur-xl"
                  />

                  {/* Main Image - FULL IMAGE VISIBLE */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative z-10 max-h-full max-w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                  />

                  {/* Dark Bottom Gradient */}
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-24 bg-gradient-to-t from-background/80 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="rounded-full border border-gold/30 bg-card/90 px-3 py-1 text-[0.65rem] font-bold tracking-wider text-gold uppercase shadow-sm backdrop-blur-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Zoom Button */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex size-12 items-center justify-center rounded-full border border-gold/40 bg-card/90 text-gold shadow-lg backdrop-blur-md">
                      <ZoomIn className="size-5" />
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <div className="flex flex-1 flex-col justify-between border-t border-border/60 bg-card/40 p-5">
                  <h3 className="font-display text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-gold">
                    {item.title}
                  </h3>

                  <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {item.caption}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/90 p-4 backdrop-blur-md"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative my-8 w-full max-w-5xl overflow-hidden rounded-3xl border border-gold/40 bg-card p-3 shadow-2xl sm:p-4"
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setActiveImage(null)}
              aria-label="Close modal"
              className="absolute top-5 right-5 z-30 flex size-10 items-center justify-center rounded-full border border-gold/30 bg-card/90 text-foreground shadow-lg backdrop-blur-md transition-colors hover:bg-gold hover:text-primary"
            >
              <X className="size-5" />
            </button>

            {/* Full Image */}
            <div className="flex max-h-[75vh] items-center justify-center overflow-auto rounded-2xl bg-background/40">
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="max-h-[75vh] max-w-full rounded-2xl object-contain"
              />
            </div>

            {/* Details */}
            <div className="p-4 sm:p-6">
              <span className="text-xs font-bold tracking-widest text-gold uppercase">
                {activeImage.category}
              </span>

              <h3 className="mt-1 font-display text-xl font-semibold text-foreground sm:text-2xl">
                {activeImage.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {activeImage.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}