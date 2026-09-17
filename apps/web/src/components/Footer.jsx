import { Link } from 'react-router-dom'
import { Phone, MapPin, Mail, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react'
import { company } from '../data/navigation'

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Our Work', href: '/our-work' },
    { label: 'Contact Us', href: '/contact' },
  ],
  services: [
    { label: 'Marketing Services', href: '/marketing-services' },
    { label: 'Software Solutions', href: '/software-services' },
    { label: 'Web Development', href: '/software-services#web-development' },
    { label: 'Digital Marketing', href: '/marketing-services#seo' },
    { label: 'SEO Services', href: '/marketing-services#seo' },
  ],
  resources: [
    { label: 'Our Projects', href: '/our-work' },
    { label: 'Technologies', href: '/software-services#technologies' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
  ],
}

const socialLinks = [
  { icon: Facebook, href: company.social.facebook, label: 'Facebook', color: 'hover:bg-blue-600' },
  { icon: Instagram, href: company.social.instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
  { icon: Linkedin, href: company.social.linkedin, label: 'LinkedIn', color: 'hover:bg-blue-700' },
  { icon: Youtube, href: company.social.youtube, label: 'YouTube', color: 'hover:bg-red-600' },
]

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white">
      {/* Main footer content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-purple to-accent-blue rounded-lg flex items-center justify-center text-white font-black text-sm flex-shrink-0">
                SMI
              </div>
              <div>
                <div className="font-bold text-white text-sm leading-tight">SIMPLE MARKETING</div>
                <div className="font-bold text-white text-sm leading-tight">IDEAS</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Unlock the full potential of your business with SIMPLE MARKETING IDEAS. We deliver creative, cost-effective marketing solutions designed to get you noticed and grow your customer base.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-accent-purple mt-0.5 flex-shrink-0" />
                <span>{company.address.line1}, {company.address.line2}, {company.address.state}</span>
              </div>
              <a href={company.phoneHref} className="flex items-center gap-2.5 hover:text-accent-purple transition-colors">
                <Phone size={15} className="text-accent-purple flex-shrink-0" />
                {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 hover:text-accent-purple transition-colors">
                <Mail size={15} className="text-accent-purple flex-shrink-0" />
                {company.email}
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white transition-all duration-300 ${color}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-accent-purple transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Products & Services</h3>
            <ul className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-accent-purple transition-colors text-sm flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -ml-3 group-hover:ml-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Follow Us</h3>
            <div className="flex flex-col gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-gray-400 hover:text-accent-purple transition-colors text-sm"
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-500">
          <span>© 2026 SIMPLE MARKETING IDEAS. All rights reserved.</span>
          <span className="flex items-center gap-1">
            Made with <span className="text-red-400">♥</span> by SIMPLE MARKETING IDEAS
          </span>
        </div>
      </div>
    </footer>
  )
}
