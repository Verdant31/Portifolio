import React from 'react'
import { motion } from 'framer-motion'

export const Projects: React.FC = () => {
  const projects = [1, 2, 3, 4, 5]
  return (
    <motion.div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full 
      justify-evenly mx-auto items-center z-0 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="tracking-[12px] absolute top-32 uppercase trackng-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
         scrollbar-track-gray-400/20 scrollbar-thin scrollbar-thumb-green-500/80"
      >
        {projects.map((project, index) => {
          return (
            <div
              key={project}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
            >
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src="profilePic.png"
                alt=""
              />
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span className="underline decoration-green-500/50">
                    Case Study {index + 1} of {projects.length}:
                  </span>{' '}
                  UPS clone
                </h4>
                <p className="text-lg text-center md:text-left">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Quisquam cum dicta eaque? Inventore harum veniam incidunt iure
                  ducimus quis molestiae deserunt, iusto obcaecati fugit culpa
                  quisquam debitis possimus quibusdam voluptatem.
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-green-500/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  )
}
