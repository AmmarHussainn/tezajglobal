import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-3 mb-6">
            <img
              src="/logo.png"
              alt="TAZEJ GLOBAL TRADING W.L.L"
              className="h-12 w-auto"
            />
            <div>
              <span className="text-xl font-bold text-white block">
                TAZEJ GLOBAL
              </span>
              <span className="text-xs text-emerald-400 tracking-widest">
                TRADING W.L.L
              </span>
            </div>
          </div>
          <p className="text-sm text-center mb-2">
            © 2024 Tazej Global Trading W.L.L. All rights reserved.
          </p>
          <p className="text-sm text-center text-emerald-400">
            Delivering Freshness, Building Trust
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
