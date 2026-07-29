import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';
import Header1 from '../Components/Header1';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Copyright from '../Components/Copyright';
import g from '../Icons/g.png';
import pay from '../Icons/pay.png';
import cardd from '../Icons/cardd.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faCheckCircle,
  faLock,
  faTruck,
  faCreditCard,
  faMoneyBillWave,
  faShoppingBag,
  faShieldAlt,
  faUser,
  faMapMarkerAlt,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

const Paymentpage = () => {
  const navigate = useNavigate();
  const {
    cart,
    cartSubtotal,
    cartDiscountAmount,
    cartTotal,
    appliedCoupon,
    clearCart,
    showToast,
  } = useShop();

  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1 234 567 8900',
    address: '123 Tech Street, Suite 400',
    city: 'New York',
    zipCode: '10001',
    cardName: 'John Doe',
    cardNumber: '4532 8921 7724 9012',
    expiration: '12/28',
    cvv: '888',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      showToast('Your cart is empty!', 'error');
      return;
    }

    if (!formData.fullName || !formData.address || !formData.phone) {
      showToast('Please fill in all shipping details', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simulate order placement
    setTimeout(() => {
      const generatedOrderId = 'NAT-' + Math.floor(100000 + Math.random() * 900000);
      const newOrder = {
        orderId: generatedOrderId,
        items: [...cart],
        subtotal: cartSubtotal,
        discount: cartDiscountAmount,
        total: cartTotal,
        shippingInfo: { ...formData },
        paymentMethod,
        date: new Date().toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }),
      };

      setIsSubmitting(false);
      setOrderConfirmed(newOrder);
      showToast(`Order ${generatedOrderId} placed successfully!`, 'success');
    }, 1200);
  };

  const handleCloseConfirmation = () => {
    clearCart();
    setOrderConfirmed(null);
    navigate('/');
  };

  if (cart.length === 0 && !orderConfirmed) {
    return (
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Header1 />
        <Navbar />
        <div className="flex-1 max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
            <FontAwesomeIcon icon={faShoppingBag} className="text-3xl" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">No Items to Checkout</h2>
          <p className="text-slate-500 mb-6">
            Your cart is currently empty. Add products before proceeding to checkout.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Return to Shop</span>
          </Link>
        </div>
        <Footer />
        <Copyright />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header1 />
      <Navbar />

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Back Link & Header */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/checkoutpage"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} />
            <span>Return to Shopping Cart</span>
          </Link>
        </div>

        {/* Stepper Bar */}
        <div className="mb-8 bg-white p-4 sm:p-5 rounded-2xl border border-gray-200/80 shadow-sm">
          <div className="flex items-center justify-between max-w-2xl mx-auto">
            {/* Step 1: Cart */}
            <Link to="/checkoutpage" className="flex items-center gap-2.5 text-gray-500 font-medium text-xs sm:text-sm hover:text-slate-800">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <FontAwesomeIcon icon={faCheckCircle} />
              </span>
              <span>1. Shopping Cart</span>
            </Link>

            <div className="flex-1 h-0.5 bg-emerald-500 mx-3 sm:mx-6"></div>

            {/* Step 2: Payment */}
            <div className="flex items-center gap-2.5 text-emerald-600 font-bold text-xs sm:text-sm">
              <span className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-extrabold shadow">
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

        {/* Main Payment & Checkout Layout */}
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Details */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            {/* Shipping Address Section */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm">
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-gray-100">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-emerald-600 text-lg" />
                <h2 className="text-lg font-bold text-slate-900">Shipping & Contact Details</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:border-emerald-500 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 234 567 8900"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:border-emerald-500 focus:outline-none transition-all"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:border-emerald-500 focus:outline-none transition-all"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="123 Main Street, Apt 4B"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:border-emerald-500 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="New York"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:border-emerald-500 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Postal / ZIP Code *
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    required
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    placeholder="10001"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:border-emerald-500 focus:outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selector Section */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm">
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-gray-100">
                <FontAwesomeIcon icon={faLock} className="text-emerald-600 text-lg" />
                <h2 className="text-lg font-bold text-slate-900">Select Payment Method</h2>
              </div>

              {/* Options */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                {/* Credit Card */}
                <label
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'creditCard'
                      ? 'border-emerald-500 bg-emerald-50/50 shadow-sm'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="creditCard"
                    checked={paymentMethod === 'creditCard'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <img src={cardd} alt="Credit Card" className="h-6 object-contain mb-1.5" />
                  <span className="text-xs font-bold text-slate-800">Card</span>
                </label>

                {/* Google Pay */}
                <label
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'gpay'
                      ? 'border-emerald-500 bg-emerald-50/50 shadow-sm'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="gpay"
                    checked={paymentMethod === 'gpay'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <img src={g} alt="Google Pay" className="h-6 object-contain mb-1.5" />
                  <span className="text-xs font-bold text-slate-800">Google Pay</span>
                </label>

                {/* Paytm / Digital Wallet */}
                <label
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'paytm'
                      ? 'border-emerald-500 bg-emerald-50/50 shadow-sm'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paytm"
                    checked={paymentMethod === 'paytm'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <img src={pay} alt="Paytm" className="h-6 object-contain mb-1.5" />
                  <span className="text-xs font-bold text-slate-800">Paytm</span>
                </label>

                {/* Cash on Delivery */}
                <label
                  className={`flex flex-col items-center justify-center p-3 rounded-xl border-2 cursor-pointer transition-all ${
                    paymentMethod === 'cod'
                      ? 'border-emerald-500 bg-emerald-50/50 shadow-sm'
                      : 'border-gray-200 hover:border-gray-300 bg-white'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <FontAwesomeIcon icon={faMoneyBillWave} className="text-emerald-600 text-xl mb-1.5" />
                  <span className="text-xs font-bold text-slate-800">Cash on Delivery</span>
                </label>
              </div>

              {/* Conditional Card Fields */}
              {paymentMethod === 'creditCard' && (
                <div className="space-y-4 pt-2 border-t border-gray-100">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Name on Card
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:border-emerald-500 focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Card Number
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="XXXX XXXX XXXX XXXX"
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:border-emerald-500 focus:outline-none font-mono transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Expiration (MM/YY)
                      </label>
                      <input
                        type="text"
                        name="expiration"
                        value={formData.expiration}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:border-emerald-500 focus:outline-none font-mono transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        CVV Code
                      </label>
                      <input
                        type="password"
                        name="cvv"
                        maxLength="4"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="***"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm text-slate-800 bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:border-emerald-500 focus:outline-none font-mono transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'gpay' && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    You will be prompted to authenticate with Google Pay when completing your order.
                  </p>
                </div>
              )}

              {paymentMethod === 'paytm' && (
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center">
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    Paytm QR / UPI Payment prompt will be rendered upon clicking "Place Order".
                  </p>
                </div>
              )}

              {paymentMethod === 'cod' && (
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
                  <p className="text-xs sm:text-sm text-amber-800 font-semibold">
                    Pay cash upon delivery. No upfront payment required.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Order Summary Sidebar */}
          <div className="lg:col-span-5 xl:col-span-4 sticky top-24">
            <div className="bg-white p-6 rounded-2xl border border-gray-200/90 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-4 pb-3 border-b border-gray-100">
                Order Summary ({cart.reduce((s, i) => s + i.quantity, 0)})
              </h2>

              {/* Items Mini List */}
              <div className="max-h-60 overflow-y-auto space-y-3 mb-5 pr-1">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 text-xs sm:text-sm">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 object-contain bg-slate-50 p-1 rounded-lg border border-gray-100 shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-slate-900 truncate capitalize">{item.name}</p>
                      <p className="text-xs text-gray-500">
                        Qty: {item.quantity} • {item.ram || '4GB'}
                      </p>
                    </div>
                    <span className="font-bold text-slate-900">
                      ${((item.numPrice || 500) * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2.5 text-xs sm:text-sm pt-4 border-t border-gray-100">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-semibold text-slate-900">${cartSubtotal.toFixed(2)}</span>
                </div>

                {appliedCoupon.discountPercent > 0 && (
                  <div className="flex justify-between text-emerald-600 font-semibold">
                    <span>Discount ({appliedCoupon.code})</span>
                    <span>-${cartDiscountAmount.toFixed(2)}</span>
                  </div>
                )}

                <div className="flex justify-between text-slate-600">
                  <span>Express Shipping</span>
                  <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                    FREE
                  </span>
                </div>

                <div className="pt-3 border-t-2 border-gray-100 flex justify-between items-center text-slate-900">
                  <span className="text-base font-extrabold">Grand Total</span>
                  <span className="text-xl font-extrabold text-emerald-600">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 bg-amber-500 hover:bg-amber-600 text-white font-extrabold py-4 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all text-base flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Processing Order...</span>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faLock} className="text-sm" />
                    <span>Place Order (${cartTotal.toFixed(2)})</span>
                  </>
                )}
              </button>

              <div className="mt-4 text-center">
                <p className="text-[11px] text-gray-400 font-medium flex items-center justify-center gap-1">
                  <FontAwesomeIcon icon={faShieldAlt} className="text-emerald-500" />
                  <span>30-Day Money Back Guarantee</span>
                </p>
              </div>
            </div>
          </div>
        </form>
      </main>

      {/* Order Confirmation Modal */}
      {orderConfirmed && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <FontAwesomeIcon icon={faCheckCircle} className="text-4xl" />
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 text-center mb-1">
              Order Confirmed!
            </h3>
            <p className="text-center text-xs sm:text-sm text-gray-500 mb-6">
              Thank you for shopping with Natsent. Your order has been placed and is being processed.
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mb-6 space-y-2 text-xs sm:text-sm">
              <div className="flex justify-between">
                <span className="text-gray-500">Order ID:</span>
                <span className="font-mono font-bold text-slate-900">{orderConfirmed.orderId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Date:</span>
                <span className="font-semibold text-slate-900">{orderConfirmed.date}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Total Amount Paid:</span>
                <span className="font-bold text-emerald-600">${orderConfirmed.total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Shipping To:</span>
                <span className="font-semibold text-slate-900 truncate max-w-[200px]">
                  {orderConfirmed.shippingInfo.fullName}, {orderConfirmed.shippingInfo.city}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Estimated Delivery:</span>
                <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  2-4 Business Days
                </span>
              </div>
            </div>

            <button
              onClick={handleCloseConfirmation}
              className="w-full bg-slate-900 hover:bg-emerald-600 text-white font-bold py-3.5 px-4 rounded-xl transition-all shadow-md"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      )}

      <Footer />
      <Copyright />
    </div>
  );
};

export default Paymentpage;
