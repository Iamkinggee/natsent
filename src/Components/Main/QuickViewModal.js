import React, { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import Rating from '../Rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faShoppingCart, faHeart, faCheck } from '@fortawesome/free-solid-svg-icons';

function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, wishlist, toggleWishlist } = useShop();
  const [selectedColor, setSelectedColor] = useState('Space Gray');
  const [selectedStorage, setSelectedStorage] = useState('128GB');
  const [quantity, setQuantity] = useState(1);

  if (!quickViewProduct) return null;

  const isWishlisted = wishlist.includes(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, quantity, {
      color: selectedColor,
      rom: selectedStorage,
    });
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={() => setQuickViewProduct(null)}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Product Image Side */}
        <div className="md:w-1/2 bg-gradient-to-b from-gray-50 to-gray-100 p-8 flex items-center justify-center relative">
          <img
            src={quickViewProduct.image}
            alt={quickViewProduct.name}
            className="max-h-64 w-auto object-contain transition-transform hover:scale-105 duration-300"
          />
          <span className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">
            In Stock
          </span>
        </div>

        {/* Product Details Side */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
              {quickViewProduct.name}
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <Rating />
              <span className="text-xs text-gray-500 font-medium">(4.8 / 5 stars)</span>
            </div>

            <div className="mt-4 flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-emerald-600">
                {quickViewProduct.price}
              </span>
              <span className="text-sm font-semibold text-rose-500 bg-rose-50 px-2 py-0.5 rounded">
                20% OFF
              </span>
            </div>

            {/* Storage options */}
            <div className="mt-5">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">
                Storage Capacity
              </label>
              <div className="flex gap-2">
                {['64GB', '128GB', '256GB', '512GB'].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedStorage(opt)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                      selectedStorage === opt
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Color options */}
            <div className="mt-4">
              <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider block mb-2">
                Color
              </label>
              <div className="flex gap-2">
                {['Space Gray', 'Silver', 'Gold', 'Midnight Blue'].map((col) => (
                  <button
                    key={col}
                    onClick={() => setSelectedColor(col)}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                      selectedColor === col
                        ? 'border-emerald-600 bg-emerald-50 text-emerald-700'
                        : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    {col}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mt-5 flex items-center gap-4">
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Qty:
              </span>
              <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 font-bold text-gray-600"
                >
                  -
                </button>
                <span className="px-4 font-semibold text-sm">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1 bg-gray-100 hover:bg-gray-200 font-bold text-gray-600"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold py-3 px-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
              Add to Cart
            </button>

            <button
              onClick={() => toggleWishlist(quickViewProduct.id)}
              className={`p-3 rounded-xl border transition-all ${
                isWishlisted
                  ? 'bg-rose-50 border-rose-200 text-rose-600'
                  : 'border-gray-200 text-gray-500 hover:bg-gray-50'
              }`}
            >
              <FontAwesomeIcon icon={isWishlisted ? faCheck : faHeart} className="text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickViewModal;
