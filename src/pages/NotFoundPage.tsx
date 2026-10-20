import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft, Home, Calculator, PhoneCall } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';
import { AdBanner } from '../components/AdBanner';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between text-slate-900">
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mx-auto shadow-xs">
          <ShieldAlert className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">
            Error 404 · Page Not Located
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            The Legal Resource Could Not Be Found
          </h1>
          <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            The link you accessed may have moved, or the URL might be mistyped. Use the navigation links below to return to safe ground.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            to="/calculator"
            className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Calculator className="w-4 h-4" />
            <span>Settlement Calculator</span>
          </Link>
        </div>

        <div className="pt-8 text-xs text-slate-500">
          Need immediate legal assistance against recovery calls? Call our helpline: <a href={`tel:${BRAND_INFO.helpline.replace(/\s+/g, '')}`} className="font-bold text-slate-800 underline">{BRAND_INFO.helpline}</a>
        </div>
      </div>

      <AdBanner />
    </div>
  );
};
