import React from 'react'
import mongo from '../../assets/mongo.png'

function InfoCard(props) {
  return (
    <div className=' '>

   
         {/* <div className=' justify-center items-center m-auto '> */}

     {/* <div className='  '>  */}
        <div className='w-[120px] md:w-[250px] p-5 m-auto  justify-center h-[300px] md:h-[250px]  items-center   pt-10'>

        <div className='md:w-[80px] w-[50px] m-auto'>
          {props.image}
        </div>

        <div className=' ' >
        <p className='font-semibold text-center text-[13px] md:text-[14px] '>{props.cardtitle}</p>
        <p className='text-gray-600 text-center  pt-2 md:text-[18px] text-[13px]'>{props.carddiscription}</p>
        </div>


        {/* </div> */}
        </div>
    {/* </div> */}


       





    </div>
  )
}

export default InfoCard;