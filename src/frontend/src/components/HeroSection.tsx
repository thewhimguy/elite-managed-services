import { ArrowRight, Award, Shield, Users } from "lucide-react";
import { motion } from "motion/react";

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  return (
    <section
      id="home"
      data-ocid="hero.section"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-banner.dim_1200x500.jpg"
          alt="Business compliance background"
          className="w-full h-full object-cover"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-navy-dark/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/60 via-transparent to-transparent" />
        {/* Decorative geometric pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              oklch(0.98 0 0) 0px,
              oklch(0.98 0 0) 1px,
              transparent 1px,
              transparent 60px
            )`,
          }}
        />
      </div>

      {/* Gold decorative border top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="container-wide relative z-10 py-32 mt-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 text-gold text-sm font-medium px-4 py-1.5 rounded-full mb-6"
          >
            <Shield className="h-4 w-4" />
            Trusted Business Compliance Partner · Delhi NCR
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="heading-xl text-white mb-6 leading-tight"
          >
            Your Trusted Partner for{" "}
            <span className="text-gold">Business Compliance</span> in India
          </motion.h1>

          {/* Services tags */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-white/80 font-body mb-4 tracking-wide"
          >
            SEZ &nbsp;|&nbsp; STPI &nbsp;|&nbsp; 100% EOU &nbsp;|&nbsp; DGFT
            &nbsp;|&nbsp; GST &nbsp;|&nbsp; Income Tax &nbsp;|&nbsp; Payroll
            &nbsp;|&nbsp; Labour Law
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base text-white/70 font-body mb-10 max-w-xl leading-relaxed"
          >
            Navigate India's complex regulatory landscape with confidence.
            Expert consultancy services for businesses across Delhi, Noida,
            Gurugram and the entire NCR region.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              type="button"
              data-ocid="hero.primary_button"
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center justify-center gap-2 bg-gold text-navy font-semibold text-base px-8 py-3.5 rounded-full hover:bg-gold-light transition-all duration-200 shadow-gold group"
            >
              Get Free Consultation
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("services")}
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white font-medium text-base px-8 py-3.5 rounded-full hover:bg-white/20 transition-all duration-200 backdrop-blur-sm"
            >
              Our Services
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="mt-14 flex flex-wrap gap-8"
          >
            {[
              { icon: Award, label: "Years of Expertise", value: "15+" },
              { icon: Users, label: "Clients Served", value: "500+" },
              { icon: Shield, label: "Services Offered", value: "8+" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 border border-gold/30 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-white">
                    {value}
                  </div>
                  <div className="text-xs text-white/60 font-body">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
          aria-hidden="true"
          role="presentation"
        >
          <path
            d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 28C840 36 960 42 1080 40C1200 38 1320 28 1380 23L1440 18V60H0Z"
            fill="oklch(0.98 0 0)"
          />
        </svg>
      </div>
    </section>
  );
}
