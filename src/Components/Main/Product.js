// import React, {useState}from 'react'
// import {data} from '../../../src/data/data'
// import Rating from '../Rating';

// function Product() {
//     const [product, setProduct] = useState(data);
//   return (
//     <div className='w-full '>
// <div className=' justify-center items-center m-auto md:ml-[10px] grid grid-cols-2 md:grid-cols-4  pt-[80px] cursor-pointer border-b-2 border-purple-700/20 '>
//     {product.map((item, index)=>(
//     <div key={index} className='border  '>

//      <div  className='w-[120px] justify-center items-center m-auto object-cover cursor-pointer'>
//        <img  loading="lazy" src={item.image} alt={item.name} 
//               className='h-100% w-auto' 
//         />
//        </div>

//         <div className='text-center  px-2 py-4 cursor-pointer '>
//             <p className=''>{item.name}</p>
//             <p className='text-center '>
//                 <span className='  font-semibold text-black p-2 rounded-full'>{item.price}</span>
//                  <div className='justify-center items-center m-auto'>
//                  <Rating/>
//                  </div>
//                 </p>
//         </div>
//     </div>

    

//     ))}

// </div>



//     </div>
//   )
// }

// export default Product






import React, {useState}from 'react'
import {data} from '../../../src/data/data'
import Rating from '../Rating';

function Product() {
    const [product, setProduct] = useState(data);
  return (
    <div className='w-full '>
<div className=' justify-center items-center m-auto md:ml-[10px] grid grid-cols-2 md:grid-cols-4  pt-[80px] cursor-pointer border-b-2 border-purple-700/20 '>
    {product.map((item, index)=>(
    <div key={index} className='border  '>

     <div  className='w-[120px] justify-center items-center m-auto object-cover cursor-pointer'>
       <img  loading="lazy" src={item.image} alt={item.name} 
              className='h-100% w-auto' 
        />
       </div>

        <div className='text-center  px-2 py-4 cursor-pointer '>
            <p className=''>{item.name}</p>
            <p className='text-center '>
                <span className='  font-semibold text-black p-2 rounded-full'>{item.price}</span>
                 <div className='justify-center items-center m-auto'>
                 <Rating/>
                 </div>
                </p>
        </div>
    </div>

    

    ))}

</div>



    </div>
  )
}

export default Product