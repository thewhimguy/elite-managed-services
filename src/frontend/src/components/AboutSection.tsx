import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, CheckCircle2, MapPin, Star } from "lucide-react";
import { motion } from "motion/react";

const highlights = [
  "Deep expertise in SEZ, STPI, and EOU compliance",
  "End-to-end GST advisory and filing services",
  "Comprehensive DGFT and foreign trade services",
  "Individual and corporate income tax solutions",
  "Complete payroll and HR compliance management",
  "Labour law advisory and audit services",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      data-ocid="about.section"
      className="section-padding bg-cream relative overflow-hidden"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -right-32 -top-32 w-96 h-96 rounded-full opacity-5"
          style={{ background: "oklch(0.23 0.09 250)" }}
        />
        <div
          className="absolute -left-24 -bottom-24 w-72 h-72 rounded-full opacity-5"
          style={{ background: "oklch(0.72 0.16 75)" }}
        />
      </div>

      <div className="container-wide relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Main image/visual card */}
            <div className="relative rounded-2xl overflow-hidden shadow-navy">
              <img
                src="/assets/generated/hero-banner.dim_1200x500.jpg"
                alt="Elite Managed Services office"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-navy/70 via-navy/30 to-transparent" />
              {/* Overlay text */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                  <p className="text-white text-sm font-body leading-relaxed">
                    "Simplifying compliance so you can focus on what matters
                    most — growing your business."
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                      <Star className="h-3 w-3 text-navy" fill="currentColor" />
                    </div>
                    <span className="text-gold text-xs font-medium">
                      Elite Managed Services
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute -top-6 -right-6 bg-navy rounded-xl p-4 shadow-navy"
            >
              <div className="text-3xl font-display font-bold text-gold">
                15+
              </div>
              <div className="text-xs text-white/70 font-body mt-0.5">
                Years Experience
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-card border border-border"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-gold" />
                <div>
                  <div className="text-xs font-body text-navy font-semibold">
                    Based in
                  </div>
                  <div className="text-sm font-display font-bold text-navy">
                    Delhi NCR
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="inline-block text-gold font-body font-semibold text-sm tracking-widest uppercase mb-3">
              Who We Are
            </span>
            <h2 className="heading-lg text-navy mb-2">
              About Elite Managed Services
            </h2>
            <div className="w-12 h-1 bg-gold rounded mb-6" />

            <p className="text-muted-foreground font-body text-base leading-relaxed mb-6">
              Elite Managed Services is a premier business consultancy firm
              based in Delhi NCR, providing comprehensive compliance and
              regulatory services to businesses across India. With deep
              expertise in SEZ, STPI, EOU, DGFT, GST, income tax, payroll, and
              labour law, we help businesses navigate the complex regulatory
              landscape with ease and confidence.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground font-body">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Mission / Vision tabs */}
            <Tabs defaultValue="mission" className="w-full">
              <TabsList
                className="mb-4 bg-secondary border border-border rounded-lg p-1"
                data-ocid="about.tab"
              >
                <TabsTrigger
                  value="mission"
                  className="rounded-md data-[state=active]:bg-navy data-[state=active]:text-white font-body font-medium text-sm px-6 flex items-center gap-2"
                >
                  <Briefcase className="h-4 w-4" />
                  Our Mission
                </TabsTrigger>
                <TabsTrigger
                  value="vision"
                  className="rounded-md data-[state=active]:bg-navy data-[state=active]:text-white font-body font-medium text-sm px-6 flex items-center gap-2"
                >
                  <Star className="h-4 w-4" />
                  Our Vision
                </TabsTrigger>
              </TabsList>
              <TabsContent value="mission">
                <div className="bg-card rounded-xl p-5 border border-border">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Briefcase className="h-4 w-4 text-gold" />
                    </div>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      To be the most trusted compliance partner for businesses
                      in India by providing accurate, timely, and professional
                      regulatory services that enable our clients to focus on
                      their core business growth.
                    </p>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="vision">
                <div className="bg-card rounded-xl p-5 border border-border">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Star className="h-4 w-4 text-gold" />
                    </div>
                    <p className="text-muted-foreground font-body text-sm leading-relaxed">
                      To simplify the regulatory and compliance landscape for
                      Indian businesses and contribute to making India a
                      preferred destination for global investment and trade.
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
