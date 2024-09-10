import React, { useEffect } from 'react'
import { NavLink, Outlet, useLocation, useNavigate, } from 'react-router-dom'
import Intro from './pagecomponents/Intro';
import { faPage4 } from '@fortawesome/free-brands-svg-icons';

function Resume() {

  const Navigate = useNavigate();
  const Location = useLocation();

  // ye code kya karega ki agar location resume pe gaya ho, to education ko default me khol dega.
  useEffect(() => {
    if(location.pathname === "/resume"){
      Navigate("/resume/education")
    }
},[location.pathname, Navigate])

  return (
    <div className='w-full h-[185vh] flex flex-col items-center pt-4 sm:h-fit bg-zinc-'>
      <Intro content={"RESUME"} subcontent={"Let's have a look of me"} topicon={faPage4}/>
      <div className='max-w-screen-xl mx-auto h-fit md:h-[93.15vh] text-white md:grid grid-cols-[1fr_2fr] gap-5 sm:px-8 pt-5 md:pt-11'>
        <div className='h-fit md:h-[65vh] p-8'>
          <h1 className='text-4xl text-[#fb8500]'>Why? Hire me</h1>
          <p className='pt-2 text-[#6C757D] text-sm'>Lorem ipsum dipisicing elit. Ullam, facilis quidem. Necessitatibus illo excepturi quo</p>
          <div className='text-white w-full h-full flex flex-col items-center mt-10 '>
            <NavLink className={({isActive}) => `${isActive ? 'bg-[#fb8500] text-white' : 'text-black'} hover:bg-[#f48c06] hover:text-white border-2 border-[#fb8500] mt-3 py-3 rounded-md duration-100 ease-in w-full text-center border-spacing-1`} to="/resume/education">Education</NavLink>
            <NavLink className={({isActive}) => `${isActive ? 'bg-[#fb8500] text-white' : 'text-black'} hover:bg-[#f48c06] hover:text-white border-2 border-[#fb8500] mt-3 py-3 rounded-md duration-100 ease-in w-full text-center border-spacing-1`} to="/resume/experience">Experience</NavLink>
            <NavLink className={({isActive}) => `${isActive ? 'bg-[#fb8500] text-white' : 'text-black'} hover:bg-[#f48c06] hover:text-white border-2 border-[#fb8500] mt-3 py-3 rounded-md duration-100 ease-in w-full text-center border-spacing-1`} to="/resume/skills">Skills</NavLink>
            <NavLink className={({isActive}) => `${isActive ? 'bg-[#fb8500] text-white' : 'text-black'} hover:bg-[#f48c06] hover:text-white border-2 border-[#fb8500] mt-3 py-3 rounded-md duration-100 ease-in w-full text-center border-spacing-1`} to="/resume/aboutme">About Me</NavLink>
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