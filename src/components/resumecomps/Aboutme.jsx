import React from 'react'

function Aboutme() {
  return (
    <div className=' md:w-full sm:h-full pt-0 sm:pt-5'>
      <h1 className='text-[#212529] text-3xl'>About Me</h1>
      <p className='pt-6 text-base sm:text-lg text-[#6C757D] tracking-tighter sm:tracking-normal'>Hey.. I am Harsh raj, a passionate website developer specializing in what you want.</p>
      <div className='w-full h-fit mt-0 sm:flex items-start gap-8 min-[860px]:gap-16 justify-start'>
        <ul className='mt-1 sm:mt-10'>
          <li className='py-3'><span className='text-[#6C757D]'>Name</span> <span className='pl-2 min-[860px]:pl-5 min-[860px]:tracking-wide text-[#212529]'>Harsh Raj</span></li>
          <li className='py-3'><span className='text-[#6C757D]'>Experience</span> <span className='pl-2 min-[860px]:pl-5 min-[860px]:tracking-wide text-[#212529]'>Harsh Raj</span></li>
          <li className='py-3'><span className='text-[#6C757D]'>Natoinality</span> <span className='pl-2 min-[860px]:pl-5 min-[860px]:tracking-wide text-[#212529]'>Indian</span></li>
          <li className='py-3'><span className='text-[#6C757D]'>Freelance</span> <span className='pl-2 min-[860px]:pl-5 min-[860px]:tracking-wide text-[#212529]'>Available</span></li>
        </ul>
        <ul className='mt-1 sm:mt-10'>
          <li className='py-3'><span className='text-[#6C757D]'>Phone</span> <span className='pl-2 min-[860px]:pl-5 min-[860px]:tracking-wide text-[#212529]'>+91 897 739 5978</span></li>
          <li className='py-3'><span className='text-[#6C757D]'>Location</span> <span className='pl-2 min-[860px]:pl-5 min-[860px]:tracking-wide text-[#212529]'>Delhi, India</span></li>
          <li className='py-3'><span className='text-[#6C757D]'>Email</span> <span className='pl-2 min-[860px]:pl-5 min-[860px]:tracking-wide text-[#212529]'>harsh.r2121@hotmail.com</span></li>
          <li className='py-3'><span className='text-[#6C757D]'>Language</span> <span className='pl-2 min-[860px]:pl-5 min-[860px]:tracking-wide text-[#212529]'>Hindi, English</span></li>
        </ul>
      </div>
    </div>
  )
}

export default Aboutme