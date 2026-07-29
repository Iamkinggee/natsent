import React from 'react';

function InfoCard({ image, cardtitle, carddiscription }) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
        {image}
      </div>
      <h3 className="font-bold text-sm text-slate-900 tracking-wide uppercase mb-1">
        {cardtitle}
      </h3>
      <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
        {carddiscription}
      </p>
    </div>
  );
}

export default InfoCard;