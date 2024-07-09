import React from 'react'
import BrandName from './BrandName'

function header1() {
  return (
    <div className='w-full '>
      <div className='max-w-[1000px] m-auto justify-center items-center space-x-20 flex pt-10'>

<div className='cursor-pointer w-'>
<BrandName/>          
</div>

 <div className='flex'>
  <div>
  <input placeholder='Search' className='border-2 w-[250px] text-[15px] p-1 focus:outline-none'/>
  </div>
    


    <div>
      
    <form action="#" className='border-2 h-[34px] outline-none  '>
     
     <select name="Categories" id="lang" className='focus:outline-none'>
       <option value="Select" >All Categories</option>
       <option value="php" className='focus:outline-none'>iphone 11</option>
       <option value="java">iPhone 12 Pro max</option>
       <option value="golang">iPhone 12</option>
       
     </select>
     <input type="submit" value="0" className='bg-orange-400 py-[4px] px-2'/>
     </form>
    </div>

  
 </div>


<p className='bg-orange-300 px-2 py-[2.5px] text-[13px] font-semibold'>LOGIN/SIGNUP</p>

</div>
    </div>
  )
}

export default header1