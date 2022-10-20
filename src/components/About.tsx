import React from "react";
import { motion } from "framer-motion";
import { About as TAbout } from "../@types/types";
import { useLanguage } from "../contexts/LanguageContext";

interface AboutProps {
  about: TAbout;
}

export const About = ({ about }: AboutProps) => {
  const { currentLanguage } = useLanguage();

  return (
    <motion.div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="tracking-[12px] absolute top-24 uppercase trackng-[20px] text-gray-500 text-2xl">
        {currentLanguage === "pt" ? "SOBRE MIM" : "ABOUT ME"}
      </h1>
      <div />
      <motion.img
        className="-mb-16 sm:-mb-20 md:mb-0 flex-shrink-0 w-42 h-40 sm:w-56 sm:h-56 object-cover md:w-80 md:h-80 xl:w-[500px] xl:h-[500px] xl:mr-8"
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{ x: 0, opacity: 1 }}
        src={about.profilePic}
        viewport={{ once: true }}
      />
      <div className="space-y-5 px-0 md:px-10 ">
        <h4 className="text-2xl md:text-4xl font-semibold">
          {currentLanguage === "pt" ? "Aqui vai um " : "Here is a "}
          {currentLanguage === "pt" ? (
            <>
              <span className="underline decoration-[#02cd1a]">breve</span>{" "}
              resumo
            </>
          ) : (
            <>
              <span className="underline decoration-[#02cd1a]">little</span>{" "}
              background
            </>
          )}
        </h4>
        {currentLanguage === "pt" ? (
          <p className="text-base">{about.about}</p>
        ) : (
          <p className="text-base">{about.aboutEn}</p>
        )}
      </div>
    </motion.div>
  );
};
