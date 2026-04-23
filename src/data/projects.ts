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
    title: "Disease Prediction Tool",
    tagline: "AI-assisted symptom-based diagnosis",
    description:
      "A machine learning powered web app that predicts likely diseases from a set of user-reported symptoms. Trained on a curated medical dataset with a clean dashboard to display predictions, confidence scores, and recommended next steps.",
    tech: ["Python", "Scikit-learn", "Flask", "React", "Tailwind CSS"],
    github: "https://github.com/basantkumar",
    demo: "#",
    accent: "purple",
    image: "/projects/project1.png",
    highlights: [
      "Symptom → disease classifier",
      "Confidence scoring & top-k predictions",
      "Clean, responsive clinical-style UI",
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