// import React from 'react'
// import BrandName from '../Components/BrandName'

// function Checkoutpage() {
//   return (
//     <div className='w-full max-w-[1000px] items-center m-auto pt-10 p-5'>
//         <div className=' flex justify-between '>
//         <div className=''>
//             <BrandName/>
//         </div>

//         <div>
//             <p className='font-semibold text-[13px] bg-orange-400 p-2'>LOGIN/SIGN-UP</p>
//         </div>
//         </div>


// {/* \\nav */}
//         <div className='flex justify-between'>

//             <div className='flex gap-8'>
//                 <p>DEPARTMENTS</p>
//                 <p>0</p>
//             </div>
  

  
//            <div>
//             0
//            </div>







//         </div>



        
      








//     </div>
//   )
// }

// export default Checkoutpage






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