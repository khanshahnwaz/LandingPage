import React from 'react'
import Header from './Header/Header'
import first from './Assets/first.jpg'
import second from './Assets/Icon.png'

import {BiRightArrowCircle} from 'react-icons/bi'
const IntroPage = () => {
  return (
    <div className=' h-max  py-10 w-full bg-gradient-to-br from-white to-blue-400 grid gap-y-10'>
<Header/>
<div className='mt-10 md:w-[95%] lg:w-[80%] xl:w-[70%] mx-auto flex flex-wrap justify-around gap-x-5'>
    {/* paragraph section */}
    <div className='text-left grid gap-y-3 md:gap-y-2 xl:gap-y-1 w-1/2'>
<div className='flex items-center justify-start gap-x-2 bg-gradient-to-br from-white to-blue-600 w-max h-max p-2'>
    <div className='w-5 h-3 bg-gray-400'></div>
    <div className='tracking-wider text-white'>
    LEADS MANAGEMENT
    </div>
</div>

<div>
    <b className='lg:text-4xl md:text-3xl text-2xl  tracking-wide break-words'>Welcome to your <span className='text-blue-500'>Facebook.</span></b>
</div>

<div>
    <p className='font-sm text-gray-400'>Far far away, behing the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
</div>


<div className="cursor-pointer hover:opacity-60 xl:px-10 xl:py-3 px-4 py-1 md:px-7 md:py-2 text-white bg-blue-800 rounded-md items-center text-center w-max h-max flex gap-x-2">
              <p>Try it Now</p>
<BiRightArrowCircle className=' text-white my-auto'/>
            </div> 

    </div>
    {/* image */}
    <div className=' h-max '>
        <img src={first} className='xl:h-96 lg:h-80 md:h-72 sm:h-48 h-36 rounded-3xl'/>
    </div>
</div>
    </div>
  )
}

export default IntroPage