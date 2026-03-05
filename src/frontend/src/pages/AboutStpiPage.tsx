import { PageHero } from "@/components/PageHero";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const stpiBenefits = [
  "100% Foreign Direct Investment allowed through automatic route",
  "Import of capital goods duty free for setting up the STP unit",
  "Domestic purchases treated as deemed exports and entitled to refund of excise duty",
  "100% retention of export earnings in EEFC account",
  "Simplified customs procedures for import and export operations",
  "Single window clearance for all statutory approvals",
  "Sales in DTA up to 50% of export in value terms allowed",
  "Permission to use capital goods for domestic use after payment of applicable duty",
  "Broadband connectivity and world-class IT infrastructure support from STPI",
  "CST exemption on local purchases",
];

export function AboutStpiPage() {
  return (
    <>
      <PageHero
        title="About STPI Scheme"
        subtitle="Software Technology Parks of India — empowering IT/ITES exports since 1991."
        bgImage="/assets/generated/hero-compliance.dim_1200x480.jpg"
      />

      {/* Overview */}
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
                Overview
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl font-display mb-6"
              style={{ color: "oklch(var(--navy))" }}
            >
              Software Technology Parks of India
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                The Software Technology Parks of India (STPI) is an autonomous
                body under the Ministry of Electronics and Information
                Technology (MeitY), Government of India. Established in 1991,
                STPI provides statutory and other promotional services to
                promote the export of software and IT/ITES services from India.
              </p>
              <p>
                The STP Scheme is a 100% Export Oriented Scheme exclusively for
                the purpose of exporting computer software including export of
                professional services using communication links or in the form
                of physical media. The scheme was introduced in 1991 and has
                been instrumental in making India a global IT powerhouse.
              </p>
              <p>
                Companies registered under STPI can export software and IT/ITES
                services with attractive fiscal benefits, streamlined customs
                procedures and world-class connectivity infrastructure. STPI has
                a wide network of offices across India providing locational
                flexibility for technology companies.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* History Timeline */}
      <section
        className="py-12"
        style={{ backgroundColor: "oklch(var(--secondary))" }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h2
            className="text-2xl md:text-3xl font-display mb-8"
            style={{ color: "oklch(var(--navy))" }}
          >
            STPI Scheme History
          </h2>
          <div className="space-y-6">
            {[
              {
                year: "1986",
                event:
                  "Electronic Hardware Technology Park (EHTP) scheme introduced as precursor to STPI.",
              },
              {
                year: "1991",
                event:
                  "STPI established as an autonomous body under DoE (now MeitY). STP Scheme officially launched for software export promotion.",
              },
              {
                year: "1993",
                event:
                  "STPI expanded to multiple locations across India — Delhi, Mumbai, Bangalore, Chennai and Hyderabad.",
              },
              {
                year: "2000",
                event:
                  "Information Technology Act enacted; STPI plays a key role in India's IT export growth trajectory.",
              },
              {
                year: "2010",
                event:
                  "STPI celebrates 20 years with Indian IT exports crossing USD 60 billion — STPI units contributing significantly.",
              },
              {
                year: "2021",
                event:
                  "STPI 2.0 and new STPI centres launched to support emerging technology sectors including AI, IoT, blockchain and cybersecurity.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.year}
                className="flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                <div
                  className="text-sm font-bold shrink-0 pt-1 w-12"
                  style={{ color: "oklch(var(--gold))" }}
                >
                  {item.year}
                </div>
                <div
                  className="flex-1 pb-4"
                  style={{ borderBottom: "1px solid oklch(var(--border))" }}
                >
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2
            className="text-2xl md:text-3xl font-display mb-8"
            style={{ color: "oklch(var(--navy))" }}
          >
            Benefits of STPI Registration
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {stpiBenefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
              >
                <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 mt-0.5 shrink-0"
                      style={{ color: "oklch(var(--navy))" }}
                    />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {benefit}
                    </span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
