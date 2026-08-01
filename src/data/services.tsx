export type ServiceItem = {
  title: string;
  description: string;
  icon: string;
};

const services: ServiceItem[] = [
  {
    title: "Web Development",
    description: "Modern responsive websites using React and TypeScript.",
    icon: "fas fa-code",
  },
  {
    title: "Mobile Apps",
    description: "Cross-platform mobile applications using Flutter.",
    icon: "fas fa-mobile-alt",
  },
  {
    title: "UI/UX Design",
    description: "Clean and modern interface designs.",
    icon: "fas fa-paint-brush",
  },
  {
    title: "Backend Development",
    description: "Java, Spring Boot, Firebase and REST APIs.",
    icon: "fas fa-database",
  },
];

export default services;