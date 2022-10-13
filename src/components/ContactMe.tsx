import { motion } from 'framer-motion'
import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

export const ContactMe: React.FC = () => {
  return (
    <motion.div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <h3 className="tracking-[12px] absolute top-32 uppercase trackng-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center px-4">
          I have got just what you need.{' '}
          <span className="decoration-green-500/50 underline">Lets talk.</span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-green-500 h-7 w-7 animate-pulse" />
            <p>+123456789</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-green-500 h-7 w-7 animate-pulse" />
            <p>verdantxd@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-green-500 h-7 w-7 animate-pulse" />
            <p>123 Developer Lane</p>
          </div>
        </div>
        <form className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Name"
              className="contactInput"
            ></input>
            <input
              type="text"
              placeholder="Email"
              className="contactInput"
            ></input>
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="contactInput"
          ></input>
          <textarea className="contactInput" placeholder="Message"></textarea>
          <button
            type="submit"
            className="bg-green-500 py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </motion.div>
  )
}
