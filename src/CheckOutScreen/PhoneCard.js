import React from 'react'
import iphone from '../assets/iphone.jpg'

function PhoneCard(props) {
  return (
    <div className='w-full h-[350px] flex  justify-center pt-5 '>
    <div className='max-w-[1000px] flex space-x-20 items-center border-2 rounded-2xl  p-5 '>


{/* Phone */}
      <div className='w-[370px] px-5  border-2 rounded-2xl justify-center items-center m-auto'>
      <div className='px-5 w-[190px] justify-end '> 
         {/* <img src={iphone}/> */}
         {props.image}
      </div>
      </div>

{/* spec */}
      <div className='w-full  m-auto  h-[400px] pt-9'>
        <div className=''>
        <p className='font-semibold text-[28px]'>{props.phoneName}</p>
        <p className='pt-2 text-[20px] font-semibold '>{props.ram} <span className='pl-5 font-semibold'>{props.rom} </span></p>
        <p className='pt-2 font-semibold'>{props.color}</p>
        <p className='pt-5 font-semibold'>{props.quantity}</p>
        <p className='pt-2 font-bold '>{props.price} | <span className='font-semibold text-green-500 text-[13px]'>20% off</span></p>
        </div>

        <div className='pt-10 flex gap-10'>
          <p className='text-[13px] font-semibold wrap'>14 Days Delivery Period</p>
          <p>0</p>
        </div>
      </div>
      </div>





</div>
  )
}

export default PhoneCard




//     <div className=' border-slate-300 border-r-2'>
{/* <InfoCard   image={<img  loading='lazy' src={Cart} alt="Cart" className='  object-contain  p-3  bg-transparent' />} cardtitle="FREE SHIPPING" carddiscription="Free Shipping on world wide order over $100" />
</div> */}