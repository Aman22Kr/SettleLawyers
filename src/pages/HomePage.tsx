import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Scale,
  PhoneOff,
  CheckCircle2,
  ArrowRight,
  TrendingDown,
  Building2,
  FileCheck2,
  FileText,
  AlertTriangle,
  UserCheck,
  PhoneCall,
  Clock,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { ASSETS } from '../data/assets';
import { BRAND_INFO, SERVICES, CASE_STUDIES, LOAN_CATEGORIES } from '../data/mockData';
import { SettlementCalculator } from '../components/SettlementCalculator';
import { YouTubePlaceholder } from '../components/YouTubePlaceholder';
import { AdBanner } from '../components/AdBanner';
import { IncidentReportModal } from '../components/IncidentReportModal';

export const HomePage: React.FC = () => {
  const [incidentModalOpen, setIncidentModalOpen] = useState(false);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Clean unboxed kicker metadata */}
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="text-amber-700 font-bold uppercase tracking-wider">Advocate-Led Debt Resolution</span>
                <span aria-hidden="true">·</span>
                <span>Bar Council Registered</span>
                <span aria-hidden="true">·</span>
                <span>RBI Compliance Defense</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]" style={{ textWrap: 'balance' }}>
                Stop Debt Harassment. <br className="hidden sm:inline" />
                <span className="text-amber-600">Settle Loans Legally</span> with Experienced Advocates.
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Tired of relentless calls, abusive threats, and home visits from collection agents? SettleLawers activates an immediate legal shield, handles court notices, and negotiates legitimate 40%–60% RBI-compliant one-time settlements.
              </p>

              {/* CTA cluster */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <Link
                  to="/contact"
                  className="px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all shadow-md text-center flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                >
                  <span>Request Free Legal Review</span>
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </Link>

                <button
                  type="button"
                  onClick={() => setIncidentModalOpen(true)}
                  className="px-5 py-3.5 text-xs uppercase tracking-wider font-bold text-amber-900 bg-amber-50 border border-amber-300 rounded-lg hover:bg-amber-100 transition-colors text-center flex items-center justify-center gap-2 whitespace-nowrap shrink-0"
                >
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Report Agent Harassment</span>
                </button>
              </div>

              {/* Trust checklist */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-600 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Calls Stopped in 24–48 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Section 138 Notice Defense</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Official Bank No Dues Letter</span>
                </div>
              </div>

            </div>

            {/* Right Column: High-Fidelity Hero Image Asset */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100 group">
                <img
                  src={ASSETS.heroConsultation}
                  alt="Senior legal advocate at SettleLawers reviewing client debt settlement agreements"
                  className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                
                {/* Floating trust badge card */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/90 backdrop-blur-md text-white p-4 rounded-xl border border-slate-800 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-amber-400 font-bold uppercase tracking-wider">Advocate Representation</p>
                      <p className="text-sm font-semibold text-slate-200">Yusuf Sarai, South Delhi Office</p>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-slate-400">Cases Handled</span>
                      <p className="text-base font-bold text-white font-mono tabular-nums">{BRAND_INFO.casesResolved}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Full-width KPI Trust Strip */}
        <div className="bg-slate-950 text-white py-6 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
                  {BRAND_INFO.totalDebtSettled}
                </p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Debt Resolved</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                  {BRAND_INFO.casesResolved}
                </p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Families Protected</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
                  45% – 75%
                </p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">Average Savings</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums">
                  100%
                </p>
                <p className="text-xs text-slate-400 mt-1 uppercase tracking-wider font-medium">RBI-Compliant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Shields Architecture */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
              Comprehensive Protection-First Model
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
              The Three Shields of SettleLawers
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Unlike generic debt settlement agencies that merely call customer care, we deploy real legal defense and RBI regulatory protections from day one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Shield 1 */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={ASSETS.serviceHarassment}
                    alt="Anti-Harassment Shield by SettleLawers"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/90 text-amber-400 text-[11px] font-bold px-2.5 py-1 rounded-md">
                    Shield 01
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    Anti-Harassment Shield
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Immediate cessation of illegal recovery agent visits, threatening WhatsApp messages, and non-stop phone calls.
                  </p>

                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Formal Cease & Desist notices to bank nodals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Call diversion protocol to advocate desk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Enforcement of RBI 8 AM – 7 PM time limits</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                <Link
                  to="/services/anti-harassment"
                  className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center justify-between"
                >
                  <span>Explore Anti-Harassment Shield</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Shield 2 */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={ASSETS.serviceCourtDefense}
                    alt="Legal Protection Shield by SettleLawers"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/90 text-amber-400 text-[11px] font-bold px-2.5 py-1 rounded-md">
                    Shield 02
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    Legal Protection Shield
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Senior advocate defense against Section 138 cheque bounce, Section 25 PSSA, Lok Adalat, and civil summary suits.
                  </p>

                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Drafting rigorous replies to demand notices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Representation in Magistrates & DRT Courts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Quashing unilateral arbitration proceedings</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                <Link
                  to="/services/legal-defense"
                  className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center justify-between"
                >
                  <span>Explore Legal Defense Shield</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Shield 3 */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="relative h-48 bg-slate-100 overflow-hidden">
                  <img
                    src={ASSETS.serviceDebtSettlement}
                    alt="Loan Settlement Shield by SettleLawers"
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/90 text-amber-400 text-[11px] font-bold px-2.5 py-1 rounded-md">
                    Shield 03
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-950 mb-2">
                    Loan Settlement Shield
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Direct bilateral OTS negotiations to eliminate debt for 40%–60% of outstanding with formal No Dues Certificate.
                  </p>

                  <ul className="space-y-2 text-xs text-slate-700 mb-6">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Direct negotiation with bank credit committees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Waiver of compound interest and late fees</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Verification of official bank sanction letter</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                <Link
                  to="/services/loan-settlement"
                  className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center justify-between"
                >
                  <span>Explore Loan Settlement Shield</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Interactive Settlement Calculator Section */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SettlementCalculator />
        </div>
      </section>

      {/* Supported Loan Categories */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
                Eligible Unsecured & Delinquent Debts
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Loan Portfolios We Resolve
              </h2>
            </div>
            <Link
              to="/services"
              className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1.5"
            >
              <span>View all loan settlement procedures</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOAN_CATEGORIES.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:border-slate-300 transition-all shadow-xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-base text-slate-900">{item.name}</h3>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-md">
                    {item.avgSavings}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Typical Timeframe:</span>
                  <span className="font-semibold text-slate-800">{item.timeframe}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* How It Works: 3-Step Process */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
              Transparent & Lawful
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Our 3-Step Legal Resolution Process
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Clear steps from immediate relief to permanent debt cancellation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 font-extrabold text-lg flex items-center justify-center mb-5 font-mono">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">
                Confidential Case Review
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We review your loan agreements, default duration, notices received, and bank communications. We evaluate legal vulnerabilities and build a customized settlement budget.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 font-extrabold text-lg flex items-center justify-center mb-5 font-mono">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">
                Activate Shield & Stop Calls
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Our advocates issue formal Notices of Legal Representation to creditors. Calls are diverted to our advocate desk, doorstep visits are halted, and court notices are defended.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 relative">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-amber-400 font-extrabold text-lg flex items-center justify-center mb-5 font-mono">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-950 mb-2">
                Secure Bank OTS & No Dues
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We negotiate directly with bank credit committees for a 40%–60% reduction. You pay directly to the bank only after inspecting the signed sanction letter and receiving your NDC.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Case Studies / Proof of Impact */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                Real Client Outcomes
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Verified Debt Reductions
              </h2>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Names abbreviated to protect client privacy in accordance with legal confidentiality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CASE_STUDIES.map((c) => (
              <div
                key={c.id}
                className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 pb-3 border-b border-slate-700">
                    <span>Client: {c.clientInitials} ({c.city})</span>
                    <span className="text-emerald-400 font-bold">{c.savingsPercentage}% Saved</span>
                  </div>

                  <div className="my-4">
                    <p className="text-xs text-slate-400">Total Claimed Debt</p>
                    <p className="text-sm font-semibold text-slate-300 line-through font-mono tabular-nums">
                      {formatINR(c.originalDebt)}
                    </p>
                    <p className="text-xs text-slate-400 mt-2">Final Agreed Settlement</p>
                    <p className="text-xl font-extrabold text-amber-400 font-mono tabular-nums">
                      {formatINR(c.settledAmount)}
                    </p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {c.outcomeNote}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-700 flex items-center justify-between text-[11px] text-slate-400">
                  <span>{c.lenderType}</span>
                  <span>{c.durationMonths} Mos</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Video Testimony / Educational Area with YouTube Placeholder */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                Video Briefing by Senior Counsel
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                How RBI Circulars Shield Borrowers from Illegal Harassment
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Watch our lead advocate explain the exact legal grounds to challenge aggressive recovery agents, what to do if an agent shows up at your door, and how legal mediation protects your dignity and credit future.
              </p>
              
              <div className="space-y-3 pt-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>The 8:00 AM – 7:00 PM boundary rule & penalties for violation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Why you can never be arrested for an unsecured personal loan</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>How to legally record and present evidence of verbal abuse</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  to="/rights"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  <span>Read Full RBI Borrower Rights Directory</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Video Placeholder Area */}
            <div className="lg:col-span-6">
              <YouTubePlaceholder
                title="RBI Fair Practices Code & Anti-Harassment Legal Defense Explained"
                duration="11:20"
                aspectRatio="16/9"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Free Evaluation CTA Strip */}
      <section className="py-14 bg-gradient-to-r from-slate-950 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            Take Control of Your Debt Today. Break the Cycle of Fear.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Speak with an advocate today in complete confidence. We will examine your loan files, calculate your savings, and begin protecting you immediately.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 text-xs uppercase tracking-wider font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors shadow-md"
            >
              Book Free Confidential Consultation
            </Link>
            <a
              href={`tel:${BRAND_INFO.helpline.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-amber-400" />
              <span>Helpline: {BRAND_INFO.helpline}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Reusable Advertisement Slot Placeholder */}
      <AdBanner />

      {/* Harassment incident modal */}
      <IncidentReportModal
        isOpen={incidentModalOpen}
        onClose={() => setIncidentModalOpen(false)}
      />

    </div>
  );
};
