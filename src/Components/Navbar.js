import React from 'react'
import lens from '../Icons/lens.png'

function Navbar() {
  return (

    <div className='w-full bg-green-600 h-20'>

<nav className=" p-4">
  <div className="max-w-[1000px] container mx-auto flex justify-between items-center">
    <div className="">
      <span className='text-black-300 bg-orange-300 font-semibold  px-5 py-7 pt-8'>DEPARTMENTS

       {/* Hamburger menu button for small screens */}
       <button className=" pt-2 pl-5 focus:outline-none">
        <svg className="w-6 h-6 t-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      </span>
    </div>




 

      <div className="hidden md:flex flex-grow  ">
      {/* Navigation links for medium and larger screens */}
      <a href="/" className="text-white px-3 py-2 ">HOME</a>
      <a href="/" className="text-white px-3 py-2 ">SHOP</a>
      <a href="" className="text-white px-3 py-2">FEATURES</a>
      <a href="#" className="text-white px-3 py-2">BLOG</a>
    </div>


   

   <div className='flex gap-2'>
   <p className='text-white hidden sm:flex pt-1 '>CALL US FREE </p>
    <p className='bg-orange-300 px-2  text-black hidden sm:flex  p-1' >09012834567</p>
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