import React from 'react'
import Apple from '../Icons/Apple.png'

function Logo() {
  return (
    <div className='w-[220px] md:w-[300px] flex'>
      <div className='w-5 '> <img src={Apple}/></div>
      <p className='font-semibold text-[18px] pl-2 md:text-[20px]'> NATSENT iPhone Store</p>
    </div>
  )
}

export default Logo