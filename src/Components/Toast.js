import React from 'react';
import { useShop } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faInfoCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

function Toast() {
  const { toast } = useShop();

  if (!toast) return null;

  const bgColors = {
    success: 'bg-emerald-600 border-emerald-400 text-white',
    info: 'bg-blue-600 border-blue-400 text-white',
    error: 'bg-rose-600 border-rose-400 text-white',
  };

  const icons = {
    success: faCheckCircle,
    info: faInfoCircle,
    error: faExclamationCircle,
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce transition-all duration-300">
      <div
        className={`flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-2xl border ${
          bgColors[toast.type] || bgColors.success
        }`}
      >
        <FontAwesomeIcon icon={icons[toast.type] || icons.success} className="text-xl" />
        <span className="font-medium text-sm sm:text-base">{toast.message}</span>
      </div>
    </div>
  );
}

export default Toast;
