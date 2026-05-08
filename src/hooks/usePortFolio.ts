// usePortfolio.ts
import { createContext, useContext } from "react";
import { clientConfigs } from "../config/clientConfig";
import type { PortfolioConfig } from "../types/portfolio";

// 2. Export the Context object
export const PortfolioContext = createContext<PortfolioConfig>(
  clientConfigs.default,
);

// 3. Export the Custom Hook
export const usePortfolio = (): PortfolioConfig => useContext(PortfolioContext);
