import React from 'react'
import Apple from '../Icons/Apple.png'
import Body from './Main/Body'

function Logo() {
  return (
    <>
    <div className='w-[220px] md:w-[300px] flex'>

      <a href='/' className='flex'>
      <div className='w-5 '>
         <img src={Apple}/>
      </div>
      <p className='font-semibold text-[13px] pl-2 md:text-[20px]'> NATSENT iPhone Store</p> 
      </a>
    </div>
    </>
  )
}

export default Logo