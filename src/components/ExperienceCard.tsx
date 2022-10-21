import { motion } from "framer-motion";
import React from "react";
import { Experience } from "../@types/types";
import { useLanguage } from "../contexts/LanguageContext";
import { useWindowSize } from "../hooks/useWindowSize";

interface ExperienceCardProps {
  experience: Experience;
}
export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
}) => {
  const { currentLanguage } = useLanguage();
  const { height } = useWindowSize();
  return (
    <article className="flex flex-col lg:h-[630px] items-center  rounded-lg text-left  flex-shrink-0 w-[240px] md:w-[600px]  snap-center bg-[#292929] cursor-pointer  pt-6  overflow-hidden ">
      {height > 658 && (
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-24 h-24 mb-4  rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
          src={experience.logo}
          alt=""
        />
      )}
      <div className="px-2 md:px-10">
        <div className="flex flex-col items-center justify-center">
          <h4 className="text-base md:text-4xl text-center font-light">
            {experience.title}
          </h4>
          <p className="text-xl font-bold md:text-2xl mt-1">
            {experience.company}
          </p>
          <div className="flex space-x-2 " />
          <p className="uppercase py-1 text-gray-300 text-center xsm:text-left">
            {experience.startedAt} - {experience.finishedAt}
          </p>
        </div>
        {currentLanguage === "pt" ? (
          <ul className="px-4 list-disc space-y-2 ml-5 mt-2 md:mt-8 text-lg pb-8">
            {experience.activities.map((activity) => (
              <li className="text-base" key={activity}>
                {activity}
              </li>
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
