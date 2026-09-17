import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FileText, Plus, MapPin, Briefcase, Trash2, X } from 'lucide-react'

export default function AdminJobOpeningsPage() {
  const [openings, setOpenings] = useState([
    { id: 1, title: 'Frontend Developer (React / Next.js)', type: 'Full-time', location: 'Indore / Remote', applicants: 8, status: 'Active' },
    { id: 2, title: 'Backend Developer (Node.js / Express)', type: 'Full-time', location: 'Indore, MP', applicants: 5, status: 'Active' },
    { id: 3, title: 'UI/UX Designer (Figma)', type: 'Full-time', location: 'Remote', applicants: 4, status: 'Active' },
    { id: 4, title: 'Digital Marketing Executive', type: 'Full-time', location: 'Indore, MP', applicants: 6, status: 'Active' },
    { id: 5, title: 'SEO & Content Strategist', type: 'Part-time / Remote', location: 'Remote', applicants: 3, status: 'Active' },
    { id: 6, title: 'Social Media Manager', type: 'Full-time', location: 'Indore, MP', applicants: 4, status: 'Active' },
  ])
  const [showAddModal, setShowAddModal] = useState(false)
  const [newTitle, setNewTitle] = useState('')
  const [newLocation, setNewLocation] = useState('Indore / Remote')
  const [newType, setNewType] = useState('Full-time')

  const handleAdd = (e) => {
    e.preventDefault()
    if (!newTitle) return
    setOpenings([
      ...openings,
      { id: Date.now(), title: newTitle, type: newType, location: newLocation, applicants: 0, status: 'Active' },
    ])
    setShowAddModal(false)
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
            <span className="text-slate-700">Job Openings</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Career & Job Openings</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Publish careers, attract top marketing and engineering talent, and receive applications.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-500/20 cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> Post Job Opening
        </button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {openings.map((job) => (
          <div key={job.id} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600">
                  {job.type}
                </span>
                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                  {job.status}
                </span>
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-2">{job.title}</h3>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-4">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                {job.location}
              </div>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-slate-50 text-xs">
              <Link to="/admin/job-applications" className="font-bold text-indigo-600 hover:text-indigo-700">
                {job.applicants} Applicants →
              </Link>
              <button
                onClick={() => setOpenings(openings.filter((o) => o.id !== job.id))}
                className="text-slate-400 hover:text-rose-600 p-1"
                title="Delete"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button onClick={() => setShowAddModal(false)} className="absolute top-4 right-4 text-slate-400 p-1">
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-base font-bold text-slate-900 mb-4">Post Job Opening</h3>
            <form onSubmit={handleAdd} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-600 font-semibold mb-1">Position Title *</label>
                <input
                  type="text"
                  required
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-indigo-500"
                  placeholder="e.g. Lead React Native Developer"
                />
              </div>
              <div>
                <label className="block text-slate-600 font-semibold mb-1">Employment Type</label>
                <select
                  value={newType}
                  onChange={(e) => setNewType(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-indigo-500"
                >
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-600 font-semibold mb-1">Location</label>
                <input
                  type="text"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-indigo-500"
                />
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl"
                >
                  Publish Opening
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
