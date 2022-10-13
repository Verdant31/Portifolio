import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

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
          url="https://www.youtube.com/joaocraft3110"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/joaocraft3110"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/joaocraft3110"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>
      <p className="absolute left-[50%] -translate-x-1/2 text-gray-400 italic">
        Never Stop Learning.
      </p>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex items-center text-gray-300 cursor-pointer"
      >
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Entre em contato
        </p>
      </motion.div>
    </header>
  )
}
