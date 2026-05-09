import { useRef, useState, useEffect, useCallback } from "react";
import { motion, type Variants } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { usePortfolio } from "../../hooks/usePortFolio";

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const NewArrivals = () => {
  const { newArrivals } = usePortfolio();
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, scrollLeft: 0 });

  // Derive card width from the track's first child
  const getCardWidth = useCallback(() => {
    const el = trackRef.current;
    if (!el || !el.firstElementChild) return 260;
    const style = getComputedStyle(el);
    const gap = parseFloat(style.columnGap || style.gap || "16");
    return (el.firstElementChild as HTMLElement).offsetWidth + gap;
  }, []);

  const syncState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    // Use a small buffer (2px) to prevent sub-pixel rounding errors
    setCanLeft(el.scrollLeft > 2);
    setCanRight(Math.ceil(el.scrollLeft) < el.scrollWidth - el.clientWidth - 2);

    // Active dot = whichever card's left edge is closest to track left
    const cardW = getCardWidth();
    const idx = Math.round(el.scrollLeft / cardW);
    setActiveIndex(Math.min(idx, newArrivals.items.length - 1));
  }, [getCardWidth, newArrivals.items.length]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    syncState();
    el.addEventListener("scroll", syncState, { passive: true });
    window.addEventListener("resize", syncState);
    return () => {
      el.removeEventListener("scroll", syncState);
      window.removeEventListener("resize", syncState);
    };
  }, [syncState]);

  const scrollTo = (dir: "left" | "right") => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({
      left: dir === "left" ? -getCardWidth() : getCardWidth(),
      behavior: "smooth",
    });
  };

  // Tap a dot → scroll to that card
  const scrollToIndex = (i: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollTo({ left: getCardWidth() * i, behavior: "smooth" });
  };

  // Mouse drag enhancements
  const onMouseDown = (e: React.MouseEvent) => {
    const el = trackRef.current;
    if (!el) return;
    isDragging.current = true;
    dragStart.current = {
      x: e.pageX - el.offsetLeft,
      scrollLeft: el.scrollLeft,
    };
    el.style.cursor = "grabbing";
    el.style.userSelect = "none"; // Prevent text highlighting while dragging
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const el = trackRef.current;
    if (!el) return;
    e.preventDefault();

    // Calculate distance and apply a multiplier for smoother, faster dragging
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragStart.current.x) * 1.5;
    el.scrollLeft = dragStart.current.scrollLeft - walk;
  };

  const stopDrag = () => {
    isDragging.current = false;
    if (trackRef.current) {
      trackRef.current.style.cursor = "grab";
      trackRef.current.style.removeProperty("user-select");
    }
  };

  return (
    <section
      id="new-arrivals"
      className="relative bg-theme-bg py-20 md:py-28 overflow-hidden"
    >
      {/* Watermark */}
      <span
        className="absolute -bottom-4 right-0 text-[80px] md:text-[150px] font-black uppercase leading-none tracking-tighter select-none pointer-events-none"
        style={{ color: "var(--text)", opacity: 0.03 }}
      >
        NEW
      </span>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header row */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-14 gap-6"
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-theme-muted mb-3">
              {newArrivals.sectionLabel}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-theme-text leading-[0.9]">
              {newArrivals.heading.split(" ").map((w, i) =>
                i === (newArrivals.accentWordIndex ?? 0) ? (
                  <span key={i} className="text-theme-accent">
                    {" "}
                    {w}
                  </span>
                ) : (
                  <span key={i}> {w}</span>
                ),
              )}
            </h2>
            <p className="mt-3 text-sm text-theme-muted max-w-md">
              {newArrivals.subheading}
            </p>
          </div>

          {/* Arrow controls — desktop only */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollTo("left")}
              disabled={!canLeft}
              className="w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300 disabled:opacity-20 hover:scale-105 active:scale-95 disabled:hover:scale-100"
              style={{
                borderColor: canLeft ? "var(--accent)" : "var(--muted)",
                color: canLeft ? "var(--accent)" : "var(--muted)",
              }}
            >
              <ArrowLeft size={16} />
            </button>
            <button
              onClick={() => scrollTo("right")}
              disabled={!canRight}
              className="w-11 h-11 rounded-full flex items-center justify-center border transition-all duration-300 disabled:opacity-20 hover:scale-105 active:scale-95 disabled:hover:scale-100"
              style={{
                borderColor: canRight ? "var(--accent)" : "var(--muted)",
                color: canRight ? "var(--accent)" : "var(--muted)",
              }}
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scrollable track — bleeds edge to edge */}
      <div
        ref={trackRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        className="flex gap-4 md:gap-5 overflow-x-auto scroll-smooth pb-8"
        style={{
          paddingLeft: "clamp(1.5rem, 5vw, 6rem)",
          paddingRight: "clamp(1.5rem, 5vw, 6rem)",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE
          cursor: "grab",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Hide Scrollbar for Chrome/Safari */}
        <style
          dangerouslySetInnerHTML={{
            __html: `::-webkit-scrollbar { display: none; }`,
          }}
        />

        {newArrivals.items.map((item, i) => (
          <ProductCard key={i} item={item} index={i} />
        ))}
      </div>

      {/* Mobile dot indicators — tappable, synced to scroll */}
      <div className="flex justify-center gap-2 mt-2 px-6 md:hidden">
        {newArrivals.items.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollToIndex(i)}
            aria-label={`Go to item ${i + 1}`}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === activeIndex ? "24px" : "8px",
              height: "8px",
              background: i === activeIndex ? "var(--accent)" : "var(--muted)",
              opacity: i === activeIndex ? 1 : 0.35,
            }}
          />
        ))}
      </div>
    </section>
  );
};

/* ── Individual card ── */
const ProductCard = ({
  item,
  index,
}: {
  item: { name: string; image: string; tag?: string };
  index: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative shrink-0 rounded-2xl md:rounded-3xl overflow-hidden group select-none"
      style={{
        width: "clamp(240px, 40vw, 320px)",
        aspectRatio: "3/4",
      }}
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.8,
        delay: Math.min(index * 0.08, 0.4),
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <motion.img
        src={item.image}
        alt={item.name}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        animate={{ scale: hovered ? 1.08 : 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        draggable={false}
      />

      {/* Gradient overlay — always present, deepens on hover */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: hovered
            ? "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.05) 60%, transparent 100%)",
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Tag badge */}
      {item.tag && (
        <motion.span
          className="absolute top-4 left-4 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full pointer-events-none"
          style={{ background: "var(--accent)", color: "var(--bg)" }}
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {item.tag}
        </motion.span>
      )}

      {/* Product name — slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">
        <motion.p
          className="text-[10px] uppercase tracking-[0.2em] font-bold mb-1"
          style={{ color: "var(--accent)" }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 8 }}
          transition={{ duration: 0.35 }}
        >
          New Arrival
        </motion.p>
        <motion.h3
          className="text-base md:text-xl font-black text-white uppercase tracking-tight leading-tight"
          animate={{ y: hovered ? 0 : 6, opacity: hovered ? 1 : 0.85 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {item.name}
        </motion.h3>

        {/* Shop Now — only on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 12 }}
          transition={{ duration: 0.35, delay: hovered ? 0.05 : 0 }}
          className="mt-3 flex items-center gap-2"
        >
          <span
            className="text-[10px] font-black uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            Shop Now
          </span>
          <ArrowRight size={12} style={{ color: "var(--accent)" }} />
        </motion.div>
      </div>

      {/* Accent border glow on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl md:rounded-3xl pointer-events-none"
        animate={{
          boxShadow: hovered
            ? "inset 0 0 0 2px var(--accent)"
            : "inset 0 0 0 0px transparent",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};
