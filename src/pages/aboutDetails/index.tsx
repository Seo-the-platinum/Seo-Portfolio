import React from 'react'
import AboutCard from '../../components/about/AboutCard'
import { cards } from '../../utils/aboutCards'

const AdditionalAbout = () => {
  return (
    <div className='flex flex-col items-center lg:flex-row lg:justify-evenly mb-12 md:mt-12 lg:mb-0 lg:mt-0 gap-10 flex-1 max-w-7xl lg:self-center lg:gap-20'>
      {
        cards.map(card=> {
         return <AboutCard key={card.title} keyArt={card.keyArt} title={card.title} details={card.details}/>
        })
      }
    </div>
  )
}

export default AdditionalAbout