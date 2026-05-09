import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Heart, MessageCircle, ExternalLink } from "lucide-react";
import { usePortfolio } from "../../hooks/usePortFolio";

/* Instagram SVG — lucide removed it, use official glyph */
const InstaIcon = ({
  size = 16,
  color = "currentColor",
}: {
  size?: number;
  color?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill={color} stroke="none" />
  </svg>
);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const cellVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

export const InstaGrid = () => {
  const { instaGrid } = usePortfolio();

  return (
    <section
      id="instagram"
      className="relative bg-theme-bg py-20 md:py-28 overflow-hidden"
    >
      {/* Subtle radial accent glow — center */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none opacity-[0.06] blur-3xl"
        style={{ background: "var(--accent)" }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Instagram handle pill */}
          <a
            href={instaGrid.profileUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 mb-5 px-5 py-2.5 rounded-full border border-theme-muted/20 bg-theme-secondary/40 backdrop-blur-sm hover:border-theme-accent/40 transition-all duration-300"
          >
            <InstaIcon size={14} color="var(--accent)" />
            <span className="text-[11px] font-black uppercase tracking-widest text-theme-muted group-hover:text-theme-accent transition-colors">
              {instaGrid.handle}
            </span>
            <ExternalLink
              size={10}
              className="text-theme-muted/50 group-hover:text-theme-accent transition-colors"
            />
          </a>

          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-theme-muted mb-3">
            {instaGrid.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-theme-text leading-[0.9]">
            {instaGrid.heading.split(" ").map((w, i) =>
              i === (instaGrid.accentWordIndex ?? 0) ? (
                <span key={i} className="text-theme-accent">
                  {" "}
                  {w}
                </span>
              ) : (
                <span key={i}> {w}</span>
              ),
            )}
          </h2>
        </motion.div>

        {/* Mosaic grid — 2 cols mobile, 3 cols desktop, varied sizes */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {instaGrid.posts.map((post, i) => (
            <GridCell key={i} post={post} index={i} span={post.span} />
          ))}
        </motion.div>

        {/* Follow CTA */}
        <motion.div
          className="flex justify-center mt-10 md:mt-14"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a
            href={instaGrid.profileUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full border border-theme-muted/20 hover:border-theme-accent/50 bg-theme-secondary/30 hover:bg-theme-accent/10 transition-all duration-300"
          >
            <InstaIcon size={16} color="var(--accent)" />
            <span className="text-[11px] font-black uppercase tracking-widest text-theme-text group-hover:text-theme-accent transition-colors">
              {instaGrid.followText ?? "Follow Us On Instagram"}
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

/* ── Single grid cell ── */
interface Post {
  image: string;
  likes?: string;
  comments?: string;
  span?: "normal" | "tall" | "wide";
}

const GridCell = ({
  post,
  index,
  span,
}: {
  post: Post;
  index: number;
  span?: Post["span"];
}) => {
  const [hovered, setHovered] = useState(false);

  const spanClass =
    span === "tall"
      ? "row-span-2"
      : span === "wide"
        ? "col-span-2 md:col-span-1"
        : "";

  return (
    <motion.div
      variants={cellVariants}
      className={`relative overflow-hidden rounded-xl md:rounded-2xl bg-theme-secondary/40 ${spanClass}`}
      style={{ aspectRatio: span === "tall" ? "auto" : "1/1" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <motion.img
        src={post.image}
        alt={`Post ${index + 1}`}
        className="absolute inset-0 w-full h-full object-cover"
        animate={{ scale: hovered ? 1.07 : 1 }}
        transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        draggable={false}
      />

      {/* Overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center gap-3"
        animate={{
          background: hovered ? "rgba(0,0,0,0.55)" : "rgba(0,0,0,0)",
        }}
        transition={{ duration: 0.35 }}
      >
        {/* Stats row */}
        <motion.div
          className="flex items-center gap-5"
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 10 }}
          transition={{ duration: 0.3, delay: hovered ? 0.05 : 0 }}
        >
          {post.likes && (
            <div className="flex items-center gap-1.5 text-white">
              <Heart size={16} className="fill-white" />
              <span className="text-xs font-black tracking-wide">
                {post.likes}
              </span>
            </div>
          )}
          {post.comments && (
            <div className="flex items-center gap-1.5 text-white">
              <MessageCircle size={16} className="fill-white" />
              <span className="text-xs font-black tracking-wide">
                {post.comments}
              </span>
            </div>
          )}
        </motion.div>

        {/* Instagram icon center */}
        <motion.div
          animate={{
            opacity: hovered ? 1 : 0,
            scale: hovered ? 1 : 0.7,
          }}
          transition={{ duration: 0.3, delay: hovered ? 0.08 : 0 }}
        >
          <div
            className="w-9 h-9 rounded-full flex items-center justify-center"
            style={{ background: "var(--accent)" }}
          >
            <InstaIcon size={16} color="var(--bg)" />
          </div>
        </motion.div>
      </motion.div>

      {/* Accent border on hover */}
      <motion.div
        className="absolute inset-0 rounded-xl md:rounded-2xl pointer-events-none"
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
