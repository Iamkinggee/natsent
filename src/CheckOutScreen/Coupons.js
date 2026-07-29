import React, { useState } from 'react';
import couponIcon from '../Icons/coupon.png';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag, faCheckCircle, faTimesCircle, faArrowRight, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

function Coupons() {
  const {
    cartSubtotal,
    cartDiscountAmount,
    cartTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    cart,
  } = useShop();

  const [inputCode, setInputCode] = useState('');

  const handleApply = (e) => {
    e.preventDefault();
    if (!inputCode.trim()) return;
    applyCoupon(inputCode);
    setInputCode('');
  };

  const isCartEmpty = cart.length === 0;

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 shadow-sm sticky top-24">
      {/* Coupon Application Box */}
      <div className="mb-6 pb-6 border-b border-gray-100">
        <div className="flex items-center gap-2 mb-3">
          <img src={couponIcon} alt="coupon icon" className="w-5 h-5 object-contain" />
          <h3 className="text-base font-bold text-slate-900">Apply Discount Coupon</h3>
        </div>

        {appliedCoupon.code ? (
          <div className="flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-xl p-3 text-sm">
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-600 text-base" />
              <div>
                <span className="font-extrabold text-emerald-800 tracking-wide">
                  {appliedCoupon.code}
                </span>
                <span className="text-xs font-semibold text-emerald-600 ml-2">
                  ({appliedCoupon.discountPercent}% OFF)
                </span>
              </div>
            </div>
            <button
              onClick={removeCoupon}
              className="text-rose-500 hover:text-rose-700 text-xs font-bold px-2 py-1 hover:bg-rose-50 rounded transition-colors flex items-center gap-1"
            >
              <FontAwesomeIcon icon={faTimesCircle} />
              <span>Remove</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleApply} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="Enter coupon (e.g. SAVE20)"
                className="w-full pl-3 pr-3 py-2.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-800 bg-gray-50 border border-gray-300 rounded-xl focus:bg-white focus:border-emerald-500 focus:outline-none transition-all placeholder-gray-400 placeholder:normal-case"
              />
            </div>
            <button
              type="submit"
              disabled={isCartEmpty}
              className="bg-slate-900 hover:bg-emerald-600 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-all shadow disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
            >
              Apply
            </button>
          </form>
        )}

        {/* Coupon Suggestions */}
        {!appliedCoupon.code && (
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <span className="text-[11px] text-gray-400 font-semibold">Available:</span>
            <button
              type="button"
              onClick={() => applyCoupon('SAVE20')}
              className="text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200/80 px-2 py-0.5 rounded-md hover:bg-amber-100 transition-colors flex items-center gap-1"
            >
              <FontAwesomeIcon icon={faTag} /> SAVE20 (20% OFF)
            </button>
            <button
              type="button"
              onClick={() => applyCoupon('HALF50')}
              className="text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80 px-2 py-0.5 rounded-md hover:bg-emerald-100 transition-colors flex items-center gap-1"
            >
              <FontAwesomeIcon icon={faTag} /> HALF50 (50% OFF)
            </button>
          </div>
        )}
      </div>

      {/* Price Summary Breakdown */}
      <div>
        <h3 className="text-base font-bold text-slate-900 mb-4">Price Details</h3>

        <div className="space-y-3 text-xs sm:text-sm text-slate-600">
          <div className="flex justify-between items-center">
            <span>Items Subtotal</span>
            <span className="font-semibold text-slate-900">${cartSubtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center">
            <span>Coupon Discount</span>
            {appliedCoupon.discountPercent > 0 ? (
              <span className="font-extrabold text-emerald-600">
                -${cartDiscountAmount.toFixed(2)} ({appliedCoupon.discountPercent}%)
              </span>
            ) : (
              <span className="text-gray-400 font-medium">No coupon applied</span>
            )}
          </div>

          <div className="flex justify-between items-center">
            <span>Express Delivery</span>
            <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
              FREE
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span>Estimated Taxes</span>
            <span className="font-medium text-gray-500">Included</span>
          </div>

          <div className="pt-3 border-t-2 border-gray-100 flex justify-between items-center">
            <span className="text-base font-extrabold text-slate-900">Total Payable</span>
            <span className="text-xl font-extrabold text-slate-900">
              ${cartTotal.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          {isCartEmpty ? (
            <button
              disabled
              className="w-full bg-gray-200 text-gray-400 font-bold py-3.5 px-4 rounded-xl cursor-not-allowed text-center text-sm"
            >
              Cart is Empty
            </button>
          ) : (
            <Link
              to="/paymentpage"
              className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-3.5 px-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 text-sm sm:text-base group"
            >
              <span>Proceed to Checkout</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          )}
        </div>

        {/* Trust Badge */}
        <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-gray-400 text-center font-medium">
          <FontAwesomeIcon icon={faShieldAlt} className="text-emerald-500 text-xs" />
          <span>256-Bit SSL Encrypted & Guaranteed Safe Checkout</span>
        </div>
      </div>
    </div>
  );
}

export default Coupons;