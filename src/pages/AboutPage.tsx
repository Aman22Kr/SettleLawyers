import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Scale, Award, Users, CheckCircle2, XCircle, ArrowRight, MapPin, Phone, Mail } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { BRAND_INFO } from '../data/mockData';
import { AdBanner } from '../components/AdBanner';

export const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Hero Header */}
      <section className="bg-white border-b border-slate-200 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
              <span>About SettleLawers</span>
              <span aria-hidden="true">·</span>
              <span>Bar Council Registered Practice</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              A Legal Shield for Distressed Borrowers Across India
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              We were founded on a singular conviction: every individual facing financial hardship deserves dignity, rigorous legal defense, and a realistic, lawful path back to financial freedom.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Team Photo */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                Our Protection-First Philosophy
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                Why Legal Defense Must Precede Debt Negotiation
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Most commercial debt settlement agencies operate merely as tele-callers. When recovery agents arrive at your doorstep or when banks file Section 138 criminal complaints, generic agencies have no standing to help you.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                At SettleLawers, we take a <strong>Protection-First</strong> stance. The moment you onboard, our advocates issue formal legal notices that legally prohibit unauthorized third-party recovery agents from contacting you directly. With your immediate peace of mind restored, we negotiate with bank credit committees from a position of institutional strength.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <p className="text-2xl font-extrabold text-slate-900 font-mono">{BRAND_INFO.experienceYears}</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">Years of Banking Dispute Defense</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <p className="text-2xl font-extrabold text-amber-600 font-mono">{BRAND_INFO.totalDebtSettled}</p>
                  <p className="text-xs text-slate-500 font-medium mt-1">Delinquent Debt Successfully Resolved</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                <img
                  src={ASSETS.aboutLegalTeam}
                  alt="SettleLawers legal advocates and financial dispute negotiators collaborating in office"
                  className="w-full h-[400px] object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="p-5 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <div>
                    <p className="font-bold text-slate-900">Legal Advisory & Litigation Panel</p>
                    <p className="text-slate-500">Green Park & Yusuf Sarai Office, New Delhi</p>
                  </div>
                  <span className="text-[11px] font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">
                    Full-Service Counsel
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Comparison Table: SettleLawers vs Generic Agencies */}
      <section className="py-16 sm:py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
              Clear Institutional Distinction
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              SettleLawers vs Generic Debt Agencies
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Why having Bar Council enrolled legal counsel changes the dynamics of debt resolution.
            </p>
          </div>

          <div className="max-w-4xl mx-auto overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider font-semibold">
                <tr>
                  <th className="py-4 px-6">Evaluation Feature</th>
                  <th className="py-4 px-6 bg-slate-800 text-amber-400">SettleLawers</th>
                  <th className="py-4 px-6 text-slate-400">Generic Settlement Companies</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-800">Legal Standing in Court</td>
                  <td className="py-4 px-6 bg-amber-50/50 font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Bar Council Registered Advocates</span>
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Unregulated call centers with no courtroom entry</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-800">Cheque Bounce & Sec 138 Defense</td>
                  <td className="py-4 px-6 bg-amber-50/50 font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Formal legal replies & court appearance</span>
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Cannot represent or draft statutory replies</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-800">Handling Recovery Agent Visits</td>
                  <td className="py-4 px-6 bg-amber-50/50 font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Cease & Desist notices + Police/Ombudsman complaints</span>
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Suggest avoiding calls with no legal protection</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-800">Settlement Payment Flow</td>
                  <td className="py-4 px-6 bg-amber-50/50 font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Paid directly to bank account after verified letter</span>
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Some ask to deposit client money into their own accounts</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-800">No Dues Certificate (NDC) Guarantee</td>
                  <td className="py-4 px-6 bg-amber-50/50 font-bold text-slate-900 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Verified before case dossier closure</span>
                  </td>
                  <td className="py-4 px-6 text-slate-500">
                    <div className="flex items-center gap-2">
                      <XCircle className="w-4 h-4 text-rose-500 shrink-0" />
                      <span>Often abandon clients once commission is paid</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Office & Consultation Location */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 border border-slate-800">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                  Visit Our South Delhi Legal Chambers
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  We welcome clients for in-person consultations, case file audits, and document inspections by prior appointment.
                </p>
                <div className="space-y-3 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{BRAND_INFO.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>Direct: {BRAND_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                    <span>Email: {BRAND_INFO.email}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-end">
                <Link
                  to="/contact"
                  className="px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-lg text-center transition-colors"
                >
                  Schedule Chamber Appointment
                </Link>
                <Link
                  to="/calculator"
                  className="px-6 py-3.5 text-xs uppercase tracking-wider font-bold text-white bg-slate-800 hover:bg-slate-700 rounded-lg text-center transition-colors border border-slate-700"
                >
                  Calculate Debt Savings
                </Link>
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
