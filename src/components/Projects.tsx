import React from "react";
import { motion } from "framer-motion";
import { Project as TProject } from "../@types/types";
import { useLanguage } from "../contexts/LanguageContext";

interface ProjectsProps {
  projects: TProject[];
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const { currentLanguage } = useLanguage();
  return (
    <motion.div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full 
      justify-evenly mx-auto items-center z-0 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="tracking-[12px] absolute top-20 uppercase trackng-[20px] text-gray-500  text-lg md:text-2xl">
        {currentLanguage === "pt" ? "PROJETOS" : "PROJECTS"}
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
         scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-green-500/80"
      >
        {projects.map((project, index) => {
          return (
            <div
              key={project.title}
              className="pt-32 px-8 w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center h-screen"
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-md lg:mt-14
                  ${
                    project.title !== "SaveIt"
                      ? "w-[380px] h-[190px] sm:w-[500px] sm:h-[320px] md:w-[600px] md:h-[340px] lg:w-[600px] lg:h-[380px]"
                      : "w-[180px] h-[290px]  sm:h-[320px] md:w-[200px] md:h-[340px]"
                  }
                `}
                src={project.mockup}
                alt=""
              />
              <div className="space-y-4 md:space-y-10 px-0 md:px-10 max-w-6xl lg:pt-14">
                <h4 className="text-2xl lg:text-4xl font-semibold text-center">
                  <a
                    target="_blank"
                    href={project.link}
                    className="underline decoration-green-500/50 cursor-pointer"
                    rel="noreferrer"
                  >
                    {project.title}
                  </a>{" "}
                </h4>
                {currentLanguage === "pt" ? (
                  <p className="text-base sm:text-lg text-center lg:text-left">
                    {project.description}
                  </p>
                ) : (
                  <p className="text-base sm:text-lg text-center lg:text-left">
                    {project.descriptionEn}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-green-500/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};
