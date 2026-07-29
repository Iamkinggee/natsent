import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import Body from './Components/Main/Body';
import Checkoutpage from './CheckOutScreen/Checkoutpage';
import Paymentpage from './PaymentFolder/Paymentpage';
import QuickViewModal from './Components/Main/QuickViewModal';
import Toast from './Components/Toast';

function App() {
  return (
    <ShopProvider>
      <Router>
        <div className="App flex flex-col min-h-screen">
          <Routes>
            <Route exact path="/" element={<Body />} />
            <Route path="/checkoutpage" element={<Checkoutpage />} />
            <Route path="/cart" element={<Checkoutpage />} />
            <Route path="/paymentpage" element={<Paymentpage />} />
          </Routes>
          <QuickViewModal />
          <Toast />
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;
