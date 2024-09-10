import React from 'react'
import Intro from './pagecomponents/Intro'
import { faGear } from '@fortawesome/free-solid-svg-icons'

function Services() {
  return (
    <div className='h-[80vh] w-full grid place-items-center'>
      <Intro content={"SERVICES"} subcontent={"This page is under development"} topicon={faGear}/>
    </div>
  )
}

export default Services