'use client'
import React,{useState} from 'react'
import Image from 'next/image'
import Navbar from '../components/navbar/navbar'
import Footer from '../components/footer/footer'
import Link from 'next/link'
import Featured from '../components/home/featured'
import Frameworks from '../components/home/frameworks'
import Language from '../components/home/language'
import JB_Profile_Pic from '../utils/images/profile/JB_Professional_Pic.jpg'
import Logo from '../utils/images/logo/Julian_Borner_Logo.png'
import * as motion from "motion/react-client"
import NextJS from '@/app/utils/images/misc/Next_JS_1.avif'
import Snippets from '@/app/utils/images/misc/code_snippets.webp'
import cryptoCurrency from '@/app/utils/images/misc/crypto_1.webp'


type Props = {}

const HomeRedux = (props: Props) => {
  return (
    <div className='bg-white text-black' >
        <div className=' w-full static h-36 py-4 bg-white border-2 absolute' >
          <div className='flex justify-between w-full absolute' >
            <div className='flex self-center px-4 ' >
            <div className='flex  justify-self-center ' >
                    <Image className='w-24 h-24' src={JB_Profile_Pic} alt="Julian Borner Profile Pic" />
                </div>
                <div className=' self-center  justify-self-center top-4' >
                    <Image className='w-40 h-28' src={Logo} alt='Julian Borner Logo' />
                </div>
                
            </div>
            <div className='flex justify-between p-4 self-center space-x-6' >
                <Link className=' text-yellow-600 text-lg' href='/HomeRedux' >Home</Link>
                <Link className='text-yellow-600 text-lg ' href='#about' >About</Link>
                <Link className=' text-yellow-600 text-lg ' href='#projects' >Projects</Link>
                <Link className=' text-yellow-600 text-lg ' href='#contact' >Contact</Link>

            </div>

          </div>
        </div>
        <div className='h-screen flex ' id='/' >
        <div className='flex flex-col justify-start self-center bg-white p-4'  >
           <h1>Socials</h1>
        </div>
        <div className='flex flex-col  justify-center w-full space-y-4 ' >
          <div className='flex self-center justify-self-center ' >
            <div className='relative  self-center  ' >
            <h1 className='flex text-yellow-600 justify-end text-center text-5xl self-center top-8 absolute w-96' >My name is </h1>
            </div>
          
          <div className='w-full flex self-center -mt-12' ><Image className='w-full h-full' src={Logo} alt='Julian Borner Logo' /></div>
          </div>
            
              <p className='flex self-center justify-self-center text-xl' >A Result-Oriented Web Developer that specializes in 
                building, managing and maintaining full-stack applications.
              </p>
              <Link className=' shadow-lg hover:shadow-xl hover:scale-125  justify-self-center self-center flex w-24 h-10 bg-yellow-600 text-center text-white rounded-lg' href='#projects'> <h1 className='w-full  self-center flex text-center justify-center text-white' >Projects</h1> </Link>
              <motion.div className='flex justify-center self-' >
            <h1 className='' >Down-ward Arrow Motion</h1>

          </motion.div>
        </div>
          
          

        </div>
        <div className='h-screen border-2 border-black bg-slate-100 ' id='about'  >
            <div className='flex flex-col self-center w-full p-4 border-2 border-black space-y-2 ' >
               <h1 className='flex justify-center self-center text-yellow-600 text-5xl' >About Me</h1>
                  <hr className='flex self-center w-12' />
                 <p className='flex w-1/4 self-center text-lg ' >Here you will find more information about me, what I do, and my current skills mostly in terms 
                    of programming and technnology.</p> 
            </div>
            <div className='flex w-full  ' >
                <div className='flex flex-col p-4 w-1/2' >
                    <Image className='flex' src={JB_Profile_Pic} alt='Profile Pic' />
                     <div className='flex flex-col border-2 border-black  p-4 w-96 ' >
                         <Link className=' shadow-lg hover:shadow-xl hover:scale-125  justify-self-center self-center flex w-24 h-10 bg-yellow-600 text-center text-white rounded-lg' href='#contact'> <h1 className='w-full  self-center flex text-center justify-center text-white' >Contact Me</h1> </Link>
                        
                      
                      </div>
                     
                </div>
                <div className='flex flex-col border-2  border-black w-1/2 p-4' >
                    <h1 className='flex self-center text-yellow-600 text-3xl' >Get to know me!</h1>
                    <p className='flex self-center ' >Description...</p>
                    <div className='flex flex-col w-full h-full self-center justify-center' >
                    <h1 className='flex self-center justify-center' >My Skills</h1>
                        <div className='flex  self-center' >
                        <Link className='' href='' ><Image className='' src='' alt='/' /></Link>
                       <Link className='' href='' ><Image className='' src='' alt='/' /></Link>
                       <Link className='' href='' ><Image className='' src='' alt='/' /></Link>
                       <Link className='' href='' ><Image className='' src='' alt='/' /></Link>
 
                        </div>
                          
                    </div>
                    
                </div>

            </div>
        </div>
        <div className='h-screen' id='projects' >
            
            <div className='flex flex-col self-center w-full p-4 border-2 border-black space-y-2 ' >
              <h1 className='flex justify-center self-center text-yellow-600 text-5xl' >Projects</h1>
                <hr className='flex self-center w-12' />
                 <p className='flex w-1/4 self-center text-lg ' >Here you will find some of the personal and client projects that I have created, with a detailed description of each project, along with the technologies
                     used to created them.</p> 
            </div>
            <div className='flex flex-col justify-center ' >
                <div className='flex' >
                    <Image className='' src='' alt='Gam3r Network' />
                     <div className='' >
                        <h1 className='' >The Gam3r Network</h1>
                        <Link className=' shadow-lg hover:shadow-xl hover:scale-125  justify-self-center self-center flex w-24 h-10 bg-yellow-600 text-center text-white rounded-lg' href='#projects'> <h1 className='w-full  self-center flex text-center justify-center text-white' >Projects</h1> </Link>
                     </div>
                </div>
                <div className='flex' >
                    <Image className='' src='' alt='ETQ-Amsterdam Clone' />
                     <div className='' >
                        <h1 className='' >The Gam3r Network</h1>
                        <Link className=' shadow-lg hover:shadow-xl hover:scale-125  justify-self-center self-center flex w-24 h-10 bg-yellow-600 text-center text-white rounded-lg' href='#projects'> <h1 className='w-full  self-center flex text-center justify-center text-white' >Projects</h1> </Link>
                     </div>
                </div>

            </div>
        </div>
        <div className='h-screen' id='contact' >

        </div>
        HomeRedux
        </div>
  )
  
}

export default HomeRedux