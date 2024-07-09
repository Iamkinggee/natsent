

// import iphone from './assets/iphone.jpg'
// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';

// const Producthovereffect = () => {
//   const [cartColor, setCartColor] = useState('text-white');
//   const [heartColor, setHeartColor] = useState('text-white');
//   const [eyeColor, setEyeColor] = useState('text-white');

//   const toggleColor = (setColor, currentColor) => {
//     setColor(currentColor === 'text-white' ? 'text-orange-500' : 'text-white');
//   };

//   return (
//     <div className='relative group w-[100px] rounded-b'>
//       <img src={iphone} alt="Product" className="w-[100px] h-auto" />
      
//       <div className=" absolute inset-x-0 bottom-0 bg-gray-800 bg-opacity-50 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
//         <FontAwesomeIcon
//           icon={faShoppingCart}
//           className={`cursor-pointer ${cartColor}`}
//           onClick={() => toggleColor(setCartColor, cartColor)}
//         />
//         <FontAwesomeIcon
//           icon={faHeart}
//           className={`cursor-pointer ${heartColor}`}
//           onClick={() => toggleColor(setHeartColor, heartColor)}
//         />
//         <FontAwesomeIcon
//           icon={faEye}
//           className={`cursor-pointer ${eyeColor}`}
//           onClick={() => toggleColor(setEyeColor, eyeColor)}
//         />
//       </div>
//     </div>
//   );
// };

// export default Producthovereffect;









import iphone from './assets/iphone.jpg'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faEye } from '@fortawesome/free-solid-svg-icons';

const Producthovereffect = () => {
  const [cartColor, setCartColor] = useState('text-white');
  const [heartColor, setHeartColor] = useState('text-white');
  const [eyeColor, setEyeColor] = useState('text-white');

  const toggleColor = (setColor, currentColor) => {
    setColor(currentColor === 'text-white' ? 'text-orange-500' : 'text-white');
  };

  return (
    <div className='relative group w-[100px] rounded-b'>
      <img src={iphone} alt="Product" className="w-[100px] h-auto" />
      
      <div className=" absolute inset-x-0 bottom-0 bg-gray-800 bg-opacity-50 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
        <FontAwesomeIcon
          icon={faShoppingCart}
          className={`cursor-pointer ${cartColor}`}
          onClick={() => toggleColor(setCartColor, cartColor)}
        />
        <FontAwesomeIcon
          icon={faHeart}
          className={`cursor-pointer ${heartColor}`}
          onClick={() => toggleColor(setHeartColor, heartColor)}
        />
        <FontAwesomeIcon
          icon={faEye}
          className={`cursor-pointer ${eyeColor}`}
          onClick={() => toggleColor(setEyeColor, eyeColor)}
        />
      </div>
    </div>
  );
};

export default Producthovereffect;
