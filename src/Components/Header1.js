import React from 'react'
import BrandName from './BrandName'

function header1() {
  return (
    <div className='w-full '>
      <div className='max-w-[1000px] m-auto justify-center items-center gap-40 flex pt-10'>

<div className='cursor-pointer'>
<BrandName/>          
</div>
 <div className=''>
    <input placeholder='Iphone 11 pro max' className='border-2 w-[250px] text-[15px] p-1'/>
    <input placeholder='All Category'  className='border-2 w-[200px] text-[15px] p-1'/>
 </div>




</div>
    </div>
  )
}

export default header1