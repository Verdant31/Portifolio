import { NextApiRequest, NextApiResponse } from "next";
import { Project } from "../../@types/types";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const projects: Project[] = [
    {
      title: "Coffee Delivery - Ignite",
      description:
        "Projeto também do programa Ignite da Rocketseat. O CoffeeDelivery foi criado para ser um e-commerce de café, podendo selecionar produtos para adicionar ao carrinho e realizar checkout. O Projeto foi feito em React e inicializado com a ferramenta ViteJS, além do StyledComponents para estilização.",
      descriptionEn:
        "Project also from Rocketseat's Ignite program. CoffeeDelivery was developed to be a coffee e-commerce, allowing users to buy products  by adding them to a cart and checkout. The Project was made in React and initialized with the ViteJS tool, in addition to StyledComponents for styling.",
      mockup: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/coffe-mockup.png`,
    },
    {
      title: "TODO List - Ignite",
      description:
        "Este projeto foi um desafio da trilha de ReactJS do programa de aceleração para devs, o Ignite da Rocketseat. O Projeto foi feito em React e inicializado com a ferramenta ViteJS, além do CSS modules para estilização.",
      descriptionEn:
        "This project was a challenge from the ReactJS track of the accelerator program for devs, Rocketseat's Ignite. The Project was made in React and initialized with the ViteJS tool, in addition to CSS modules for styling.",
      mockup: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/todo-mockup.pg`,
    },
  ];
  res.status(200).json(projects);
}
