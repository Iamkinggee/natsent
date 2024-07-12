// import React from 'react'
// import iphone from '../assets/iphone.jpg'
// // import bin from '../assets/bin.png'
// import bin from '../Icons/bin.png'

// function PhoneCard(props) {
//   return (


// <>
//     <div className='max-w-[1000px]   justify-center items-center m-auto border-b-2 md:-mt-5 '>
//     <div className=' flex m-auto justify-center items-center md:py-0  py-2 md:h-[390px] '>
//     <div className=' flex  items-center border-2  w-[350px] justify-center  rounded-2xl px-2 md:px-5 md:gap-x-16 md:h-[300px] '>


// {/* Phone */}
//       <div className='w-[250px]  border-2 rounded-2xl justify-center items-center m-auto'>
//       <div className='px-5  w-[190px] justify-end '> 
  
//          {props.image}
//       </div>
//       </div>

// {/* spec */}
//       <div className='w-full  m-auto h-[300px]  md:h-[370px] pt-9'>
//         <div className=''>
//         <p className='font-semibold px-5 text-[14px]'>{props.phoneName}</p>
//         <p className='pt-2 text-[15px] px-5   '>{props.ram} <span className='pl-3 '>{props.rom} </span></p>
//         <p className='pt-2 font-semibold px-5 '>{props.color}</p>
        

//         <div className='pl-4 pt-4'>
          
//         <form action='#' className='w-[100px] flex items-center border-2 h-[34px] outline-none'>
//                 <select name='Categories' id='lang' className='focus:outline-none border-none'>
//                   <option className='bg-gray-400'>Qty</option>
//                   <option >1</option>
//                   <option >2 </option>
//                   <option >3</option>
//                   <option >4</option>
//                   <option >5</option>
                
//                 </select>
       
//                 </form>
//         </div>




//         <p className='pt-2 font-semibold px-5  '>{props.price} | <span className='font-semibold text-green-500 text-[13px]'>20% off</span></p>
//         </div>

//         <div className='pt-10 flex '>
//           <p className='text-[11px]  wrap px-5 '>14 Days Delivery Period</p>



//           <div className='w-5'>
//             <img src={bin}/></div>
//         </div>
//       </div>
//       </div>
//       </div>





// </div>
// </>
//   )
// }

// export default PhoneCard










import React from 'react'
import iphone from '../assets/iphone.jpg'
// import bin from '../assets/bin.png'
import bin from '../Icons/bin.png'

function PhoneCard(props) {
  return (


<>
    <div className='max-w-[1000px]   justify-center items-center m-auto border-b-2 md:-mt-5 '>
    <div className=' flex m-auto justify-center items-center md:py-0  py-2 md:h-[390px] '>
    <div className=' flex  items-center border-2  w-[350px] justify-center  rounded-2xl px-2 md:px-5  md:h-[300px] md:gap-x-0 md:w-full'>


{/* Phone */}
      <div className='w-[250px]  border-2 rounded-2xl justify-center items-center m-auto'>
      <div className='px-5  w-[170px] justify-end '> 
  
         {props.image}
      </div>
      </div>

{/* spec */}
      <div className='w-full  m-auto h-[300px]  md:h-[370px] pt-9'>
        <div >
        <p className='font-semibold px-5 text-[14px] md:text-[20px] md:ml-10'>{props.phoneName}</p>
        <p className='pt-2 text-[12px] px-5 md:ml-10   '>{props.ram} <span className='pl-3 '>{props.rom} </span></p>
        <p className='pt-2 text-[13px] px-5 md:ml-10'>{props.color}</p>
        

        <div className='pl-4 pt-4 md:ml-10'>
          
        <form action='#' className='w-[80px] flex items-center border text-[13px] px-2 h-[24px] outline-none'>
                <select name='Categories' id='lang' className='focus:outline-none border-none '>
                  <option className='bg-gray-400'>Qty : </option>
                  <option >1</option>
                  <option >2 </option>
                  <option >3</option>
                  <option >4</option>
                  <option >5</option>
                
                </select>
       
                </form>
        </div>




        <p className='py-4 font-semibold px-5 md:ml-10 '>{props.price} | <span className='font-semibold text-green-500 text-[13px]'>20% off</span></p>
        </div>

        <div className='py-10 flex md:ml-10'>
          <p className='text-[11px]  px-3 w-full '>14 Days Delivery Period</p>



          <div className='w-4'>
            <img src={bin}/></div>
        </div>
      </div>
      </div>
      </div>





</div>
</>
  )
}

export default PhoneCard



