'use client'
import React from 'react'
import Image from 'next/image'

//type Props = {}

const Footer = () => {
  return (
    <div className='flex bg-black text-yellow-600 w-full ' >
        Footer
         <div className='flex justify-between w-3/4 self-center' >
         <div className='' >
            <h1>Julian Borner</h1>
             <p>text...</p>
         </div>
            <div className='' >
                <h1>SOCIAL</h1>
                <div className='flex justify-between' >
                    <Image className='' src='' alt='Socials' />
                    <Image className='' src='' alt='Socials' />
                    <Image className='' src='' alt='Socials' />
                </div>

            </div>

         </div>
         <hr/>
        </div>
  )
}

export default Footer