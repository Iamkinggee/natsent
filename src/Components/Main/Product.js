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











// import React, { useState } from 'react';
// import { data } from '../../../src/data/data';
// import Rating from '../Rating';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';

// function Product() {
//   const [product, setProduct] = useState(data);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const [cartColors, setCartColors] = useState({});
//   const [heartColors, setHeartColors] = useState({});
//   const [eyeColors, setEyeColors] = useState({});

//   const toggleColor = (id, setColorState, colorState) => {
//     setColorState((prevState) => ({
//       ...prevState,
//       [id]: prevState[id] === 'text-white' ? 'text-orange-500' : 'text-white',
//     }));
//   };

//   return (
//     <div className='w-full'>
//       <div className='justify-center items-center m-auto md:ml-[10px] grid grid-cols-2 md:grid-cols-4 pt-[80px] cursor-pointer border-b-2 border-purple-700/20'>
//         {product.map((item, index) => (
//           <div
//             key={index}
//             className='border relative group'
//             onMouseEnter={() => setHoveredProduct(index)}
//             onMouseLeave={() => setHoveredProduct(null)}
//           >
//             <div className='w-[120px] justify-center items-center m-auto object-cover cursor-pointer'>
//               <img
//                 loading="lazy"
//                 src={item.image}
//                 alt={item.name}
//                 className='h-100% w-auto'
//               />
//             </div>

//             <div className='text-center px-2 py-4 cursor-pointer'>
//               <p>{item.name}</p>
//               <p className='text-center'>
//                 <span className='font-semibold text-black p-2 rounded-full'>{item.price}</span>
//                 <div className='justify-center items-center m-auto'>
//                   <Rating />
//                 </div>
//               </p>
//             </div>

//             {hoveredProduct === index && (
//               <div className="absolute inset-x-0 bottom-0 bg-gray-800 bg-opacity-50 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
//                 <FontAwesomeIcon
//                   icon={faShoppingCart}
//                   className={`cursor-pointer ${cartColors[index] || 'text-white'}`}
//                   onClick={() => toggleColor(index, setCartColors, cartColors)}
//                 />
//                 <FontAwesomeIcon
//                   icon={faHeart}
//                   className={`cursor-pointer ${heartColors[index] || 'text-white'}`}
//                   onClick={() => toggleColor(index, setHeartColors, heartColors)}
//                 />
//                 <FontAwesomeIcon
//                   icon={faEye}
//                   className={`cursor-pointer ${eyeColors[index] || 'text-white'}`}
//                   onClick={() => toggleColor(index, setEyeColors, eyeColors)}
//                 />
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product;


// // working

// import React, { useState } from 'react';
// import { data } from '../../../src/data/data';
// import Rating from '../Rating';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
// import { useHistory } from 'react-router-dom';

// function Product() {
//   const [product, setProduct] = useState(data);
//   const [clickedIcons, setClickedIcons] = useState({});

//   const toggleIconState = (index, icon) => {
//     setClickedIcons((prevState) => ({
//       ...prevState,
//       [index]: {
//         ...prevState[index],
//         [icon]: !prevState[index]?.[icon],
//       },
//     }));


//     // history.push('/checkout');
//   };

//   // onClick={handleClick}

//   const getIconClasses = (index, icon) => {
//     const isClicked = clickedIcons[index]?.[icon];
//     return isClicked ? 'text-white bg-blue-500' : 'text-black bg-gray-200';
//   };


  
//   // const history = useHistory();

//   // const handleClick = () => {
//   //   history.push('/checkout');
//   // };






//   return (
//     <div className='w-full'>
//       <div className='justify-center items-center m-auto md:ml-[10px] grid grid-cols-2 md:grid-cols-4 pt-[80px] cursor-pointer border-b-2 border-purple-700/20'>
//         {product.map((item, index) => (
//           <div key={index} className='border relative group'>
//             <div className='w-[120px] justify-center items-center m-auto object-cover cursor-pointer'>
//               <img
//                 loading="lazy"
//                 src={item.image}
//                 alt={item.name}
//                 className='h-100% w-auto'
//               />
//             </div>

//             <div className='text-center px-2 py-4 cursor-pointer'>
//               <p>{item.name}</p>
//               <p className='text-center'>
//                 <span className='font-semibold text-black p-2 rounded-full'>{item.price}</span>
//                 <div className='justify-center items-center m-auto'>
//                   <Rating />
//                 </div>
//               </p>
//             </div>

//             <div className="absolute inset-x-0 bottom-0 bg-gray-200 bg-opacity-50 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
//               <FontAwesomeIcon
                
//                 icon={faShoppingCart}
//                 className={`cursor-pointer rounded-full p-2 ${getIconClasses(index, 'cart')}`}
//                 onClick={() => toggleIconState(index, 'cart')}
//               />
//               <FontAwesomeIcon
//                 icon={faHeart}
//                 className={`cursor-pointer rounded-full p-2 ${getIconClasses(index, 'heart')}`}
//                 onClick={() => toggleIconState(index, 'heart')}
//               />
//               <FontAwesomeIcon
//                 icon={faEye}
//                 className={`cursor-pointer rounded-full p-2 ${getIconClasses(index, 'eye')}`}
//                 onClick={() => toggleIconState(index, 'eye')}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product;







// import React, { useState } from 'react';
// import { data } from '../../../src/data/data';
// import Rating from '../Rating';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
// import { Link } from 'react-router-dom';

// function Product() {
//   const [product, setProduct] = useState(data);
//   const [clickedIcons, setClickedIcons] = useState({});

//   const toggleIconState = (index, icon) => {
//     setClickedIcons((prevState) => ({
//       ...prevState,
//       [index]: {
//         ...prevState[index],
//         [icon]: !prevState[index]?.[icon],
//       },
//     }));
//   };

//   const getIconClasses = (index, icon) => {
//     const isClicked = clickedIcons[index]?.[icon];
//     return isClicked ? 'text-white bg-blue-500' : 'text-black bg-gray-200';
//   };

//   return (
//     <div className='w-full'>
//       <div className='justify-center items-center m-auto md:ml-[10px] grid grid-cols-2 md:grid-cols-4 pt-[80px] cursor-pointer border-b-2 border-purple-700/20'>
//         {product.map((item, index) => (
//           <div key={index} className='border relative group'>
//             <div className='w-[120px] justify-center items-center m-auto object-cover cursor-pointer'>
//               <img
//                 loading="lazy"
//                 src={item.image}
//                 alt={item.name}
//                 className='h-100% w-auto'
//               />
//             </div>

//             <div className='text-center px-2 py-4 cursor-pointer'>
//               <p>{item.name}</p>
//               <p className='text-center'>
//                 <span className='font-semibold text-black p-2 rounded-full'>{item.price}</span>
//                 <div className='justify-center items-center m-auto'>
//                   <Rating />
//                 </div>
//               </p>
//             </div>

//             <div className="absolute inset-x-0 bottom-0 bg-gray-200 bg-opacity-50 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
//               <Link to="/checkout">
//                 <FontAwesomeIcon
//                   icon={faShoppingCart}
//                   className={`cursor-pointer rounded-full p-2 ${getIconClasses(index, 'cart')}`}
//                   onClick={() => toggleIconState(index, 'cart')}
//                 />
//               </Link>
//               <FontAwesomeIcon
//                 icon={faHeart}
//                 className={`cursor-pointer rounded-full p-2 ${getIconClasses(index, 'heart')}`}
//                 onClick={() => toggleIconState(index, 'heart')}
//               />
//               <FontAwesomeIcon
//                 icon={faEye}
//                 className={`cursor-pointer rounded-full p-2 ${getIconClasses(index, 'eye')}`}
//                 onClick={() => toggleIconState(index, 'eye')}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product;
















// import React, { useState } from 'react';
// import { data } from '../../../src/data/data';
// import Rating from '../Rating';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
// import { useHistory } from 'react-router-dom';

// function Product() {
//   const [product, setProduct] = useState(data);
//   const [clickedIcons, setClickedIcons] = useState({});
//   const history = useHistory();

//   const toggleIconState = (index, icon) => {
//     setClickedIcons((prevState) => ({
//       ...prevState,
//       [index]: {
//         ...prevState[index],
//         [icon]: !prevState[index]?.[icon],
//       },
//     }));

//     // Navigate to checkout page if the cart icon is clicked
//     if (icon === 'cart') {
//       history.push('/checkout');
//     }
//   };

//   const getIconClasses = (index, icon) => {
//     const isClicked = clickedIcons[index]?.[icon];
//     return isClicked ? 'text-white bg-blue-500' : 'text-black bg-gray-200';
//   };

//   return (
//     <div className='w-full'>
//       <div className='justify-center items-center m-auto md:ml-[10px] grid grid-cols-2 md:grid-cols-4 pt-[80px] cursor-pointer border-b-2 border-purple-700/20'>
//         {product.map((item, index) => (
//           <div key={index} className='border relative group'>
//             <div className='w-[120px] justify-center items-center m-auto object-cover cursor-pointer'>
//               <img
//                 loading="lazy"
//                 src={item.image}
//                 alt={item.name}
//                 className='h-100% w-auto'
//               />
//             </div>

//             <div className='text-center px-2 py-4 cursor-pointer'>
//               <p>{item.name}</p>
//               <p className='text-center'>
//                 <span className='font-semibold text-black p-2 rounded-full'>{item.price}</span>
//                 <div className='justify-center items-center m-auto'>
//                   <Rating />
//                 </div>
//               </p>
//             </div>

//             <div className="absolute inset-x-0 bottom-0 bg-gray-200 bg-opacity-50 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
//               <FontAwesomeIcon
//                 icon={faShoppingCart}
//                 className={`cursor-pointer rounded-full p-2 ${getIconClasses(index, 'cart')}`}
//                 onClick={() => toggleIconState(index, 'cart')}
//               />
//               <FontAwesomeIcon
//                 icon={faHeart}
//                 className={`cursor-pointer rounded-full p-2 ${getIconClasses(index, 'heart')}`}
//                 onClick={() => toggleIconState(index, 'heart')}
//               />
//               <FontAwesomeIcon
//                 icon={faEye}
//                 className={`cursor-pointer rounded-full p-2 ${getIconClasses(index, 'eye')}`}
//                 onClick={() => toggleIconState(index, 'eye')}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product;





import React, { useState } from 'react';
import { data } from '../../../src/data/data';
import Rating from '../Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Product() {
  const [product, setProduct] = useState(data);
  const [clickedIcons, setClickedIcons] = useState({});
  const navigate = useNavigate();

  const toggleIconState = (index, icon) => {
    setClickedIcons((prevState) => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        [icon]: !prevState[index]?.[icon],
      },
    }));

    // Navigate to checkout page if the cart icon is clicked
    if (icon === 'cart') {
      navigate('/checkout');
    }
  };

  const getIconClasses = (index, icon) => {
    const isClicked = clickedIcons[index]?.[icon];
    return isClicked ? 'text-white bg-blue-500' : 'text-black bg-gray-200';
  };

  return (
    <div className='w-full'>
      <div className='justify-center items-center m-auto md:ml-[10px] grid grid-cols-2 md:grid-cols-4 md:pt-[40px] pt-[10px] cursor-pointer border-b-2 border-purple-700/20'>
        {product.map((item, index) => (
          <div key={index} className='border relative group'>
            <div className='w-[120px] justify-center items-center m-auto object-cover cursor-pointer'>
              <img
                loading="lazy"
                src={item.image}
                alt={item.name}
                className='h-100% w-auto'
              />
            </div>

            <div className='text-center px-2 py-4 cursor-pointer'>
              <p>{item.name}</p>
              <p className='text-center'>
                <span className='font-semibold text-black p-2 rounded-full'>{item.price}</span>
                <div className='justify-center items-center m-auto'>
                  <Rating />
                </div>
              </p>
            </div>

            <div className="absolute inset-x-0 bottom-0 bg-gray-200 bg-opacity-50 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
              <FontAwesomeIcon
                icon={faShoppingCart}
                className={`cursor-pointer rounded-full p-2 ${getIconClasses(index, 'cart')}`}
                onClick={() => toggleIconState(index, 'cart')}
              />
              <FontAwesomeIcon
                icon={faHeart}
                className={`cursor-pointer rounded-full p-2 ${getIconClasses(index, 'heart')}`}
                onClick={() => toggleIconState(index, 'heart')}
              />
              <FontAwesomeIcon
                icon={faEye}
                className={`cursor-pointer rounded-full p-2 ${getIconClasses(index, 'eye')}`}
                onClick={() => toggleIconState(index, 'eye')}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
