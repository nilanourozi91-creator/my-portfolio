'use client'
import Link from 'next/link';
import React, { useState } from 'react'

function navbar() {
   const [value,setvalue]=useState(false);
  return (
    <div className='fixed  z-50 left-auto top-0 h-24 flex w-full '>
      <nav className=' flex h-full px-5 w-full bg justify-between items-center border-b-2 border-white backdrop-blur-3xl'>
         <div className='sm:text-xl md:text-xl lg:text-2xl'>
        <h1> kaniz reza nourozi</h1>
         </div>
         <div className=' flex  md:gap-x-16 lg:gap-x-24  font-stretch-50%'>
          <Link className='hover:text-purple-500'  href='/'>Home</Link>
          <Link className='hover:text-purple-500' href='/about'>About</Link>
          <Link className='hover:text-purple-500' href='/contact'>Cantact</Link>
          <Link className='hover:text-purple-500' href='/skill'>Skill</Link>
         </div>
      </nav>
    </div>
  )
}

export default navbar
