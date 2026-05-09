export type PortfolioConfig = {
  name: string;
  logoText: string;
  logo?: string;
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
    bgImage: string;
    stats: {
      label: string;
      value: string;
    }[];
  };
  brandValues: BrandValues;
  featuredProducts: FeaturedProducts;
  promoBanner: PromoBanner;
  newArrivals: NewArrivals;
  instaGrid: InstaGrid;
  about: AboutSection;
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

type BrandValueItem = {
  title: string;
  description: string;
  icon: string;
};

type BrandValues = {
  sectionLabel: string;
  items: BrandValueItem[];
};

type FeaturedProductItem = {
  name: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  badgeColor?: string;
  rating: number;
  reviewCount: number;
  image: string;
};

type FeaturedProducts = {
  sectionLabel: string;
  heading: string;
  accentWordIndex: number;
  viewAllText: string;
  viewAllHref: string;
  items: FeaturedProductItem[];
};

type AboutPillar = {
  title: string;
  body: string;
};

type AboutFloatStat = {
  value: string;
  label: string;
};

type AboutSection = {
  sectionLabel: string;
  watermark: string;
  heading: string;
  accentLineIndex: number;
  description: string;
  floatBadge: string;
  floatStat: AboutFloatStat;
  mainImage: string;
  insetImage: string;
  pillars: AboutPillar[];
  ctaText: string;
  ctaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
};

type PromoBanner = {
  badge: string;
  heading: string;
  accentLineIndex: number;
  description: string;
  countdownHours: number;
  offerLabel: string;
  offerSublabel: string;
  ctaText: string;
  ctaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
  bgImage: string;
};

type NewArrivalItem = {
  name: string;
  tag?: string;
  image: string;
};

type NewArrivals = {
  sectionLabel: string;
  heading: string;
  accentWordIndex: number;
  subheading: string;
  items: NewArrivalItem[];
};

type InstaGridPost = {
  image: string;
  likes: string;
  comments: string;
  span: "tall" | "normal" | "wide";
};

type InstaGrid = {
  sectionLabel: string;
  heading: string;
  accentWordIndex: number;
  handle: string;
  profileUrl: string;
  followText: string;
  posts: InstaGridPost[];
};
