import { paradigmLogos } from '../assets/paradigms';

export interface Paradigm {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  domain: string;
  focusArea: string;
  homebase: string;
  icon: string;
  color: string;
  gradient: string;
  features: string[];
  technologies: string[];
  highlights: string[];
  contact?: {
    website?: string;
    email?: string;
    instagram?: string;
    linkedin?: string;
    discord?: string;
    youtube?: string;
    twitter?: string;
  };
}

export const paradigms: Paradigm[] = [
  {
    id: "drug",
    name: "Drugparadigm",
    shortName: "Drug",
    tagline: "AI-Driven Drug Discovery",
    description: "Drugparadigm is K-Hub's AI-driven drug discovery vertical, focused on building deep learning models which help Pharma companies cut down their time & cost to develop new drug molecules. Instead of screening random libraries of existing molecules, our models 'generate' the perfect molecule from scratch, atom by atom.",
    domain: "Artificial Intelligence, Drug Discovery",
    focusArea: "Therapeutic Modalities",
    homebase: "1st Floor, K-Hub",
    icon: paradigmLogos.drug,
    color: "primary",
    gradient: "from-primary to-teal-400",
    features: [
      "Generative AI for molecule design",
      "PROTACs and ADC optimization",
      "Diffusion Models for drug generation",
      "SE3 Transformers for efficacy prediction"
    ],
    technologies: [
      "Transformers",
      "Diffusion Models", 
      "Graph Neural Networks",
      "Reinforcement Learning"
    ],
    highlights: [
      "State-of-the-art performance on benchmarks",
      "Research under peer review in Q1 journals",
      "Focus on 'undruggable' targets"
    ],
    contact: {
      website: "www.drugparadigm.com",
      email: "outreach@drugparadigm.in",
      instagram: "https://instagram.com/drugparadigm",
      linkedin: "https://linkedin.com/company/drugparadigm"
    }
  },
  {
    id: "cyber",
    name: "Cyberparadigm",
    shortName: "Cyber",
    tagline: "Cybersecurity Training Platform",
    description: "Cyberparadigm is K-Hub's cybersecurity vertical, focused on building 'Let Us Hack,' an online platform that teaches cybersecurity through hands-on challenges and guided labs. We offer an affordable and accessible way for learners to practice and strengthen their cybersecurity skills.",
    domain: "Artificial Intelligence, Cyber Security",
    focusArea: "Security Training & CTF",
    homebase: "2nd Floor, K-Hub",
    icon: paradigmLogos.cyber,
    color: "accent",
    gradient: "from-accent to-orange-400",
    features: [
      "Let Us Hack learning platform",
      "CTF (Capture The Flag) challenges",
      "Gamified hands-on exercises",
      "Penetration testing modules"
    ],
    technologies: [
      "Web Security",
      "Network Penetration",
      "AI-driven vulnerability detection",
      "Digital Forensics"
    ],
    highlights: [
      "400+ trained learners across KMEC & NGIT",
      "Beta website released",
      "Mobile app planned for 2027",
      "Campus-safe cyber awareness programs"
    ],
    contact: {
      instagram: "https://instagram.com/letushackofficial",
      linkedin: "https://linkedin.com/company/letushackofficial",
      discord: "https://discord.gg/your-invite-code"
    }
  },
  {
    id: "robo",
    name: "Roboparadigm",
    shortName: "Robo",
    tagline: "Robotics & Lab Automation",
    description: "Roboparadigm is K-Hub's robotics vertical, focused on building automation solutions using robotics and AI across K-Hub's deep-tech verticals, with current work aimed at lab automation solutions for drug-discovery wet labs and materials science labs.",
    domain: "Artificial Intelligence, Robotics, IoT",
    focusArea: "Robotic Automation",
    homebase: "3rd Floor, K-Hub",
    icon: paradigmLogos.robo,
    color: "primary",
    gradient: "from-cyan-400 to-primary",
    features: [
      "Voice-based robot control",
      "Object detection & pose estimation",
      "6-DOF robotic arm development",
      "Indigenous humanoid robot design"
    ],
    technologies: [
      "OpenMANIPULATOR-X",
      "RGB-D Camera Systems",
      "Computer Vision",
      "Motion Planning"
    ],
    highlights: [
      "Upgraded OMX from 5 to 6 DOF",
      "Voice command integration",
      "Custom 3D-printed components",
      "Lab automation proof of concept"
    ],
    contact: {
      instagram: "https://instagram.com/roboparadigm",
      linkedin: "https://linkedin.com/company/roboparadigm"
    }
  },
  {
    id: "mental-health",
    name: "Neuroparadigm",
    shortName: "Mental Health",
    tagline: "AI-Driven Mental Wellness",
    description: "Mental Health Tech focuses on developing AI-driven solutions for mental health support, digital therapeutics, and accessible psychological care through technology-enabled interventions.",
    domain: "Artificial Intelligence, Healthcare",
    focusArea: "AI driven Mental Wellness",
    homebase: "K-Hub Campus",
    icon: paradigmLogos['mental-health'],
    color: "accent",
    gradient: "from-pink-400 to-accent",
    features: [
      "AI-powered mental health screening",
      "Digital therapeutic interventions",
      "Accessible counseling platforms",
      "Mood tracking & analytics"
    ],
    technologies: [
      "Natural Language Processing",
      "Sentiment Analysis",
      "Conversational AI",
      "Behavioral Analytics"
    ],
    highlights: [
      "Coming soon in future newsletters",
      "Focus on student mental wellness",
      "Collaboration with healthcare partners"
    ]
  },
  {
    id: "nutraceuticals",
    name: "Neutraparadigm",
    shortName: "Nutra",
    tagline: "Functional Foods & Supplements",
    description: "The Nutraceuticals vertical explores the intersection of nutrition science and pharmaceutical development, focusing on functional foods, dietary supplements, and personalized nutrition solutions.",
    domain: "Food Science, Biotechnology",
    focusArea: "Neutraceuticals",
    homebase: "K-Hub Campus",
    icon: paradigmLogos.nutraceuticals,
    color: "primary",
    gradient: "from-green-400 to-primary",
    features: [
      "Functional food development",
      "Supplement formulation",
      "Personalized nutrition",
      "Bioavailability optimization"
    ],
    technologies: [
      "Nutritional Genomics",
      "Food Chemistry",
      "Microbiome Analysis",
      "Clinical Trials"
    ],
    highlights: [
      "Coming soon in future newsletters",
      "Research partnerships in development"
    ]
  },
  {
    id: "crystal",
    name: "Crystalparadigm",
    shortName: "Crystal",
    tagline: "Materials Science & Crystallography",
    description: "Crystal Paradigm focuses on advanced materials science research, crystallography, and the development of novel materials with specific properties for various technological applications.",
    domain: "Materials Science, Chemistry",
    focusArea: "Material Science",
    homebase: "K-Hub Campus",
    icon: paradigmLogos.crystal,
    color: "primary",
    gradient: "from-violet-400 to-primary",
    features: [
      "Crystallographic analysis",
      "Materials characterization",
      "Novel material synthesis",
      "Property optimization"
    ],
    technologies: [
      "X-ray Diffraction",
      "Electron Microscopy",
      "Computational Materials Science",
      "Machine Learning for Materials"
    ],
    highlights: [
      "Coming soon in future newsletters",
      "Lab infrastructure development"
    ]
  }
];

export const getParadigmById = (id: string) => paradigms.find(p => p.id === id);
