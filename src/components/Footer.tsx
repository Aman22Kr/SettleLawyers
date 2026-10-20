import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, MapPin, Phone, Mail, Clock, Scale } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-2.5 text-white font-extrabold text-xl tracking-tight">
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-700 text-amber-400 flex items-center justify-center">
                <Shield className="w-4 h-4 fill-amber-400/20" />
              </div>
              <span>
                Settle<span className="text-amber-500">Lawers</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              SettleLawers is a premier advocate-led debt resolution practice. We shield vulnerable borrowers from illegal collection agent harassment while negotiating legitimate, RBI-compliant one-time settlements.
            </p>
            <div className="pt-2 text-xs text-slate-500 space-y-1">
              <p>Registered Advocate Panel · Bar Council of Delhi Affiliated</p>
              <p>Operating under Reserve Bank of India (RBI) Fair Practices Guidelines</p>
            </div>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
              Legal Protection
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services/anti-harassment" className="hover:text-amber-400 transition-colors">
                  Anti-Harassment Shield
                </Link>
              </li>
              <li>
                <Link to="/services/legal-defense" className="hover:text-amber-400 transition-colors">
                  Section 138 Notice Defense
                </Link>
              </li>
              <li>
                <Link to="/services/legal-defense" className="hover:text-amber-400 transition-colors">
                  Arbitration & DRT Court
                </Link>
              </li>
              <li>
                <Link to="/services/loan-settlement" className="hover:text-amber-400 transition-colors">
                  Credit Card Settlement
                </Link>
              </li>
              <li>
                <Link to="/services/loan-settlement" className="hover:text-amber-400 transition-colors">
                  Personal & NBFC Loans
                </Link>
              </li>
              <li>
                <Link to="/rights" className="hover:text-amber-400 transition-colors">
                  Borrower Rights (8AM-7PM)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Tools & Resources */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
              Resources & Tools
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/calculator" className="hover:text-amber-400 transition-colors">
                  Settlement Calculator
                </Link>
              </li>
              <li>
                <Link to="/rights" className="hover:text-amber-400 transition-colors">
                  RBI Circulars Directory
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-amber-400 transition-colors">
                  Legal Advice Articles
                </Link>
              </li>
              <li>
                <Link to="/tracker" className="hover:text-amber-400 transition-colors">
                  My Case Dashboard
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-400 transition-colors">
                  About Legal Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-amber-400 transition-colors">
                  Free Case Evaluation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Office */}
          <div>
            <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-4">
              Advocate Office
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`tel:${BRAND_INFO.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {BRAND_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-white transition-colors">
                  {BRAND_INFO.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-slate-500 pt-1">
                <Clock className="w-3.5 h-3.5 text-slate-500 shrink-0 mt-0.5" />
                <span>{BRAND_INFO.hours}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer Box */}
        <div className="mt-12 pt-8 border-t border-slate-800/80">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-400 leading-relaxed">
            <Scale className="w-5 h-5 text-amber-500/80 shrink-0 mt-0.5" />
            <p>
              <strong className="text-slate-300">Statutory Transparency Disclaimer:</strong> SettleLawers operates as a legal advisory and debtor defense consultancy. We provide advocacy representation, response drafting to statutory demand notices, and negotiation assistance under applicable Reserve Bank of India prudential frameworks. SettleLawers never accepts debt settlement funds directly on behalf of banks. All agreed settlement amounts are paid by the borrower directly to the creditor institution following issuance of a verified, stamped bank sanction letter.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} SettleLawers. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Engagement</Link>
            <Link to="/tracker" className="hover:text-slate-300 transition-colors">Saved Data</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
