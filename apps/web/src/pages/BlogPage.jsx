import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Calendar,
  Clock,
  User,
  ArrowRight,
  Search,
  Tag,
  Share2,
  Bookmark,
  CheckCircle2,
  Mail,
  X,
} from 'lucide-react'
import { blogArticles } from '../data/adminData'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [readingArticle, setReadingArticle] = useState(null)
  const [emailInput, setEmailInput] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const categories = ['All', 'Marketing Strategy', 'Productivity & Tech', 'Social Media']

  const filteredArticles = blogArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === 'All' || article.category === selectedCategory
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredArticle = blogArticles[0]

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!emailInput) return
    setSubscribed(true)
    setTimeout(() => {
      setEmailInput('')
      setSubscribed(false)
    }, 4000)
  }

  return (
    <div className="min-h-screen bg-slate-50/50 pt-28 pb-20">
      {/* Hero Header */}
      <section className="container-custom mb-14 text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-wider uppercase mb-4">
          <Tag className="w-3.5 h-3.5" /> SMI Insights & Marketing Trends
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-tight mb-4">
          Ideas, Tactics & Tech for Modern Business Growth
        </h1>
        <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
          Deep-dives into digital marketing strategies, custom software architecture, consumer data insights, and collaborative teamwork.
        </p>

        {/* Search & Category Filter */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <div className="relative w-full max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search articles by title, topic or keyword..."
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article Card */}
      {featuredArticle && selectedCategory === 'All' && !searchQuery && (
        <section className="container-custom mb-16">
          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden grid lg:grid-cols-12 gap-0 group">
            {/* Left Image */}
            <div className="lg:col-span-7 relative bg-slate-900 overflow-hidden flex items-center justify-center min-h-[340px]">
              <img
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 bg-indigo-600 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-md">
                Featured Story
              </div>
            </div>

            {/* Right Details */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <span className="font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
                    {featuredArticle.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {featuredArticle.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight mb-4 group-hover:text-indigo-600 transition-colors">
                  {featuredArticle.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold bg-slate-100 text-slate-600 px-2.5 py-0.5 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-indigo-600 text-white font-black text-xs flex items-center justify-center">
                    DS
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">{featuredArticle.author}</div>
                    <div className="text-[10px] text-slate-400">{featuredArticle.authorRole}</div>
                  </div>
                </div>

                <button
                  onClick={() => setReadingArticle(featuredArticle)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="container-custom">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            {selectedCategory === 'All' ? 'Latest Publications' : selectedCategory}
          </h2>
          <span className="text-xs text-slate-400">{filteredArticles.length} articles found</span>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-3xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="aspect-4/3 overflow-hidden relative bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-indigo-600 text-[11px] font-bold px-3 py-1 rounded-full shadow-xs">
                    {article.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> {article.date}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 leading-snug mb-3 group-hover:text-indigo-600 transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {article.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold bg-slate-50 text-slate-500 px-2 py-0.5 rounded-md"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-slate-50 mt-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-slate-100 text-slate-700 font-bold text-[10px] flex items-center justify-center">
                    {article.author.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <span className="text-xs font-semibold text-slate-700">{article.author}</span>
                </div>

                <button
                  onClick={() => setReadingArticle(article)}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-1 cursor-pointer"
                >
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter Subscription Box */}
      <section className="container-custom mt-20">
        <div className="bg-gradient-to-r from-slate-950 via-indigo-950 to-slate-950 text-white rounded-3xl p-8 sm:p-14 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-4 border border-indigo-400/30">
              <Mail className="w-6 h-6" />
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-3">
              Stay Ahead with Growth & Marketing Insights
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto mb-6">
              Subscribe to our monthly newsletter for actionable strategies on social media, web development, SEO, and business scaling.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-2.5 max-w-md mx-auto">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your work email..."
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-xs sm:text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:bg-white/15 backdrop-blur-sm"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm transition-all shadow-lg cursor-pointer whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>

            {subscribed && (
              <div className="mt-4 text-emerald-400 text-xs font-bold animate-in fade-in">
                ✓ Thank you for subscribing! Check your inbox soon.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Reader Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-10 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setReadingArticle(null)}
              className="sticky top-0 float-right text-slate-400 hover:text-slate-700 p-1.5 rounded-full bg-slate-100 z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4">
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                {readingArticle.category}
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 leading-tight mb-4">
              {readingArticle.title}
            </h2>

            <div className="flex items-center gap-3 text-xs text-slate-400 pb-6 border-b border-slate-100 mb-6">
              <span className="font-semibold text-slate-700">{readingArticle.author}</span>
              <span>•</span>
              <span>{readingArticle.date}</span>
              <span>•</span>
              <span>{readingArticle.readTime}</span>
            </div>

            <div className="aspect-video rounded-2xl overflow-hidden mb-6">
              <img
                src={readingArticle.image}
                alt={readingArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="prose prose-slate max-w-none text-xs sm:text-sm text-slate-700 leading-relaxed space-y-4">
              <p className="font-semibold text-base text-slate-900 leading-normal">
                {readingArticle.excerpt}
              </p>
              <p>
                In today's fast-moving business climate, having a disjointed approach between your product engineering team and marketing outreach results in high friction and missed opportunities. By unifying agile sprint demos with live marketing experiments, teams can test messaging with real customers from day one.
              </p>
              <h4 className="text-base font-bold text-slate-900 pt-2">Key Tactical Pillars:</h4>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>Automated social listening to identify trending buyer intent triggers.</li>
                <li>Cross-departmental sprint syncs for seamless content rollouts.</li>
                <li>Data-driven iteration on high-converting landing page variants.</li>
                <li>Transparent client reporting dashboards with real-time KPI tracking.</li>
              </ul>
              <p>
                Whether scaling a startup or optimizing an established enterprise brand, aligning digital execution with authentic customer feedback remains the greatest catalyst for sustained growth.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {readingArticle.tags.map((t) => (
                  <span key={t} className="text-[11px] bg-slate-100 text-slate-600 px-2.5 py-1 rounded-full">
                    #{t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setReadingArticle(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold text-xs hover:bg-slate-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
