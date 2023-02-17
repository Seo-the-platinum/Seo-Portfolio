import React from 'react'
import Image from 'next/image'
import voiceActor from '../../../public/images/voiceActor.png'

const Projects = () => {
  return (
    <div>
        <h3 className='dark:text-slate-300 text-2xl'>Projects</h3>
        <div>
            <h3 className='dark:text-slate-300'>Final Fantasy Vote</h3>
        </div>
        <div className='flex flex-col gap-2 items-center w-72 border-violet-900 rounded border-2'>
            <h3 className='dark:text-slate-300'>Voice Actor Portfolio</h3>
            <Image src={voiceActor} alt='gif of voice actor site'/>
        </div>
    </div>
  )
}

export default Projects