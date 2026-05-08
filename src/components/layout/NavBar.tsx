import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, Package } from "lucide-react";
// 1. Import the hook
import { usePortfolio } from "../../hooks/usePortFolio";
import { useTheme } from "../../hooks/useTheme";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // 2. Initialize the dynamic config
  const config = usePortfolio();

  // Handle scroll effect for glassmorphism background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-theme-bg/85 backdrop-blur-md border-theme-muted/20 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <a href="#home" className="flex items-center gap-2 group">
          {/* Conditionally render Image OR Icon */}
          {config?.logoImage ? (
            <img
              src={config?.logoImage}
              alt={`${config.name} Logo`}
              className="w-10 h-10 rounded-lg object-contain opacity-90 group-hover:opacity-100 transition-opacity shadow-sm"
            />
          ) : (
            <div className="w-10 h-10 bg-theme-accent text-white flex items-center justify-center rounded-lg opacity-90 group-hover:opacity-100 transition-opacity shadow-sm">
              <Package size={20} />
            </div>
          )}

          {/* 3. Replaced gold-shimmer with theme-shimmer and used dynamic logoText */}
          <span className="text-xl font-bold theme-shimmer tracking-tight">
            {config.logoText}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* 4. Use dynamic navLinks */}
          {config.navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-theme-muted hover:text-theme-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-theme-muted hover:bg-theme-secondary transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button className="bg-theme-accent text-theme-bg px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:opacity-90 shadow-md shadow-theme-accent/20 hover:-translate-y-0.5">
            {/* 5. Use dynamic CTA text */}
            {config.ctaText}
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <div className="flex md:hidden items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-theme-muted hover:bg-theme-secondary transition-colors"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-theme-text p-2 hover:bg-theme-secondary rounded-full transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-theme-muted/20 bg-theme-bg overflow-hidden shadow-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {/* 6. Use dynamic navLinks for mobile */}
              {config.navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-theme-text hover:text-theme-accent py-3 border-b border-theme-muted/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button className="bg-theme-accent w-full text-theme-bg px-5 py-4 rounded-xl text-base font-semibold mt-4 hover:opacity-90 transition-opacity shadow-lg shadow-theme-accent/20">
                {/* 7. Use dynamic CTA text for mobile */}
                {config.ctaText}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
