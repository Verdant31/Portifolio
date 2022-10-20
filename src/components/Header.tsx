import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export const Header: React.FC = () => {
  return (
    <header className="items-center sticky top-0 flex justify-between max-w-7xl p-5 px-8 mx-auto z-20">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center pb-1"
      >
        <SocialIcon
          url="http://www.github.com/verdant31"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="http://www.linkedin.com/in/jo%C3%A3o-pedro-soares-piovesan-724235191/"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="http://www.instagram.com/joaopiovesan3110/"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <p className="hidden md:flex absolute left-[50%] -translate-x-1/2  text-gray-400 italic">
        Never Stop Learning.
      </p>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon
          url="mailto:verdantxd@gmail.com"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Entre em contato
        </p>
      </motion.div>
    </header>
  );
};
