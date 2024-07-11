
import React from 'react'
// import PhoneCard from './PhoneCard'
import Phone from './Phone'
import Coupons from './Coupons'
import Footer from '../Components/Footer'
import Copyright from '../Components/Copyright'
import Header1 from '../Components/Header1'
import Navbar from '../Components/Navbar'




function Checkoutpage() {
  return (
<>
    <Header1 />
    <Navbar /> 
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









    {/* <div  className='p-5 justify-center items-center '>
      <Phone/>
    </div>

    <Coupons/> */}








   





<div className='md:flex justify-center '>
  <div>
  <Phone/>
  </div>
  <div>
  <Coupons/>
  </div>
</div>

















    </div>










    <div>
    <Footer/>
    <Copyright/>
    </div>
    
    </>

  
  )
}

export default Checkoutpage