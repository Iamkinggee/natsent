import React from 'react';
import PhoneCard from './PhoneCard';
import { useShop } from '../context/ShopContext';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function Phone() {
  const { cart } = useShop();

  if (!cart || cart.length === 0) {
    return (
      <div className="w-full bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 text-center shadow-sm">
        <div className="w-20 h-20 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-inner">
          <FontAwesomeIcon icon={faShoppingBag} className="text-3xl" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Your Shopping Cart is Empty</h3>
        <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
          Looks like you haven't added any iPhones or accessories to your cart yet. Explore our latest flagship devices and unbeatable deals!
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Explore Products</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-slate-900">
          Selected Products ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </h2>
      </div>
      <div className="space-y-4">
        {cart.map((item) => (
          <PhoneCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Phone;