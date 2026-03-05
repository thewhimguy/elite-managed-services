import { PageHero } from "@/components/PageHero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

const developerBenefits = [
  "Exemption from customs/excise duty on import/procurement of goods for development, operation and maintenance of SEZ",
  "Income Tax exemption for 10 years in a block of 15 years for SEZ developers",
  "Exemption from Central Sales Tax",
  "Exemption from Service Tax",
  "Single window clearance for state and central government approvals",
  "Simplified procedures for development and maintenance of SEZs",
];

const unitBenefits = [
  "Duty free import/domestic procurement of goods for development, operation and maintenance of the SEZ unit",
  "100% Income Tax exemption on export income for SEZ units under Section 10AA of Income Tax Act",
  "Exemption from minimum alternate tax (MAT) under Section 115JB",
  "External commercial borrowing by SEZ units up to US$ 500 million in a year without any maturity restriction",
  "Single window clearance for Central and State level approvals",
  "Exemption from Central Sales Tax and Service Tax",
  "No requirement for domicile licenses for export/import",
  "Freedom to retain 100% of export earnings in EEFC account",
];

export function AboutSezPage() {
  return (
    <>
      <PageHero
        title="About SEZ"
        subtitle="Special Economic Zones — a gateway to tax incentives, simplified compliance and accelerated growth."
        bgImage="/assets/generated/hero-sez.dim_1200x480.jpg"
      />

      {/* What is SEZ */}
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
              What is a Special Economic Zone?
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A Special Economic Zone (SEZ) is a specifically delineated
                duty-free enclave treated as a territory outside the customs
                territory of India for the purpose of authorized operations.
                SEZs operate under the Special Economic Zones Act, 2005 and SEZ
                Rules, 2006.
              </p>
              <p>
                SEZs are designed to provide an internationally competitive and
                hassle-free environment for exports. They offer world-class
                infrastructure, attractive fiscal incentives and simplified
                regulatory processes. India's SEZ program aims to attract both
                domestic and foreign investment and boost the country's exports.
              </p>
              <p>
                As of today, India has over 270 formally approved SEZs with
                significant presence in IT/ITES, manufacturing, pharmaceuticals,
                apparel, gems & jewellery and multi-product sectors.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEZ Act 2005 */}
      <section
        className="py-12"
        style={{ backgroundColor: "oklch(var(--secondary))" }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <h2
            className="text-2xl md:text-3xl font-display mb-4"
            style={{ color: "oklch(var(--navy))" }}
          >
            The SEZ Act, 2005
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              The Special Economic Zones Act, 2005 provides a single window
              clearance mechanism for setting up SEZs and units therein. The Act
              consolidates various incentives and facilities for SEZ developers,
              co-developers and units under one unified legal framework,
              replacing the earlier EOU/EPZ/EHTP/STP schemes.
            </p>
            <p>
              The Act establishes the Board of Approval (BoA) as the apex body
              for grant of approvals and the Development Commissioner as the
              single authority for all day-to-day operations of SEZs within
              their jurisdiction.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-display"
              style={{ color: "oklch(var(--navy))" }}
            >
              Key Benefits
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-0 shadow-md overflow-hidden">
                <div
                  className="h-1 w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(var(--navy)), oklch(var(--gold)))",
                  }}
                />
                <CardHeader>
                  <CardTitle style={{ color: "oklch(var(--navy))" }}>
                    For SEZ Developers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {developerBenefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle2
                          className="w-5 h-5 mt-0.5 shrink-0"
                          style={{ color: "oklch(var(--navy))" }}
                        />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-0 shadow-md overflow-hidden">
                <div
                  className="h-1 w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, oklch(var(--gold)), oklch(var(--navy)))",
                  }}
                />
                <CardHeader>
                  <CardTitle style={{ color: "oklch(var(--navy))" }}>
                    For SEZ Units
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {unitBenefits.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <CheckCircle2
                          className="w-5 h-5 mt-0.5 shrink-0"
                          style={{ color: "oklch(var(--gold))" }}
                        />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
