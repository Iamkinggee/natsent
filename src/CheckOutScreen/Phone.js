import React from 'react'
import PhoneCard from './PhoneCard'
import iphone from '../assets/iphone.jpg'
import iphone5 from '../assets/iphone5.png'

function Phone() {
  return (
    <div className='max-w-[1000px] px-5 justify-center items-center m-auto'>
    {/* <div className=''> */}
    <div className=''>
    {/* // <div className='w-full  h-[350px]  justify-center pt-5 '> */}

       <div>
       <PhoneCard  
       
       
       
       
       color="Color: black" quantity="1" ram="RAM: 4GB" rom="ROM: 64" image={<img  loading='lazy' src={iphone} alt="Cart" className='  object-contain  p-3  bg-transparent' />} phoneName="iphone 11 pro max"  price="$400" />
       </div>


        <div>
        <PhoneCard color="Color: Light Blue"  ram="RAM: 4GB" rom="ROM: 64" image={<img  loading='lazy' src={iphone5} alt="Cart" className='  object-contain  p-3  bg-transparent' />} phoneName="iphone 12 pro max"  price="$600" />
        </div>
        </div>

     



        </div>
    // </div>
  )
}

export default Phone