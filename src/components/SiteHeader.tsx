import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { founder, navLinks } from "@/data/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 lg:py-5">
        <Link to="/" className="min-w-0" onClick={() => setOpen(false)}>
          <span className="block truncate font-display text-lg leading-none tracking-wide sm:text-xl">
            Pradip <span className="gold-text">Jadhav</span>
          </span>
          <span className="mt-1 block truncate text-[0.6rem] tracking-[0.3em] text-muted-foreground uppercase">
            Founder • Athlete • Mentor
          </span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="link-underline text-[0.74rem] tracking-[0.14em] text-muted-foreground uppercase transition-colors hover:text-foreground data-[status=active]:text-gold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 rounded-sm border border-border p-2.5 text-gold transition-colors hover:bg-gold-soft xl:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <div className="animate-fade-in h-[calc(100dvh-4.75rem)] overflow-y-auto border-t border-border bg-background px-6 py-8 xl:hidden">
          <nav className="flex flex-col divide-y divide-border">
            {navLinks.map((l, i) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="animate-reveal py-4 font-display text-2xl data-[status=active]:text-gold"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <p className="mt-8 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            {founder.location}
          </p>
        </div>
      ) : null}
    </header>
  );
}
