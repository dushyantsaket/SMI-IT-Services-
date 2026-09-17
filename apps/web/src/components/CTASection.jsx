import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

export default function CTASection({
  label = 'READY TO CREATE YOUR SUCCESS STORY?',
  title = "Let's Build Something Amazing Together.",
  titleHighlight = 'Amazing',
  description = "Get in touch with us today and let's discuss your project.",
  primaryBtn = { text: 'Get Free Consultation', href: '/contact' },
  secondaryBtn = { text: 'Schedule a Call', href: 'tel:+918085953085', external: true },
  variant = 'dark', // 'dark' | 'gradient' | 'purple'
}) {
  const bgClass = {
    dark: 'bg-navy-950',
    gradient: 'bg-gradient-to-r from-navy-950 via-indigo-950 to-navy-950',
    purple: 'bg-gradient-to-r from-accent-purple to-accent-indigo',
  }[variant] || 'bg-navy-950'

  const highlightedTitle = title.replace(
    titleHighlight,
    `<span class="text-accent-purple">${titleHighlight}</span>`
  )

  return (
    <section className={`${bgClass} py-16`}>
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left content */}
          <div className="flex-1 flex flex-col md:flex-row items-start md:items-center gap-6">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-accent-purple">
                <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                <polyline points="16 7 22 7 22 13"></polyline>
              </svg>
            </div>
            <div>
              <div className="section-label mb-2 text-purple-400 text-xs">{label}</div>
              <h2
                className="text-2xl md:text-3xl font-bold text-white leading-tight"
                dangerouslySetInnerHTML={{ __html: highlightedTitle }}
              />
              <p className="text-gray-400 mt-2 text-sm">{description}</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link to={primaryBtn.href} className="btn-primary whitespace-nowrap">
              {primaryBtn.text} <ArrowRight size={16} />
            </Link>
            {secondaryBtn.external ? (
              <a
                href={secondaryBtn.href}
                className="btn-outline whitespace-nowrap"
              >
                <Phone size={16} />
                {secondaryBtn.text}
              </a>
            ) : (
              <Link to={secondaryBtn.href} className="btn-outline whitespace-nowrap">
                {secondaryBtn.text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
