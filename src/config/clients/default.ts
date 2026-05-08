import type { PortfolioConfig } from "../../types/portfolio";

export const DEFAULT_CONFIG: PortfolioConfig = {
  name: "Stack Innovative",
  description: "High-Performance Web & Mobile Applications",
  location: "Kochi, Kerala",
  phone: "+91 9188050342",
  services: ["React.js", "Capacitor Mobile", "Node.js Backend"],
  tagline: "Scalable architecture. Pixel-perfect design.",
  heroTitle: "Build Better Digital Experiences",
  logoText: "stack innovative",
  logoImage: "",
  features: [
    {
      title: "Modern Web Apps",
      desc: "Fast, responsive single-page applications.",
    },
    {
      title: "Cross-Platform Mobile",
      desc: "Native-feeling apps built with Capacitor.",
    },
    {
      title: "Robust Backends",
      desc: "Secure Node.js and custom database architectures.",
    },
  ],
  navLinks: [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  ctaText: "Let's Talk Code",

  hero: {
    badge: "Full-Stack Development",
    headingMain: "Engineered for",
    headingHighlight: "Performance",
    description:
      "End-to-end application development. From custom database schemas and JWT authentication to seamless React frontends and Capacitor mobile builds.",
    primaryCta: "View GitHub",
    secondaryCta: "My Stack",
    stats: [
      { label: "Uptime", value: "99.9%" },
      { label: "Location", value: "Kochi" },
      { label: "Stack", value: "MERN" },
    ],
  },

  featuresSection: {
    badge: "Technical Expertise",
    headingMain: "Scalable Solutions at",
    headingHighlight: "Every Layer",
    description:
      "Handling the entire development lifecycle, ensuring your application is fast, secure, and ready to scale.",
    items: [
      {
        title: "Frontend Engineering",
        desc: "Dynamic UIs tailored to user needs.",
        icon: "code",
      },
      {
        title: "Backend Systems",
        desc: "Secure APIs with optimized SQL/NoSQL databases.",
        icon: "server",
      },
      {
        title: "Mobile Deployment",
        desc: "Bringing web technologies natively to iOS and Android.",
        icon: "smartphone",
      },
    ],
  },

  portfolioSection: {
    badge: "Recent Commits",
    headingMain: "Shipped to",
    headingHighlight: "Production",
    description:
      "A look at recent technical builds, including custom SaaS dashboards and financial management applications.",
    projects: [
      {
        id: 1,
        title: "Custom Expense Tracker",
        category: "Full-Stack Web App",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: 2,
        title: "E-Commerce Dashboard",
        category: "React / Node.js",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: 3,
        title: "Mobile Task Manager",
        category: "Capacitor",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
      },
      {
        id: 4,
        title: "Secure Auth Portal",
        category: "JWT / bcrypt",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee9811?q=80&w=800&auto=format&fit=crop",
      },
    ],
  },

  aboutSection: {
    badge: "The Developer",
    headingMain: "Writing Code that",
    headingHighlight: "Solves Problems",
    description:
      "Bridging the gap between complex technical requirements and intuitive user experiences.",
    bentoBoxes: {
      mainStory: {
        title: "The Workflow",
        text: "I specialize in building robust digital products. Whether drafting a complex relational database or fine-tuning frontend state management, I focus on clean, maintainable code that scales with your business.",
      },
      statBox: { value: "100%", label: "Committed" },
      features: [
        {
          title: "Clean Architecture",
          desc: "Maintainable and modular codebases.",
          icon: "cpu",
        },
        {
          title: "Optimized Performance",
          desc: "Ensuring maximum efficiency across devices.",
          icon: "zap",
        },
      ],
    },
  },

  pricingSection: {
    badge: "Development Scope",
    headingMain: "Structured for",
    headingHighlight: "Project Needs",
    description:
      "From rapid prototyping to complete enterprise application builds.",
    toggleLeft: "MVP Build",
    toggleRight: "Full Scale",
    tiers: [
      {
        name: "Consultation & Architecture",
        description:
          "System design, database mapping, and tech stack planning.",
        priceStandard: "Custom Quote",
        priceBulk: "Included in Build",
        features: [
          "Database Schema Design",
          "API Planning",
          "Tech Stack Selection",
          "Feasibility Study",
          "1 Revision",
        ],
        ctaText: "Book a Call",
        isPopular: false,
      },
      {
        name: "Standard Application",
        description:
          "The sweet spot for getting a robust product to market quickly.",
        priceStandard: "Sprint Based",
        priceBulk: "Sprint Based",
        features: [
          "Full-Stack Development",
          "Responsive UI",
          "Secure Authentication",
          "Admin Dashboard",
          "Deployment Setup",
        ],
        ctaText: "Start Sprints",
        isPopular: true,
      },
      {
        name: "Enterprise Architecture",
        description:
          "Complex logic, microservices, and high-availability setups.",
        priceStandard: "Contract",
        priceBulk: "Contract",
        features: [
          "Advanced Data Pipelines",
          "Cross-Platform Mobile App",
          "Third-Party Integrations",
          "Continuous CI/CD",
          "Priority Support",
        ],
        ctaText: "Discuss Details",
        isPopular: false,
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
