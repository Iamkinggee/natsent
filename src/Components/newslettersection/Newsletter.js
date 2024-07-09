import React from 'react'
import news from '../../Icons/news.png'
import x from '../../Icons/x.png'
import pin from '../../Icons/pin.png'

function Newsletter() {
  return (

    <div className='bg-green-400 w-full'>
    {/* <div className='  max-w-[1000px]  items-center justify-center m-auto  h-[150px] flex md:grid md:grid-cols md:[1fr_2fr_1fr] '> */}
    <div className='  max-w-[1000px]  items-center justify-center m-auto  h-[300px] grid md:flex'>

   
    <div className='max-w-[1000px] md:flex gap-10'>
        <div className='md:flex justify-center items-center m-auto grid '>
           <div className='md:w-[60px] w-[40px] p-[6px] justify-center items-center m-auto'><img src={news}/></div>
            <p className='font-semibold text-white items-center justify-center pb-10 md:pb-0 m text-center ' >SIGN UP TO <br/> NEWSLETTER</p>
        </div> 

        <div className='w-full justify-center items-center m-auto '> 
            <form>
            <input className='w-[250px] md:w-[500px] h-[50px] p-2' placeholder='Enter Your Email Address'/>
            <input  className='bg-orange-400 p-3 font-semibold h-[50px]' type='SUBMIT'/>
            </form>
        </div>
        
         <div className='w-40 justify-center items-center m-auto flex md:pl-10 md:gap-5 pt-10 md:pt-0'>
        

           
         <div className='bg-white rounded-[50%] md:w-[40px]  w-[45px] p-[8px]  '><img src={pin}/>
         </div>



         <div className='bg-white rounded-[50%]  w-[50px] p-[10px] justify-center items-center m-auto'><img src={x}/>
         </div>
        </div> 
        </div>
        </div>









    </div>
  )
}

export default Newsletter