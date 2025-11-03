import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },

    { name: 'Services', path: '/services' },
    { name: 'Team', path: '/team' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed  top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-slate-900 shadow-2xl py-3'
          : 'bg-gradient-to-b from-slate-900/90 to-transparent py-6'
      }`}
    >
      <div className='sm:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center'>
          <Link to='/' className='flex items-center space-x-3'>
            <div className='relative'>
              {/* <Leaf className="w-10 h-10 text-emerald-400" /> */}
              <img
                src='/logo.png'
                alt='TAZEJ GLOBAL TRADING W.L.L'
                className='h-12 w-auto'
              />
              {/* <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div> */}
            </div>
            <div>
              <span className='md:text-2xl font-bold text-white block leading-tight'>
                TAZEJ GLOBAL
                <span className='text-sm md:text-xl pl-2 text-emerald-400 tracking-widest'>
                  طازج جلوبال
                </span>
              </span>
              <span className='md:text-lg font-bold text-white tracking-widest'>
                TRADING W.L.L
              </span>
              <span className='text-sm md:text-xl pl-4 text-emerald-400 tracking-widest'>
                للتجارة ذ.م.م
              </span>
            </div>
          </Link>

          <div className='hidden lg:flex space-x-1'>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  location.pathname === item.path
                    ? 'bg-emerald-500 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='lg:hidden p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors'
          >
            {isMenuOpen ? (
              <X className='text-white' size={24} />
            ) : (
              <Menu className='text-white' size={24} />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className='lg:hidden mt-4 bg-slate-800 rounded-xl shadow-2xl overflow-hidden'>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className='block w-full text-left px-6 py-4 text-gray-300 hover:text-white hover:bg-slate-700 transition-colors border-b border-slate-700 last:border-0'
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
