export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  color: string;
  github?: string;
  live?: string;
};

export type Skill = {
  title: string;
  skills: string[];
  icon: string;
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  tech: string[];
};

export type Award = {
  title: string;
  organization: string;
  date: string;
  description: string;
};

export type Testimonial = {
  content: string;
  image: string;
  name: string;
  role: string;
};

export type Blog = {
  title: string;
  category: string;
  readTime: string;
  preview: string;
  date: string;
};

export type Timeline = {
  year: string;
  title: string;
  company: string;
  description: string;
};