import { motion, type Variants } from "framer-motion";
import { User, Leaf, Globe, Sparkles } from "lucide-react";
import { usePortfolio } from "../../hooks/usePortFolio";

const iconMap: Record<string, React.ElementType> = {
  leaf: Leaf,
  globe: Globe,
};

// Cinematic scroll animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const bentoVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }, // Apple-style snappy ease
  },
};

export const About = () => {
const { aboutSection } = usePortfolio();
  return (
    <section
      id="about"
      // Alternating background: using secondary here if Portfolio used bg-theme-bg
      className="py-24 bg-theme-secondary relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-bg border border-theme-muted/10 mb-6 shadow-sm"
          >
            <User size={16} className="text-theme-accent" />
            <span className="text-sm font-medium text-theme-text tracking-wide uppercase">
              {aboutSection.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl font-bold text-theme-text mb-4"
          >
            {aboutSection.headingMain}{" "}
            <span className="text-theme-accent">
              {aboutSection.headingHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg text-theme-muted"
          >
            {aboutSection.description}
          </motion.p>
        </div>

        {/* BENTO BOX GRID */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* BOX 1: The Main Story (Spans 2 Columns) */}
          <motion.div
            variants={bentoVariants}
            className="md:col-span-2 relative p-8 md:p-12 rounded-3xl bg-theme-card border border-theme-muted/10 overflow-hidden group hover:border-theme-accent/30 transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-theme-accent/5"
          >
            {/* Subtle background glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-theme-accent/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />

            <Sparkles className="text-theme-accent mb-6" size={32} />
            <h3 className="text-3xl font-bold text-theme-text mb-4">
              {aboutSection.bentoBoxes.mainStory.title}
            </h3>
            <p className="text-lg text-theme-muted leading-relaxed max-w-2xl">
              {aboutSection.bentoBoxes.mainStory.text}
            </p>
          </motion.div>

          {/* BOX 2: The Highlight Stat (Spans 1 Column) */}
          <motion.div
            variants={bentoVariants}
            className="md:col-span-1 p-8 md:p-12 rounded-3xl bg-theme-accent text-theme-bg flex flex-col justify-center items-center text-center group hover:scale-[1.02] transition-transform duration-500 shadow-lg shadow-theme-accent/20"
          >
            <span className="text-6xl md:text-7xl font-extrabold tracking-tight mb-2">
              {aboutSection.bentoBoxes.statBox.value}
            </span>
            <span className="text-lg font-medium opacity-90 uppercase tracking-widest">
              {aboutSection.bentoBoxes.statBox.label}
            </span>
          </motion.div>

          {/* BOXES 3 & 4: Sub-features (Span 1.5 Columns each essentially, adapting to grid) */}
          {aboutSection.bentoBoxes.features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            // The first feature spans 1 column, the second spans 2. This creates asymmetry!
            const gridSpanClass =
              index === 0 ? "md:col-span-1" : "md:col-span-2";

            return (
              <motion.div
                key={index}
                variants={bentoVariants}
                className={`${gridSpanClass} p-8 rounded-3xl bg-theme-card border border-theme-muted/10 hover:border-theme-accent/30 transition-colors duration-500 shadow-sm hover:shadow-xl hover:shadow-theme-accent/5`}
              >
                <div className="w-12 h-12 rounded-full bg-theme-bg border border-theme-muted/10 flex items-center justify-center mb-6 text-theme-accent shadow-sm">
                  <Icon size={24} />
                </div>
                <h4 className="text-xl font-bold text-theme-text mb-3">
                  {feature.title}
                </h4>
                <p className="text-theme-muted leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
