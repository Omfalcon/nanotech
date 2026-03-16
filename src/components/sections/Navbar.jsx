import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "What We Offer", href: "#what-we-offer" },
    { name: "Services", href: "#services" },
    { name: "Strategic Focus", href: "#focus" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Outer wrapper: full-width fixed strip
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 pointer-events-none">
      <nav
        className={cn(
          "w-full transition-all duration-500 pointer-events-auto",
          isScrolled
            ? // Floating pill mode
            "mt-3 mx-4 max-w-3xl rounded-full bg-background/80 dark:bg-card/80 backdrop-blur-xl shadow-xl shadow-black/10 border border-border/60 px-5 py-2.5"
            : // Full-width top bar mode
            "bg-transparent py-5 px-4 sm:px-6 lg:px-8 max-w-7xl"
        )}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.jpg`}
              alt="Neanic Solutions Logo"
              className={cn(
                "object-cover rounded-full group-hover:scale-105 transition-all duration-300 shadow-sm",
                isScrolled ? "h-10 w-10" : "h-14 w-14"
              )}
            />
            <span
              className={cn(
                "font-display font-bold tracking-tight text-foreground transition-all duration-300",
                isScrolled ? "text-lg" : "text-xl pl-1"
              )}
            >
              Neanic <span className="text-primary">Solutions</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <div className={cn("flex", isScrolled ? "gap-4" : "gap-6")}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            {/* Only show CTA button when NOT floating */}
            {!isScrolled && (
              <a
                href="#services"
                onClick={(e) => scrollToSection(e, "#services")}
                className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-200"
              >
                Explore Services
              </a>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Nav dropdown — positioned absolutely under the pill */}
      {mobileMenuOpen && (
        <div
          className={cn(
            "lg:hidden absolute top-full mt-2 bg-background/95 dark:bg-card/95 backdrop-blur-xl border border-border shadow-xl rounded-2xl overflow-hidden w-[calc(100%-2rem)] pointer-events-auto",
            isScrolled ? "max-w-3xl" : "max-w-7xl"
          )}
        >
          <div className="flex flex-col p-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-base font-medium text-foreground hover:text-primary p-2 rounded-lg hover:bg-muted transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "#services")}
              className="px-5 py-3 rounded-xl bg-primary text-primary-foreground text-center font-semibold mt-2"
            >
              Explore Services
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
