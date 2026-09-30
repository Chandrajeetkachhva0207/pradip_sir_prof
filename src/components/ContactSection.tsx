import { useState, type FormEvent } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Linkedin,
  Sparkles,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";
import { founder } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { WhatsAppIcon } from "@/components/FloatingWhatsApp";

const INQUIRY_TOPICS = [
  "Website Development",
  "App Development",
  "Blockchain Solutions",
  "Strategic Alliance / Partnership",
  "Samsy IT Solutions & Cloud",
  "Samsy Wellness Network",
  "Hope Multipurpose Foundation",
  "Keynote Speaker / Summit",
  "Executive Mentorship & Coaching",
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

  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

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
    return `https://api.whatsapp.com/send?phone=${rawNumber}&text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus("error");
      setErrorMessage(
        "Please complete all required fields (Name, Email, Message).",
      );
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

    const whatsappUrl = getWhatsAppUrl(messageText);

    // Open WhatsApp immediately in direct response to user interaction to bypass popup blockers
    try {
      const newTab = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
        window.location.href = whatsappUrl;
      }
    } catch {
      window.location.href = whatsappUrl;
    }

    setStatus("success");
  };

  const handleCopyMessage = async () => {
    if (!lastGeneratedMessage) return;

    try {
      await navigator.clipboard.writeText(lastGeneratedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const directFounderChatUrl = getWhatsAppUrl(
    `Hello ${founder.shortName}, I am reaching out through your official portfolio website to initiate a conversation.`,
  );

  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden border-t border-border/60 bg-card/25 py-16 sm:py-20 lg:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Direct Executive Channel"
          title="Connect with Pradip Jadhav"
          subtitle="Direct communication channel routing your proposals, keynote invitations, and strategic inquiries directly to the Founder."
        />

        {/* Main Contact Layout */}
        <div className="mt-12 grid min-w-0 gap-8 sm:mt-14 sm:gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          {/* =========================================================
              LEFT COLUMN — DIRECT CONTACT INFORMATION
          ========================================================== */}
          <div className="min-w-0 space-y-8 lg:col-span-5">
            <Reveal>
              <div className="surface-card min-w-0 w-full overflow-hidden rounded-3xl p-5 sm:p-8 lg:p-10">
                {/* Heading */}
                <div className="min-w-0">
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    Executive Secretariat
                  </h3>

                  <p className="mt-2 break-words text-sm leading-relaxed text-muted-foreground">
                    Priority communications channel for institutional
                    partnerships, leadership engagements, and venture
                    investments.
                  </p>
                </div>

                {/* Contact Details */}
                <div className="mt-7 space-y-6 sm:mt-8">
                  {/* WhatsApp Direct Card */}
                  <div className="min-w-0 w-full overflow-hidden rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 sm:p-5">
                    {/* WhatsApp Header */}
                    <div className="flex min-w-0 flex-wrap items-start justify-between gap-3">
                      <div className="flex min-w-0 items-center gap-2.5">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/20">
                          <WhatsAppIcon className="size-5 fill-current" />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-400 sm:text-xs sm:tracking-wider">
                            Direct WhatsApp Line
                          </p>

                          <p className="break-words text-sm font-semibold text-foreground">
                            {founder.phone}
                          </p>
                        </div>
                      </div>

                      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-medium text-emerald-400">
                        <span className="size-1.5 shrink-0 animate-pulse rounded-full bg-emerald-400" />
                        Active
                      </span>
                    </div>

                    {/* WhatsApp Description */}
                    <p className="mt-3 break-words text-xs leading-relaxed text-muted-foreground">
                      Instant direct route to Founder Pradip Jadhav. Typical
                      response within 2-4 business hours.
                    </p>

                    {/* WhatsApp Button */}
                    <a
                      href={directFounderChatUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-11 w-full min-w-0 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-3 py-2.5 text-center text-xs font-semibold text-white shadow-md shadow-emerald-500/20 transition-colors hover:bg-emerald-600"
                    >
                      <WhatsAppIcon className="size-4 shrink-0 fill-current" />

                      <span className="min-w-0 break-words">
                        Start Instant WhatsApp Chat
                      </span>

                      <ExternalLink className="size-3.5 shrink-0" />
                    </a>
                  </div>


                  {/* Samsy Wellness Network Email */}
                  <a
                    href={`mailto:${founder.secondaryEmail}`}
                    className="group flex min-w-0 items-start gap-4 transition-colors"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold transition-all group-hover:bg-gold group-hover:text-primary-foreground">
                      <Mail className="size-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Samsy Wellness Network
                      </p>

                      <p className="mt-0.5 break-all text-sm font-medium text-foreground transition-colors group-hover:text-gold">
                        {founder.secondaryEmail}
                      </p>
                    </div>
                  </a>

                  {/* Phone */}
                  <a
                    href={`tel:${founder.phone}`}
                    className="group flex min-w-0 items-start gap-4 transition-colors"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold transition-all group-hover:bg-gold group-hover:text-primary-foreground">
                      <Phone className="size-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Executive Desk Phone
                      </p>

                      <p className="mt-0.5 break-words text-sm font-medium text-foreground transition-colors group-hover:text-gold">
                        {founder.phone}
                      </p>
                    </div>
                  </a>

                  {/* Location */}
                  <div className="flex min-w-0 items-start gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                      <MapPin className="size-5" />
                    </div>

                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        Headquarters & Base
                      </p>

                      <p className="mt-0.5 break-words text-sm font-medium text-foreground">
                        {founder.location}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="mt-8 border-t border-border/70 pt-6">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gold">
                    Official Leadership Profiles
                  </p>

                  <div className="flex items-center gap-3">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn Profile"
                      className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card/60 text-foreground transition-all hover:border-gold hover:bg-gold hover:text-primary-foreground"
                    >
                      <Linkedin className="size-4" />
                    </a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* =========================================================
              RIGHT COLUMN — CONTACT FORM
          ========================================================== */}
          <div className="min-w-0 lg:col-span-7">
            <Reveal delay={120}>
              <div className="surface-card min-w-0 w-full overflow-hidden rounded-3xl border border-gold/30 p-5 sm:p-8 lg:p-10">
                {/* Form Header */}
                <div className="flex min-w-0 flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-center gap-2 text-gold">
                    <Sparkles className="size-4 shrink-0" />

                    <span className="text-xs font-semibold uppercase tracking-widest">
                      Inquiry Dispatch Form
                    </span>
                  </div>

                  <div className="flex max-w-full min-w-0 items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold text-emerald-400 sm:text-[11px]">
                    <WhatsAppIcon className="size-3.5 shrink-0 fill-current" />

                    <span className="min-w-0 break-words">
                      Dispatches directly to Founder's WhatsApp
                    </span>
                  </div>
                </div>

                {/* Form Title */}
                <h3 className="mt-4 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  Send Your Inquiry
                </h3>

                <p className="mt-1 break-words text-sm leading-relaxed text-muted-foreground">
                  Your message is packaged into a structured brief and
                  delivered directly to Founder Pradip Jadhav's WhatsApp for
                  priority review.
                </p>

                {/* =====================================================
                    SUCCESS STATE
                ====================================================== */}
                {status === "success" ? (
                  <div className="mt-8 min-w-0 space-y-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-5 text-center animate-reveal sm:p-8">
                    {/* WhatsApp Icon */}
                    <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 ring-8 ring-emerald-500/10">
                      <WhatsAppIcon className="size-9 fill-current" />
                    </div>

                    <div className="min-w-0">
                      <div className="mb-1 inline-flex max-w-full flex-wrap items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400">
                        <CheckCircle2 className="size-4 shrink-0" />
                        <span>Inquiry Structured & Dispatched</span>
                      </div>

                      <h4 className="break-words font-display text-2xl font-semibold text-foreground">
                        Ready on WhatsApp for Founder Review
                      </h4>

                      <p className="mx-auto mt-2 max-w-lg break-words text-sm leading-relaxed text-muted-foreground">
                        We triggered WhatsApp to connect you directly with{" "}
                        <strong className="text-foreground">
                          Founder Pradip Jadhav
                        </strong>{" "}
                        at{" "}
                        <span className="break-all font-mono text-gold">
                          {founder.phone}
                        </span>
                        .
                      </p>
                    </div>

                    {/* Fallback Buttons */}
                    <div className="flex min-w-0 flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
                      <a
                        href={getWhatsAppUrl(lastGeneratedMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-white shadow-lg shadow-emerald-500/30 transition-all hover:bg-emerald-600 sm:w-auto sm:px-6"
                      >
                        <WhatsAppIcon className="size-4 shrink-0 fill-current" />

                        <span className="break-words">
                          Open WhatsApp Chat Now
                        </span>

                        <ExternalLink className="size-3.5 shrink-0" />
                      </a>

                      <button
                        type="button"
                        onClick={handleCopyMessage}
                        className="inline-flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-full border border-gold/40 bg-card/60 px-4 py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-primary-foreground sm:w-auto sm:px-6"
                      >
                        {copied ? (
                          <>
                            <Check className="size-4 shrink-0 text-emerald-400" />
                            <span>Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="size-4 shrink-0" />
                            <span>Copy Formatted Message</span>
                          </>
                        )}
                      </button>
                    </div>

                    {/* Message Preview */}
                    <div className="max-h-48 min-w-0 overflow-x-hidden overflow-y-auto rounded-xl border border-border/70 bg-background/80 p-4 text-left font-mono text-xs leading-relaxed text-muted-foreground">
                      <pre className="whitespace-pre-wrap break-words font-mono">
                        {lastGeneratedMessage}
                      </pre>
                    </div>

                    {/* Send Another */}
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
                        className="text-xs text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
                      >
                        Send Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  /* =====================================================
                      FORM
                  ====================================================== */
                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 min-w-0 space-y-5"
                  >
                    {/* Error */}
                    {status === "error" && (
                      <div className="flex min-w-0 items-start gap-2 rounded-xl border border-destructive/40 bg-destructive/10 p-3.5 text-xs text-destructive-foreground">
                        <AlertCircle className="mt-0.5 size-4 shrink-0" />

                        <span className="min-w-0 break-words">
                          {errorMessage}
                        </span>
                      </div>
                    )}

                    {/* Name + Email */}
                    <div className="grid min-w-0 gap-5 sm:grid-cols-2">
                      {/* Name */}
                      <div className="min-w-0">
                        <label
                          htmlFor="name"
                          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/90"
                        >
                          Full Name *
                        </label>

                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              name: e.target.value,
                            })
                          }
                          placeholder="e.g. Dr. Sameer Verma"
                          className="box-border block w-full min-w-0 max-w-full rounded-xl border border-border bg-background/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>

                      {/* Email */}
                      <div className="min-w-0">
                        <label
                          htmlFor="email"
                          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/90"
                        >
                          Email Address *
                        </label>

                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              email: e.target.value,
                            })
                          }
                          placeholder="sameer@example.com"
                          className="box-border block w-full min-w-0 max-w-full rounded-xl border border-border bg-background/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>
                    </div>

                    {/* Phone + Subject */}
                    <div className="grid min-w-0 gap-5 sm:grid-cols-2">
                      {/* Phone */}
                      <div className="min-w-0">
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/90"
                        >
                          Your WhatsApp / Phone (Optional)
                        </label>

                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value,
                            })
                          }
                          placeholder="+91 98765 43210"
                          className="box-border block w-full min-w-0 max-w-full rounded-xl border border-border bg-background/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        />
                      </div>

                      {/* Subject */}
                      <div className="min-w-0">
                        <label
                          htmlFor="subject"
                          className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/90"
                        >
                          Inquiry Category
                        </label>

                        <select
                          id="subject"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          className="box-border block w-full min-w-0 max-w-full rounded-xl border border-border bg-background/90 px-4 py-3.5 text-sm text-foreground focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                        >
                          {INQUIRY_TOPICS.map((topic) => (
                            <option
                              key={topic}
                              value={topic}
                              className="bg-popover text-popover-foreground"
                            >
                              {topic}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Quick Topic Chips */}
                    <div className="min-w-0">
                      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Quick Select Purpose:
                      </p>

                      <div className="flex min-w-0 flex-wrap gap-2">
                        {INQUIRY_TOPICS.map((topic) => (
                          <button
                            key={topic}
                            type="button"
                            onClick={() =>
                              setFormData({
                                ...formData,
                                subject: topic,
                              })
                            }
                            className={`max-w-full rounded-lg px-2.5 py-1 text-left text-xs transition-all ${
                              formData.subject === topic
                                ? "bg-gold font-medium text-primary-foreground shadow-sm"
                                : "border border-border bg-card/70 text-muted-foreground hover:border-gold/50 hover:text-foreground"
                            }`}
                          >
                            <span className="break-words">{topic}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="min-w-0">
                      <label
                        htmlFor="message"
                        className="mb-2 block text-xs font-semibold uppercase tracking-wider text-foreground/90"
                      >
                        Proposal or Message Brief *
                      </label>

                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            message: e.target.value,
                          })
                        }
                        placeholder="Please detail your proposal, event dates, speaking topic, or venture objective..."
                        className="box-border block w-full min-w-0 max-w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                    </div>

                    {/* Security Note */}
                    <div className="flex min-w-0 items-start gap-2 text-xs leading-relaxed text-muted-foreground">
                      <ShieldCheck className="mt-0.5 size-4 shrink-0 text-emerald-400" />

                      <span className="min-w-0 break-words">
                        Submitting directly formats and routes this inquiry to
                        Founder Pradip Jadhav via WhatsApp.
                      </span>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group flex min-h-12 w-full min-w-0 items-center justify-center gap-2 rounded-full border border-emerald-400 bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-500 px-3 py-4 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:shadow-emerald-500/40 hover:brightness-105 disabled:opacity-70 sm:gap-2.5 sm:px-4 sm:text-xs sm:tracking-widest"
                    >
                      <WhatsAppIcon className="size-5 shrink-0 fill-current" />

                      <span className="min-w-0 break-words">
                        Send via WhatsApp to Founder
                      </span>

                      <Send className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
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