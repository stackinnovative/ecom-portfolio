import { motion, type Variants } from "framer-motion";
import { MessageSquare, Star, Quote } from "lucide-react";
import { usePortfolio } from "../../hooks/usePortFolio";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const Testimonials = () => {
 const { testimonialsSection } = usePortfolio();

  return (
    <section
      id="testimonials"
      className="py-24 bg-theme-secondary relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-bg border border-theme-muted/10 mb-6 shadow-sm"
          >
            <MessageSquare size={16} className="text-theme-accent" />
            <span className="text-sm font-medium text-theme-text tracking-wide uppercase">
              {testimonialsSection.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-theme-text mb-4"
          >
            {testimonialsSection.headingMain}{" "}
            <span className="text-theme-accent">
              {testimonialsSection.headingHighlight}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="text-lg text-theme-muted"
          >
            {testimonialsSection.description}
          </motion.p>
        </div>

        {/* Reviews Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {testimonialsSection.reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="relative p-8 md:p-10 rounded-3xl bg-theme-bg border border-theme-muted/10 hover:border-theme-accent/30 transition-colors duration-500 shadow-sm"
            >
              {/* Decorative Background Quote */}
              <Quote className="absolute top-6 right-6 text-theme-muted/10 w-16 h-16 pointer-events-none" />

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-theme-accent text-theme-accent"
                  />
                ))}
              </div>

              <p className="text-lg text-theme-text leading-relaxed mb-8 relative z-10">
                "{review.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-theme-muted/10 pt-6">
                {/* Initial Avatar */}
                <div className="w-12 h-12 rounded-full bg-theme-secondary flex items-center justify-center text-theme-accent font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-theme-text">{review.name}</h4>
                  <p className="text-sm text-theme-muted">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
