import type { PortfolioConfig } from "../../types/portfolio";

export const LUMEA_COUTURE: PortfolioConfig = {
  name: "LUMEA Couture",
  logoText: "LUMEA",
  logo: "https://res.cloudinary.com/ddblal31l/image/upload/v1778405057/565140445_17842040433599963_4291661988358464472_n_wayol8.jpg",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Collections", href: "#collections" },
    { label: "New Arrivals", href: "#new-arrivals" },
    { label: "Our Policy", href: "#about" },
  ],
  ctaText: "Order on Instagram",
  hero: {
    badge: "Premium Ethnic Wear",
    headingMain: "FIND YOUR",
    headingHighlight: "PERFECT FIT",
    description:
      "Starting from scratch to bring you timeless elegance. Discover our curated collection of handcrafted ethnic sets and modest silhouettes.",
    primaryCta: "Explore Collection",
    bgImage:
      "https://images.unsplash.com/photo-1615197420681-10d7a10f8e08?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    stats: [
      { label: "Instagram Family", value: "9.5k+" },
      { label: "Unique Designs", value: "170+" },
      { label: "Delivery", value: "Pan India" },
    ],
  },

  brandValues: {
    sectionLabel: "The Lumea Promise",
    items: [
      {
        title: "Starting From Scratch",
        description:
          "Every piece is thoughtfully designed and crafted from the ground up to ensure uniqueness.",
        icon: "https://cdn-icons-png.flaticon.com/512/3252/3252984.png",
      },
      {
        title: "Curated Modesty",
        description:
          "Elegant, flowing silhouettes that prioritize both style and comfort for the modern woman.",
        icon: "https://cdn-icons-png.flaticon.com/512/9633/9633900.png",
      },
      {
        title: "Personalized Support",
        description:
          "Direct ordering via Instagram DMs ensures a personalized shopping experience for every client.",
        icon: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
      },
    ],
  },

  featuredProducts: {
    sectionLabel: "Signature Styles",
    heading: "Elegant Ensembles",
    accentWordIndex: 0,
    viewAllText: "View All on Instagram",
    viewAllHref: "https://www.instagram.com/lumea_couture.in/",
    items: [
      {
        name: "Emerald Green Salwar Suit",
        price: "DM to Order",
        badge: "New Arrival",
        rating: 5,
        reviewCount: 18,
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778405785/photo_2026-05-10_15-01-41_cdptg5.jpg",
      },
      {
        name: "Sky Blue Embroidered Set",
        price: "DM to Order",
        badge: "Trending",
        rating: 5,
        reviewCount: 22,
        image:
          "https://images.unsplash.com/photo-1591346544057-c5906605dad1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Mustard Yellow Coord Set",
        price: "DM to Order",
        badge: "Bestseller",
        rating: 5,
        reviewCount: 42,
        image:
          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Deep Maroon Embellished Gown",
        price: "DM to Order",
        badge: "Eid Edit",
        rating: 5,
        reviewCount: 28,
        image:
          "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },

  promoBanner: {
    badge: "Exclusive Launch",
    heading: "THE\nCOUTURE\nCOLLECTION",
    accentLineIndex: 1,
    description:
      "Our latest handcrafted silhouettes have arrived. Experience premium fabrics and intricate detailing designed for your special moments.",
    countdownHours: 24,
    offerLabel: "LIVE",
    offerSublabel: "NOW",
    ctaText: "Browse Collection",
    ctaHref: "#collections",
    secondaryCtaText: "Follow Updates",
    secondaryCtaHref:
      "https://images.unsplash.com/photo-1508829298730-713792c22189?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    bgImage:
      "https://images.unsplash.com/photo-1508742345712-0656a285ac27?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },

  newArrivals: {
    sectionLabel: "Just Dropped",
    heading: "FRESH DESIGNS",
    accentWordIndex: 0,
    subheading: "Discover our newest ethnic sets and modest gowns.",
    items: [
      {
        name: "Pastel Mint Coord Set",
        tag: "New",
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778405785/photo_2026-05-10_15-01-41_cdptg5.jpg",
      },
      {
        name: "Crimson Silk Anarkali",
        tag: "Trending",
        image:
          "https://images.unsplash.com/photo-1591346544057-c5906605dad1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        name: "Mustard Embroidered Suit",
        tag: "Restocked",
        image:
          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Navy Blue Drape Dress",
        tag: "Exclusive",
        image:
          "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Navy Blue Drape Dress",
        tag: "Exclusive",
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778406344/photo_2026-05-10_15-14-42_rkxscd.jpg",
      },
    ],
  },

  instaGrid: {
    sectionLabel: "Join Our Community",
    heading: "LUMEA STYLE",
    accentWordIndex: 0,
    handle: "@lumea_couture.in",
    profileUrl: "https://www.instagram.com/lumea_couture.in/",
    followText: "Follow Us On Instagram",
    posts: [
      {
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778405785/photo_2026-05-10_15-01-41_cdptg5.jpg",
        likes: "1.2k",
        comments: "45",
        span: "tall",
      },
      {
        image:
          "https://images.unsplash.com/photo-1508742345712-0656a285ac27?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: "850",
        comments: "22",
        span: "normal",
      },
      {
        image:
          "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: "2.1k",
        comments: "98",
        span: "normal",
      },
      {
        image:
          "https://images.unsplash.com/photo-1634555525286-66ef6f840fe1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: "500",
        comments: "15",
        span: "normal",
      },
      {
        image:
          "https://images.unsplash.com/photo-1634555525286-66ef6f840fe1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: "500",
        comments: "15",
        span: "normal",
      },
      {
        image:
          "https://images.unsplash.com/photo-1623843950763-2210fa150aa0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: "930",
        comments: "31",
        span: "normal",
      },
      {
        image:
          "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
        likes: "1.5k",
        comments: "67",
        span: "wide",
      },
      {
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778406344/photo_2026-05-10_15-14-42_rkxscd.jpg",
        likes: "1.5k",
        comments: "67",
        span: "wide",
      },
    ],
  },

  about: {
    sectionLabel: "Our Policy",
    watermark: "LUMEA",
    heading: "TRANSPARENT\nSHOPPING\nEXPERIENCE",
    accentLineIndex: 1,
    description:
      "At LUMEA Couture, we believe in clear communication. To maintain our boutique quality standards and exclusive designs, we follow a strict policy to ensure every customer receives a brand-new, untouched piece.",
    floatBadge: "Order Via",
    floatStat: {
      value: "Instagram",
      label: "DM to Place Order",
    },
    mainImage:
      "https://images.unsplash.com/photo-1560011081-088f8a6bd9e6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    insetImage:
      "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pillars: [
      {
        title: "No Returns",
        body: "All sales are final to ensure hygiene and product integrity.",
      },
      {
        title: "No Exchanges",
        body: "Please consult our size guide carefully before purchasing.",
      },
      {
        title: "No Refunds",
        body: "We do not offer refunds once an order is confirmed.",
      },
      {
        title: "Quality Check",
        body: "Every piece undergoes a rigorous inspection before shipping.",
      },
    ],
    ctaText: "Chat with Us",
    ctaHref: "https://www.instagram.com/lumea_couture.in/",
    secondaryCtaText: "View Size Guide",
    secondaryCtaHref: "#",
  },

  testimonialsSection: {
    badge: "Happy Clients",
    headingMain: "Real",
    headingHighlight: "Feedback",
    description:
      "Don't just take our word for it. Hear from our beautiful LUMEA family.",
    reviews: [
      {
        name: "Sara M.",
        role: "Verified Buyer",
        text: "The emerald suit is even more beautiful in person! The stitching is so clean and it fits perfectly.",
        rating: 5,
      },
      {
        name: "Ayesha Khan",
        role: "Verified Buyer",
        text: "Ordered for a wedding and got so many compliments. The fabric quality is premium. Definitely ordering again!",
        rating: 5,
      },
      {
        name: "Rida S.",
        role: "Verified Buyer",
        text: "Very professional DM support. They helped me pick the right size and the delivery was prompt.",
        rating: 5,
      },
    ],
  },

  footer: {
    description:
      "LUMEA Couture — Find your perfect fit. Handcrafted modesty for the modern woman. No Return | No Exchange | No Refund.",
    contact: {
      email: "DM us on Instagram",
      phone: "+91 7025490643 / 7034080509",
      address: "Kerala, India",
    },
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "New Arrivals", href: "#new-arrivals" },
      { label: "Our Policies", href: "#about" },
    ],
    legal: [
      { label: "No Return Policy", href: "#" },
      { label: "Shipping Terms", href: "#" },
    ],
  },
};
