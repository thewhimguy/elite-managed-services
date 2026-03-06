import { ArrowUp, Globe, Mail, MapPin, Phone } from "lucide-react";

const services = [
  "SEZ Services",
  "STPI",
  "100% EOU",
  "DGFT",
  "GST Related Services",
  "Individual Income Tax Return",
  "Payroll Services",
  "Labour Law Compliances",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      data-ocid="footer.section"
      className="bg-navy-dark relative overflow-hidden"
    >
      {/* Gold top border */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -right-32 -top-32 w-96 h-96 rounded-full opacity-[0.04]"
          style={{ background: "oklch(0.72 0.16 75)" }}
        />
      </div>

      <div className="container-wide py-14 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo / Brand */}
            <div className="flex items-center gap-3 mb-5">
              <img
                src="/assets/generated/logo-elite.dim_400x80.png"
                alt="Elite Managed Services"
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
              <div>
                <div className="text-base font-display font-bold text-gold leading-tight">
                  Elite Managed
                </div>
                <div className="text-xs font-body text-white/60 tracking-widest uppercase">
                  Services
                </div>
              </div>
            </div>

            <p className="text-white/50 font-body text-sm leading-relaxed mb-5">
              Premier business compliance consultancy firm based in Delhi NCR.
              Simplifying regulatory compliance for businesses across India.
            </p>

            {/* Quick contact */}
            <div className="space-y-2">
              <a
                href="tel:9910806694"
                className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm font-body"
              >
                <Phone className="h-3.5 w-3.5 text-gold flex-shrink-0" />
                +91 9910806694
              </a>
              <a
                href="mailto:prem.kumar@elites.co.in"
                className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm font-body"
              >
                <Mail className="h-3.5 w-3.5 text-gold flex-shrink-0" />
                prem.kumar@elites.co.in
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-display font-semibold text-base mb-5 relative">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold rounded" />
            </h4>
            <ul className="space-y-2.5 mt-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    data-ocid="footer.link"
                    className="text-white/60 hover:text-gold transition-colors text-sm font-body flex items-center gap-2 group text-left"
                    onClick={() => scrollTo(link.href.replace("#", ""))}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors flex-shrink-0" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-display font-semibold text-base mb-5 relative">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold rounded" />
            </h4>
            <ul className="space-y-2 mt-4">
              {services.map((service) => (
                <li key={service}>
                  <button
                    type="button"
                    className="text-white/60 hover:text-gold transition-colors text-sm font-body flex items-center gap-2 group text-left"
                    onClick={() => scrollTo("services")}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors flex-shrink-0" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-display font-semibold text-base mb-5 relative">
              Contact Info
              <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-gold rounded" />
            </h4>
            <div className="space-y-3.5 mt-4">
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="h-3 w-3 text-gold" />
                </div>
                <div>
                  <div className="text-white/40 text-[10px] font-body uppercase tracking-wider">
                    Contact Person
                  </div>
                  <div className="text-white/70 text-sm font-body">
                    Prem Kumar
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="h-3 w-3 text-gold" />
                </div>
                <div>
                  <div className="text-white/40 text-[10px] font-body uppercase tracking-wider">
                    Mobile
                  </div>
                  <a
                    href="tel:9910806694"
                    className="text-white/70 hover:text-gold text-sm font-body transition-colors"
                  >
                    +91 9910806694
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="h-3 w-3 text-gold" />
                </div>
                <div>
                  <div className="text-white/40 text-[10px] font-body uppercase tracking-wider">
                    Email
                  </div>
                  <a
                    href="mailto:prem.kumar@elites.co.in"
                    className="text-white/70 hover:text-gold text-xs font-body transition-colors break-all"
                  >
                    prem.kumar@elites.co.in
                  </a>
                  <br />
                  <a
                    href="mailto:info@elitemangedservices.co.in"
                    className="text-white/70 hover:text-gold text-xs font-body transition-colors break-all"
                  >
                    info@elitemangedservices.co.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Globe className="h-3 w-3 text-gold" />
                </div>
                <div>
                  <div className="text-white/40 text-[10px] font-body uppercase tracking-wider">
                    Website
                  </div>
                  <a
                    href="https://www.elites.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-gold text-sm font-body transition-colors"
                  >
                    www.elites.co.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-3 w-3 text-gold" />
                </div>
                <div>
                  <div className="text-white/40 text-[10px] font-body uppercase tracking-wider">
                    Location
                  </div>
                  <div className="text-white/70 text-sm font-body">
                    Delhi NCR, India
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-sm font-body text-center sm:text-left">
            © {currentYear} Elite Managed Services. All Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/30 hover:text-white/60 text-xs font-body transition-colors"
            >
              Built with ♥ using caffeine.ai
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="w-8 h-8 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold hover:bg-gold/20 transition-all duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
