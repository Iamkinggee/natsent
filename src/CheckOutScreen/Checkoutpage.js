
import React from 'react'
// import PhoneCard from './PhoneCard'
import Phone from './Phone'
import Coupons from './Coupons'




function Checkoutpage() {
  return (
<>
    <div className='  w-full justify-center items-center border'>


    <div className='w-full '>
        <div className='max-w-[1000px] m-auto '>
        <p className='text-[18px] md:text-[25px]  pt-7 pl-10 font-semibold '>
        Products Details
        </p>

        <div className='p-7 '>
        <hr  />
        </div>
        </div>
      
        
    </div>









    <div  className='p-5 justify-center items-center '>
      <Phone/>
    </div>

    <Coupons/>
    </div>
    </>

  
  )
}

export default Checkoutpage