'use client'
import React from 'react'
import Image from 'next/image'
//import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'

import Logo from '../utils/images/logo/Julian_Borner_Logo.png'
import * as motion from "motion/react-client"
//import NextJS from '@/app/utils/images/misc/Next_JS_1.avif'
import Snippets from '@/app/utils/images/misc/code_snippets.webp'
import cryptoCurrency from '@/app/utils/images/misc/crypto_1.webp'

type Props = {}

const Home = (props: Props) => {
   
  return (
    <div className=' bg-white text-black max-sm:space-y-4' >
      <div className=' flex  justify-center max-sm:justify-self-start z-50 max-sm:px-10 max-h-[200px] max-sm:self-start' >
         
      </div>
      {/* use Ram Maheshwari Style but your own branding*/ }
      <motion.div className='flex max-sm:flex-col ' >
          <div className='h-full md:h-3/4 md:w-3/4 max-sm:w-full z-20 max-sm:-ml-14  ' >
             <Image className=' -mt-20 scale-150 z-20  ' src={Logo} alt='Julian Borner Logo' />
          </div>
          <div className='flex flex-col max-sm:text-center md:mt-20 max-sm:w-full max-sm:py-4 self-center md:w-1/2 max-sm:w-full md:h-full space-y-4 ' >
             <h1 className='self-center text-6xl text-black  max-sm:text-3xl text-yellow-500 ' >Hi I&apos;m Julian!</h1> {/* need depoyment code for apostrophe */}
             <hr className=' flex  self-center w-3/5 ' />
             <p className='flex self-center w-4/5 text-wrap text-black md:text-xl ' >Welcome to my Webshop. This is where I display all my previous projects such as 
               web apps, mobile apps and crypto applications. If you want to work with me, contact me!
             </p>
          </div>
      </motion.div>
      <motion.div  className='flex max-sm:flex-col p-4 w-full justify-around max-sm:self-center  min-w-[500px] min-h-[500px] ' >
         <motion.div className='flex rounded-lg border-2 border-black self-center min-w-[200px] space-x-2 '   >
            <h1 className='self-center text-center text-xl p-2 ' >Web Development</h1>
            <Image className='self-center border-2 border-black w-full rounded-lg max-w-[400px] max-h-[250px] ' src={Snippets} alt='Web Development' />

         </motion.div> 
           <motion.div className='flex rounded-lg border-2 border-black self-center min-w-[200px] space-x-2 ' >
          <h1 className='self-center  text-center text-xl p-2 ' >About Me</h1>
            <Image className='self-center  border-2 border-black w-full rounded-lg  max-w-[400px] max-h-[250px] ' src={Logo} alt='About' />
         </motion.div>
      
      <motion.div className='flex rounded-lg border-2 border-black self-center min-w-[200px] space-x-2  ' >
         <h1 className='self-center text-xl p-2  w-full rounded-lg max-w-[500px]' >Crypto Development</h1>
           <Image className='self-center border-2 border-black w-full rounded-lg max-w-[400px] max-h-[300px]'  src={cryptoCurrency} alt='programming languages' />

        </motion.div>

      </motion.div>
     
      {/*<div className=' flex flex-col p-4' >
         <div className='flex flex-col py-4' >
            <div className='flex ' >
              <h1 className='flex w-1/2  justify-center ' >Featured Projects</h1>
              <Link className='flex w-1/2 justify-center ' href='/' >See All</Link>
            </div>
              
              <div className='' >
                  <Featured/>
              </div>
         </div>
         <div className=' flex flex-col ' >
            <div className='flex ' >
            <h1 className='flex w-1/2  justify-center' >Frameworks</h1>
            <Link className='flex w-1/2 justify-center ' href='/' >See All</Link>
            </div>
              
              <div className='' >
                  <Frameworks/>
              </div>
         </div>
         <div className='flex flex-col ' >
            <div className='flex ' >
            <h1 className='flex w-1/2  justify-center' >Programming Languages</h1>
            <Link className='flex w-1/2  justify-center' href='/' >See All</Link>
            </div>
             
              <div className='' >
                  <Language/>
              </div>
         </div>
      </div> */}
      
      
      <div className='flex self-center justify-center ' >
         <Footer/>
      </div>
      </div>
  )
}

export default Home