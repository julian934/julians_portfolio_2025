'use client'
import React from 'react'
import Navbar from '@/app/components/navbar/navbar'
import Image from 'next/image'
import Footer from '@/app/components/footer/footer'
import Featured from '@/app/components/projects/snippets/featured'
import Recent from '@/app/components/projects/snippets/recent'
import Popular from '@/app/components/projects/snippets/popular'
import { useQuery } from '@tanstack/react-query'

type Props = {}

const Code_Snippets = (props: Props) => {

  return (
    <div className='' > 
      <div className='' >
         <Navbar/>
       </div>
       <div className='' >
          <div className='' >
            <Image className='' src='' alt='Project Image Roll' />
          </div>
          <div className='' >
             <div className='' >
                <h1 className='' >Project Description</h1>
                <p className='' > Description...</p>
             </div>
             <div className='' >
                <h1 className='' >Features</h1>
                <p className='' >Description...</p>
             </div>
             <div className='' >
              <div className='' >
                 <h1 className='' >Average Load Time</h1>
                 <div className='' >
                         {/* Load time graphic */}
                 </div>
              </div>
              <div className='' >
                 <h1 className='' >Technology Used</h1>
                 <div className='' >
                         {/*Technology Used graphic */}
                 </div>
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

export default Code_Snippets