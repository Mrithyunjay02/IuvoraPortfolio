export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  badge?: string;
  isPrototype?: boolean;
  liveUrl?: string;
  image: string;
  aspectRatio?: string;
  description: string;
  tags: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "daynit-enterprises",
    number: "01",
    title: "Daynit Enterprises",
    category: "Web Development",
    liveUrl: "https://daynitenterprises.com",
    image: "/case-studies/daynit.webp",
    description:
      "An independent import and export business connecting global markets — exporting fresh produce, spices, grains, pulses, and eco-friendly tableware. The site showcases their product range, sourcing-to-delivery process, and latest trade news for buyers worldwide.",
    tags: ["Import & Export", "Global Trade", "Catalog & Sourcing"]
  },
  {
    id: "shams-al-kanari",
    number: "02",
    title: "Shams Al Kanari",
    category: "Web Development",
    liveUrl: "https://shamsalkanari.com",
    image: "/case-studies/shams.webp",
    description:
      "A luxury architectural service and property maintenance brand serving Dubai's premium villas, penthouses, and commercial spaces. The site presents their bespoke services, portfolio of featured projects, and booking channels for discerning clients.",
    tags: ["Luxury Architecture", "Dubai High-End", "Bespoke Services"]
  },
  {
    id: "mh-developers",
    number: "03",
    title: "MH Developers",
    category: "Web Development",
    liveUrl: "https://mhdevelopers.netlify.app/",
    image: "/case-studies/mhdevelopers.webp",
    description:
      "A construction and real estate development company showcasing completed and ongoing residential projects, leadership team, and a project inquiry system for prospective buyers across Karnataka.",
    tags: ["Real Estate", "Construction", "Property Inquiries"]
  },
  {
    id: "fitforce",
    number: "04",
    title: "FitForce",
    category: "Web Development",
    liveUrl: "https://getfitwith-abhi.netlify.app",
    image: "/case-studies/fitforce.webp",
    description:
      "A personal fitness coaching brand offering online training plans, nutrition guidance, and trainer certifications — built with a full enrollment and plan-selection experience for clients.",
    tags: ["Fitness & Coaching", "Enrollment System", "Training Plans"]
  },
  {
    id: "matru-sneh",
    number: "05",
    title: "Matru-Sneh",
    category: "App Development",
    badge: "Prototype",
    isPrototype: true,
    image: "/case-studies/matrusneha.jpeg",
    description:
      "A bilingual (Kannada/English) maternal health companion app for tracking pregnancy — featuring a kick counter, checkup countdown, weekly baby growth updates, a daily nutrition checklist, and a health alerts system for pregnancy danger signs.",
    tags: ["Maternal Healthcare", "Bilingual Mobile App", "Prototype / Concept"]
  }
];
