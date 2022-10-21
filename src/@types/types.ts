export type Skill = {
  name: string;
  proficiency: number;
  logo: string;
};

export type SkillsRes = {
  attributes: {
    name: string;
    proficiency: number;
    image: { data: { attributes: { url: string } } };
  };
  id: number;
};

export type Experience = {
  company: string;
  startedAt: string;
  title: string;
  logo: string;
  finishedAt: string;
  activities: string[];
  activitiesEn: string[];
};

export type ExperienceRes = {
  id: number;
  attributes: Experience;
};

export type Project = {
  title: string;
  mockup: string;
  description: string;
  descriptionEn: string;
  link: string;
};

export type ProjectRes = {
  attributes: Project;
  id: number;
};

export type About = {
  about: string;
  aboutEn: string;
  profilePic: string;
};
export type Data = {
  about: About;
  projects: Project[];
  skills: Skill[];
  experiences: Experience[];
};
