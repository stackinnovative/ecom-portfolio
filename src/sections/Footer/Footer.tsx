import { Package, Mail, Phone, MapPin, Link, Hash, Globe } from "lucide-react";
import { usePortfolio } from "../../hooks/usePortFolio";

export const Footer = () => {
const config = usePortfolio();
const { footer } = config;
  return (
    <footer className="bg-theme-footer-bg pt-20 pb-10 border-t border-theme-footer-border relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-theme-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a
              href="#home"
              className="flex items-center gap-2 mb-6 inline-flex"
            >
              <div className="bg-theme-accent text-white p-2 rounded-lg">
                <Package size={24} />
              </div>
              <span className="text-2xl font-bold text-theme-text gold-shimmer">
                {config.logoText}
              </span>
            </a>
            <p className="text-theme-muted mb-8 max-w-sm leading-relaxed">
              {footer.description}
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {[Link, Hash, Globe].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-theme-secondary/20 flex items-center justify-center text-theme-muted hover:bg-theme-accent hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3">
            <h4 className="text-lg font-bold text-theme-text mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {footer.quickLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-theme-muted hover:text-theme-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-bold text-theme-text mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-theme-muted">
                <Mail size={20} className="text-theme-accent shrink-0 mt-0.5" />
                <a
                  href={`mailto:${footer.contact.email}`}
                  className="hover:text-theme-text transition-colors"
                >
                  {footer.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-theme-muted">
                <Phone
                  size={20}
                  className="text-theme-accent shrink-0 mt-0.5"
                />
                <a
                  href={`tel:${footer.contact.phone}`}
                  className="hover:text-theme-text transition-colors"
                >
                  {footer.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-theme-muted">
                <MapPin
                  size={20}
                  className="text-theme-accent shrink-0 mt-0.5"
                />
                <span>{footer.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-theme-footer-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-theme-muted">
            © {new Date().getFullYear()} {config.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footer.legal.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="text-sm text-theme-muted hover:text-theme-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
