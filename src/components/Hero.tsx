import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

export const Hero: React.FC = () => {
  const [text] = useTypewriter({
    words: [
      'Olá, eu sou o João',
      'Eu sou um desenvolvedor React',
      'Sou um fã de joguinhos online',
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      <div className="relative flex ">
        <div className="animate-pulse">
          <img
            className="w-[500px] h-[430px] opacity-40"
            src="triangles.png"
            alt="Imagem de um triangulo"
          />
        </div>
        <h1 className="text-gray-50 w-full absolute top-[50%] left-[50%] -translate-y-1/2	-translate-x-1/2 text-4xl ">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
    </div>
  )
}
