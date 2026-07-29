import React from 'react';
import { useShop } from './context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

function Pagination() {
  const { currentPage, setCurrentPage, products } = useShop();

  const totalItems = products.length;
  const itemsPerPage = 8;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 py-8 my-4">
      {/* Prev Button */}
      <button
        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
        disabled={currentPage === 1}
        className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs transition-all ${
          currentPage === 1
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white border border-gray-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-300 shadow-sm'
        }`}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => setCurrentPage(page)}
          className={`w-9 h-9 rounded-xl font-bold text-xs transition-all ${
            currentPage === page
              ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
              : 'bg-white border border-gray-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-300 shadow-sm'
          }`}
        >
          {page}
        </button>
      ))}

      {/* Next Button */}
      <button
        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
        disabled={currentPage === totalPages}
        className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-xs transition-all ${
          currentPage === totalPages
            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'bg-white border border-gray-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-300 shadow-sm'
        }`}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
}

export default Pagination;