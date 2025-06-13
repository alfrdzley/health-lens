import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <>
    <div className='flex items-center justify-between px-8 bg-gray-200 h-15 border-b-2 border-gray-400'>
        <div className='flex items-center mt-2'>
          <Image src="/logo-kesehatan.png" alt="Logo" width={150} height={150} className='cursor-pointer' />
        </div>
        
        <Button size={'visit'} className='cursor-pointer hover:px-5'>Try it <Icon icon="ic:sharp-arrow-forward" /></Button>
    </div>
    </>
  )
}

export default Navbar