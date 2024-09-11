import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
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

  const navigate = useNavigate()

  const handleclick = () => {
    navigate('/')
  }

  return (
    <div>
        <nav className={`text-white text-xl px-[6%] h-12 bg-[#242a35] flex items-center justify-between overflow-auto`}>          
              <div onClick={handleclick} className={`font-blackops tracking-wider text-2xl group relative`}>
                <span className='absolute top-1/2 -translate-y-1/2 -left-5 opacity-0 group-hover:opacity-100 group-hover:-left-8 text-xl duration-100'>&lt;</span><span>HARSH RAJ</span><span className='absolute pb-[1px] top-1/2 -translate-y-1/2 -right-7 g opacity-0 group-hover:opacity-100 group-hover:-right-10 text-xl duration-100'>/&gt;</span>
              </div>
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