import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Folder,
  PlayCircle,
  CheckCircle2,
  Clock,
  Plus,
  Search,
  Download,
  Eye,
  Edit2,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  X,
  Calendar,
} from 'lucide-react'
import { initialProjects } from '../../data/adminData'

export default function AdminProjectsPage() {
  const [projects, setProjects] = useState(initialProjects)
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('All Status')
  const [serviceFilter, setServiceFilter] = useState('All Services')
  const [showAddModal, setShowAddModal] = useState(false)
  const [editingProject, setEditingProject] = useState(null)
  const [newProject, setNewProject] = useState({
    name: '',
    subtitle: '',
    client: '',
    service: 'Website Development',
    startDate: '01 Oct 2026',
    deadline: '30 Oct 2026',
    status: 'In Progress',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&auto=format&fit=crop&q=80',
  })

  // Filter projects
  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.service.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === 'All Status' || p.status === statusFilter
    const matchesService = serviceFilter === 'All Services' || p.service === serviceFilter
    return matchesSearch && matchesStatus && matchesService
  })

  // Add project
  const handleAddProject = (e) => {
    e.preventDefault()
    if (!newProject.name || !newProject.client) return
    const created = {
      id: projects.length + 1,
      ...newProject,
      progress: 25,
    }
    setProjects([created, ...projects])
    setShowAddModal(false)
    setNewProject({
      name: '',
      subtitle: '',
      client: '',
      service: 'Website Development',
      startDate: '01 Oct 2026',
      deadline: '30 Oct 2026',
      status: 'In Progress',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&auto=format&fit=crop&q=80',
    })
  }

  // Update status directly
  const handleUpdateStatus = (id, newStatus) => {
    setProjects(projects.map((p) => (p.id === id ? { ...p, status: newStatus } : p)))
  }

  const getServiceBadgeClass = (service) => {
    switch (service) {
      case 'Website Development':
        return 'bg-sky-50 text-sky-600 border border-sky-100'
      case 'E-commerce':
        return 'bg-purple-50 text-purple-600 border border-purple-100'
      case 'Graphic Design':
        return 'bg-pink-50 text-pink-600 border border-pink-100'
      case 'Software Development':
        return 'bg-cyan-50 text-cyan-600 border border-cyan-100'
      case 'Digital Marketing':
        return 'bg-emerald-50 text-emerald-600 border border-emerald-100'
      case 'SEO & Content':
        return 'bg-rose-50 text-rose-600 border border-rose-100'
      default:
        return 'bg-slate-50 text-slate-600 border border-slate-100'
    }
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
            <span className="text-slate-700">Projects</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Projects</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage all your projects in one place. Track progress, clients, deadlines and status.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-500/20 cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> Add New Project
        </button>
      </div>

      {/* 4 Stat KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Folder className="w-6 h-6" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">{projects.length}</div>
            <div className="text-xs font-medium text-slate-400">Total Projects</div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <PlayCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">
              {projects.filter((p) => p.status === 'In Progress').length}
            </div>
            <div className="text-xs font-medium text-slate-400">In Progress</div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">
              {projects.filter((p) => p.status === 'Completed').length}
            </div>
            <div className="text-xs font-medium text-slate-400">Completed</div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <div className="text-3xl font-black text-slate-900">
              {projects.filter((p) => p.status === 'On Hold').length}
            </div>
            <div className="text-xs font-medium text-slate-400">On Hold</div>
          </div>
        </div>
      </div>

      {/* Main Filter & Table Card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-2xs overflow-hidden">
        {/* Filters Row */}
        <div className="p-5 border-b border-slate-100 flex flex-col lg:flex-row items-center justify-between gap-3">
          <div className="relative w-full lg:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects by name or client..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
            {/* Status Dropdown */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-indigo-500"
            >
              <option value="All Status">All Status</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="On Hold">On Hold</option>
            </select>

            {/* Service Dropdown */}
            <select
              value={serviceFilter}
              onChange={(e) => setServiceFilter(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none focus:border-indigo-500"
            >
              <option value="All Services">All Services</option>
              <option value="Website Development">Website Development</option>
              <option value="E-commerce">E-commerce</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Software Development">Software Development</option>
              <option value="Digital Marketing">Digital Marketing</option>
              <option value="SEO & Content">SEO & Content</option>
            </select>

            {/* Export button */}
            <button
              onClick={() => {
                const json = JSON.stringify(projects, null, 2)
                const blob = new Blob([json], { type: 'application/json' })
                const href = URL.createObjectURL(blob)
                const link = document.createElement('a')
                link.href = href
                link.download = 'projects-export.json'
                link.click()
              }}
              className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-700 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" /> Export
            </button>
          </div>
        </div>

        {/* Projects Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-semibold bg-slate-50/50">
                <th className="py-3 px-4 w-10">#</th>
                <th className="py-3 px-4 font-semibold">Project Name</th>
                <th className="py-3 px-4 font-semibold">Client</th>
                <th className="py-3 px-4 font-semibold">Service</th>
                <th className="py-3 px-4 font-semibold">Start Date</th>
                <th className="py-3 px-4 font-semibold">Deadline</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredProjects.map((p, idx) => (
                <tr key={p.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-slate-400">{idx + 1}</td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-10 h-10 rounded-xl object-cover border border-slate-100"
                        onError={(e) => {
                          e.target.onerror = null
                          e.target.src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&auto=format&fit=crop&q=80'
                        }}
                      />
                      <div>
                        <div className="font-bold text-slate-900">{p.name}</div>
                        <div className="text-[11px] text-slate-400">{p.subtitle}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 font-medium text-slate-700">{p.client}</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold ${getServiceBadgeClass(p.service)}`}>
                      {p.service}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">{p.startDate}</td>
                  <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">{p.deadline}</td>
                  <td className="py-3.5 px-4">
                    <select
                      value={p.status}
                      onChange={(e) => handleUpdateStatus(p.id, e.target.value)}
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full border-none cursor-pointer focus:ring-0 ${
                        p.status === 'In Progress'
                          ? 'bg-amber-50 text-amber-600'
                          : p.status === 'Completed'
                          ? 'bg-emerald-50 text-emerald-600'
                          : 'bg-rose-50 text-rose-600'
                      }`}
                    >
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="On Hold">On Hold</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="inline-flex items-center gap-1">
                      <button
                        onClick={() => setEditingProject(p)}
                        className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                        title="Edit Project"
                      >
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>
            Showing 1 to {filteredProjects.length} of {projects.length} projects
          </div>
          <div className="flex items-center gap-1">
            <button className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-7 h-7 rounded-lg bg-indigo-600 text-white font-bold text-xs flex items-center justify-center">
              1
            </button>
            <button className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Add Project Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-in fade-in zoom-in duration-150 relative">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Create New Project</h3>
            <form onSubmit={handleAddProject} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-600 font-semibold mb-1">Project Name *</label>
                <input
                  type="text"
                  required
                  value={newProject.name}
                  onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  placeholder="e.g. AI Powered CRM Portal"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">Subtitle / Scope</label>
                <input
                  type="text"
                  value={newProject.subtitle}
                  onChange={(e) => setNewProject({ ...newProject, subtitle: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  placeholder="e.g. SaaS dashboard + analytics"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Client Name *</label>
                  <input
                    type="text"
                    required
                    value={newProject.client}
                    onChange={(e) => setNewProject({ ...newProject, client: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    placeholder="e.g. Apex Global"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Service</label>
                  <select
                    value={newProject.service}
                    onChange={(e) => setNewProject({ ...newProject, service: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="Software Development">Software Development</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="SEO & Content">SEO & Content</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Start Date</label>
                  <input
                    type="text"
                    value={newProject.startDate}
                    onChange={(e) => setNewProject({ ...newProject, startDate: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Deadline</label>
                  <input
                    type="text"
                    value={newProject.deadline}
                    onChange={(e) => setNewProject({ ...newProject, deadline: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-500 hover:bg-slate-100 rounded-xl"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-sm"
                >
                  Create Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
