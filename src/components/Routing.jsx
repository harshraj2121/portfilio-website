import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Services from './Services'
import Resume from './Resume'
import Work from './Work'
import Contactme from './Contactme'
import Hireme from "./Hireme"
import Experience from './resumecomps/experience'
import Education from './resumecomps/Education'
import Skills from './resumecomps/Skills'
import Aboutme from './resumecomps/Aboutme'

function Routing() {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/services' element={<Services />}/>
        <Route path='/resume' element={<Resume/>}>
          <Route path='/resume/experience/*' element={<Experience/>}/>
          <Route path='/resume/education' element={<Education/>}/>
          <Route path='/resume/skills' element={<Skills/>}/>
          <Route path='/resume/aboutme' element={<Aboutme/>}/>
        </Route>
        <Route path='/work' element={<Work/>}/>
        <Route path='/contactme' element={<Contactme/>}/>
        <Route path='/hireme' element={<Hireme/>}/>
      </Routes>
    </div>
  )
}

export default Routing