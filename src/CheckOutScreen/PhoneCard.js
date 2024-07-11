import React from 'react'
import iphone from '../assets/iphone.jpg'
// import bin from '../assets/bin.png'
import bin from '../Icons/bin.png'

function PhoneCard(props) {
  return (
    // <div className='max-w-[1000px] border-2  md:py-5 px-10 py-5  '>
    // <div className=' w-[490px] h-[330px] md:h-[330px] flex  justify-center  pt-5 m-auto '>
    // <div className=' flex  items-center border-2 rounded-2xl  p-5 gap-x-16 '>


<>
    <div className='max-w-[1000px]   justify-center items-center m-auto border-b-2 md:-mt-5 '>
    <div className=' flex m-auto justify-center items-center md:py-0  py-2 md:h-[390px] '>
    <div className=' flex  items-center border-2  w-[500px] justify-center  rounded-2xl px-2 md:px-5 md:gap-x-16 md:h-[300px] '>


{/* Phone */}
      <div className='w-[250px]  border-2 rounded-2xl justify-center items-center m-auto'>
      <div className='px-5  w-[190px] justify-end '> 
         {/* <img src={iphone}/> */}
         {props.image}
      </div>
      </div>

{/* spec */}
      <div className='w-full  m-auto h-[300px]  md:h-[370px] pt-9'>
        <div className=''>
        <p className='font-semibold px-5 text-[14px]'>{props.phoneName}</p>
        <p className='pt-2 text-[15px] px-5   '>{props.ram} <span className='pl-3 '>{props.rom} </span></p>
        <p className='pt-2 font-semibold px-5 '>{props.color}</p>
        

        <div className='pl-4 pt-4'>
          
        <form action='#' className='w-[100px] flex items-center border-2 h-[34px] outline-none'>
                <select name='Categories' id='lang' className='focus:outline-none border-none'>
                  <option className='bg-gray-400'>Qty</option>
                  <option >1</option>
                  <option >2 </option>
                  <option >3</option>
                  <option >4</option>
                  <option >5</option>
                
                </select>
       
                </form>
        </div>




        <p className='pt-2 font-semibold px-5  '>{props.price} | <span className='font-semibold text-green-500 text-[13px]'>20% off</span></p>
        </div>

        <div className='pt-10 flex '>
          <p className='text-[11px]  wrap px-5 '>14 Days Delivery Period</p>



          <div className='w-5'>
            <img src={bin}/></div>
        </div>
      </div>
      </div>
      </div>





</div>
</>
  )
}

export default PhoneCard



