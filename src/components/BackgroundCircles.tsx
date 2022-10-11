import React from 'react'

export const BackgroundCircles: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="absolute border border-gray-700 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute rounded-full border border-gray-700 h-[300px] w-[300px] mt-52" />
      <div className="absolute rounded-full border border-gray-700 h-[500px] w-[500px] mt-52" />
      <div className="absolute rounded-full border border-[#F7AB0A] opacity-20 h-[650px] w-[650px] mt-52 animate-pulse" />
      <div className="absolute rounded-full border border-gray-700  opacity-20 h-[800px] w-[800px] mt-52" />
    </div>
  )
}
