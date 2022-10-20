import { motion } from "framer-motion";
import React from "react";
import { Skill as TSkill } from "../@types/types";

interface SkillProps {
  directionLeft?: boolean;
  skill: TSkill;
}

export const Skill: React.FC<SkillProps> = ({
  directionLeft = false,
  skill,
}: SkillProps) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          x: directionLeft ? -100 : 100,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="rounded-md object-contain w-16 h-16 xl:w-32 xl:h-32 filter group-hover:grayscale md:w-28 md:h-28 transition duration-300 ease-in-out"
        src={skill.logo}
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-md z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill.proficiency}%
          </p>
        </div>
      </div>
    </div>
  );
};
