import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react";
import { founder } from "@/data/site";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { label: "Home", href: "#hero", route: "/" },
  { label: "About", href: "#about", route: "/about" },
  { label: "Journey", href: "#journey", route: "/journey" },
  { label: "Vision", href: "#vision", route: "/vision" },
  { label: "Leadership", href: "#expertise", route: "/#expertise" },
  { label: "Achievements", href: "#achievements", route: "/#achievements" },
  { label: "Experience", href: "#experience", route: "/#experience" },
  { label: "Ventures", href: "#ventures", route: "/companies" },
  { label: "Media", href: "#media", route: "/#media" },
  { label: "Gallery", href: "#gallery", route: "/#gallery" },
  { label: "Contact", href: "#contact", route: "/#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);

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

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (isHome && href.startsWith("#")) {
      e.preventDefault();

      const target = document.querySelector(href);

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }

      setOpen(false);
    } else {
      setOpen(false);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gold/20 bg-background/95 py-3.5 shadow-md shadow-navy/5 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent py-5"
      }`}
    >
      {/* HEADER CONTAINER */}
      <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">

        {/* LEFT: BRAND */}
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
          onClick={() => setOpen(false)}
        >
          <div className="relative flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-gold/50 bg-card/80 shadow-md shadow-gold/10 transition-transform duration-300 group-hover:scale-105 group-hover:border-gold">
            <img
              src="/images/pradip-profile.jpg?v=2"
              alt="Pradip Divansing Jadhav"
              className="size-full object-cover object-top"
            />
            <span className="absolute -inset-0.5 rounded-full border border-gold/30 opacity-0 transition-opacity group-hover:opacity-100" />
          </div>

          <div className="min-w-0">
            <span className="block truncate font-display text-lg font-semibold tracking-wide text-foreground transition-colors group-hover:text-gold sm:text-xl">
              Pradip <span className="gold-text">Jadhav</span>
            </span>

            <span className="block truncate text-[0.6rem] font-medium tracking-[0.2em] text-muted-foreground uppercase sm:text-[0.62rem]">
              Founder • Visionary • Athlete
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-3 xl:flex 2xl:gap-4">
          {navItems.slice(0, 10).map((item) => (
            <a
              key={item.label}
              href={isHome ? item.href : `/${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className="link-underline whitespace-nowrap text-[0.64rem] font-medium tracking-[0.08em] text-muted-foreground uppercase transition-colors hover:text-foreground 2xl:text-[0.68rem] 2xl:tracking-[0.1em]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">

          {/* THEME */}
          <ThemeToggle />

          {/* CONNECT BUTTON */}
          <a
            href={isHome ? "#contact" : "/#contact"}
            onClick={(e) => handleNavClick(e, "#contact")}
            className="group relative hidden items-center gap-2 overflow-hidden rounded-full border border-gold/40 bg-gradient-to-r from-gold/15 via-gold/25 to-gold/15 px-3.5 py-2 text-[0.62rem] font-semibold tracking-[0.1em] text-gold uppercase shadow-lg shadow-gold/10 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-primary-foreground hover:shadow-gold xl:inline-flex 2xl:px-4 2xl:text-[0.68rem] 2xl:tracking-[0.13em]"
          >
            <Sparkles className="size-3.5 text-gold transition-colors group-hover:text-primary-foreground" />

            <span>Let's Connect</span>

            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* MOBILE / TABLET MENU */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card/50 text-foreground transition-colors hover:border-gold/50 hover:bg-gold/10 hover:text-gold xl:hidden"
          >
            {open ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE / TABLET DRAWER */}
      {open ? (
        <div className="animate-reveal fixed inset-x-0 top-[72px] h-[calc(100dvh-72px)] overflow-y-auto border-t border-border bg-background/95 px-6 py-8 backdrop-blur-2xl xl:hidden">
          <div className="flex flex-col divide-y divide-border/60">
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={isHome ? item.href : `/${item.href}`}
                onClick={(e) => handleNavClick(e, item.href)}
                className="flex items-center justify-between py-3.5 font-display text-xl text-foreground transition-colors hover:text-gold"
                style={{
                  animationDelay: `${idx * 30}ms`,
                }}
              >
                <span>{item.label}</span>

                <ArrowUpRight className="size-4 text-muted-foreground" />
              </a>
            ))}
          </div>

          {/* MOBILE THEME + CONNECT */}
          <div className="mt-8 space-y-4 border-t border-border pt-4">
            <div className="flex items-center justify-between px-1 py-2">
              <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                Display Theme
              </span>

              <ThemeToggle />
            </div>

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="flex w-full items-center justify-center gap-2 rounded-full border border-gold bg-gold px-6 py-3.5 text-xs font-semibold tracking-widest text-primary-foreground uppercase shadow-lg shadow-gold/20"
            >
              <Sparkles className="size-4" />

              <span>Let's Connect</span>
            </a>

            <div className="text-center text-xs text-muted-foreground">
              <p>{founder.location}</p>

              <p className="mt-1">{founder.email}</p>

              <p className="mt-0.5 text-[11px]">
                {founder.secondaryEmail}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}