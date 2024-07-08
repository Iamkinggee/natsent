import React from 'react'

function Newsletter() {
  return (
    <div className=' w-full bg-green-400 items-center justify-center m-auto  h-[150px] grid grid-cols [1fr_2fr_1fr] '>

   
    <div className='max-w-[1000px]  flex gap-10'>
        <div>
            <p className='font-semibold text-white items-center justify-center pr-10 ' >SIGN UP TO <br/> NEWSLETTER</p>
        </div>

        <div>
            <form>
            <input className='w-[500px] h-[50px] p-2' placeholder='Enter Your Email Address'/>
            <input  className='bg-orange-400 p-3 font-semibold h-[50px]' type='SUBMIT'/>
            </form>
        </div>
        
        <div className='flex pl-10'>
            <p>0</p>
            <p>0</p>
        </div>
        </div>









    </div>
  )
}

export default Newsletter