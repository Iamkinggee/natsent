import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import lens from '../Icons/lens.png';
import { useShop } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

function Header1() {
  const {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    totalCartCount,
    wishlist,
    showToast,
  } = useShop();

  const categories = [
    'All Categories',
    'iPhone 11',
    'iPhone 12',
    'iPhone 13',
    'iPhone 14',
    'iPhone 15',
    'iPhone SE',
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Logo />
        </div>

        {/* Search & Category Filter Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl items-center mx-4">
          <div className="flex w-full border-2 border-emerald-500 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-emerald-300 transition-all">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-gray-100 text-xs sm:text-sm font-medium text-gray-700 px-3 py-2 border-r border-gray-200 outline-none cursor-pointer hover:bg-gray-200 transition-colors"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search iPhone models, accessories..."
              className="w-full px-4 py-2 text-sm text-gray-800 outline-none placeholder-gray-400"
            />

            <button
              onClick={() => showToast(`Searching for "${searchQuery}"`, 'info')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 flex items-center justify-center transition-colors"
            >
              <img src={lens} alt="search icon" className="w-4 h-4 brightness-200 invert" />
            </button>
          </div>
        </div>

        {/* Action Buttons: Wishlist, Cart, Login */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Wishlist Link */}
          <button
            onClick={() => showToast(`Wishlist contains ${wishlist.length} item(s)`, 'info')}
            className="relative p-2 text-gray-600 hover:text-rose-600 transition-colors"
            title="View Wishlist"
          >
            <FontAwesomeIcon icon={faHeart} className="text-xl" />
            {wishlist.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Cart Link */}
          <Link
            to="/checkoutpage"
            className="relative p-2 text-gray-600 hover:text-emerald-600 transition-colors"
            title="View Shopping Cart"
          >
            <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
            {totalCartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-emerald-600 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full shadow animate-pulse">
                {totalCartCount}
              </span>
            )}
          </Link>

          {/* Login / User button */}
          <button
            onClick={() => showToast('Login / Signup modal coming soon', 'info')}
            className="flex items-center gap-2 bg-slate-900 hover:bg-emerald-700 text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-xl transition-all shadow hover:shadow-md"
          >
            <FontAwesomeIcon icon={faUser} />
            <span className="hidden sm:inline">LOGIN / SIGNUP</span>
          </button>
        </div>
      </div>

      {/* Mobile Search Bar Row */}
      <div className="md:hidden px-4 pb-3">
        <div className="flex w-full border border-gray-300 rounded-lg overflow-hidden shadow-sm">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search iPhones..."
            className="w-full px-3 py-1.5 text-xs text-gray-800 outline-none"
          />
          <button className="bg-emerald-600 text-white px-3 flex items-center justify-center">
            <img src={lens} alt="search" className="w-3.5 h-3.5 brightness-200 invert" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header1;
