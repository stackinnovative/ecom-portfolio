import { PortfolioProvider } from "./contexts/PortFolioContext";
import { MainLayout } from "./layouts/MainLayout";
import { About } from "./sections/About/About";
import { Features } from "./sections/Features/Features";
import { Footer } from "./sections/Footer/Footer";
import { Hero } from "./sections/Hero/Hero";
import { Portfolio } from "./sections/Portfolio/Portfolio";
import { Pricing } from "./sections/Pricing/Pricing";
import { Testimonials } from "./sections/Testimonials/Testimonials";

function App() {
  return (
    <PortfolioProvider>
    <MainLayout>
      <Hero />
      <Features />
      <Portfolio />
      <About />
      <Pricing />
      <Testimonials />
      <Footer />
    </MainLayout>
    </PortfolioProvider>
  );
}

export default App;
