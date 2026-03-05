import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: React.ReactNode;
  highlights: string[];
  bgImage?: string;
}

export function ServicePage({
  title,
  subtitle,
  description,
  highlights,
  bgImage,
}: ServicePageProps) {
  return (
    <>
      <PageHero title={title} subtitle={subtitle} bgImage={bgImage} />

      {/* Description */}
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
                Service Overview
              </span>
            </div>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              {description}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Highlights */}
      <section
        className="py-16"
        style={{ backgroundColor: "oklch(var(--secondary))" }}
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2
              className="text-2xl md:text-3xl font-display mb-8"
              style={{ color: "oklch(var(--navy))" }}
            >
              What We Offer
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4 flex items-start gap-3">
                      <CheckCircle2
                        className="w-5 h-5 mt-0.5 shrink-0"
                        style={{ color: "oklch(var(--navy))" }}
                      />
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {item}
                      </span>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 text-center"
        style={{ backgroundColor: "oklch(var(--navy-dark))" }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-display text-white mb-4">
            Ready to Get Started with {title}?
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Contact our experts for a free consultation tailored to your
            specific requirements.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="font-semibold px-8 inline-flex items-center gap-2"
              style={{
                backgroundColor: "oklch(var(--gold))",
                color: "oklch(var(--navy-dark))",
              }}
            >
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
