import React from 'react';
import bin from '../Icons/bin.png';
import { useShop } from '../context/ShopContext';

function PhoneCard({ item }) {
  const { updateCartQuantity, removeFromCart } = useShop();

  if (!item) return null;

  const parsePrice = (val) => {
    if (typeof val === 'number') return val;
    if (!val) return 0;
    return parseFloat(val.toString().replace(/[^0-9.]/g, '')) || 0;
  };

  const unitPrice = item.numPrice || parsePrice(item.price);
  const lineTotal = unitPrice * item.quantity;

  return (
    <div className="w-full bg-white rounded-2xl border border-gray-200/90 p-4 sm:p-5 mb-4 shadow-sm hover:shadow-md transition-all">
      <div className="flex flex-col sm:flex-row items-center gap-5">
        {/* Phone Image */}
        <div className="w-24 h-24 sm:w-28 sm:h-28 bg-slate-50 rounded-xl p-2 flex items-center justify-center border border-gray-100 shrink-0">
          <img
            loading="lazy"
            src={item.image}
            alt={item.name}
            className="max-h-full max-w-full object-contain drop-shadow-sm"
          />
        </div>

        {/* Specs & Details */}
        <div className="flex-1 w-full flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="font-bold text-base sm:text-lg text-slate-900 capitalize leading-snug">
                  {item.name}
                </h3>
                <div className="flex flex-wrap gap-2 mt-2 text-xs font-semibold text-slate-600">
                  <span className="bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60">
                    RAM: {item.ram || '4GB'}
                  </span>
                  <span className="bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60">
                    ROM: {item.rom || '64GB'}
                  </span>
                  <span className="bg-slate-100 px-2.5 py-1 rounded-md border border-slate-200/60">
                    Color: {item.color || 'Black'}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-lg font-extrabold text-emerald-600 block">
                  ${lineTotal.toFixed(2)}
                </span>
                {item.quantity > 1 && (
                  <span className="text-xs text-gray-400 font-medium block">
                    (${unitPrice.toFixed(2)} each)
                  </span>
                )}
              </div>
            </div>

            <p className="text-xs text-emerald-700 bg-emerald-50 inline-block px-2.5 py-1 rounded-md font-medium mt-3">
              ✓ Free Express Shipping • 14 Days Return Period
            </p>
          </div>

          {/* Quantity Controls & Remove */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Qty:
              </span>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-50">
                <button
                  type="button"
                  onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 font-bold text-slate-700 text-sm transition-colors"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-10 text-center font-bold text-sm text-slate-900">
                  {item.quantity}
                </span>
                <button
                  type="button"
                  onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 font-bold text-slate-700 text-sm transition-colors"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            <button
              type="button"
              onClick={() => removeFromCart(item.id)}
              className="flex items-center gap-1.5 text-rose-600 hover:text-rose-700 text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-rose-50 transition-colors"
            >
              <img src={bin} alt="delete icon" className="w-3.5 h-3.5" />
              <span>Remove</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhoneCard;
