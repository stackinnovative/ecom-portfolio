import { useEffect, useState, type ReactNode } from "react";
import { clientConfigs } from "../config/clientConfig";
import { PortfolioContext } from "../hooks/usePortFolio";
import type { PortfolioConfig } from "../types/portfolio";

interface PortfolioProviderProps {
  children: ReactNode;
}

// 1. Extract the logic to figure out the config before the component even renders
const getInitialConfig = (): PortfolioConfig => {
  // Safety check in case this ever runs in an SSR environment
  if (typeof window === "undefined") return clientConfigs.default;

  const params = new URLSearchParams(window.location.search);
  const clientKey = params.get("client")?.toLowerCase();

  if (clientKey && clientKey in clientConfigs) {
    return clientConfigs[clientKey as keyof typeof clientConfigs];
  }

  return clientConfigs.default;
};

export const PortfolioProvider = ({ children }: PortfolioProviderProps) => {
  // 2. Pass the function directly to useState.
  // React will run this exactly once on load to get the perfect initial state.
  const [config] = useState<PortfolioConfig>(getInitialConfig);
  // 3. Keep useEffect purely for DOM manipulation (a true side effect)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const clientKey = params.get("client")?.toLowerCase();

    // Verify the key is valid to prevent injecting bad class names
    const validKey =
      clientKey && clientKey in clientConfigs ? clientKey : "default";

    document.body.className = document.body.className
      .replace(/\btheme-\S+/g, "")
      .trim();
    document.body.classList.add(`theme-${validKey}`);
  }, []);

  return (
    <PortfolioContext.Provider value={config}>
      {children}
    </PortfolioContext.Provider>
  );
};
