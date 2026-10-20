import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FileText,
  AlertTriangle,
  BookmarkCheck,
  Calculator,
  Trash2,
  Copy,
  Check,
  ExternalLink,
  Shield,
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { BLOG_POSTS } from '../data/mockData';
import { AdBanner } from '../components/AdBanner';

export const ClientTrackerPage: React.FC = () => {
  const {
    consultations,
    removeConsultation,
    harassmentIncidents,
    removeHarassmentIncident,
    savedPlans,
    removeSettlementPlan,
    bookmarkedArticles,
    toggleBookmarkArticle,
    clearAllLocalData,
  } = useApp();

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'consultations' | 'incidents' | 'plans' | 'bookmarks'>('consultations');

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const copyIncidentText = (inc: any) => {
    const text = `HARASSMENT EVIDENCE DOSSIER\nDate: ${inc.date} ${inc.time}\nLender/Bank: ${inc.bankName}\nAgent: ${inc.agentPhoneOrName}\nViolation: ${inc.typeOfViolation}\nDescription: ${inc.description}\nGoverning Law: RBI Circular RBI/2022-23/108`;
    navigator.clipboard.writeText(text);
    setCopiedId(inc.id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const bookmarkedPosts = BLOG_POSTS.filter((p) => bookmarkedArticles.includes(p.slug));

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
                <span>Client Case Portal</span>
                <span aria-hidden="true">·</span>
                <span>Browser LocalStorage Protected</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight">
                My Legal Dossier & Case Tracker
              </h1>
              <p className="mt-2 text-sm text-slate-600 max-w-xl">
                Track your submitted evaluation requests, logged recovery harassment incidents, saved settlement plans, and bookmarked articles.
              </p>
            </div>

            <button
              onClick={() => {
                if (window.confirm('Are you sure you want to clear all locally saved case data on this device?')) {
                  clearAllLocalData();
                }
              }}
              className="px-4 py-2 text-xs font-semibold text-rose-600 hover:bg-rose-50 border border-rose-200 rounded-lg transition-colors flex items-center gap-1.5 self-start sm:self-auto"
            >
              <Trash2 className="w-4 h-4" />
              <span>Clear Local Data</span>
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 mt-8 border-b border-slate-200 overflow-x-auto scrollbar-none pb-px">
            {[
              { id: 'consultations', label: `Consultations (${consultations.length})`, icon: FileText },
              { id: 'incidents', label: `Harassment Incidents (${harassmentIncidents.length})`, icon: AlertTriangle },
              { id: 'plans', label: `Saved OTS Plans (${savedPlans.length})`, icon: Calculator },
              { id: 'bookmarks', label: `Saved Guides (${bookmarkedArticles.length})`, icon: BookmarkCheck },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition-colors whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'border-slate-900 text-slate-900'
                      : 'border-transparent text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* TAB 1: CONSULTATIONS */}
          {activeTab === 'consultations' && (
            <div className="space-y-6">
              {consultations.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
                  <FileText className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-slate-900">No Consultations Submitted Yet</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-6">
                    Submit your debt files for free advocate evaluation.
                  </p>
                  <Link
                    to="/contact"
                    className="px-5 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-lg inline-flex items-center gap-2"
                  >
                    <span>Request Free Case Evaluation</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {consultations.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                          <span className="text-xs font-mono font-bold text-slate-500">
                            #{item.id}
                          </span>
                          <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800">
                            {item.status}
                          </span>
                        </div>

                        <div>
                          <p className="font-bold text-base text-slate-900">{item.name}</p>
                          <p className="text-xs text-slate-500">{item.phone} · {item.city}</p>
                        </div>

                        <div className="p-3 bg-slate-50 rounded-lg text-xs space-y-1">
                          <div className="flex justify-between">
                            <span className="text-slate-500">Unpaid Debt:</span>
                            <span className="font-bold text-slate-900 font-mono">{formatINR(item.totalDebt)}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">Creditor Banks:</span>
                            <span className="font-semibold text-slate-800">{item.lenderNames}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-slate-500">Urgency:</span>
                            <span className="capitalize font-semibold text-amber-700">{item.situation.replace('_', ' ')}</span>
                          </div>
                        </div>

                        {item.notes && (
                          <p className="text-xs text-slate-600 italic">
                            "{item.notes}"
                          </p>
                        )}
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                        <span>Submitted: {new Date(item.createdAt).toLocaleDateString()}</span>
                        <button
                          onClick={() => removeConsultation(item.id)}
                          className="text-rose-600 hover:text-rose-800 font-semibold"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: HARASSMENT INCIDENTS */}
          {activeTab === 'incidents' && (
            <div className="space-y-6">
              {harassmentIncidents.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
                  <AlertTriangle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-slate-900">No Harassment Incidents Logged</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-6">
                    If an agent calls before 8 AM, after 7 PM, or uses abusive language, log it here.
                  </p>
                  <Link
                    to="/rights"
                    className="px-5 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-lg inline-flex items-center gap-2"
                  >
                    <span>View RBI Rights & Log Incident</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {harassmentIncidents.map((inc) => (
                    <div
                      key={inc.id}
                      className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs">
                          <span className="font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                            Violation: {inc.typeOfViolation.replace('_', ' ').toUpperCase()}
                          </span>
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-500 font-mono">{inc.date} at {inc.time}</span>
                        </div>

                        <h4 className="font-bold text-base text-slate-900">
                          {inc.bankName} — {inc.agentPhoneOrName}
                        </h4>

                        <p className="text-xs text-slate-600 max-w-2xl leading-relaxed">
                          {inc.description}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => copyIncidentText(inc)}
                          className="px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 border border-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
                          title="Copy text for police or ombudsman complaint"
                        >
                          {copiedId === inc.id ? (
                            <>
                              <Check className="w-4 h-4 text-emerald-600" />
                              <span className="text-emerald-700 font-bold">Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-4 h-4 text-slate-500" />
                              <span>Copy Evidence</span>
                            </>
                          )}
                        </button>
                        <button
                          onClick={() => removeHarassmentIncident(inc.id)}
                          className="p-2 text-slate-400 hover:text-rose-600 transition-colors"
                          title="Delete incident"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: SAVED PLANS */}
          {activeTab === 'plans' && (
            <div className="space-y-6">
              {savedPlans.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
                  <Calculator className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-slate-900">No Settlement Plans Saved</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-6">
                    Use our interactive calculator to estimate and save debt reduction figures.
                  </p>
                  <Link
                    to="/calculator"
                    className="px-5 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-lg inline-flex items-center gap-2"
                  >
                    <span>Open Settlement Calculator</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {savedPlans.map((plan) => (
                    <div
                      key={plan.id}
                      className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-3">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                          <h4 className="font-bold text-base text-slate-900">{plan.loanName}</h4>
                          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded">
                            {plan.targetMonths} Mo Target
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-3 text-xs">
                          <div className="p-3 bg-slate-50 rounded-lg">
                            <span className="text-slate-500">Original Claim</span>
                            <p className="font-bold text-slate-800 text-sm font-mono mt-0.5">
                              {formatINR(plan.originalDebt)}
                            </p>
                          </div>
                          <div className="p-3 bg-amber-50 rounded-lg">
                            <span className="text-amber-800 font-semibold">Est. OTS</span>
                            <p className="font-extrabold text-amber-900 text-sm font-mono mt-0.5">
                              {formatINR(plan.estimatedSettlement)}
                            </p>
                          </div>
                        </div>

                        <div className="p-3 bg-slate-50 rounded-lg text-xs flex justify-between items-center">
                          <span className="text-slate-500">Target Monthly Accumulation:</span>
                          <span className="font-extrabold text-slate-900 font-mono">
                            {formatINR(plan.monthlySavingsTarget)}/mo
                          </span>
                        </div>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          to="/contact"
                          className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1"
                        >
                          <span>Execute with Advocate</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          onClick={() => removeSettlementPlan(plan.id)}
                          className="text-xs font-semibold text-rose-600 hover:text-rose-800"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: BOOKMARKED GUIDES */}
          {activeTab === 'bookmarks' && (
            <div className="space-y-6">
              {bookmarkedPosts.length === 0 ? (
                <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
                  <BookmarkCheck className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                  <h3 className="text-lg font-bold text-slate-900">No Bookmarked Articles</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-6">
                    Browse our legal insights library and save articles for reference.
                  </p>
                  <Link
                    to="/blogs"
                    className="px-5 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-lg inline-flex items-center gap-2"
                  >
                    <span>Browse Legal Insights</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {bookmarkedPosts.map((post) => (
                    <div
                      key={post.id}
                      className="bg-white rounded-2xl border border-slate-200 p-6 shadow-xs flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <span className="font-bold text-amber-700">{post.category}</span>
                          <span>{post.readTime}</span>
                        </div>
                        <h4 className="font-bold text-base text-slate-900 hover:text-amber-600 transition-colors">
                          <Link to={`/blogs/${post.slug}`}>
                            {post.title}
                          </Link>
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <Link
                          to={`/blogs/${post.slug}`}
                          className="font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1"
                        >
                          <span>Read Now</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <button
                          onClick={() => toggleBookmarkArticle(post.slug)}
                          className="text-slate-400 hover:text-rose-600"
                        >
                          Remove Bookmark
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </section>

      {/* Reusable Advertisement Slot */}
      <AdBanner />

    </div>
  );
};
