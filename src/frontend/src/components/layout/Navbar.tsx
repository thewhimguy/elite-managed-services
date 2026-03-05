import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const aboutLinks = [
  { label: "About Us", to: "/about-us", ocid: "nav.about_us.link" },
  { label: "About SEZ", to: "/about-sez", ocid: "nav.about_sez.link" },
  { label: "About STPI", to: "/about-stpi", ocid: "nav.about_stpi.link" },
];

const serviceLinks = [
  { label: "SEZ Services", to: "/services/sez" },
  { label: "STPI", to: "/services/stpi" },
  { label: "100% EOU", to: "/services/eou" },
  { label: "DGFT", to: "/services/dgft" },
  { label: "GST Related", to: "/services/gst" },
  { label: "Income Tax Return", to: "/services/income-tax" },
  { label: "Payroll Services", to: "/services/payroll" },
  { label: "Labour Law", to: "/services/labour-law" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const pathnameRef = useRef(location.pathname);
  useEffect(() => {
    if (pathnameRef.current !== location.pathname) {
      pathnameRef.current = location.pathname;
      setMobileOpen(false);
      setAboutOpen(false);
      setServicesOpen(false);
    }
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-dark shadow-lg" : "bg-navy-dark"
      }`}
      style={{ backgroundColor: "oklch(var(--navy-dark))" }}
    >
      <nav className="container mx-auto px-4 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <Link
          to="/"
          data-ocid="nav.home.link"
          className="flex items-center gap-2 shrink-0"
        >
          <img
            src="/assets/generated/logo-transparent.dim_300x80.png"
            alt="Elite Managed Services"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          <Link
            to="/"
            data-ocid="nav.home.link"
            className="px-4 py-2 text-white/90 hover:text-gold font-medium text-sm transition-colors rounded-md hover:bg-white/5"
          >
            Home
          </Link>

          {/* About Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button
              type="button"
              data-ocid="nav.about.link"
              className="flex items-center gap-1 px-4 py-2 text-white/90 hover:text-gold font-medium text-sm transition-colors rounded-md hover:bg-white/5"
            >
              About <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-44 rounded-lg shadow-xl overflow-hidden"
                  style={{
                    backgroundColor: "oklch(var(--navy-dark))",
                    border: "1px solid oklch(var(--gold) / 0.2)",
                  }}
                >
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      data-ocid={link.ocid}
                      className="block px-4 py-3 text-sm text-white/85 hover:text-gold hover:bg-white/5 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              data-ocid="nav.services.link"
              className="flex items-center gap-1 px-4 py-2 text-white/90 hover:text-gold font-medium text-sm transition-colors rounded-md hover:bg-white/5"
            >
              Services <ChevronDown className="w-4 h-4" />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-full left-0 mt-1 w-52 rounded-lg shadow-xl overflow-hidden"
                  style={{
                    backgroundColor: "oklch(var(--navy-dark))",
                    border: "1px solid oklch(var(--gold) / 0.2)",
                  }}
                >
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-4 py-3 text-sm text-white/85 hover:text-gold hover:bg-white/5 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/contact" data-ocid="nav.contact.link" className="ml-2">
            <Button
              size="sm"
              className="font-semibold text-sm px-5"
              style={{
                backgroundColor: "oklch(var(--gold))",
                color: "oklch(var(--navy-dark))",
              }}
            >
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 text-white rounded-md"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden"
            style={{
              backgroundColor: "oklch(var(--navy-dark))",
              borderTop: "1px solid oklch(var(--gold) / 0.15)",
            }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              <Link
                to="/"
                data-ocid="nav.home.link"
                className="px-4 py-3 text-white/90 hover:text-gold font-medium text-sm rounded-md hover:bg-white/5 transition-colors"
              >
                Home
              </Link>

              <div className="px-4 py-2 text-gold/70 text-xs font-semibold uppercase tracking-wider">
                About
              </div>
              {aboutLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={link.ocid}
                  className="px-6 py-2.5 text-white/85 hover:text-gold text-sm rounded-md hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <div className="px-4 py-2 text-gold/70 text-xs font-semibold uppercase tracking-wider mt-1">
                Services
              </div>
              {serviceLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="px-6 py-2.5 text-white/85 hover:text-gold text-sm rounded-md hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </Link>
              ))}

              <Link
                to="/contact"
                data-ocid="nav.contact.link"
                className="mt-3 mx-4"
              >
                <Button
                  className="w-full font-semibold"
                  style={{
                    backgroundColor: "oklch(var(--gold))",
                    color: "oklch(var(--navy-dark))",
                  }}
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
