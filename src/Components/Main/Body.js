// import React from 'react'
// import Product from './Product'

// function Body() {
//   return (
//     <div className='grid grid-cols-7'>
//         <aside className='self-start sticky top-[310px] col-span-1'>
//             {/* overflow-y-scroll */}
//         <p>aside</p>
//         <p>aside</p>
//         <p>aside</p>
//         <p>aside</p>
//         <p>aside</p>
//         </aside>


//         <main className='col-span-6 top-[400px] z-100 '>
//             <Product />
            
     
//         </main>




//     </div>
//   )
// }

// export default Body





import { useHistory } from 'react-router-dom';
import React from 'react'
import Product from './Product'
import Filter from '../../AccordionFolder/Filter'
import Info from '../Infosection/Info';
import Newsletter from '../newslettersection/Newsletter';
import Header2 from '../Header2';

function Body() {


  // const history = useHistory();

  // const handleClick = () => {
  //   history.push('/checkout');
  // };

  return (
    // <div className=' grid grid-cols-7'>
    //     <aside className='self-start sticky w-[300px] top-[310px]  col-span-1'>
    //         {/* overflow-y-scroll */}
    //     <Acc/>
    //     </aside>


    //     <main className='col-span-6 top-[400px] '>
    //         <Product />
            
     
    //     </main>

    // </div>









// working code
    // <div className='md:w-[1000px] w-[500px] grid grid-cols-4 m-auto justify-center items-center'>
    //     <aside className=' self-start sticky  top-[310px]  col-span-1'>
         
    //     <Acc/>
    //     </aside>


    //     <main className=' col-span-3 top-[400px] '>
    //         <Product />
    //     </main>
    // </div>




   <>
    <Header2 />  
    <div className='w-full  md:w-[1000px] grid grid-cols-1 md:grid-cols-4 mx-auto justify-center items-center'>
    <aside className='self-start sticky top-[310px] md:col-span-1'>
      <Filter />
    </aside>
  
    <main className='md:col-span-3 mt-[5px] md:mt-0'>
      <Product />
    </main>










  </div>
  






<Info/>
<Newsletter/>


  </>
  )
}

export default Body






