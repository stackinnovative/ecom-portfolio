import { motion, type Variants } from "framer-motion";
import { usePortfolio } from "../../hooks/usePortFolio";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const BrandValues = () => {
  const { brandValues } = usePortfolio();

  return (
    <section className="relative bg-theme-bg py-16 md:py-24 overflow-hidden">
      {/* Subtle accent glow blob — uses CSS var so it's theme-aware */}
      <div
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: "var(--accent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section label */}
        <motion.p
          className="text-center text-[10px] uppercase tracking-[0.3em] font-bold text-theme-muted mb-10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {brandValues.sectionLabel}
        </motion.p>

        {/* Always 3-column grid — compact on mobile, spacious on desktop */}
        <motion.div
          className="grid grid-cols-3 gap-3 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {brandValues.items.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="group relative flex flex-col items-center text-center rounded-2xl md:rounded-3xl border border-theme-muted/10 bg-theme-secondary/40 backdrop-blur-sm p-4 md:p-8 lg:p-10 cursor-default overflow-hidden"
            >
              {/* Hover accent fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl md:rounded-3xl"
                style={{ background: "var(--accent)" }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 h-[2px] w-0 group-hover:w-3/4 transition-all duration-500 rounded-full"
                style={{ background: "var(--accent)" }}
              />

              {/* Icon image */}
              <div className="relative mb-4 md:mb-6 w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                {/* Glow ring behind icon */}
                <div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-md"
                  style={{ background: "var(--accent)" }}
                />
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                  style={{ filter: "var(--icon-filter, none)" }}
                />
              </div>

              {/* Title */}
              <h3 className="text-[11px] md:text-sm lg:text-base font-bold uppercase tracking-wider text-theme-text leading-tight">
                {item.title}
              </h3>

              {/* Description — hidden on mobile to keep cards compact */}
              {item.description && (
                <p className="hidden md:block mt-2 text-xs lg:text-sm text-theme-muted leading-relaxed">
                  {item.description}
                </p>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
