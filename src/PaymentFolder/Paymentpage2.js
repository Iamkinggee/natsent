// import React from 'react'
// import Paymentpage from '../PaymentFolder/Paymentpage'

// function  Paymentpage2() {
//   return (
//             <div className='w-full'>
//                <div className='max-w-[1000px] justify-center items-center m-auto  grid md:grid-cols-3'>

//                 <div className='col-span-2 '>
//                     <Paymentpage/>

//                 </div>

//                 <div className='bg-red-700 h-full'>
//                     card here

//                 </div>


//                 </div>
//             </div>
 
//   )
// }

// export default Paymentpage2










import React from 'react'
import Paymentpage from '../PaymentFolder/Paymentpage'

function  Paymentpage2() {
  return (
            <div className='w-full md:bg-white bg-green-500'>
            
               <div className='max-w-[800px] justify-center items-center m-auto   grid md:grid-cols-3  '>
              

                <div className='col-span-2  '>
                    <Paymentpage/>

                </div>

                <div className=' md:bg-green-500 md:h-[500px] items-center justify-center shadow-xl rounded-r-2xl  '>
                  

                </div>


                </div>
        
            </div>
 
  )
}

export default Paymentpage2