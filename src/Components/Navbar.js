import React from 'react'
import lens from '../Icons/lens.png'

function Navbar() {
  return (
//  <div className='w-full bg-green-500 h-15 '>
//        <div className='max-w-[1000px] flex gap-5  p-4 justify-center m-auto mt-7 text-[14px] font-semibold'>
//         <div className='flex gap-x-16   '>
//             DEPARTMENT
            

//             <div className='w-5 pt-[5px] justify-center items-center '>
//                 <img src={menu} className=' '/>
//             </div>
//         </div>


//     <div className='flex gap-40'>
//     <nav>
//         <ul  className='flex gap-10 text-white cursor-pointer'>
//             <li>HOME</li>
//             <li>SHOP</li>
//             <li>FEATURES</li>
//             <li>BLOG</li>
//         </ul>
//     </nav>

//     <div>
//         <p className='text-white'>CALL US FREE <span className='bg-orange-300 px-4  text-black p-1'>0901234567</span></p>
//     </div>
//     </div>



// </div>
//  </div>









    <div className='w-full bg-green-600 h-20'>

<nav className=" p-4">
  <div className="max-w-[1000px] container mx-auto flex justify-between items-center">
    <div className="">
      <span className='text-orange-300'>DEPARTMENTS</span>

       {/* Hamburger menu button for small screens */}
       <button className="text-white pt-2 focus:outline-none">
        <svg className="w-6 h-6 t-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>




 

      <div className="hidden sm:flex flex-grow  ">
      {/* Navigation links for medium and larger screens */}
      <a href="#" className="text-white px-3 py-2 hover:bg-gray-700">HOME</a>
      <a href="#" className="text-white px-3 py-2 hover:bg-gray-700">SHOP</a>
      <a href="#" className="text-white px-3 py-2 hover:bg-gray-700">FEATURES</a>
      <a href="#" className="text-white px-3 py-2 hover:bg-gray-700">BLOG</a>
    </div>


   

   <div className='flex gap-2'>
   <p className='text-white hidden sm:flex pt-1 '>CALL US FREE </p>
    <p className='bg-orange-300 px-2  text-black hidden sm:flex  p-1' >09012f34567</p>
   </div>

   <button className="text-white p-2 focus:outline-none md:hidden sm:hidden">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>

      </div>

</nav>



       
   



    </div>

  )
}

export default Navbar