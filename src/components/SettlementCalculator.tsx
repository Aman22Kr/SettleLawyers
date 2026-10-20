import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, BookmarkCheck, TrendingDown, Clock, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

interface SettlementCalculatorProps {
  compact?: boolean;
}

export const SettlementCalculator: React.FC<SettlementCalculatorProps> = ({ compact = false }) => {
  const { saveSettlementPlan } = useApp();

  const [loanType, setLoanType] = useState<'credit_card' | 'personal_loan' | 'app_loans' | 'business_loan' | 'multiple'>('credit_card');
  const [totalDebt, setTotalDebt] = useState<number>(850000);
  const [defaultDuration, setDefaultDuration] = useState<'early' | 'medium' | 'severe'>('medium');
  const [targetMonths, setTargetMonths] = useState<number>(6);
  const [savedSuccessId, setSavedSuccessId] = useState<string | null>(null);

  // Settlement estimation percentages based on loan category & default aging
  const getSettlementRate = () => {
    let baseRate = 0.45; // 45% of total debt
    if (loanType === 'credit_card') baseRate = 0.40;
    if (loanType === 'app_loans') baseRate = 0.35;
    if (loanType === 'business_loan') baseRate = 0.50;

    // Aging adjustment: older defaults typically settle for lower percentage as banks write down provision
    if (defaultDuration === 'severe') baseRate -= 0.05;
    if (defaultDuration === 'early') baseRate += 0.05;

    return Math.max(0.30, Math.min(0.60, baseRate));
  };

  const settlementRatio = getSettlementRate();
  const estimatedSettlement = Math.round(totalDebt * settlementRatio);
  const estimatedSavings = totalDebt - estimatedSettlement;
  const savingsPercent = Math.round((estimatedSavings / totalDebt) * 100);
  const monthlySavingsTarget = Math.round(estimatedSettlement / targetMonths);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleSavePlan = () => {
    const loanLabels: Record<string, string> = {
      credit_card: 'Credit Card Debt',
      personal_loan: 'Unsecured Personal Loan',
      app_loans: 'FinTech App Loans',
      business_loan: 'MSME Business Debt',
      multiple: 'Consolidated Multiple Debts',
    };

    const id = saveSettlementPlan({
      loanName: loanLabels[loanType],
      originalDebt: totalDebt,
      estimatedSettlement,
      estimatedSavings,
      monthlySavingsTarget,
      targetMonths,
    });
    setSavedSuccessId(id);
    setTimeout(() => setSavedSuccessId(null), 4000);
  };

  return (
    <div className={`bg-white rounded-2xl border border-slate-200 shadow-md p-6 sm:p-8 ${compact ? '' : 'max-w-4xl mx-auto'}`}>
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">
            <Calculator className="w-4 h-4 text-amber-600" />
            <span>Interactive Settlement Calculator</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Estimate Your Realistic One-Time Settlement (OTS)
          </h3>
        </div>
        <div className="text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
          <span>Based on Standard RBI NPA Recovery Prudential Guidelines</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
        
        {/* Left Inputs */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Loan Category Selector */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              1. Select Loan Category
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'credit_card', label: 'Credit Card' },
                { id: 'personal_loan', label: 'Personal Loan' },
                { id: 'app_loans', label: 'FinTech Apps' },
                { id: 'business_loan', label: 'Business Debt' },
                { id: 'multiple', label: 'Multiple Combined' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLoanType(item.id as any)}
                  className={`px-3 py-2.5 rounded-lg text-xs font-semibold border transition-all text-left ${
                    loanType === item.id
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                      : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Outstanding Amount Slider & Input */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="total-debt-input" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                2. Total Outstanding Balance
              </label>
              <span className="text-base font-extrabold text-slate-900 font-mono tabular-nums">
                {formatINR(totalDebt)}
              </span>
            </div>
            
            <input
              id="total-debt-input"
              aria-label="Total Outstanding Balance Slider"
              type="range"
              min={50000}
              max={5000000}
              step={25000}
              value={totalDebt}
              onChange={(e) => setTotalDebt(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
            />
            
            <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
              <span>₹50,000</span>
              <span>₹25,00,000</span>
              <span>₹50,00,000</span>
            </div>
          </div>

          {/* Default Aging */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
              3. Status of Default
            </label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'early', label: '1 - 3 Months', desc: 'Overdue' },
                { id: 'medium', label: '3 - 6 Months', desc: 'NPA Stage' },
                { id: 'severe', label: '6+ Months', desc: 'Legal Notice' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setDefaultDuration(item.id as any)}
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    defaultDuration === item.id
                      ? 'bg-amber-50 border-amber-500 text-amber-950'
                      : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <p className="text-xs font-bold">{item.label}</p>
                  <p className="text-[11px] text-slate-500">{item.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Target Timeline */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label htmlFor="target-months-input" className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                4. Target Months to Accumulate Funds
              </label>
              <span className="text-xs font-bold text-slate-800">{targetMonths} Months</span>
            </div>
            <input
              id="target-months-input"
              aria-label="Target Months to Accumulate Funds Slider"
              type="range"
              min={2}
              max={12}
              step={1}
              value={targetMonths}
              onChange={(e) => setTargetMonths(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>2 Months (Fast Track)</span>
              <span>6 Months (Standard)</span>
              <span>12 Months (Staggered)</span>
            </div>
          </div>

        </div>

        {/* Right Output Card */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900 text-white rounded-xl p-6 shadow-md border border-slate-800">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-800">
              <span>Projected Settlement Matrix</span>
              <span className="text-amber-400 font-bold">~{savingsPercent}% Savings</span>
            </div>

            <div className="my-5 space-y-4">
              <div>
                <p className="text-xs text-slate-400 mb-1">Estimated One-Time Settlement (OTS)</p>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
                  {formatINR(estimatedSettlement)}
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Expected range: {Math.round(settlementRatio * 100)}% of current claim
                </p>
              </div>

              <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700/80 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Total Capital Saved:</span>
                  <span className="font-bold text-emerald-400 font-mono tabular-nums">
                    {formatINR(estimatedSavings)}
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Monthly Escrow Target:</span>
                  <span className="font-bold text-white font-mono tabular-nums">
                    {formatINR(monthlySavingsTarget)} / mo
                  </span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Target Timeframe:</span>
                  <span className="font-bold text-slate-200">{targetMonths} Months</span>
                </div>
              </div>

              <div className="flex items-start gap-2 text-[11px] text-slate-400 leading-relaxed">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  All savings targets remain in your own private bank account until our advocates secure the official signed Bank Sanction Letter.
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-2.5 pt-4 border-t border-slate-800">
            <button
              onClick={handleSavePlan}
              type="button"
              className="w-full py-2.5 px-4 text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <BookmarkCheck className="w-4 h-4 text-amber-400" />
              <span>{savedSuccessId ? 'Plan Saved to LocalStorage!' : 'Save Plan to My Tracker'}</span>
            </button>

            <Link
              to="/contact"
              className="w-full py-3 px-4 text-xs uppercase tracking-wider font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <span>Get Free Legal Review For This Debt</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>

    </div>
  );
};
