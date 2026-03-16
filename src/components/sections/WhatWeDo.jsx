import { motion } from "framer-motion";
import { GraduationCap, Scale, Microchip } from "lucide-react";

const features = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Bridging Knowledge Gaps",
    description:
      "In fields like Nanotechnology and Biotechnology, youth awareness lags. We introduce these fields as viable career options, not just hobbies.",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-100 dark:bg-blue-900/40",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Innovation & IP Rights",
    description:
      "We spread awareness about securing innovations through patents and copyright, empowering young budding minds to grow fearlessly.",
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-100 dark:bg-purple-900/40",
  },
  {
    icon: <Microchip className="w-6 h-6" />,
    title: "Technology-Driven Products",
    description:
      "Understanding changing dynamics in technology and its market impact. We provide training for Schools and Higher Education to upgrade skill-sets.",
    color: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-100 dark:bg-teal-900/40",
  },
];

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
            What We Do
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
            Empowering the Next Generation
          </h3>
          <p className="text-lg text-muted-foreground">
            Through Neanic Solutions, students get a chance to explore advanced
            fields not only as a hobby but also as a viable career option. We
            offer specialized training programs designed to upgrade skill-sets
            for wider career prospects.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-card rounded-2xl p-8 shadow-lg shadow-black/5 border border-border/50 hover:border-primary/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              {/* Step number top-right */}
              <span
                className="absolute top-3 right-4 text-8xl font-display font-black select-none leading-none text-transparent"
                style={{
                  WebkitTextStroke: "2px rgba(0,0,0,0.4)",
                  textShadow: "0px 2px 8px rgba(255,255,255,0.15)",
                }}
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <div
                className={`w-14 h-14 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-foreground mb-3 font-display">
                {feature.title}
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
