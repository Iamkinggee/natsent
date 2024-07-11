import React from 'react'

function pagination() {
  return (
    <div className='flex max-w-[1000px] justify-center items-center m-auto py-16 gap-3'>

        <div className='border w-10 h-10 hover:bg-black hover:text-white '>
            <p className='text-center justify-center items-center pt-2 cursor-pointer font-semibold'>1</p>
        </div>
        <div className='border w-10 h-10 hover:bg-black hover:text-white '>
            <p className='text-center justify-center items-center pt-2 cursor-pointer font-semibold'>2</p>
        </div>
        <div className='border w-10 h-10 hover:bg-black hover:text-white '>
            <p className='text-center justify-center items-center pt-2 cursor-pointer font-semibold'>3</p>
        </div>
        <div className='border w-10 h-10 hover:bg-black hover:text-white '>
            <p className='text-center justify-center items-center pt-2 cursor-pointer font-semibold'>4</p>
        </div>




       
    </div>
  )
}

export default pagination