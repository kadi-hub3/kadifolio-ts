import MagicButton from "./ui/MagicButton"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"

const HomeIntro = () => {
  return (
    <section className='w-screen h-70vh sm:h-90vh bg-gray-200 p-20'>
        <div className=''>
            <div className='flex flex-row md:flex-col sm:flex-col items-center justify-center gap-6'>
                <div>
                    <TextGenerateEffect
                        className='text-black text-start text-[30px] md:text-2xl lg:text-4xl'
                        words="Helping companies achieve their goals using cutting-edge technology, we redefine standards and translate client specifications into digital solutions using the latest tech stack or precise requirements. No nonsense, just innovation. Join us to be at the forefront of digital transformation."
                        dark={true}
                    />
                </div>
                <div className='flex flex-col gap-x-4'>
                    <TextGenerateEffect 
                            className='text-center text-[20px] md:text-xl lg:text-2xl'
                            words="Combining my passion for design, coding, and interactive experiences, I am uniquely positioned in the web design world to help you achieve your goals and advance your mission. /n"
                            dark={true}
                    />
                    <a href='#about'>
                        <MagicButton 
                            title='About me'
                            icon={'<FaLocationArrow />'}
                            position='right'
                            handleClick={()=>{}} />
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeIntro