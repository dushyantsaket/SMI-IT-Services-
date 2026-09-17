import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {
  ShieldCheck,
  User,
  Lock,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'

export default function LoginPage() {
  const [role, setRole] = useState('admin') // 'admin' | 'customer'
  const [email, setEmail] = useState('admin@simplemarketingideas.com')
  const [password, setPassword] = useState('admin123')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleRoleToggle = (selectedRole) => {
    setRole(selectedRole)
    if (selectedRole === 'admin') {
      setEmail('admin@simplemarketingideas.com')
      setPassword('admin123')
    } else {
      setEmail('client@clientcorp.com')
      setPassword('client123')
    }
    setError('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    setTimeout(() => {
      setIsLoading(false)
      if (role === 'admin') {
        localStorage.setItem('smi_auth_role', 'admin')
        localStorage.setItem(
          'smi_auth_user',
          JSON.stringify({
            name: 'Priya Pathak',
            role: 'Admin',
            email,
          })
        )
        navigate('/admin/dashboard')
      } else {
        localStorage.setItem('smi_auth_role', 'customer')
        localStorage.setItem(
          'smi_auth_user',
          JSON.stringify({
            name: 'Valued Client',
            role: 'Customer',
            email,
          })
        )
        navigate('/admin/projects')
      }
    }, 600)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        {/* SMI Circular Logo */}
        <Link to="/" className="inline-flex items-center gap-3 group mb-4">
          <div className="w-12 h-12 rounded-full border-2 border-slate-900 flex items-center justify-center font-black text-slate-900 text-base tracking-tighter bg-white shadow-sm group-hover:scale-105 transition-transform">
            SMI
          </div>
          <div className="text-left leading-tight">
            <div className="font-black text-xs tracking-wider text-slate-900 uppercase">
              SIMPLE MARKETING
            </div>
            <div className="font-black text-xs tracking-wider text-slate-900 uppercase">
              IDEAS
            </div>
          </div>
        </Link>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
          Welcome to SMI Portal
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Sign in to access your dashboard, projects, inquiries, and team tasks
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-white py-8 px-6 sm:px-10 rounded-3xl shadow-xl border border-slate-100">
          {/* Role selector tabs */}
          <div className="flex rounded-2xl bg-slate-100 p-1.5 mb-6">
            <button
              type="button"
              onClick={() => handleRoleToggle('admin')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all ${
                role === 'admin'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-4 h-4" /> Admin Portal
            </button>
            <button
              type="button"
              onClick={() => handleRoleToggle('customer')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all ${
                role === 'customer'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <User className="w-4 h-4" /> Customer Login
            </button>
          </div>

          {/* Quick Demo Credentials Banner */}
          <div className="mb-6 p-3.5 bg-indigo-50/70 border border-indigo-100 rounded-2xl flex items-start gap-2.5 text-xs text-indigo-900">
            <Sparkles className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Demo Login Active:</span> Click sign in below to instantly enter the{' '}
              <span className="font-semibold underline">
                {role === 'admin' ? 'Admin Management Dashboard' : 'Client Project Portal'}
              </span>
              .
            </div>
          </div>

          {error && (
            <div className="mb-4 p-3 bg-rose-50 border border-rose-100 rounded-xl text-xs text-rose-600 font-semibold">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-slate-700 mb-1">Email Address</label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="font-semibold text-slate-700">Password</label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Demo mode: please use password "admin123" or "client123"') }} className="text-[11px] text-indigo-600 hover:text-indigo-700 font-bold">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-500/20 transition-all"
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1 text-slate-400 hover:text-slate-600 absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between py-1">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span className="text-slate-600 text-xs">Remember this device</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-[0.99] text-white font-bold text-xs sm:text-sm shadow-lg shadow-indigo-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
            >
              {isLoading ? (
                <span>Signing in...</span>
              ) : (
                <>
                  <span>Sign In as {role === 'admin' ? 'Admin' : 'Customer'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-slate-100 text-center">
            <Link
              to="/"
              className="text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors"
            >
              ← Back to Main Website
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
