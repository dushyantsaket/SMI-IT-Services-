import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  UserCheck,
  Plus,
  Search,
  Mail,
  Phone,
  Shield,
  Trash2,
  CheckCircle,
  X,
} from 'lucide-react'

export default function AdminUsersPage() {
  const [users, setUsers] = useState([
    { id: 1, name: 'Priya Pathak', email: 'priya@simplemarketingideas.com', role: 'Super Admin', status: 'Active', department: 'Management' },
    { id: 2, name: 'Dushyant Saket', email: 'dushyant@simplemarketingideas.com', role: 'Founder & Tech Lead', status: 'Active', department: 'Technology' },
    { id: 3, name: 'Amit Sharma', email: 'amit.s@simplemarketingideas.com', role: 'Project Manager', status: 'Active', department: 'Operations' },
    { id: 4, name: 'Rahul Kumar', email: 'rahul.k@simplemarketingideas.com', role: 'Lead Developer', status: 'Active', department: 'Technology' },
    { id: 5, name: 'Deepak Kumar', email: 'deepak.k@simplemarketingideas.com', role: 'Senior Designer', status: 'Active', department: 'Design' },
    { id: 6, name: 'Neha Singh', email: 'neha.s@simplemarketingideas.com', role: 'Marketing Strategist', status: 'Active', department: 'Marketing' },
  ])
  const [showAddModal, setShowAddModal] = useState(false)
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Team Member', department: 'Technology' })

  const handleAddUser = (e) => {
    e.preventDefault()
    if (!newUser.name || !newUser.email) return
    setUsers([...users, { id: Date.now(), ...newUser, status: 'Active' }])
    setShowAddModal(false)
    setNewUser({ name: '', email: '', role: 'Team Member', department: 'Technology' })
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
            <span className="text-slate-700">Users</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Team & Users Directory</h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Manage administrative team members, assign project roles and permissions.
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-md shadow-indigo-500/20 cursor-pointer self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" /> Add Team Member
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-slate-100 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-semibold bg-slate-50/50">
                <th className="py-3.5 px-4">User</th>
                <th className="py-3.5 px-4">Email</th>
                <th className="py-3.5 px-4">Role</th>
                <th className="py-3.5 px-4">Department</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {users.map((u) => (
                <tr key={u.id} className="hover:bg-slate-50/70 transition-colors">
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 font-bold text-xs flex items-center justify-center">
                        {u.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                      <span className="font-bold text-slate-900">{u.name}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">{u.email}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-[11px]">
                      {u.role}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600">{u.department}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 font-bold text-[10px]">
                      {u.status}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => setUsers(users.filter((item) => item.id !== u.id))}
                      className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                      title="Remove User"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 backdrop-blur-xs p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl relative">
            <button
              onClick={() => setShowAddModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-base font-bold text-slate-900 mb-4">Add Team Member</h3>
            <form onSubmit={handleAddUser} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-600 font-semibold mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-indigo-500"
                  placeholder="e.g. Dushyant Saket"
                />
              </div>
              <div>
                <label className="block text-slate-600 font-semibold mb-1">Email Address *</label>
                <input
                  type="email"
                  required
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-indigo-500"
                  placeholder="name@simplemarketingideas.com"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Role</label>
                  <input
                    type="text"
                    value={newUser.role}
                    onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-indigo-500"
                    placeholder="e.g. Lead Designer"
                  />
                </div>
                <div>
                  <label className="block text-slate-600 font-semibold mb-1">Department</label>
                  <select
                    value={newUser.department}
                    onChange={(e) => setNewUser({ ...newUser, department: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded-xl focus:border-indigo-500"
                  >
                    <option value="Technology">Technology</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Design">Design</option>
                    <option value="Operations">Operations</option>
                  </select>
                </div>
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
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
