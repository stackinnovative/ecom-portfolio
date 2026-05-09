import { PortfolioProvider } from "./contexts/PortFolioContext";
import { MainLayout } from "./layouts/MainLayout";
import { About } from "./sections/About/About";
import { BrandValues } from "./sections/BrandValue/BrandValue";
import { FeaturedProducts } from "./sections/FeaturedProducts/FeaturedProducts";
import { Footer } from "./sections/Footer/Footer";
import { Hero } from "./sections/Hero/Hero";
import { InstaGrid } from "./sections/InstaGrid/InstaGrid";
import { NewArrivals } from "./sections/NewArrivals/NewArrivals";
import { PromoBanner } from "./sections/PromoBanner/PromoBanner";
import { Testimonials } from "./sections/Testimonials/Testimonials";

function App() {
  return (
    <PortfolioProvider>
      <MainLayout>
        <Hero />
        <BrandValues />
        <FeaturedProducts />
        <About />
        <PromoBanner />
        <NewArrivals />
        <InstaGrid />
        <Testimonials />
        <Footer />
      </MainLayout>
    </PortfolioProvider>
  );
}

export default App;
