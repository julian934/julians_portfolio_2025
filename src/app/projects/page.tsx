'use client'
import React from 'react'
import Navbar from '../components/navbar/navbar'
import Link from 'next/link'
import Footer from '../components/footer/footer'
import Crypto from '../components/projects/crypto/crypto'
//import WebDev from '../components/projects/webdev/webdev'
import { CardDemo } from '../components/ui/projects/webdev-overlay'
import { Dev_Card } from '../components/ui/projects/dev-overlay'
import Snippets from '../components/projects/snippets/snippets'
import { Snippets_Card } from '../components/ui/projects/snippets-overlay'
import { Crypto_Card } from '../components/ui/projects/crypto-overlay'
import { useQuery } from '@tanstack/react-query'
//Crypto_Card
type Props = {}

const Projects = (props: Props) => {
  return (
    <div className='bg-white' >
      <div className='' >
         <Navbar/>
      </div>
      <div className='flex flex-col justify-center b w-full space-y-4 ' >
         <div className='self-center' >
          <h1 className=' text-6xl ' >Projects</h1>
         </div>
         <div className=' flex flex-col md:px-12 space-y-4' >
           
           {/* <h3 className=' text-2xl flex self-center justify-center border-2 border-black  w-4/5' >Categories</h3>*/}
           <div className='md:self-center md:justify-center md:w-2/3  ' >
             <Link className='w-full border-2 border-black flex md:justify-center' href='/projects/webdev' ><Dev_Card/></Link>
           </div>
           <div className='md:self-center md:justify-center w-2/3 ' >
             <Link className='w-full border-2 border-black flex md:justify-center' href='/projects/snippets' ><Snippets_Card/></Link>
           </div>
           <div className='md:self-center md:justify-center w-2/3  ' >
             <Link className='w-full border-2 border-black flex md:justify-center' href='/projects/crypto' ><Crypto_Card/></Link>
           </div>
         </div>
      </div>
      <div className=' flex justify-center' >
         <Footer/>
      </div>
      
      </div>
  )
}

export default Projects