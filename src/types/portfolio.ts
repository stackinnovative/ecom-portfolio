export type PortfolioConfig = {
  name: string;
  description: string;
  location: string;
  phone: string;
  services: string[];
  tagline: string;
  heroTitle: string;
  logoText: string;
  logoImage: string;
  features: {
    title: string;
    desc: string;
  }[];
  navLinks: {
    label: string;
    href: string;
  }[];
  ctaText: string;
  hero: {
    badge: string;
    headingMain: string;
    headingHighlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: {
      label: string;
      value: string;
    }[];
  };
  featuresSection: {
    badge: string;
    headingMain: string;
    headingHighlight: string;
    description: string;
    items: {
      title: string;
      desc: string;
      icon: string;
    }[];
  };
  portfolioSection: {
    badge: string;
    headingMain: string;
    headingHighlight: string;
    description: string;
    projects: {
      id: number;
      title: string;
      category: string;
      image: string;
    }[];
  };
  aboutSection: {
    badge: string;
    headingMain: string;
    headingHighlight: string;
    description: string;
    bentoBoxes: {
      mainStory: {
        title: string;
        text: string;
      };
      statBox: {
        value: string;
        label: string;
      };
      features: {
        title: string;
        desc: string;
        icon: string;
      }[];
    };
  };
  pricingSection: {
    badge: string;
    headingMain: string;
    headingHighlight: string;
    description: string;
    toggleLeft: string;
    toggleRight: string;
    tiers: {
      name: string;
      description: string;
      priceStandard: string;
      priceBulk: string;
      features: string[];
      ctaText: string;
      isPopular: boolean;
    }[];
  };
  testimonialsSection: {
    badge: string;
    headingMain: string;
    headingHighlight: string;
    description: string;
    reviews: {
      name: string;
      role: string;
      text: string;
      rating: number;
    }[];
  };
  footer: {
    description: string;
    contact: {
      email: string;
      phone: string;
      address: string;
    };
    quickLinks: {
      label: string;
      href: string;
    }[];
    legal: {
      label: string;
      href: string;
    }[];
  };
};
