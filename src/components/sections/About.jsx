import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Users } from "lucide-react";
import { AnimatedCounter } from "../AnimatedCounter";

export function About() {
  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
              About Neanic Solutions
            </h2>
            <h3 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-6">
              A Vision of Collaborative Enhancement
            </h3>

            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Neanic Solutions, the company of modern education with
                futuristic technological solutions has been founded with a
                vision of collaborative enhancement.
              </p>
              <p>
                We have been the first of its kind to focus on latest
                Technological and General trends, a combination of academics,
                awareness and skills enhancement of each student alongside
                offering nanotechnology driven diagnostic devices for affordable
                healthcare.
              </p>
              <p>
                Within a short span of time, Neanic Learning has earned a name
                in the education sector in North of being a company that has a
                sharp focus on areas of advanced technologies, and General
                trainings, Seminars and Workshops with continuous update in the
                curriculum.
              </p>
            </div>


          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-[2.5rem] blur-3xl -z-10 transform scale-95"></div>
            <img
              src={`${import.meta.env.BASE_URL}images/about-illustration.png`}
              alt="Collaboration and Technology"
              className="w-full h-auto rounded-[2.5rem] shadow-2xl shadow-black/5 object-cover aspect-4/3 border border-white/50"
            />

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-card p-6 rounded-2xl shadow-xl shadow-black/5 border border-border flex items-center gap-4 animate-in fade-in slide-in-from-bottom-4 delay-700 fill-mode-both">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="text-primary w-6 h-6" />
              </div>
              <div>
                <p className="font-bold text-foreground">Top Rated</p>
                <p className="text-sm text-muted-foreground">
                  Education Partner
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
