import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, Clock, Phone, MapPin, ArrowRight, ChevronDown, User, ShieldCheck } from 'lucide-react'
import { navigation, company } from '../data/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const navigate = useNavigate()
  const mobileMenuRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [navigate])

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-100 hidden md:block">
        <div className="container-custom py-2">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-1.5">
                <Clock size={13} className="text-accent-purple" />
                {company.workingHours}
              </span>
            </div>
            <div className="flex items-center gap-6">
              <a href={company.phoneHref} className="flex items-center gap-1.5 hover:text-accent-purple transition-colors">
                <Phone size={13} className="text-accent-purple" />
                {company.phone}
              </a>
              <span className="flex items-center gap-1.5">
                <MapPin size={13} className="text-accent-purple" />
                Indore, MP
              </span>
              <Link to="/login" className="flex items-center gap-1 font-semibold text-accent-purple hover:text-accent-violet transition-colors">
                <ShieldCheck size={14} /> Admin / Client Portal
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`bg-white transition-all duration-300 ${scrolled ? 'shadow-md border-b border-gray-100' : 'border-b border-gray-50'}`}>
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-[68px]">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 flex-shrink-0" onClick={() => setIsOpen(false)}>
              <div className="w-10 h-10 bg-gradient-to-br from-accent-purple to-accent-blue rounded-lg flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                SMI
              </div>
              <div className="hidden sm:block">
                <div className="font-bold text-navy-950 text-sm leading-tight">SIMPLE MARKETING</div>
                <div className="font-bold text-navy-950 text-sm leading-tight">IDEAS</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 relative group ${
                      isActive
                        ? 'text-accent-purple'
                        : 'text-gray-700 hover:text-accent-purple hover:bg-primary-50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent-purple rounded-full" />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-2.5">
              <Link
                to="/login"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-gray-200 text-gray-700 hover:border-accent-purple hover:text-accent-purple text-xs font-semibold transition-all"
              >
                <ShieldCheck size={14} className="text-accent-purple" />
                <span>Portal Login</span>
              </Link>
              <Link
                to="/contact"
                className="btn-primary text-sm px-5 py-2.5"
              >
                Let's Connect <ArrowRight size={15} />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={`lg:hidden fixed inset-0 top-[calc(68px+37px)] bg-white z-40 transition-transform duration-300 overflow-y-auto ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="container-custom py-6 flex flex-col gap-2">
            {/* Mobile top bar info */}
            <div className="flex flex-col gap-2 p-4 bg-gray-50 rounded-xl mb-4 text-sm text-gray-600">
              <a href={company.phoneHref} className="flex items-center gap-2 hover:text-accent-purple">
                <Phone size={14} className="text-accent-purple" />
                {company.phone}
              </a>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-accent-purple" />
                {company.workingHours}
              </div>
            </div>

            {navigation.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                end={item.href === '/'}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-xl font-medium text-base transition-colors ${
                    isActive
                      ? 'bg-primary-50 text-accent-purple'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-accent-purple'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2.5">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-gray-200 font-semibold text-gray-700 hover:text-accent-purple text-sm"
              >
                <ShieldCheck size={16} className="text-accent-purple" /> Portal Login (Admin & Client)
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full justify-center text-base"
              >
                Let's Connect <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu overlay backdrop */}
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 top-[calc(68px+37px)] bg-black/20 z-30"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
    </header>
  )
}
