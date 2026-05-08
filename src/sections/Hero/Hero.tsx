import { motion, type Variants } from "framer-motion";
import { ArrowRight, Box, Sparkles } from "lucide-react";
import { usePortfolio } from "../../hooks/usePortFolio";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const Hero = () => {
  const { hero } = usePortfolio();
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Futuristic Background Glow - Now uses your global accent color */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-theme-accent/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-theme-accent/5 blur-[100px] rounded-full" />
        {/* Subtle grid overlay for that tech/modern feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Floating Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-secondary/50 border border-theme-muted/20 backdrop-blur-md mb-8 shadow-sm">
              <Sparkles size={16} className="text-theme-accent" />
              <span className="text-sm font-medium text-theme-text">
                {hero.badge}
              </span>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="mb-6 space-y-2">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-theme-text">
              {hero.headingMain}{" "}
              <span className="theme-shimmer">{hero.headingHighlight}</span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-theme-muted max-w-2xl mb-10 leading-relaxed"
          >
            {hero.description}
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            {/* Primary Button */}
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-theme-accent text-theme-bg font-semibold flex items-center justify-center gap-2 transition-all shadow-lg shadow-theme-accent/20 hover:shadow-theme-accent/40 hover:-translate-y-1">
              <Box size={20} />
              {hero.primaryCta}
            </button>
            {/* Secondary Button */}
            <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-transparent text-theme-text border border-theme-muted/30 hover:bg-theme-secondary font-semibold flex items-center justify-center gap-2 transition-all hover:-translate-y-1">
              {hero.secondaryCta}
              <ArrowRight size={20} className="text-theme-muted" />
            </button>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            // Reduced gap on mobile (gap-2), standard gap on desktop (md:gap-4)
            className="mt-16 mb-10 pt-8 border-t border-theme-muted/20 w-full grid grid-cols-3 gap-2 md:gap-4"
          >
            {hero.stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Scaled text: xl on mobile, 3xl on desktop. Added whitespace-nowrap to prevent awkward line breaks */}
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-theme-text whitespace-nowrap">
                  {stat.value}
                </span>
                {/* Scaled text: tiny on mobile, small on desktop */}
                <span className="text-[10px] sm:text-xs md:text-sm text-theme-muted mt-1 md:mt-2 uppercase tracking-wider font-medium">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
