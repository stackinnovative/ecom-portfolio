import { useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Tag } from "lucide-react";
import { usePortfolio } from "../../hooks/usePortFolio";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.1 },
  },
};

interface TimeLeft {
  hours: string;
  minutes: string;
  seconds: string;
}

const getTimeLeft = (deadline: Date): TimeLeft => {
  const diff = Math.max(deadline.getTime() - Date.now(), 0);
  const h = Math.floor(diff / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  const pad = (n: number) => String(n).padStart(2, "0");
  return { hours: pad(h), minutes: pad(m), seconds: pad(s) };
};

const FlipUnit = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <div
      className="relative w-12 h-14 md:w-16 md:h-20 rounded-xl flex items-center justify-center overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(8px)",
      }}
    >
      {/* top/bottom split line */}
      <div className="absolute inset-x-0 top-1/2 h-px bg-black/20" />
      <span className="text-2xl md:text-4xl font-black text-white tracking-tight tabular-nums">
        {value}
      </span>
    </div>
    <span className="mt-1.5 text-[9px] md:text-[10px] uppercase tracking-widest font-bold text-white/60">
      {label}
    </span>
  </div>
);

export const PromoBanner = () => {
  const { promoBanner } = usePortfolio();

  // Deadline: config offset hours from now, or fixed date
  const [deadline] = useState(() => {
    const d = new Date();
    d.setHours(d.getHours() + (promoBanner.countdownHours ?? 12));
    return d;
  });

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft(deadline));

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(deadline)), 1000);
    return () => clearInterval(id);
  }, [deadline]);

  return (
    <section className="relative w-full overflow-hidden py-0">
      {/* Full-bleed image */}
      <div className="relative min-h-[420px] md:min-h-[520px] flex items-center">
        <img
          src={promoBanner.bgImage}
          alt="Promo"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Dark overlay — heavier on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Accent color tint layer */}
        <div
          className="absolute inset-0 opacity-20 mix-blend-color"
          style={{ background: "var(--accent)" }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-8 py-16 md:py-24">
          <motion.div
            className="flex flex-col items-start max-w-2xl"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Offer badge */}
            <motion.div variants={fadeUp} className="mb-5">
              <span
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.25em] px-4 py-2 rounded-full"
                style={{ background: "var(--accent)", color: "var(--bg)" }}
              >
                <Tag size={11} />
                {promoBanner.badge}
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="text-4xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-white leading-[0.88] mb-4"
            >
              {promoBanner.heading.split("\n").map((line, i) => (
                <span key={i} className="block">
                  {i === (promoBanner.accentLineIndex ?? 0) ? (
                    <span style={{ color: "var(--accent)" }}>{line}</span>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </motion.h2>

            {/* Subtext */}
            <motion.p
              variants={fadeUp}
              className="text-sm md:text-base text-white/70 mb-10 leading-relaxed max-w-md"
            >
              {promoBanner.description}
            </motion.p>

            {/* Countdown */}
            <motion.div
              variants={fadeUp}
              className="flex items-end gap-3 md:gap-4 mb-10"
            >
              <FlipUnit value={timeLeft.hours} label="Hours" />
              <span className="text-2xl md:text-4xl font-black text-white/40 mb-6">
                :
              </span>
              <FlipUnit value={timeLeft.minutes} label="Mins" />
              <span className="text-2xl md:text-4xl font-black text-white/40 mb-6">
                :
              </span>
              <FlipUnit value={timeLeft.seconds} label="Secs" />
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 flex-wrap"
            >
              <a
                href={promoBanner.ctaHref ?? "#products"}
                className="group flex items-center gap-3 px-7 py-4 rounded-full text-[11px] font-black uppercase tracking-widest transition-all hover:scale-105 hover:shadow-xl"
                style={{
                  background: "var(--accent)",
                  color: "var(--bg)",
                  boxShadow: "0 0 32px -4px var(--accent)",
                }}
              >
                {promoBanner.ctaText}
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              {promoBanner.secondaryCtaText && (
                <a
                  href={promoBanner.secondaryCtaHref ?? "#"}
                  className="text-[11px] font-black uppercase tracking-widest text-white/60 hover:text-white transition-colors underline underline-offset-4"
                >
                  {promoBanner.secondaryCtaText}
                </a>
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Right side — big offer pill floating on desktop */}
        <motion.div
          className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 hidden md:flex flex-col items-center justify-center rounded-full border-4 border-white/10 aspect-square w-44 md:w-52"
          style={{
            background: "rgba(255,255,255,0.06)",
            backdropFilter: "blur(12px)",
          }}
          initial={{ opacity: 0, scale: 0.7, rotate: -12 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-5xl md:text-6xl font-black text-white leading-none">
            {promoBanner.offerLabel ?? "50%"}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-white/60 font-bold mt-1">
            {promoBanner.offerSublabel ?? "OFF"}
          </span>
        </motion.div>
      </div>
    </section>
  );
};
