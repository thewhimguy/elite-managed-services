import { BookOpen, Globe2, Scale } from "lucide-react";
import { motion } from "motion/react";

const frameworks = [
  {
    icon: Scale,
    title: "SEZ Act 2005",
    subtitle: "Special Economic Zones Act",
    description:
      "Provides framework for establishment, development and management of SEZs for promotion of foreign direct investments and encourage exports. The Act provides a comprehensive legal framework for SEZ development, unit operations, and incentive structures.",
    badge: "Primary Legislation",
  },
  {
    icon: BookOpen,
    title: "SEZ Rules 2006",
    subtitle: "Special Economic Zones Rules",
    description:
      "Guidelines for giving effect to the SEZ Policy and Act passed by parliament for operation and maintenance of SEZ. These rules govern the procedural aspects of SEZ approvals, unit operations, customs procedures, and compliance requirements.",
    badge: "Operational Rules",
  },
  {
    icon: Globe2,
    title: "Foreign Trade Policy",
    subtitle: "FTP 2023–28",
    description:
      "Provides the regulatory framework for India's foreign trade including DGFT services, STPI and EOU schemes. The policy encompasses export promotion measures, duty exemption schemes, and outlines procedures for various EXIM facilitation schemes.",
    badge: "Trade Policy",
  },
];

export default function FrameworkSection() {
  return (
    <section
      id="framework"
      data-ocid="framework.section"
      className="section-padding bg-navy relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute right-0 top-0 w-1/3 h-full opacity-5"
          style={{
            background:
              "radial-gradient(ellipse at right, oklch(0.72 0.16 75), transparent 70%)",
          }}
        />
        <div
          className="absolute left-0 bottom-0 w-1/4 h-full opacity-5"
          style={{
            background:
              "radial-gradient(ellipse at left bottom, oklch(0.98 0 0), transparent 70%)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-3"
          style={{
            backgroundImage:
              "linear-gradient(oklch(0.98 0 0 / 0.05) 1px, transparent 1px), linear-gradient(90deg, oklch(0.98 0 0 / 0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
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
            Regulatory Foundation
          </span>
          <h2 className="heading-lg text-white mb-4">Legislative Framework</h2>
          <div className="section-divider" />
          <p className="text-white/60 max-w-2xl mx-auto font-body text-base">
            Our services are grounded in India's key legislative frameworks,
            ensuring your business operates in full compliance with applicable
            laws and regulations.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {frameworks.map((fw, index) => {
            const Icon = fw.icon;
            return (
              <motion.div
                key={fw.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-navy-light/50 border border-white/10 rounded-2xl p-7 hover:border-gold/40 transition-all duration-300 hover:bg-navy-light/80"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent rounded-full" />

                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 bg-gold/10 border border-gold/20 text-gold text-xs font-medium px-3 py-1 rounded-full mb-5">
                  {fw.badge}
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                  <Icon className="h-6 w-6 text-gold" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-bold text-white mb-1">
                  {fw.title}
                </h3>
                <p className="text-gold/80 text-xs font-body mb-3 tracking-wide">
                  {fw.subtitle}
                </p>

                {/* Description */}
                <p className="text-white/60 text-sm font-body leading-relaxed">
                  {fw.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
