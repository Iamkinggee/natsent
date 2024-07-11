import React from 'react'
import InfoCard from './InfoCard'
import Cart from '../../Icons/Cart.png'
import Card from '../../Icons/Card.png'
import Shield from '../../Icons/Shield.png'
import customercare from '../../Icons/customercare.png'

function Info() {
  return (

    <div className='w-full mt-7 '>
    {/* <div className=''> */}

      <div className='  justify-center items-center m-auto  md:flex  grid-cols-2 max-w-[1000px] '>
     
        <div className=' border-slate-300 border-r-2'>
        <InfoCard   image={<img  loading='lazy' src={Cart} alt="Cart" className='  object-contain  p-3  bg-transparent' />} cardtitle="FREE SHIPPING" carddiscription="Free Shipping on world wide order over $100" />
        </div>

        <div className=' border-slate-300 border-r-2'>
          
        <InfoCard  image={<img  loading='lazy' src={Card} alt="Card" className='  object-contain  p-3  bg-transparent' />} cardtitle="SECURED PAYMENTS" carddiscription="Fast & secured payment system."/>
        </div>


        <div className=' border-slate-300 border-r-2'>
        <InfoCard image={<img  loading='lazy' src={Shield} alt="Shield" className='  object-contain  p-3  bg-transparent' />}  cardtitle="TRUSTED PAY" carddiscription="Fast & secured payment system"/>

        </div>


        <div>
        <InfoCard image={<img  loading='lazy' src={customercare} alt="Shield" className='  object-contain  p-3  bg-transparent' />}   cardtitle="RELIABLE CUSTOMER CARE" carddiscription="Free Shipping on world wide order over $100"/>

        </div>

            
       

       
{/* 
      </div> */}


    </div>
    </div>
  )
}

export default Info












