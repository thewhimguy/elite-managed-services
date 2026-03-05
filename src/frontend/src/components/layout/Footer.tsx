import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      style={{ backgroundColor: "oklch(var(--navy-dark))" }}
      className="text-white"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: Company Info */}
          <div>
            <img
              src="/assets/generated/logo-transparent.dim_300x80.png"
              alt="Elite Managed Services"
              className="h-10 w-auto object-contain mb-4 opacity-90"
            />
            <p className="text-white/65 text-sm leading-relaxed mb-6">
              Your trusted partner for SEZ, STPI, GST, Income Tax, Payroll and
              Labour Law compliance services across India.
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ backgroundColor: "oklch(var(--navy-light))" }}
              >
                <Facebook className="w-4 h-4 text-white/80" />
              </button>
              <button
                type="button"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ backgroundColor: "oklch(var(--navy-light))" }}
              >
                <Instagram className="w-4 h-4 text-white/80" />
              </button>
              <button
                type="button"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ backgroundColor: "oklch(var(--navy-light))" }}
              >
                <Twitter className="w-4 h-4 text-white/80" />
              </button>
              <button
                type="button"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors hover:bg-white/10"
                style={{ backgroundColor: "oklch(var(--navy-light))" }}
              >
                <Linkedin className="w-4 h-4 text-white/80" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4
              className="font-semibold text-base mb-5 text-gold"
              style={{
                color: "oklch(var(--gold))",
                fontFamily: '"Cabinet Grotesk", sans-serif',
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about-us" },
                { label: "About SEZ", to: "/about-sez" },
                { label: "About STPI", to: "/about-stpi" },
                { label: "Contact Us", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/65 hover:text-gold text-sm transition-colors"
                    style={
                      {
                        "--hover-color": "oklch(var(--gold))",
                      } as React.CSSProperties
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4
              className="font-semibold text-base mb-5"
              style={{
                color: "oklch(var(--gold))",
                fontFamily: '"Cabinet Grotesk", sans-serif',
              }}
            >
              Our Services
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "SEZ Services", to: "/services/sez" },
                { label: "STPI", to: "/services/stpi" },
                { label: "100% EOU", to: "/services/eou" },
                { label: "DGFT", to: "/services/dgft" },
                { label: "GST Related", to: "/services/gst" },
                { label: "Income Tax Return", to: "/services/income-tax" },
                { label: "Payroll Services", to: "/services/payroll" },
                { label: "Labour Law", to: "/services/labour-law" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/65 hover:text-gold text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4
              className="font-semibold text-base mb-5"
              style={{
                color: "oklch(var(--gold))",
                fontFamily: '"Cabinet Grotesk", sans-serif',
              }}
            >
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: "oklch(var(--gold))" }}
                />
                <span className="text-white/65 text-sm leading-relaxed">
                  Elite Managed Services, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone
                  className="w-4 h-4 shrink-0"
                  style={{ color: "oklch(var(--gold))" }}
                />
                <span className="text-white/65 text-sm">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail
                  className="w-4 h-4 shrink-0"
                  style={{ color: "oklch(var(--gold))" }}
                />
                <a
                  href="mailto:info@elitemanagedservices.in"
                  className="text-white/65 text-sm hover:text-gold transition-colors"
                >
                  info@elitemanagedservices.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid oklch(var(--navy-light))" }}>
        <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/50 text-sm">
            Copyright &copy; {currentYear} Elite Managed Services. All rights
            reserved.
          </p>
          <p className="text-white/40 text-xs">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
