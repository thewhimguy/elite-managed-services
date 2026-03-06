import { Clock, Layers, MapPin, Users2 } from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: Users2,
    title: "Expert Team",
    description:
      "Experienced professionals with deep knowledge of India's regulatory landscape. CA, CS, and legal experts with hands-on experience across SEZ, STPI, GST, and tax domains.",
    stat: "15+ Years",
    statLabel: "Combined Expertise",
  },
  {
    icon: Clock,
    title: "Timely Service",
    description:
      "Committed to meeting all regulatory deadlines and timelines. We track every compliance calendar so you never miss a filing date or regulatory submission.",
    stat: "100%",
    statLabel: "On-time Delivery",
  },
  {
    icon: Layers,
    title: "End-to-End Support",
    description:
      "Complete hand-holding from initial registration to ongoing compliance. We manage the entire regulatory lifecycle, allowing you to focus on core business operations.",
    stat: "8+",
    statLabel: "Service Domains",
  },
  {
    icon: MapPin,
    title: "Delhi NCR Based",
    description:
      "Conveniently located to serve businesses across Delhi, Noida, Gurugram, Faridabad, Ghaziabad and the entire NCR. Personal meetings at your office on request.",
    stat: "NCR",
    statLabel: "Pan Delhi Coverage",
  },
];

export default function WhyUsSection() {
  return (
    <section
      id="why-us"
      data-ocid="why-us.section"
      className="section-padding bg-background relative overflow-hidden"
    >
      {/* Background element */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute left-0 top-0 w-full h-full opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, oklch(0.23 0.09 250), transparent 50%), radial-gradient(circle at 80% 50%, oklch(0.72 0.16 75), transparent 50%)",
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
            Our Advantage
          </span>
          <h2 className="heading-lg text-navy mb-4">Why Choose Us</h2>
          <div className="section-divider" />
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-base leading-relaxed">
            Elite Managed Services combines regulatory expertise with a
            client-first approach to deliver compliance solutions that work.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl p-6 border border-border hover:border-gold/40 hover:shadow-card transition-all duration-300"
              >
                {/* Stat highlight */}
                <div className="absolute top-4 right-4 text-right">
                  <div className="text-2xl font-display font-bold text-gold/30 group-hover:text-gold/60 transition-colors duration-300">
                    {feature.stat}
                  </div>
                  <div className="text-[10px] text-muted-foreground font-body tracking-wide uppercase">
                    {feature.statLabel}
                  </div>
                </div>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-navy/5 border border-navy/10 flex items-center justify-center mb-5 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-300">
                  <Icon className="h-7 w-7 text-navy group-hover:text-gold transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-display font-semibold text-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/50 transition-all duration-300 rounded-full" />
              </motion.div>
            );
          })}
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-14 bg-navy rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="heading-sm text-white mb-2">
              Ready to Simplify Your Compliance?
            </h3>
            <p className="text-white/60 font-body text-sm">
              Talk to our experts today. Free initial consultation for new
              clients.
            </p>
          </div>
          <button
            type="button"
            className="flex-shrink-0 inline-flex items-center gap-2 bg-gold text-navy font-semibold text-sm px-8 py-3.5 rounded-full hover:bg-gold-light transition-all duration-200 shadow-gold"
            onClick={() => {
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get Started Today →
          </button>
        </motion.div>
      </div>
    </section>
  );
}
