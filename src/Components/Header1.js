


import React from 'react';
import Logo from './Logo';
import lens from '../Icons/lens.png';

function Header1() {
  return (
    <div className='w-full py-2'>
      <nav className='p-4'>
        <div className=' max-w-[1000px] container mx-auto flex justify-between items-center'>
          <div className='text-black font-bold'>
            <Logo />
          </div>

          <div className='hidden sm:flex flex-grow justify-center items-center'>
            <div>
              <input
                placeholder='Search'
                className='border-2 w-[200px] text-[15px] p-1 focus:outline-none'
              />
            </div>

            <div className=''>
              <form action='#' className='flex items-center border-2 h-[34px] outline-none'>
                <select name='Categories' id='lang' className='focus:outline-none border-none'>
                  <option >All Categories</option>
                  <option className='bg-green-300'>iPhone 6</option>
                  <option >iPhone 7</option>
                  <option >iPhone 12 </option>
                  <option >iPhone 12 Pro Max</option>
                  <option >iPhone 13 Pro Max</option>
                  <option >iPhone 14 Pro Max</option>
                  <option >iPhone 15 Pro Max</option>
                </select>
                <button className='bg-orange-300 border-none py-[4px] px-2'>
                
                
                
                <img src={lens} alt='search' className='w-6' />
                </button>
              </form>
            </div>
          </div>

          <div className='sm:hidden'>
            <img src={lens} alt='search' className='w-6' />
          </div>

          <p className='bg-orange-300 px-2 py-[2.5px] text-[13px] font-semibold'>LOGIN/SIGNUP</p>
        </div>
      </nav>
    </div>
  );
}

export default Header1;
