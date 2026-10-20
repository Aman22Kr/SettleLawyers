import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Bookmark, BookmarkCheck, Share2, Check, CheckCircle2, Shield, Calendar, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { AdBanner } from '../components/AdBanner';

export const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { isArticleBookmarked, toggleBookmarkArticle } = useApp();
  const [copied, setCopied] = useState(false);

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-2xl border border-slate-200 text-center max-w-md">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Article Not Found</h2>
          <p className="text-xs text-slate-600 mb-6">
            The legal guide you are looking for may have been moved or updated.
          </p>
          <Link
            to="/blogs"
            className="px-5 py-2.5 bg-slate-900 text-white font-bold text-xs rounded-lg inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Legal Insights</span>
          </Link>
        </div>
      </div>
    );
  }

  const bookmarked = isArticleBookmarked(post.slug);

  const handleShare = () => {
    try {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (e) {
      // fallback
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Top Breadcrumb & Actions */}
      <div className="bg-white border-b border-slate-200 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link
            to="/blogs"
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 flex items-center gap-1.5"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Insights</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={() => toggleBookmarkArticle(post.slug)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
            >
              {bookmarked ? (
                <>
                  <BookmarkCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span>Bookmarked</span>
                </>
              ) : (
                <>
                  <Bookmark className="w-3.5 h-3.5" />
                  <span>Bookmark</span>
                </>
              )}
            </button>

            <button
              onClick={handleShare}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Article Body Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 shadow-xs space-y-8">
          
          {/* Header */}
          <div className="space-y-4 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="font-bold text-amber-700 uppercase tracking-wider">{post.category}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {post.readTime}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {post.date}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-base text-slate-600 leading-relaxed italic border-l-2 border-amber-500 pl-4 py-1">
              {post.excerpt}
            </p>
          </div>

          {/* Key Takeaways Box */}
          <div className="p-6 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-3">
            <h3 className="font-bold text-xs uppercase tracking-wider text-amber-900">
              Key Advocate Takeaways
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-amber-950">
              {post.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Paragraphs */}
          <div className="space-y-6 text-sm sm:text-base text-slate-700 leading-relaxed max-w-[70ch]">
            {post.content.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>

          {/* Author Box */}
          <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-base">
                <Shield className="w-5 h-5 fill-amber-400/20" />
              </div>
              <div>
                <p className="font-bold text-sm text-slate-900">SettleLawers Advocate Directorate</p>
                <p className="text-xs text-slate-500">Bar Council of Delhi · Banking & Recovery Law Panel</p>
              </div>
            </div>

            <Link
              to="/contact"
              className="px-5 py-2.5 text-xs uppercase tracking-wider font-bold text-white bg-slate-900 hover:bg-slate-800 rounded-lg shadow-xs whitespace-nowrap"
            >
              Consult On This Issue
            </Link>
          </div>

        </div>
      </article>

      {/* Reusable Advertisement Slot */}
      <AdBanner />

    </div>
  );
};
