import { motion } from "framer-motion";
import {
  BookOpenCheck,
  FlaskConical,
  Compass,
  Users,
  HeartHandshake,
} from "lucide-react";

const outcomes = [
  {
    icon: <BookOpenCheck className="w-5 h-5" />,
    title: "Updated Knowledge",
    description:
      "Key advancements in Science & Technology keeping students and faculty at the forefront.",
    color: "border-blue-200 bg-blue-50 dark:border-blue-900/50 dark:bg-blue-900/20",
    iconBg: "bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400",
  },
  {
    icon: <FlaskConical className="w-5 h-5" />,
    title: "Hands-on Training",
    description:
      "Practical applications bridging academic theory with real-world industry needs.",
    color: "border-teal-200 bg-teal-50 dark:border-teal-900/50 dark:bg-teal-900/20",
    iconBg: "bg-teal-100 text-teal-600 dark:bg-teal-900/40 dark:text-teal-400",
  },
  {
    icon: <Compass className="w-5 h-5" />,
    title: "New Career Avenues",
    description:
      "Novel fields like Nanotechnology and Biotechnology as exciting professional paths.",
    color: "border-purple-200 bg-purple-50 dark:border-purple-900/50 dark:bg-purple-900/20",
    iconBg: "bg-purple-100 text-purple-600 dark:bg-purple-900/40 dark:text-purple-400",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Faculty Empowerment",
    description:
      "Training educators with broader knowledge to guide the next generation of innovators.",
    color: "border-orange-200 bg-orange-50 dark:border-orange-900/50 dark:bg-orange-900/20",
    iconBg: "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400",
  },
  {
    icon: <HeartHandshake className="w-5 h-5" />,
    title: "Healthier Lives",
    description:
      "Affordable healthcare monitoring devices providing rapid, reliable results via nanotechnology.",
    color: "border-rose-200 bg-rose-50 dark:border-rose-900/50 dark:bg-rose-900/20",
    iconBg: "bg-rose-100 text-rose-600 dark:bg-rose-900/40 dark:text-rose-400",
  },
];

export function KeyOutcomes() {
  return (
    <section className="py-20 bg-background border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
            The Impact
          </h2>
          <h3 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            Key Outcomes
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Tangible results that define our commitment to education and
            healthcare.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className={`rounded-xl p-5 border-2 ${outcome.color} hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 ${i === 4 ? "col-span-2 sm:col-span-1" : ""}`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${outcome.iconBg}`}
              >
                {outcome.icon}
              </div>
              <h4 className="text-sm font-bold text-foreground font-display mb-1.5 leading-snug">
                {outcome.title}
              </h4>
              <p className="text-muted-foreground text-xs leading-relaxed">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
