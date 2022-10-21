import React from "react";
import { motion } from "framer-motion";
import { ExperienceCard } from "./ExperienceCard";
import { Experience as TExperience } from "../@types/types";
import { useLanguage } from "../contexts/LanguageContext";

interface ExperienceProps {
  experiences: TExperience[];
}

export const Experience = ({ experiences }: ExperienceProps) => {
  const { currentLanguage } = useLanguage();
  return (
    <motion.div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl 
      px-10  justify-evenly mx-auto items-center "
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="tracking-[12px] absolute top-[74px]  uppercase trackng-[20px] text-gray-500 text-2xl">
        {currentLanguage === "pt" ? "EXPERIÊNCIA" : "EXPERIENCE"}
      </h1>
      <div className="w-full flex scrollbar gap-x-4 scrollbar-track-gray-400/20 scrollbar-thumb-green-500/80 overflow-x-scroll mt-24 xl:pt-24  snap-x snap-mandatory justify-start">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.title} experience={experience} />
        ))}
      </div>
    </motion.div>
  );
};
