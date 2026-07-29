import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { useShop } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhone, faShoppingCart, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [nav, setNav] = useState(false);
  const { totalCartCount, setIsMobileFilterOpen } = useShop();
  const location = useLocation();

  const toggleNav = () => {
    setNav(!nav);
  };

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SHOP', path: '/' },
    { name: 'CART PAGE', path: '/checkoutpage', hasBadge: true },
    { name: 'CHECKOUT', path: '/paymentpage' },
  ];

  return (
    <div className="w-full bg-slate-900 text-white shadow-md relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14">
        {/* Departments Dropdown / Filter Toggle */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm px-4 py-2 rounded-lg transition-colors shadow"
          >
            <FontAwesomeIcon icon={faLayerGroup} />
            <span>FILTER PRODUCTS</span>
          </button>
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-xs font-bold uppercase tracking-wider transition-colors flex items-center gap-1.5 py-1 border-b-2 ${
                  isActive
                    ? 'border-emerald-500 text-emerald-400'
                    : 'border-transparent text-gray-300 hover:text-white hover:border-emerald-400'
                }`}
              >
                {link.name}
                {link.hasBadge && (
                  <span className="bg-emerald-600 text-white text-[11px] font-extrabold px-2 py-0.5 rounded-full">
                    {totalCartCount}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Hotline Contact Info */}
        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold">
          <span className="text-gray-400 flex items-center gap-1">
            <FontAwesomeIcon icon={faPhone} className="text-emerald-400" /> CALL US FREE:
          </span>
          <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full font-mono">
            +1 800 555-NATS
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleNav}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none p-2"
          aria-label="Toggle Navigation Menu"
        >
          <FontAwesomeIcon icon={nav ? faTimes : faBars} className="text-xl" />
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity md:hidden ${
          nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleNav}
      >
        <div
          className={`fixed top-0 left-0 w-4/5 max-w-sm h-full bg-slate-900 p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out ${
            nav ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-slate-800">
              <Logo light />
              <button onClick={toggleNav} className="text-gray-400 hover:text-white p-1">
                <FontAwesomeIcon icon={faTimes} className="text-xl" />
              </button>
            </div>

            <ul className="mt-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={toggleNav}
                    className="flex items-center justify-between text-sm font-semibold text-gray-200 hover:text-emerald-400 py-2 border-b border-slate-800"
                  >
                    <span>{link.name}</span>
                    {link.hasBadge && (
                      <span className="bg-emerald-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {totalCartCount} items
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-6 border-t border-slate-800 text-xs text-gray-400">
            <p className="font-semibold text-gray-300 mb-1">Customer Support</p>
            <p className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="text-emerald-400" /> +1 800 555-NATS
            </p>
            <p className="mt-1">Mon - Sat: 8:00 AM - 9:00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;