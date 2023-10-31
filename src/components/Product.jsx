import React from 'react'
import first from './Assets/Mask group.png'
import second from './Assets/Icon.png'
import third from './Assets/Group 59.png'
import forth from './Assets/Group 10.png'
import fifth from './Assets/Group 9.png'
import sixth from './Assets/Frame.png'
import line from './Assets/Vector 34.png'
import cloud from './Assets/Vector.png'
import singleLeaf from './Assets/--Plant--inject-279.png'
import { BiRightArrowCircle } from 'react-icons/bi'
const Product = () => {
  return (
    <div className='md:w-[95%] lg:w-[80%] xl:w-[70%] mx-auto my-10'>
    {/* statenent */}
<div className='my-10 relative overflow-clip h-[30vh]'>
    <p className='relative top-10 text-blue-500 lg:text-3xl text-2xl xl:text-4xl font-bold tracking-wide   break-words mx-auto text-center'>Why Choose Our  Wxyz <br/>Management Sfotware</p>
    <div className='absolute top-1'>
        <img alt='loading'  src={cloud}/>
    </div>
    <div className='absolute top-1 right-0'>
        <img alt='loading' src={cloud}/>
    </div>
    
    <div className='absolute -right-10 bottom-0'>
        <img alt='loading' src={cloud}/>
    </div>
    <div className='absolute right-1/3 bottom-0'>
        <img alt='loading' src={cloud}/>
    </div>
    <div className='absolute bottom-3 left-16'>
        <img alt='loading' src={cloud}/>
    </div>
    <div className='absolute left-1/3 bottom-0'>
        <img alt='loading' src={cloud}/>
    </div>
</div>


    <div  style={{backgroundImage: `url('${line}')`}} className={" grid gap-y-32 bg-cover mx-2"}>


{/* first */}
<div className='flex  justify-between mx-auto   gap-x-10 relative overflow-clip'>
<div className='w-1/2 my-auto'>
    <h2 className='text-blue-500 font-bold text-2xl'>Teamwork Made Easier</h2>
    <p className='text-left'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti optio nemo voluptate perferendis iusto temporibus, dolores itaque nesciunt facere quae ipsum mollitia quaerat recusandae repellat ullam praesentium ea cupiditate enim.
    </p>
</div>
<div className=' my-auto '>
  <img alt='loading' src={first} className='h-60 '/> 
</div>

</div>
{/* second */}
<div className='flex justify-between mx-auto  gap-x-10 relative overflow-clip'>
<div className=' my-auto '>
  <img alt='loading' src={second} className='h-48 '/> 
</div>
<div className='w-1/2 my-auto'>
    <h2 className='text-blue-500 font-bold text-2xl'>Budget Friendly</h2>
    <p className='text-left'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti optio nemo voluptate perferendis iusto temporibus, dolores itaque nesciunt facere quae ipsum mollitia quaerat recusandae repellat ullam praesentium ea cupiditate enim.
    </p>
</div>

</div>

{/* third */}
<div className='flex justify-between mx-auto  gap-x-10 relative oveflow-clip'>
<div className='w-1/2 my-auto'>
    <h2 className='text-blue-500 font-bold text-2xl'>Higher sales productivity from all your teams</h2>
    <p className='text-left'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti optio nemo voluptate perferendis iusto temporibus, dolores itaque nesciunt facere quae ipsum mollitia quaerat recusandae repellat ullam praesentium ea cupiditate enim.
    </p>
</div>
<div className='my-auto '>
  <img alt='loading' src={third} className='h-48 '/> 
</div>
<img alt='loading' src={singleLeaf} className='absolute -bottom-1/2  -left-10 rotate-90 -translate-x-5 '/>
<img alt='loading' src={singleLeaf} className='absolute -bottom-1/4  -left-10 rotate-90  '/>

</div>

{/* fourth */}
<div className='flex justify-between mx-auto  gap-x-10 relative overflow-clip'>
<div className=' my-auto '>
  <img alt='loading' src={forth} className='h-48 '/> 
</div>
<div className='w-1/2 my-auto'>
    <h2 className='text-blue-500 font-bold text-2xl'>Grow as Your Business Grows</h2>
    <p className='text-left'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti optio nemo voluptate perferendis iusto temporibus, dolores itaque nesciunt facere quae ipsum mollitia quaerat recusandae repellat ullam praesentium ea cupiditate enim.
    </p>
</div>

</div>
{/* fifth */}
<div className='flex justify-between mx-auto  gap-x-10 relative overflow-clip'>
<div className='w-1/2 my-auto'>
    <h2 className='text-blue-500 font-bold text-2xl'>From leads to successful sales</h2>
    <p className='text-left'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti optio nemo voluptate perferendis iusto temporibus, dolores itaque nesciunt facere quae ipsum mollitia quaerat recusandae repellat ullam praesentium ea cupiditate enim.
    </p>
</div>
<div className=' my-auto '>
  <img alt='loading' src={fifth} className='h-48 '/> 
</div>
<img alt='loading' src={singleLeaf} className='absolute -bottom-1/2  -left-10 rotate-90'/>
<img alt='loading' src={singleLeaf} className='absolute -bottom-1/4  -left-10 rotate-90'/>

</div>
{/* sixth */}
<div className='flex justify-between mx-auto  gap-x-10 relative overflow-clip'>
<div className=' my-auto '>
  <img alt='loading' src={sixth} className='h-48 '/> 
</div>
<div className='w-1/2 my-auto '>
    <h2 className='text-blue-500 font-bold text-2xl'>Best support which you desire for</h2>
    <p className='text-left'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti optio nemo voluptate perferendis iusto temporibus, dolores itaque nesciunt facere quae ipsum mollitia quaerat recusandae repellat ullam praesentium ea cupiditate enim.
    </p>
   
</div>
<img alt='loading' src={singleLeaf} className='absolute right-0 -bottom-1/2'/>
</div>
    </div>
    <div className="my-10 cursor-pointer hover:opacity-60 xl:px-10 xl:py-3 px-4 py-1 md:px-7 md:py-2 text-white bg-blue-800 rounded-md mx-auto  w-max h-max flex gap-x-2">
              <p>Try it Now</p>
<BiRightArrowCircle className=' text-white my-auto'/>
            </div> 
    </div>
  )
}

export default Product