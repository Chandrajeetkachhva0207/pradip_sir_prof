import { useState } from "react";
import { founder } from "@/data/site";
import { MessageSquare, X, ArrowUpRight } from "lucide-react";

export function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  const founderWhatsAppUrl = `https://wa.me/${founder.whatsappNumber || "917350299243"}?text=${encodeURIComponent(
    `Hello ${founder.shortName}, I am visiting your portfolio website and would like to connect with you.`
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Preview Popover */}
      {isOpen && (
        <div className="mb-3 w-80 rounded-2xl border border-emerald-500/30 bg-card/95 p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-bottom-2 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-border/60">
            <div className="flex items-center gap-2.5">
              <div className="relative flex size-9 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <WhatsAppIcon className="size-5 fill-current" />
                <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full border-2 border-background bg-emerald-500 animate-pulse" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">{founder.shortName}</p>
                <p className="text-[10px] text-emerald-400 font-medium">Founder • Direct WhatsApp</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-lg p-1 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="size-4" />
            </button>
          </div>

          <div className="my-3 rounded-xl bg-background/60 p-3 text-xs text-muted-foreground">
            <p className="text-foreground/90 font-medium mb-1">Direct Founder Line</p>
            <p className="text-[11px] leading-relaxed">
              Have a partnership proposal, speaking invite, or strategic venture inquiry? Connect directly on Founder Pradip Jadhav's WhatsApp.
            </p>
          </div>

          <a
            href={founderWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-white shadow-lg shadow-emerald-500/25 transition-all hover:bg-emerald-600 hover:shadow-emerald-500/40"
          >
            <WhatsAppIcon className="size-4 fill-current" />
            <span>Chat on WhatsApp</span>
            <ArrowUpRight className="size-3.5 opacity-80" />
          </a>
        </div>
      )}

      {/* Floating Trigger Button */}
      <div className="relative group">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Contact Founder Pradip Jadhav on WhatsApp"
          className="relative flex size-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/35 transition-all duration-300 hover:scale-105 hover:bg-emerald-600 active:scale-95 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-background"
        >
          {isOpen ? (
            <X className="size-6" />
          ) : (
            <WhatsAppIcon className="size-7 fill-current" />
          )}

          {/* Pulse Beacon */}
          <span className="absolute -top-0.5 -right-0.5 flex size-4">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-4 rounded-full border-2 border-background bg-emerald-500" />
          </span>
        </button>

        {/* Hover Tooltip when popover is closed */}
        {!isOpen && (
          <div className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-3 hidden whitespace-nowrap rounded-xl border border-border bg-card/95 px-3 py-1.5 text-xs font-medium text-foreground shadow-xl backdrop-blur-md group-hover:block transition-all animate-in fade-in">
            <span className="flex items-center gap-1.5">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
              Direct WhatsApp with Founder
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export function WhatsAppIcon({ className = "size-5 fill-current" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}
