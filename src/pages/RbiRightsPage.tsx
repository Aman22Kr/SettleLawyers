import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, AlertOctagon, Scale, FileText, CheckCircle2, AlertTriangle, ArrowRight, BookOpen } from 'lucide-react';
import { RBI_RULES, BRAND_INFO } from '../data/mockData';
import { AdBanner } from '../components/AdBanner';
import { IncidentReportModal } from '../components/IncidentReportModal';

export const RbiRightsPage: React.FC = () => {
  const [incidentModalOpen, setIncidentModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
              <span>Regulatory Directive Compendium</span>
              <span aria-hidden="true">·</span>
              <span>Reserve Bank of India</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Borrower Legal Rights & RBI Recovery Agent Guidelines
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Every loan borrower in India is protected by statutory regulations issued by the Reserve Bank of India. Being in debt does not forfeit your constitutional right to dignity, privacy, and protection from harassment.
            </p>

            <div className="pt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => setIncidentModalOpen(true)}
                className="px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2 shadow-xs"
              >
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>Log an Agent Harassment Incident</span>
              </button>
              <Link
                to="/contact"
                className="px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Request Legal Notice to Bank
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5 Core RBI Directives Detailed */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Master Circular RBI/2022-23/108 Directives
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Clear statutory boundaries enforced by banking courts and tribunals.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {RBI_RULES.map((rule) => (
              <div
                key={rule.id}
                className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-slate-100 gap-2">
                  <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded">
                    Rule {rule.number}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    Official Reference: {rule.officialCircular}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{rule.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{rule.summary}</p>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
                  <strong className="text-slate-900">How SettleLawers Enforces This:</strong> {rule.actionableStep}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* How to File RBI Banking Ombudsman Complaint */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">
              Formal Escalation Procedure
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Filing an Official RBI Banking Ombudsman Complaint
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              If a bank or NBFC refuses to curb its recovery agents or ignores your legitimate request for compromise debt settlement, our advocates guide you through the Reserve Bank of India Integrated Ombudsman Scheme:
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <p className="font-bold text-sm text-slate-900">Step 1: Formal Representation Notice to Principal Nodal Officer (PNO)</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Before approaching the Ombudsman, a formal written complaint with proof of harassment (call timestamps, audio recordings, WhatsApp screenshots) must be submitted to the bank's Senior Management.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <p className="font-bold text-sm text-slate-900">Step 2: 30-Day Resolution Window</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  The bank has 30 days to resolve the complaint or issue an amicable response. If they fail or reject without valid legal grounds, the jurisdiction shifts to the RBI Ombudsman.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <p className="font-bold text-sm text-slate-900">Step 3: Escalation to RBI Complaint Management System (CMS)</p>
                <p className="text-xs text-slate-600 leading-relaxed">
                  We lodge the matter on the central RBI CMS portal (cms.rbi.org.in). Penalties of up to ₹20,00,000 can be levied on banks for persistent harassment violations, and accounts are frequently ordered into conciliation.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs"
              >
                <span>Have Our Advocates Prepare Your Escalation</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Reusable Advertisement Slot */}
      <AdBanner />

      <IncidentReportModal
        isOpen={incidentModalOpen}
        onClose={() => setIncidentModalOpen(false)}
      />

    </div>
  );
};
