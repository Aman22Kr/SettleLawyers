import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, PhoneOff, AlertTriangle, CheckCircle2, Clock, MapPin, Scale, ArrowRight, Lock } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { BRAND_INFO, RBI_RULES } from '../data/mockData';
import { AdBanner } from '../components/AdBanner';
import { IncidentReportModal } from '../components/IncidentReportModal';

export const AntiHarassmentPage: React.FC = () => {
  const [incidentModalOpen, setIncidentModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider">
                <span>Shield 01</span>
                <span aria-hidden="true">·</span>
                <span>Immediate Relief Desk</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Anti-Harassment Shield Against Bank Recovery Agents
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Aggressive calls at odd hours, abusive threats to contact your relatives or employer, and intimidating doorstep visits are illegal under Reserve Bank of India (RBI) directives. Our advocates stop this within 24 to 48 hours.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIncidentModalOpen(true)}
                  className="px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2 shadow-xs"
                >
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  <span>Report An Incident in Your Dossier</span>
                </button>
                <Link
                  to="/contact"
                  className="px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
                >
                  Activate Shield Today
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
                <img
                  src={ASSETS.serviceHarassment}
                  alt="Senior advocate issuing formal cease and desist notice against illegal recovery harassment"
                  className="w-full h-80 object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How the Shield Operates */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Our 4-Point Anti-Harassment Protocol
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              How we establish a lawful boundary between you and debt collection agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 font-bold flex items-center justify-center font-mono">
                01
              </div>
              <h3 className="font-bold text-base text-slate-900">Legal Representation Notice</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We formally serve Section 30/Bar Council notices of legal representation to the bank's Nodal Grievance Officer, instructing them to route all demands through our office.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 font-bold flex items-center justify-center font-mono">
                02
              </div>
              <h3 className="font-bold text-base text-slate-900">Advocate Call Diversion</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We configure call forwarding so that persistent recovery agents reach our trained legal counsel instead of disturbing your workplace, home, and mental peace.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 font-bold flex items-center justify-center font-mono">
                03
              </div>
              <h3 className="font-bold text-base text-slate-900">Doorstep Confrontation Script</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If an agent visits your residence, you are equipped with our legal card stating that you are legally represented. We require agents to show authorized credentials and leave.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 font-bold flex items-center justify-center font-mono">
                04
              </div>
              <h3 className="font-bold text-base text-slate-900">Ombudsman & Criminal Summons</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                For abusive or obscene threats, we immediately lodge official complaints with the RBI Integrated Ombudsman and file criminal complaints for intimidation under the law.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* RBI Ground Rules on Harassment */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
              Statutory Protection
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Rules Every Recovery Agent Must Follow
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              According to RBI Master Circular (RBI/2022-23/108), the following acts are strictly unlawful:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RBI_RULES.map((rule) => (
              <div key={rule.id} className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-800 font-bold">Rule {rule.number}</span>
                  <span className="text-slate-500 truncate max-w-[200px]">{rule.officialCircular}</span>
                </div>
                <h3 className="font-bold text-base text-slate-900">{rule.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{rule.summary}</p>
                <div className="pt-2 border-t border-slate-200 text-xs text-slate-700 font-medium">
                  <strong>Action by SettleLawers:</strong> {rule.actionableStep}
                </div>
              </div>
            ))}
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
