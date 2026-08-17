export interface ProjectFeature {
  title: string;
  description: string;
}

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

  // Rich Case Study Extensions (Optional & Strongly Typed)
  industry?: string;
  platform?: string;
  scope?: string;
  status?: string;
  challenge?: string;
  solution?: string;
  features?: ProjectFeature[];
  technologies?: string[];
  gallery?: string[];
  outcome?: string;
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
    tags: ["Import & Export", "Global Trade", "Catalog & Sourcing"],
    industry: "Global Trade & Agricultural Export",
    platform: "Web Platform",
    scope: "Web Architecture, Product Catalog & Sourcing Workflow",
    status: "Production / Live",
    challenge:
      "Daynit Enterprises required a unified international digital presence to showcase their diverse commodity catalog—ranging from fresh agro-commodities and spices to sustainable tableware—while communicating sourcing transparency, international standards compliance, and supply chain reliability to institutional buyers across global markets.",
    solution:
      "Engineered an editorial, high-performance web platform featuring a categorized export commodity directory, an end-to-end sourcing-to-delivery logistics breakdown, real-time market trade updates, and direct B2B procurement inquiry channels.",
    features: [
      {
        title: "Comprehensive Commodity Directory",
        description:
          "Structured product catalog detailing fresh produce, spices, grains, pulses, and eco-friendly tableware with clear export specifications."
      },
      {
        title: "Sourcing-to-Delivery Process",
        description:
          "Visual step-by-step workflow outlining procurement, rigorous quality inspection, packaging standards, and global freight handling."
      },
      {
        title: "Trade News & Market Insights",
        description:
          "Dedicated information hub delivering relevant export market updates and commodity trends for international partners."
      },
      {
        title: "Structured B2B Inquiries",
        description:
          "Direct procurement inquiry pipelines enabling prospective buyers to initiate trade quotes and volume orders effortlessly."
      }
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Modern Web APIs"],
    gallery: ["/case-studies/daynit.webp"],
    outcome:
      "Delivered a credible digital gateway that clarifies product lines, reinforces trade confidence, and provides global buyers with a frictionless path from product discovery to business inquiry."
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
    tags: ["Luxury Architecture", "Dubai High-End", "Bespoke Services"],
    industry: "Luxury Architectural Services & Property Maintenance",
    platform: "Web Platform",
    scope: "Brand Web Experience, Portfolio Gallery & Consultation Booking",
    status: "Production / Live",
    challenge:
      "Operating in Dubai's premier residential and commercial sector, Shams Al Kanari needed a digital flagship reflecting the sophistication of their bespoke architectural fit-outs and high-end property management while making consultation scheduling intuitive for VIP property owners.",
    solution:
      "Crafted a minimalist, luxury-focused web platform emphasizing architectural photography, curated service breakdowns for villas and penthouses, and seamless direct booking channels tailored for discerning private and commercial clients.",
    features: [
      {
        title: "Bespoke Architectural Services",
        description:
          "Curated breakdowns of specialized services including premium interior fit-outs, comprehensive maintenance, and spatial renovations."
      },
      {
        title: "High-End Project Showcase",
        description:
          "Visual gallery presenting completed works across prestigious Dubai villas, luxury penthouses, and commercial spaces."
      },
      {
        title: "Direct Client Booking Channel",
        description:
          "Frictionless consultation and inquiry booking flow designed for high-value property owners and facility managers."
      },
      {
        title: "Luxury Spatial Aesthetic",
        description:
          "Refined typography, high-contrast dark tones, and expansive whitespace tailored to luxury real estate standards."
      }
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Responsive UI"],
    gallery: ["/case-studies/shams.webp"],
    outcome:
      "Established an elevated digital flagship that projects the brand's architectural craft and simplifies consultation inquiries for luxury property owners across the UAE."
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
    tags: ["Real Estate", "Construction", "Property Inquiries"],
    industry: "Real Estate & Construction Development",
    platform: "Web Platform",
    scope: "Real Estate Directory, Builder Profile & Lead Capture",
    status: "Production / Live",
    challenge:
      "MH Developers needed a structured digital showcase to establish company authority in Karnataka's residential construction sector, showcase finished and ongoing developments, and provide prospective homebuyers with an accessible inquiry channel.",
    solution:
      "Developed a robust property showcase platform presenting residential projects with status tracking, builder credentials, executive leadership profiles, and an integrated lead inquiry system for site visit scheduling.",
    features: [
      {
        title: "Residential Developments Directory",
        description:
          "Organized showcase distinguishing between completed residential developments and active ongoing construction sites."
      },
      {
        title: "Leadership & Company Profile",
        description:
          "Dedicated background on executive leadership, construction philosophy, and regional builder reputation across Karnataka."
      },
      {
        title: "Prospective Buyer Inquiries",
        description:
          "Integrated lead capture forms enabling prospective buyers to request property brochures and schedule on-site visits."
      },
      {
        title: "Architectural & Project Details",
        description:
          "Structured overviews of project specifications, floor plan highlights, and locational advantages."
      }
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Modern Web Architecture"],
    gallery: ["/case-studies/mhdevelopers.webp"],
    outcome:
      "Provided homebuyers and real estate investors with a clear, credible view of MH Developers' construction track record and simplified property inquiries."
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
    tags: ["Fitness & Coaching", "Enrollment System", "Training Plans"],
    industry: "Health & Fitness Coaching",
    platform: "Web Platform",
    scope: "Coaching Portal, Program Directory & Client Enrollment",
    status: "Production / Live",
    challenge:
      "A personal coaching brand required an engaging digital portal to present training methodologies, nutrition guidance, and trainer qualifications while providing a clear enrollment funnel for prospective fitness clients.",
    solution:
      "Engineered an energetic, mobile-first coaching web application featuring categorized fitness programs, nutritional guidance overviews, verified trainer certifications, and an interactive plan-selection flow.",
    features: [
      {
        title: "Tiered Training Plans",
        description:
          "Clear breakdown of customized online fitness programs, workout regimens, and 1-on-1 coaching options."
      },
      {
        title: "Nutritional Guidance System",
        description:
          "Educational nutrition overviews and dietary advice designed to complement active workout routines."
      },
      {
        title: "Trainer Certification Showcase",
        description:
          "Accreditation and credential display establishing coaching authority and professional fitness expertise."
      },
      {
        title: "Interactive Client Enrollment",
        description:
          "Intuitive plan selection and client onboarding pathway guiding trainees from initial interest to program enrollment."
      }
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Client State Management"],
    gallery: ["/case-studies/fitforce.webp"],
    outcome:
      "Streamlined client onboarding with a modern coaching presentation that communicates program value and enables direct enrollment."
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
    tags: ["Maternal Healthcare", "Bilingual Mobile App", "Prototype / Concept"],
    industry: "Maternal & Prenatal Healthcare",
    platform: "Mobile Application (Concept / Prototype)",
    scope: "Mobile UX Architecture, Health Tracker Prototype & Localization",
    status: "Prototype / Internal Concept Build",
    challenge:
      "Expecting mothers in regional communities frequently lack accessible, localized digital tools to track pregnancy milestones, monitor fetal activity, and recognize prenatal danger signs in their native language.",
    solution:
      "Architected a reassuring, bilingual mobile companion concept featuring intuitive fetal kick counting, milestone countdowns, weekly developmental guides, daily nutrition checklists, and proactive prenatal danger alerts.",
    features: [
      {
        title: "Bilingual Localization (Kannada / English)",
        description:
          "Dual-language interface ensuring maternal health tracking is accessible and reassuring for regional mothers."
      },
      {
        title: "Fetal Kick Counter",
        description:
          "Interactive kick-tracking utility with timestamp logging to help mothers monitor vital fetal movement patterns."
      },
      {
        title: "Checkup Countdown & Baby Growth",
        description:
          "Weekly baby size and developmental milestone insights paired with clinical checkup countdown reminders."
      },
      {
        title: "Daily Nutrition Checklist",
        description:
          "Essential daily dietary habit tracking and balanced nutrition suggestions formulated for pregnancy care."
      },
      {
        title: "Prenatal Health Alerts System",
        description:
          "Clear educational guidance and warning indicators to help mothers identify pregnancy danger signs requiring clinical care."
      }
    ],
    technologies: ["React Native / Mobile UI", "TypeScript", "Bilingual i18n", "Health Logging Logic"],
    gallery: ["/case-studies/matrusneha.jpeg"],
    outcome:
      "Validated a compassionate, accessible maternal healthcare prototype designed to bridge linguistic divides and support expectant mothers through critical prenatal stages."
  }
];
