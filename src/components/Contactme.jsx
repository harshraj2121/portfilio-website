import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use


function Contactme() {

  const contactsData = [
    {faname: faPhone, title: 'Phone', subtitle: "+91 898 739 5978"},
    {faname: faEnvelope, title: 'Email', subtitle: "harsh.r2121@hotmail.com"},
    {faname: faLocationDot, title: 'Address', subtitle: "Delhi, India"}
  ]

  return (
    <div className='w-full h-full bg-cover bg-zinc-900'>
      <div className='max-w-screen-lg mx-auto h-fit md:h-[93.15vh] md:flex items-center justify-center gap-8 rounded-lg'>
        <div className='w-full h-[75vh] p-4 bg-zinc-800 bg-opacity-90'>
          <h1 className='text-4xl md:text-5xl font-bold text-[#00e187]'>let's work togehter</h1>
          <p className='mt-4 md:mt-2 text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis itaque in ipsum, est, quibusdam.</p>
        </div>
        <div className='w-full p-4 h-[40vh] md:h-[75vh] flex flex-col gap-4 items-start justify-center bg-opacity-90'>
          {contactsData.map((val , index)=>(
             <div key={index} className='ml-6 flex items-center justify-center gap-x-4'>
             <div><FontAwesomeIcon icon={val.faname} className='p-3 bg-zinc-800 rounded-sm text-xl' style={{color: '#00e187'}}/></div>
             <div>
               <p className='text-zinc-400'>{val.title}</p>
               <p className='text-white'>{val.subtitle}</p>
             </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contactme