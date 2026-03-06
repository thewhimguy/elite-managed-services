import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  AlertCircle,
  CheckCircle,
  Globe,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  User,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { useSubmitInquiry } from "../hooks/useQueries";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const mutation = useSubmitInquiry();

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    try {
      await mutation.mutateAsync({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      });
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      // error state handled via mutation.isError
    }
  }

  return (
    <section
      id="contact"
      data-ocid="contact.section"
      className="section-padding bg-cream relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-[0.03]"
          style={{
            background:
              "radial-gradient(ellipse at right top, oklch(0.23 0.09 250), transparent 60%)",
          }}
        />
      </div>

      <div className="container-wide relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-gold font-body font-semibold text-sm tracking-widest uppercase mb-3">
            Get In Touch
          </span>
          <h2 className="heading-lg text-navy mb-4">Contact Us</h2>
          <div className="section-divider" />
          <p className="text-muted-foreground max-w-xl mx-auto font-body text-base">
            Have a compliance question? Reach out to us for a free initial
            consultation. Our experts are ready to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-navy rounded-2xl p-8 h-full">
              {/* Contact header */}
              <div className="flex items-center gap-3 mb-7">
                <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center">
                  <User className="h-6 w-6 text-navy" />
                </div>
                <div>
                  <div className="text-white font-display font-bold text-lg">
                    Prem Kumar
                  </div>
                  <div className="text-gold/80 text-xs font-body tracking-wide">
                    Business Compliance Expert
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-white/10 mb-7" />

              {/* Contact details */}
              <div className="space-y-5">
                <a
                  href="tel:9910806694"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-200">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs font-body uppercase tracking-wider mb-0.5">
                      Phone
                    </div>
                    <div className="text-white font-body font-medium group-hover:text-gold transition-colors">
                      +91 9910806694
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:prem.kumar@elites.co.in"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-200">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs font-body uppercase tracking-wider mb-0.5">
                      Email
                    </div>
                    <div className="text-white font-body font-medium text-sm group-hover:text-gold transition-colors break-all">
                      prem.kumar@elites.co.in
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:info@elitemangedservices.co.in"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-200">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs font-body uppercase tracking-wider mb-0.5">
                      Info Email
                    </div>
                    <div className="text-white font-body font-medium text-sm group-hover:text-gold transition-colors break-all">
                      info@elitemangedservices.co.in
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.elites.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-200">
                    <Globe className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs font-body uppercase tracking-wider mb-0.5">
                      Website
                    </div>
                    <div className="text-white font-body font-medium group-hover:text-gold transition-colors">
                      www.elites.co.in
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <div className="text-white/50 text-xs font-body uppercase tracking-wider mb-0.5">
                      Location
                    </div>
                    <div className="text-white font-body font-medium">
                      Delhi NCR, India
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom note */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/50 text-xs font-body leading-relaxed">
                  Available Monday to Saturday, 9:00 AM – 7:00 PM IST. Free
                  initial consultation for new clients.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div className="bg-card rounded-2xl p-8 border border-border shadow-card">
              <h3 className="heading-sm text-navy mb-1">Send Us an Inquiry</h3>
              <p className="text-muted-foreground font-body text-sm mb-7">
                Fill in the form below and we'll get back to you within 24
                hours.
              </p>

              {/* Success state */}
              {submitted && (
                <div
                  data-ocid="contact.success_state"
                  className="mb-6 flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl p-4"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-green-800 font-body font-semibold text-sm">
                      Inquiry Sent Successfully!
                    </div>
                    <div className="text-green-700 font-body text-sm mt-0.5">
                      Thank you for reaching out. Prem Kumar will contact you
                      shortly.
                    </div>
                  </div>
                </div>
              )}

              {/* Error state */}
              {mutation.isError && !submitted && (
                <div
                  data-ocid="contact.error_state"
                  className="mb-6 flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl p-4"
                >
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-red-800 font-body font-semibold text-sm">
                      Failed to Send Inquiry
                    </div>
                    <div className="text-red-700 font-body text-sm mt-0.5">
                      Please try again or contact us directly at
                      prem.kumar@elites.co.in
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="name"
                      className="text-sm font-body font-medium text-foreground"
                    >
                      Full Name <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      data-ocid="contact.input"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="font-body text-sm border-border focus:border-gold focus:ring-gold"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="email"
                      className="text-sm font-body font-medium text-foreground"
                    >
                      Email Address <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="font-body text-sm border-border focus:border-gold focus:ring-gold"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-body font-medium text-foreground"
                  >
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="font-body text-sm border-border focus:border-gold focus:ring-gold"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="message"
                    className="text-sm font-body font-medium text-foreground"
                  >
                    Message <span className="text-destructive">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your compliance requirements or questions..."
                    required
                    rows={5}
                    className="font-body text-sm border-border focus:border-gold focus:ring-gold resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={mutation.isPending}
                  className="w-full bg-navy hover:bg-navy-dark text-white font-body font-semibold py-3 rounded-full transition-all duration-200 flex items-center justify-center gap-2"
                >
                  {mutation.isPending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Inquiry
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
