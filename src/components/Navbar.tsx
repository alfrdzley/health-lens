import React from 'react'
import { Button } from './ui/button'


const Navbar = () => {
  return (
    <>
    <div className='flex items-center justify-around'>
        <Button>Try it <i className="fi fi-sr-arrow-circle-right"/></Button>
    </div>
    </>
  )
}

export default Navbar