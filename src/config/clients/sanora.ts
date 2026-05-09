import type { PortfolioConfig } from "../../types/portfolio";

export const SANORA_CLOTHING: PortfolioConfig = {
  name: "Sanora Clothing",
  logoText: "SANORA",
  logo: "https://res.cloudinary.com/ddblal31l/image/upload/v1778308652/651287965_18048970712710172_3699974803490034754_n_qqrmf8.jpg",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Collections", href: "#collections" },
    { label: "New Arrivals", href: "#new-arrivals" },
    { label: "Our Story", href: "#about" },
    { label: "Visit Store", href: "#visit" },
  ],
  ctaText: "Order via WhatsApp",
  hero: {
    badge: "Modest Fashion Brand",
    headingMain: "WEAR YOUR",
    headingHighlight: "AURA", // Tagline from their bio
    description:
      "Exclusive gowns, beautiful coord sets, and timeless modest fashion. Crafted for the modern woman.",
    primaryCta: "Shop Latest Collection",
    bgImage:
      "https://res.cloudinary.com/ddblal31l/image/upload/v1778308418/Gemini_Generated_Image_ie0bp1ie0bp1ie0b_aoh5ws.png", // Elegant flowing fabric/modest vibe
    stats: [
      { label: "Instagram Family", value: "5.9k+" },
      { label: "Happy Customers", value: "1000+" },
      { label: "Physical Store", value: "Now Open" },
    ],
  },

  brandValues: {
    sectionLabel: "The Sanora Standard",
    items: [
      {
        title: "Exclusive Designs",
        description:
          "Handpicked fabrics and unique silhouettes designed to make you stand out beautifully.",
        icon: "https://cdn-icons-png.flaticon.com/512/2784/2784461.png", // Sparkle/Aura icon
      },
      {
        title: "Modest & Modern",
        description:
          "Perfectly balancing traditional modesty with contemporary fashion trends.",
        icon: "https://cdn-icons-png.flaticon.com/512/3252/3252984.png", // Dress icon
      },
      {
        title: "Personalized Service",
        description:
          "Direct ordering via WhatsApp ensures you get exactly what you need with personal attention.",
        icon: "https://cdn-icons-png.flaticon.com/512/1384/1384023.png", // Chat/WhatsApp icon
      },
    ],
  },
  featuredProducts: {
    sectionLabel: "Curated For You",
    heading: "Signature Collections",
    accentWordIndex: 0, // "Signature" gets accent color
    viewAllText: "View All on Instagram",
    viewAllHref: "https://instagram.com/sanora.clothiing",
    items: [
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
      {
        name: "Sunshine Yellow Embroidered Kaftan",
        price: "DM to Order",
        badge: "Restocked",
        badgeColor: "#B0895D",
        rating: 5,
        reviewCount: 56,
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778310108/photo_2026-05-09_12-23-11_zvrvqx.jpg",
      },
      {
        name: "Wine Red Embroidered Dress",
        price: "DM to Order",
        badge: "Limited Pieces",
        rating: 5,
        reviewCount: 24,
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778309179/photo_2026-05-09_12-13-54_lbkkws.jpg",
      },
    ],
  },

  about: {
    sectionLabel: "Our Journey",
    watermark: "STORY",
    heading: "FROM A DREAM AT 21\nTO OUR VERY FIRST\nPHYSICAL STORE",
    accentLineIndex: 2, // "PHYSICAL STORE" gets accent color
    description:
      "Sanora Clothing began as a passionate online venture by a 21-year-old entrepreneur. Today, thanks to the love of our incredible community, we've transitioned from packing orders in our living room to opening our very first physical store in Areekode. Believe in business — a single day's profit can beat a monthly salary.",
    floatBadge: "Est. Online",
    floatStat: {
      value: "Age 21",
      label: "Started as an Entrepreneur",
    },
    // Warm aesthetic store/boutique image
    mainImage:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=900&auto=format&fit=crop",
    // Fabric/clothing rack detail
    insetImage:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=400&auto=format&fit=crop",
    pillars: [
      {
        title: "Quality First",
        body: "Premium fabrics that feel as beautiful as they look.",
      },
      {
        title: "Transparency",
        body: "Unboxing videos required for all claims to ensure trust.",
      },
      {
        title: "No Compromise",
        body: "Strictly No COD and No refunds to maintain boutique standards.",
      },
      {
        title: "Community Driven",
        body: "Built by the love of our loyal customers and followers.",
      },
    ],
    ctaText: "Visit Our Store",
    ctaHref: "#visit",
    secondaryCtaText: "Follow Our Journey",
    secondaryCtaHref: "https://instagram.com/sanora.clothiing",
  },
  promoBanner: {
    badge: "Milestone Unlocked",
    heading: "GRAND\nOPENING\nCELEBRATION",
    accentLineIndex: 0, // "GRAND" gets accent color
    description:
      "We've officially transitioned from an online store to our first physical store! Come visit us in person to feel the fabrics and try on your favorite fits.",
    countdownHours: 0,
    offerLabel: "NOW",
    offerSublabel: "OPEN",
    ctaText: "Get Directions",
    ctaHref: "#visit",
    secondaryCtaText: "View Collection",
    secondaryCtaHref: "#collections",
    // Elegant boutique interior image
    bgImage:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=2070&auto=format&fit=crop",
  },
  newArrivals: {
    sectionLabel: "Just Dropped",
    heading: "FRESH ARRIVALS",
    accentWordIndex: 0, // "FRESH" gets accent color
    subheading: "Discover our latest coord sets and gowns for the season.",
    items: [
      {
        name: "Festive Eid Edit",
        tag: "Eid Special",
        image:
          "https://images.unsplash.com/photo-1605763240000-7e93b172d754?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Wine Red Embroidered Dress",
        tag: "Restocked",
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778309179/photo_2026-05-09_12-13-54_lbkkws.jpg",
      },
      {
        name: "Blush Pink Embroidered Kaftan",
        tag: "Trending",
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778309688/photo_2026-05-09_12-23-19_r5yeoh.jpg",
      },
      {
        name: "Evening Gowns",
        tag: "Elegant",
        image:
          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Sunshine Yellow Embroidered Kaftan",
        tag: "Essentials",
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778310108/photo_2026-05-09_12-23-11_zvrvqx.jpg",
      },

      {
        name: "Party Wear Series",
        image:
          "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },
  instaGrid: {
    sectionLabel: "Join The Club",
    heading: "SANORA STYLE",
    accentWordIndex: 0,
    handle: "@sanora.clothiing",
    profileUrl: "https://instagram.com/sanora.clothiing",
    followText: "Follow Us On Instagram",
    posts: [
      {
        image:
          "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
        likes: "450",
        comments: "12",
        span: "tall",
      },
      {
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778309688/photo_2026-05-09_12-23-19_r5yeoh.jpg",
        likes: "321",
        comments: "8",
        span: "normal",
      },
      {
        image:
          "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
        likes: "890",
        comments: "45",
        span: "normal",
      },
      {
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778310019/photo_2026-05-09_12-23-12_rx7lgp.jpg",
        likes: "210",
        comments: "4",
        span: "normal",
      },
      {
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778309179/photo_2026-05-09_12-13-54_lbkkws.jpg",
        likes: "534",
        comments: "19",
        span: "normal",
      },
      {
        image:
          "https://images.unsplash.com/photo-1605763240000-7e93b172d754?q=80&w=800&auto=format&fit=crop",
        likes: "1.2k",
        comments: "67",
        span: "wide",
      },
      {
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778310108/photo_2026-05-09_12-23-11_zvrvqx.jpg",
        likes: "412",
        comments: "15",
        span: "normal",
      },
    ],
  },

  testimonialsSection: {
    badge: "Happy Customers",
    headingMain: "Real",
    headingHighlight: "Reviews",
    description:
      "Don't just take our word for it. See what our beautiful community has to say.",
    reviews: [
      {
        name: "Ayesha M.",
        role: "Verified Buyer",
        text: "The quality of the gown is absolute perfection! It fit me like a glove. I'm so happy I found your page.",
        rating: 5,
      },
      {
        name: "Fathima S.",
        role: "Verified Buyer",
        text: "Ordered a coord set for Eid and it arrived just in time. The fabric is so soft and breathable. Will order again!",
        rating: 5,
      },
      {
        name: "Rida K.",
        role: "Verified Buyer",
        text: "I was hesitant because there's no COD, but the WhatsApp ordering process was so smooth and the outfit is exactly as shown in the video.",
        rating: 5,
      },
    ],
  },

  footer: {
    description:
      "Wear your aura 🪞 | Premium modest fashion. Unboxing video required for claim. No COD, No refund.",
    contact: {
      email: "DM us on Instagram", // Since email isn't provided, push to IG
      phone: "+91 9746581557",
      address: "Opposite BSNL, Areekode, Kerala",
    },
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "Our Story", href: "#about" },
      { label: "Collections", href: "#collections" },
      { label: "Store Location", href: "#visit" },
    ],
    legal: [
      { label: "Store Policies (No Refund)", href: "#" },
      { label: "WhatsApp Ordering", href: "https://wa.me/919746581557" },
    ],
  },
};
