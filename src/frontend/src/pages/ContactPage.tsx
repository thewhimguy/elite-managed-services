import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Loader2, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { toast } from "sonner";
import { ServiceInterest } from "../backend.d";
import { useSubmitEnquiry } from "../hooks/useQueries";

const serviceOptions = [
  { value: ServiceInterest.sezServices, label: "SEZ Services" },
  { value: ServiceInterest.stpi, label: "STPI" },
  { value: ServiceInterest.hundredPercentEOU, label: "100% EOU" },
  { value: ServiceInterest.dgft, label: "DGFT" },
  { value: ServiceInterest.gstRelated, label: "GST Related" },
  {
    value: ServiceInterest.incomeTaxReturn,
    label: "Individual Income Tax Return",
  },
  { value: ServiceInterest.payrollServices, label: "Payroll Services" },
  {
    value: ServiceInterest.labourLawCompliances,
    label: "Labour Law Compliances",
  },
  { value: ServiceInterest.general, label: "General Enquiry" },
];

export function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceInterest, setServiceInterest] = useState<ServiceInterest | "">(
    "",
  );
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const { mutate: submitEnquiry, isPending, isError } = useSubmitEnquiry();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!serviceInterest) {
      toast.error("Please select a service of interest.");
      return;
    }
    submitEnquiry(
      {
        name,
        email,
        phone,
        message,
        serviceInterest: serviceInterest as ServiceInterest,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          toast.success(
            "Your enquiry has been submitted. We will contact you shortly.",
          );
          setName("");
          setEmail("");
          setPhone("");
          setServiceInterest("");
          setMessage("");
        },
        onError: () => {
          toast.error(
            "Failed to submit enquiry. Please try again or contact us directly.",
          );
        },
      },
    );
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Reach out to our team for a free consultation on your compliance needs."
        bgImage="/assets/generated/hero-banner.dim_1200x480.jpg"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left: Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="h-0.5 w-8"
                  style={{ backgroundColor: "oklch(var(--gold))" }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "oklch(var(--gold))" }}
                >
                  Reach Us
                </span>
              </div>
              <h2
                className="text-2xl md:text-3xl font-display mb-6"
                style={{ color: "oklch(var(--navy))" }}
              >
                Get in Touch
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of compliance experts is ready to assist you. Fill in
                the form and we will get back to you within 24 hours, or reach
                us directly at the details below.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "oklch(var(--navy) / 0.08)" }}
                  >
                    <MapPin
                      className="w-5 h-5"
                      style={{ color: "oklch(var(--navy))" }}
                    />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm mb-1"
                      style={{ color: "oklch(var(--navy))" }}
                    >
                      Office Address
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Elite Managed Services, India
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "oklch(var(--navy) / 0.08)" }}
                  >
                    <Phone
                      className="w-5 h-5"
                      style={{ color: "oklch(var(--navy))" }}
                    />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm mb-1"
                      style={{ color: "oklch(var(--navy))" }}
                    >
                      Phone
                    </p>
                    <p className="text-muted-foreground text-sm">
                      +91 XXXXX XXXXX
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "oklch(var(--navy) / 0.08)" }}
                  >
                    <Mail
                      className="w-5 h-5"
                      style={{ color: "oklch(var(--navy))" }}
                    />
                  </div>
                  <div>
                    <p
                      className="font-semibold text-sm mb-1"
                      style={{ color: "oklch(var(--navy))" }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:info@elitemanagedservices.in"
                      className="text-sm transition-colors hover:text-navy"
                      style={{ color: "oklch(var(--navy))" }}
                    >
                      info@elitemanagedservices.in
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="mt-10 p-6 rounded-xl"
                style={{
                  backgroundColor: "oklch(var(--secondary))",
                  border: "1px solid oklch(var(--border))",
                }}
              >
                <p
                  className="text-sm font-semibold mb-2"
                  style={{ color: "oklch(var(--navy))" }}
                >
                  Office Hours
                </p>
                <p className="text-muted-foreground text-sm">
                  Monday – Saturday: 9:00 AM – 6:00 PM IST
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  Sunday: Closed
                </p>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div
                className="p-8 rounded-2xl shadow-lg"
                style={{
                  border: "1px solid oklch(var(--border))",
                  backgroundColor: "white",
                }}
              >
                {submitted && (
                  <div
                    data-ocid="contact.success_state"
                    className="mb-6 p-4 rounded-xl flex items-center gap-3"
                    style={{
                      backgroundColor: "oklch(0.92 0.08 140 / 0.15)",
                      border: "1px solid oklch(0.7 0.15 140 / 0.3)",
                    }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                    <p className="text-sm text-green-700 font-medium">
                      Enquiry submitted successfully! We'll be in touch soon.
                    </p>
                  </div>
                )}

                {isError && (
                  <div
                    data-ocid="contact.error_state"
                    className="mb-6 p-4 rounded-xl"
                    style={{
                      backgroundColor: "oklch(0.95 0.05 27 / 0.15)",
                      border: "1px solid oklch(0.7 0.15 27 / 0.3)",
                    }}
                  >
                    <p className="text-sm text-red-700">
                      Failed to submit. Please try again.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        data-ocid="contact.name.input"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your full name"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        data-ocid="contact.email.input"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      data-ocid="contact.phone.input"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <Label className="text-sm font-medium">
                      Service of Interest{" "}
                      <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      value={serviceInterest}
                      onValueChange={(val) =>
                        setServiceInterest(val as ServiceInterest)
                      }
                    >
                      <SelectTrigger data-ocid="contact.service.select">
                        <SelectValue placeholder="Select a service..." />
                      </SelectTrigger>
                      <SelectContent>
                        {serviceOptions.map((opt) => (
                          <SelectItem key={opt.value} value={opt.value}>
                            {opt.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      data-ocid="contact.message.textarea"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                    />
                  </div>

                  <Button
                    type="submit"
                    data-ocid="contact.submit.button"
                    disabled={isPending}
                    className="w-full font-semibold py-3"
                    style={{
                      backgroundColor: "oklch(var(--navy))",
                      color: "white",
                    }}
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        <span data-ocid="contact.loading_state">
                          Submitting...
                        </span>
                      </>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
