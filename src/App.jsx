import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll';
import Navigation from './components/Navigation'
import Routing from './components/Routing'

function App() {

  useEffect(() => {
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: document.querySelector('.scroll-container'), // The container you want to apply Locomotive Scroll to
      smooth: true, // Smooth scrolling
    });

    // Clean up Locomotive Scroll instance on component unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className='scroll-container h-fit lg:h-screen select-none font-blackops'>
      <div className='w-full'>
        <Navigation/>
        <Routing/>
      </div>
    </div>
  )
}

export default App