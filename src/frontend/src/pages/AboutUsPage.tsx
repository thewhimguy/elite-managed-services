import { PageHero } from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase, Shield, Users } from "lucide-react";
import { motion } from "motion/react";

const values = [
  {
    icon: Shield,
    title: "Trust",
    desc: "We build long-lasting relationships through transparent, honest and ethical business practices.",
  },
  {
    icon: Award,
    title: "Quality",
    desc: "Every deliverable meets the highest professional standards — no compromises on accuracy or detail.",
  },
  {
    icon: Users,
    title: "Integrity",
    desc: "Our advice is always independent, unbiased and in the best interest of our clients.",
  },
  {
    icon: Briefcase,
    title: "Professionalism",
    desc: "Our team of seasoned experts brings deep domain knowledge and disciplined execution to every engagement.",
  },
];

export function AboutUsPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Learn about our team, values and commitment to your compliance success."
        bgImage="/assets/generated/hero-banner.dim_1200x480.jpg"
      />

      {/* Company Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
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
                Who We Are
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-display mb-6"
              style={{ color: "oklch(var(--navy))" }}
            >
              Elite Managed Services
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Elite Managed Services is a professional consultancy firm
                specializing in SEZ, STPI, DGFT, GST, Income Tax, Payroll and
                Labour Law compliance services. With years of experience, we
                provide end-to-end compliance and regulatory solutions for
                businesses across India.
              </p>
              <p>
                Founded by a team of industry veterans with decades of combined
                experience in Indian regulatory law, taxation and compliance,
                Elite Managed Services has grown into a trusted partner for
                startups, SMEs and large enterprises alike. Our clients span
                IT/ITES, manufacturing, trading and services sectors.
              </p>
              <p>
                We take pride in our ability to navigate the complex
                intersection of central and state regulations, helping our
                clients achieve full compliance while maximizing available
                incentives and exemptions. Our multi-disciplinary team of
                Chartered Accountants, Company Secretaries, Legal Experts and
                Tax Practitioners works collaboratively to deliver holistic
                solutions.
              </p>
              <p>
                At Elite Managed Services, we believe compliance is not just a
                legal obligation — it's a strategic enabler. By proactively
                managing your regulatory obligations, we help you build a
                foundation for sustainable growth, attract investment and
                operate with confidence in India's complex business environment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section
        className="py-16"
        style={{ backgroundColor: "oklch(var(--secondary))" }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div
                className="h-0.5 w-8"
                style={{ backgroundColor: "oklch(var(--gold))" }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "oklch(var(--gold))" }}
              >
                Core Principles
              </span>
              <div
                className="h-0.5 w-8"
                style={{ backgroundColor: "oklch(var(--gold))" }}
              />
            </div>
            <h2
              className="text-3xl md:text-4xl font-display"
              style={{ color: "oklch(var(--navy))" }}
            >
              Our Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.4 }}
                >
                  <Card className="h-full border-0 shadow-md text-center hover:shadow-xl transition-shadow">
                    <CardContent className="p-8">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                        style={{ backgroundColor: "oklch(var(--navy) / 0.08)" }}
                      >
                        <Icon
                          className="w-8 h-8"
                          style={{ color: "oklch(var(--navy))" }}
                        />
                      </div>
                      <h3
                        className="font-semibold text-lg mb-3"
                        style={{ color: "oklch(var(--navy))" }}
                      >
                        {v.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {v.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Commitment */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div
            className="rounded-2xl p-10 md:p-14"
            style={{ backgroundColor: "oklch(var(--navy-dark))" }}
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
                Team Commitment
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-display text-white mb-4">
              Dedicated to Your Success
            </h3>
            <p className="text-white/75 leading-relaxed mb-4">
              Our team of over 20 professionals — Chartered Accountants, Company
              Secretaries, Lawyers and Tax Advisors — is committed to staying
              ahead of regulatory changes and delivering timely, accurate
              compliance services.
            </p>
            <p className="text-white/75 leading-relaxed">
              We invest continuously in training and knowledge development,
              ensuring that our advice reflects the most current regulatory
              landscape. Our client-first culture means we are always
              accessible, responsive and proactive in addressing your needs.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
