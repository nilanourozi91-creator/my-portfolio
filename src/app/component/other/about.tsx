import Image from 'next/image'
import React from 'react'

function about() {
  return (
    <div className=' grid grid-cols-2  w-full h-fit pt-20'>
      <div className='col-span-1 h-[40vh] w-[40vw] pl-32  ring-offset-sky-600'>
       <Image src='/img-1.png' alt='myImg' width={1000} height={1000} className='rounded-full hover:border-2 border-purple-600 '></Image>
      </div>
      <div className='col-span-1'>
         <h1 className='md:text-3xl lg:4xl moto'>About Me</h1>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad distinctio sunt eaque, nisi, perferendis atque corporis soluta delectus quisquam rerum omnis ut vel, earum provident maiores laudantium eos non? At.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad distinctio sunt eaque, nisi, perferendis atque corporis soluta delectus quisquam rerum omnis ut vel, earum provident maiores laudantium eos non? At.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad distinctio sunt eaque, nisi, perferendis atque corporis soluta delectus quisquam rerum omnis ut vel, earum provident maiores laudantium eos non? At.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad distinctio sunt eaque, nisi, perferendis atque corporis soluta delectus quisquam rerum omnis ut vel, earum provident maiores laudantium eos non? At.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad distinctio sunt eaque, nisi, perferendis atque corporis soluta delectus quisquam rerum omnis ut vel, earum provident maiores laudantium eos non? At.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad distinctio sunt eaque, nisi, perferendis atque corporis soluta delectus quisquam rerum omnis ut vel, earum provident maiores laudantium eos non? At.</p>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad distinctio sunt eaque, nisi, perferendis atque corporis soluta delectus quisquam rerum omnis ut vel, earum provident maiores laudantium eos non? At.</p>
          <div className=' w-full flex gap-x-12 justify-center pt-7'>
          <button className=' bg-purple-600 px-4 py-2 hover:cursor-pointer backdrop-blur-3xl hover:shadow-white hover:shadow-[0px_0px_10px_red] rounded-xl'>Contact Me</button>
          <button className='px-5 hover:shadow-taupe-600 hover:shadow-[0px_0px_10px_white] backdrop-blur-3xl rounded-xl py-3'>Socail Media</button>
          <button className='px-5 hover:shadow-white hover:shadow-[0px_0px_10px_white] backdrop-blur-3xl rounded-xl py-3'>Chat Now </button>
          </div>
      </div>
    </div>
  )
}

export default about
