import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

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

const aboutLinks = [
  { label: "About Us", href: "#about" },
  { label: "About SEZ", href: "#services" },
  { label: "About STPI", href: "#services" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

interface DropdownProps {
  label: string;
  items: { label: string; href?: string }[];
  onClose?: () => void;
}

function Dropdown({ label, items, onClose }: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        className="flex items-center gap-1 text-white hover:text-gold transition-colors duration-200 text-sm font-medium py-2 px-1"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-navy overflow-hidden z-50 border border-gray-100"
          >
            {items.map((item) => (
              <a
                key={item.label}
                href={item.href || "#services"}
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-secondary hover:text-navy transition-colors duration-150 border-b border-gray-50 last:border-0"
                onClick={() => {
                  setOpen(false);
                  onClose?.();
                }}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [{ label: "Home", href: "#home" }];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy shadow-navy py-2"
          : "bg-navy/95 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            className="flex items-center gap-3 group"
            data-ocid="nav.link"
            onClick={() => scrollTo("home")}
          >
            <img
              src="/assets/generated/logo-elite.dim_400x80.png"
              alt="Elite Managed Services"
              className="h-10 w-auto object-contain"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
            <div className="text-white">
              <div className="text-base font-display font-bold leading-tight text-gold">
                Elite Managed
              </div>
              <div className="text-xs font-body text-white/80 leading-tight tracking-widest uppercase">
                Services
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                className="text-white hover:text-gold transition-colors duration-200 text-sm font-medium"
                data-ocid="nav.link"
                onClick={() => scrollTo("home")}
              >
                {item.label}
              </button>
            ))}
            <Dropdown label="About" items={aboutLinks} />
            <Dropdown
              label="Services"
              items={services.map((s) => ({ label: s, href: "#services" }))}
            />
            <button
              type="button"
              data-ocid="nav.primary_button"
              className="inline-flex items-center gap-2 bg-gold text-navy-dark font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-gold-light transition-all duration-200 shadow-gold"
              onClick={() => scrollTo("contact")}
            >
              <Phone className="h-4 w-4" />
              Contact Us
            </button>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden text-white p-2 hover:text-gold transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-navy-dark border-t border-white/10 overflow-hidden"
          >
            <div className="container-wide py-4 flex flex-col gap-1">
              <button
                type="button"
                className="block px-3 py-2.5 text-white hover:text-gold hover:bg-white/5 rounded-lg text-sm font-medium transition-colors text-left"
                onClick={() => {
                  setMobileOpen(false);
                  scrollTo("home");
                }}
              >
                Home
              </button>

              {/* About mobile dropdown */}
              <div>
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-3 py-2.5 text-white hover:text-gold hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
                  onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                >
                  About
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${mobileAboutOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileAboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 overflow-hidden"
                    >
                      {aboutLinks.map((item) => (
                        <button
                          key={item.label}
                          type="button"
                          className="block w-full px-3 py-2 text-white/80 hover:text-gold text-sm transition-colors text-left"
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileAboutOpen(false);
                            scrollTo(item.href.replace("#", ""));
                          }}
                        >
                          {item.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Services mobile dropdown */}
              <div>
                <button
                  type="button"
                  className="flex items-center justify-between w-full px-3 py-2.5 text-white hover:text-gold hover:bg-white/5 rounded-lg text-sm font-medium transition-colors"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="ml-4 overflow-hidden"
                    >
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          className="block w-full px-3 py-2 text-white/80 hover:text-gold text-sm transition-colors text-left"
                          onClick={() => {
                            setMobileOpen(false);
                            setMobileServicesOpen(false);
                            scrollTo("services");
                          }}
                        >
                          {s}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="button"
                data-ocid="nav.primary_button"
                className="mt-2 flex items-center justify-center gap-2 bg-gold text-navy font-semibold text-sm px-5 py-3 rounded-full hover:bg-gold-light transition-colors"
                onClick={() => {
                  setMobileOpen(false);
                  scrollTo("contact");
                }}
              >
                <Phone className="h-4 w-4" />
                Contact Us
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
