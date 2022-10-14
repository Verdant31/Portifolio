import React from 'react'
import { motion } from 'framer-motion'
import { ExperienceCard } from './ExperienceCard'
import { Experience as TExperience } from '../@types/types'

interface ExperienceProps {
  experiences: TExperience[]
}

export const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <motion.div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl 
      px-10 justify-evenly mx-auto items-center scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-green-500/80"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="tracking-[12px] absolute top-32 uppercase trackng-[20px] text-gray-500 text-2xl">
        Experiência
      </h1>
      <div className="w-full flex space-x-5 overflow-x-scroll pt-10 pb-10 snap-x snap-mandatory justify-start">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.div>
  )
}
