// App.js 

import logo from './logo.svg'; 
import './Acc'; 
import Accordion from './Accordion';
import { useState } from 'react'; 
import { Button } from 'flowbite-react';


const Acc = () => { 
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
                <span style={{ paddingLeft: '30px' }}>iPhone 11</span>          
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>iPhone 11 pro</span>
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
                <span style={{ paddingLeft: '30px' }}>iPhone 11</span>          
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>iPhone 11 pro</span>
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
                <span style={{ paddingLeft: '30px' }}>iPhone 11</span>          
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>iPhone 11 pro</span>
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
                <span style={{ paddingLeft: '30px' }}>iPhone 11</span>          
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>iPhone 11 pro</span>
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
                <span style={{ paddingLeft: '30px' }}>iPhone 11</span>          
              </label> 

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>iPhone 11 pro</span>
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
                <span style={{ paddingLeft: '30px' }}>iPhone 11</span>          
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>iPhone 11 pro</span>
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
                <span style={{ paddingLeft: '30px' }}>iPhone 11</span>          
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>iPhone 11 pro</span>
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
                <span style={{ paddingLeft: '30px' }}>iPhone 11</span>          
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>iPhone 11 pro</span>
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
                <span style={{ paddingLeft: '30px' }}>iPhone 11</span>          
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>iPhone 11 pro</span>
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
                <span style={{ paddingLeft: '30px' }}>iPhone 11</span>          
              </label>

              <label style={{ display: 'block', marginBottom: '10px' }}>
              <input
                    style={{ transform: 'scale(1.5)' }} 
                    type="checkbox"
                    onChange={(e) => console.log(e.target.checked)}
                  />
                <span style={{ paddingLeft: '30px' }}>iPhone 11 pro</span>
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
		<div> 
			
			<div className=" justify-center hidden md:grid  "> 



            <h1 className='py-4'>FILTER BY</h1>
			
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

export default Acc; 
