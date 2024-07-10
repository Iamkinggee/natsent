
import React from 'react'
import Apple from '../Icons/Apple.png'

function Footer () {
  return (
<div className='w-full pb-5 max-w-[1000px] mx-auto flex-wrap text-[14px] md:text-[15px] grid lg:grid-cols-3 gap-4 text-black'>
        <div className='pt-[50px] pl-3'>
                <div className='flex'>
                <div className='w-[15px] '> 
                 <img src={Apple}/>
                 </div>
                <p className='font-bold px-3  md:text-[34px ]'> NATSENT iPhone Store</p>
                </div>

            <div>
            <p className='flex-wrap md:text-[16px] w-[250px]  mt-3'>Many say exploration i part of our destiny it is actually our future.</p>
            <p className='pt-2'>Address: B1, Fake Street,  Nigeria.</p>
            <p className='pt-3'> Phone: 0901234567</p>
             <p className='pt-3'>Email: info@natsent@gmail.com</p>
            </div>










            {/* <div className='flex justify-between md:w-[75%] my-6'> */}
                {/* <FaFacebookSquare  size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaInstagram size={30}/>
                <FaGithubSquare size={30}/>       */}
            {/* </div> */}
        </div>


        <div className='lg:col-span-2 flex justify-between mt-6 '>
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

            






















            <div className='justify-center items-center m-auto '>
                <h6 className='text-black font-bold '>POLICY INFO</h6>
                <ul className='text-black'>
                 <li className='pt-3 cursor-pointer ' >Orders</li>
                 <li className='pt-3 cursor-pointer '>Advanced Search</li>
                 <li className='pt-3 cursor-pointer'>Help and FAQs</li>
                 <li className='pt-3 cursor-pointer'>Consultants</li>
                 <li className='pt-3 cursor-pointer'>Store Locations</li>
             </ul>
            </div>
        
            <div className='justify-center items-center m-auto '>
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








