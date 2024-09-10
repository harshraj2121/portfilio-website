import React from 'react'
import Intro from './pagecomponents/Intro'
import { faBars, faCopy, faTrophy } from '@fortawesome/free-solid-svg-icons'

function Work() {
  return (
    <div className='h-[80vh] w-full grid place-items-center'>
      <Intro content={"WORK"}  subcontent={"This page is under development"} topicon={faTrophy}/>
    </div>
  )
}

export default Work