import React from 'react'

function Coupons() {
  return (
    <div className='border w-[500px] justify-center items-center m-auto rounded-2xl'>
     
        <div className='flex m-auto justify-center items-center gap-10 border-b-2'>
        
        <div>
        <p className='text-[23px] font-semibold '>Coupons</p>
        <p className='text-[15px] py-2'>Apply coupons</p>
        <p className='text-[12px] pb-5'>This gives you a 20% off discount</p>
        
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
  )
}

export default Coupons