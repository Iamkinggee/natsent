import React from 'react'
import PhoneCard from './PhoneCard'
import iphone from '../assets/iphone.jpg'

function Phone() {
  return (
    <div className='p-5'>
    {/* // <div className='w-full  h-[350px]  justify-center pt-5 '> */}

       <div>
       <PhoneCard color="Color: black" quantity="1" ram="RAM: 4GB" rom="ROM: 64" image={<img  loading='lazy' src={iphone} alt="Cart" className='  object-contain  p-3  bg-transparent' />} phoneName="iphone 11 pro max"  price="$400" />
       </div>


        <div>
        <PhoneCard color="Color: silver" quantity="1"  ram="RAM: 4GB" rom="ROM: 64" image={<img  loading='lazy' src={iphone} alt="Cart" className='  object-contain  p-3  bg-transparent' />} phoneName="iphone 12 pro max"  price="$100" />
        </div>


     




    </div>
  )
}

export default Phone