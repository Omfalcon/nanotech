import { Mail, MapPin, Phone, Linkedin, Facebook } from "lucide-react";

export function Footer() {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { label: "About Us", href: "#about" },
    { label: "What We Do", href: "#what-we-do" },
    { label: "What We Offer", href: "#what-we-offer" },
    { label: "Services", href: "#services" },
    { label: "Strategic Focus", href: "#focus" },
    { label: "Key Outcomes", href: "#outcomes" },
    { label: "Get In Touch", href: "#contact" },
  ];

  return (
    <footer className="bg-zinc-950 text-white dark:bg-card border-t dark:border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center gap-3 mb-5 group"
            >
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0">
                <img
                  src={`${import.meta.env.BASE_URL}images/logo.jpg`}
                  alt="Neanic Solutions"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="font-display font-bold text-xl tracking-tight group-hover:text-primary transition-colors">
                Neanic Solutions
              </span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-6">
              Pioneering modern education and futuristic technological solutions
              — combining academics, awareness, and skill enhancement alongside
              nanotechnology-driven affordable healthcare.
            </p>
            {/* Contact inline for mobile */}
            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:info@neanicsolutions.com"
                  className="hover:text-white transition-colors break-all"
                >
                  info@neanicsolutions.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:+911234567890"
                  className="hover:text-white transition-colors"
                >
                  +91 (123) 456-7890
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>Innovation Hub, North Sector, India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://www.facebook.com/people/Neanic-Solutions/100063763819746/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#1877F2] hover:scale-110 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/neanic-solutions/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:bg-[#0A66C2] hover:scale-110 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-base mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="font-bold text-base mb-5 text-white">More</h4>
            <ul className="space-y-3">
              {navLinks.slice(4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>
            © {new Date().getFullYear()} Neanic Solutions. All rights reserved.
          </p>
          <p className="text-center">
            Empowering Education · Advancing Healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}
