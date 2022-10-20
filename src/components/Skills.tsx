import { motion } from "framer-motion";
import React from "react";
import { Skill as TSkill } from "../@types/types";
import { useLanguage } from "../contexts/LanguageContext";
import { Skill } from "./Skill";

interface SkillsProps {
  skills: TSkill[];
}

export const Skills: React.FC<SkillsProps> = ({ skills }) => {
  const { currentLanguage } = useLanguage();

  return (
    <motion.div
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="tracking-[12px] absolute top-24 uppercase trackng-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="xl:pt-2 px-4 absolute top-36 uppercase tracking-[4px] text-gray-500 text-sm">
        {currentLanguage === "pt"
          ? "Passe o mouse por cima de uma skill para ver a proficiência"
          : "Hover over a skill for currency profieciency"}
      </h3>
      <div className="grid grid-cols-4 gap-5 md:mt-24">
        {skills.map((skill) => (
          <Skill key={skill.name} skill={skill} />
        ))}
      </div>
    </motion.div>
  );
};
