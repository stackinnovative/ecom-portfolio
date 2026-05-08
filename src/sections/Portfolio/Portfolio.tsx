import { useState } from "react";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Camera, ArrowUpRight, X } from "lucide-react"; // Added X for close button
import { usePortfolio } from "../../hooks/usePortFolio";

// UPGRADED: Cinematic staggered entrance
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.1,
    },
  },
};

// UPGRADED: Slide from left, un-blur, and snap into place
const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -100,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Type definition for the project so TypeScript is happy
type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
};

export const Portfolio = () => {
  const { portfolioSection } = usePortfolio();

  // NEW: State to track which image is currently clicked/open
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <section
        id="portfolio"
        className="py-24 bg-theme-bg relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-theme-secondary border border-theme-muted/10 mb-6"
            >
              <Camera size={16} className="text-theme-accent" />
              <span className="text-sm font-medium text-theme-text tracking-wide uppercase">
                {portfolioSection.badge}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-4xl md:text-5xl font-bold text-theme-text mb-4"
            >
              {portfolioSection.headingMain}{" "}
              <span className="text-theme-accent">
                {portfolioSection.headingHighlight}
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-lg text-theme-muted"
            >
              {portfolioSection.description}
            </motion.p>
          </div>

          {/* Image Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {portfolioSection.projects.map((project: Project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                // NEW: Added cursor-pointer and onClick handler
                onClick={() => setSelectedProject(project)}
                className="group relative h-[400px] w-full rounded-3xl overflow-hidden bg-theme-card border border-theme-muted/10 shadow-lg cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-theme-bg/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                  <div className="translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-sm font-bold tracking-widest uppercase text-theme-accent mb-2 block">
                      {project.category}
                    </span>

                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-theme-text">
                        {project.title}
                      </h3>
                      <button className="w-12 h-12 rounded-full bg-theme-accent text-theme-bg flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg">
                        <ArrowUpRight size={24} />
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* NEW: Full Screen Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            // Clicking the dark background closes the modal
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              // Prevent clicks inside the image area from closing the modal
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-theme-bg rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-theme-bg/50 hover:bg-theme-bg text-theme-text rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
              >
                <X size={20} />
              </button>

              {/* Full Uncropped Image */}
              <div className="bg-theme-secondary/30 relative w-full h-[60vh] md:h-[75vh]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  // object-contain ensures the whole image is visible without cropping
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
              </div>

              {/* Info Bar at the bottom */}
              <div className="p-6 md:px-8 border-t border-theme-muted/10 bg-theme-card flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-theme-text mb-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-theme-muted font-medium">
                    {selectedProject.category}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
