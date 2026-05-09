import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ShoppingCart, ArrowRight, Star, Eye } from "lucide-react";
import { usePortfolio } from "../../hooks/usePortFolio";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export const FeaturedProducts = () => {
  const { featuredProducts } = usePortfolio();
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [addedId, setAddedId] = useState<number | null>(null);

  const handleAddToCart = (id: number) => {
    setAddedId(id);
    setTimeout(() => setAddedId(null), 1800);
  };

  return (
    <section
      id="products"
      className="relative bg-theme-bg py-20 md:py-28 overflow-hidden"
    >
      {/* Background texture dots */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(var(--text) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-theme-muted mb-3">
              {featuredProducts.sectionLabel}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-theme-text uppercase leading-tight">
              {featuredProducts.heading.split(" ").map((word, i) =>
                i === featuredProducts.accentWordIndex ? (
                  <span key={i} className="text-theme-accent">
                    {" "}
                    {word}{" "}
                  </span>
                ) : (
                  <span key={i}> {word} </span>
                ),
              )}
            </h2>
          </div>
          <a
            href={featuredProducts.viewAllHref ?? "#"}
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-theme-muted hover:text-theme-accent transition-colors shrink-0 pb-1"
          >
            {featuredProducts.viewAllText ?? "View All"}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        {/* Product Grid — 2 cols mobile, 4 cols desktop */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {featuredProducts.items.map((product, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              onMouseEnter={() => setHoveredId(i)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative flex flex-col rounded-2xl bg-theme-secondary/40 border border-theme-muted/10 overflow-hidden"
            >
              {/* Badge */}
              {product.badge && (
                <span
                  className="absolute top-3 left-3 z-20 text-[9px] md:text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full"
                  style={{
                    background: product.badgeColor ?? "var(--accent)",
                    color: "var(--bg)",
                  }}
                >
                  {product.badge}
                </span>
              )}

              {/* Quick View button */}
              <motion.button
                className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full flex items-center justify-center bg-theme-bg/80 backdrop-blur-sm border border-theme-muted/10 text-theme-muted hover:text-theme-accent hover:border-theme-accent/30 transition-colors"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{
                  opacity: hoveredId === i ? 1 : 0,
                  scale: hoveredId === i ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
                aria-label="Quick view"
              >
                <Eye size={13} />
              </motion.button>

              {/* Image */}
              <div className="relative aspect-square overflow-hidden bg-theme-secondary/60">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Image overlay on hover */}
                <div className="absolute inset-0 bg-theme-bg/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 p-3 md:p-4 gap-2">
                {/* Stars */}
                <div className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, si) => (
                    <Star
                      key={si}
                      size={10}
                      className={
                        si < (product.rating ?? 5)
                          ? "text-theme-accent fill-theme-accent"
                          : "text-theme-muted/30"
                      }
                    />
                  ))}
                  {product.reviewCount && (
                    <span className="text-[9px] text-theme-muted ml-1">
                      ({product.reviewCount})
                    </span>
                  )}
                </div>

                {/* Name */}
                <h3 className="text-xs md:text-sm font-bold text-theme-text leading-snug line-clamp-2">
                  {product.name}
                </h3>

                {/* Price row */}
                <div className="flex items-center gap-2 mt-auto">
                  <span className="text-sm md:text-base font-black text-theme-accent">
                    {product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-[10px] text-theme-muted line-through">
                      {product.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart */}
                <motion.button
                  onClick={() => handleAddToCart(i)}
                  whileTap={{ scale: 0.96 }}
                  className="mt-1 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-[10px] md:text-[11px] font-black uppercase tracking-widest transition-all duration-300"
                  style={{
                    background: addedId === i ? "var(--accent)" : "transparent",
                    color: addedId === i ? "var(--bg)" : "var(--accent)",
                    border: "1.5px solid var(--accent)",
                  }}
                >
                  <ShoppingCart size={12} />
                  {addedId === i ? "Added!" : "Add to Cart"}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
