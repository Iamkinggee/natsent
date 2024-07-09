import React from 'react'
import yellowstar from '../Icons/yellowstar.png'
import whitestar from '../Icons/whitestar.png'

function Rating() {
  return (
    <div className='flex  w-[110px] justify-center items-center m-auto'>
        <div><img src={yellowstar}/></div>
        <div><img src={yellowstar}/></div>
        <div><img src={yellowstar}/></div>
        <div><img src={yellowstar}/></div>
        <div><img src={whitestar}/></div>

    </div>
  )
}

export default Rating