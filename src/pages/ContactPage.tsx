import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2, AlertOctagon, Send, FileText } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';
import { useApp, ConsultationSubmission } from '../context/AppContext';
import { AdBanner } from '../components/AdBanner';

export const ContactPage: React.FC = () => {
  const { addConsultation } = useApp();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [totalDebt, setTotalDebt] = useState<number>(650000);
  const [lenderNames, setLenderNames] = useState('');
  const [situation, setSituation] = useState<ConsultationSubmission['situation']>('calls_harassment');
  const [notes, setNotes] = useState('');

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !lenderNames.trim()) return;

    const refId = addConsultation({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim() || 'not-provided@client.local',
      city: city.trim() || 'Not specified',
      totalDebt: Number(totalDebt),
      lenderNames: lenderNames.trim(),
      situation,
      notes: notes.trim(),
    });

    setSubmittedRef(refId);
  };

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
              <span>Confidential Consultation Desk</span>
              <span aria-hidden="true">·</span>
              <span>Bar Council Privilege Applies</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Request Free Legal Case Evaluation
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Every consultation is strictly confidential and protected by attorney-client privilege. Speak directly with senior legal advisors regarding your loan debt, legal notices, and harassment relief.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Column */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-xs">
                
                {submittedRef ? (
                  <div className="space-y-6 py-6 text-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    
                    <div className="space-y-2">
                      <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full">
                        Reference Dossier: #{submittedRef}
                      </span>
                      <h3 className="text-2xl font-bold text-slate-950">
                        Consultation Request Registered
                      </h3>
                      <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                        Your case evaluation has been saved to your browser session dossier. A senior advocate will review your loan details and contact you via phone or WhatsApp within 2 to 4 business hours.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2 max-w-md mx-auto">
                      <p className="font-bold text-slate-800">What to do while waiting:</p>
                      <ul className="space-y-1.5 text-slate-600">
                        <li>• Do not make panic partial payments to recovery agents.</li>
                        <li>• Keep all loan sanction letters and account statements handy.</li>
                        <li>• If an agent calls, instruct them that your legal counsel will respond.</li>
                      </ul>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <Link
                        to="/tracker"
                        className="px-5 py-2.5 text-xs font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-colors"
                      >
                        View My Case Tracker
                      </Link>
                      <button
                        onClick={() => setSubmittedRef(null)}
                        className="px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        Tell Us About Your Debt Situation
                      </h3>
                      <p className="text-xs text-slate-500">
                        All information is saved privately in your local browser and treated with utmost confidentiality.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rahul Sharma"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Phone Number (WhatsApp Active) *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. rahul@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          City / State
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. New Delhi, Mumbai, Pune"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                            Total Unpaid Debt
                          </label>
                          <span className="text-xs font-extrabold text-slate-900 font-mono">
                            {formatINR(totalDebt)}
                          </span>
                        </div>
                        <input
                          type="range"
                          min={50000}
                          max={5000000}
                          step={25000}
                          value={totalDebt}
                          onChange={(e) => setTotalDebt(Number(e.target.value))}
                          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                        />
                        <div className="flex justify-between text-[10px] text-slate-400 mt-0.5 font-mono">
                          <span>₹50K</span>
                          <span>₹25L</span>
                          <span>₹50L+</span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Bank / NBFC / App Names *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. HDFC, ICICI, Bajaj, KreditBee"
                          value={lenderNames}
                          onChange={(e) => setLenderNames(e.target.value)}
                          className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Current Urgent Situation
                      </label>
                      <select
                        value={situation}
                        onChange={(e) => setSituation(e.target.value as any)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 bg-white"
                      >
                        <option value="calls_harassment">Heavy Recovery Calls & WhatsApp Harassment</option>
                        <option value="home_visits">Recovery Agents Visiting Home / Workplace</option>
                        <option value="legal_notice">Received Section 138 / Cheque Bounce Demand Notice</option>
                        <option value="drt_court">Arbitration / DRT / Civil Court Summons Issued</option>
                        <option value="want_settlement">Have Funds, Want Final RBI-Compliant OTS Closure</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Additional Notes or Specific Demands
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Provide any details about notice dates, agent threats, or your proposed settlement timeline..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full px-3.5 py-2.5 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 text-xs uppercase tracking-wider font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
                      >
                        <Send className="w-4 h-4 text-amber-400" />
                        <span>Submit for Advocate Review</span>
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-400 text-center">
                      Protected by advocate confidentiality · We never share your data with recovery agencies.
                    </p>
                  </form>
                )}

              </div>
            </div>

            {/* Chamber Info Column */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 space-y-6">
                <div>
                  <div className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
                    Direct Contact
                  </div>
                  <h3 className="text-xl font-bold">Chamber & Office Details</h3>
                </div>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-white">Central Chambers</p>
                      <p>{BRAND_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400">General Lines</p>
                      <a href={`tel:${BRAND_INFO.phone.replace(/\s+/g, '')}`} className="font-semibold text-white hover:text-amber-400">
                        {BRAND_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <AlertOctagon className="w-5 h-5 text-rose-400 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400">Emergency Harassment Hotline (24/7)</p>
                      <a href={`tel:${BRAND_INFO.helpline.replace(/\s+/g, '')}`} className="font-bold text-rose-300 hover:text-white">
                        {BRAND_INFO.helpline}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <p className="text-xs text-slate-400">Legal Submissions</p>
                      <a href={`mailto:${BRAND_INFO.email}`} className="font-semibold text-white hover:text-amber-400">
                        {BRAND_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 text-xs text-slate-400 pt-2 border-t border-slate-800">
                    <Clock className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                    <span>{BRAND_INFO.hours}</span>
                  </div>
                </div>
              </div>

              {/* Call Diversion Card */}
              <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200 space-y-3 text-amber-950">
                <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-900">
                  <ShieldCheck className="w-4 h-4 text-amber-700" />
                  <span>Immediate Call Diversion Protocol</span>
                </div>
                <h4 className="font-bold text-base">Receiving 20+ calls an hour?</h4>
                <p className="text-xs leading-relaxed text-amber-900/80">
                  Our emergency desk provides dedicated forwarding numbers so recovery telecallers connect with our legal staff. Submit your form or call our emergency hotline now.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Reusable Advertisement Slot */}
      <AdBanner />

    </div>
  );
};
