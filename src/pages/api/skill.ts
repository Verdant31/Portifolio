import { NextApiRequest, NextApiResponse } from "next";
import { Skill } from "../../@types/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const skills: Skill[] = [
    {
      logo: "http://localhost:3000/css.svg",
      name: "CSS3",
      proficiency: 90,
    },
    {
      logo: "http://localhost:3000/firebase.svg",
      name: "Firebase",
      proficiency: 80,
    },
    {
      logo: "http://localhost:3000/google.svg",
      name: "GCP",
      proficiency: 60,
    },
    {
      logo: "http://localhost:3000/html.svg",
      name: "HTML5",
      proficiency: 100,
    },
    {
      logo: "http://localhost:3000/heroku.svg",
      name: "Heroku",
      proficiency: 50,
    },
    {
      logo: "http://localhost:3000/javascript.svg",
      name: "Javascript",
      proficiency: 80,
    },
    {
      logo: "http://localhost:3000/mongo.svg",
      name: "MongoDB",
      proficiency: 70,
    },
    {
      logo: "http://localhost:3000/nextjs.svg",
      name: "NextJS",
      proficiency: 80,
    },
    {
      logo: "http://localhost:3000/nodejs.svg",
      name: "NodeJS",
      proficiency: 80,
    },
    {
      logo: "http://localhost:3000/postgre.svg",
      name: "PostgreSQL",
      proficiency: 80,
    },
    {
      logo: "http://localhost:3000/prisma.svg",
      name: "Prisma",
      proficiency: 90,
    },
    {
      logo: "http://localhost:3000/react.svg",
      name: "React",
      proficiency: 100,
    },
    {
      logo: "http://localhost:3000/styled.svg",
      name: "Styled Components",
      proficiency: 80,
    },
    {
      logo: "http://localhost:3000/tailwind.svg",
      name: "Tailwind CSS",
      proficiency: 90,
    },
    {
      logo: "http://localhost:3000/typescript.svg",
      name: "Typescript",
      proficiency: 80,
    },
    {
      logo: "http://localhost:3000/vite.svg",
      name: "ViteJS",
      proficiency: 100,
    },
  ];
  res.status(200).json(skills);
}
