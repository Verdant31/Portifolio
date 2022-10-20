import { NextApiRequest, NextApiResponse } from "next";
import { Skill } from "../../@types/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const skills: Skill[] = [
    {
      logo: `${process.env.NEXT_PUBLIC_VERCEL_URL}/css.svg`,
      name: "CSS3",
      proficiency: 90,
    },
    {
      logo: `${process.env.NEXT_PUBLIC_VERCEL_URL}/firebase.svg`,
      name: "Firebase",
      proficiency: 80,
    },
    {
      logo: `${process.env.NEXT_PUBLIC_VERCEL_URL}/google.svg`,
      name: "GCP",
      proficiency: 60,
    },
    {
      logo: `${process.env.NEXT_PUBLIC_VERCEL_URL}/html.svg`,
      name: "HTML5",
      proficiency: 100,
    },
    {
      logo: `${process.env.NEXT_PUBLIC_VERCEL_URL}/heroku.svg`,
      name: "Heroku",
      proficiency: 50,
    },
    {
      logo: `${process.env.NEXT_PUBLIC_VERCEL_URL}/javascript.svg`,
      name: "Javascript",
      proficiency: 80,
    },
    {
      logo: `${process.env.NEXT_PUBLIC_VERCEL_URL}/mongo.svg`,
      name: "MongoDB",
      proficiency: 70,
    },
    {
      logo: `${process.env.NEXT_PUBLIC_VERCEL_URL}/nextjs.svg`,
      name: "NextJS",
      proficiency: 80,
    },
    {
      logo: `${process.env.NEXT_PUBLIC_VERCEL_URL}/nodejs.svg`,
      name: "NodeJS",
      proficiency: 80,
    },
    {
      logo: `${process.env.NEXT_PUBLIC_VERCEL_URL}/postgre.svg`,
      name: "PostgreSQL",
      proficiency: 80,
    },
    {
      logo: `${process.env.NEXT_PUBLIC_VERCEL_URL}/prisma.svg`,
      name: "Prisma",
      proficiency: 90,
    },
    {
      logo: `${process.env.NEXT_PUBLIC_VERCEL_URL}/react.svg`,
      name: "React",
      proficiency: 100,
    },
    {
      logo: `${process.env.NEXT_PUBLIC_VERCEL_URL}/styled.svg`,
      name: "Styled Components",
      proficiency: 80,
    },
    {
      logo: `${process.env.NEXT_PUBLIC_VERCEL_URL}/tailwind.svg`,
      name: "Tailwind CSS",
      proficiency: 90,
    },
    {
      logo: `${process.env.NEXT_PUBLIC_VERCEL_URL}/typescript.svg`,
      name: "Typescript",
      proficiency: 80,
    },
    {
      logo: `${process.env.NEXT_PUBLIC_VERCEL_URL}/vite.svg`,
      name: "ViteJS",
      proficiency: 100,
    },
  ];
  res.status(200).json(skills);
}
