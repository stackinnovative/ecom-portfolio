import { motion, type Variants } from "framer-motion";
import { Plus } from "lucide-react";
import { usePortfolio } from "../../hooks/usePortFolio";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export const Hero = () => {
  const { hero } = usePortfolio();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-theme-bg overflow-hidden"
    >
      {/* Background Image with theme-aware overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.bgImage}
          alt="Hero Background"
          className="w-full h-full object-cover object-center opacity-100 dark:opacity-40"
        />
        {/* Left-to-right fade so text stays legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-theme-bg via-theme-bg/70 to-theme-bg/10" />
        {/* Bottom fade into page */}
        <div className="absolute inset-0 bg-gradient-to-t from-theme-bg via-transparent to-transparent" />
        {/* Subtle top fade for nav readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-theme-bg/30 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 w-full pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] font-bold text-theme-accent border border-theme-accent/30 bg-theme-accent/10 px-4 py-2 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-theme-accent animate-pulse" />
                {hero.badge}
              </span>
            </motion.div>

            {/* Giant Heading */}
            <motion.div variants={itemVariants} className="mb-8 flex flex-col">
              {/* First word — accent color (solid, like "GROW" in ref) */}
              <h1 className="text-5xl sm:text-7xl lg:text-[100px] font-black leading-[0.85] tracking-tighter text-theme-accent uppercase mb-1">
                {hero.headingMain}
              </h1>
              {/* Second line — shimmer keyframe from global CSS */}
              <h1 className="text-5xl sm:text-7xl lg:text-[100px] font-black leading-[0.85] tracking-tighter uppercase theme-shimmer">
                {hero.headingHighlight}
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-theme-muted max-w-sm mb-10 leading-relaxed font-medium"
            >
              {hero.description}
            </motion.p>

            {/* Stats row */}
            {hero.stats && (
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-8 mb-10"
              >
                {hero.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-2xl font-black text-theme-text tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-theme-muted font-semibold">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </motion.div>
            )}

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4"
            >
              <a
                href="#contact"
                className="group relative px-6 py-4 bg-theme-accent text-theme-bg font-bold rounded-lg flex items-center gap-4 overflow-hidden shadow-lg shadow-theme-accent/20 transition-all hover:scale-[1.03] active:scale-95"
              >
                <span className="relative z-10 text-sm tracking-wide">
                  {hero.primaryCta}
                </span>
                <div className="relative z-10 w-6 h-6 bg-theme-bg/20 rounded flex items-center justify-center">
                  <Plus size={16} />
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
