import React, { useState } from 'react';
import news from '../../Icons/news.png';
import x from '../../Icons/x.png';
import pin from '../../Icons/pin.png';
import { useShop } from '../../context/ShopContext';

function Newsletter() {
  const [email, setEmail] = useState('');
  const { showToast } = useShop();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      showToast('Please enter a valid email address', 'error');
      return;
    }
    showToast('Subscribed to Natsent iPhone Deals newsletter!', 'success');
    setEmail('');
  };

  return (
    <div className="bg-slate-900 text-white py-12 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Title and Icon */}
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center p-2 border border-emerald-500/30 shrink-0">
            <img src={news} alt="Newsletter icon" className="w-6 h-6 brightness-200 invert" />
          </div>
          <div>
            <h3 className="text-lg font-extrabold uppercase tracking-wide">
              Sign Up For Exclusive iPhone Deals
            </h3>
            <p className="text-xs text-gray-400 mt-0.5">
              Subscribe to get special discount coupons, flash sales, and new arrivals directly in your inbox.
            </p>
          </div>
        </div>

        {/* Input Form & Social Icons */}
        <div className="w-full md:w-auto flex flex-col sm:flex-row items-center gap-3">
          <form onSubmit={handleSubmit} className="flex w-full sm:w-80 md:w-96 rounded-xl overflow-hidden shadow-lg border border-slate-700">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 text-xs sm:text-sm bg-slate-800 text-white outline-none placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold px-6 py-3 transition-colors shrink-0"
            >
              SUBSCRIBE
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <div className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 transition-colors p-2 flex items-center justify-center cursor-pointer border border-slate-700">
              <img src={pin} alt="Pinterest" className="w-4 h-4 brightness-200 invert" />
            </div>
            <div className="w-9 h-9 rounded-full bg-slate-800 hover:bg-emerald-600 transition-colors p-2 flex items-center justify-center cursor-pointer border border-slate-700">
              <img src={x} alt="X Twitter" className="w-4 h-4 brightness-200 invert" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
