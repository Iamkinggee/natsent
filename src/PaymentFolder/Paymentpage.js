// import React from 'react'
// import g from '../Icons/g.png'
// import pay from '../Icons/pay.png'
// import cardd from '../Icons/cardd.png'
// import arrow from '../Icons/arrow.png'

// function Paymentpage() {
//   return (
//     <div className='bg-green-600 h-screen w-full'>
//         <div className='max-w-[500px] md:pt-20 pt-[200px]  items-center justify-center m-auto px-4'>
//             <div className=' shadow-xl bg-white  rounded-xl   h-[500px] w-[400px]'>

//                 <div className='p-6'>

//                   <a href='checkout'>
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

//                         <form className=''>
//                             <input type='text' placeholder='Enter Name on card' className='border-b-2 w-[300px] focus:outline-none pb-1'/>

//                             <input type='text' placeholder='Card Number' className='pt-5 pb-1 border-b-2 w-[300px] focus:outline-none'/>

//                             <div className='flex gap-5'>
                                
//                             <input type='text' placeholder='Expiration' className='  border-b-2 w-[150px] focus:outline-none pt-5 pb-1'/>

                            
//                            <input type='text' placeholder='CVV' className='pt-5 pb-1 border-b-2 w-[130px] focus:outline-none'/>
//                             </div>

//                             <p className='py-5 text-gray-500 text-center text-[13px]'>By Clicking 'Place Your Order' i agree to the companies terms and conditions.</p>


//                             <div className='w-full px-3 md:px-3'>
//                             <button className='bg-yellow-500 m-auto justify-center items-center  p-2 font-semibold text-white w-[300px]'>Place Order</button>
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



















import React from 'react'
import g from '../Icons/g.png'
import pay from '../Icons/pay.png'
import cardd from '../Icons/cardd.png'
import arrow from '../Icons/arrow.png'

function Paymentpage() {
  return (
    <div className='md:bg-white rounded-2xl bg-green-600 h-screen w-full'>
        <div className='max-w-[500px]  md:pt-20 pt-[200px]  items-center justify-center m-auto px-4'>
            <div className=' shadow-xl  bg-white  rounded-xl md: md:h-[500px]   h-[500px] w-[400px]'>

                <div className='p-6 '>

                  <a href='checkout'>
                  <div className='gap-5 flex'>
                        <div className='w-[25px] pt-1'>
                            <img src={arrow}/>
                        </div>
                        <div>
                        <p className=''>Go back</p>
                        </div>
                    </div>
                  </a>






                    {/* <p className=''>Go back</p> */}

                    <div className='pt-6 pb-4'>
                        <p className='font-semibold text-[20px]'>Payment Method</p>
                    </div>

                    <div className=''>
                        <form className='flex gap-[10px]  '>

                            
                           <div className='flex'>
                            <input className='' type='radio' name='pay'/>
            

                            <div className='w-[80px] px-3 pt-3'>
                                <img src={pay}/>
                            </div>
                           </div>



                           <div className='flex'>
                            <input className='' type='radio'  name='pay'/>
            

                            <div className='w-[80px] px-3 pt-3'>
                                <img src={g}/>
                            </div>
                           </div>



                           <div className='flex'>
                            <input className='' type='radio'  name='pay' />
            

                            <div className='w-[60px] px-3'>
                                <img src={cardd}/>
                            </div>
                           </div>

                        </form>
                    </div>

                    <p className='pt-4 font-semibold text-[20px]'>Payment Details</p>


                    <div className='py-5'>

                        <form className=''>
                            <input type='text' placeholder='Enter Name on card' className='border-b-2 w-[300px] focus:outline-none pb-1'/>

                            <input type='text' placeholder='Card Number' className='pt-5 pb-1 border-b-2 w-[300px] focus:outline-none'/>

                            <div className='flex gap-5'>
                                
                            <input type='text' placeholder='Expiration' className='  border-b-2 w-[150px] focus:outline-none pt-5 pb-1'/>

                            
                           <input type='text' placeholder='CVV' className='pt-5 pb-1 border-b-2 w-[130px] focus:outline-none'/>
                            </div>

                            <p className='py-5 text-gray-500 text-center text-[13px]'>By Clicking 'Place Your Order' i agree to the companies terms and conditions.</p>


                            <div className='w-full px-3 md:px-3'>
                            <button className='bg-yellow-500 m-auto justify-center items-center  p-2 font-semibold text-white w-[300px]'>Place Order</button>
                            </div>





                        </form>




                    </div>







                </div>






            </div>

            





        </div>
        
        
        
        </div>
  )
}

export default Paymentpage