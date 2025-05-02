'use client'
import React from 'react'
import { CardDemo } from '../../ui/background-overlay-card'
import { TemplateData } from '../../ui/templates/projects'
type Props = {}

const WebDev = (props: Props) => {
  return (
    <div className='w-full' >
        
        <CardDemo/>
        <TemplateData/>
        </div>
  )
}

export default WebDev