import { motion } from "framer-motion";
import { Lightbulb } from "lucide-react";

export function Vision() {
  return (
    <section className="py-24 bg-muted/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full flex justify-between -z-10 opacity-20 pointer-events-none">
        <div className="w-px h-full bg-gradient-to-b from-transparent via-primary to-transparent"></div>
        <div className="w-px h-full bg-gradient-to-b from-transparent via-secondary to-transparent"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-8 ring-8 ring-primary/5"
        >
          <Lightbulb size={40} strokeWidth={1.5} />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-base font-bold text-primary uppercase tracking-widest mb-6"
        >
          Our Vision
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-foreground leading-snug"
        >
          Building new horizons in the education sector for job prospects in
          emerging sectors & transforming healthcare management with advanced
          technologies to make quality care affordable for all.
        </motion.p>
      </div>
    </section>
  );
}
