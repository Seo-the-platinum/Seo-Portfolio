import React, { useEffect, useState } from 'react'
import Switch from 'react-switch'
import { useTheme } from 'next-themes'
// import { BsFillSunFill, BsFillMoonFill, BsCloudSun } from 'react-icons/bs'
import { WiDayCloudy, WiMeteor } from "react-icons/wi";
import ResizeHook from '../../hooks/ResizeHook'
import Links from './Links'
import Tabs from './Tabs'
import Social from './Social'

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
    <div className='flex bg-cyan-50 dark:bg-[#05011a] justify-center pt-4 z-10'>
      <div className='flex justify-between max-w-screen-xl w-full md:border-b border-[#180133] md:dark:border-violet-900 md:border-amber-300 pb-2'>
        <Switch
          checked={currentTheme === 'dark'} 
          checkedIcon={<WiDayCloudy className='fill-amber-300' size='1.75rem' style={{paddingLeft: '.5rem'}}/>}
          offColor='#180133'
          offHandleColor='#ecfeff'
          onChange={handleToggle}
          onColor='#ecfeff'
          onHandleColor='#180133'
          uncheckedIcon={<WiMeteor className='fill-emerald-500' size='1.75rem' style={{paddingLeft: '.25rem'}}/>}
        />
        <div className='flex justify-evenly gap-14 items-center'>
          {
            windowWidth && windowWidth > 767 ? 
            <Links/>
          :
            <Tabs/>
          }
          <Social/>
        </div>
      </div>
    </div>
  )
}

export default Nav