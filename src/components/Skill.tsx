import { motion } from "framer-motion";
import React from "react";
import { Skill as TSkill } from "../@types/types";

interface SkillProps {
  skill: TSkill;
}

export const Skill: React.FC<SkillProps> = ({ skill }: SkillProps) => {
  return (
    <div className="group relative flex cursor-pointer ">
      <motion.img
        className="rounded-md  object-contain w-12 h-12 xsm:w-16 xsm:h-16 xl:w-32 xl:h-32 filter group-hover:grayscale md:w-28 md:h-28 transition duration-300 ease-in-out"
        src={skill.logo}
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-12 h-12 xsm:w-16 xsm:h-16 xl:w-32 xl:h-32 rounded-md z-0">
        <div className="flex items-center justify-center h-full">
          <p className=" md:text-xl font-bold text-black opacity-100">
            {skill.proficiency}%
          </p>
        </div>
      </div>
    </div>
  );
};
