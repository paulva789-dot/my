export type ExperienceItem = {
  year: string;
  title: string;
  subtitle: string;
  description: string;
};

const experience: ExperienceItem[] = [
  {
    year: "2022 - Present",
    title: "Bachelor of Computer Engineering",
    subtitle: "University",
    description:
      "Pursuing a Bachelor's degree in Computer Engineering with emphasis on software engineering, networking, databases and system development.",
  },
  {
    year: "2023",
    title: "CSSH Website",
    subtitle: "Frontend Developer",
    description:
      "Designed and developed a modern responsive website using HTML, CSS and JavaScript.",
  },
  {
    year: "2024",
    title: "Mobile Banking App",
    subtitle: "Flutter Developer",
    description:
      "Built a secure banking application using Flutter and Firebase authentication.",
  },
  {
    year: "2025",
    title: "React & TypeScript Portfolio",
    subtitle: "Frontend Developer",
    description:
      "Developing a professional portfolio using React, TypeScript and reusable components.",
  },
];

export default experience;