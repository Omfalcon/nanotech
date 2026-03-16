import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
            Our Services
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            Empowering Awareness & Healthcare
          </h3>
          <p className="text-lg text-muted-foreground">
            We are committed towards empowering awareness, advancing careers,
            and transforming healthcare through innovative point-of-care
            technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Ed-Tech Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 shadow-xl shadow-black/5 hover:shadow-2xl hover:border-primary/30 transition-all duration-500"
          >
            <div className="aspect-[4/3] w-full overflow-hidden relative bg-blue-50 dark:bg-blue-900/20">
              <img
                src={`${import.meta.env.BASE_URL}images/ed-tech.png`}
                alt="Education Technology"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent z-10 pointer-events-none"></div>
            </div>
            <div className="p-8 relative z-20">
              <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 font-bold text-sm mb-4">
                Ed-Tech
              </div>
              <h4 className="text-3xl font-display font-bold text-foreground mb-4">
                Educational Technologies
              </h4>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Workshops, seminars, and courses designed to bring high-school
                and undergraduate students to the forefront of modern
                technological trends like Robotics, VLSI, and Nanotechnology.
              </p>
              <button className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all group/btn shadow-md hover:shadow-lg shadow-blue-600/20 active:scale-95">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Med-Tech Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative bg-card rounded-3xl overflow-hidden border border-border/50 shadow-xl shadow-black/5 hover:shadow-2xl hover:border-primary/30 transition-all duration-500"
          >
            <div className="aspect-[4/3] w-full overflow-hidden relative bg-teal-50 dark:bg-teal-900/20">
              <img
                src={`${import.meta.env.BASE_URL}images/med-tech.png`}
                alt="Medical Technology"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent z-10 pointer-events-none"></div>
            </div>
            <div className="p-8 relative z-20">
              <div className="inline-block px-4 py-1.5 rounded-full bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-400 font-bold text-sm mb-4">
                Med-Tech
              </div>
              <h4 className="text-3xl font-display font-bold text-foreground mb-4">
                Healthcare Diagnostics
              </h4>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nanotechnology enabled diagnostic devices offering point-of-care
                solutions for affordable healthcare, ranging from diabetes
                monitoring to advanced cancer detection and organ-on-chip
                technology.
              </p>
              <button className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded-full bg-teal-600 hover:bg-teal-700 text-white font-medium transition-all group/btn shadow-md hover:shadow-lg shadow-teal-600/20 active:scale-95">
                Learn More
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
