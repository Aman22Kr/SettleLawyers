import React from 'react';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';
import { AdBanner } from '../components/AdBanner';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-white border-b border-slate-200 py-14 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
            Data Protection & Client Privilege
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Privacy Policy & Confidentiality Terms
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Last Updated: March 2026 · Governing Entity: SettleLawers Legal Advisory
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8 text-sm leading-relaxed text-slate-700 bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-xs">
          <div>
            <h2 className="text-lg font-bold text-slate-950 mb-2">1. Scope of Privacy Protection</h2>
            <p>
              At SettleLawers, your privacy and financial dignity are our primary responsibility. This Privacy Policy sets out how we collect, handle, and safeguard data provided through our website and client consultations. Under the Advocates Act and Bar Council of India standards, communications with our legal team are treated with utmost professional confidentiality.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-950 mb-2">2. Information Collected</h2>
            <p className="mb-2">We collect only necessary information required to formulate your legal defense and evaluate loan settlement feasibility:</p>
            <ul className="list-disc pl-5 space-y-1 text-slate-600">
              <li>Name, contact telephone number, and email address.</li>
              <li>Details of debt, outstanding balances, creditor banks, and NBFC names.</li>
              <li>Copies of legal demand notices (e.g. Section 138 notices, arbitration letters) and recovery visit timestamps.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-950 mb-2">3. Non-Disclosure Guarantee to Creditor Banks & Collection Agencies</h2>
            <p>
              SettleLawers strictly pledges that your personal information, phone numbers, and location will NEVER be sold, leased, or disclosed to collection agencies, third-party marketing brokers, or unauthorized third parties. Information shared with lending institutions is done strictly under your signed Vakalatnama or formal authorization during formal settlement negotiations.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-950 mb-2">4. Client-Side Browser Storage (LocalStorage)</h2>
            <p>
              Our interactive tools (Settlement Calculator, Harassment Incident Logger, and Bookmarks) store data locally within your web browser using HTML5 LocalStorage. This data resides on your personal device and can be cleared at any time through our My Case Tracker dashboard.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-950 mb-2">5. Contact Our Privacy Officer</h2>
            <p>
              If you have inquiries concerning data confidentiality or wish to delete your records, contact our Legal Privacy Desk at <a href={`mailto:${BRAND_INFO.email}`} className="text-amber-700 underline font-medium">{BRAND_INFO.email}</a> or write to {BRAND_INFO.address}.
            </p>
          </div>
        </div>
      </section>

      <AdBanner />
    </div>
  );
};
