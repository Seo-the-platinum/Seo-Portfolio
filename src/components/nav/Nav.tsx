import React, { useEffect, useState } from 'react'
import Switch from 'react-switch'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
const Nav = () => {
    const { theme, systemTheme, setTheme } = useTheme()
    const [ mounted, setMounted ] = useState(false)

    useEffect(()=> {
      setMounted(true)
    },[])
    if (!mounted) return null
    const currentTheme = theme === 'system' ? systemTheme : theme
    const handleToggle=()=> {
      setTheme(currentTheme === 'dark' ? 'light' : 'dark')
    }

  return (
    <div className='flex bg-slate-100 dark:bg-[#05011a] justify-center pt-4'>
      <div className='flex justify-between max-w-screen-xl w-full'>
        <div className='pl-4'>
          <Switch
            offColor='#180133'
            checkedIcon={<BsFillSunFill color={'black'} size='1.5rem' style={{paddingLeft: '.5rem'}}/>}
            uncheckedIcon={<BsFillMoonFill color={'#0d9489'} size='1.5rem' style={{paddingLeft: '.5rem'}}/>}
            onColor='#0d9489'
            checked={currentTheme === 'dark'} onChange={handleToggle}/>
        </div>
        <div className='flex flex-grow-1 gap-4 justify-center pr-4'>
          <Link className='hover:bg-sky-700 dark:hover:bg-indigo-900 dark:text-teal-600 font-bold text-lg rounded' href='/projects'>Projects</Link>
          <Link className='hover:bg-sky-700 dark:hover:bg-indigo-900 dark:text-teal-600 font-bold text-lg rounded' href='/projects'>About</Link>
          <Link className='hover:bg-sky-700 dark:hover:bg-indigo-900 dark:text-teal-600 font-bold text-lg rounded' href='/projects'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav