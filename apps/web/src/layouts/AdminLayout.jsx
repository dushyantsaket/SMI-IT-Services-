import { useState } from 'react'
import { Link, NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import {
  LayoutDashboard,
  MessageSquare,
  Briefcase,
  Folder,
  FileText,
  Users,
  Newspaper,
  UserCheck,
  BarChart2,
  CheckSquare,
  Settings,
  Headphones,
  Search,
  Bell,
  Menu,
  X,
  ChevronDown,
  LogOut,
  ExternalLink,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react'
import { adminProfile } from '../data/adminData'

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Inquiries', path: '/admin/inquiries', icon: MessageSquare, badge: 28 },
    { label: 'Services', path: '/admin/services', icon: Briefcase, badge: 12 },
    { label: 'Projects', path: '/admin/projects', icon: Folder, badge: 8 },
    { label: 'Job Openings', path: '/admin/job-openings', icon: FileText, badge: 6 },
    { label: 'Job Applications', path: '/admin/job-applications', icon: Users, badge: 18 },
    { label: 'News & Updates', path: '/admin/news', icon: Newspaper, badge: 4 },
    { label: 'Users', path: '/admin/users', icon: UserCheck, badge: 53 },
    { label: 'Reports', path: '/admin/reports', icon: BarChart2 },
    { label: 'Tasks & Notes', path: '/admin/tasks', icon: CheckSquare },
    { label: 'Settings', path: '/admin/settings', icon: Settings },
  ]

  const handleLogout = () => {
    localStorage.removeItem('smi_auth_role')
    localStorage.removeItem('smi_auth_user')
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex text-slate-800 font-sans antialiased">
      {/* Mobile sidebar overlay backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Left Sidebar */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-64 bg-white border-r border-slate-100 flex flex-col justify-between transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Brand header */}
          <div className="h-20 px-6 flex items-center justify-between border-b border-slate-50">
            <Link to="/admin/dashboard" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-slate-900 flex items-center justify-center font-black text-slate-900 text-sm tracking-tighter">
                SMI
              </div>
              <div className="leading-tight">
                <div className="font-extrabold text-[12px] tracking-wider text-slate-900 uppercase">
                  SIMPLE MARKETING
                </div>
                <div className="font-extrabold text-[12px] tracking-wider text-slate-900 uppercase">
                  IDEAS
                </div>
              </div>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden text-slate-400 hover:text-slate-600 p-1.5 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation links */}
          <nav className="flex-1 overflow-y-auto px-4 py-5 space-y-1.5 scrollbar-thin">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive =
                location.pathname === item.path ||
                (item.path === '/admin/dashboard' && location.pathname === '/admin')

              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group ${
                    isActive
                      ? 'bg-[#4F46E5] text-white shadow-md shadow-indigo-500/20'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`w-[18px] h-[18px] transition-colors ${
                        isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-600'
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>
                  {item.badge !== undefined && (
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              )
            })}
          </nav>

          {/* Help & Support bottom box */}
          <div className="p-4 m-3 bg-[#F4F5FF] rounded-2xl border border-indigo-50/80">
            <div className="w-9 h-9 rounded-xl bg-indigo-100/70 text-indigo-600 flex items-center justify-center mb-2.5">
              <Headphones className="w-4 h-4" />
            </div>
            <h4 className="text-xs font-bold text-slate-900 mb-0.5">Need Help?</h4>
            <p className="text-[11px] text-slate-500 leading-relaxed mb-3">
              Feel free to contact us for any support.
            </p>
            <Link
              to="/contact"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Contact Support <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content wrapper */}
      <div className="flex-1 flex flex-col lg:pl-64 min-w-0">
        {/* Top bar header */}
        <header className="sticky top-0 z-30 h-20 bg-white/95 backdrop-blur-md border-b border-slate-100 px-4 sm:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl text-slate-500 hover:bg-slate-100"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* Search Input */}
            <div className="relative max-w-md w-full hidden sm:block">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search anything..."
                className="w-full pl-10 pr-4 py-2 bg-[#F8FAFC] border border-slate-200/80 rounded-xl text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
            </div>
          </div>

          {/* Right Header items */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* View Live Website link */}
            <Link
              to="/"
              target="_blank"
              className="hidden md:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 text-slate-600 hover:text-indigo-600 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Site</span>
            </Link>

            {/* Notification bell */}
            <div className="relative">
              <button
                className="w-10 h-10 rounded-xl border border-slate-100 bg-[#F8FAFC] hover:bg-slate-100 text-slate-600 flex items-center justify-center transition-colors relative"
                aria-label="Notifications"
              >
                <Bell className="w-4 h-4" />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-sm">
                  {adminProfile.unreadNotifications}
                </span>
              </button>
            </div>

            {/* Admin profile button & dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-3 p-1.5 pr-2 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all"
              >
                <img
                  src={adminProfile.avatar}
                  alt={adminProfile.name}
                  className="w-9 h-9 rounded-full object-cover border border-indigo-100 ring-2 ring-indigo-50"
                  onError={(e) => {
                    e.target.onerror = null
                    e.target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'
                  }}
                />
                <div className="text-left hidden sm:block">
                  <div className="text-xs font-bold text-slate-900 leading-tight">
                    {adminProfile.name}
                  </div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                    {adminProfile.role}
                  </div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden sm:block" />
              </button>

              {/* Dropdown Menu */}
              {profileDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                  onClick={() => setProfileDropdownOpen(false)}
                >
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs font-bold text-slate-900">{adminProfile.name}</p>
                    <p className="text-[11px] text-slate-400 truncate">{adminProfile.email}</p>
                  </div>
                  <Link
                    to="/admin/settings"
                    className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  >
                    <Settings className="w-4 h-4 text-slate-400" />
                    Account Settings
                  </Link>
                  <Link
                    to="/"
                    target="_blank"
                    className="flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  >
                    <ExternalLink className="w-4 h-4 text-slate-400" />
                    View Landing Page
                  </Link>
                  <div className="border-t border-slate-100 mt-1 pt-1">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-4 sm:p-8">
          <Outlet />
        </main>

        {/* Bottom Footer */}
        <footer className="px-8 py-5 border-t border-slate-100 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 bg-white">
          <div>© 2026 SIMPLE MARKETING IDEAS. All Rights Reserved.</div>
          <div className="flex items-center gap-1 text-slate-500 font-medium">
            Built with <span className="text-indigo-500">💜</span> by SIMPLE MARKETING IDEAS
          </div>
        </footer>
      </div>
    </div>
  )
}
