
import { useHistory } from 'react-router-dom';
import React from 'react'
import Product from './Product'
import Filter from '../../AccordionFolder/Filter'
import Info from '../Infosection/Info';
import Newsletter from '../newslettersection/Newsletter';
import Header2 from '../Header2';
import Footer from '../Footer';
import Copyright from '../Copyright';
import Navbar from '../Navbar';
import Header1 from '../Header1';
import  Pagination from '../../pagination'



function Body() {

  return (
 
   <>
    <Header1 />
    <Navbar /> 
    <Header2 />  
    <div className='w-full  md:w-[1000px] grid grid-cols-1 md:grid-cols-4 mx-auto justify-center items-center'>
    <aside className='self-start sticky top-[310px] md:col-span-1'>
      <Filter />
    </aside>
  
    <main className='md:col-span-3  md:mt-0'>
      <Product />
    </main>

  </div>




 <div>
  <Pagination/>
 </div>




     <div>
      
    <Info/>
    <Newsletter/>
    <Footer/>
    <Copyright/>
    </div>
    


  </>
  )
}

export default Body






