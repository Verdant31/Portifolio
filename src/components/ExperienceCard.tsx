import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../@types/types";
import { useLanguage } from "../contexts/LanguageContext";

interface ExperienceCardProps {
  experience: Experience;
}
export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
}) => {
  const { currentLanguage } = useLanguage();

  return (
    <article className="flex flex-col rounded-lg text-left items-center space-y-7 flex-shrink-0 w-[340px] md:w-[600px]  snap-center bg-[#292929] cursor-pointer  px-10 pt-6 opacity-40 hover:opacity-100 transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
        src={experience.logo}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl md:text-4xl font-light">{experience.title}</h4>
        <p className="text-2xl font-bold md:text-2xl mt-1">
          {experience.company}
        </p>
        <div className="flex space-x-2 " />
        <p className="uppercase py-1 text-gray-300">
          Started work {experience.startedAt} - Ended {experience.finishedAt}
        </p>
        {currentLanguage === "pt" ? (
          <ul className="list-disc space-y-2 ml-5 mt-2 md:mt-8 text-lg pb-8">
            {experience.activities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        ) : (
          <ul className="list-disc space-y-2 ml-5 mt-2 md:mt-8 text-lg pb-8">
            {experience.activitiesEn.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
};
