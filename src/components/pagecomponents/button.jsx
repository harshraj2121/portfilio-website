import React from 'react'

function button({content , clickFunction}) {
  return (
    <div>
        <button onClick={clickFunction} className='py-2 px-10 font-bold bg-white text-black rounded-full mt-7 '>{content}</button>
    </div>
  )
}

export default button