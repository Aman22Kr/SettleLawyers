import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, FileText, CheckCircle2, AlertOctagon, ShieldCheck, ArrowRight, Gavel } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { BRAND_INFO } from '../data/mockData';
import { AdBanner } from '../components/AdBanner';

export const LegalDefensePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider">
                <span>Shield 02</span>
                <span aria-hidden="true">·</span>
                <span>Court & Tribunal Representation</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Senior Advocate Defense Against Banking Legal Notices & Court Cases
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Received a Section 138 Cheque Bounce notice, a Section 25 NACH summons, or an arbitration hearing letter? Do not panic. Our registered Bar Council advocates formulate rigorous legal replies and defend you before Magistrates and Tribunals.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/contact"
                  className="px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2 shadow-xs"
                >
                  <span>Upload Notice for Advocate Review</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>
                <Link
                  to="/calculator"
                  className="px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                >
                  Estimate Settlement Value
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src={ASSETS.serviceCourtDefense}
                  alt="Advocate reviewing court briefs and banking legal notices"
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Primary Legal Defense Proceedings */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Proceedings We Handle
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Seasoned courtroom counsel across Magistrates Courts, Lok Adalats, and DRTs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Sec 138 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded">
                  Most Urgent: 15-Day Limit
                </span>
                <Gavel className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Section 138 NI Act (Cheque Bounce)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When a security cheque is deposited by a lender and dishonored due to insufficient funds, the lender issues a statutory demand notice giving you 15 days to respond.
              </p>
              <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-700 space-y-1">
                <strong>Our Defense Strategy:</strong> We challenge whether the cheque was given for security purposes rather than an existing crystallized debt, inspect statutory notice defects, and represent you before the Metropolitan Magistrate to convert the dispute into an amicable OTS.
              </div>
            </div>

            {/* Sec 25 PSSA */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded">
                  NACH / Auto-Debit Defense
                </span>
                <Scale className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Section 25 Payment & Settlement Systems Act
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Similar to cheque bounce, Section 25 is invoked when electronic mandates (NACH / e-NACH) bounce. NBFCs and fintech apps frequently use this to intimidate borrowers.
              </p>
              <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-700 space-y-1">
                <strong>Our Defense Strategy:</strong> We demonstrate financial hardship due to unforeseen circumstances, challenge excessive penal charges, and negotiate structured compromise terms without court penalties.
              </div>
            </div>

            {/* Arbitration */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-800 bg-slate-100 px-2.5 py-1 rounded">
                  Arbitration Defense
                </span>
                <FileText className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                Unilateral Arbitration Proceedings
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Lenders frequently appoint sole arbitrators unilaterally in distant cities (e.g. Chennai or Mumbai) to secure ex-parte awards against borrowers located in other states.
              </p>
              <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-700 space-y-1">
                <strong>Our Defense Strategy:</strong> Under Supreme Court rulings (Perkins Eastman & TRF Ltd), unilateral appointment of arbitrators by one party without consent is legally void. We challenge jurisdiction and set aside ex-parte attempts.
              </div>
            </div>

            {/* Lok Adalat */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded">
                  Amicable Settlement Bench
                </span>
                <ShieldCheck className="w-5 h-5 text-slate-700" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">
                National Lok Adalat Settlement
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                National Lok Adalats organized by NALSA offer an ideal judicial forum where banks are encouraged to offer steep interest waivers and close loans amicably.
              </p>
              <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-700 space-y-1">
                <strong>Our Defense Strategy:</strong> Our advocates represent you during the Lok Adalat session, review bank proposed settlement figures, and ensure the Lok Adalat award is final with zero remaining liability.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Notice Checklist Banner */}
      <section className="py-14 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Have you received a notice in the last 15 days?</h3>
            <p className="text-xs text-slate-400 max-w-xl">
              Failing to reply in writing within 15 days can trigger automated criminal complaint filings. Our advocates can draft and dispatch a formal legal reply within 24 hours.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shrink-0"
          >
            Draft Notice Reply Now
          </Link>
        </div>
      </section>

      {/* Reusable Advertisement Slot */}
      <AdBanner />

    </div>
  );
};
