import type { PortfolioConfig } from "../../types/portfolio";

export const DEFAULT_CONFIG: PortfolioConfig = {
  name: "Stack Innovative",
  logoText: "stack innovative",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Tech Stack", href: "#tech" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Reviews", href: "#reviews" },
  ],
  ctaText: "Let's Talk",
  hero: {
    badge: "Next-Gen Digital Solutions",
    headingMain: "ARCHITECT",
    headingHighlight: "THE WEB",
    description:
      "We build ultra-fast, scalable, and highly converting digital experiences. Pixel-perfect frontends powered by robust architectures.",
    primaryCta: "Start Your Project",
    bgImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    stats: [
      { label: "Projects Shipped", value: "150+" },
      { label: "Performance Score", value: "100" },
      { label: "Client Retention", value: "98%" },
    ],
  },

  brandValues: {
    sectionLabel: "Why Work With Us",
    items: [
      {
        title: "Clean Code, Zero Shortcuts",
        description:
          "Every line written to scale — no spaghetti, no tech debt, no regrets.",
        icon: "https://cdn-icons-png.flaticon.com/512/6132/6132222.png", // code / terminal icon
      },
      {
        title: "Lightning Fast Delivery",
        description:
          "Agile sprints, rapid prototypes, and on-time launches. Always.",
        icon: "https://cdn-icons-png.flaticon.com/512/2910/2910791.png", // rocket / speed icon
      },
      {
        title: "Built to Scale With You",
        description:
          "Architectures that grow from MVP to millions of users without a rewrite.",
        icon: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png", // layers / stack icon
      },
    ],
  },
  featuredProducts: {
    sectionLabel: "What We Deliver",
    heading: "Featured Services",
    accentWordIndex: 1, // "Services" gets accent color
    viewAllText: "See All Work",
    viewAllHref: "#portfolio",
    items: [
      {
        name: "E-Commerce Storefront",
        price: "From ₹49,999",
        badge: "Most Popular",
        rating: 5,
        reviewCount: 42,
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "SaaS Dashboard & Portal",
        price: "From ₹79,999",
        badge: "New",
        rating: 5,
        reviewCount: 18,
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Landing Page & CRO",
        price: "From ₹19,999",
        originalPrice: "₹29,999",
        badge: "Sale",
        badgeColor: "#e11d48",
        rating: 5,
        reviewCount: 96,
        image:
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "API & Backend Integration",
        price: "From ₹39,999",
        rating: 4,
        reviewCount: 31,
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },

  about: {
    sectionLabel: "Who We Are",
    watermark: "ABOUT",
    heading: "WE DON'T JUST\nBUILD WEBSITES\nWE BUILD GROWTH",
    accentLineIndex: 2, // "WE BUILD GROWTH" gets accent color
    description:
      "Stack Innovative is a product-focused development studio. We partner with startups and established brands to craft digital experiences that are fast, scalable, and built to convert. Every pixel, every endpoint — intentional.",
    floatBadge: "Est. 2018",
    floatStat: {
      value: "150+",
      label: "Projects Delivered",
    },
    // Main — dev team / dark workspace feel
    mainImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=900&auto=format&fit=crop",
    // Inset — code close-up for texture
    insetImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=400&auto=format&fit=crop",
    pillars: [
      {
        title: "Product Thinking",
        body: "We think like founders, not just developers.",
      },
      {
        title: "Speed by Default",
        body: "Sub-100ms load times are our baseline, not a bonus.",
      },
      {
        title: "Pixel Precision",
        body: "Design handoffs become living, breathing interfaces.",
      },
      {
        title: "Long-Term Partners",
        body: "98% of clients return for their next project.",
      },
    ],
    ctaText: "Start a Project",
    ctaHref: "#contact",
    secondaryCtaText: "See Our Work",
    secondaryCtaHref: "#portfolio",
  },
  promoBanner: {
    badge: "Limited Time Offer",
    heading: "SHOP THE\nSEASON'S\nBEST DEALS",
    accentLineIndex: 2, // "BEST DEALS" gets accent color
    description:
      "Handpicked collections at unbeatable prices. Free shipping on all orders above ₹999. Offer ends soon — don't miss out.",
    countdownHours: 12, // countdown starts from 12 hrs from page load
    offerLabel: "50%",
    offerSublabel: "OFF",
    ctaText: "Shop Now",
    ctaHref: "#products",
    secondaryCtaText: "View All Offers",
    secondaryCtaHref: "#offers",
    // Dark moody lifestyle — warm bokeh lights, shopping feel
    bgImage:
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
  },
  newArrivals: {
    sectionLabel: "Fresh Off The Press",
    heading: "NEW SERVICES",
    accentWordIndex: 1, // "SERVICES" gets accent color
    subheading: "Explore our latest offerings built for modern businesses.",
    items: [
      {
        name: "AI Chatbot Integration",
        tag: "New",
        image:
          "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Mobile App Development",
        tag: "Trending",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Cloud & DevOps Setup",
        tag: "New",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "UI/UX Design System",
        tag: "Exclusive",
        image:
          "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "E-Commerce Platform",
        tag: "Popular",
        image:
          "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "API & Backend Development",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  instaGrid: {
    sectionLabel: "Follow Our Journey",
    heading: "WE ARE ON INSTAGRAM",
    accentWordIndex: 2, // "ON" — or change to 3 for "INSTAGRAM"
    handle: "@stackinnovative",
    profileUrl: "https://instagram.com/stackinnovative",
    followText: "Follow Us On Instagram",
    posts: [
      // Row 1
      {
        image:
          "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
        likes: "1.2k",
        comments: "43",
        span: "tall", // tall card spans 2 rows — visual anchor
      },
      {
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=800&auto=format&fit=crop",
        likes: "984",
        comments: "31",
        span: "normal",
      },
      {
        image:
          "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=800&auto=format&fit=crop",
        likes: "2.1k",
        comments: "67",
        span: "normal",
      },
      // Row 2 (tall card still occupies left col)
      {
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
        likes: "763",
        comments: "22",
        span: "normal",
      },
      {
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
        likes: "1.5k",
        comments: "58",
        span: "normal",
      },
      // Row 3
      {
        image:
          "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
        likes: "892",
        comments: "19",
        span: "wide", // wide on mobile, normal on md+
      },
      {
        image:
          "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800&auto=format&fit=crop",
        likes: "1.1k",
        comments: "37",
        span: "normal",
      },
    ],
  },

  testimonialsSection: {
    badge: "Peer Review",
    headingMain: "Collaborative",
    headingHighlight: "Success",
    description:
      "Feedback from teams and clients on recent development sprints.",
    reviews: [
      {
        name: "Vinod",
        role: "Team Lead",
        text: "Exceptional understanding of complex system requirements. The custom architecture provided exactly the performance boost we needed.",
        rating: 5,
      },
      {
        name: "Sourav",
        role: "Frontend Engineer",
        text: "Cleanest API documentation and backend structures I've worked with. Made integrating the React frontend completely seamless.",
        rating: 5,
      },
      {
        name: "Goutham",
        role: "Project Manager",
        text: "Always delivers on time and handles high-pressure technical challenges with ease. A core asset to any development lifecycle.",
        rating: 5,
      },
    ],
  },

  footer: {
    description:
      "Building scalable web and mobile applications from the ground up.",
    contact: {
      email: "stackinnovativee@gmail.com",
      phone: "+91 7994285615",
      address: "Calicut, Kerala, India",
    },
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Portfolio", href: "#portfolio" },
      { label: "Pricing", href: "#pricing" },
    ],
    legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
};
