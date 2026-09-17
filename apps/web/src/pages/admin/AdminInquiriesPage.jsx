import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  MessageSquare,
  Clock,
  CheckCircle2,
  Users,
  Plus,
  Calendar,
  Search,
  Filter,
  Eye,
  RotateCcw,
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  X,
  Mail,
  Phone,
  Send,
} from 'lucide-react'
import { initialInquiries } from '../../data/adminData'

export default function AdminInquiriesPage() {
  const [inquiries, setInquiries] = useState(initialInquiries)
  const [activeCategoryTab, setActiveCategoryTab] = useState('All Inquiries')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedInquiry, setSelectedInquiry] = useState(null)
  const [showAddModal, setShowAddModal] = useState(false)
  const [newInquiry, setNewInquiry] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Website Development',
    category: 'Contact Form',
    subject: '',
    message: '',
  })

  // Category counts
  const categoryTabs = [
    { label: 'All Inquiries', count: 28 },
    { label: 'Contact Form', count: 18 },
    { label: 'Service Requests', count: 6 },
    { label: 'Job Applications', count: 5 },
    { label: 'Newsletter', count: 3 },
  ]

  // Filter inquiries
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesTab =
      activeCategoryTab === 'All Inquiries' || inq.category === activeCategoryTab
    const matchesSearch =
      inq.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.service.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  // Status changer
  const handleStatusChange = (id, newStatus) => {
    setInquiries(
      inquiries.map((inq) => (inq.id === id ? { ...inq, status: newStatus } : inq))
    )
    if (selectedInquiry && selectedInquiry.id === id) {
      setSelectedInquiry({ ...selectedInquiry, status: newStatus })
    }
  }

  // Add inquiry handler
  const handleAddInquiry = (e) => {
    e.preventDefault()
    if (!newInquiry.name || !newInquiry.email) return
    const created = {
      id: `inq-${Date.now()}`,
      name: newInquiry.name,
      avatarInitials: newInquiry.name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase(),
      email: newInquiry.email,
      phone: newInquiry.phone || '+91 98765 00000',
      subject: newInquiry.subject || 'Service Inquiry',
      service: newInquiry.service,
      category: newInquiry.category,
      date: 'Today',
      time: 'Just now',
      status: 'New',
      message: newInquiry.message || 'Customer submitted custom inquiry.',
    }
    setInquiries([created, ...inquiries])
    setShowAddModal(false)
    setNewInquiry({
      name: '',
      email: '',
      phone: '',
      service: 'Website Development',
      category: 'Contact Form',
      subject: '',
      message: '',
    })
  }

  // Category badge colors
  const getCategoryBadgeClass = (service) => {
    switch (service) {
      case 'Website Development':
        return 'bg-sky-50 text-sky-600 border border-sky-100'
      case 'Digital Marketing':
        return 'bg-purple-50 text-purple-600 border border-purple-100'
      case 'Graphic Design':
        return 'bg-pink-50 text-pink-600 border border-pink-100'
      case 'Social Media':
        return 'bg-emerald-50 text-emerald-600 border border-emerald-100'
      case 'Job Application':
        return 'bg-cyan-50 text-cyan-600 border border-cyan-100'
      case 'SEO & Content':
        return 'bg-rose-50 text-rose-600 border border-rose-100'
      case 'E-commerce':
        return 'bg-indigo-50 text-indigo-600 border border-indigo-100'
      case 'Email Marketing':
        return 'bg-teal-50 text-teal-600 border border-teal-100'
      default:
        return 'bg-slate-50 text-slate-600 border border-slate-100'
    }
  }

  return (
    <div className="space-y-6">
      {/* Breadcrumb & Top Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-1">
            <Link to="/admin" className="hover:text-indigo-600 transition-colors">
              Dashboard
            </Link>
            <span>&gt;</span>
            <span className="text-slate-700">Inquiries</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Inquiries & Contact Requests
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage all inquiries from your website, track their status and respond to customers.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="inline-flex items-center gap-2 bg-white px-3.5 py-2 rounded-xl border border-slate-200/80 text-xs font-semibold text-slate-700 shadow-2xs">
            <Calendar className="w-3.5 h-3.5 text-indigo-500" />
            <span>Sep 01, 2026 - Sep 30, 2026</span>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-500/20 cursor-pointer"
          >
            <Plus className="w-4 h-4" /> Add New
          </button>
        </div>
      </div>

      {/* 4 Stat KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              <TrendingUp className="w-3 h-3" /> +12%
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900 mt-4">28</div>
          <div className="text-xs font-medium text-slate-400 mt-0.5">Total Inquiries</div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
              → 0%
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900 mt-4">12</div>
          <div className="text-xs font-medium text-slate-400 mt-0.5">Pending</div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              <TrendingUp className="w-3 h-3" /> +27%
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900 mt-4">14</div>
          <div className="text-xs font-medium text-slate-400 mt-0.5">Resolved</div>
        </div>

        {/* Card 4 */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs">
          <div className="flex items-center justify-between">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
              <TrendingUp className="w-3 h-3" /> +67%
            </div>
          </div>
          <div className="text-3xl font-black text-slate-900 mt-4">5</div>
          <div className="text-xs font-medium text-slate-400 mt-0.5">Job Applications</div>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-2xs overflow-hidden">
        {/* Category Tabs & Search Bar */}
        <div className="p-5 border-b border-slate-100 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            {categoryTabs.map((tab) => (
              <button
                key={tab.label}
                onClick={() => setActiveCategoryTab(tab.label)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeCategoryTab === tab.label
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-500/20'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="relative w-full sm:max-w-md">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name, email or subject..."
                className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              />
            </div>

            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors">
              <Filter className="w-3.5 h-3.5 text-slate-500" /> Filter
            </button>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-semibold bg-slate-50/50">
                <th className="py-3 px-4 w-10">
                  <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                </th>
                <th className="py-3 px-4 font-semibold">Name</th>
                <th className="py-3 px-4 font-semibold">Email</th>
                <th className="py-3 px-4 font-semibold">Subject</th>
                <th className="py-3 px-4 font-semibold">Service/Category</th>
                <th className="py-3 px-4 font-semibold">Date</th>
                <th className="py-3 px-4 font-semibold">Status</th>
                <th className="py-3 px-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {filteredInquiries.map((inq) => (
                <tr key={inq.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500" />
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-indigo-100/70 text-indigo-600 font-black text-[10px] flex items-center justify-center">
                        {inq.avatarInitials}
                      </div>
                      <span className="font-bold text-slate-900 whitespace-nowrap">{inq.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">{inq.email}</td>
                  <td className="py-3.5 px-4 text-slate-700 max-w-[200px] truncate">{inq.subject}</td>
                  <td className="py-3.5 px-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap ${getCategoryBadgeClass(inq.service)}`}>
                      {inq.service}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-400 whitespace-nowrap">
                    <div>{inq.date}</div>
                    <div className="text-[10px] text-slate-300">{inq.time}</div>
                  </td>
                  <td className="py-3.5 px-4">
                    <select
                      value={inq.status}
                      onChange={(e) => handleStatusChange(inq.id, e.target.value)}
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full border-none cursor-pointer focus:ring-0 ${
                        inq.status === 'New'
                          ? 'bg-indigo-50 text-indigo-600'
                          : inq.status === 'In Progress'
                          ? 'bg-amber-50 text-amber-600'
                          : 'bg-emerald-50 text-emerald-600'
                      }`}
                    >
                      <option value="New">New</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Resolved">Resolved</option>
                    </select>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="inline-flex items-center gap-1">
                      <button
                        onClick={() => setSelectedInquiry(inq)}
                        className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                        title="View Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleStatusChange(inq.id, inq.status === 'Resolved' ? 'In Progress' : 'Resolved')}
                        className="p-1.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                        title="Toggle Resolved"
                      >
                        <RotateCcw className="w-4 h-4" />
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
            Showing 1 to {filteredInquiries.length} of 28 entries
          </div>
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
            <button className="w-7 h-7 rounded-lg text-slate-600 hover:bg-slate-50 font-bold text-xs flex items-center justify-center">
              4
            </button>
            <button className="p-1.5 rounded-lg border border-slate-200 text-slate-400 hover:bg-slate-50">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Inquiry Detail Modal */}
      {selectedInquiry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-in fade-in zoom-in duration-150 relative">
            <button
              onClick={() => setSelectedInquiry(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 font-bold text-base flex items-center justify-center">
                {selectedInquiry.avatarInitials}
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">{selectedInquiry.name}</h3>
                <p className="text-xs text-slate-400">
                  {selectedInquiry.date} at {selectedInquiry.time}
                </p>
              </div>
            </div>

            <div className="space-y-3 bg-slate-50 p-4 rounded-xl text-xs mb-4">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Status</span>
                <span
                  className={`px-2.5 py-0.5 rounded-full font-bold ${
                    selectedInquiry.status === 'New'
                      ? 'bg-indigo-100 text-indigo-700'
                      : selectedInquiry.status === 'In Progress'
                      ? 'bg-amber-100 text-amber-700'
                      : 'bg-emerald-100 text-emerald-700'
                  }`}
                >
                  {selectedInquiry.status}
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Mail className="w-3.5 h-3.5 text-slate-400" /> {selectedInquiry.email}
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <Phone className="w-3.5 h-3.5 text-slate-400" /> {selectedInquiry.phone}
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Subject</span>
                <p className="font-semibold text-slate-800">{selectedInquiry.subject}</p>
              </div>
              <div>
                <span className="text-slate-400 block mb-1">Message</span>
                <p className="text-slate-700 leading-relaxed bg-white p-3 rounded-lg border border-slate-100">
                  {selectedInquiry.message}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => handleStatusChange(selectedInquiry.id, 'Resolved')}
                className="px-4 py-2 rounded-xl text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 transition-colors"
              >
                Mark as Resolved
              </button>
              <a
                href={`mailto:${selectedInquiry.email}?subject=Re: ${selectedInquiry.subject}`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors"
              >
                <Send className="w-3.5 h-3.5" /> Reply Email
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Add New Inquiry Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl animate-in fade-in zoom-in duration-150 relative">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-lg font-bold text-slate-900 mb-4">Add New Customer Inquiry</h3>
            <form onSubmit={handleAddInquiry} className="space-y-3.5 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Customer Name *</label>
                  <input
                    type="text"
                    required
                    value={newInquiry.name}
                    onChange={(e) => setNewInquiry({ ...newInquiry, name: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    placeholder="e.g. Ramesh Patel"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={newInquiry.email}
                    onChange={(e) => setNewInquiry({ ...newInquiry, email: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    placeholder="name@gmail.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Phone Number</label>
                  <input
                    type="text"
                    value={newInquiry.phone}
                    onChange={(e) => setNewInquiry({ ...newInquiry, phone: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                    placeholder="+91 98765 00000"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Service</label>
                  <select
                    value={newInquiry.service}
                    onChange={(e) => setNewInquiry({ ...newInquiry, service: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  >
                    <option value="Website Development">Website Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Social Media">Social Media</option>
                    <option value="SEO & Content">SEO & Content</option>
                    <option value="E-commerce">E-commerce</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">Subject</label>
                <input
                  type="text"
                  value={newInquiry.subject}
                  onChange={(e) => setNewInquiry({ ...newInquiry, subject: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  placeholder="e.g. Website redesign inquiry"
                />
              </div>

              <div>
                <label className="block text-slate-600 font-semibold mb-1">Message / Requirements</label>
                <textarea
                  rows={3}
                  value={newInquiry.message}
                  onChange={(e) => setNewInquiry({ ...newInquiry, message: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                  placeholder="Describe the requirements..."
                />
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
                  Create Inquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
