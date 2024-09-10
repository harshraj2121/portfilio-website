import { faSchool } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Intro from './pagecomponents/Intro'

function Hireme() {
  return (
    <div className='h-[80vh] w-full grid place-items-center'>
      <Intro content={"HIRE ME"} subcontent={"This page is under development"} topicon={faSchool}/>
    </div>
  )
}

export default Hireme