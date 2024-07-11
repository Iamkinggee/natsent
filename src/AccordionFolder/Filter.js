// App.js 

import logo from './logo.svg'; 
import './Filter'; 
import Accordion from './Accordion';
import { useState } from 'react'; 
import { Button } from 'flowbite-react';


const Filter = () => { 
	const [accordions, setAccordion] = useState([ 
		{ 
			key: 1, 
			title: 'TYPES', 
            data: (
                <>
                <label style={{ display: 'block', marginBottom: '10px' }} >
                  <input
                   style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>iPhone </span>          
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>iPhone pro</span>
              </label>
              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>iPhone pro max</span>
              </label>
              </>
              ),
			isOpen: false
		}, 
		{ 
			key: 2, 
			title: 'PRICE', 
            data: (
                <>
                <label style={{ display: 'block', marginBottom: '10px' }} >
                  <input
                   style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>Below $500</span>          
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>$1000 & Above</span>
              </label>
              </>
              ),
			isOpen: true
		}, 
		{ 
			key: 3, 
			title: 'COLOUR', 
            data: (
                <>
                <label style={{ display: 'block', marginBottom: '10px' }} >
                  <input
                   style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>Black</span>          
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>Gray</span>
              </label>
              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>White</span>
              </label>
              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>Blue</span>
              </label>
              </>
              ),
			isOpen: true
		}, 
		{ 
			key: 4, 
			title: 'STORAGE', 
            data: (
                <>
                <label style={{ display: 'block', marginBottom: '10px' }} >
                  <input
                   style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>64gb</span>          
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>256gb</span>
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>1Tb</span>
              </label>
              </>
              ),
			isOpen: false
		}, 
		{ 
			key: 5, 
			title: 'USAGE', 
            data: (
                <>
                <label style={{ display: 'block', marginBottom: '10px' }} >
                  <input
                   style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>Fairly used</span>          
              </label> 

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>Brand New</span>
              </label>
              </>
              ),
			isOpen: false
		}, 
		{ 
			key: 6, 
			title: 'DISCOUNT', 
            data: (
                <>
                <label style={{ display: 'block', marginBottom: '10px' }} >
                  <input
                   style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>20% Off</span>          
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>50% Off</span>
              </label>
              </>
              ),
			isOpen: false
		}, 
		{ 
			key: 7, 
			title: 'CAMERA', 
            data: (
                <>
                <label style={{ display: 'block', marginBottom: '10px' }} >
                  <input
                   style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>2 Camera</span>          
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>3 Camera</span>
              </label>
              </>
              ),
			isOpen: false
		}, 
		{ 
			key: 8, 
			title: 'BATTERY', 
            data: (
                <>
                <label style={{ display: 'block', marginBottom: '10px' }} >
                  <input
                   style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>5000mAh & Above</span>          
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>5000mAh & Below</span>
              </label>
              </>
              ),
			isOpen: false
		}, 
		{ 
			key: 9, 
			title: 'TECHNOLOGY', 
            data: (
                <>
                <label style={{ display: 'block', marginBottom: '10px' }} >
                  <input
                   style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>Made in chinese</span>          
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>Made in Japan</span>
              </label>
              </>
              ),
			isOpen: false
		}, 
		{ 
			key: 10, 
			title: 'TYPES', 
            data: (
                <>
                <label style={{ display: 'block', marginBottom: '10px' }} >
                  <input
                   style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>Mini</span>          
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>Max</span>
              </label>
              </>
              ),
			isOpen: false
		}, 
	
	]); 

	const toggleAccordion = (accordionkey) => { 
		const updatedAccordions = accordions.map((accord) => { 
			if (accord.key === accordionkey) { 
				return { ...accord, isOpen: !accord.isOpen }; 
			} else { 
				return { ...accord, isOpen: false }; 
			} 
		}); 

		setAccordion(updatedAccordions); 
	}; 

	return ( 
		<div  className=" justify-center hidden md:grid pt-5 "> 



<div className='w-full   rounded h-[110px] hidden md:grid border  '>
     <div className='bg-gray-200 p-3  '>
      <p>
      CATEGORIES
      </p>
     </div>


        <div className='  p-3 '>
          <p>iPHONE</p>
        </div>
      </div>






			<div className=" justify-center hidden md:grid  "> 
      <h1 className='py-4 pt-10'>FILTER BY</h1>
			
				{accordions.map((accordion) => ( 
					<Accordion 
						key={accordion.key} 
						title={accordion.title} 
						data={accordion.data} 
						isOpen={accordion.isOpen} 
						toggleAccordion={() => toggleAccordion(accordion.key)} 
					/> 
				))} 
                 

                 <button className='w-[240px] border-2 border-orange-600/20 h-[40px]  text-orange-500'>Apply</button>
             
			</div> 
		</div> 
	); 
}; 

export default Filter; 
