import { Home, Users, Briefcase, Calendar, Palette, Package, GraduationCap, Coffee, Rocket } from "lucide-react";

export interface Program {
  id: string;
  name: string;
  description: string;
  icon: typeof Home;
}

export const programs: Program[] = [
  {
    id: "homebrew",
    name: "The Homebrew",
    description: "A collaborative space where students experiment with ideas and build prototypes in a supportive environment.",
    icon: Home
  },
  {
    id: "cohorts",
    name: "Cohorts",
    description: "Structured learning groups that work together on deep-tech projects with guidance from mentors.",
    icon: Users
  },
  {
    id: "workrooms",
    name: "Workrooms",
    description: "Dedicated spaces for focused work on specific paradigms and research areas.",
    icon: Briefcase
  },
  {
    id: "curated-events",
    name: "Curated Events",
    description: "Workshops, seminars, and conferences featuring industry experts and thought leaders.",
    icon: Calendar
  },
  {
    id: "creative-community",
    name: "Creative Community",
    description: "A network of innovators, designers, and builders collaborating across disciplines.",
    icon: Palette
  },
  {
    id: "starter-kits",
    name: "DeepTech Starter Kits",
    description: "Curated resources and tools to help students get started in deep-tech domains.",
    icon: Package
  },
  {
    id: "imagineering",
    name: "Imagineering School",
    description: "A program focused on creative problem-solving and innovative thinking methodologies.",
    icon: GraduationCap
  },
  {
    id: "founders-brunch",
    name: "Founders' Brunch",
    description: "Networking events connecting aspiring entrepreneurs with successful founders.",
    icon: Coffee
  },
  {
    id: "incubation",
    name: "Startup Incubation",
    description: "Full-stack support for teams ready to turn their projects into viable startups.",
    icon: Rocket
  }
];
