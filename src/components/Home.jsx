import React from 'react'
import "@fontsource/black-ops-one";
import style from "./style.module.css"
import Button from './pagecomponents/button.jsx'
import { useNavigate } from 'react-router-dom';


function Home() {

  const navigate = useNavigate()

  const handleButton= () => {
    navigate('/work')
  }

  return (
    <>
      <div className='w-full h-[50vh] lg:h-[93.15vh] relative lg:grid lg:grid-cols-[1fr_2fr] lg:gap-7 lg:grid-flow-col bg-[#e4ab54]'>
        <div className='grid place-items-center h-full w-full'>
          <div className='w-[30vh] h-[30vh] md:w-[40vh] md:h-[40vh] xl:w-[45vh] xl:h-[45vh] bg-red-700 bg-[url("https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")] bg-cover lg:mb-28 rounded-full'></div>
        </div>

        <div className='h-fit lg:h-[93.15vh] w-full bg-slate-700 text-center text-white p-20 2xl:p-28'>
          <h1 className='font-extrabold text-xl md:text-6xl'>Hii... I'm</h1>
          <h2 className={`text-3xl md:text-8xl pt-2 ${style.homeheading}`}>Web Developer</h2>
          <h3 className='text-sm md:text-xl pt-3 first-letter:text-2xl md:first-letter:text-4xl float-left'>With a passion for crafting dynamic, responsive, and user-friendly websites. My expertise lies in transforming ideas into interactive digital experiences that are both visually stunning and functionally robust. With a strong foundation in frontend technologies like <span className='font-bold'>HTML, tailwind CSS, React JS, GSAP, Locomotive JS</span>, I am dedicated to delivering clean, efficient code that ensures seamless performance across all devices. Whether it's bringing a design concept to life or optimizing a site for speed and accessibility, I am committed to creating web solutions that meet and exceed client expectations</h3>
          <Button clickFunction={handleButton} content={"View My Work"}/>
        </div>
      </div>
    </>
  )
}

export default Home