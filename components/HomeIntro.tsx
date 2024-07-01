import MagicButton from "./ui/MagicButton"
import { TextGenerateEffect } from "./ui/TextGenerateEffect"

const HomeIntro = () => {
  return (
    <section className=''>
        <div className=''>
            <div>
                <div>
                    <TextGenerateEffect
                        className='text-start text-[20px] md:text-2xl lg:text-4xl'
                        words="Hi! I'm Kadi Moudarrif. /n A web designer and developer based in Barcelona."
                    />
                </div>
                <div>
                    <TextGenerateEffect 
                            className='text-start text-[20px] md:text-2xl lg:text-4xl'
                            words="Hi! I'm Kadi Moudarrif. /n A web designer and developer based in Barcelona."
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