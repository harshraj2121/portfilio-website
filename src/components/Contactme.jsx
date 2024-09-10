import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFolder, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'; // Import the specific icon you want to use
import { useForm } from 'react-hook-form';
import Intro from './pagecomponents/Intro';
import { faForumbee } from '@fortawesome/free-brands-svg-icons';


function Contactme() {

  const contactsData = [
    {faname: faPhone, title: 'Phone', subtitle: "+91 898 739 5978"},
    {faname: faEnvelope, title: 'Email', subtitle: "harsh.r2121@hotmail.com"},
    {faname: faLocationDot, title: 'Address', subtitle: "Delhi, India"}
  ]


  const { register, handleSubmit, formState: {errors}} = useForm();

  const handleSubmitButton = (event) => {
    event.preventDefault();
  }

  return (
    <div className='w-full h-full pt-4 bg-cover flex flex-col items-center justify-center bg-white'>
      <Intro content={"CONTACT ME"} subcontent={"Fill the required form to reach me"} topicon={faFolder}/>
      <div className='max-w-screen-lg mx-auto p-5 h-fit md:h-[93.15vh] md:flex items-center justify-center gap-8 rounded-lg'>
        <div className='w-full h-[56vh] md:h-[77vh] p-5 md:p-4 bg-[#e3e3e3] bg-opacity-90'>
          <h1 className='text-3xl md:text-4xl text-[#ff9800]'>let's work togehter</h1>
          <p className='mt-4 md:mt-4 text-[#6C757D]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis itaque in ipsum, est, quibusdam.</p>
          <form className='w-full h-[50vh] mt-2 py-4' action="" onSubmit={handleSubmit(handleSubmitButton)}>
            <div className='flex flex-col gap-y-5 min-[529px]:gap-y-7 md:gap-y-5'>
              <div className='flex items-center justify-center gap-x-5'>
                <input className='bg-white border-2 rounded-sm text-black h-8 w-[50%] placeholder-[#212529] placeholder:p-2' {...register('fName', {required: true})} placeholder='First Name' type="text" />
                <input className='bg-white border-2 rounded-sm text-black h-8 w-[50%] placeholder-[#212529] placeholder:p-2' {...register('sName', {required: true})} placeholder='Second Name' type="text" />
              </div>
              <div className='flex items-center justify-center gap-x-5'>
                <input className='bg-white border-2 rounded-sm text-black h-8 w-[50%] placeholder-[#212529] placeholder:p-2' {...register('email', {required: true})} placeholder='Email Address' type="email" />
                <input className='bg-white border-2 rounded-sm text-black h-8 w-[50%] placeholder-[#212529] placeholder:p-2' {...register('phone', {required: true})} placeholder='Phone Number' type="tel" />
              </div>
              <select className='bg-white border-2 rounded-sm text-black h-8 w-full placeholder-[#212529] placeholder:p-2' name="Select a Service" id="">
                <option value="default" selected>Select a Service:</option>
                <option value="option1">Web Developoment</option>
                <option value="option2">Video Editing</option>
                <option value="option3">C Language</option>
                <option value="option4">Python</option>
                <option value="option5">Photo Editing</option>
              </select>
              <input className='bg-white border-2 rounded-sm text-black h-32 w-full placeholder-[#212529] placeholder:p-2 placeholder:absolute placeholder:top-0' {...register('message', {required: true})} placeholder='type your Message Here.' type="text" />
              <button className='px-5 py-2 rounded-full bg-[#f48c06] text-white text-md w-fit'>Send Message</button>
            </div>
          </form>
        </div>











        <div className='w-full p-4 h-[40vh] md:h-[75vh] flex flex-col gap-4 items-start justify-center bg-opacity-90'>
          {contactsData.map((val , index)=>(
             <div key={index} className='ml-6 flex items-center justify-center gap-x-4'>
             <div><FontAwesomeIcon icon={val.faname} className='p-3 border-2 border-[#f48c06] rounded-sm text-xl' style={{color: '#f48c06'}}/></div>
             <div>
               <p className='text-[#6C757D]'>{val.title}</p>
               <p className='text-[#212529]'>{val.subtitle}</p>
             </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Contactme