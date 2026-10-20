import React from 'react';
import { Scale, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';
import { AdBanner } from '../components/AdBanner';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-white border-b border-slate-200 py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
            Engagement & Legal Governance
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Terms of Service & Advisory Engagement
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Last Updated: March 2026 · SettleLawers Legal Advisory Services
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-sm leading-relaxed text-slate-700 bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xs">
          <div>
            <h2 className="text-lg font-bold text-slate-950 mb-2">1. Nature of Advisory & Representation</h2>
            <p>
              SettleLawers provides legal consultancy, anti-harassment shield services, notice reply drafting, and dispute negotiation under applicable Indian legal statutes and Reserve Bank of India (RBI) prudential guidelines. Engaging SettleLawers does not automatically eliminate legal liability for genuine contracted debt, but secures lawful defense, eliminates illegal compounding charges, and creates a legitimate forum for compromise settlement.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-950 mb-2">2. Settlement Capital Payment Rule</h2>
            <p className="font-semibold text-slate-900 mb-1">
              IMPORTANT: SettleLawers NEVER collects, holds, or manages debt settlement capital on behalf of lending institutions.
            </p>
            <p>
              All negotiated compromise settlement funds must be remitted by the borrower directly to their designated loan account at the creditor bank, and only after the borrower has inspected and verified the official written Settlement Sanction Letter issued on bank letterhead.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-950 mb-2">3. Client Cooperation & True Disclosure</h2>
            <p>
              Clients must provide accurate loan statements, notices, and details of harassment. Concealing existing court warrants, active criminal proceedings, or fraudulent misrepresentations may lead to termination of legal representation.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-950 mb-2">4. Disclaimers & Non-Guarantee of Credit Bureau Scores</h2>
            <p>
              A compromise loan settlement reflects in credit bureau records (such as CIBIL or Experian) as "Settled" rather than "Closed". While this halts active legal actions and collection calls, it may impact future borrowing until the borrower systematically restores credit health over 12 to 18 months.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-950 mb-2">5. Jurisdiction</h2>
            <p>
              All retainer agreements and engagements are governed by the laws of India, subject to the exclusive jurisdiction of the competent courts in New Delhi.
            </p>
          </div>
        </div>
      </section>

      <AdBanner />
    </div>
  );
};
