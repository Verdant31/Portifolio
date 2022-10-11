import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { BackgroundCircles } from './BackgroundCircles'

export const Hero: React.FC = () => {
  const [text, count] = useTypewriter({
    words: [
      'Olá, eu sou o João',
      'Eu sou um desenvolvedor React',
      'Sou um baita fã de joguinhos online',
    ],
    loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  )
}
