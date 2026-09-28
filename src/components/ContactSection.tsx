import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Linkedin,
  Instagram,
  Youtube,
  Twitter,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { founder } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppIcon } from "@/components/FloatingWhatsApp";

const INQUIRY_TOPICS = [
  "Strategic Alliance / Partnership",
  "Keynote Speaker / Summit",
  "Executive Mentorship & Coaching",
  "Samsy Wellness & Ventures",
  "Media, Press & Interview",
  "General Executive Inquiry",
] as const;

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: INQUIRY_TOPICS[0] as string,
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [lastGeneratedMessage, setLastGeneratedMessage] = useState("");

  const formatWhatsAppMessage = (data: typeof formData) => {
    return [
      `🌟 *EXECUTIVE INQUIRY FOR PRADIP JADHAV*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Name:* ${data.name.trim()}`,
      `📧 *Email:* ${data.email.trim()}`,
      `📱 *Phone / WA:* ${data.phone.trim() || "Not provided"}`,
      `🎯 *Subject:* ${data.subject}`,
      ``,
      `💬 *Message:*`,
      `${data.message.trim()}`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `🌐 _Sent via pradipjadhav.com official portfolio_`,
    ].join("\n");
  };

  const getWhatsAppUrl = (text: string) => {
    const rawNumber = founder.whatsappNumber || "917350299243";
    return `https://wa.me/${rawNumber}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields (Name, Email, Message).");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    const messageText = formatWhatsAppMessage(formData);
    setLastGeneratedMessage(messageText);

    // Direct WhatsApp routing to Founder
    const whatsappUrl = getWhatsAppUrl(messageText);

    // Slight delay for smooth visual transition
    setTimeout(() => {
      // Try opening WhatsApp in a new tab/window
      try {
        const opened = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
        if (!opened) {
          // Popup blocked, will be accessible via prominent fallback CTA
          console.warn("Popup blocked; direct button provided in UI.");
        }
      } catch (err) {
        console.error("Failed to open WhatsApp window", err);
      }

      setStatus("success");
    }, 450);
  };

  const handleCopyMessage = async () => {
    if (!lastGeneratedMessage) return;
    try {
      await navigator.clipboard.writeText(lastGeneratedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  const directFounderChatUrl = getWhatsAppUrl(
    `Hello ${founder.shortName}, I am reaching out through your official portfolio website to initiate a conversation.`
  );

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32 bg-card/25 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Direct Executive Channel"
          title="Connect with Pradip Jadhav"
          subtitle="Direct communication channel routing your proposals, keynote invitations, and strategic inquiries directly to the Founder."
        />

        {/* Pipeline Process Strip: Visitor → Contact Form → WhatsApp → Founder */}
        <Reveal>
          <div className="mt-10 mx-auto max-w-4xl rounded-2xl border border-gold/30 bg-card/60 p-4 sm:p-5 backdrop-blur-md">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium">
              <span className="text-gold font-semibold uppercase tracking-widest text-[11px] flex items-center gap-1.5">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                Live Routing Pipeline:
              </span>
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center text-foreground/90">
                <span className="rounded-lg bg-gold/15 px-3 py-1 text-gold border border-gold/30 font-semibold">
                  1. Visitor
                </span>
                <ArrowRight className="size-3.5 text-muted-foreground" />
                <span className="rounded-lg bg-gold/15 px-3 py-1 text-gold border border-gold/30 font-semibold">
                  2. Contact Form
                </span>
                <ArrowRight className="size-3.5 text-muted-foreground" />
                <span className="rounded-lg bg-emerald-500/20 px-3 py-1 text-emerald-400 border border-emerald-500/40 font-semibold flex items-center gap-1.5">
                  <WhatsAppIcon className="size-3.5 fill-current" />
                  3. WhatsApp
                </span>
                <ArrowRight className="size-3.5 text-muted-foreground" />
                <span className="rounded-lg bg-gold/20 px-3 py-1 text-gold border border-gold/40 font-semibold">
                  4. Founder Desk
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="space-y-8 lg:col-span-5">
            <Reveal>
              <div className="surface-card rounded-3xl p-8 sm:p-10 space-y-8">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    Executive Secretariat
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Priority communications channel for institutional partnerships, leadership engagements, and venture investments.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* WhatsApp Direct Card */}
                  <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20">
                          <WhatsAppIcon className="size-5 fill-current" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                            Direct WhatsApp Line
                          </p>
                          <p className="text-sm font-semibold text-foreground">
                            {founder.phone}
                          </p>
                        </div>
                      </div>
                      <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-medium text-emerald-400">
                        <span className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Active
                      </span>
                    </div>

                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Instant direct route to Founder Pradip Jadhav. Typical response within 2-4 business hours.
                    </p>

                    <a
                      href={directFounderChatUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-white shadow-md shadow-emerald-500/20 hover:bg-emerald-600 transition-colors"
                    >
                      <WhatsAppIcon className="size-4 fill-current" />
                      <span>Start Instant WhatsApp Chat</span>
                      <ExternalLink className="size-3.5" />
                    </a>
                  </div>

                  {/* Email */}
                  <a
                    href={`mailto:${founder.email}`}
                    className="flex items-start gap-4 group transition-colors"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-all">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        Email Secretariat
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                        {founder.email}
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${founder.phone}`}
                    className="flex items-start gap-4 group transition-colors"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold group-hover:bg-gold group-hover:text-primary-foreground transition-all">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        Executive Desk Phone
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                        {founder.phone}
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
                        Headquarters & Base
                      </p>
                      <p className="mt-0.5 text-sm font-medium text-foreground">
                        {founder.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="border-t border-border/70 pt-6">
                  <p className="text-xs font-semibold tracking-widest text-gold uppercase mb-4">
                    Official Leadership Profiles
                  </p>
                  <div className="flex items-center gap-3">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="flex size-10 items-center justify-center rounded-xl border border-border bg-card/60 text-foreground transition-all hover:border-gold hover:bg-gold hover:text-primary-foreground"
                    >
                      <Linkedin className="size-4" />
                    </a>
                    <a
                      href={founder.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram Profile"
                      className="flex size-10 items-center justify-center rounded-xl border border-border bg-card/60 text-foreground transition-all hover:border-gold hover:bg-gold hover:text-primary-foreground"
                    >
                      <Instagram className="size-4" />
                    </a>
                    <a
                      href={founder.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube Channel"
                      className="flex size-10 items-center justify-center rounded-xl border border-border bg-card/60 text-foreground transition-all hover:border-gold hover:bg-gold hover:text-primary-foreground"
                    >
                      <Youtube className="size-4" />
                    </a>
                    <a
                      href={founder.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter / X Profile"
                      className="flex size-10 items-center justify-center rounded-xl border border-border bg-card/60 text-foreground transition-all hover:border-gold hover:bg-gold hover:text-primary-foreground"
                    >
                      <Twitter className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Contact Form with Direct WhatsApp Dispatch */}
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="surface-card rounded-3xl p-8 sm:p-10 border border-gold/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gold">
                    <Sparkles className="size-4" />
                    <span className="text-xs font-semibold tracking-widest uppercase">
                      Inquiry Dispatch Form
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[11px] font-semibold text-emerald-400">
                    <WhatsAppIcon className="size-3.5 fill-current" />
                    <span>Dispatches directly to Founder's WhatsApp</span>
                  </div>
                </div>

                <h3 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  Send Your Inquiry
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Your message is packaged into a structured brief and delivered directly to Founder Pradip Jadhav's WhatsApp for priority review.
                </p>

                {status === "success" ? (
                  <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 sm:p-8 text-center animate-reveal space-y-6">
                    <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 ring-8 ring-emerald-500/10">
                      <WhatsAppIcon className="size-9 fill-current" />
                    </div>

                    <div>
                      <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                        <CheckCircle2 className="size-4" />
                        Inquiry Structured & Dispatched
                      </div>
                      <h4 className="font-display text-2xl font-semibold text-foreground">
                        Ready on WhatsApp for Founder Review
                      </h4>
                      <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
                        We triggered WhatsApp to connect you directly with <strong className="text-foreground">Founder Pradip Jadhav</strong> at <span className="text-gold font-mono">{founder.phone}</span>.
                      </p>
                    </div>

                    {/* Fallback button if popup blocked or switching devices */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                      <a
                        href={getWhatsAppUrl(lastGeneratedMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-emerald-500 px-6 py-3.5 text-xs font-semibold text-white uppercase tracking-wider shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-600 hover:scale-102"
                      >
                        <WhatsAppIcon className="size-4 fill-current" />
                        <span>Open WhatsApp Chat Now</span>
                        <ExternalLink className="size-3.5" />
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyMessage}
                        className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-gold/40 bg-card/60 px-6 py-3.5 text-xs font-semibold text-gold uppercase tracking-wider transition-colors hover:bg-gold hover:text-primary-foreground"
                      >
                        {copied ? (
                          <>
                            <Check className="size-4 text-emerald-400" />
                            <span>Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-4" />
                            <span>Copy Formatted Message</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Summary Preview */}
                    <div className="rounded-xl border border-border/70 bg-background/80 p-4 text-left font-mono text-xs text-muted-foreground whitespace-pre-wrap max-h-48 overflow-y-auto">
                      {lastGeneratedMessage}
                    </div>

                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => {
                          setStatus("idle");
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            subject: INQUIRY_TOPICS[0],
                            message: "",
                          });
                        }}
                        className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                    {status === "error" && (
                      <div className="flex items-center gap-2 rounded-xl border border-destructive/40 bg-destructive/10 p-3.5 text-xs text-destructive-foreground">
                        <AlertCircle className="size-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* Name */}
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs font-semibold tracking-wider text-foreground/90 uppercase mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Dr. Sameer Verma"
                          className="w-full rounded-xl border border-border bg-background/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs font-semibold tracking-wider text-foreground/90 uppercase mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="sameer@example.com"
                          className="w-full rounded-xl border border-border bg-background/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      {/* Phone / WhatsApp */}
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs font-semibold tracking-wider text-foreground/90 uppercase mb-2"
                        >
                          Your WhatsApp / Phone (Optional)
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-xl border border-border bg-background/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>

                      {/* Subject Selection */}
                      <div>
                        <label
                          htmlFor="subject"
                          className="block text-xs font-semibold tracking-wider text-foreground/90 uppercase mb-2"
                        >
                          Inquiry Category
                        </label>
                        <select
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full rounded-xl border border-border bg-background/90 px-4 py-3.5 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        >
                          {INQUIRY_TOPICS.map((topic) => (
                            <option key={topic} value={topic} className="bg-popover text-popover-foreground">
                              {topic}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Quick Topic Chips */}
                    <div>
                      <p className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Quick Select Purpose:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {INQUIRY_TOPICS.map((topic) => (
                          <button
                            key={topic}
                            type="button"
                            onClick={() => setFormData({ ...formData, subject: topic })}
                            className={`rounded-lg px-2.5 py-1 text-xs transition-all ${
                              formData.subject === topic
                                ? "bg-gold text-primary-foreground font-medium shadow-sm"
                                : "bg-card/70 border border-border text-muted-foreground hover:text-foreground hover:border-gold/50"
                            }`}
                          >
                            {topic}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold tracking-wider text-foreground/90 uppercase mb-2"
                      >
                        Proposal or Message Brief *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please detail your proposal, event dates, speaking topic, or venture objective..."
                        className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                    </div>

                    {/* Security & Direct Assurance note */}
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ShieldCheck className="size-4 text-emerald-400 shrink-0" />
                      <span>
                        Submitting directly formats and routes this inquiry to Founder Pradip Jadhav via WhatsApp.
                      </span>
                    </div>

                    {/* Submit via WhatsApp CTA */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group flex w-full items-center justify-center gap-2.5 rounded-full border border-emerald-400 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 py-4 text-xs font-semibold tracking-widest text-white uppercase shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-emerald-500/40 hover:brightness-105 disabled:opacity-70"
                    >
                      <WhatsAppIcon className="size-5 fill-current" />
                      <span>Send via WhatsApp to Founder</span>
                      <Send className="size-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
