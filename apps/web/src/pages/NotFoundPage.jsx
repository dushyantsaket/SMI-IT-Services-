import { Link } from 'react-router-dom'
import { ArrowLeft, Home } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 bg-hero-gradient text-center px-4">
      {/* 404 visual */}
      <div className="relative mb-8">
        <div className="text-[10rem] font-black text-primary-100 leading-none select-none">
          404
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl">🔍</span>
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold text-navy-950 mb-4">
        Page Not Found
      </h1>
      <p className="text-gray-500 text-lg max-w-md mb-8 leading-relaxed">
        Oops! The page you're looking for doesn't exist. It may have been moved, deleted or the URL might be incorrect.
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link to="/" className="btn-primary">
          <Home size={16} />
          Go Home
        </Link>
        <button
          onClick={() => window.history.back()}
          className="btn-secondary"
        >
          <ArrowLeft size={16} />
          Go Back
        </button>
        <Link to="/contact" className="btn-secondary">
          Contact Support
        </Link>
      </div>

      {/* Quick links */}
      <div className="mt-12">
        <p className="text-gray-400 text-sm mb-4">Or visit one of these pages:</p>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { label: 'Marketing Services', href: '/marketing-services' },
            { label: 'Software Services', href: '/software-services' },
            { label: 'Our Work', href: '/our-work' },
            { label: 'About Us', href: '/about' },
          ].map(({ label, href }) => (
            <Link
              key={href}
              to={href}
              className="px-4 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-600 hover:border-accent-purple hover:text-accent-purple transition-colors shadow-sm"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
