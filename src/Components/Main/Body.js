import React from 'react';
import Product from './Product';
import Filter from '../../AccordionFolder/Filter';
import Info from '../Infosection/Info';
import Newsletter from '../newslettersection/Newsletter';
import Header2 from '../Header2';
import Footer from '../Footer';
import Copyright from '../Copyright';
import Navbar from '../Navbar';
import Header1 from '../Header1';
import Pagination from '../../pagination';
import { useShop } from '../../context/ShopContext';

function Body() {
  const { isMobileFilterOpen, setIsMobileFilterOpen } = useShop();

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header1 />
      <Navbar />
      <Header2 />

      {/* Main Content Area */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Desktop Filter Sidebar */}
          <aside className="hidden md:block md:col-span-1 sticky top-20 self-start bg-white p-5 rounded-2xl border border-gray-200/80 shadow-sm">
            <Filter />
          </aside>

          {/* Product Grid Column */}
          <main className="col-span-1 md:col-span-3">
            <Product />
            <Pagination />
          </main>
        </div>
      </div>

      {/* Mobile Filter Slide Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex justify-end md:hidden">
          <div className="w-4/5 max-w-sm h-full bg-white p-6 overflow-y-auto shadow-2xl animate-fade-in flex flex-col justify-between">
            <Filter isMobile onClose={() => setIsMobileFilterOpen(false)} />
          </div>
        </div>
      )}

      {/* Info, Newsletter, Footer */}
      <Info />
      <Newsletter />
      <Footer />
      <Copyright />
    </div>
  );
}

export default Body;
