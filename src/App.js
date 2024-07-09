import React from 'react'
import Header1 from './Components/Header1'
import Header2 from './Components/Header2'
import Navbar from './Components/Navbar'
import Body from './Components/Main/Body'
import Info from './Components/Infosection/Info'
import Newsletter from './Components/newslettersection/Newsletter'
import Footer from './Components/Footer'
import Copyright from './Components/Copyright'
// import Checkoutpage from './CheckOutScreen/Checkoutpage'
import Acc from './AccordionFolder/Acc'




function App() {
  return (
    <div>
     <Header1 />   
     <Navbar />
     <Header2 /> 
     <Body /> 
     <Info/>
     <Newsletter/>  
     {/* <Acc/> */}
   

     {/* <Checkoutpage/> */}


 

 




     <Footer/>
     <Copyright/> 


      





    </div>
  )
}

export default App


// sticky top-0