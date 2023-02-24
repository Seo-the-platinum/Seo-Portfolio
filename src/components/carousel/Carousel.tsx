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
    <div className='overflow-hidden relative mb-14 mt-8 dark:bg-[#150726] group p-0.5 hover:scale-110 transition-hover duration-500 rounded max-w-xl' id='projects'>
      <div className='absolute group-hover:animate-spin-slow dark:group-hover:bg-gradient-to-tr from-purple-700 to-teal-600 opacity-60
        group-hover:opacity-100
        group-hover:duration-500
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
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white pointer-events-auto"
          >
            <BsChevronLeft size={40} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white pointer-events-auto"
          >
            <BsChevronRight size={40} />
          </button>
          <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
              {slides.map((_, i) => (
              <div
                key={i}
                className={`
                transition-all w-3 h-3 bg-white rounded-full
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