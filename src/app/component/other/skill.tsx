
import React from 'react'
import card from '@/app/lib/cart'
import { div, h1 } from 'framer-motion/client'
   
 
function skill() {
  return (
    <div className=' text-center'>
       <h1 className='md:text-3xl lg:4xl moto pt-44 pb-36'>My Skill</h1>
    <div className='w-full h-1/2 flex justify-center flex-wrap items-center '>
      <div className=' flex justify-center items-center w-[80vw] gap-16 h-fit bg-amber-300'>
        
            {card.map((name)=>(
              <div>
               <div className='w-40 h-40 px-4 py-5 gap-y-4 bg-neutral-900 grid items-center justify-center rounded-sm'>
          <i className='rounded-full bg-bg w-fit px-2 py-6  shadow-purple-400 shadow-[0px_0px_8px]  hover:shadow-white'>BootsRap</i>
          <span>BootsRap</span>
              </div>
            </div>
            ))}
          
        </div>
      </div>
    </div>
  
  )
}

export default skill
