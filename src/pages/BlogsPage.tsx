import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bookmark, BookmarkCheck, ArrowRight, BookOpen, Clock, Calendar } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../data/mockData';
import { useApp } from '../context/AppContext';
import { AdBanner } from '../components/AdBanner';

export const BlogsPage: React.FC = () => {
  const { isArticleBookmarked, toggleBookmarkArticle, addSearchQuery, searchHistory } = useApp();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'Anti-Harassment', 'Debt Settlement', 'Legal Defense', 'RBI Guidelines'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      addSearchQuery(searchQuery.trim());
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* Header */}
      <section className="bg-white border-b border-slate-200 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wider mb-2">
              <span>Legal Insights & Knowledge Base</span>
              <span aria-hidden="true">·</span>
              <span>Advocate-Authored</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Debt Settlement, Legal Notice Defense & Rights Guides
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Clear, actionable legal explanations written by our Bar Council registered advocates to help you understand banking law, avoid fraud, and defend your rights.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Category tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search form */}
            <form onSubmit={handleSearchSubmit} className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search legal topics, Section 138..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs focus:outline-none focus:ring-2 focus:ring-slate-900"
              />
            </form>

          </div>

          {/* Quick search tags if any */}
          {searchHistory.length > 0 && (
            <div className="flex items-center gap-2 mt-4 text-xs text-slate-500">
              <span className="font-medium text-slate-400">Recent:</span>
              <div className="flex flex-wrap gap-1.5">
                {searchHistory.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => setSearchQuery(q)}
                    className="text-[11px] bg-slate-100 hover:bg-slate-200 text-slate-700 px-2 py-0.5 rounded transition-colors"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-slate-200 p-8 max-w-xl mx-auto">
              <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900">No matching articles found</h3>
              <p className="text-xs text-slate-500 mt-1">
                Try searching for different terms or clear your category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 text-xs font-bold text-white bg-slate-900 rounded-lg"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => {
                const bookmarked = isArticleBookmarked(post.slug);

                return (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between p-6 sm:p-8"
                  >
                    <div className="space-y-4">
                      
                      {/* Meta line without pills */}
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-amber-700">{post.category}</span>
                          <span aria-hidden="true">·</span>
                          <span>{post.readTime}</span>
                          <span aria-hidden="true">·</span>
                          <span>{post.date}</span>
                        </div>

                        {/* Bookmark button */}
                        <button
                          type="button"
                          onClick={() => toggleBookmarkArticle(post.slug)}
                          className="p-1.5 text-slate-400 hover:text-amber-600 rounded-md transition-colors"
                          title={bookmarked ? 'Remove bookmark' : 'Bookmark article'}
                          aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark article'}
                        >
                          {bookmarked ? (
                            <BookmarkCheck className="w-4 h-4 text-amber-600 fill-amber-600/20" />
                          ) : (
                            <Bookmark className="w-4 h-4" />
                          )}
                        </button>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-slate-950 leading-snug hover:text-amber-700 transition-colors">
                        <Link to={`/blogs/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      {/* Excerpt */}
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {post.excerpt}
                      </p>

                    </div>

                    <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                      <span className="text-xs text-slate-400">By Senior Advocate Team</span>
                      <Link
                        to={`/blogs/${post.slug}`}
                        className="text-xs font-bold text-slate-900 hover:text-amber-600 flex items-center gap-1.5"
                      >
                        <span>Read Full Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                  </article>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* Reusable Advertisement Slot */}
      <AdBanner />

    </div>
  );
};
