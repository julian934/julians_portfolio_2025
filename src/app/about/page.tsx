'use client'
import React from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Professional_Pic from '../utils/images/profile/JB_Professional_Pic.jpg'
import Julian_Borner_Logo from '../utils/images/logo/Julian_Borner_Logo.png'
type Props = {}

const About = (props: Props) => {
  return (
    <div className='bg-white' >
      <div className='flex flex-row self-start md:-mt-20' > 
          <Image className=' w-1/2 h-1/2 self-start ' src={Julian_Borner_Logo} alt='Julian Borner Logo ' />
        <div className='flex  self-center' >
          <Navbar/>
        </div>
        
      </div>
      <div className='flex flex-col p-4  border-2 border-black max-sm:flex-col self-center justify-center' > {/* grid */}
        <div className='flex flex-row w-full' >
        <div className='w-1/2 ' >
          <Image className='' src={Professional_Pic} alt='Professional Pic' />
        </div>
        <div className='flex text-center border-2 border-black flex-col w-1/2' > 
           <h1 className='py-4 text-4xl text-black ' >About Me</h1>
           <p className=' text-black ' >
                Description...      
           </p>
           <div className='' >
            Certifications

           </div>
        </div>
        </div>
        
         <div className='flex flex-row justify-between w-1/2 self-center py-4 space-x-4' >
          <Image className='' src='' alt='Twitter/X' />
          <Image className='' src='' alt='Instagram' />
          <Image className='' src='' alt='LinkedIn' />
         </div>
      </div>
      
      <div className='flex self-center justify-center' >
         <Footer/>
      </div>
      </div>
  )
}

export default About