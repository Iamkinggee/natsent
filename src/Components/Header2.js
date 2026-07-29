import React from 'react';
import { useShop } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faRotateLeft } from '@fortawesome/free-solid-svg-icons';

function Header2() {
  const {
    searchQuery,
    selectedCategory,
    sortBy,
    setSortBy,
    resetFilters,
    setIsMobileFilterOpen,
  } = useShop();

  const isFiltered = searchQuery || selectedCategory !== 'All Categories';

  return (
    <div className="w-full bg-gradient-to-r from-slate-900 via-slate-800 to-emerald-950 text-white py-8 px-4 sm:px-6 lg:px-8 shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-1">
            <span>HOME</span>
            <span>/</span>
            <span className="text-gray-300">PRODUCTS</span>
            {selectedCategory !== 'All Categories' && (
              <>
                <span>/</span>
                <span className="text-white font-bold">{selectedCategory}</span>
              </>
            )}
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Premium iPhone Store
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 mt-1 max-w-xl">
            Explore original, certified, brand new and fairly used iPhones with official warranty and free nationwide delivery.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Mobile Filter Button */}
          <button
            onClick={() => setIsMobileFilterOpen(true)}
            className="md:hidden flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold px-3 py-2 rounded-lg border border-slate-700"
          >
            <FontAwesomeIcon icon={faSliders} /> Filter
          </button>

          {/* Reset Filters Button */}
          {isFiltered && (
            <button
              onClick={resetFilters}
              className="flex items-center gap-1.5 bg-rose-600/30 hover:bg-rose-600 text-rose-300 hover:text-white text-xs font-semibold px-3 py-2 rounded-lg border border-rose-500/30 transition-all"
            >
              <FontAwesomeIcon icon={faRotateLeft} /> Reset
            </button>
          )}

          {/* Sort Selector */}
          <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur px-3 py-1.5 rounded-lg border border-slate-700">
            <label className="text-xs font-medium text-gray-300">Sort By:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-xs font-bold text-emerald-400 outline-none cursor-pointer"
            >
              <option value="featured" className="bg-slate-800 text-white">
                Featured
              </option>
              <option value="price-low" className="bg-slate-800 text-white">
                Price: Low to High
              </option>
              <option value="price-high" className="bg-slate-800 text-white">
                Price: High to Low
              </option>
              <option value="name-asc" className="bg-slate-800 text-white">
                Name: A - Z
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header2;