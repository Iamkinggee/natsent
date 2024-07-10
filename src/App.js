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
import Acc from './AccordionFolder/Filter'
import Product from './Producthovereffect'
import Checkoutpage from './CheckOutScreen/Checkoutpage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';










function App() {
  return (
    <>
    <Header1 />
    <Navbar /> 
    <Header2 />    
    
    

    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Body />} />
          <Route path="/Checkoutpage" Component={<Checkoutpage />} />
        </Routes>
      </div>
    </Router>



    <Info/>
    <Newsletter/>
    <Footer/>
    <Copyright/>
    

    </>
  );
}

export default App;



