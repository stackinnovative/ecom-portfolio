import { motion, type Variants } from "framer-motion";
import { usePortfolio } from "../../hooks/usePortFolio";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -48 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const About = () => {
  const { about } = usePortfolio();

  return (
    <section
      id="about"
      className="relative bg-theme-bg py-20 md:py-32 overflow-hidden"
    >
      {/* Large faded heading watermark — top right */}
      <span
        className="absolute -top-4 right-0 text-[80px] md:text-[140px] font-black uppercase leading-none tracking-tighter select-none pointer-events-none"
        style={{ color: "var(--text)", opacity: 0.03 }}
      >
        {about.watermark ?? "ABOUT"}
      </span>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── LEFT: Stacked image collage ── */}
          <motion.div
            className="relative flex justify-center lg:justify-start"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Accent square behind images */}
            <div
              className="absolute -bottom-6 -left-4 w-48 h-48 md:w-64 md:h-64 rounded-3xl opacity-10"
              style={{ background: "var(--accent)" }}
            />

            {/* Main large image */}
            <div className="relative w-full max-w-sm md:max-w-md">
              <div className="rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                <img
                  src={about.mainImage}
                  alt="About"
                  className="w-full h-full object-cover"
                />
                {/* Dark gradient at bottom of image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Floating stat card — bottom left of image */}
              <motion.div
                className="absolute -bottom-5 -left-4 md:-left-10 bg-theme-bg border border-theme-muted/10 rounded-2xl px-4 py-3 md:px-5 md:py-4 shadow-xl backdrop-blur-sm"
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.5,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <p className="text-2xl md:text-3xl font-black text-theme-accent leading-none">
                  {about.floatStat.value}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-theme-muted font-bold mt-0.5">
                  {about.floatStat.label}
                </p>
              </motion.div>

              {/* Floating badge card — top right of image */}
              <motion.div
                className="absolute -top-4 -right-4 md:-right-8 bg-theme-accent text-theme-bg rounded-2xl px-3 py-2 md:px-4 md:py-3 shadow-xl"
                initial={{ opacity: 0, scale: 0.8, rotate: -6 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.6,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <p className="text-[10px] font-black uppercase tracking-widest leading-tight">
                  {about.floatBadge ?? "Est. 2018"}
                </p>
              </motion.div>

              {/* Small inset image — overlapping bottom right */}
              <motion.div
                className="absolute -bottom-10 right-0 md:-right-8 w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-4 border-theme-bg shadow-xl"
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.45,
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <img
                  src={about.insetImage}
                  alt="About detail"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* ── RIGHT: Text content ── */}
          <motion.div
            className="flex flex-col mt-16 lg:mt-0"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {/* Label */}
            <motion.p
              variants={fadeUp}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-theme-muted mb-4"
            >
              {about.sectionLabel}
            </motion.p>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-theme-text leading-[0.9] mb-6"
            >
              {about.heading.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {i === about.accentLineIndex ? (
                    <span className="text-theme-accent">{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </motion.h2>

            {/* Divider */}
            <motion.div
              variants={fadeUp}
              className="w-12 h-[3px] rounded-full mb-6"
              style={{ background: "var(--accent)" }}
            />

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-sm md:text-base text-theme-muted leading-relaxed mb-8 max-w-lg"
            >
              {about.description}
            </motion.p>

            {/* Milestones / pillars row */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-2 gap-4 mb-10"
            >
              {about.pillars.map((p, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 p-4 rounded-2xl border border-theme-muted/10 bg-theme-secondary/30"
                >
                  <span
                    className="mt-0.5 w-2 h-2 rounded-full shrink-0"
                    style={{ background: "var(--accent)" }}
                  />
                  <div>
                    <p className="text-xs font-black uppercase tracking-wider text-theme-text mb-0.5">
                      {p.title}
                    </p>
                    <p className="text-[11px] text-theme-muted leading-snug">
                      {p.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA row */}
            <motion.div variants={fadeUp} className="flex items-center gap-4">
              <a
                href={about.ctaHref ?? "#contact"}
                className="px-7 py-3.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all hover:scale-105 hover:shadow-lg"
                style={{
                  background: "var(--accent)",
                  color: "var(--bg)",
                  boxShadow: "0 0 0 0 var(--accent)",
                }}
              >
                {about.ctaText}
              </a>
              <a
                href={about.secondaryCtaHref ?? "#portfolio"}
                className="text-[11px] font-black uppercase tracking-widest text-theme-muted hover:text-theme-accent transition-colors underline underline-offset-4"
              >
                {about.secondaryCtaText ?? "See Our Work"}
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
