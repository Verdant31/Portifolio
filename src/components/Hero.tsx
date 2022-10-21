import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { useLanguage } from "../contexts/LanguageContext";

export const Hero: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const [text] = useTypewriter({
    words:
      currentLanguage === "pt"
        ? [
            "Olá, eu sou o João",
            "Eu sou um desenvolvedor React",
            "Sou um fã de joguinhos online",
          ]
        : [
            "Hello, I'm João",
            "I'm a React developer",
            "I'm a big fan of online games",
          ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden ">
      <div className="relative flex ">
        <div className="animate-pulse">
          <img
            className="w-[250px] h-[250px] md:w-[500px] md:h-[430px] opacity-40 mr-4"
            src="triangles.png"
            alt="Imagem de um triangulo"
          />
        </div>
        <h1 className="text-gray-200 w-full sm:w-[160%] absolute top-[50%] left-[50%] -translate-y-1/2	-translate-x-1/2 text-4xl ">
          <span>{text}</span>
          <Cursor cursorColor="#02cd1a" />
        </h1>
      </div>
      <div className="flex flex-col xsm:flex-row md:gap-x-6 mt-12 ">
        <a href="#about" className="linkToSections">
          {currentLanguage === "pt" ? "SOBRE" : "ABOUT"}
        </a>
        <a href="#experience" className="linkToSections">
          {currentLanguage === "pt" ? "EXPERIÊNCIA" : "EXPERIENCE"}
        </a>
        <a href="#skills" className="linkToSections">
          SKILLS
        </a>
        <a href="#projects" className="linkToSections">
          {currentLanguage === "pt" ? "PROJETOS" : "PROJECTS"}
        </a>
      </div>
    </div>
  );
};
