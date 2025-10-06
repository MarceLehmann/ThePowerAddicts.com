
export interface NavLink {
  name: string;
  path: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface TeamMember {
  name: string;
  title: string;
  image: string;
  credentials: string[];
  bio: string;
  links: {
    mvp: string;
    linkedin: string;
    github: string;
  };
}

export interface FaqItem {
  question: string;
  answer: string;
}