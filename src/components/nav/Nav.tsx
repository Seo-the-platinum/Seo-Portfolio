import React, { useEffect, useState } from 'react'
import Switch from 'react-switch'
import { useTheme } from 'next-themes'
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'
import ResizeHook from '../../hooks/ResizeHook'
import Links from './Links'
import Tabs from './Tabs'

const Nav = () => {
    const { theme, systemTheme, setTheme } = useTheme()
    const [ mounted, setMounted ] = useState(false)
    const windowWidth: number = ResizeHook()

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
      <div className='flex justify-between max-w-screen-xl w-full border-b border-[#180133] dark:border-white pb-2'>
        <div className='pl-4'>
          <Switch
            offColor='#180133'
            checkedIcon={<BsFillSunFill color={'black'} size='1.5rem' style={{paddingLeft: '.5rem'}}/>}
            uncheckedIcon={<BsFillMoonFill color={'#0d9489'} size='1.5rem' style={{paddingLeft: '.5rem'}}/>}
            onColor='#0d9489'
            checked={currentTheme === 'dark'} onChange={handleToggle}/>
        </div>
        {
          windowWidth && windowWidth > 768 ? 
          <Links/>
        :
          <Tabs/>
        }
      </div>
    </div>
  )
}

export default Nav