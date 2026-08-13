import type { IconType } from "react-icons";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaMobileAlt,
  FaPython,
  FaJava,
  FaCode,
  FaGitAlt,
  FaGithub,
  FaFire,
  FaDatabase,
  FaFigma,
  FaServer,
  FaLinux,
} from "react-icons/fa";

export type SkillItem = {
  name: string;
  level?: number;
  description?: string;
  icon?: IconType;
};

export const skillSections = {
  programming: [
    {
      name: "HTML5",
      description: "Semantic HTML, Accessibility, SEO",
      icon: FaHtml5,
    },
    {
      name: "CSS3",
      description: "Flexbox, Grid, Animations, Responsive Design",
      icon: FaCss3Alt,
    },
    {
      name: "JavaScript",
      description: "DOM, ES6+, APIs, Async Programming",
      icon: FaJs,
    },
    {
      name: "React",
      description: "Components, Hooks, State Management",
      icon: FaReact,
    },
    {
      name: "Flutter",
      description: "Cross-platform Mobile Development",
      icon: FaMobileAlt,
    },
    {
      name: "Python",
      description: "Automation, Data Structures, OOP",
      icon: FaPython,
    },
    {
      name: "Java",
      description: "Object-Oriented Programming",
      icon: FaJava,
    },
    {
      name: "C#",
      description: "Desktop Applications and .NET Basics",
      icon: FaCode,
    },
  ] as SkillItem[],
  tools: [
    { name: "Git", icon: FaGitAlt },
    { name: "GitHub", icon: FaGithub },
    { name: "Firebase", icon: FaFire },
    { name: "MySQL", icon: FaDatabase },
    { name: "VS Code", icon: FaCode },
    { name: "Figma", icon: FaFigma },
    { name: "XAMPP", icon: FaServer },
    { name: "Linux", icon: FaLinux },
  ] as SkillItem[],
  proficiency: [
    { name: "HTML5", level: 95 },
    { name: "CSS3", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "Flutter", level: 80 },
    { name: "Python", level: 75 },
    { name: "Java", level: 70 },
  ] as SkillItem[],
  learning: [
    {
      name: "React Native",
      description: "Building mobile applications with JavaScript.",
    },
    {
      name: "Next.js",
      description: "Modern React Framework for production websites.",
    },
    {
      name: "Artificial Intelligence",
      description: "Exploring machine learning and intelligent systems.",
    },
    {
      name: "Cloud Computing",
      description: "Firebase, deployment and cloud services.",
    },
  ] as SkillItem[],
};