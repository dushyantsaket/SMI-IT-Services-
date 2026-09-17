import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  BarChart2,
  TrendingUp,
  ArrowUpRight,
  ArrowDownRight,
  Users,
  Eye,
  DollarSign,
  Calendar,
  Download,
  CheckCircle,
} from 'lucide-react'

export default function AdminReportsPage() {
  const [timeRange, setTimeRange] = useState('Last 30 Days')

  const metrics = [
    {
      title: 'Total Revenue Generated',
      value: '₹14,80,000',
      change: '+24.5%',
      isPositive: true,
      description: 'vs previous month',
    },
    {
      title: 'Website Visitors',
      value: '48,250',
      change: '+18.2%',
      isPositive: true,
      description: 'vs previous month',
    },
    {
      title: 'Inquiry Conversion Rate',
      value: '68.4%',
      change: '+6.1%',
      isPositive: true,
      description: 'lead to project',
    },
    {
      title: 'Average Response Time',
      value: '1.8 hrs',
      change: '-12.0%',
      isPositive: true,
      description: 'faster resolution',
    },
  ]

  const servicePerformance = [
    { service: 'Website Development', inquiries: 14, revenue: '₹5,20,000', pct: 85 },
    { service: 'Digital Marketing', inquiries: 9, revenue: '₹3,40,000', pct: 65 },
    { service: 'Software Solutions', inquiries: 6, revenue: '₹4,10,000', pct: 75 },
    { service: 'E-commerce Platforms', inquiries: 5, revenue: '₹1,80,000', pct: 45 },
    { service: 'Graphic & Branding', inquiries: 4, revenue: '₹90,000', pct: 30 },
  ]

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
            <span className="text-slate-700">Reports & Analytics</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Reports & Business Analytics
          </h1>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Track performance metrics, lead conversions, client acquisition and service revenue.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3.5 py-2 bg-white border border-slate-200/80 rounded-xl text-xs font-bold text-slate-700 shadow-2xs focus:outline-none"
          >
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>This Year</option>
          </select>
          <button className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold transition-all shadow-sm">
            <Download className="w-3.5 h-3.5" /> Export PDF
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {metrics.map((m) => (
          <div key={m.title} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-2xs">
            <div className="text-xs font-medium text-slate-400">{m.title}</div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">{m.value}</div>
            <div className="flex items-center gap-1.5 mt-2">
              <span
                className={`inline-flex items-center text-xs font-bold ${
                  m.isPositive ? 'text-emerald-600' : 'text-rose-600'
                }`}
              >
                {m.isPositive ? <ArrowUpRight className="w-3.5 h-3.5" /> : <ArrowDownRight className="w-3.5 h-3.5" />}
                {m.change}
              </span>
              <span className="text-[11px] text-slate-400">{m.description}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Charts & Breakdown */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Service Performance Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-2xs p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-base font-bold text-slate-900">Service Performance & Revenue</h2>
            <span className="text-xs text-slate-400">Target vs Actual</span>
          </div>

          <div className="space-y-4">
            {servicePerformance.map((sp) => (
              <div key={sp.service} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-800">{sp.service}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-slate-400">{sp.inquiries} inquiries</span>
                    <span className="font-bold text-slate-900">{sp.revenue}</span>
                  </div>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2">
                  <div
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${sp.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lead Conversion Funnel */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-2xs p-6">
          <h2 className="text-base font-bold text-slate-900 mb-4">Lead Conversion Funnel</h2>
          <div className="space-y-3 text-xs">
            <div className="p-3 bg-indigo-50/60 rounded-xl border border-indigo-50 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Total Website Inquiries</div>
                <div className="text-[11px] text-slate-500">Contact forms + service inquiries</div>
              </div>
              <span className="text-lg font-black text-indigo-600">28</span>
            </div>

            <div className="p-3 bg-blue-50/60 rounded-xl border border-blue-50 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Qualified Leads</div>
                <div className="text-[11px] text-slate-500">Budget and scope matched</div>
              </div>
              <span className="text-lg font-black text-blue-600">21</span>
            </div>

            <div className="p-3 bg-amber-50/60 rounded-xl border border-amber-50 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Proposals Sent</div>
                <div className="text-[11px] text-slate-500">Quotes & technical specifications</div>
              </div>
              <span className="text-lg font-black text-amber-600">14</span>
            </div>

            <div className="p-3 bg-emerald-50/60 rounded-xl border border-emerald-50 flex items-center justify-between">
              <div>
                <div className="font-bold text-slate-900">Deals Won / Projects Started</div>
                <div className="text-[11px] text-slate-500">Active development contract</div>
              </div>
              <span className="text-lg font-black text-emerald-600">8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
