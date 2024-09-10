import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "@fontsource/black-ops-one";
import "@fontsource/qwitcher-grypen"
import "@fontsource/great-vibes";
import style from "./style.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';



function Navigation() {

  const IfTrue = false
  const [sideBar, setSidebar] = useState(IfTrue);
  const handleSidebar = () => {
    setSidebar(!sideBar)
  };

  return (
    <div>
        <nav className={`text-white text-xl px-[6%] h-12 bg-[#242a35] flex items-center justify-between overflow-auto`}>          
              <div className={`font-blackops tracking-wider text-3xl`}>HARSH RAJ</div>
              <div onClick={handleSidebar} className='md:hidden'>{sideBar ? <FontAwesomeIcon className='text-2xl' icon={faXmark}/> : <FontAwesomeIcon className='text-xl' icon={faBars}/>}
                <div className={`${sideBar ? 'block' : 'hidden'}  bg-white p-2 text-black z-10 flex flex-col items-end absolute top-12 right-0`}>
                  <NavLink className='text-sm mr-2 md:mr-5' to="/">Home</NavLink> <hr className='w-full p-0 border-black' />
                  <NavLink className='text-sm mr-2 md:mr-5' to="/services">Services</NavLink><hr className='w-full p-0 border-black' />
                  <NavLink className='text-sm mr-2 md:mr-5' to="/resume">Resume</NavLink><hr className='w-full p-0 border-black' />
                  <NavLink className='text-sm mr-2 md:mr-5' to="/work">Work</NavLink><hr className='w-full p-0 border-black' />
                  <NavLink className='text-sm mr-2 md:mr-5' to="/contactme">Contact Me</NavLink><hr className='w-full p-0 border-black mb-1' />
                  <button className='ml-6 md:ml-9 px-2 py-0 mt-[2px] text-sm rounded-full bg-[#c2c5aa] text-[#212529]'><NavLink to="/hireme">Hire ME</NavLink></button>
                </div>
              </div>
              <div className='hidden md:block'>
                <NavLink className='mr-2 md:mr-5' to="/">Home</NavLink>
                <NavLink className='mr-2 md:mr-5' to="/services">Services</NavLink>
                <NavLink className='mr-2 md:mr-5' to="/resume">Resume</NavLink>
                <NavLink className='mr-2 md:mr-5' to="/work">Work</NavLink>
                <NavLink className='mr-2 md:mr-5' to="/contactme">Contact Me</NavLink>
                <button className='ml-6 md:ml-9 px-3 py-1 rounded-full bg-[#c2c5aa] text-[#212529]'><NavLink to="/hireme">Hire ME</NavLink></button>
              </div>
        </nav>
    </div>
  )
}

export default Navigation