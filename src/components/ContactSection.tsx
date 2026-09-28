import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Linkedin, Instagram, Youtube, Twitter, Sparkles, Loader2 } from "lucide-react";
import { founder } from "@/data/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setErrorMessage("Please complete all required fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    // Simulate reliable dispatch
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-32 bg-card/25 border-t border-border/60">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Direct Channel"
          title="Connect with Pradip Jadhav"
          subtitle="Whether proposing a strategic alliance, inviting a keynote speaker, or seeking mentorship — our executive desk reviews every message."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="space-y-8 lg:col-span-5">
            <Reveal>
              <div className="surface-card rounded-3xl p-8 sm:p-10 space-y-8">
                <div>
                  <h3 className="font-display text-2xl font-semibold text-foreground">
                    Executive Office
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Direct communications channels for business, press, and institutional partnerships.
                  </p>
                </div>

                <div className="space-y-6">
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
                        Email Address
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
                        Direct Phone / WhatsApp
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
                    Social & Leadership Profiles
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

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="surface-card rounded-3xl p-8 sm:p-10 border border-gold/30">
                <div className="flex items-center gap-2 text-gold">
                  <Sparkles className="size-4" />
                  <span className="text-xs font-semibold tracking-widest uppercase">
                    Direct Inquiry Form
                  </span>
                </div>

                <h3 className="mt-3 font-display text-2xl font-semibold text-foreground sm:text-3xl">
                  Send a Message
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Our executive team typically responds within 24 business hours.
                </p>

                {status === "success" ? (
                  <div className="mt-8 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center animate-reveal">
                    <CheckCircle2 className="mx-auto size-10 text-emerald-400" />
                    <h4 className="mt-3 font-display text-xl font-semibold text-foreground">
                      Message Received
                    </h4>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Thank you for reaching out. Pradip Jadhav's executive desk has received your note and will be in touch shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-6 inline-flex rounded-full border border-gold/40 px-6 py-2 text-xs font-semibold tracking-wider text-gold uppercase transition-colors hover:bg-gold hover:text-primary-foreground"
                    >
                      Send Another Message
                    </button>
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

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-xs font-semibold tracking-wider text-foreground/90 uppercase mb-2"
                      >
                        Inquiry Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Partnership / Speaking / Advisory / General"
                        className="w-full rounded-xl border border-border bg-background/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold tracking-wider text-foreground/90 uppercase mb-2"
                      >
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please share details regarding your initiative or proposal..."
                        className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="group flex w-full items-center justify-center gap-2 rounded-full border border-gold bg-gradient-to-r from-gold via-amber-400 to-gold py-4 text-xs font-semibold tracking-widest text-primary-foreground uppercase shadow-lg shadow-gold/20 transition-all duration-300 hover:shadow-gold disabled:opacity-70"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="size-4 animate-spin" />
                          <span>Sending message...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="size-4 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
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
