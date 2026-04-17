
import Image from 'next/image'
import React from 'react'

function banner() {
  return (
    <div>
      <div className=' left-auto pt-6 h-screen w-full flex justify-center items-center'>
        <div className='pt-20'>
              <Image
                className="h-[74vh] group w-[74vh] rounded-full bordernew border-purple-900  shadow-purple-400 shadow-[0px_0px_50px] hover:shadow-white"
                src='/img-2.png'
                alt="myimg"
                width={1000}
                height={1000}
                priority />
        </div>
        <div className=' absolute bottom-16 left-auto w-[80vw] text-center text-wrap ' >
            <h1 className='sm:text-2xl  md:text-4xl lg:text-6xl pb-2 moto'> kaniz reza nourozi Full Stack Developer</h1>
            <h1 className=' pb-6 sm:text-2xl md:text-4xl lg:text-6xl'></h1>
            <p className='sm:text-sm lg:text-xl text-wrap moto'>Hi i am kaniz reza nourozi i am a full stack developer and a good Acounter, somtimes work on mobil app and know four languges parsion korean english pashoto.<br/> I try to be my best version of my self</p>
            <div className=' w-full flex gap-x-12 justify-center pt-7'>
            <button className=' bg-purple-600 px-4 py-2 hover:cursor-pointer backdrop-blur-3xl hover:shadow-white hover:shadow-[0px_0px_10px_red] rounded-xl'>Contact Me</button>
            <button className='px-5 hover:shadow-taupe-600 hover:shadow-[0px_0px_10px_white] backdrop-blur-3xl rounded-xl py-3'>Socail Media</button>
            <button className='px-5 hover:shadow-white hover:shadow-[0px_0px_10px_white] backdrop-blur-3xl rounded-xl py-3'>Chat Now </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default banner
