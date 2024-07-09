// import React from 'react'
// import BrandName from './BrandName'

// function header1() {
//   return (
//     <div className='w-full '>
//       <div className='max-w-[1000px] m-auto justify-center items-center space-x-20 flex pt-10'>

// <div className='cursor-pointer w-'>
// <BrandName/>          
// </div>

//  <div className='hidden sm:flex flex-grow'>
//   <div>
//   <input placeholder='Search' className='border-2 w-[250px] text-[15px] p-1 focus:outline-none'/>
//   </div>
    


//     <div>
      
//     <form action="#" className='border-2 h-[34px] outline-none  '>
     
//      <select name="Categories" id="lang" className='focus:outline-none'>
//        <option value="Select" >All Categories</option>
//        <option value="php" className='focus:outline-none'>iphone 11</option>
//        <option value="java">iPhone 12 Pro max</option>
//        <option value="golang">iPhone 12</option>
       
//      </select>
//      <input type="submit" value="0" className='bg-orange-400 py-[4px] px-2'/>
//      </form>
//     </div>

  
//  </div>


// <p className='bg-orange-300 px-2 py-[2.5px] text-[13px] font-semibold'>LOGIN/SIGNUP</p>

// </div>
//     </div>
//   )
// }

// export default header1


import React from 'react'
import Logo from './Logo'
import lens from '../Icons/lens.png'

function Header1() {
  return (
//     <div>

// <nav className="bg-gray-800 p-4">
//   <div className="container mx-auto flex justify-between items-center">
//     <div className="text-white font-bold">
//       Logo
//     </div>
//     <div className="sm:hidden">
      
//       {/* Hamburger menu button for small screens */}
//       <button className="text-white p-2 focus:outline-none">
//         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
//         </svg>
//       </button>
//     </div>
//     <div className="hidden sm:flex flex-grow justify-center items-center">
//       {/* Navigation links for medium and larger screens */}
//       <a href="#" className="text-white px-3 py-2 hover:bg-gray-700">Home</a>
//       <a href="#" className="text-white px-3 py-2 hover:bg-gray-700">About</a>
//       <a href="#" className="text-white px-3 py-2 hover:bg-gray-700">Services</a>
//       <a href="#" className="text-white px-3 py-2 hover:bg-gray-700">Contact</a>
//     </div>
//   </div>
// </nav>

//     </div>




















<div className='w-full pt-5'>

<nav className=" p-4">
  <div className="max-w-[1000px] container mx-auto flex justify-between items-center">
    <div className="text-black font-bold ">
      <Logo/>
    </div>
    <div className="sm:hidden">
      
      {/* Hamburger menu button for small screens */}
      {/* <button className="text-white p-2 focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button> */}
    </div>


    <div className="container hidden sm:flex flex-grow justify-center items-center flex-wrap">
      {/* search for medium and larger screens */}


      
   <div className=''>
   <input placeholder='Search' className=' border-2 w-[200px] text-[15px] p-1 focus:outline-none'/>
   </div>
    


     <div>
      
     <form action="#" className='border-2 h-[34px] outline-none  w-[200px]'>
     
      <select name="Categories" id="lang" className='focus:outline-none'>
        <option value="Select" >All Categories</option>
        <option value="php" className='focus:outline-none'>iphone </option>
        <option value="java">iPhone 12 Pro max</option>
        <option value="golang">iPhone 12</option>
       
      </select>
     {/* <input type="submit" value="0" className='bg-orange-400 py-[4px] px-2'/> */}
     <button className='bg-orange-300 border-none  py-[4px] pl-[29px]'>0</button>
     </form>
     </div>
 
    </div>

    <div className='w-6 md:hidden'>
      <img src={lens}/>
    </div>
    <p className='bg-orange-300 px-2 py-[2.5px] text-[13px] font-semibold'>LOGIN/SIGNUP</p>
  </div>
</nav>

    </div>
  )
}

export default Header1