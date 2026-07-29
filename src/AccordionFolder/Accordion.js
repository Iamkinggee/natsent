import React from 'react';

export default function Accordion(props) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden mb-3 bg-white shadow-sm transition-all hover:border-slate-300">
      <button
        className="w-full px-4 py-3 text-left font-semibold text-xs sm:text-sm text-slate-800 bg-slate-50 hover:bg-slate-100 flex items-center justify-between transition-colors"
        onClick={props.toggleAccordion}
      >
        <span>{props.title}</span>
        <span
          className={`transform transition-transform duration-300 text-xs text-slate-500 ${
            props.isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        >
          &#9660;
        </span>
      </button>
      {props.isOpen && <div className="p-4 bg-white border-t border-slate-100">{props.data}</div>}
    </div>
  );
}
