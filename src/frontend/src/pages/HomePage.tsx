import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "@tanstack/react-router";
import {
  Building2,
  Calculator,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Eye,
  FileText,
  Globe,
  Receipt,
  Scale,
  Server,
  Target,
  Users,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

const heroSlides = [
  {
    image: "/assets/generated/hero-banner.dim_1200x480.jpg",
    headline: "Your Trusted Partner for SEZ & Compliance Services",
    sub: "Expert advisory and end-to-end compliance solutions for businesses across India.",
  },
  {
    image: "/assets/generated/hero-sez.dim_1200x480.jpg",
    headline: "Expert SEZ Approval & Management Services",
    sub: "Navigate the Special Economic Zone framework with ease and confidence.",
  },
  {
    image: "/assets/generated/hero-compliance.dim_1200x480.jpg",
    headline: "GST, Income Tax, Payroll & Labour Law Experts",
    sub: "Comprehensive compliance management so you can focus on growing your business.",
  },
];

const services = [
  {
    icon: Building2,
    label: "SEZ Services",
    to: "/services/sez",
    desc: "Special Economic Zone approval, setup & ongoing compliance.",
  },
  {
    icon: Server,
    label: "STPI",
    to: "/services/stpi",
    desc: "Software Technology Parks of India registration & compliance.",
  },
  {
    icon: Globe,
    label: "100% EOU",
    to: "/services/eou",
    desc: "Export Oriented Unit formation and regulatory management.",
  },
  {
    icon: FileText,
    label: "DGFT",
    to: "/services/dgft",
    desc: "Directorate General of Foreign Trade licensing & compliance.",
  },
  {
    icon: Receipt,
    label: "GST Related",
    to: "/services/gst",
    desc: "GST registration, filing, advisory and dispute resolution.",
  },
  {
    icon: Calculator,
    label: "Income Tax Return",
    to: "/services/income-tax",
    desc: "Individual & corporate income tax return filing services.",
  },
  {
    icon: Users,
    label: "Payroll Services",
    to: "/services/payroll",
    desc: "End-to-end payroll processing, PF, ESI and TDS compliance.",
  },
  {
    icon: Scale,
    label: "Labour Law",
    to: "/services/labour-law",
    desc: "Labour law audit, registration and statutory compliance.",
  },
];

const sezPoints = [
  "SEZ is a specifically delineated duty-free enclave treated as foreign territory for trade operations and duties.",
  "Units in SEZ are entitled to exemption from customs duties, central excise duties and service tax.",
  "SEZ developers and units enjoy income tax exemptions under the Income Tax Act.",
  "Single window clearance mechanism for approvals under SEZ Act 2005.",
  "No license required for import of goods and services.",
  "Exemption from state sales tax, local levies and other taxes as notified by the State Government.",
  "Flexibility in operations: sub-contracting, job-work, trading, manufacturing all permitted.",
  "Enhanced infrastructure and world-class facilities for manufacturing, trading and services businesses.",
];

export function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);

  const goToSlide = useCallback((idx: number, dir: number) => {
    setDirection(dir);
    setCurrentSlide(idx);
  }, []);

  const prev = useCallback(() => {
    const idx = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    goToSlide(idx, -1);
  }, [currentSlide, goToSlide]);

  const next = useCallback(() => {
    const idx = (currentSlide + 1) % heroSlides.length;
    goToSlide(idx, 1);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? "-100%" : "100%", opacity: 0 }),
  };

  return (
    <>
      {/* ── Hero Carousel ── */}
      <section className="relative h-[480px] md:h-[540px] overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="sync">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: [0.32, 0, 0.67, 0] }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url(${heroSlides[currentSlide].image})`,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, oklch(var(--navy-dark) / 0.85) 0%, oklch(var(--navy) / 0.65) 100%)",
              }}
            />

            <div className="relative z-10 h-full flex items-center">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="max-w-2xl"
                >
                  <div className="flex items-center gap-2 mb-4">
                    <div
                      className="h-0.5 w-10"
                      style={{ backgroundColor: "oklch(var(--gold))" }}
                    />
                    <span
                      className="text-xs font-semibold uppercase tracking-widest"
                      style={{ color: "oklch(var(--gold))" }}
                    >
                      Elite Managed Services
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-normal text-white leading-tight mb-6">
                    {heroSlides[currentSlide].headline}
                  </h1>
                  <p className="text-white/80 text-base md:text-lg mb-8 leading-relaxed">
                    {heroSlides[currentSlide].sub}
                  </p>
                  <Link to="/contact">
                    <Button
                      size="lg"
                      data-ocid="hero.cta.button"
                      className="font-semibold text-base px-8 py-3"
                      style={{
                        backgroundColor: "oklch(var(--gold))",
                        color: "oklch(var(--navy-dark))",
                      }}
                    >
                      Contact Us
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Controls */}
        <button
          type="button"
          onClick={prev}
          data-ocid="hero.prev.button"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{
            backgroundColor: "oklch(var(--navy-dark) / 0.7)",
            border: "1px solid oklch(var(--gold) / 0.4)",
          }}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-white" />
        </button>
        <button
          type="button"
          onClick={next}
          data-ocid="hero.next.button"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full flex items-center justify-center transition-all hover:scale-110"
          style={{
            backgroundColor: "oklch(var(--navy-dark) / 0.7)",
            border: "1px solid oklch(var(--gold) / 0.4)",
          }}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((slide, i) => (
            <button
              type="button"
              key={slide.headline}
              onClick={() => goToSlide(i, i > currentSlide ? 1 : -1)}
              className={`rounded-full transition-all duration-300 ${i === currentSlide ? "w-8 h-2" : "w-2 h-2 opacity-50"}`}
              style={{ backgroundColor: "oklch(var(--gold))" }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── Legislative Framework ── */}
      <section className="py-16 bg-white">
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
                Legal Foundation
              </span>
              <div
                className="h-0.5 w-8"
                style={{ backgroundColor: "oklch(var(--gold))" }}
              />
            </div>
            <h2
              className="text-3xl md:text-4xl font-display text-navy"
              style={{ color: "oklch(var(--navy))" }}
            >
              Legislative Framework
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "SEZ Act 2005",
                desc: "The Special Economic Zones Act, 2005 provides the statutory framework for establishment, development and management of SEZs. It outlines rights, duties and obligations of developers, co-developers and units.",
              },
              {
                title: "SEZ Rules 2006",
                desc: "The SEZ Rules, 2006 prescribe the detailed procedures for setting up units, approved operations, compliance obligations and the working of the approval committees under the SEZ Act.",
              },
              {
                title: "State SEZ Act & Policy",
                desc: "Several Indian states have enacted their own SEZ Acts and policies offering additional incentives such as stamp duty exemptions, electricity duty waivers and infrastructure support for SEZ developers and units.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Card className="h-full border-0 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                  <div
                    className="h-1 w-full"
                    style={{
                      background:
                        "linear-gradient(90deg, oklch(var(--navy)), oklch(var(--gold)))",
                    }}
                  />
                  <CardHeader>
                    <CardTitle
                      className="text-lg"
                      style={{ color: "oklch(var(--navy))" }}
                    >
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                      {item.desc}
                    </p>
                    <Link to="/about-sez">
                      <Button
                        variant="outline"
                        size="sm"
                        className="hover:bg-navy text-sm"
                        style={{
                          borderColor: "oklch(var(--navy) / 0.3)",
                          color: "oklch(var(--navy))",
                        }}
                      >
                        Learn More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STPI Scheme ── */}
      <section
        className="py-16"
        style={{ backgroundColor: "oklch(var(--background))" }}
      >
        <div className="container mx-auto px-4">
          <div
            className="rounded-2xl overflow-hidden shadow-lg grid md:grid-cols-2 gap-0"
            style={{ backgroundColor: "oklch(var(--navy-dark))" }}
          >
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="h-0.5 w-8"
                  style={{ backgroundColor: "oklch(var(--gold))" }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "oklch(var(--gold))" }}
                >
                  Government Scheme
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
                STPI Scheme
              </h2>
              <p className="text-white/75 text-sm leading-relaxed mb-6">
                The Software Technology Parks of India (STPI) is a Government of
                India society set up in 1991 under the Ministry of Electronics &
                Information Technology. STPI provides statutory and other
                promotional services for IT/ITES companies. Units registered
                under STPI enjoy a host of benefits including 100% FDI, import
                of capital goods duty-free and simplified compliance procedures.
              </p>
              <Link to="/about-stpi">
                <Button
                  size="sm"
                  className="self-start"
                  style={{
                    backgroundColor: "oklch(var(--gold))",
                    color: "oklch(var(--navy-dark))",
                  }}
                >
                  Learn More
                </Button>
              </Link>
            </div>
            <div className="flex items-center justify-center p-10 md:p-14">
              <div className="text-center">
                <div
                  className="w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{
                    backgroundColor: "oklch(var(--gold) / 0.15)",
                    border: "1px solid oklch(var(--gold) / 0.3)",
                  }}
                >
                  <Server
                    className="w-12 h-12"
                    style={{ color: "oklch(var(--gold))" }}
                  />
                </div>
                <p className="text-white/60 text-sm">
                  Software Technology Parks of India
                </p>
                <p className="text-white font-semibold mt-1">Est. 1991</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── About Us Blurb ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <div
                className="h-0.5 w-8"
                style={{ backgroundColor: "oklch(var(--gold))" }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "oklch(var(--gold))" }}
              >
                About Us
              </span>
              <div
                className="h-0.5 w-8"
                style={{ backgroundColor: "oklch(var(--gold))" }}
              />
            </div>
            <h2
              className="text-3xl md:text-4xl font-display mb-6"
              style={{ color: "oklch(var(--navy))" }}
            >
              Committed to Excellence
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-3">
              We are committed to our customers — providing the highest levels
              of{" "}
              <strong className="text-foreground">
                trust, quality, value, professionalism, integrity and care
              </strong>{" "}
              in everything we do.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Elite Managed Services is a premier consultancy firm specializing
              in SEZ, STPI, DGFT, GST, Income Tax, Payroll and Labour Law
              compliance. With a team of experienced professionals, we deliver
              end-to-end regulatory solutions tailored to your business needs.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="font-semibold px-8"
                style={{
                  backgroundColor: "oklch(var(--navy))",
                  color: "white",
                }}
              >
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── What is SEZ? ── */}
      <section
        className="py-16"
        style={{ backgroundColor: "oklch(var(--secondary))" }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="h-0.5 w-8"
                  style={{ backgroundColor: "oklch(var(--gold))" }}
                />
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "oklch(var(--gold))" }}
                >
                  Understanding
                </span>
              </div>
              <h2
                className="text-3xl md:text-4xl font-display mb-6"
                style={{ color: "oklch(var(--navy))" }}
              >
                What is SEZ?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                A Special Economic Zone (SEZ) is a designated geographical
                region that operates under economic regulations distinct from
                the rest of the country. SEZs are designed to attract foreign
                direct investment, boost exports and create employment through
                special incentives and a simplified regulatory environment.
              </p>
            </motion.div>
            <motion.ul
              className="space-y-3"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {sezPoints.map((point, i) => (
                <motion.li
                  key={point}
                  className="flex items-start gap-3 p-3 rounded-lg bg-white/70"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <CheckCircle2
                    className="w-5 h-5 mt-0.5 shrink-0"
                    style={{ color: "oklch(var(--navy))" }}
                  />
                  <span className="text-sm leading-relaxed text-foreground/80">
                    {point}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision Tabs ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div
                className="h-0.5 w-8"
                style={{ backgroundColor: "oklch(var(--gold))" }}
              />
              <span
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: "oklch(var(--gold))" }}
              >
                Our Direction
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
              Mission & Vision
            </h2>
          </div>
          <Tabs defaultValue="mission" className="w-full">
            <TabsList
              className="w-full grid grid-cols-2 h-12 mb-8"
              style={{ backgroundColor: "oklch(var(--secondary))" }}
            >
              <TabsTrigger
                value="mission"
                data-ocid="mission.tab"
                className="data-[state=active]:bg-navy data-[state=active]:text-white font-semibold"
                style={{ "--tw-bg-opacity": "1" } as React.CSSProperties}
              >
                <Target className="w-4 h-4 mr-2" /> Our Mission
              </TabsTrigger>
              <TabsTrigger
                value="vision"
                data-ocid="vision.tab"
                className="data-[state=active]:bg-navy data-[state=active]:text-white font-semibold"
              >
                <Eye className="w-4 h-4 mr-2" /> Our Vision
              </TabsTrigger>
            </TabsList>
            <TabsContent value="mission">
              <div
                className="p-8 rounded-xl"
                style={{
                  backgroundColor: "oklch(var(--secondary))",
                  border: "1px solid oklch(var(--border))",
                }}
              >
                <p className="text-foreground/80 leading-relaxed text-base">
                  Our mission is to deliver the highest quality compliance and
                  consultancy services to businesses operating in India's
                  regulated sectors. We are dedicated to simplifying complex
                  regulatory frameworks — from SEZ to STPI, GST to Labour Law —
                  enabling our clients to focus on their core business
                  operations while we manage their compliance obligations with
                  precision, speed and integrity.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="vision">
              <div
                className="p-8 rounded-xl"
                style={{
                  backgroundColor: "oklch(var(--secondary))",
                  border: "1px solid oklch(var(--border))",
                }}
              >
                <p className="text-foreground/80 leading-relaxed text-base">
                  Our vision is to become India's most trusted and preferred
                  compliance and regulatory consultancy firm — recognized for
                  our unwavering commitment to professional ethics, deep domain
                  expertise and client-centric service delivery. We aspire to
                  empower businesses of every size to thrive in a compliant and
                  sustainable manner across all regulatory domains.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* ── Our Services ── */}
      <section
        className="py-16"
        style={{ backgroundColor: "oklch(var(--background))" }}
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
                What We Do
              </span>
              <div
                className="h-0.5 w-8"
                style={{ backgroundColor: "oklch(var(--gold))" }}
              />
            </div>
            <h2
              className="text-3xl md:text-4xl font-display mb-3"
              style={{ color: "oklch(var(--navy))" }}
            >
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Comprehensive compliance and regulatory services tailored for your
              business success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.label}
                  data-ocid={`services.item.${i + 1}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                >
                  <Link to={service.to} className="block h-full">
                    <Card className="h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group">
                      <CardContent className="p-6">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors group-hover:bg-navy"
                          style={{ backgroundColor: "oklch(var(--secondary))" }}
                        >
                          <Icon
                            className="w-6 h-6 transition-colors group-hover:text-white"
                            style={{ color: "oklch(var(--navy))" }}
                          />
                        </div>
                        <h3
                          className="font-semibold text-base mb-2"
                          style={{ color: "oklch(var(--navy))" }}
                        >
                          {service.label}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {service.desc}
                        </p>
                        <div
                          className="mt-4 flex items-center gap-1 text-xs font-semibold"
                          style={{ color: "oklch(var(--gold))" }}
                        >
                          Learn More →
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Contact CTA Banner ── */}
      <section
        className="py-16 md:py-20 text-center relative overflow-hidden"
        style={{ backgroundColor: "oklch(var(--navy-dark))" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, oklch(var(--gold)) 0px, oklch(var(--gold)) 1px, transparent 0px, transparent 50%)",
            backgroundSize: "24px 24px",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-8 max-w-xl mx-auto">
              Contact our experts today for a free consultation on your
              compliance needs.
            </p>
            <Link to="/contact">
              <Button
                size="lg"
                className="font-semibold px-10 py-3 text-base"
                style={{
                  backgroundColor: "oklch(var(--gold))",
                  color: "oklch(var(--navy-dark))",
                }}
              >
                Get in Touch
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
