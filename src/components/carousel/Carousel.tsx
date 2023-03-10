import React, { useEffect, useState } from 'react'
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type Slides = {
  children: React.ReactNode[],
}
const Carousel = ({ children: slides }: Slides) => {
    const [ curr, setCurr ] = useState<number>(0)
    const prev = () =>
      setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
      setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    useEffect(()=> {
        const slideInterval = setInterval(next, 3000)
        return () => clearInterval(slideInterval)
    },[])

  return (
    <div className='overflow-hidden relative mb-14 md:mt-4 group p-0.5 sm:hover:scale-110 transition-hover duration-500 rounded max-w-2xl' id='projects'>
      <div className='hidden sm:block
        absolute group-hover:animate-spin-slow group-hover:dark:bg-gradient-to-t dark:from-violet-900 dark:to-emerald-400
        group-hover:opacity-100
        group-hover:duration-500
        group-hover:brightness-125 group-hover:blur
        group-hover:bg-gradient-to-t from-amber-300 to-sky-600
        saturate-150
        transition-all duration-1000' style={{height: '200%', width: '50%',left:'25%', top:'-50%'}}/>
      <div
          className="flex transition-transform ease-out duration-1000"
          style={{ transform: `translateX(-${curr * 100}%)`}}
      >
        {slides}
      </div>
        <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-yellow-200 hover:bg-yellow-300 dark:bg-slate-300 text-gray-800 dark:hover:bg-slate-200 pointer-events-auto"
          >
            <BsChevronLeft size={40} color='#150726'/>
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-yellow-200 hover:bg-yellow-300 dark:bg-slate-300 text-gray-800 dark:hover:bg-slate-200 pointer-events-auto"
          >
            <BsChevronRight size={40} color='#150726'/>
          </button>
          <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
              {slides.map((_, i) => (
              <div
                key={i}
                className={`
                transition-all w-3 h-3 bg-yellow-200 dark:bg-slate-300 rounded-full
                ${curr === i ? "p-2" : "bg-opacity-50"}
              `}
              />
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

export default Carousel