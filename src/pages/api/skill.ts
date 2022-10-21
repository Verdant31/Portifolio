import { NextApiRequest, NextApiResponse } from "next";
import { Skill } from "../../@types/types";
import { api } from "../../services/api";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const skills: Skill[] = [
    {
      logo: `${api.defaults.baseURL}/css.svg`,
      name: "CSS3",
      proficiency: 90,
    },
    {
      logo: `${api.defaults.baseURL}/firebase.svg`,
      name: "Firebase",
      proficiency: 80,
    },
    {
      logo: `${api.defaults.baseURL}/google.svg`,
      name: "GCP",
      proficiency: 60,
    },
    {
      logo: `${api.defaults.baseURL}/html.svg`,
      name: "HTML5",
      proficiency: 100,
    },
    {
      logo: `${api.defaults.baseURL}/heroku.svg`,
      name: "Heroku",
      proficiency: 50,
    },
    {
      logo: `${api.defaults.baseURL}/javascript.svg`,
      name: "Javascript",
      proficiency: 80,
    },
    {
      logo: `${api.defaults.baseURL}/mongo.svg`,
      name: "MongoDB",
      proficiency: 70,
    },
    {
      logo: `${api.defaults.baseURL}/nextjs.svg`,
      name: "NextJS",
      proficiency: 80,
    },
    {
      logo: `${api.defaults.baseURL}/nodejs.svg`,
      name: "NodeJS",
      proficiency: 80,
    },
    {
      logo: `${api.defaults.baseURL}/postgre.svg`,
      name: "PostgreSQL",
      proficiency: 80,
    },
    {
      logo: `${api.defaults.baseURL}/prisma.svg`,
      name: "Prisma",
      proficiency: 90,
    },
    {
      logo: `${api.defaults.baseURL}/react.svg`,
      name: "React",
      proficiency: 100,
    },
    {
      logo: `${api.defaults.baseURL}/styled.svg`,
      name: "Styled Components",
      proficiency: 80,
    },
    {
      logo: `${api.defaults.baseURL}/tailwind.svg`,
      name: "Tailwind CSS",
      proficiency: 90,
    },
    {
      logo: `${api.defaults.baseURL}/typescript.svg`,
      name: "Typescript",
      proficiency: 80,
    },
    {
      logo: `${api.defaults.baseURL}/vite.svg`,
      name: "ViteJS",
      proficiency: 100,
    },
  ];
  res.status(200).json(skills);
}
