import React from 'react'
import Navigation from './components/Navigation'
import Routing from './components/Routing'

function App() {
  return (
    <div className='h-fit lg:h-screen select-none'>
      <div className='w-full'>
        <Navigation/>
        <Routing/>
      </div>
    </div>
  )
}

export default App