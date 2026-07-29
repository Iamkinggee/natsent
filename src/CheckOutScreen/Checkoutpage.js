import React from 'react';
import Phone from './Phone';
import Coupons from './Coupons';
import Footer from '../Components/Footer';
import Copyright from '../Components/Copyright';
import Header1 from '../Components/Header1';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faCreditCard, faCheckCircle, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Checkoutpage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header1 />
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Breadcrumb / Navigation path */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-6 font-medium">
          <Link to="/" className="hover:text-emerald-600">Home</Link>
          <FontAwesomeIcon icon={faChevronRight} className="text-[10px] text-gray-400" />
          <span className="text-slate-900 font-bold">Shopping Cart</span>
        </div>

        {/* Stepper Bar */}
        <div className="mb-8 bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-sm">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {/* Step 1: Cart */}
            <div className="flex items-center gap-2.5 text-emerald-600 font-bold text-xs sm:text-sm">
              <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-extrabold shadow">
                <FontAwesomeIcon icon={faShoppingCart} />
              </span>
              <span>1. Shopping Cart</span>
            </div>

            <div className="flex-1 h-0.5 bg-gray-200 mx-3 sm:mx-6"></div>

            {/* Step 2: Payment */}
            <div className="flex items-center gap-2.5 text-gray-400 font-semibold text-xs sm:text-sm">
              <span className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 border border-gray-300 flex items-center justify-center font-bold">
                <FontAwesomeIcon icon={faCreditCard} />
              </span>
              <span className="hidden sm:inline">2. Shipping & Payment</span>
              <span className="sm:hidden">2. Payment</span>
            </div>

            <div className="flex-1 h-0.5 bg-gray-200 mx-3 sm:mx-6"></div>

            {/* Step 3: Complete */}
            <div className="flex items-center gap-2.5 text-gray-400 font-semibold text-xs sm:text-sm">
              <span className="w-8 h-8 rounded-full bg-gray-100 text-gray-500 border border-gray-300 flex items-center justify-center font-bold">
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
              <span className="hidden sm:inline">3. Order Complete</span>
              <span className="sm:hidden">3. Done</span>
            </div>
          </div>
        </div>

        {/* Page Title */}
        <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            Shopping Cart Review
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cart Items List */}
          <div className="lg:col-span-7 xl:col-span-8">
            <Phone />
          </div>

          {/* Coupon & Price Details */}
          <div className="lg:col-span-5 xl:col-span-4">
            <Coupons />
          </div>
        </div>
      </main>

      <Footer />
      <Copyright />
    </div>
  );
}

export default Checkoutpage;