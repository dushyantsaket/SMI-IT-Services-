import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  MessageSquare,
  Briefcase,
  Folder,
  Users,
  Newspaper,
  UserCheck,
  ArrowRight,
  Calendar,
  Zap,
  CheckCircle2,
  Plus,
  Clock,
  MoreVertical,
  CheckSquare,
  FileText,
  UserPlus,
  StickyNote,
  ListTodo,
} from 'lucide-react'
import {
  adminProfile,
  initialInquiries,
  initialJobApplications,
  initialNotes,
  initialTasks,
} from '../../data/adminData'

export default function AdminDashboardPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('notes') // 'notes' | 'tasks'
  const [notes, setNotes] = useState(initialNotes)
  const [newNoteText, setNewNoteText] = useState('')
  const [showAddNoteModal, setShowAddNoteModal] = useState(false)

  const toggleNote = (id) => {
    setNotes(notes.map((n) => (n.id === id ? { ...n, completed: !n.completed } : n)))
  }

  const handleAddNote = (e) => {
    e.preventDefault()
    if (!newNoteText.trim()) return
    const newNote = {
      id: `n-${Date.now()}`,
      text: newNoteText,
      date: 'Today',
      completed: false,
    }
    setNotes([newNote, ...notes])
    setNewNoteText('')
    setShowAddNoteModal(false)
  }

  // Quick action items
  const quickActions = [
    { label: 'Add New Inquiry', icon: MessageSquare, action: () => navigate('/admin/inquiries') },
    { label: 'Add Service', icon: Briefcase, action: () => navigate('/admin/services') },
    { label: 'Create Project', icon: Folder, action: () => navigate('/admin/projects') },
    { label: 'Post Job Opening', icon: FileText, action: () => navigate('/admin/job-openings') },
    { label: 'Add News', icon: Newspaper, action: () => navigate('/admin/news') },
    { label: 'Add User', icon: UserPlus, action: () => navigate('/admin/users') },
    { label: 'Add Note', icon: StickyNote, action: () => setShowAddNoteModal(true) },
    { label: 'Assign Task', icon: ListTodo, action: () => navigate('/admin/tasks') },
  ]

  const stats = [
    {
      title: 'Total Inquiries',
      count: 28,
      icon: MessageSquare,
      color: 'bg-blue-50 text-blue-600',
      link: '/admin/inquiries',
    },
    {
      title: 'Services',
      count: 12,
      icon: Briefcase,
      color: 'bg-emerald-50 text-emerald-600',
      link: '/admin/services',
    },
    {
      title: 'Projects',
      count: 8,
      icon: Folder,
      color: 'bg-amber-50 text-amber-600',
      link: '/admin/projects',
    },
    {
      title: 'Job Applications',
      count: 18,
      icon: Users,
      color: 'bg-indigo-50 text-indigo-600',
      link: '/admin/job-applications',
    },
    {
      title: 'News & Updates',
      count: 6,
      icon: Newspaper,
      color: 'bg-rose-50 text-rose-600',
      link: '/admin/news',
    },
    {
      title: 'Total Users',
      count: 53,
      icon: UserCheck,
      color: 'bg-sky-50 text-sky-600',
      link: '/admin/users',
    },
  ]

  return (
    <div className="space-y-8">
      {/* Top Welcome Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 flex items-center gap-2">
            Welcome Back, {adminProfile.name} <span className="text-2xl">👋</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Here's an overview of your business activities. Manage inquiries, projects, team and more from one place.
          </p>
        </div>
        <div className="text-left sm:text-right">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200/80 shadow-2xs">
            <Calendar className="w-3.5 h-3.5 text-indigo-500" />
            Wed, 17 Sep 2026
          </div>
          <div className="text-[11px] text-slate-400 mt-1">
            Good to see you again, {adminProfile.name.split(' ')[0]}!
          </div>
        </div>
      </div>

      {/* 6 Metric KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((s) => {
          const Icon = s.icon
          return (
            <div
              key={s.title}
              className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center mb-3`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-black text-slate-900">{s.count}</div>
              <div className="text-xs font-semibold text-slate-500 mt-0.5">{s.title}</div>
              <Link
                to={s.link}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-indigo-600 hover:text-indigo-700 mt-3 pt-2 border-t border-slate-50 w-full"
              >
                View All <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          )
        })}
      </div>

      {/* 2 Side-by-Side Tables: Recent Inquiries & Recent Job Applications */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Inquiries Card */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-2xs p-5 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <MessageSquare className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-slate-900">Recent Inquiries</h2>
            </div>
            <Link
              to="/admin/inquiries"
              className="text-xs font-bold text-indigo-600 hover:text-indigo-700"
            >
              View All
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                  <th className="pb-3 font-semibold">Name</th>
                  <th className="pb-3 font-semibold">Service</th>
                  <th className="pb-3 font-semibold">Date</th>
                  <th className="pb-3 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {initialInquiries.slice(0, 5).map((inq) => (
                  <tr key={inq.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 font-medium text-slate-800">{inq.name}</td>
                    <td className="py-3 text-slate-500">{inq.service}</td>
                    <td className="py-3 text-slate-400">{inq.date}</td>
                    <td className="py-3 text-right">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          inq.status === 'New'
                            ? 'bg-indigo-50 text-indigo-600'
                            : inq.status === 'In Progress'
                            ? 'bg-amber-50 text-amber-600'
                            : 'bg-emerald-50 text-emerald-600'
                        }`}
                      >
                        {inq.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Job Applications Card */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-2xs p-5 sm:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-slate-900">Recent Job Applications</h2>
            </div>
            <Link
              to="/admin/job-applications"
              className="text-xs font-bold text-indigo-600 hover:text-indigo-700"
            >
              View All
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-semibold">
                  <th className="pb-3 font-semibold">Name</th>
                  <th className="pb-3 font-semibold">Position</th>
                  <th className="pb-3 font-semibold">Date</th>
                  <th className="pb-3 font-semibold text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {initialJobApplications.slice(0, 5).map((job) => (
                  <tr key={job.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 font-medium text-slate-800">{job.name}</td>
                    <td className="py-3 text-slate-500">{job.position}</td>
                    <td className="py-3 text-slate-400">{job.date}</td>
                    <td className="py-3 text-right">
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold ${
                          job.status === 'New'
                            ? 'bg-indigo-50 text-indigo-600'
                            : job.status === 'Shortlisted'
                            ? 'bg-emerald-50 text-emerald-600'
                            : job.status === 'Under Review' || job.status === 'In Review'
                            ? 'bg-amber-50 text-amber-600'
                            : 'bg-rose-50 text-rose-600'
                        }`}
                      >
                        {job.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 3 Bottom Widgets: Quick Actions, My Notes & Tasks, System Information */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Widget 1: Quick Actions */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-2xs p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <Zap className="w-4 h-4 text-indigo-600" />
            <h2 className="text-base font-bold text-slate-900">Quick Actions</h2>
          </div>

          <div className="grid grid-cols-4 gap-2.5">
            {quickActions.map((qa) => {
              const Icon = qa.icon
              return (
                <button
                  key={qa.label}
                  onClick={qa.action}
                  className="flex flex-col items-center justify-center p-3 rounded-xl border border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/40 text-slate-700 hover:text-indigo-600 transition-all text-center group cursor-pointer"
                >
                  <Icon className="w-5 h-5 mb-1.5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
                  <span className="text-[10px] font-semibold leading-tight">{qa.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Widget 2: My Notes & Tasks */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-2xs p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-indigo-600" />
                <h2 className="text-base font-bold text-slate-900">My Notes & Tasks</h2>
              </div>
              <Link to="/admin/tasks" className="text-xs font-bold text-indigo-600 hover:text-indigo-700">
                View All
              </Link>
            </div>

            {/* Sub-tabs: Notes / Tasks */}
            <div className="flex items-center gap-4 border-b border-slate-100 pb-2 mb-3">
              <button
                onClick={() => setActiveTab('notes')}
                className={`text-xs font-bold pb-1 transition-all ${
                  activeTab === 'notes'
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Notes
              </button>
              <button
                onClick={() => setActiveTab('tasks')}
                className={`text-xs font-bold pb-1 transition-all ${
                  activeTab === 'tasks'
                    ? 'text-indigo-600 border-b-2 border-indigo-600'
                    : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                Tasks
              </button>
            </div>

            {/* Checklist */}
            <div className="space-y-2.5">
              {activeTab === 'notes' ? (
                notes.slice(0, 4).map((note) => (
                  <div
                    key={note.id}
                    className="flex items-start justify-between gap-2 p-1.5 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <label className="flex items-start gap-2.5 cursor-pointer flex-1">
                      <input
                        type="checkbox"
                        checked={note.completed}
                        onChange={() => toggleNote(note.id)}
                        className="mt-0.5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span
                        className={`text-xs ${
                          note.completed ? 'line-through text-slate-400' : 'text-slate-700'
                        }`}
                      >
                        {note.text}
                      </span>
                    </label>
                    <span className="text-[10px] text-slate-400 whitespace-nowrap">{note.date}</span>
                  </div>
                ))
              ) : (
                initialTasks.slice(0, 4).map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between p-1.5 rounded-lg hover:bg-slate-50"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          task.priority === 'High'
                            ? 'bg-rose-500'
                            : task.priority === 'Medium'
                            ? 'bg-amber-500'
                            : 'bg-emerald-500'
                        }`}
                      />
                      <span className="text-xs text-slate-700">{task.title}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">{task.date}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          <button
            onClick={() => setShowAddNoteModal(true)}
            className="w-full mt-4 py-2 rounded-xl border border-indigo-100 bg-indigo-50/50 hover:bg-indigo-50 text-indigo-600 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
          >
            <Plus className="w-3.5 h-3.5" /> Add Note
          </button>
        </div>

        {/* Widget 3: System Information */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-2xs p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5" />
            </div>
            <h2 className="text-base font-bold text-slate-900">System Information</h2>
          </div>

          <div className="space-y-3 divide-y divide-slate-50 text-xs">
            <div className="flex items-center justify-between pt-1">
              <span className="flex items-center gap-2 text-slate-500">
                <Briefcase className="w-3.5 h-3.5 text-slate-400" /> Total Services
              </span>
              <span className="font-bold text-slate-800">12</span>
            </div>
            <div className="flex items-center justify-between pt-2.5">
              <span className="flex items-center gap-2 text-slate-500">
                <Folder className="w-3.5 h-3.5 text-slate-400" /> Total Projects
              </span>
              <span className="font-bold text-slate-800">8</span>
            </div>
            <div className="flex items-center justify-between pt-2.5">
              <span className="flex items-center gap-2 text-slate-500">
                <FileText className="w-3.5 h-3.5 text-slate-400" /> Active Job Openings
              </span>
              <span className="font-bold text-slate-800">6</span>
            </div>
            <div className="flex items-center justify-between pt-2.5">
              <span className="flex items-center gap-2 text-slate-500">
                <Users className="w-3.5 h-3.5 text-slate-400" /> Total Users
              </span>
              <span className="font-bold text-slate-800">53</span>
            </div>
            <div className="flex items-center justify-between pt-2.5">
              <span className="flex items-center gap-2 text-slate-500">
                <MessageSquare className="w-3.5 h-3.5 text-slate-400" /> Pending Inquiries
              </span>
              <span className="font-bold text-amber-600">12</span>
            </div>
            <div className="flex items-center justify-between pt-2.5">
              <span className="flex items-center gap-2 text-slate-500">
                <Clock className="w-3.5 h-3.5 text-slate-400" /> Unread Messages
              </span>
              <span className="font-bold text-indigo-600">3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Add Note Modal */}
      {showAddNoteModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl animate-in fade-in zoom-in duration-150">
            <h3 className="text-base font-bold text-slate-900 mb-2">Add New Note</h3>
            <form onSubmit={handleAddNote}>
              <textarea
                value={newNoteText}
                onChange={(e) => setNewNoteText(e.target.value)}
                placeholder="Write your note or reminder..."
                rows={3}
                className="w-full p-3 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
                autoFocus
              />
              <div className="flex items-center justify-end gap-2 mt-4">
                <button
                  type="button"
                  onClick={() => setShowAddNoteModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl transition-colors shadow-sm"
                >
                  Save Note
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
