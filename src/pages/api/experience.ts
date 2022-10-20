import { NextApiRequest, NextApiResponse } from "next";
import { Experience } from "../../@types/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const projects: Experience[] = [
    {
      title: "Desenvolvedor Full Cycle (Estágio)",
      company: "Alest Consultoria",
      startedAt: "01/11/2021",
      finishedAt: "01/05/2022",
      activities: [
        "Suporte para correção de bugs e desenvolvimento de novos recursos tanto na área de backend quanto na área de frontend.",
        "Uso diário de serviços como Firebase e GCP (Google Cloud Platform) em projetos.",
        "Liderança de squads.",
      ],
      activitiesEn: [
        "Support for bug fixing and development of new features in both the backend and frontend area.",
        "Daily use of services such as Firebase and GCP (Google Cloud Platform) in projects.",
        "Squad leadership.",
      ],
      logo: "http://localhost:3000/alest.png",
    },
    {
      title: "Desenvolvedor Full Stack",
      company: "Universidade Positivo",
      startedAt: "01/05/2022",
      finishedAt: "",
      activities: [
        "Atuação no desenvolvimento de projetos internos.",
        "Criação de plataformas web para automatizar processos burocráticos da instituição.",
        "Responsável pelo desenvolvimento tanto do Backend quanto do Frontend em todos os projetos, utilizando tecnologias como React, NodeJS, Heroku e PostgreSQL.",
      ],
      activitiesEn: [
        "Acting in the development of internal projects.",
        "Creation of web platforms to automate bureaucratic processes of the institution.",
        "Responsible for the development of both Backend and Frontend in all projects, using technologies such as React, NodeJS, Heroku and PostgreSQL.",
      ],
      logo: "http://localhost:3000/up.png",
    },
  ];
  res.status(200).json(projects);
}
