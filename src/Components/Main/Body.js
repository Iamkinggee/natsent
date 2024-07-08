import React from 'react'
import Product from './Product'

function Body() {
  return (
    <div className='grid grid-cols-7'>
        <aside className='self-start sticky top-[310px] col-span-1'>
            {/* overflow-y-scroll */}
        <p>aside</p>
        <p>aside</p>
        <p>aside</p>
        <p>aside</p>
        <p>aside</p>
        </aside>


        <main className='col-span-6 top-[400px] z-100 '>
            <Product />
            
     
        </main>




    </div>
  )
}

export default Body






