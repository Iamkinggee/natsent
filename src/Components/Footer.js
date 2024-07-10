
import React from 'react'
import Apple from '../Icons/Apple.png'

function Footer () {
  return (
<div className='w-full pb-5 max-w-[1000px] mx-auto flex-wrap text-[14px] md:text-[15px] grid md:grid-cols-4  md:grid-col-2 gap-4 text-black'>


        <div className='pt-[50px] pl-3 md:col-span-2  col-span-1'>
                <div className='flex '>
                <div className='w-[15px] '> 
                 <img src={Apple}/>
                 </div>
                <p className='font-bold px-3  md:text-[34px ]'> NATSENT iPhone Store</p>
                </div>

                <div>
                <p className='flex-wrap md:text-[16px]  mt-3'>Many say exploration is part of our destiny, but it is actually our future.</p>
                <p className='pt-2'>Address: B1, Fake Street,  Nigeria.</p>
                <p className='pt-3'> Phone: 0901234567</p>
                <p className='pt-3'>Email: info@natsent@gmail.com</p>
                </div>
        </div>




        <div className='col-span-2 flex justify-between mt-6 '>
            <div className='justify-center items-center m-auto'>
                <h6 className=' text-black font-bold'>COMPANY</h6>
                <ul className='text-black'>
                 <li className='pt-3 cursor-pointer'>Career</li>
                 <li className='pt-3 cursor-pointer'>Brands</li>
                 <li className='pt-3 cursor-pointer'>Help and FAQs</li>
                 <li className='pt-3 cursor-pointer'>Consultants</li>
                 <li className='pt-3 cursor-pointer'>Store Locations</li>
              </ul>
            </div>

            






            <div className='col-span-2 justify-center items-center m-auto '>
                <h6 className='text-black font-bold '>POLICY INFO</h6>
                <ul className='text-black'>
                 <li className='pt-3 cursor-pointer ' >Orders</li>
                 <li className='pt-3 cursor-pointer '>Advanced Search</li>
                 <li className='pt-3 cursor-pointer'>Help and FAQs</li>
                 <li className='pt-3 cursor-pointer'>Consultants</li>
                 <li className='pt-3 cursor-pointer'>Store Locations</li>
             </ul>
            </div>
        




            <div className='col-span-2 justify-center items-center m-auto '>
                <h6 className=' text-black font-bold'>MY ACCOUNT</h6>
                <ul className='text-black'>
                 <li className='pt-3 cursor-pointer'>About Us</li>
                 <li className='pt-3 cursor-pointer'>Delivery information</li>
                 <li className='pt-3 cursor-pointer'>Privacy policy</li>
                 <li className='pt-3 cursor-pointer'>Terms and Conditions</li>
                 <li className='pt-3 cursor-pointer'>Custom Links</li>
              </ul>
            </div>

        </div>

      
        
      
    </div>
  )
}

export default Footer








