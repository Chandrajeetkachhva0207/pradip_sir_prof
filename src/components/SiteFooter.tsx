import { ArrowUp, Heart, Sparkles, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { founder, navLinks } from "@/data/site";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-gold/15 bg-background pt-20 pb-12">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 pb-16 border-b border-border/60">
          {/* Column 1: Brand & Executive Summary */}
          <div className="lg:col-span-4 space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gold/50 bg-card/80 shadow-md shadow-gold/10">
                <img
                  src="/images/pradip-profile.jpg?v=2"
                  alt="Pradip Divansing Jadhav"
                  className="size-full object-cover object-top"
                />
              </div>
              <div>
                <span className="block font-display text-xl font-semibold tracking-wide text-foreground">
                  Pradip <span className="gold-text">Jadhav</span>
                </span>
                <span className="block text-[0.62rem] font-medium tracking-[0.22em] text-muted-foreground uppercase">
                  Founder • Visionary • Athlete
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground">
              {founder.statement}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-9 items-center justify-center rounded-xl border border-border bg-card/60 text-foreground transition-all hover:border-gold hover:text-gold"
              >
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase">
              Navigation
            </p>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-gold transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Ventures & Platforms */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase">
              Ventures & Initiatives
            </p>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li>
                <a
                  href="https://samsywellness.network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors block py-0.5"
                >
                  Samsy Wellness Network
                </a>
              </li>
              <li>
                <a
                  href="https://www.samsy.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors block py-0.5"
                >
                  Samsy Uni Pvt Ltd (IT Solutions)
                </a>
              </li>
              <li>
                <a href="#ventures" className="hover:text-gold transition-colors block py-0.5">
                  Hope Multipurpose Foundation
                </a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-gold transition-colors block py-0.5">
                  Honors & World Records
                </a>
              </li>
              <li>
                <a href="#speaking" className="hover:text-gold transition-colors block py-0.5">
                  Keynote Engagements
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Secretariat */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-semibold tracking-widest text-gold uppercase">
              Executive Desk
            </p>
            <div className="space-y-3 text-xs text-muted-foreground">
              <a
                href={`mailto:${founder.email}`}
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Mail className="size-3.5 text-gold shrink-0" />
                <span>{founder.email}</span>
              </a>
              <a
                href={`https://wa.me/${founder.whatsappNumber || "917350299243"}?text=${encodeURIComponent("Hello Pradip sir, I am reaching out through your official portfolio website.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-gold transition-colors group"
              >
                <Phone className="size-3.5 text-gold shrink-0 group-hover:scale-110 transition-transform" />
                <span>{founder.phone} (WhatsApp)</span>
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="size-3.5 text-gold shrink-0 mt-0.5" />
                <span>{founder.location}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Legal, Back to Top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} {founder.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <span className="text-border">•</span>
            <a href="#contact" className="hover:text-gold transition-colors">
              Terms & Conditions
            </a>
            <span className="text-border">•</span>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 font-medium text-gold hover:underline"
            >
              <span>Back to Top</span>
              <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
