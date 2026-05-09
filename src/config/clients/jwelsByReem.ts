import type { PortfolioConfig } from "../../types/portfolio";

export const JEWELS_BY_REEM: PortfolioConfig = {
  name: "Jewels by Reem",
  logoText: "REEM",
  // You can replace this with her actual logo URL later
  logo: "https://res.cloudinary.com/ddblal31l/image/upload/v1778342656/608105209_17868786855525901_7865800174401767752_n_p9npq2.jpg",
  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Collections", href: "#collections" },
    { label: "Bestsellers", href: "#new-arrivals" },
    { label: "Behind The Scenes", href: "#about" },
    { label: "Contact", href: "#visit" },
  ],
  ctaText: "Order via WhatsApp",

  hero: {
    badge: "Affordable Premium Jewellery",
    headingMain: "ELEGANCE THAT",
    headingHighlight: "NEVER FADES",
    description:
      "Discover our collection of anti-tarnish, stainless steel jewellery. Everyday luxury starting at just ₹99, delivered anywhere in India.",
    primaryCta: "Shop The Collection",
    // Aesthetic gold jewelry flatlay
    bgImage:
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=2070&auto=format&fit=crop",
    stats: [
      { label: "Starting Price", value: "₹99" },
      { label: "Material", value: "Anti-Tarnish" },
      { label: "Delivery", value: "Pan India" },
    ],
  },

  brandValues: {
    sectionLabel: "Why Choose Us",
    items: [
      {
        title: "Anti-Tarnish & Stainless Steel",
        description:
          "Waterproof and sweatproof jewellery designed for everyday wear. No more green skin or fading colors.",
        icon: "https://cdn-icons-png.flaticon.com/512/3262/3262985.png", // Diamond/Sparkle
      },
      {
        title: "Affordable Luxury",
        description:
          "Premium aesthetics without the premium price tag. Beautiful pieces starting from just ₹99.",
        icon: "https://cdn-icons-png.flaticon.com/512/2953/2953363.png", // Price tag/Wallet
      },
      {
        title: "Pan India Delivery",
        description:
          "Secure and fast shipping straight to your doorstep, anywhere in India. (Note: Prepaid orders only, No COD).",
        icon: "https://cdn-icons-png.flaticon.com/512/2769/2769339.png", // Delivery truck
      },
    ],
  },

  featuredProducts: {
    sectionLabel: "Shop Categories",
    heading: "Everyday",
    accentWordIndex: 0,
    viewAllText: "View All on WhatsApp",
    viewAllHref: "https://wa.me/918086123898",
    items: [
      {
        name: "Cloud Drop Crystal Pendant",
        price: "DM to Order",
        badge: "Bestseller",
        rating: 5,
        reviewCount: 124,
        image:
          "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Anti tarnish",
        price: "From ₹299",
        badge: "Trending",
        rating: 5,
        reviewCount: 89,
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778342779/photo_2026-05-09_21-35-29_c0irry.jpg",
      },
      {
        name: "Gold-Plated Bangles",
        price: "From ₹99",
        badge: "Must Have",
        rating: 4,
        reviewCount: 56,
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778343377/single_item_fsfl06.jpg",
      },
      {
        name: "Anti tarnish",
        price: "From ₹299",
        badge: "Everyday Wear",
        badgeColor: "#C69B9D",
        rating: 5,
        reviewCount: 210,
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778343043/photo_2026-05-09_21-39-51_j7taki.jpg",
      },
    ],
  },

  about: {
    sectionLabel: "Meet The Founder",
    watermark: "REEM",
    heading: "PACKING ORDERS\nWITH LOVE &\nDEDICATION",
    accentLineIndex: 1,
    description:
      "Hi, I'm Reem! I started this small business with a simple goal: to provide high-quality, beautiful jewellery that everyone can afford. From carefully curating each piece to packing your orders under my ring light late at night, every step is handled with love. Thank you for supporting my dream!",
    floatBadge: "100% Love",
    floatStat: {
      value: "2.5k+",
      label: "Instagram Family",
    },
    // Entrepreneur packing orders / aesthetic desk vibe
    mainImage:
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=900&auto=format&fit=crop",
    // Close up of jewelry
    insetImage:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400&auto=format&fit=crop",
    pillars: [
      {
        title: "Sweat & Water Proof",
        body: "Tested daily. Wear our pieces in the shower or at the gym safely.",
      },
      {
        title: "Handpicked Quality",
        body: "Every single pendant, ring, and earring is quality-checked by me.",
      },
      {
        title: "Small Business Love",
        body: "When you buy from us, you're supporting a real person's dream.",
      },
      {
        title: "Direct Support",
        body: "Chat with me directly on WhatsApp for orders and queries.",
      },
    ],
    ctaText: "Chat on WhatsApp",
    ctaHref: "https://wa.me/918086123898",
    secondaryCtaText: "Follow on Instagram",
    secondaryCtaHref: "https://instagram.com/jewels_by_reem",
  },

  promoBanner: {
    badge: "Waterproof Test Passed",
    heading: "WEAR IT\nANYWHERE,\nANYTIME.",
    accentLineIndex: 1,
    description:
      "Our stainless steel collection is completely anti-tarnish. Wash your hands, apply lotion, and live your life without worrying about your jewellery losing its shine.",
    countdownHours: 0,
    offerLabel: "₹99",
    offerSublabel: "STARTING AT",
    ctaText: "Shop Waterproof",
    ctaHref: "https://wa.me/918086123898",
    secondaryCtaText: "Watch the Video",
    secondaryCtaHref: "https://instagram.com/jewels_by_reem",
    // Water splashing on jewelry vibe
    bgImage:
      "https://images.unsplash.com/photo-1596943547289-e8549e54a323?q=80&w=2070&auto=format&fit=crop",
  },

  newArrivals: {
    sectionLabel: "Freshly Stocked",
    heading: "LATEST BLING",
    accentWordIndex: 1,
    subheading:
      "Check out the newest rings, earrings, and pendants added to our store.",
    items: [
      {
        name: "Anti tarnish",
        tag: "New",
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778342779/photo_2026-05-09_21-35-29_c0irry.jpg",
      },
      {
        name: "Zircon Studs",
        tag: "Restocked",
        image:
          "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Gold-Plated Bangles",
        tag: "Trending",
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778343377/single_item_fsfl06.jpg",
      },
      {
        name: "Pearl Drop Pendants",
        tag: "Elegant",
        image:
          "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Textured Bands",
        tag: "Essentials",
        image:
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
      },
      {
        name: "Cherry pendant",
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778343701/photo_2026-05-09_21-50-47_eeknlv.jpg",
      },
    ],
  },

  instaGrid: {
    sectionLabel: "Stay Updated",
    heading: "FOLLOW THE SPARKLE",
    accentWordIndex: 2,
    handle: "@jewels_by_reem",
    profileUrl: "https://instagram.com/jewels_by_reem",
    followText: "Follow Us On Instagram",
    posts: [
      {
        image:
          "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=800&auto=format&fit=crop",
        likes: "145",
        comments: "12",
        span: "tall",
      },
      {
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778342779/photo_2026-05-09_21-35-29_c0irry.jpg",
        likes: "321",
        comments: "8",
        span: "normal",
      },
      {
        image:
          "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=800&auto=format&fit=crop",
        likes: "89",
        comments: "5",
        span: "normal",
      },
      {
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778343310/full-items_lpoonv.jpg",
        likes: "210",
        comments: "14",
        span: "normal",
      },
      {
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778343377/single_item_fsfl06.jpg",
        likes: "134",
        comments: "9",
        span: "normal",
      },
      {
        image:
          "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
        likes: "412",
        comments: "22",
        span: "wide",
      },
      {
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778343043/photo_2026-05-09_21-39-51_j7taki.jpg",
        likes: "188",
        comments: "15",
        span: "normal",
      },
    ],
  },

  testimonialsSection: {
    badge: "Happy Clients",
    headingMain: "Real",
    headingHighlight: "Reviews",
    description:
      "Our customer satisfaction speaks for itself. Check out what our beautiful community has to say about our pieces.",
    reviews: [
      {
        name: "Sneha P.",
        role: "Customer",
        text: "I literally wear the cloud pendant everywhere, even in the shower, and it hasn't lost its shine at all. So impressed for the price!",
        rating: 5,
      },
      {
        name: "Riya M.",
        role: "Customer",
        text: "The rings are so elegant. My order came beautifully packaged and Reem was so sweet on WhatsApp. Will definitely order again.",
        rating: 5,
      },
      {
        name: "Ananya T.",
        role: "Customer",
        text: "Finding anti-tarnish jewelry starting at just ₹99 is insane! The quality is way better than pieces I've bought from bigger brands.",
        rating: 5,
      },
    ],
  },

  footer: {
    description:
      "Affordable premium jewellery for everyday wear. Anti-tarnish & Stainless steel. No COD / No Wholesale.",
    contact: {
      email: "DM us on Instagram",
      phone: "+91 8086123898",
      address: "All India Delivery (Online Store)",
    },
    quickLinks: [
      { label: "Home", href: "#home" },
      { label: "About Reem", href: "#about" },
      { label: "Bestsellers", href: "#new-arrivals" },
      { label: "Instagram", href: "https://instagram.com/jewels_by_reem" },
    ],
    legal: [
      { label: "Prepaid Orders Only (No COD)", href: "#" },
      { label: "Order via WhatsApp", href: "https://wa.me/918086123898" },
    ],
  },
};
