import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Settings, Shield, Bell, Lock, Globe, Save } from 'lucide-react'
import { adminProfile } from '../../data/adminData'

export default function AdminSettingsPage() {
  const [profile, setProfile] = useState({
    name: adminProfile.name,
    email: adminProfile.email,
    phone: '+91 98765 43210',
    company: 'Simple Marketing Ideas',
    notifications: true,
    emailAlerts: true,
  })
  const [saved, setSaved] = useState(false)

  const handleSave = (e) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div>
        <div className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-1">
          <Link to="/admin" className="hover:text-indigo-600 transition-colors">
            Dashboard
          </Link>
          <span>&gt;</span>
          <span className="text-slate-700">Settings</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Portal Settings</h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Configure admin credentials, notifications preferences, and company details.
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-slate-100 shadow-2xs p-6 sm:p-8">
        <form onSubmit={handleSave} className="space-y-6 text-xs sm:text-sm">
          <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
            <img
              src={adminProfile.avatar}
              alt={adminProfile.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-indigo-100 ring-4 ring-indigo-50"
            />
            <div>
              <h3 className="font-bold text-base text-slate-900">{profile.name}</h3>
              <p className="text-xs text-slate-400">{profile.email}</p>
              <div className="mt-1 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-indigo-50 text-indigo-600 font-bold text-[10px]">
                <Shield className="w-3 h-3" /> Super Administrator
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Admin Full Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-500 focus:bg-white text-xs sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Admin Email</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-500 focus:bg-white text-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Phone Contact</label>
              <input
                type="text"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-500 focus:bg-white text-xs sm:text-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">Agency Organization</label>
              <input
                type="text"
                value={profile.company}
                onChange={(e) => setProfile({ ...profile, company: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:border-indigo-500 focus:bg-white text-xs sm:text-sm"
              />
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-400">Notifications</h4>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={profile.notifications}
                onChange={(e) => setProfile({ ...profile, notifications: e.target.checked })}
                className="rounded border-slate-300 text-indigo-600"
              />
              <span className="text-xs text-slate-700 font-medium">
                Email alerts on incoming customer contact queries
              </span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={profile.emailAlerts}
                onChange={(e) => setProfile({ ...profile, emailAlerts: e.target.checked })}
                className="rounded border-slate-300 text-indigo-600"
              />
              <span className="text-xs text-slate-700 font-medium">
                Instant notification on new candidate job applications
              </span>
            </label>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            {saved ? (
              <span className="text-xs font-bold text-emerald-600 animate-in fade-in">
                ✓ Settings updated successfully!
              </span>
            ) : <span />}

            <button
              type="submit"
              className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md shadow-indigo-500/20 flex items-center gap-2 cursor-pointer"
            >
              <Save className="w-4 h-4" /> Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
