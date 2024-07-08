import React from 'react'
import BrandName from './BrandName'

function Footer() {
  return (

    <div className='w-full '>

  
    <div className='max-w-[1000px] gap-10 justify-center items-center m-auto grid grid-cols-[2fr_1fr_1fr_1fr] mt-16'>
        <div>
            <p className='pb-5'><BrandName/></p>
            <p className=''>many say exploration i part of our destiny it is actually our future.</p>
            <p>Address: B1, Fake Street,  Nigeria.</p>
            <p className='pt-3'> Phone: 0901234567</p>
            <p className='pt-3'>Email: info@natsent@gmail.com</p>
        </div>
        <div>
            <p className='font-bold pb-4'>COMPANY</p>
            <ul className='text-black'>
                <li >Orders</li>
                <li className='pt-3 cursor-pointer'>Advanced Search</li>
                <li className='pt-3 cursor-pointer'>Help and FAQs</li>
                <li className='pt-3 cursor-pointer'>Consultants</li>
                <li className='pt-3 cursor-pointer'>Store Locations</li>
             </ul>

        </div>
        <div>
            <p className='font-bold pb-4'>POLICY INFO</p>
             <ul className='text-black'>
                <li >Orders</li>
                <li className='pt-3 cursor-pointer'>Advanced Search</li>
                <li className='pt-3 cursor-pointer'>Help and FAQs</li>
                <li className='pt-3 cursor-pointer'>Consultants</li>
                <li className='pt-3 cursor-pointer'>Store Locations</li>
             </ul>

        </div>
        <div>
            <p className='font-bold pb-4'>MY ACCOUNT</p>
            <ul className='text-black'>
                <li className='pt-3 cursor-pointer'>Orders</li>
                <li className='pt-3 cursor-pointer'>Advanced Search</li>
                <li className='pt-3 cursor-pointer'>Help and FAQs</li>
                <li className='pt-3 cursor-pointer'>Consultants</li>
                <li className='pt-3 cursor-pointer'>Store Locations</li>
             </ul>

        </div>
     





        </div>
    </div>
  )
}

export default Footer