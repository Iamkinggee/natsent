import React from 'react'
import copy from '../Icons/copy.png'

function Copyright() {
  return (
    <div className='w-full pt-8 pb-10'>
         <hr className='p-3 border-t-[2.5px]'/>
     <div className='max-w-[1000px] justify-center items-center m-auto'>  

    
    <div className='flex text-[13px] md:text-[18px]  gap-2'>
       <div className='w-5 pt-1'>
        <img src={copy}/>
       </div>
       <div>
       COPYRIGHT 2024
       </div>
       
       
       </div>
    </div>
    </div>
  )
}

export default Copyright