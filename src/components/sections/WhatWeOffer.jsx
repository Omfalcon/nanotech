import { motion } from "framer-motion";
import {
  BookOpen,
  Dna,
  Bot,
  Cpu,
  Copyright,
  Stethoscope,
  Microscope,
  BookMarked,
} from "lucide-react";

const offerings = [
  {
    title: "Workshops, Seminars & Courses",
    subtitle: "For High-School & Undergraduate Students",
    description:
      "Comprehensive programs designed for students and faculty at high-school and undergraduate levels. Our curriculum stays ahead with continuous updates covering the most relevant emerging fields.",
    icon: <BookOpen className="w-8 h-8" />,
    color: "bg-blue-50 border-blue-100 dark:bg-blue-900/50 dark:border-blue-800",
    iconColor: "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/60",
    tags: ["High School", "Undergrad", "Faculty Development"],
  },
  {
    title: "Nano-Technology",
    subtitle: "Wider Coverage & Hands-on Experience",
    description:
      "More detailed and wider coverage of nanotechnology from fundamentals to cutting-edge applications. Students gain hands-on laboratory experience, lectures by eminent faculty members, and awareness of global career options in nanoscience.",
    icon: <Microscope className="w-8 h-8" />,
    color: "bg-teal-50 border-teal-100 dark:bg-teal-900/50 dark:border-teal-800",
    iconColor: "text-teal-600 bg-teal-100 dark:text-teal-400 dark:bg-teal-900/60",
    tags: [
      "Hands-on Lab",
      "Eminent Faculty",
      "Career Awareness",
      "Materials",
      "Electronics",
    ],
  },
  {
    title: "Bio-Technology",
    subtitle: "Life Sciences Innovation",
    description:
      "Harnessing cellular and biomolecular processes to develop transformative technologies. Practical training sessions combined with expert lectures give students real insight into life sciences careers worldwide.",
    icon: <Dna className="w-8 h-8" />,
    color: "bg-emerald-50 border-emerald-100 dark:bg-emerald-900/50 dark:border-emerald-800",
    iconColor: "text-emerald-600 bg-emerald-100 dark:text-emerald-400 dark:bg-emerald-900/60",
    tags: ["Genetics", "Research", "Global Careers", "Practical Training"],
  },
  {
    title: "Robotics",
    subtitle: "Hands-on Automation & AI",
    description:
      "Design, build and program real robots. Our hands-on approach lets students construct working prototypes while learning from eminent practitioners. Covers AI integration, mechanics, and real-world automation applications.",
    icon: <Bot className="w-8 h-8" />,
    color: "bg-indigo-50 border-indigo-100 dark:bg-indigo-900/50 dark:border-indigo-800",
    iconColor: "text-indigo-600 bg-indigo-100 dark:text-indigo-400 dark:bg-indigo-900/60",
    tags: ["AI Integration", "Build & Code", "Automation", "Prototyping"],
  },
  {
    title: "VLSI",
    subtitle: "Very Large-Scale Integration",
    description:
      "Deep dive into chip design, semiconductor technology and integrated circuit engineering. Lectures by industry professionals combined with simulation-based hands-on training for a complete learning experience.",
    icon: <Cpu className="w-8 h-8" />,
    color: "bg-purple-50 border-purple-100 dark:bg-purple-900/50 dark:border-purple-800",
    iconColor: "text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-900/60",
    tags: ["Chip Design", "Simulation", "Industry Experts", "Hardware"],
  },
  {
    title: "Intellectual Property Rights (IPR)",
    subtitle: "Protect Your Innovations",
    description:
      "Awareness on securing innovations through patents and copyright — empowering young budding minds to protect and grow their ideas. Covers patent filing, copyright law, and global IP strategy for innovators.",
    icon: <Copyright className="w-8 h-8" />,
    color: "bg-orange-50 border-orange-100 dark:bg-orange-900/50 dark:border-orange-800",
    iconColor: "text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-900/60",
    tags: ["Patents", "Copyright", "Innovation", "Legal Awareness"],
  },
  {
    title: "Books & Learning Resources",
    subtitle: "Curated Educational Content",
    description:
      "Specially authored and curated books and reference materials covering all domains — from nanotechnology to biotechnology and IPR. Designed to complement hands-on training with in-depth theoretical grounding.",
    icon: <BookMarked className="w-8 h-8" />,
    color: "bg-amber-50 border-amber-100 dark:bg-amber-900/50 dark:border-amber-800",
    iconColor: "text-amber-600 bg-amber-100 dark:text-amber-400 dark:bg-amber-900/60",
    tags: ["Authored Books", "Reference Material", "Self-Study", "Academic"],
  },
  {
    title: "Patented Nano-Enabled Healthcare Devices",
    subtitle: "Affordable & Personalized Health Management",
    description:
      "Our patented nanotechnology-enabled diagnostic devices bring hospital-grade testing to everyone's doorstep. Rapid, reliable, and affordable point-of-care solutions for widespread health challenges.",
    icon: <Stethoscope className="w-8 h-8" />,
    color: "bg-rose-50 border-rose-100 dark:bg-rose-900/50 dark:border-rose-800",
    iconColor: "text-rose-600 bg-rose-100 dark:text-rose-400 dark:bg-rose-900/60",
    tags: ["Patented", "Point-of-Care", "Affordable", "Personalized"],
    subItems: [
      "Diabetes & related disease monitoring",
      "Kidney dysfunction & Osteoporosis detection",
      "Cardiac monitoring",
      "Neonatal disease management",
      "COVID-19 detection",
      "Cervical & breast cancer detection",
      "Prostate, lung & oral cancer detection",
      "Organ-on-chip for advanced disease monitoring",
    ],
  },
];

export function WhatWeOffer() {
  return (
    <section id="what-we-offer" className="py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
            Curriculum & Solutions
          </h2>
          <h3 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
            What We Offer
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From hands-on technology training by eminent faculty to patented
            nano-enabled healthcare devices — a comprehensive ecosystem for
            learning and health.
          </p>
        </div>

        <div className="relative pb-32">
          {offerings.map((offer, index) => {
            const topOffset = `calc(100px + ${index * 22}px)`;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                className="sticky shadow-xl shadow-black/5 rounded-3xl bg-background mb-5"
                style={{ top: topOffset, zIndex: index }}
              >
                <div
                  className={`w-full h-full rounded-3xl p-7 sm:p-9 border ${offer.color} transition-all duration-300 hover:scale-[1.01] relative overflow-hidden`}
                >
                  {/* Subtle gradient overlay to give depth */}
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background/30 dark:from-background/60 to-transparent pointer-events-none z-0"></div>

                  <div className="flex flex-col sm:flex-row gap-5 items-start relative z-10">
                    <div
                      className={`p-4 rounded-2xl ${offer.iconColor} shrink-0`}
                    >
                      {offer.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-xl sm:text-2xl font-bold text-foreground font-display mb-1">
                        {offer.title}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-muted-foreground mb-4 uppercase tracking-wider">
                        {offer.subtitle}
                      </p>
                      <p className="text-foreground/80 leading-relaxed mb-4 text-sm sm:text-base">
                        {offer.description}
                      </p>
                      {"subItems" in offer && offer.subItems && (
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-4">
                          {offer.subItems.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-foreground/70"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="flex flex-wrap gap-2">
                        {offer.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-white/60 dark:bg-black/40 rounded-full text-xs font-semibold text-foreground/70 border border-black/5 dark:border-white/5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
