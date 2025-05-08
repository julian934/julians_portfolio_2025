'use client'
import React from 'react'
//import Navbar from '../components/navbar/navbar'
import ContactForm from '../components/contact/contact'
import Footer from '../components/footer/footer'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='space-y-36 bg-white h-full' >
        
        <div className='' >
        
        </div>
        <div className='  ' >
            <h1 className='flex justify-center text-3xl text-black ' >If you want to work together, contact me!</h1>
          <ContactForm/>
        </div>
        <div className='flex' >
            <Footer/>
        </div>
        </div>
  )
}

export default Contact