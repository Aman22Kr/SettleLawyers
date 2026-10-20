import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Shield, Phone, Menu, X, FileText, Bookmark } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BRAND_INFO } from '../data/mockData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { consultations, harassmentIncidents, savedPlans } = useApp();

  const totalSavedItems = consultations.length + harassmentIncidents.length + savedPlans.length;

  const navLinks = [
    { label: 'Services', path: '/services' },
    { label: 'Calculator', path: '/calculator' },
    { label: 'RBI Rights', path: '/rights' },
    { label: 'Insights', path: '/blogs' },
    { label: 'About', path: '/about' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      {/* Top emergency assistance micro-banner */}
      <div className="bg-slate-900 text-slate-200 text-xs py-1.5 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="font-medium text-slate-300">
              Immediate Relief Desk: Stop illegal recovery calls within 24–48 hours
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-slate-400">
            <a
              href={`tel:${BRAND_INFO.helpline.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <span>Advocate Helpline: {BRAND_INFO.helpline}</span>
            </a>
            <span className="text-slate-600">|</span>
            <Link to="/tracker" className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors">
              <FileText className="w-3.5 h-3.5" />
              <span>My Case ({totalSavedItems})</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Top Bar adhering strictly to the 1-row, 3-zone contract */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
          
          {/* Zone 1: Single Brand Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-slate-900 font-extrabold text-xl tracking-tight whitespace-nowrap shrink-0 group"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center shadow-xs group-hover:bg-slate-800 transition-colors">
              <Shield className="w-5 h-5 fill-amber-400/20" />
            </div>
            <span>
              Settle<span className="text-amber-600">Lawers</span>
            </span>
          </Link>

          {/* Zone 2: 4-5 Clean Single-Line Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-600">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`whitespace-nowrap shrink-0 transition-colors py-1 border-b-2 ${
                  isActive(item.path)
                    ? 'text-slate-900 border-slate-900'
                    : 'border-transparent hover:text-slate-900 hover:border-slate-300'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Zone 3: Exactly 1 Primary Action */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-xs active:scale-[0.98] whitespace-nowrap shrink-0"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              to="/contact"
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-slate-900 rounded-md whitespace-nowrap"
            >
              Consult
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-md"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-md text-base font-semibold transition-colors ${
                    isActive(item.path)
                      ? 'bg-slate-100 text-slate-900'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/tracker"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-base font-semibold text-slate-600 hover:bg-slate-50 hover:text-slate-900 flex items-center justify-between"
              >
                <span>My Saved Case & Logs</span>
                <span className="text-xs bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-bold">
                  {totalSavedItems}
                </span>
              </Link>
            </nav>

            <div className="pt-4 border-t border-slate-100">
              <a
                href={`tel:${BRAND_INFO.helpline.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 mb-2 text-sm font-semibold text-slate-800 bg-slate-100 rounded-lg hover:bg-slate-200"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>Call Helpline: {BRAND_INFO.helpline}</span>
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center w-full py-3 text-sm font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-800 shadow-sm"
              >
                Book Free Confidential Consultation
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
