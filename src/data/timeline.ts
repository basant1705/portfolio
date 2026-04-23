export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  description: string;
  tags?: string[];
};

export const timeline: TimelineItem[] = [
  {
    period: "2023 — Present",
    title: "B.Tech, Computer Science & Engineering",
    org: "Galgotias University",
    description:
      "Pursuing a Bachelor of Technology in CSE with a focus on full stack development, software engineering, and applied machine learning.",
    tags: ["Data Structures", "Algorithms", "DBMS", "Web Development"],
  },
  {
    period: "2024",
    title: "Full Stack Project — Inventory Management System",
    org: "Independent Project",
    description:
      "Designed and shipped a complete inventory platform with REST APIs, role-based admin dashboard, and real-time stock tracking.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    period: "2024",
    title: "AI Project — Disease Prediction Tool",
    org: "Independent Project",
    description:
      "Built a symptom-based disease prediction tool combining a Python ML model with a clean React dashboard for clinical UX.",
    tags: ["Python", "ML", "Flask", "React"],
  },
];
