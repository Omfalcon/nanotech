import { motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import MusicReactiveBackground from "@/components/ui/MusicReactiveBackground";

export function Hero() {
  const scrollToServices = (e) => {
    e.preventDefault();
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = (e) => {
    e.preventDefault();
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[90vh] flex items-center">
      {/* Background with absolute positioning */}
      <div className="absolute inset-0 -z-10">
        <MusicReactiveBackground />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 border border-primary/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Pioneering the Future
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-foreground leading-[1.1] tracking-tight mb-6"
          >
            Modern Education. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Futuristic Technology.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto"
          >
            Founded with a vision of collaborative enhancement. We focus on the
            latest technological trends, blending academics, skill enhancement,
            and offering nanotechnology-driven diagnostic devices for affordable
            healthcare.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#services"
              onClick={scrollToServices}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300"
            >
              Explore Services
              <ArrowRight size={18} />
            </a>

            <a
              href="#about"
              onClick={scrollToAbout}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-background text-foreground border-2 border-border font-semibold flex items-center justify-center gap-2 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              <PlayCircle size={18} className="text-primary" />
              Learn More
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
