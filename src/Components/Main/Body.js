import React from 'react'
import Product from './Product'
import Acc from '../../AccordionFolder/Acc'

function Body() {
  return (
    <div className='grid grid-cols-7'>
        <aside className='self-start sticky top-0 col-span-2'>
        {/* <aside className='self-start sticky top-[310px] col-span-2'> */}
            {/* overflow-y-scroll */}
         <Acc/>
        </aside>


        <main className='col-span-5 top-[400px] z-100 '>
            <Product />
            
     
        </main>




    </div>
  )
}

export default Body






