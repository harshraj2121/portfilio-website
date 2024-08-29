import React from 'react'
import { NavLink, Outlet, } from 'react-router-dom'

function Resume() {
  return (
    <div className='w-full h-fit bg-zinc-800'>
      <div className='max-w-screen-xl mx-auto h-fit md:h-[93.15vh] text-white md:grid grid-cols-[1fr_2fr] gap-5 px-8 pt-5 md:pt-16'>
        <div className='h-fit md:h-[65vh] p-8'>
          <h1 className='text-3xl font-semibold text-[#00e187]'>Why? Hire me</h1>
          <p className='pt-2 text-sm font-semibold'>Lorem ipsum dipisicing elit. Ullam, facilis quidem. Necessitatibus illo excepturi quo</p>
          <div className='text-white w-full h-full flex flex-col items-center mt-10 '>
            <NavLink className={({isActive}) => `${isActive ? 'bg-[#00e187] text-black font-bold' : 'bg-zinc-700'} hover:bg-[#00ff99] mt-3 py-3 rounded-md duration-100 ease-in w-full text-center border-spacing-1`} to="/resume/education">Education</NavLink>
            <NavLink className={({isActive}) => `${isActive ? 'bg-[#00e187] text-black font-bold' : 'bg-zinc-700'} hover:bg-[#00ff99] mt-3 py-3 rounded-md duration-100 ease-in w-full text-center border-spacing-1`} to="/resume/experience">Experience</NavLink>
            <NavLink className={({isActive}) => `${isActive ? 'bg-[#00e187] text-black font-bold' : 'bg-zinc-700'} hover:bg-[#00ff99] mt-3 py-3 rounded-md duration-100 ease-in w-full text-center border-spacing-1`} to="/resume/skills">Skills</NavLink>
            <NavLink className={({isActive}) => `${isActive ? 'bg-[#00e187] text-black font-bold' : 'bg-zinc-700'} hover:bg-[#00ff99] mt-3 py-3 rounded-md duration-100 ease-in w-full text-center border-spacing-1`} to="/resume/aboutme">About Me</NavLink>
          </div>
        </div>
        
        <div className='h-[65vh] p-8 w-fit'>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Resume