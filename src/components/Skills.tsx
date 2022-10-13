import { motion } from 'framer-motion'
import React from 'react'
import { Skill } from './Skill'

export const Skills: React.FC = () => {
  return (
    <motion.div
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="tracking-[12px] absolute top-32 uppercase trackng-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute top-44 uppercase tracking-[4px] text-gray-500 text-sm">
        Hover over a skill for currency profieciency
      </h3>

      <div className="grid grid-cols-4 gap-5 mt-24">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  )
}
