import { motion } from "framer-motion";
import {
  Target,
  GraduationCap,
  HeartPulse,
  Lightbulb,
  Globe,
  BookOpen,
} from "lucide-react";

const pillars = [
  {
    icon: <GraduationCap className="w-5 h-5" />,
    title: "Education & Awareness",
    desc: "Spreading knowledge about Nanotechnology, Biotechnology, Robotics, VLSI and IPR.",
    color: "bg-blue-500",
    gradientHover: "group-hover:from-blue-500/20",
    textColor: "group-hover:text-blue-500",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Hands-on Training",
    desc: "Practical lab sessions and prototype building to bridge theory and industry.",
    color: "bg-teal-500",
    gradientHover: "group-hover:from-teal-500/20",
    textColor: "group-hover:text-teal-500",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Global Career Awareness",
    desc: "Opening new career avenues in emerging sectors worldwide for students.",
    color: "bg-emerald-500",
    gradientHover: "group-hover:from-emerald-500/20",
    textColor: "group-hover:text-emerald-500",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Faculty Development",
    desc: "Training faculty and staff for broader knowledge in cutting-edge technologies.",
    color: "bg-purple-500",
    gradientHover: "group-hover:from-purple-500/20",
    textColor: "group-hover:text-purple-500",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Innovation & IP Protection",
    desc: "Empowering innovators with patent and copyright awareness to protect their ideas.",
    color: "bg-orange-500",
    gradientHover: "group-hover:from-orange-500/20",
    textColor: "group-hover:text-orange-500",
  },
  {
    icon: <HeartPulse className="w-5 h-5" />,
    title: "Affordable Healthcare",
    desc: "Patented nano-enabled diagnostic devices for rapid, reliable, and accessible care.",
    color: "bg-rose-500",
    gradientHover: "group-hover:from-rose-500/20",
    textColor: "group-hover:text-rose-500",
  },
];

export function StrategicFocus() {
  return (
    <section
      id="focus"
      className="py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900/50 dark:to-slate-900/80 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-3">
            What Drives Us
          </h2>
          <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 dark:text-slate-100 mb-6 tracking-tight">
            Our Strategic Focus
          </h3>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Six core pillars guiding our mission to transform education and
            healthcare through accessible innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-3xl p-[1px] group hover:-translate-y-2 transition-transform duration-500 overflow-hidden"
            >
              {/* Outer gradient border (animated on hover with pillar color) */}
              <div className={`absolute inset-0 bg-gradient-to-br from-border/50 to-border/10 ${pillar.gradientHover} group-hover:via-background group-hover:to-transparent transition-colors duration-500 rounded-3xl z-0`} />

              {/* Inner card background */}
              <div className={`relative h-full bg-card dark:${pillar.color.replace('bg-', 'bg-')}/15 backdrop-blur-xl rounded-[23px] p-8 flex flex-col z-10 overflow-hidden shadow-xl shadow-black/5`}>
                
                {/* Subtle colored background gradient based on pillar color */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.color.replace('bg-', 'from-')}/20 to-transparent z-0 opacity-80 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                {/* Intense colored background glow on hover */}
                <div className={`absolute -bottom-24 -right-24 w-48 h-48 ${pillar.color} rounded-full mix-blend-multiply dark:mix-blend-screen opacity-10 group-hover:opacity-30 blur-3xl transition-opacity duration-500 z-0 pointer-events-none`} />

                {/* Vibrant icon block */}
                <div
                  className={`w-14 h-14 ${pillar.color} bg-gradient-to-br from-white/20 to-transparent shadow-lg ${pillar.color.replace('bg-', 'shadow-')}/30 rounded-xl flex items-center justify-center text-white mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 relative z-10`}
                >
                  {pillar.icon}
                </div>
                
                <h4 className={`text-xl font-bold font-display mb-3 text-foreground leading-snug relative z-10 ${pillar.textColor} transition-colors duration-300`}>
                  {pillar.title}
                </h4>
                
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed relative z-10 flex-grow">
                  {pillar.desc}
                </p>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
