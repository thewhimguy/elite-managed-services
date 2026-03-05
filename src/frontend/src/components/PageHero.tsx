import { motion } from "motion/react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

export function PageHero({ title, subtitle, bgImage }: PageHeroProps) {
  return (
    <section
      className="relative py-20 md:py-28 flex items-center overflow-hidden"
      style={{
        background: bgImage
          ? `url(${bgImage}) center/cover no-repeat`
          : "oklch(var(--navy-dark))",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, oklch(var(--navy-dark) / 0.92) 0%, oklch(var(--navy) / 0.80) 100%)",
        }}
      />
      {/* Gold accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(var(--gold)), transparent)",
        }}
      />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2 mb-3">
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
          <h1 className="text-3xl md:text-5xl font-display font-normal text-white leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-base md:text-lg text-white/75 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
