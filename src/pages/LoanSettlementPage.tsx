import React from 'react';
import { Link } from 'react-router-dom';
import { HandCoins, FileCheck, CheckCircle2, ShieldCheck, ArrowRight, AlertTriangle, Building2 } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { BRAND_INFO, LOAN_CATEGORIES } from '../data/mockData';
import { SettlementCalculator } from '../components/SettlementCalculator';
import { AdBanner } from '../components/AdBanner';

export const LoanSettlementPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider">
                <span>Shield 03</span>
                <span aria-hidden="true">·</span>
                <span>RBI Prudential Frameworks</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                One-Time Loan Settlement (OTS) with Formal No Dues Certificate
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                When financial hardship makes continuing full EMIs impossible, SettleLawers negotiates directly with bank settlement committees under official RBI guidelines. We eliminate accumulated penal interest and settle total liabilities for 40% to 60% of outstanding balance.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/calculator"
                  className="px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2 shadow-xs"
                >
                  <span>Calculate Your Savings</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>
                <Link
                  to="/contact"
                  className="px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                >
                  Speak to Settlement Advocate
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src={ASSETS.serviceDebtSettlement}
                  alt="Client receiving verified No Dues Certificate and loan settlement agreement"
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Settlement Calculator */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SettlementCalculator />
        </div>
      </section>

      {/* The 5 Non-Negotiable Settlement Rules at SettleLawers */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Our 5 Fraud-Proof Settlement Protections
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Thousands fall victim to fraudulent settlement promises by rogue collection agents. Here is how SettleLawers protects you:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Protection 01</span>
              </div>
              <h3 className="font-bold text-base text-slate-900">Never Pay into Agency Accounts</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You never pay a single rupee of settlement capital to SettleLawers. Every payment is remitted directly to your official loan account number inside the creditor bank.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Protection 02</span>
              </div>
              <h3 className="font-bold text-base text-slate-900">Original Bank Sanction Letter First</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No payment is authorized until our advocates verify the bank's stamped Settlement Sanction Letter with official reference numbers, authorized signatures, and waiver terms.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Protection 03</span>
              </div>
              <h3 className="font-bold text-base text-slate-900">Staggered Escrow Savings</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You build your settlement fund securely in your own separate bank account over 3 to 12 months. We only approach the bank when your capital target is ready.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Protection 04</span>
              </div>
              <h3 className="font-bold text-base text-slate-900">Mandatory No Dues Certificate</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                After the agreed OTS payment clears, we enforce delivery of the unconditional No Dues Certificate (NDC) and return of any dishonored cheques and loan securities.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Protection 05</span>
              </div>
              <h3 className="font-bold text-base text-slate-900">CIBIL Closure Auditing</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We monitor your credit bureau status to ensure the bank updates the account from "Active Default" to "Settled" with zero outstanding debt balance within 45 days.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-900 text-white space-y-2 flex flex-col justify-between">
              <div>
                <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">Ready for Freedom?</p>
                <h3 className="font-bold text-base mt-1">Get Your Free Debt Audit</h3>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Have our advocates evaluate your cards and loans today with zero upfront obligation.
                </p>
              </div>
              <Link
                to="/contact"
                className="mt-4 px-4 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-lg text-center transition-colors uppercase tracking-wider"
              >
                Start Legal Evaluation
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* Reusable Advertisement Slot */}
      <AdBanner />

    </div>
  );
};
