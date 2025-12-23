export interface Newsletter {
  id: string;
  issueNumber: number;
  title: string;
  publishDate: string;
  summary: string;
  featuredParadigms: string[];
  highlights?: {
    paradigmId: string;
    title: string;
    description: string;
    points: string[];
  }[];
  coverImage?: string;
  pdfUrl?: string;
}

export const newsletters: Newsletter[] = [
  {
    id: "issue-01",
    issueNumber: 1,
    title: "Paradigm Chronicles Issue 01",
    publishDate: "December 17, 2025",
    summary: "Introducing K-Hub's deep-tech verticals: Drugparadigm's AI-driven drug discovery with Laurus Labs partnership, Cyberparadigm's Let Us Hack platform training 400+ learners, and Roboparadigm's lab automation with enhanced 6-DOF robotic arms.",
    featuredParadigms: ["drug", "cyber", "robo"],
    coverImage: "/newsletter/page1.jpg",
    pdfUrl: "https://drive.google.com/file/d/1kiYip-FaDygeVdFxoJsTYeYUnTZ8S-I6/view",
    highlights: [
      {
        paradigmId: "drug",
        title: "AI Drug Discovery",
        description: "Learn about PROTACs, Diffusion Models, and SE3 Transformers powering next-generation drug development with Laurus Labs partnership.",
        points: [
          "Generative AI for molecule design",
          "State-of-the-art benchmark results",
          "Research in Q1 journals"
        ]
      },
      {
        paradigmId: "cyber",
        title: "Let Us Hack Platform",
        description: "An online platform teaching cybersecurity through hands-on challenges, CTF competitions, and gamified learning experiences.",
        points: [
          "400+ trained learners",
          "Workshops at KMEC & NGIT",
          "Mobile app coming 2027"
        ]
      },
      {
        paradigmId: "robo",
        title: "Lab Automation",
        description: "Robotics solutions for drug-discovery wet labs using OpenMANIPULATOR-X with enhanced capabilities.",
        points: [
          "6-DOF robotic arm upgrade",
          "Voice command control",
          "Object detection & pose estimation"
        ]
      }
    ]
  }
  // Future issues can omit highlights to use paradigm data, or have no highlights section at all
];

export const getNewsletterById = (id: string) => newsletters.find(n => n.id === id);

