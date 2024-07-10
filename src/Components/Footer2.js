import React from 'react'
// import {

//     FaFacebookSquare,
//     FaGithubSquare,
//     FaInstagram,
//     FaTwitterSquare,

//  } from 'react-icons/fa'


const Footer2 = () => {
  return (
    <div className='max-w-[1000px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-white'>
        <div>
            <h1 className='w-full text-3xl font-bold  text-white'>Data<span className='font-thin'>port</span></h1>
            <p className='py-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad eius eveniet alias sunt, doloremque cupiditate inventore provident assumenda, suscipit nam numquam! Cupiditate totam nihil, est aspernatur enim quis repellendus! Suscipit.</p>
            {/* <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare  size={30}/>
                <FaTwitterSquare size={30}/>
                <FaGithubSquare size={30}/>
                <FaInstagram size={30}/>
                <FaGithubSquare size={30}/>      
            </div> */}
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className=' text-white font-bold'>Suport</h6>
                <ul>
                    <li className='py-2 text-sm'>pricing</li>
                    <li className='py-2 text-sm'>Documentation</li>
                    <li className='py-2 text-sm'>Guides</li>
                    <li className='py-2 text-sm'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='text-white font-bold'>Company</h6>
                <ul>
                    <li className='py-2 text-sm'>jobs</li>
                    <li className='py-2 text-sm'>Careers</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Blogs</li>
                </ul>
            </div>
            <div>
                <h6 className=' text-white font-bold'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Careers</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Analytics</li>
                </ul>
            </div>
            <div>
                <h6 className=' text-white font-bold'>legals</h6>
                <ul>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Press</li>
                    <li className='py-2 text-sm'>Analytics</li>
                    <li className='py-2 text-sm'>Analytics</li>
                </ul>
            </div>

        </div>

        <div> &copy;Copyright <span className='text-white'> Godsent Oko-Ose | 2023</span></div> 
        
      
    </div>
  )
}

export default Footer2
