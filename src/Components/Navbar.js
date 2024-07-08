import React from 'react'

function Navbar() {
  return (
 <div className='w-full bg-green-500 '>
       <div className='max-w-[1000px] flex gap-5  p-4 justify-center m-auto mt-7 text-[14px] font-semibold'>
        <div className='flex gap-x-16 bg-orange-300 '>
            <p className=' '>DEPARTMENT</p>
            <p>0</p>
        </div>


    <div className='flex gap-40'>
    <nav>
        <ul  className='flex gap-10 text-white cursor-pointer'>
            <li>HOME</li>
            <li>SHOP</li>
            <li>FEATURES</li>
            <li>BLOG</li>
        </ul>
    </nav>

    <div>
        <p className='text-white'>CALL US FREE <span className='bg-orange-300 px-4  text-black p-1'>0901234567</span></p>
    </div>
    </div>



</div>
 </div>
  )
}

export default Navbar