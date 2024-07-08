import React, {useState}from 'react'
import {data} from '../../../src/data/data'

function Product() {
    const [product, setProduct] = useState(data);
  return (
    <div>

        
{/* display products */}
<div className='grid grid-cols-2 lg:grid-cols-4  pt-[80px] cursor-pointer border-b-2 border-purple-700/20 '>
    {product.map((item, index)=>(
    <div key={index} className='border  '>

     <div  className='w-[200px] justify-center items-center m-auto object-cover cursor-pointer'>
       <img  loading="lazy" src={item.image} alt={item.name} 
              className='h-100% w-auto' 
        />
       </div>

        <div className='text-center  px-2 py-4 cursor-pointer'>
            <p className=''>{item.name}</p>
            <p className='text-center '>
                <span className='  font-semibold text-black p-2 rounded-full'>{item.price}</span>
            </p>
        </div>
    </div>

    

    ))}

</div>



    </div>
  )
}

export default Product