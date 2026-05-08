import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { CheckCircle2, CreditCard } from "lucide-react";
import { usePortfolio } from "../../hooks/usePortFolio";

// Scroll animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const Pricing = () => {
  const { pricingSection } = usePortfolio();
  const [isBulk, setIsBulk] = useState(false);

  return (
    <section
      id="pricing"
      // Alternating background to main bg
      className="py-24 bg-theme-bg relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-secondary border border-theme-muted/10 mb-6"
          >
            <CreditCard size={16} className="text-theme-accent" />
            <span className="text-sm font-medium text-theme-text tracking-wide uppercase">
              {pricingSection.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-theme-text mb-4"
          >
            {pricingSection.headingMain}{" "}
            <span className="text-theme-accent">
              {pricingSection.headingHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-theme-muted mb-8"
          >
            {pricingSection.description}
          </motion.p>

          {/* Interactive Toggle Switch */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative flex items-center p-1 bg-theme-secondary border border-theme-muted/20 rounded-full"
          >
            <button
              onClick={() => setIsBulk(false)}
              className={`relative w-40 py-3 text-sm font-semibold rounded-full z-10 transition-colors duration-300 ${
                !isBulk ? "text-theme-bg" : "text-theme-text"
              }`}
            >
              {pricingSection.toggleLeft}
            </button>
            <button
              onClick={() => setIsBulk(true)}
              className={`relative w-40 py-3 text-sm font-semibold rounded-full z-10 transition-colors duration-300 ${
                isBulk ? "text-theme-bg" : "text-theme-text"
              }`}
            >
              {pricingSection.toggleRight}
            </button>

            {/* The sliding pill background */}
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="absolute top-1 bottom-1 w-40 bg-theme-accent rounded-full z-0"
              initial={false}
              animate={{
                x: isBulk ? "100%" : "0%",
              }}
            />
          </motion.div>
        </div>

        {/* Pricing Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {pricingSection.tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className={`relative p-8 md:p-10 rounded-3xl transition-all duration-300 ${
                tier.isPopular
                  ? "bg-theme-card border-2 border-theme-accent shadow-2xl shadow-theme-accent/10 md:-translate-y-4" // Pops out
                  : "bg-theme-secondary/50 border border-theme-muted/20 hover:border-theme-muted/50" // Flatter
              }`}
            >
              {/* Popular Badge */}
              {tier.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1.5 rounded-full bg-theme-accent text-theme-bg text-xs font-bold uppercase tracking-widest shadow-sm">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-theme-text mb-2">
                {tier.name}
              </h3>
              <p className="text-sm text-theme-muted mb-6 h-12">
                {tier.description}
              </p>

              {/* Dynamic Price based on Toggle */}
              <div className="mb-8">
                <span
                  className={`text-4xl font-extrabold ${tier.isPopular ? "gold-shimmer" : "text-theme-text"}`}
                >
                  {isBulk ? tier.priceBulk : tier.priceStandard}
                </span>
              </div>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-xl font-bold mb-8 transition-all hover:-translate-y-1 ${
                  tier.isPopular
                    ? "bg-theme-accent text-theme-bg shadow-lg shadow-theme-accent/20 hover:shadow-theme-accent/40"
                    : "bg-transparent text-theme-text border border-theme-muted/30 hover:bg-theme-card"
                }`}
              >
                {tier.ctaText}
              </button>

              {/* Features List */}
              <div className="space-y-4">
                <p className="text-sm font-semibold text-theme-text uppercase tracking-wider mb-4">
                  What's Included:
                </p>
                {tier.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className={`shrink-0 ${tier.isPopular ? "text-theme-accent" : "text-theme-muted"}`}
                    />
                    <span className="text-theme-muted text-sm leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
