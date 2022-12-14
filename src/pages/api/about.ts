import { NextApiRequest, NextApiResponse } from "next";
import { About } from "../../@types/types";
import { api } from "../../services/api";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const about: About = {
    about:
      "Ola! No momento eu sou um desenvolvedor React em busca de se tornar Fullstack em um futuro não tão distante. Sou apaixonado pelo universo React, por Javascript e por Typescript.  Gosto bastante de ajudar os outros da maneira que consigo, seja com informações ou com uma simples motivação. Como um bom programador, também sou muito fã de joguinhos online.",
    aboutEn:
      "Hi! I'm currently a React developer looking to become Fullstack in the not too distant future. I'm passionate about the React universe, Javascript and Typescript. I really enjoy helping people the way I can, whether with information or with a simple motivation. Not all my projects i end up posting on Linkedin, if you're interested, this is my GitHub: GitHub: github.com/Verdant31 As a good programmer, I'm also a big fan of online games. Say hello!",
    profilePic: `https://${api.defaults.baseURL}/profilePic.png`,
  };
  res.status(200).json(about);
}
