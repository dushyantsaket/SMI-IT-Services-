import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Newspaper, Plus, Trash2, Calendar, ExternalLink, X } from 'lucide-react'

export default function AdminNewsPage() {
  const [news, setNews] = useState([
    { id: 1, title: 'Simple Marketing Ideas Recognized Among Top Digital Tech Agencies in 2026', category: 'Company News', date: '14 Sep 2026', author: 'Dushyant Saket' },
    { id: 2, title: 'Launched New AI Marketing Suite for Real-time Customer Engagement', category: 'Product Launch', date: '01 Sep 2026', author: 'Priya Pathak' },
    { id: 3, title: 'Welcoming 5 New Full-Stack Engineers & Marketing Specialists to Our Team', category: 'Team & Culture', date: '25 Aug 2026', author: 'HR Team' },
    { id: 4, title: 'Simple Marketing Ideas Celebrates 150+ Successful Client Deliveries', category: 'Milestone', date: '12 Aug 2026', author: 'Dushyant Saket' },
  ])
  const [showModal, setShowModal] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newCategory, setNewCategory] = useState('Company News')

  const handleAdd = (e) => {
    e.preventDefault()
    if (!newTitle) return
    setNews([
      { id: Date.now(), title: newTitle, category: newCategory, date: 'Today', author: 'Admin' },
      ...news,
    ])
    setShowModal(false)
    setNewTitle('')
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-1">
            <Link to="/admin" className="hover:text-indigo-600 transition-colors">
              Dashboard
            </Link>
            <span>&gt;</span>
            <span className="text-slate-700">News & Updates</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">News & Company Updates</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Publish press releases, product announcements, and company milestones.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-500/20 cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> Add News
        </button>
      </div>

      <div className="space-y-3">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600">
                  {item.category}
                </span>
                <span className="text-slate-400 text-xs">•</span>
                <span className="text-slate-400 text-xs flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {item.date}
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900">{item.title}</h3>
              <p className="text-xs text-slate-400 mt-0.5">By {item.author}</p>
            </div>
            <button
              onClick={() => setNews(news.filter((n) => n.id !== item.id))}
              className="text-slate-400 hover:text-rose-600 p-1.5 rounded-lg hover:bg-rose-50 transition-colors self-end sm:self-auto"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button onClick={() => setShowModal(false)} className="absolute top-4 right-4 text-slate-400 p-1">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-base font-bold text-slate-900 mb-4">Add News Item</h3>
            <form onSubmit={handleAdd} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-600 font-semibold mb-1">Headline *</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-indigo-500"
                  placeholder="e.g. Simple Marketing Ideas Expands Operations"
                />
              </div>
              <div>
                <label className="block text-slate-600 font-semibold mb-1">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-indigo-500"
                >
                  <option value="Company News">Company News</option>
                  <option value="Product Launch">Product Launch</option>
                  <option value="Milestone">Milestone</option>
                  <option value="Team & Culture">Team & Culture</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl"
                >
                  Publish News
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
