// import React from 'react'
// import mongo from '../../assets/mongo.png'

// function InfoCard(props) {
//   return (
//     <div className=' grid grid-cols-2 md:grid-cols-4  '>

//         <div className='w-[120px] md:w-[250px] p-5 m-auto  justify-center h-[300px] md:h-[250px]  items-center   pt-10  '>

//         <div className='md:w-[80px] w-[50px] m-auto  '>
//           {props.image}
//         </div>

//         <div className=' ' >
//         <p className='font-semibold text-center text-[13px] md:text-[14px] '>{props.cardtitle}</p>
//         <p className='text-gray-600 text-center  pt-2 md:text-[18px] text-[13px]'>{props.carddiscription}</p>
//         </div>


//         {/* </div> */}
//         </div>
//     {/* </div> */}


       





//     </div>
//   )
// }

// export default InfoCard;






// import React from 'react';
// import InfoCard from './InfoCard';
// import Cart from '../../Icons/Cart.png';
// import Card from '../../Icons/Card.png';
// import Shield from '../../Icons/Shield.png';
// import customercare from '../../Icons/customercare.png';

// function Info() {
//   return (
//     <div className='w-full border-t-2 mt-20'>
//       <div className='max-w-[1000px] mx-auto py-10'>
//         <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
//           <div className='border-slate-300 lg:border-r-2'>
//             <InfoCard
//               image={<img loading='lazy' src={Cart} alt='Cart' className='object-contain p-3 bg-transparent' />}
//               cardtitle='FREE SHIPPING'
//               carddescription='Free Shipping on worldwide orders over $100'
//             />
//           </div>

//           <div className='border-slate-300 lg:border-r-2'>
//             <InfoCard
//               image={<img loading='lazy' src={Card} alt='Card' className='object-contain p-3 bg-transparent' />}
//               cardtitle='SECURED PAYMENTS'
//               carddescription='Fast & secured payment system.'
//             />
//           </div>

//           <div className='border-slate-300 lg:border-r-2'>
//             <InfoCard
//               image={<img loading='lazy' src={Shield} alt='Shield' className='object-contain p-3 bg-transparent' />}
//               cardtitle='TRUSTED PAY'
//               carddescription='Fast & secured payment system.'
//             />
//           </div>

//           <div>
//             <InfoCard
//               image={<img loading='lazy' src={customercare} alt='Customer Care' className='object-contain p-3 bg-transparent' />}
//               cardtitle='RELIABLE CUSTOMER CARE'
//               carddescription='Free Shipping on worldwide orders over $100'
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Info;











import React from 'react'

function InfoCard(props) {
  return (
    <div className='w-full border-t-2 py-8'>
      <div className=' m-auto  h-[180px] md:w-full w-[150px]  justify-center items-center  border-slate-300  '>
        <div className=' md:px-[20px] w-full '>
          <div className='w-[70px] justify-center items-center m-auto'>{props.image}</div>
          <h1 className='text-black font-semibold text-center w-full'>{props.cardtitle}</h1>
          <p className='text-center pt-3 text-gray-600'>{props.carddiscription}</p>
        
        
        </div>
       
       




      </div>

    </div>
  )
}

export default InfoCard