import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ArrowRight, ShieldCheck, CheckCircle2, Bookmark } from 'lucide-react';
import { SettlementCalculator } from '../components/SettlementCalculator';
import { AdBanner } from '../components/AdBanner';
import { useApp } from '../context/AppContext';

export const CalculatorPage: React.FC = () => {
  const { savedPlans, removeSettlementPlan } = useApp();

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
              <span>Financial Modeling Tool</span>
              <span aria-hidden="true">·</span>
              <span>RBI NPA Guidelines</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Debt Settlement & Escrow Savings Calculator
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Calculate how much you can legitimately save on unsecured loans and credit cards through an advocate-negotiated compromise settlement (OTS).
            </p>
          </div>
        </div>
      </section>

      {/* Main Calculator */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <SettlementCalculator />

          {/* Saved Plans in LocalStorage */}
          {savedPlans.length > 0 && (
            <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <Bookmark className="w-5 h-5 text-amber-600" />
                  <h3 className="font-bold text-lg text-slate-900">
                    Your Saved Settlement Plans ({savedPlans.length})
                  </h3>
                </div>
                <span className="text-xs text-slate-500 font-medium">Stored in your browser</span>
              </div>

              <div className="mt-4 space-y-3">
                {savedPlans.map((plan) => (
                  <div
                    key={plan.id}
                    className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <p className="font-bold text-sm text-slate-900">{plan.loanName}</p>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1 font-mono">
                        <span>Original: {formatINR(plan.originalDebt)}</span>
                        <span>·</span>
                        <span className="text-amber-700 font-bold">Est. OTS: {formatINR(plan.estimatedSettlement)}</span>
                        <span>·</span>
                        <span className="text-emerald-700 font-bold">Save: {formatINR(plan.estimatedSavings)}</span>
                        <span>·</span>
                        <span>{plan.targetMonths} Mo Target: {formatINR(plan.monthlySavingsTarget)}/mo</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <Link
                        to="/contact"
                        className="px-3 py-1.5 text-xs font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-md"
                      >
                        Review
                      </Link>
                      <button
                        onClick={() => removeSettlementPlan(plan.id)}
                        className="px-3 py-1.5 text-xs font-semibold text-rose-600 hover:bg-rose-50 rounded-md"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Educational Explainer */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="p-6 bg-white rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-sm text-slate-900">How is OTS Calculated?</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                When an account reaches 90+ DPD (NPA), banks write off future interest accruals. Settlements are negotiated primarily on the recoverable principal balance.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-sm text-slate-900">Where Does the Money Go?</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                You never send settlement capital to us. You accumulate funds in your personal account and transfer directly to the bank against the written sanction letter.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-slate-200 space-y-2">
              <h4 className="font-bold text-sm text-slate-900">What About Legal Notices?</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                If you already received Section 138 or arbitration notices, our advocates reply immediately to freeze litigation while the compromise settlement is finalized.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Reusable Advertisement Slot */}
      <AdBanner />

    </div>
  );
};
