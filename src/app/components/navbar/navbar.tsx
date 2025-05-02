'use client'
import React from 'react'
//import { FloatingDock } from '../ui/floating-dock'
import { FloatingDockDemo } from '../ui/floating-dock-demo'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <div className='flex z-50 md:h-1/2' >
      
     
        <FloatingDockDemo />  {/*  Floating Dock component requires items prop. */}
      </div>
  )
}

export default Navbar