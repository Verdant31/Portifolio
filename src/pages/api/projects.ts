import { NextApiRequest, NextApiResponse } from "next";
import { Project } from "../../@types/types";
import { api } from "../../services/api";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const projects: Project[] = [
    {
      title: "Coffee Delivery - Ignite",
      description:
        "Projeto também do programa Ignite da Rocketseat. O CoffeeDelivery foi criado para ser um e-commerce de café, podendo selecionar produtos para adicionar ao carrinho e realizar checkout. O Projeto foi feito em React e inicializado com a ferramenta ViteJS, além do StyledComponents para estilização.",
      descriptionEn:
        "Project also from Rocketseat's Ignite program. CoffeeDelivery was developed to be a coffee e-commerce, allowing users to buy products  by adding them to a cart and checkout. The Project was made in React and initialized with the ViteJS tool, in addition to StyledComponents for styling.",
      mockup: `${api.defaults.baseURL}/coffe-mockup.png`,
      link: "https://github.com/Verdant31/CoffeeDelivery-Ignite",
    },
    {
      title: "TODO List - Ignite",
      description:
        "Este projeto foi um desafio da trilha de ReactJS do programa de aceleração para devs, o Ignite da Rocketseat. O Projeto foi feito em React e inicializado com a ferramenta ViteJS, além do CSS modules para estilização.",
      descriptionEn:
        "This project was a challenge from the ReactJS track of the accelerator program for devs, Rocketseat's Ignite. The Project was made in React and initialized with the ViteJS tool, in addition to CSS modules for styling.",
      mockup: `${api.defaults.baseURL}/todo-mockup.png`,
      link: "https://github.com/Verdant31/TodoList-Ignite",
    },
    {
      title: "Advanced Components - Udemy",
      description: `Este projeto foi desenvolvido no curso "The Complete Guide to Advanced React Component Patterns" que fiz na Udemy. O projeto mostra como criar componentes React mais complexos e reutilizáveis, usando conceitos como "Render Props" e "Higher Order Components".`,
      descriptionEn: `This project was developed in the course "The Complete Guide to Advanced React Component Patterns" that I took on Udemy. The project shows how to create more complex and reusable React components, using concepts like "Render Props" and "Higher Order Components".`,
      mockup: `${api.defaults.baseURL}/advanced-mockup.png`,
      link: "https://github.com/Verdant31/Advanced-Component-Patterns",
    },
    {
      title: "League of Legends - Clone",
      description:
        "Projeto desenvolvido com o intuito de praticar CSS e se acostumar com a ferramenta Tailwind CSS. A ideia é clonar o client inteiro do LOL, porém por enquanto foi feita apenas a tela de Login e de Loading.",
      descriptionEn:
        "Project developed in order to practice CSS and get used to the Tailwind CSS tool. The idea is to clone the entire LOL client, but for now only the Login and Loading screen has been made.",
      mockup: `${api.defaults.baseURL}/lol-mockup.png`,
      link: "https://github.com/Verdant31/League-of-Legends-Clone",
    },
    {
      title: "SaveIt",
      description:
        "SaveIt é uma aplicação Mobile feita com React Native, foi desenvolvido para ajudar as pessoas a se organizarem melhor com as suas compras do Mês. O aplicativo conta com uma tela de Modo Turbo para adicionar compras mais rapidamente.",
      descriptionEn:
        "SaveIt is a Mobile application made with React Native, it was developed to help people get better organized with their purchases of the Month. The app has a Turbo Mode screen to add purchases more quickly.",
      mockup: `${api.defaults.baseURL}/saveit-mockup.png`,
      link: "https://github.com/Verdant31/SaveIt-Backend",
    },
  ];
  res.status(200).json(projects);
}
