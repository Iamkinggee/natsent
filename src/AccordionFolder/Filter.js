import React, { useState } from 'react';
import Accordion from './Accordion';
import { useShop } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faRotateLeft, faTimes } from '@fortawesome/free-solid-svg-icons';

const Filter = ({ isMobile = false, onClose }) => {
  const { filters, setFilters, resetFilters } = useShop();

  const [openSections, setOpenSections] = useState({
    price: true,
    color: true,
    storage: false,
    discount: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handlePriceChange = (maxPrice) => {
    setFilters((prev) => ({
      ...prev,
      priceMax: prev.priceMax === maxPrice ? null : maxPrice,
    }));
  };

  const handleColorToggle = (color) => {
    setFilters((prev) => {
      const exists = prev.colors.includes(color);
      return {
        ...prev,
        colors: exists ? prev.colors.filter((c) => c !== color) : [...prev.colors, color],
      };
    });
  };

  const handleStorageToggle = (size) => {
    setFilters((prev) => {
      const exists = prev.storage.includes(size);
      return {
        ...prev,
        storage: exists ? prev.storage.filter((s) => s !== size) : [...prev.storage, size],
      };
    });
  };

  const handleDiscountToggle = () => {
    setFilters((prev) => ({
      ...prev,
      discountOnly: !prev.discountOnly,
    }));
  };

  return (
    <div className={`w-full ${isMobile ? 'p-2' : 'pr-2'}`}>
      {/* Header for Filter Sidebar */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faFilter} className="text-emerald-600" />
          <h2 className="font-extrabold text-sm sm:text-base text-slate-900 tracking-wide uppercase">
            Filter Products
          </h2>
        </div>
        {isMobile && onClose && (
          <button onClick={onClose} className="p-1 text-slate-400 hover:text-slate-700">
            <FontAwesomeIcon icon={faTimes} className="text-lg" />
          </button>
        )}
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {/* PRICE FILTER */}
        <Accordion
          title="PRICE RANGE"
          isOpen={openSections.price}
          toggleAccordion={() => toggleSection('price')}
          data={
            <div className="space-y-2 text-xs font-medium text-slate-700">
              {[
                { label: 'All Prices', max: null },
                { label: 'Under $500', max: 500 },
                { label: 'Under $800', max: 800 },
                { label: '$1,000 & Above', max: 9999 },
              ].map((opt) => (
                <label
                  key={opt.label}
                  className="flex items-center gap-2.5 cursor-pointer hover:text-emerald-600 transition-colors"
                >
                  <input
                    type="radio"
                    name="priceRange"
                    checked={filters.priceMax === opt.max}
                    onChange={() => handlePriceChange(opt.max)}
                    className="accent-emerald-600 w-4 h-4 cursor-pointer"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
          }
        />

        {/* COLOUR FILTER */}
        <Accordion
          title="COLOUR"
          isOpen={openSections.color}
          toggleAccordion={() => toggleSection('color')}
          data={
            <div className="space-y-2 text-xs font-medium text-slate-700">
              {['Black', 'Gray', 'White', 'Blue', 'Light Blue', 'Gold'].map((col) => (
                <label
                  key={col}
                  className="flex items-center gap-2.5 cursor-pointer hover:text-emerald-600 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={filters.colors.includes(col)}
                    onChange={() => handleColorToggle(col)}
                    className="accent-emerald-600 w-4 h-4 rounded cursor-pointer"
                  />
                  <span>{col}</span>
                </label>
              ))}
            </div>
          }
        />

        {/* STORAGE FILTER */}
        <Accordion
          title="STORAGE CAPACITY"
          isOpen={openSections.storage}
          toggleAccordion={() => toggleSection('storage')}
          data={
            <div className="space-y-2 text-xs font-medium text-slate-700">
              {['64gb', '128gb', '256gb', '512gb', '1Tb'].map((s) => (
                <label
                  key={s}
                  className="flex items-center gap-2.5 cursor-pointer hover:text-emerald-600 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={filters.storage.includes(s)}
                    onChange={() => handleStorageToggle(s)}
                    className="accent-emerald-600 w-4 h-4 rounded cursor-pointer"
                  />
                  <span>{s.toUpperCase()}</span>
                </label>
              ))}
            </div>
          }
        />

        {/* DISCOUNT FILTER */}
        <Accordion
          title="SPECIAL OFFERS"
          isOpen={openSections.discount}
          toggleAccordion={() => toggleSection('discount')}
          data={
            <div className="space-y-2 text-xs font-medium text-slate-700">
              <label className="flex items-center gap-2.5 cursor-pointer hover:text-emerald-600 transition-colors">
                <input
                  type="checkbox"
                  checked={filters.discountOnly}
                  onChange={handleDiscountToggle}
                  className="accent-emerald-600 w-4 h-4 rounded cursor-pointer"
                />
                <span className="font-semibold text-rose-600">On Sale / Discounted</span>
              </label>
            </div>
          }
        />
      </div>

      {/* Reset Action */}
      <button
        onClick={resetFilters}
        className="w-full mt-5 py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 border border-slate-200"
      >
        <FontAwesomeIcon icon={faRotateLeft} /> Reset All Filters
      </button>
    </div>
  );
};

export default Filter;
