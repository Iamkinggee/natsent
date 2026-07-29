import React from 'react';
import Apple from '../Icons/Apple.png';

function Footer() {
  return (
    <footer className="w-full bg-slate-950 text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-2 mb-3">
            <img src={Apple} alt="Apple logo" className="w-6 h-6 brightness-200 invert" />
            <span className="font-extrabold text-lg text-white tracking-tight">NATSENT Store</span>
          </div>
          <p className="text-xs text-gray-400 leading-relaxed mb-4">
            Your trusted destination for certified iPhones, authentic accessories, fast delivery, and standard manufacturer warranty.
          </p>
          <div className="text-xs space-y-1.5 font-medium">
            <p>📍 Address: B1, Tech Avenue, Victoria Island, Nigeria</p>
            <p>📞 Phone: +234 901 283 4567</p>
            <p>✉️ Email: support@natsentstore.com</p>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
            Company
          </h4>
          <ul className="space-y-2 text-xs">
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">About Natsent</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">Careers</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">Our Outlets</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">Consultants</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">Store Locations</li>
          </ul>
        </div>

        {/* Policy Info */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
            Customer Policy
          </h4>
          <ul className="space-y-2 text-xs">
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">Order Tracking</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">Return & Exchange Policy</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">Warranty Details</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">Help & FAQs</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        {/* Account Info */}
        <div>
          <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
            My Account
          </h4>
          <ul className="space-y-2 text-xs">
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">Shopping Cart</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">Saved Wishlist</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">Payment Options</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-emerald-400 transition-colors cursor-pointer">Support Desk</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
