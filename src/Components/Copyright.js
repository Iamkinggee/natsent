import React from 'react';

function Copyright() {
  return (
    <div className="w-full bg-slate-950 text-gray-500 py-4 px-4 border-t border-slate-900 text-center text-xs font-medium">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <p>&copy; {new Date().getFullYear()} NATSENT iPhone Store. All Rights Reserved.</p>
        <div className="flex gap-4">
          <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
          <span>•</span>
          <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </div>
  );
}

export default Copyright;