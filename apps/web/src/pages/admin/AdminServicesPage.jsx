import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Briefcase,
  Plus,
  Search,
  CheckCircle2,
  Edit2,
  Trash2,
  MoreVertical,
  X,
  Layers,
} from 'lucide-react'

export default function AdminServicesPage() {
  const [services, setServices] = useState([
    { id: 1, name: 'Website Development', category: 'Software', activeProjects: 4, status: 'Active', price: '₹45,000+' },
    { id: 2, name: 'Digital Marketing & Ads', category: 'Marketing', activeProjects: 6, status: 'Active', price: '₹25,000/mo' },
    { id: 3, name: 'Brand Identity & Logo Design', category: 'Design', activeProjects: 2, status: 'Active', price: '₹15,000+' },
    { id: 4, name: 'E-commerce Solutions', category: 'Software', activeProjects: 3, status: 'Active', price: '₹60,000+' },
    { id: 5, name: 'Custom ERP & SaaS Systems', category: 'Software', activeProjects: 2, status: 'Active', price: '₹1,20,000+' },
    { id: 6, name: 'SEO & Content Marketing', category: 'Marketing', activeProjects: 5, status: 'Active', price: '₹20,000/mo' },
    { id: 7, name: 'Social Media Management', category: 'Marketing', activeProjects: 4, status: 'Active', price: '₹18,000/mo' },
    { id: 8, name: 'Mobile App Development', category: 'Software', activeProjects: 1, status: 'Active', price: '₹85,000+' },
  ])
  const [showAddModal, setShowAddModal] = useState(false)
  const [newServiceName, setNewServiceName] = useState('')
  const [newCategory, setNewCategory] = useState('Software')
  const [newPrice, setNewPrice] = useState('')

  const handleAddService = (e) => {
    e.preventDefault()
    if (!newServiceName) return
    setServices([
      ...services,
      {
        id: Date.now(),
        name: newServiceName,
        category: newCategory,
        activeProjects: 0,
        status: 'Active',
        price: newPrice || 'Custom',
      },
    ])
    setShowAddModal(false)
    setNewServiceName('')
    setNewPrice('')
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
            <span className="text-slate-700">Services</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Services Catalog</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage your marketing and software service offerings, pricing packages, and capabilities.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-500/20 cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> Add Service
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s) => (
          <div
            key={s.id}
            className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-600">
                  {s.category}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
              </div>
              <h3 className="font-bold text-sm text-slate-900 mb-1">{s.name}</h3>
              <p className="text-xs font-bold text-indigo-600 mb-4">{s.price}</p>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-slate-50 text-xs text-slate-400">
              <span>{s.activeProjects} Active Projects</span>
              <button
                onClick={() => setServices(services.filter((item) => item.id !== s.id))}
                className="text-slate-400 hover:text-rose-600 p-1"
                title="Remove"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-base font-bold text-slate-900 mb-4">Add New Service</h3>
            <form onSubmit={handleAddService} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-600 font-semibold mb-1">Service Title *</label>
                <input
                  type="text"
                  required
                  value={newServiceName}
                  onChange={(e) => setNewServiceName(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-indigo-500"
                  placeholder="e.g. Cloud DevOps Migration"
                />
              </div>
              <div>
                <label className="block text-slate-600 font-semibold mb-1">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-indigo-500"
                >
                  <option value="Software">Software</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Design">Design</option>
                </select>
              </div>
              <div>
                <label className="block text-slate-600 font-semibold mb-1">Starting Price</label>
                <input
                  type="text"
                  value={newPrice}
                  onChange={(e) => setNewPrice(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-indigo-500"
                  placeholder="e.g. ₹50,000+"
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
                  Save Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
