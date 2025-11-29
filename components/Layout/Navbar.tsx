import React, { useState, useEffect } from 'react';
import { Menu, X, Infinity } from 'lucide-react';
import { NAV_ITEMS } from '../../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Simple spy logic could go here, but since we rely on snap scroll,
      // active state is less critical than smooth nav.
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="mx-4 mt-4 rounded-2xl glass-panel shadow-sm/50 border border-white/50 bg-white/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => scrollToSection('home')}>
              <div className="w-10 h-10 rounded-xl bg-[#00C08B] flex items-center justify-center mr-3 shadow-sm group-hover:scale-105 transition-transform duration-300">
                <Infinity className="w-6 h-6 text-white" strokeWidth={3} />
              </div>
              <div className="flex items-center h-full">
                  <span className="font-extrabold text-2xl tracking-tight text-slate-900 leading-none">GE1OO</span>
                  <div className="mx-3 h-5 w-px bg-slate-400"></div>
                  <span className="text-lg text-slate-600 font-normal tracking-wide leading-none">绿电百分百</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id 
                      ? 'text-emerald-700' 
                      : 'text-slate-600 hover:text-emerald-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('join')}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-300"
              >
                加入我们
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 p-4 flex flex-col space-y-2">
             {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-left px-4 py-3 text-slate-700 font-medium hover:bg-emerald-50 rounded-xl transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={() => scrollToSection('join')}
                className="w-full mt-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-4 py-3 rounded-xl text-center font-bold shadow-lg shadow-emerald-500/20"
              >
                加入我们
              </button>
          </div>
        )}
      </div>
    </nav>
  );
};