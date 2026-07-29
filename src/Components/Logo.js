import React from 'react';
import { Link } from 'react-router-dom';
import Apple from '../Icons/Apple.png';

function Logo({ light = false }) {
  return (
    <Link to="/" className="flex items-center gap-2 group cursor-pointer">
      <div className="w-6 h-6 flex items-center justify-center">
        <img src={Apple} alt="Apple Logo" className="w-full h-full object-contain filter group-hover:scale-110 transition-transform duration-200" />
      </div>
      <span className={`font-extrabold text-base sm:text-lg md:text-xl tracking-tight ${light ? 'text-white' : 'text-slate-900'}`}>
        NATSENT <span className="text-emerald-600 font-normal">Store</span>
      </span>
    </Link>
  );
}

export default Logo;