export type PortfolioSkill = {
  name: string;
  icon: string;
};

export type PortfolioProject = {
  title: string;
  description: string;
  link: string;
};

export type PortfolioExperienceItem = {
  year: string;
  title: string;
  description: string;
};

export type PortfolioService = {
  title: string;
  description: string;
  icon: string;
};

export type PortfolioSocialLink = {
  platform: string;
  url: string;
  icon: string;
};

export const navItems = [
  { label: "Home", href: "#home", active: true },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const skills: PortfolioSkill[] = [
  { name: "HTML5", icon: "fab fa-html5" },
  { name: "CSS3", icon: "fab fa-css3-alt" },
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "React", icon: "fab fa-react" },
  { name: "Python", icon: "fab fa-python" },
  { name: "Flutter", icon: "fas fa-mobile-alt" },
];

export const projects: PortfolioProject[] = [
  {
    title: "Mobile Banking App",
    description: "Flutter + Firebase Banking Application",
    link: "#",
  },
  {
    title: "Hospital Management",
    description: "PHP + MySQL",
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "HTML CSS JavaScript",
    link: "#",
  },
];

export const experiences: PortfolioExperienceItem[] = [
  {
    year: "2024",
    title: "Creative Ideas Buea",
    description: "Internship in Web Development, UI/UX Design and Software Development.",
  },
  {
    year: "2025",
    title: "MUFEPREC",
    description: "Computer Science Tutor helping students understand programming and technology.",
  },
  {
    year: "Present",
    title: "Computer Engineering Student",
    description: "Building software projects and learning Full Stack Development.",
  },
];

export const services: PortfolioService[] = [
  {
    title: "Web Development",
    description: "Modern responsive websites using HTML, CSS and JavaScript.",
    icon: "fas fa-code",
  },
  {
    title: "Mobile Apps",
    description: "Flutter applications for Android and iOS.",
    icon: "fas fa-mobile-alt",
  },
  {
    title: "Database Design",
    description: "MySQL database development and management.",
    icon: "fas fa-database",
  },
  {
    title: "Software Engineering",
    description: "Building complete software systems from idea to deployment.",
    icon: "fas fa-laptop-code",
  },
];

export const socialLinks: PortfolioSocialLink[] = [
  { platform: "GitHub", url: "#", icon: "fab fa-github" },
  { platform: "LinkedIn", url: "#", icon: "fab fa-linkedin" },
  { platform: "Facebook", url: "#", icon: "fab fa-facebook" },
  { platform: "Instagram", url: "#", icon: "fab fa-instagram" },
];

export const portfolioData = {
  name: "Paul Sale Eloundou",
  title: "Computer Engineer",
  email: "pauleloundou@icloud.com",
  cvPath: "assets/CV.pdf",
  profileImage: "profile.jpg",
  tagline:
    "Passionate about building beautiful websites, responsive applications, Flutter mobile apps, backend systems and modern UI/UX experiences.",
  aboutPreview:
    "I am a Computer Engineering student passionate about solving problems using technology. I enjoy designing responsive websites, developing Flutter applications, working with databases, and building complete software systems.",
};