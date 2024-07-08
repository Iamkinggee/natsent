import React from 'react'
import mongo from '../../assets/mongo.png'

function InfoCard(props) {
  return (
    <div className=' '>

   
         {/* <div className=' justify-center items-center m-auto '> */}

     {/* <div className='  '>  */}
        <div className=' w-[350px] p-5 m-auto  justify-center h-[250px]  items-center   pt-10'>

        <div className='w-[80px] m-auto'>
          {props.image}
        </div>

        <div className=' ' >
        <p className='font-bold text-center text-[14px] '>{props.cardtitle}</p>
        <p className='text-gray-600 text-center  pt-2 text-[18px]'>{props.carddiscription}</p>
        </div>


        {/* </div> */}
        </div>
    {/* </div> */}


       





    </div>
  )
}

export default InfoCard;