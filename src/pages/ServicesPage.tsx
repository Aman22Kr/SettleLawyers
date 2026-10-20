import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Scale, HandCoins, CheckCircle2, ArrowRight, FileCheck, PhoneCall, ChevronRight } from 'lucide-react';
import { ASSETS } from '../data/assets';
import { SERVICES, LOAN_CATEGORIES } from '../data/mockData';
import { AdBanner } from '../components/AdBanner';

export const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Hero header */}
      <section className="bg-white border-b border-slate-200 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
              Legal Services Portfolio
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Comprehensive Legal Debt Resolution & Protection Services
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              From stopping abusive doorstep recovery within 48 hours to representing you before Magistrates and negotiating formal bank OTS closures, our advocates defend your rights every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* The 3 Core Service Blocks */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {SERVICES.map((service, idx) => {
            const isEven = idx % 2 === 1;
            const imageSrc = ASSETS[service.imageKey];

            return (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs p-8 sm:p-10"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Image Column */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="rounded-xl overflow-hidden shadow-md border border-slate-200 relative group">
                      <img
                        src={imageSrc}
                        alt={service.title}
                        className="w-full h-72 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3 bg-slate-900/90 text-amber-400 text-xs font-bold px-3 py-1 rounded-md">
                        {service.badge}
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="text-xs font-bold text-amber-700 uppercase tracking-wider">
                      Statutory Defense Shield {String(idx + 1).padStart(2, '0')}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                      {service.title}
                    </h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.longDesc}
                    </p>

                    <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700">
                      <strong>Legal Framework:</strong> {service.legalFramework}
                    </div>

                    <div className="pt-2">
                      <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2">
                        Key Interventions:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 flex flex-wrap items-center gap-3">
                      <Link
                        to={`/services/${service.slug}`}
                        className="px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors flex items-center gap-2"
                      >
                        <span>Detailed Guide & Case Procedure</span>
                        <ArrowRight className="w-4 h-4 text-amber-400" />
                      </Link>
                      <Link
                        to="/contact"
                        className="px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                      >
                        Request Consultation
                      </Link>
                    </div>

                  </div>

                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Eligible Debt Portfolios */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
              Supported Unsecured Loan Types
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Each loan portfolio has specific RBI recovery regulations and settlement committee thresholds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LOAN_CATEGORIES.map((cat) => (
              <div key={cat.id} className="p-6 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-slate-900">{cat.name}</h3>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
                    {cat.avgSavings}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {cat.description}
                </p>
                <div className="pt-2 text-xs">
                  <span className="font-semibold text-slate-700">Common Pressure Tactics:</span>
                  <ul className="mt-1 space-y-1 text-slate-500">
                    {cat.commonIssues.map((issue, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-amber-500" />
                        <span>{issue}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Reusable Advertisement Slot */}
      <AdBanner />

    </div>
  );
};
