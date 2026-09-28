import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Linkedin, Mail, Youtube } from "lucide-react";
import { founder, navLinks } from "@/data/site";
import { ButtonAction } from "./ui/button-link";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1.2fr]">
        <div>
          <p className="font-display text-2xl">
            Pradip Divansing <span className="gold-text">Jadhav</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {founder.statement}
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: founder.linkedin, Icon: Linkedin, label: "LinkedIn" },
              { href: founder.instagram, Icon: Instagram, label: "Instagram" },
              { href: founder.youtube, Icon: Youtube, label: "YouTube" },
              { href: `mailto:${founder.email}`, Icon: Mail, label: "Email" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="rounded-sm border border-border p-2.5 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="eyebrow">Quick links</p>
          <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="link-underline text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow">Newsletter</p>
          <p className="mt-5 text-sm text-muted-foreground">
            Occasional notes on leadership, wellness and discipline.
          </p>
          <form
            className="mt-5 flex flex-col gap-3 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              setDone(true);
              setEmail("");
            }}
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="min-w-0 flex-1 rounded-sm border border-input bg-muted/40 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-gold"
            />
            <ButtonAction type="submit" className="shrink-0">
              Join
            </ButtonAction>
          </form>
          {done ? <p className="mt-3 text-sm text-gold">Thank you — you're on the list.</p> : null}
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-6 py-6 text-xs tracking-[0.16em] text-muted-foreground uppercase">
          © {new Date().getFullYear()} {founder.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
