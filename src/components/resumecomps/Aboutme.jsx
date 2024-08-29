import React from 'react'

function Aboutme() {
  return (
    <div className=' md:w-full h-full pt-5'>
      <h1 className='font-bold text-3xl'>About Me</h1>
      <p className='pt-6 text-lg text-zinc-400 font-semibold'>Hey.. I am Harsh raj, a passionate website developer specializing in what you want.</p>
      <div className='w-full h-fit flex items-start gap-8 min-[860px]:gap-16 justify-start'>
        <ul className='mt-10'>
          <li className='py-3'><span className='text-zinc-400 font-semibold'>Name</span> <span className='pl-2 min-[860px]:pl-5 font-bold min-[860px]:tracking-wide'>Harsh Raj</span></li>
          <li className='py-3'><span className='text-zinc-400 font-semibold'>Experience</span> <span className='pl-2 min-[860px]:pl-5 font-bold min-[860px]:tracking-wide'>Harsh Raj</span></li>
          <li className='py-3'><span className='text-zinc-400 font-semibold'>Natoinality</span> <span className='pl-2 min-[860px]:pl-5 font-bold min-[860px]:tracking-wide'>Indian</span></li>
          <li className='py-3'><span className='text-zinc-400 font-semibold'>Freelance</span> <span className='pl-2 min-[860px]:pl-5 font-bold min-[860px]:tracking-wide'>Available</span></li>
        </ul>
        <ul className='mt-10'>
          <li className='py-3'><span className='text-zinc-400 font-semibold'>Phone</span> <span className='pl-2 min-[860px]:pl-5 font-bold min-[860px]:tracking-wide'>+91 897 739 5978</span></li>
          <li className='py-3'><span className='text-zinc-400 font-semibold'>Location</span> <span className='pl-2 min-[860px]:pl-5 font-bold min-[860px]:tracking-wide'>Delhi, India</span></li>
          <li className='py-3'><span className='text-zinc-400 font-semibold'>Email</span> <span className='pl-2 min-[860px]:pl-5 font-bold min-[860px]:tracking-wide'>harsh.r2121@hotmail.com</span></li>
          <li className='py-3'><span className='text-zinc-400 font-semibold'>Language</span> <span className='pl-2 min-[860px]:pl-5 font-bold min-[860px]:tracking-wide'>Hindi, English</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Aboutme