import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='pb-20 pt-36 h-screen w-screen'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='gray'/>
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
        <Spotlight className='top-20 left-80 h-[80vh] w-[50vw]' fill='blue'/>
      </div>
      <div className="h-screen w-full bg-gray-400  flex items-center justify-center absolute top-0 left-0">
      {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        </p>
      </div>
      <div className='grid grid-cols-2 relative z-10 my-20'>
        <div>img</div>

        <div className='flex flex-col items-center justify-center'>
          <TextGenerateEffect 
            className='text-start text-[20px] md:text-2xl lg:text-4xl'
            words="Hi! I'm Kadi Moudarrif. /n A web designer and developer based in Barcelona."
          />
      
          <a href='#work'>
            <MagicButton 
              title='Show My work'
              icon={<FaLocationArrow />}
              position='right'
              handleClick={()=>{}}
            />
          </a>
        </div>
      </div>
   
    </div>
  )
}

export default Hero