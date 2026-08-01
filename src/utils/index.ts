export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
}

export interface ExperienceItem {
  year: string;
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}