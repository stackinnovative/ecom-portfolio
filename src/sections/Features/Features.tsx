import { motion, type Variants } from "framer-motion";
import { PenTool, Printer, Factory, Sparkles } from "lucide-react";
import { usePortfolio } from "../../hooks/usePortFolio";

// Map string identifiers from the config to actual Lucide components
const iconMap: Record<string, React.ElementType> = {
  design: PenTool,
  print: Printer,
  manufacture: Factory,
};

// Scroll animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Delay between each card appearing
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const Features = () => {
const { featuresSection } = usePortfolio();
  return (
    <section
      id="features"
      className="py-24 bg-theme-secondary relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-secondary border border-theme-muted/10 mb-6"
          >
            <Sparkles size={16} className="text-theme-accent" />
            <span className="text-sm font-medium text-theme-text tracking-wide uppercase">
              {featuresSection.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-theme-text mb-4"
          >
            {featuresSection.headingMain}{" "}
            <span className="text-theme-accent">
              {featuresSection.headingHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-theme-muted"
          >
            {featuresSection.description}
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // Triggers when element is 100px into view
        >
          {featuresSection.items.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Sparkles; // Fallback icon

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative p-8 rounded-3xl bg-theme-card border border-theme-muted/10 hover:border-theme-accent/50 transition-colors duration-300 shadow-sm hover:shadow-xl hover:shadow-theme-accent/5"
              >
                {/* Icon Wrapper - Inverts colors on group hover */}
                <div className="w-14 h-14 rounded-2xl bg-theme-accent/10 text-theme-accent flex items-center justify-center mb-6 group-hover:bg-theme-accent group-hover:text-theme-bg transition-colors duration-300">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-bold text-theme-text mb-3">
                  {feature.title}
                </h3>

                <p className="text-theme-muted leading-relaxed">
                  {feature.desc}
                </p>

                {/* Decorative background gradient that appears on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-theme-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl pointer-events-none transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
