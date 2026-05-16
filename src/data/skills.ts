import { Code2, Server, Languages, Wrench, type LucideIcon } from "lucide-react";

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React.js", level: 80 },
      
      
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Spring Boot", level: 70 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    title: "Languages",
    icon: Languages,
    skills: [
      { name: "Python", level: 70 },
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 85 },
      
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "MongoDB", level: 75 },
      { name: "VS Code", level: 96 },
    ],
  },
];
