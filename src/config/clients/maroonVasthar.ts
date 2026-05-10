import type { PortfolioConfig } from "../../types/portfolio";

export const MAROON_VASTRA: PortfolioConfig = {
  name: "Maroon Vastra",
  logoText: "MV",
  logo: "https://res.cloudinary.com/ddblal31l/image/upload/v1778407445/670743934_17875847967569296_515221716123237723_n_t2cm0z.jpg",

  navLinks: [
    { label: "Home", href: "#home" },
    { label: "Collections", href: "#collections" },
    { label: "Jewellery", href: "#new-arrivals" },
    { label: "Our Story", href: "#about" },
    { label: "Contact", href: "#visit" },
  ],

  ctaText: "DM To Order",

  hero: {
    badge: "Affordable Premium Jewellery",

    headingMain: "CURATED",
    headingHighlight: "WITH LOVE",

    description:
      "Elegant anti-tarnish jewellery curated for everyday styling. Minimal, aesthetic and affordable pieces trusted by happy customers across India.",

    primaryCta: "Explore Collection",

    bgImage:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=2070&auto=format&fit=crop",

    stats: [
      { label: "Starting Price", value: "₹99" },
      { label: "Style", value: "Minimal Luxury" },
      { label: "Delivery", value: "Pan India" },
    ],
  },

  brandValues: {
    sectionLabel: "Why Customers Love Us",
    items: [
      {
        title: "Anti Tarnish Jewellery",
        description:
          "Premium stainless steel pieces designed for long lasting shine and daily wear.",

        icon: "https://res.cloudinary.com/ddblal31l/image/upload/v1778407775/photo_2026-05-10_15-38-36_kz3joq.jpg",
      },
      {
        title: "Affordable Everyday Luxury",
        description:
          "Luxury inspired jewellery aesthetics without expensive pricing.",
        icon: "https://cdn-icons-png.flaticon.com/512/2953/2953363.png",
      },
      {
        title: "Trusted Small Business",
        description:
          "Every order is packed carefully with attention to quality and presentation.",

        icon: "https://cdn-icons-png.flaticon.com/512/2769/2769339.png",
      },
    ],
  },

  featuredProducts: {
    sectionLabel: "Trending Pieces",
    heading: "Minimal Jewellery",
    accentWordIndex: 0,
    viewAllText: "View All On Instagram",
    viewAllHref: "https://instagram.com/maroonvastra",
    items: [
      {
        name: "Cherry pendant necklace",
        price: "From ₹199",
        badge: "Bestseller",
        rating: 5,
        reviewCount: 124,
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778407775/photo_2026-05-10_15-38-36_kz3joq.jpg",
      },
      {
        name: "Gold Layer Necklace",
        price: "From ₹299",
        badge: "Trending",
        rating: 5,
        reviewCount: 88,
        image:
          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
      },

      {
        name: "Minimal Bracelet",

        price: "From ₹149",

        badge: "Everyday Wear",

        badgeColor: "#B08968",

        rating: 5,

        reviewCount: 63,

        image:
          "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",
      },

      {
        name: "Multicolor charm necklaces",
        price: "From ₹249",
        badge: "Elegant",
        rating: 5,
        reviewCount: 94,
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778408085/photo_2026-05-10_15-43-43_rylinw.jpg",
      },
    ],
  },

  about: {
    sectionLabel: "Our Story",

    watermark: "MAROON",

    heading: "CURATED WITH LOVE\nFOR YOUR EVERYDAY\nELEGANCE",

    accentLineIndex: 1,

    description:
      "Maroon Vastra was created with a simple vision — making elegant, aesthetic jewellery affordable for every woman. From carefully selecting pieces to packing every order with love, every detail reflects our passion for minimal luxury.",

    floatBadge: "Minimal Luxury",

    floatStat: {
      value: "5k+",
      label: "Happy Instagram Family",
    },

    mainImage:
      "https://res.cloudinary.com/ddblal31l/image/upload/v1778408348/photo_2026-05-10_15-48-41_zmojpu.jpg",

    insetImage:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400&auto=format&fit=crop",

    pillars: [
      {
        title: "Everyday Elegance",

        body: "Jewellery designed to elevate your daily outfits effortlessly.",
      },

      {
        title: "Premium Feel",

        body: "Minimal luxury inspired collections without premium pricing.",
      },

      {
        title: "Carefully Packed",

        body: "Every order is packed beautifully with personal attention.",
      },

      {
        title: "Trusted Quality",

        body: "Anti tarnish pieces selected for long lasting shine and durability.",
      },
    ],

    ctaText: "Shop On Instagram",

    ctaHref: "https://instagram.com/maroonvastra",

    secondaryCtaText: "Follow Our Journey",

    secondaryCtaHref: "https://instagram.com/maroonvastra",
  },

  promoBanner: {
    badge: "Loved By Customers",
    heading: "MINIMAL\nJEWELLERY\nCOLLECTION",
    accentLineIndex: 1,
    description:
      "Timeless minimal jewellery pieces curated to elevate your everyday outfits with elegance and simplicity.",
    countdownHours: 24,
    offerLabel: "LIVE",
    offerSublabel: "NOW",
    ctaText: "Browse Collection",
    ctaHref: "#collections",
    secondaryCtaText: "Follow Updates",
    secondaryCtaHref: "https://instagram.com/maroonvastra",
    bgImage:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?q=80&w=2070&auto=format&fit=crop",
  },

  newArrivals: {
    sectionLabel: "Fresh Collections",

    heading: "LATEST ARRIVALS",

    accentWordIndex: 0,

    subheading:
      "Discover our latest elegant and minimal jewellery collections.",

    items: [
      {
        name: "Gold Layer Collection",
        tag: "Trending",
        image:
          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",
      },

      {
        name: "Cherry pendant necklace",

        tag: "Everyday Wear",

        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778407775/photo_2026-05-10_15-38-36_kz3joq.jpg",
      },

      {
        name: "Heart Pendant",

        tag: "Bestseller",

        image:
          "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=800&auto=format&fit=crop",
      },

      {
        name: "Multicolor charm necklaces",
        tag: "Elegant",
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778408085/photo_2026-05-10_15-43-43_rylinw.jpg",
      },

      {
        name: "Luxury Gold Rings",

        tag: "Luxury",

        image:
          "https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=800&auto=format&fit=crop",
      },

      {
        name: "Minimal Daily Wear",

        tag: "New",

        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },

  instaGrid: {
    sectionLabel: "Join The Aesthetic",
    heading: "MAROON STYLE",
    accentWordIndex: 0,
    handle: "@maroonvastra",
    profileUrl: "https://instagram.com/maroonvastra",
    followText: "Follow Us On Instagram",
    posts: [
      {
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778407775/photo_2026-05-10_15-38-36_kz3joq.jpg",
        likes: "145",
        comments: "12",
        span: "tall",
      },

      {
        image:
          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800&auto=format&fit=crop",

        likes: "321",

        comments: "8",

        span: "normal",
      },

      {
        image:
          "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=800&auto=format&fit=crop",

        likes: "210",

        comments: "14",

        span: "normal",
      },

      {
        image:
          "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800&auto=format&fit=crop",

        likes: "134",

        comments: "9",

        span: "normal",
      },

      {
        image:
          "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=800&auto=format&fit=crop",

        likes: "412",

        comments: "22",

        span: "wide",
      },

      {
        image:
          "https://res.cloudinary.com/ddblal31l/image/upload/v1778408085/photo_2026-05-10_15-43-43_rylinw.jpg",

        likes: "188",

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
      "Our beautiful community loves the quality, elegance, and affordability of our jewellery collections.",

    reviews: [
      {
        name: "Ayesha M.",

        role: "Verified Buyer",

        text: "Absolutely loved the bracelet quality. Looks premium and elegant for everyday wear.",

        rating: 5,
      },

      {
        name: "Rida F.",

        role: "Verified Buyer",

        text: "The jewellery arrived beautifully packed and exactly like the pictures. Highly recommended!",

        rating: 5,
      },

      {
        name: "Nida K.",

        role: "Verified Buyer",

        text: "Minimal, classy and affordable. This is my third order already!",

        rating: 5,
      },
    ],
  },

  footer: {
    description:
      "Elegant anti-tarnish jewellery curated with love for your everyday minimal luxury moments.",

    contact: {
      email: "DM us on Instagram",

      phone: "+91 9876543210",

      address: "Pan India Delivery",
    },

    quickLinks: [
      { label: "Home", href: "#home" },

      { label: "Our Story", href: "#about" },

      { label: "Collections", href: "#collections" },

      { label: "Instagram", href: "https://instagram.com/maroonvastra" },
    ],

    legal: [
      { label: "Prepaid Orders Only", href: "#" },

      {
        label: "Shop Via Instagram",
        href: "https://instagram.com/maroonvastra",
      },
    ],
  },
};
