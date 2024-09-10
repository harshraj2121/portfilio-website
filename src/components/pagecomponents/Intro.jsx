import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


// this coponent will take "content" and "subcontent" and "topicicon" as props input.

function Intro({content, subcontent, topicon}) {
  return (
      <div className='w-fit h-fit flex flex-col items-center justify-center font-blackops'>  
        <FontAwesomeIcon className="mb-1 min-[460px]:mb-3 text-[#d3d3d4] text-lg min-[460px]:text-2xl min-[750px]:text-3xl" icon={topicon}/>
        <div className='w-1 h-6 min-[460px]:h-10 mb-1 min-[460px]:mb-3 bg-[#ff9800]'></div>
        <div className='relative w-fit h-fit'>
            <div className="text-3xl min-[460px]:text-6xl min-[750px]:text-8xl text-[#d9d9d0] tracking-tighter">{content}</div>
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm min-[460px]:text-xl min-[750px]:text-2xl font-bold tracking-tight text-[#212529]'>{content}</div>
        </div>
        <p  className={`text-xs text-[#6C757D] text-center`}>{subcontent}</p>
      </div>
  )
}

export default Intro