export type Project = {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  accent: "purple" | "blue" | "cyan";
  highlights: string[];
  image: string; // ✅ image field added
};

export const projects: Project[] = [
  {
    title: "AI Interview Analyzer",
    tagline: "AI-driven insights for your career growth.",
    description:
      "An AI coach that records mock interviews and gives instant feedback on your answers, pacing, and body language to help you land the job.",
    tech: ["Java", "Frontend",  "React", "Tailwind CSS"],
    github: "https://github.com/basantkumar",
    demo: "#",
    accent: "purple",
    image: "/projects/project1.png",
    highlights: [
      "Speech & text → competency classifier",
      "Confidence scoring & response-fit predictions",
      "Clean, responsive dashboard-style UI",
    ],
  },
  {
    title: "Inventory Management System",
    tagline: "Full stack stock & operations platform",
    description:
      "An end-to-end inventory management system featuring role-based access, real-time stock tracking, low-stock alerts, and a REST API backend. Designed for small businesses to manage products, suppliers, and orders efficiently.",
    tech: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    github: "https://github.com/basantkumar",
    demo: "#",
    accent: "blue",
    image: "/projects/project2.png",
    highlights: [
      "Full CRUD for products, suppliers & orders",
      "Real-time inventory tracking & alerts",
      "Admin dashboard with analytics",
    ],
  },
];