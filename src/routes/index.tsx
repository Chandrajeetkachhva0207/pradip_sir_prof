import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { JourneyTimeline } from "@/components/JourneyTimeline";
import { VisionMission } from "@/components/VisionMission";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { VenturesSection } from "@/components/VenturesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { MediaSection } from "@/components/MediaSection";
import { GallerySection } from "@/components/GallerySection";
import { EventsSection } from "@/components/EventsSection";
import { QuoteSection } from "@/components/QuoteSection";
import { CtaSection } from "@/components/CtaSection";
import { ContactSection } from "@/components/ContactSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pradip Divansing Jadhav — Founder, International Athlete, Mentor" },
      {
        name: "description",
        content:
          "Official personal brand and executive portfolio of Pradip Divansing Jadhav — Founder of Samsy Wellness Network and Samsy Uni Private Limited, former international athlete, and mentor.",
      },
      {
        property: "og:title",
        content: "Pradip Divansing Jadhav — Founder, International Athlete, Mentor",
      },
      {
        property: "og:description",
        content:
          "Official personal brand and executive portfolio of Pradip Divansing Jadhav — Founder of Samsy Wellness Network and Samsy Uni Private Limited.",
      },
      {
        property: "og:image",
        content: "/images/founder-portrait.jpg",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="relative">
      {/* 2. Hero Section */}
      <HeroSection />

      {/* 3. Founder Introduction / About */}
      <AboutSection />

      {/* 4. Founder Journey */}
      <JourneyTimeline />

      {/* 5. Vision & Mission */}
      <VisionMission />

      {/* 6. Leadership / Expertise */}
      <ExpertiseSection />

      {/* 7. Achievements & Recognition */}
      <AchievementsSection />

      {/* 8. Experience */}
      <ExperienceSection />

      {/* 9. Projects / Ventures */}
      <VenturesSection />

      {/* 10. Testimonials */}
      <TestimonialsSection />

      {/* 11. Media / Featured In */}
      <MediaSection />

      {/* 12. Gallery */}
      <GallerySection />

      {/* 13. Speaking / Events */}
      <EventsSection />

      {/* 14. Founder Quote */}
      <QuoteSection />

      {/* 15. Call To Action */}
      <CtaSection />

      {/* 16. Contact Section */}
      <ContactSection />
    </div>
  );
}
