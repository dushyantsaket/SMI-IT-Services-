import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Users,
  Clock,
  CheckCircle2,
  XCircle,
  Plus,
  Search,
  Calendar,
  Eye,
  Edit2,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  X,
  FileText,
  Mail,
  Phone,
  MapPin,
  Send,
  Save,
} from 'lucide-react'
import { initialJobApplications } from '../../data/adminData'

export default function AdminJobApplicationsPage() {
  const [applications, setApplications] = useState(initialJobApplications)
  const [activeTab, setActiveTab] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCandidate, setSelectedCandidate] = useState(initialJobApplications[0])
  const [noteText, setNoteText] = useState(initialJobApplications[0]?.notes || '')
  const [savedNoteNotification, setSavedNoteNotification] = useState(false)

  // Status counts
  const tabs = [
    { label: 'All', count: 18 },
    { label: 'New', count: 5 },
    { label: 'Under Review', count: 6 },
    { label: 'Shortlisted', count: 4 },
    { label: 'Rejected', count: 3 },
  ]

  // Filter applications
  const filteredApps = applications.filter((app) => {
    const matchesTab = activeTab === 'All' || app.status === activeTab
    const matchesSearch =
      app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
      app.email.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  const handleSelectCandidate = (candidate) => {
    setSelectedCandidate(candidate)
    setNoteText(candidate.notes || '')
  }

  const handleUpdateStatus = (id, newStatus) => {
    setApplications(applications.map((a) => (a.id === id ? { ...a, status: newStatus } : a)))
    if (selectedCandidate && selectedCandidate.id === id) {
      setSelectedCandidate({ ...selectedCandidate, status: newStatus })
    }
  }

  const handleSaveNote = () => {
    if (!selectedCandidate) return
    setApplications(
      applications.map((a) =>
        a.id === selectedCandidate.id ? { ...a, notes: noteText } : a
      )
    )
    setSelectedCandidate({ ...selectedCandidate, notes: noteText })
    setSavedNoteNotification(true)
    setTimeout(() => setSavedNoteNotification(false), 2000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-1">
            <Link to="/admin" className="hover:text-indigo-600 transition-colors">
              Dashboard
            </Link>
            <span>&gt;</span>
            <span className="text-slate-700">Job Applications</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Job Applications</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage all job applications, review candidates and track their status.
          </p>
        </div>

        <button className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-500/20 cursor-pointer self-start sm:self-auto">
          <Plus className="w-4 h-4" /> Add New (Manual)
        </button>
      </div>

      {/* 4 Stat KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">18</div>
            <div className="text-xs font-medium text-slate-400">Total Applications</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">6</div>
            <div className="text-xs font-medium text-slate-400">Under Review</div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">9</div>
            <div className="text-xs font-medium text-slate-400">Shortlisted</div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
            <XCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">3</div>
            <div className="text-xs font-medium text-slate-400">Rejected</div>
          </div>
        </div>
      </div>

      {/* Main Split Layout: Table (Left) + Candidate Details (Right) */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-2xs overflow-hidden">
          {/* Status Tabs & Filters */}
          <div className="p-5 border-b border-slate-100 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(tab.label)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    activeTab === tab.label
                      ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/20'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {tab.label} ({tab.count})
                </button>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="relative w-full sm:max-w-xs">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search applicants..."
                  className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
                <select className="px-2.5 py-1.5 bg-slate-50 border border-slate-200/80 rounded-xl text-[11px] font-semibold text-slate-700">
                  <option>All Positions</option>
                  <option>Frontend Developer</option>
                  <option>Backend Developer</option>
                  <option>UI/UX Designer</option>
                  <option>Digital Marketing</option>
                </select>
                <select className="px-2.5 py-1.5 bg-slate-50 border border-slate-200/80 rounded-xl text-[11px] font-semibold text-slate-700">
                  <option>All Status</option>
                  <option>New</option>
                  <option>Under Review</option>
                  <option>Shortlisted</option>
                  <option>Rejected</option>
                </select>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-semibold bg-slate-50/50">
                  <th className="py-3 px-3 w-8">
                    <input type="checkbox" className="rounded border-slate-300 text-indigo-600" />
                  </th>
                  <th className="py-3 px-3 w-8">#</th>
                  <th className="py-3 px-3 font-semibold">Name</th>
                  <th className="py-3 px-3 font-semibold">Position Applied</th>
                  <th className="py-3 px-3 font-semibold">Email</th>
                  <th className="py-3 px-3 font-semibold">Date</th>
                  <th className="py-3 px-3 font-semibold">Status</th>
                  <th className="py-3 px-3 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {filteredApps.map((app, idx) => (
                  <tr
                    key={app.id}
                    onClick={() => handleSelectCandidate(app)}
                    className={`hover:bg-slate-50/80 transition-colors cursor-pointer ${
                      selectedCandidate?.id === app.id ? 'bg-indigo-50/40' : ''
                    }`}
                  >
                    <td className="py-3.5 px-3" onClick={(e) => e.stopPropagation()}>
                      <input type="checkbox" className="rounded border-slate-300 text-indigo-600" />
                    </td>
                    <td className="py-3.5 px-3 font-medium text-slate-400">{idx + 1}</td>
                    <td className="py-3.5 px-3 font-bold text-slate-900 whitespace-nowrap">
                      {app.name}
                    </td>
                    <td className="py-3.5 px-3 text-slate-600 whitespace-nowrap">{app.position}</td>
                    <td className="py-3.5 px-3 text-slate-400 truncate max-w-[130px]">{app.email}</td>
                    <td className="py-3.5 px-3 text-slate-400 whitespace-nowrap">{app.date}</td>
                    <td className="py-3.5 px-3">
                      <span
                        className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                          app.status === 'New'
                            ? 'bg-indigo-50 text-indigo-600'
                            : app.status === 'Shortlisted'
                            ? 'bg-emerald-50 text-emerald-600'
                            : app.status === 'Under Review'
                            ? 'bg-amber-50 text-amber-600'
                            : 'bg-rose-50 text-rose-600'
                        }`}
                      >
                        {app.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="inline-flex items-center gap-1">
                        <button
                          onClick={() => handleSelectCandidate(app)}
                          className="p-1 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                        <button className="p-1 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded">
                          <Edit2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <div>Showing 1 to {filteredApps.length} of 18 applications</div>
            <div className="flex items-center gap-1">
              <button className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
                1
              </button>
              <button className="w-7 h-7 rounded-lg text-slate-600 hover:bg-slate-50 font-bold text-xs flex items-center justify-center">
                2
              </button>
              <button className="w-7 h-7 rounded-lg text-slate-600 hover:bg-slate-50 font-bold text-xs flex items-center justify-center">
                3
              </button>
              <button className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right 1 Col: Application Details Card */}
        {selectedCandidate && (
          <div className="bg-white rounded-2xl border border-slate-100 shadow-2xs p-5 sm:p-6 space-y-4 self-start">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h2 className="text-sm font-bold text-slate-900">Application Details</h2>
            </div>

            {/* Candidate Header */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 font-black text-base flex items-center justify-center">
                {selectedCandidate.avatarInitials}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">{selectedCandidate.name}</h3>
                <p className="text-xs text-slate-500">{selectedCandidate.position}</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => alert(`Opening resume for ${selectedCandidate.name}`)}
                className="py-2 px-3 rounded-xl border border-slate-200 text-slate-700 hover:border-indigo-200 hover:text-indigo-600 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
              >
                <FileText className="w-3.5 h-3.5" /> View Resume
              </button>
              <a
                href={`mailto:${selectedCandidate.email}`}
                className="py-2 px-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-sm"
              >
                <Send className="w-3.5 h-3.5" /> Send Email
              </a>
            </div>

            {/* Details list */}
            <div className="space-y-3 pt-2 text-xs">
              <div>
                <span className="text-[11px] text-slate-400 block mb-0.5">Email</span>
                <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  {selectedCandidate.email}
                </div>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 block mb-0.5">Phone</span>
                <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  {selectedCandidate.phone}
                </div>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 block mb-0.5">Location</span>
                <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  {selectedCandidate.location}
                </div>
              </div>

              <div>
                <span className="text-[11px] text-slate-400 block mb-0.5">Applied On</span>
                <div className="flex items-center gap-1.5 text-slate-700 font-medium">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {selectedCandidate.date}
                </div>
              </div>

              {/* Status Select */}
              <div>
                <span className="text-[11px] text-slate-400 block mb-1">Status</span>
                <select
                  value={selectedCandidate.status}
                  onChange={(e) => handleUpdateStatus(selectedCandidate.id, e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-bold text-slate-700 focus:outline-none focus:border-indigo-500"
                >
                  <option value="New">New</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Shortlisted">Shortlisted</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              {/* Notes Textarea */}
              <div>
                <span className="text-[11px] text-slate-400 block mb-1">Notes</span>
                <textarea
                  rows={3}
                  value={noteText}
                  onChange={(e) => setNoteText(e.target.value)}
                  placeholder="Add candidate assessment notes..."
                  className="w-full p-3 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-700 focus:outline-none focus:border-indigo-500 focus:bg-white"
                />
              </div>

              <button
                onClick={handleSaveNote}
                className="w-full py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <Save className="w-3.5 h-3.5" /> Save Note
              </button>

              {savedNoteNotification && (
                <div className="p-2 bg-emerald-50 text-emerald-700 text-xs rounded-lg text-center font-semibold animate-in fade-in">
                  ✓ Note saved successfully!
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
