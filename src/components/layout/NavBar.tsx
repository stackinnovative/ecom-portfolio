import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import { usePortfolio } from "../../hooks/usePortFolio";
import { useTheme } from "../../hooks/useTheme";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const config = usePortfolio();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-theme-bg/70 backdrop-blur-xl py-3 border-b border-theme-muted/10 shadow-lg"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group z-50">
          {config.logo ? (
            <img
              src={config.logo}
              alt={config.name}
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <>
              <div className="w-8 h-8 bg-theme-secondary/80 backdrop-blur-md rounded-full flex items-center justify-center border border-theme-muted/20 shadow-sm transition-transform group-hover:scale-105">
                <div className="w-3 h-3 bg-theme-text rounded-sm rotate-45 group-hover:bg-theme-accent transition-colors" />
              </div>

              <span className="text-xs md:text-sm font-black tracking-[0.2em] uppercase theme-shimmer">
                {config.logoText}
              </span>
            </>
          )}
        </a>

        {/* Desktop Floating Pill Nav */}
        <nav className="hidden lg:flex items-center gap-1 bg-theme-secondary/40 backdrop-blur-lg px-2 py-1.5 rounded-full border border-theme-muted/20">
          {config.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[10px] md:text-[11px] uppercase tracking-widest font-semibold text-theme-muted hover:text-theme-text hover:bg-theme-muted/10 px-5 py-2 transition-all rounded-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={toggleTheme}
            className="text-theme-muted hover:text-theme-accent transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a
            href="#contact"
            className="bg-theme-accent text-theme-bg px-7 py-2.5 rounded-full text-[11px] font-bold uppercase tracking-widest transition-all hover:scale-105 hover:shadow-lg hover:shadow-theme-accent/20"
          >
            {config.ctaText}
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4 z-50">
          <button onClick={toggleTheme} className="text-theme-muted">
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-theme-text p-2 bg-theme-secondary/50 rounded-full"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-full left-0 w-full bg-theme-bg/95 backdrop-blur-xl border-b border-theme-muted/10 shadow-2xl"
          >
            <div className="flex flex-col px-6 py-4 gap-1">
              {config.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold uppercase tracking-widest text-theme-text py-4 border-b border-theme-muted/10 hover:text-theme-accent transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-theme-accent text-theme-bg mt-6 w-full py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-center"
              >
                {config.ctaText}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
