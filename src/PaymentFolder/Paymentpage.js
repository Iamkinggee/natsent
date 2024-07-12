
// import React from 'react'
import g from '../Icons/g.png'
import pay from '../Icons/pay.png'
import cardd from '../Icons/cardd.png'
import arrow from '../Icons/arrow.png'
// import { Alert } from 'flowbite-react'

// function Paymentpage() {



//     const Message = ()=>{
//         alert("successful")
//     }


//   return (
//     <div className=' w-full md:bg-white bg-green-500 h-screen '>
   
//         <div className='max-w-[500px]  md:pt-20 pt-[200px]  items-center justify-center m-auto px-4  rounded-2xl  '>
//             <div className='shadow-2xl rounded-2xl  bg-white   md:h-[500px]   h-[505px] w-[400px]  p-5'>

//                 <div className='p-6 '>

//                   <a href='/checkoutpage'>
//                   <div className='gap-5 flex'>
//                         <div className='w-[25px] pt-1'>
//                             <img src={arrow}/>
//                         </div>
//                         <div>
//                         <p className=''>Go back</p>
//                         </div>
//                     </div>
//                   </a>






//                     {/* <p className=''>Go back</p> */}

//                     <div className='pt-6 pb-4'>
//                         <p className='font-semibold text-[20px]'>Payment Method</p>
//                     </div>

//                     <div className=''>
//                         <form className='flex gap-[10px]  '>

                            
//                            <div className='flex'>
//                             <input className='' type='radio' name='pay'/>
            

//                             <div className='w-[80px] px-3 pt-3'>
//                                 <img src={pay}/>
//                             </div>
//                            </div>



//                            <div className='flex'>
//                             <input className='' type='radio'  name='pay'/>
            

//                             <div className='w-[80px] px-3 pt-3'>
//                                 <img src={g}/>
//                             </div>
//                            </div>



//                            <div className='flex'>
//                             <input className='' type='radio'  name='pay' />
            

//                             <div className='w-[60px] px-3'>
//                                 <img src={cardd}/>
//                             </div>
//                            </div>

//                         </form>
//                     </div>

//                     <p className='pt-4 font-semibold text-[20px]'>Payment Details</p>


//                     <div className='py-5'>

//                         <form  className=''>
//                             <input type='text' required placeholder='Enter Name on card' className='border-b-2 w-[300px] focus:outline-none pb-1'/>

//                             <input type='number' required placeholder='Card Number' className='pt-5 pb-1 border-b-2 w-[300px] focus:outline-none'/>

//                             <div className='flex gap-5'>
                                
//                             <input type='number' required placeholder='Expiration' className='  border-b-2 w-[150px] focus:outline-none pt-5 pb-1'/>

                            
//                            <input type='number' required placeholder='CVV' className='pt-5 pb-1 border-b-2 w-[130px] focus:outline-none'/>
//                             </div>

//                             <p className='py-5 text-gray-500 text-center text-[13px]'>By Clicking 'Place Your Order' i agree to the companies terms and conditions.</p>


//                             <div className='w-full px-3 md:px-3'>
//                             <button onClick={Message}  className='bg-yellow-500 m-auto justify-center items-center  p-2 font-semibold text-white w-[300px]'>Place Order</button>
//                             </div>

                        



//                         </form>




//                     </div>







//                 </div>






//             </div>

            





//         </div>
        
        
        
//         </div>
//   )
// }

// export default Paymentpage





























import React, { useState } from 'react';

const Paymentpage = () => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');

  return (
    <div className="flex justify-center items-center p-4 min-h-screen md:bg-white bg-green-500 " >
      <div className="bg-white border-2  rounded-lg  p-8 w-full max-w-md   md:w-[800px] ">  
       <a href='/checkoutpage'>
       <button className="mb-4 text-gray-600">&larr; Go back</button>
       </a>

        <div className='pl-5 py-7'>
        <h2 className=" font-semibold mb-4">Payment Method</h2>
        <div className="flex space-x-4 mb-6">
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="paytm"
              checked={paymentMethod === 'paytm'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className="mr-2"
            />
           
                            <div className='w-[60px] px-3 pt-3'>
                                 <img src={pay}/>
                           </div>




          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="gpay"
              checked={paymentMethod === 'gpay'}
              onChange={(e) => setPaymentMethod(e.target.value)}
              className=""
            />
           


           <div className='w-[60px] px-3'>
                                 <img src={g}/>
                             </div>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="paymentMethod"
              value="creditCard"
              checked={paymentMethod === 'creditCard'}
              onChange={(e) => setPaymentMethod(e.target.value)}
            className=""
            />
           


           <div className='w-[50px] px-3'>
                                 <img src={cardd}/>
                            </div>
          </label>
        </div>
        <h2 className=" font-semibold mb-4">Payment Details</h2>
        <form>
          <div className="mb-4">
    


            <input
              type="text"
              className="md:w-[300px] w-full py-2 focus:outline-none border-b border-gray-300 rounded"
              placeholder="Enter Name on card"
            />
          </div>
          <div className="mb-4">
    
            <input
              type="text"
              className="md:w-[300px] w-full  text-start focus:outline-none py-2 border-b border-gray-300 rounded"
              placeholder="Card Number"
            />
          </div>
          <div className="mb-4 flex space-x-4">
            <div className="w-1/2">
         


              <input
                type="text"
                className="md:w-[120px] w-full py-2 border-b focus:outline-none  border-gray-300 rounded"
                placeholder="Expiration"
              />
            </div>
            <div className="w-1/2">
          


              <input
                type="text"
                className="md:w-[110px] w-full text-start py-2 border-b focus:outline-none border-gray-300 rounded"
                placeholder="CVV"
              />
            </div>
          </div>
          <p className="text-sm text-gray-500 md:w-[300px] w-full  mb-6 text-center">
            By clicking 'Place order' I agree to the company's terms and conditions.
          </p>
          <button className="md:w-[300px] w-full bg-yellow-500 text-white py-2 rounded hover:bg-yellow-600 transition duration-200">
            Place order
          </button>
        </form>
      </div>








    </div>
    
    <div className='bg-green-600 md:h-[560px] md:w-[300px] rounded-r-xl'>

      </div>

    </div>
  );
};

export default Paymentpage;
