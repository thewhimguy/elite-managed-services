import {
  Building2,
  FileText,
  Globe2,
  Monitor,
  Package,
  Receipt,
  Scale,
  Users2,
} from "lucide-react";
import { motion } from "motion/react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ElementType;
  image?: string;
  index: number;
  ocid: string;
}

const services = [
  {
    title: "SEZ Services",
    description:
      "Complete SEZ setup, compliance, and approval services. We guide businesses through the entire Special Economic Zone establishment process, from unit approval to ongoing compliance management.",
    icon: Building2,
    image: "/assets/generated/sez-services.dim_600x400.jpg",
  },
  {
    title: "STPI",
    description:
      "Software Technology Parks of India registration and compliance services. Get STPI registration, LOP approval, green channel facilities, and post-approval compliance support.",
    icon: Monitor,
  },
  {
    title: "100% EOU",
    description:
      "Export Oriented Units setup and compliance. Assistance with LOP, customs bonded warehouse, duty-free import, and all procedural compliances for 100% EOU units.",
    icon: Package,
  },
  {
    title: "DGFT",
    description:
      "Directorate General of Foreign Trade services including IEC registration, advance authorization, EPCG license, SEIS/MEIS/RoDTEP benefits, and all EXIM policy compliance.",
    icon: Globe2,
  },
  {
    title: "GST Related Services",
    description:
      "Comprehensive GST services including registration, monthly/quarterly return filing, GST audit, refund claims, assessment, and advisory for seamless GST compliance.",
    icon: Receipt,
    image: "/assets/generated/gst-tax.dim_600x400.jpg",
  },
  {
    title: "Individual Income Tax Return",
    description:
      "Expert ITR filing services for salaried individuals, professionals, and business owners. Capital gains, multiple income sources, foreign income, and tax planning advisory.",
    icon: FileText,
  },
  {
    title: "Payroll Services",
    description:
      "Complete payroll processing, salary structuring, TDS calculation, Form 16/24Q generation, PF/ESI deductions, and full-service payroll management for businesses.",
    icon: Users2,
  },
  {
    title: "Labour Law Compliances",
    description:
      "End-to-end labour law compliance including PF, ESI, professional tax, CLRA, minimum wages, factory act, contract labour management, and labour law audit services.",
    icon: Scale,
  },
];

function ServiceCard({
  title,
  description,
  icon: Icon,
  image,
  index,
  ocid,
}: ServiceCardProps) {
  return (
    <motion.div
      data-ocid={ocid}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group bg-card rounded-xl overflow-hidden shadow-card hover:shadow-navy transition-all duration-300 hover:-translate-y-1 border border-border"
    >
      {/* Image or gradient header */}
      <div className="h-40 overflow-hidden relative">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-navy/90 to-navy-light/80 flex items-center justify-center">
            <Icon className="h-16 w-16 text-gold/50" strokeWidth={1} />
          </div>
        )}
        {/* Icon overlay badge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-navy/70 to-transparent" />
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center shadow-gold">
            <Icon className="h-4 w-4 text-navy" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-display font-semibold text-navy mb-2 group-hover:text-gold transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed font-body line-clamp-3">
          {description}
        </p>
        <div className="mt-4 flex items-center text-gold text-sm font-medium font-body group-hover:gap-2 transition-all duration-200">
          <span>Learn More</span>
          <span className="ml-1 group-hover:ml-2 transition-all duration-200">
            →
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section
      id="services"
      data-ocid="services.section"
      className="section-padding bg-background"
    >
      <div className="container-wide">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block text-gold font-body font-semibold text-sm tracking-widest uppercase mb-3">
            What We Offer
          </span>
          <h2 className="heading-lg text-navy mb-4">Our Services</h2>
          <div className="section-divider" />
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-base leading-relaxed">
            Comprehensive business compliance services designed to help your
            organization navigate India's regulatory framework with ease and
            confidence.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              index={index}
              ocid={`services.item.${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
