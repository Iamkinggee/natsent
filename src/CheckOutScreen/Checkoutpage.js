
import React from 'react'
// import PhoneCard from './PhoneCard'
import Phone from './Phone'
import Coupons from './Coupons'



function Checkoutpage() {
  return (
    // <div className='w-full'>
    <div className='  w-full justify-center items-center m-auto container'>

    <div  className='p-5 justify-center items-center m-auto container'>
      <Phone/>
    </div>

    <Coupons/>
    </div>
    

  
  )
}

export default Checkoutpage