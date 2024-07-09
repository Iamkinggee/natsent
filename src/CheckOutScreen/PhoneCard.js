import React from 'react'
import iphone from '../assets/iphone.jpg'
// import bin from '../assets/bin.png'
import bin from '../Icons/bin.png'

function PhoneCard(props) {
  return (
    <div className=' w-full h-[330px] md:h-[330px] flex  justify-center  pt-5 m-auto '>
    <div className=' flex  items-center border-2 rounded-2xl  p-5 gap-x-16 '>


{/* Phone */}
      <div className='w-[300px]   border-2 rounded-2xl justify-center items-center m-auto'>
      <div className='px-5  w-[190px] justify-end '> 
         {/* <img src={iphone}/> */}
         {props.image}
      </div>
      </div>

{/* spec */}
      <div className='w-full  m-auto h-[300px]  md:h-[370px] pt-9'>
        <div className=''>
        <p className='font-semibold text-[22px]'>{props.phoneName}</p>
        <p className='pt-2 text-[15px]  '>{props.ram} <span className='pl-3 '>{props.rom} </span></p>
        <p className='pt-2 font-semibold'>{props.color}</p>
        <p className='pt-5 font-semibold'>{props.quantity}</p>
        <p className='pt-2 font-semibold '>{props.price} | <span className='font-semibold text-green-500 text-[13px]'>20% off</span></p>
        </div>

        <div className='pt-10 flex gap-10'>
          <p className='text-[13px]  wrap'>14 Days Delivery Period</p>



          <div className='w-5'>
            <img src={bin}/></div>
        </div>
      </div>
      </div>





</div>
  )
}

export default PhoneCard



