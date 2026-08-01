export type SkillItem = {
  name: string;
  level?: number;
  description?: string;
  iconClassName?: string;
};

export const skillSections = {
  programming: [
    {
      name: "HTML5",
      description: "Semantic HTML, Accessibility, SEO",
      iconClassName: "fab fa-html5",
    },
    {
      name: "CSS3",
      description: "Flexbox, Grid, Animations, Responsive Design",
      iconClassName: "fab fa-css3-alt",
    },
    {
      name: "JavaScript",
      description: "DOM, ES6+, APIs, Async Programming",
      iconClassName: "fab fa-js",
    },
    {
      name: "React",
      description: "Components, Hooks, State Management",
      iconClassName: "fab fa-react",
    },
    {
      name: "Flutter",
      description: "Cross-platform Mobile Development",
      iconClassName: "fas fa-mobile-alt",
    },
    {
      name: "Python",
      description: "Automation, Data Structures, OOP",
      iconClassName: "fab fa-python",
    },
    {
      name: "Java",
      description: "Object-Oriented Programming",
      iconClassName: "fab fa-java",
    },
    {
      name: "C#",
      description: "Desktop Applications and .NET Basics",
      iconClassName: "fas fa-code",
    },
  ] as SkillItem[],
  tools: [
    { name: "Git", iconClassName: "fab fa-git-alt" },
    { name: "GitHub", iconClassName: "fab fa-github" },
    { name: "Firebase", iconClassName: "fas fa-fire" },
    { name: "MySQL", iconClassName: "fas fa-database" },
    { name: "VS Code", iconClassName: "fas fa-code" },
    { name: "Figma", iconClassName: "fab fa-figma" },
    { name: "XAMPP", iconClassName: "fas fa-server" },
    { name: "Linux", iconClassName: "fab fa-linux" },
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