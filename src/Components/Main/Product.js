import React from 'react';
import Rating from '../Rating';
import { useShop } from '../../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart, faEye, faCheck } from '@fortawesome/free-solid-svg-icons';

function Product() {
  const {
    products,
    searchQuery,
    selectedCategory,
    filters,
    sortBy,
    currentPage,
    setQuickViewProduct,
    addToCart,
    wishlist,
    toggleWishlist,
  } = useShop();

  const parsePrice = (priceStr) => {
    if (typeof priceStr === 'number') return priceStr;
    if (!priceStr) return 0;
    return parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
  };

  // Filter products based on search, category, and accordion filters
  let filtered = products.filter((item) => {
    // Search query filter
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      if (!matchName) return false;
    }

    // Category filter
    if (selectedCategory !== 'All Categories') {
      const catLower = selectedCategory.toLowerCase();
      if (!item.name.toLowerCase().includes(catLower)) return false;
    }

    // Price Max filter
    const numPrice = parsePrice(item.price);
    if (filters.priceMax && numPrice > filters.priceMax) return false;

    return true;
  });

  // Sort products
  filtered.sort((a, b) => {
    const priceA = parsePrice(a.price);
    const priceB = parsePrice(b.price);

    if (sortBy === 'price-low') return priceA - priceB;
    if (sortBy === 'price-high') return priceB - priceA;
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    return a.id - b.id; // default featured
  });

  // Pagination logic (8 items per page)
  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filtered.slice(startIndex, startIndex + itemsPerPage);

  if (filtered.length === 0) {
    return (
      <div className="w-full bg-white rounded-2xl p-12 text-center border border-gray-200 shadow-sm">
        <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">
          🔍
        </div>
        <h3 className="text-xl font-bold text-gray-800">No products found</h3>
        <p className="text-sm text-gray-500 mt-2">
          Try adjusting your search criteria or resetting filters to see available iPhones.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {paginatedProducts.map((item, index) => {
          const isWishlisted = wishlist.includes(item.id);
          const isSale = index % 3 === 2; // Demo sale badge for variety

          return (
            <div
              key={item.id || index}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group relative"
            >
              {/* Badges */}
              <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
                {isSale && (
                  <span className="bg-rose-500 text-white font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-full shadow-md">
                    SALE -20%
                  </span>
                )}
                {index === 0 && (
                  <span className="bg-emerald-600 text-white font-extrabold text-[10px] uppercase px-2.5 py-1 rounded-full shadow-md">
                    HOT ITEM
                  </span>
                )}
              </div>

              {/* Product Image Container */}
              <div className="relative p-6 pt-10 bg-gradient-to-b from-gray-50/80 to-white flex items-center justify-center overflow-hidden">
                <img
                  loading="lazy"
                  src={item.image}
                  alt={item.name}
                  className="h-44 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                />

                {/* Quick Action Overlay Bar */}
                <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 px-4">
                  <button
                    onClick={() => addToCart(item)}
                    className="w-10 h-10 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110"
                    title="Add to Cart"
                  >
                    <FontAwesomeIcon icon={faShoppingCart} className="text-sm" />
                  </button>

                  <button
                    onClick={() => toggleWishlist(item.id)}
                    className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-transform hover:scale-110 ${
                      isWishlisted
                        ? 'bg-rose-500 text-white'
                        : 'bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-500'
                    }`}
                    title="Wishlist"
                  >
                    <FontAwesomeIcon icon={isWishlisted ? faCheck : faHeart} className="text-sm" />
                  </button>

                  <button
                    onClick={() => setQuickViewProduct(item)}
                    className="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110"
                    title="Quick Preview"
                  >
                    <FontAwesomeIcon icon={faEye} className="text-sm" />
                  </button>
                </div>
              </div>

              {/* Product Info Footer */}
              <div className="p-4 bg-white flex flex-col flex-1 justify-between border-t border-gray-50">
                <div>
                  <span className="text-[11px] font-semibold text-emerald-600 uppercase tracking-wider block mb-1">
                    Apple Certified
                  </span>
                  <h4 className="font-bold text-sm text-slate-800 hover:text-emerald-600 transition-colors line-clamp-1">
                    {item.name}
                  </h4>
                  <div className="my-2">
                    <Rating rating={5} />
                  </div>
                </div>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <div>
                    <span className="text-xs text-gray-400 block line-through">$700</span>
                    <span className="text-base font-extrabold text-slate-900">{item.price}</span>
                  </div>

                  <button
                    onClick={() => addToCart(item)}
                    className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 hover:underline flex items-center gap-1"
                  >
                    + Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;
