import React from 'react'
import { motion } from 'framer-motion'
import { About as TAbout } from '../@types/types'

interface AboutProps {
  about: TAbout
}

export const About = ({ about }: AboutProps) => {
  return (
    <motion.div
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className="tracking-[12px] absolute top-32 uppercase trackng-[20px] text-gray-500 text-2xl">
        Sobre mim
      </h1>
      <motion.img
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 object-cover md:w-96 md:h-96 xl:w-[600px] xl:h-[600px] "
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
      <div className="space-y-10 px-0 md:px-10 ">
        <h4 className="text-4xl font-semibold">
          Aqui vai um{' '}
          <span className="underline decoration-[#02cd1a]">breve</span> resumo
        </h4>
        <p className="text-base">{about.about}</p>
      </div>
    </motion.div>
  )
}
