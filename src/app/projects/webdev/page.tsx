'use client'
import React from 'react'
import Navbar from '@/app/components/navbar/navbar'
import Link from 'next/link'
import Footer from '@/app/components/footer/footer'
import Featured from '@/app/components/projects/webdev/featured'
import Recent from '@/app/components/projects/webdev/recent'
import Popular from '@/app/components/projects/webdev/popular'
import { useQuery } from '@tanstack/react-query'

type Props = {}

const Web_Development = (props: Props) => {
  return (
    <div className='bg-white space-y-6' >
      <div className='py-4' >
         <Navbar/> 
      </div>
      <div className='w-full px-4' >
          <div className='flex justify-center' >
              <h1 className='text-4xl text-black' >Web Development</h1>
          </div>
          <div className='flex w-full px-4 flex-col self-center space-y-4 text-black ' >
           <div className=' flex flex-col border-2 border-black rounded-md self-center w-4/5' >
            <div className='flex flex-row justify-around py-4' >
            <h1 className='text-2xl ' >Featured Projects</h1>
            <Link className=''href='/' >See All</Link>
            </div>
            
            <div className=' p-8' >
              {/* Featured Projects */}
              <Featured/>
            </div>
            </div>
           <div className='flex flex-col border-2 border-black rounded-md self-center w-4/5' >
           <div className='flex flex-row justify-around py-4' >
            <h1 className='text-2xl' >Recent Projects</h1>
            <Link className=''href='/' >See All</Link>
            </div>
            <div className=' p-8' >
              {/* Recent Projects */}
              <Recent/>
            </div>
            </div>
            <div className='flex flex-col border-2 border-black rounded-md self-center w-4/5' >
            <div className='flex flex-row justify-around py-4' >
            <h1 className='text-2xl' >Popular Projects</h1>
            <Link className=''href='/' >See All</Link>
            </div>
            <div className=' p-8' >
              {/* Popular Projects */}
              <Popular/>
            </div>

              </div>    

          </div>
      </div>
      <div className='' >
        <Footer/>

      </div>
      
      </div>
  )
}

export default Web_Development