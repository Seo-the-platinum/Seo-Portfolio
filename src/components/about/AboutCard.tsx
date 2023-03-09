import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

type CardProps = {
    details: string;
    keyArt: string;
    title: string;
}
const AboutCard = ({ title, keyArt, details}: CardProps) => {
    const [ showDetails, setShowDetails ] = useState(false)
    const handleDropDown = ()=> {
        setShowDetails(prev=> !prev)
    }
  return (
    <div className='
        animate-floatSlow
        brightness-125
        ease-in-out
        flex flex-col 
        items-center
        justify-between mt-4
        relative
        h-64 w-60
        sm:h-80
        lg:w-72 lg:h-96 lg:mb-20
        rounded-lg bg-[length:100%_100%]'
        style={{backgroundImage: `url(${keyArt})`}}
        >
        <div className='flex flex-col min-w-full overflow-hidden rounded-lg relative min-h-full'>
            <h1 className='text-4xl text-slate-300 self-center'>{title}</h1>
            <div className={` ${showDetails ? 'rounded-lg bottom-0 lg:-bottom-12 bg-black/80' : '-bottom-full mb-8 bg-black/40'}
                flex flex-col min-w-full 
                min-h-full
                
                absolute
                transition-all duration-1000 ease-in-out`}>
                <div className='flex'>
                    <button onClick={handleDropDown}>
                        { 
                            showDetails ?
                            <MdKeyboardArrowDown className='fill-emerald-500 brightness-110' size='2em'/> :
                            <MdKeyboardArrowUp className='fill-emerald-500 brightness-110' size='2em'/>
                        }
                    </button>
                    <p className='text-emerald-500'>{showDetails ? 'Close' : 'Details'}</p>
                </div>
                <div className='flex px-2'>
                    <p className='text-sm leading-relaxed sm:text-base lg:text-lg text-slate-300'>{details}</p>
                </div>
            </div>
        </div>
        <div className='hidden lg:block animate-shadow bg-sky-900 dark:bg-violet-900 blur-xl rounded-lg opacity-30 w-40 h-16 absolute -bottom-1/3'/>
    </div>
  )
}

export default AboutCard