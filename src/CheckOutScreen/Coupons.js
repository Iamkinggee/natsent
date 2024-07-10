import React from 'react'
import coupon from '../Icons/coupon.png'

function Coupons() {
  return (
    <div className=' max-w-[1000px]   justify-center items-center m-auto  '>
     
        <div className='m-auto justify-center items-center gap-10  md:w-[510px] w-[410px] py-5 px-2 '>
        {/* <div className='flex m-auto justify-center items-center gap-10 border-b-2 '> */}
    
        
        {/* <div className=' flex  items-center border-2 border-red-400 w-[510px] justify-center  rounded-2xl px-2 md:px-5 md:gap-x-16 '> */}

        <div className='border-2   rounded-2xl '>
        <div className='flex  items-center  justify-center   px-2 md:px-5 md:gap-x-16 '>


        <div >
        <p className='text-[23px] font-semibold ml-10 py-4 '>Coupons</p>


        <div className='flex'>
          <div className='w-[30px] justify-start items-start ml-10 mt-2 '>
          <img src={coupon}/>
          </div>
        <p className='text-[15px] py-2 px-2'>Apply coupons</p>
        </div>
      
        <p className='text-[12px] pb-5 pl-10'>This gives you a 20% off discount</p>
        
        </div>
        <div>
            <button className='text-red-500 border-red-500 border-2 px-8'>Apply</button>
        </div>

        </div>

        {/* price */}


        <div>
            
           
            <div className='w-full'>
            <p className='text-[23px] font-semibold justify-between items-center m-auto w-[300px] py-2 '>Price Details</p>
            <div className='flex justify-between items-center m-auto w-[300px] py-2'>
            

             
             <p>Total</p>
             <p>$800</p>
             </div>

             
             <div className='flex justify-between items-center m-auto w-[300px]  py-2'>
             <p>Discount</p>
             <p className='font-semibold text-green-500'>20%</p>
             </div>

             
             <div className='flex justify-between items-center m-auto w-[300px]  py-2'>
             <p>Coupon Discount</p>
             <p className='text-red-500 font-semibold'>Apply coupon</p>
             </div>

             
             <div className='flex justify-between items-center m-auto w-[300px]  py-2'>
             <p>Total</p>
             <p>$800</p>
             </div>

             <div className='flex justify-between items-center m-auto w-[300px]  py-2'>
             <p>Delivery Charges</p>
             <p className='font-semibold text-green-500'>Free</p>
             </div>


             <div className='flex justify-between items-center m-auto w-[300px] border-t-2 border-b-2 py-2'>
             <p className='font-semibold'>Total</p>
             <p className='font-semibold '>$160</p>
             </div>



             <div className='justify-center items-center m-auto w-[300px] py-20 '>
                <button className='w-full h-[40px] bg-orange-400'>
                    <p className='font-semibold text-white'>Proceed to Checkout</p>
                </button>
             </div>
            
        














             </div>



            </div>
           

             

          
            </div>
        </div>



        
        


        
      
    




    </div>
 
  )
}

export default Coupons