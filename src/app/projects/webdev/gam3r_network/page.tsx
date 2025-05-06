'use client'
import React from 'react'
import Navbar from '@/app/components/navbar/navbar'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/app/utils/images/logo/Julian_Borner_Logo.png'
//import Footer from '@/app/components/newFooter/footer'
import Footer from '@/app/components/footer/footer'

type Props = {}

const Gam3r_Network = (props: Props) => {
  return (
    <div className=' bg-white text-black ' >
      
      <div className=' w-full static h-36 py-4 bg-white border-2 absolute' >
          <div className='flex justify-between w-full absolute' >
            <div className='flex self-center px-4 ' >
            <div className='flex  justify-self-center ' >
                    
                    {/*<Image className='w-24 h-24' src={JB_Profile_Pic} alt="Julian Borner Profile Pic" /> */}
                </div>
                <div className=' self-center  justify-self-center top-4' >
                    <Image className='w-40 h-28' src={Logo} alt='Julian Borner Logo' />
                </div>
                
            </div>
            <div className='flex justify-between p-6 self-center space-x-6 ' >
                <Link className=' text-yellow-600 text-lg' href='/HomeRedux' >Home</Link>
                <Link className='text-yellow-600 text-lg ' href='#about' >About</Link>
                <Link className=' text-yellow-600 text-lg ' href='#projects' >Projects</Link>
                <Link className=' text-yellow-600 text-lg ' href='#contact' >Contact</Link>

            </div>

          </div>
        </div>
        <div className=' bg-white text-black h-screen ' >
          <div className='w-full flex h-2/3 space-y-4 flex-col  border-2 border-black justify-self-center self-center z-5 p-4 ' > 
            
            <div className=' flex w-2/3 self-center h-full border-2 border-black mt-28 z-50 ' >
            <Image className='w-full h-full ' src='' alt='banner background' /> 
            </div>
            <div className='flex flex-col self-center w-2/3 z-50 space-y-4' >
              <h1 className=' self-center text-2xl text-yellow-600  ' >The Gam3r Network</h1>
              <p className=' self-center border-2 w-2/3 text-lg ' >The Gam3r Network is a companion website to The Gam3r Network YouTube channel that features video creation and upload, 
              chat forums and free games. The Gam3r Network site was built using Next.js, React, Node and TypeScript. The site is continuously updated
               and maintained by me.  </p>
              <Link className='w-36 h-10 bg-yellow-600 text-white text-center rounded-md flex self-center ' href='/' >
              <h1 className='flex self-center justify-center w-full h-full text-center mt-4 ' >Live Link
                </h1>
                </Link>

            </div>

          </div>
          {/* <div className='flex flex-col space-y-4 w-2/3 h-60 border-2 border-black justify-self-center' >
            <h1 className='flex self-center' >Project Description</h1>
            <p className='flex self-center' >Testing...</p>

          </div>*/}
          
          <div className='flex flex-col rounded-md space-y-4 w-2/3 h-1/4 justify-self-center border-2 border-slate-2' >
            <h1 className='flex self-center  ' >Features</h1>
            <p className='flex self-center ' >testing...</p>
          </div>
          <div className='flex justify-around space-y-4' >
            <div className='flex justify-self-around flex-col w-1/4 rounded-md border-2 ' >
            <h1 className='flex justify-self-around w-full' >Average Load Time</h1>
               <h3 className='' >Time</h3>
            </div>
            <div className='flex justify-self-around  flex-col w-1/4 border-2 rounded-md ' >
            <h1 className='flex justify-self-around w-full ' >Technology Used</h1>
               <h3 className='' >React.js, Next.js, Node.js, MUX Api</h3>
            </div>

          </div>

        </div>
        <div className='flex bg-white' >
              <Footer/>
        </div>
      </div>
  )
}

export default Gam3r_Network