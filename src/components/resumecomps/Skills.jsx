import { faCss3, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons/faNode'
import { faBolt, faRocket } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { RiTailwindCssFill } from "react-icons/ri";
import { GiSteamLocomotive } from "react-icons/gi";
import { FaNodeJs } from "react-icons/fa";
import { MdAnimation } from "react-icons/md";

function Skills() {

  const skills_data = [
    {istrue: true , icon: faHtml5, skillsTitle: "HTML"},
    {istrue: true , icon: faCss3,skillsTitle: "CSS"},
    {istrue: true , icon: faJs, skillsTitle: "JavaScript"},
    {istrue: true , icon: faReact, skillsTitle: "ReatJS"},
    {istrue: false , icon: faBolt, iconTag: <MdAnimation className='text-6xl group-hover:text-[#f48c06] text-[#212529]'/>, skillsTitle: "GSAP"},
    {istrue: false , icon: faRocket, iconTag: <GiSteamLocomotive className='text-6xl group-hover:text-[#f48c06] text-[#212529]'/>, skillsTitle: "LocomotiveJS"},
    {istrue: false , icon: faBolt, iconTag: <RiTailwindCssFill className='text-7xl group-hover:text-[#f48c06] text-[#212529]'/>, skillsTitle: "Tailwind CSS"},
    {istrue: false , icon: faNode, iconTag: <FaNodeJs className='text-6xl group-hover:text-[#f48c06] text-[#212529]'/>, skillsTitle: "NodeJS"},
  ]

  return (
<div className='w-full h-full pt-5'>
      <h1 className='text-3xl text-[#212529]'>My Skills</h1>
      <p className='pt-6 text-lg text-[#6C757D] w-full lg:w-[80%] antialiased'>Here are some of my skills that I have mastered; throught my journey.</p>
      <div className='w-full lg:w-[80%] overflow-y-auto h-72 flex items-start justify-start flex-wrap flex-grow'>
        {skills_data.map((val, index)=>(
          <div key={index} className='h-36 w-36 pt-7 flex justify-start'>
            <div className={`h-28 w-28 relative bg-[#dadada] group flex items-center basis-28 justify-center`}>
              {val.istrue ? (<FontAwesomeIcon icon={val.icon} className='group-hover:text-[#f48c06] text-6xl text-[#212529]' />) : val.iconTag }
                <p className='absolute duration-100 bg-white text-[#fb8500] text-sm whitespace-nowrap rounded-md px-1 opacity-0 group-hover:opacity-100 text-center top-0 group-hover:-top-5 left-1/2 -translate-x-[50%]'>{val.skillsTitle}</p>
            </div>
          </div> 
        ))}
      </div>
    </div>)
}

export default Skills