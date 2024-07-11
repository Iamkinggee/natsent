import React from 'react'
import news from '../../Icons/news.png'
import x from '../../Icons/x.png'
import pin from '../../Icons/pin.png'

function Newsletter() {
  return (

    <div className='bg-green-400 w-full py-8'>
    {/* <div className='  max-w-[1000px]  items-center justify-center m-auto  h-[150px] flex md:grid md:grid-cols md:[1fr_2fr_1fr] '> */}
    <div className='  max-w-[1000px]    items-center justify-center m-auto  md:h-[200px] h-[260px] grid md:flex'>

   
    <div className=' md:flex gap-2'>
        <div className='md:flex flex justify-center items-center m-auto  '>


           <div className='md:w-[70px] w-[20px]  text-center items-center justify-center  m-auto'>
            <img src={news} />
            </div>
            <p className='font-semibold text-white  md:pb-5  m-auto text-[12px]  p-5 ' >SIGN UP TO NEWSLETTER</p>
        </div> 




{/* 
        <div className='w-full justify-center items-center m-auto '> 
            <form>
            <input className='w-full sm:w-[400px] md:w-[500px] h-[40px] p-2' placeholder=' Email Address'/>
            <input  className='bg-orange-400 px-2 font-semibold h-[40px]' type='SUBMIT'/>
            </form>
        </div> */}




<div className='flex flex-col sm:flex-row items-center justify-between w-[340px] md:w-full'>
                    <input className='p-3 flex w-full  focus:outline-none text-black' type="email" placeholder='Enter Email' />
                     <button className='hover:scale-105 duration-300 p-3 mt-2  md:mt-[13.4px] px-6 bg-orange-300 w-full  md:w-[200px]  font-medium mx-auto  m-auto text-black'>SUBMIT</button>
                </div>



 


        
         <div className='md:w-40 pt-5 w-16 justify-center items-center m-auto flex md:pl-10 md:gap-5 gap-2 md:flex  md:pt-0'>
  
           
         <div className='bg-white rounded-[50%] md:w-[35px]  w-[45px] p-[8px]  '><img src={pin}/>
         </div>

         <div className='bg-white rounded-[50%]  w-[45px] p-[10px] justify-center items-center m-auto'><img src={x}/>
         </div>
        </div> 
        </div>
        </div>









    </div>
  )
}

export default Newsletter










// import React from 'react'

// const Newsletter = () => {
//   return (
//     <div className='w-full py-16 text-black   '>
//         <div className='max-w-[1000px] mx-auto grid lg:grid-cols-3 '>
//             <div className='lg:col-span-2 my-4'>
//                 <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want Tips & Tricks to optimize your flow?</h1>
//                 <p className='text-neutral-200'>Sign up to our newsletter ans stay up to date.</p>
//             </div>
//             <div className="my-4">
//                 <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
//                     <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter Email' />
//                      <button className='hover:scale-105 duration-300 p-3 px-6 bg-black w-full  md:w-[200px] rounded-md font-medium mx-auto md:mt-0 mt-2 m-auto text-white'>Notify  me</button>
//                 </div>
//                 <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipi perferendis ipsum temporibus autem <span className='text-black'>Privacy Policy</span> </p>

//             </div>
           

//         </div>
      
//     </div>
//   )
// }

// export default Newsletter
