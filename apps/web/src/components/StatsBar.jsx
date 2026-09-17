import { Rocket, Users, Star, Award } from 'lucide-react'
import { stats } from '../data/navigation'

const iconMap = {
  rocket: Rocket,
  users: Users,
  star: Star,
  award: Award,
}

export default function StatsBar({ variant = 'dark' }) {
  const isDark = variant === 'dark'

  return (
    <section className={`py-10 ${isDark ? 'bg-navy-950' : 'bg-white border-y border-gray-100'}`}>
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
          {stats.map((stat, index) => {
            const Icon = iconMap[stat.icon] || Star
            return (
              <div key={index} className="stats-card">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 ${
                  isDark ? 'bg-white/10' : 'bg-primary-50'
                }`}>
                  <Icon size={26} className={isDark ? 'text-accent-purple' : 'text-accent-purple'} />
                </div>
                <div className={`text-3xl font-bold mb-1 ${isDark ? 'text-white' : 'text-navy-950'}`}>
                  {stat.value}
                </div>
                <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
