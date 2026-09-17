import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Megaphone, Code2,
  TrendingUp, Users, Star, Rocket, Award,
  Target, Search, Share2, Monitor, Cloud, ShoppingBag,
  Zap, Server, Cpu, Bot, BarChart3
} from 'lucide-react'
import StatsBar from '../components/StatsBar'
import CTASection from '../components/CTASection'

// Hero illustration using CSS/SVG composition
function HeroIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Main image / composition */}
      <div className="relative">
        {/* Background blob */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-indigo-100 rounded-3xl" />

        {/* Central image */}
        <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=450&fit=crop"
            alt="Digital marketing and business growth"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Purple overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-transparent" />
        </div>

        {/* Floating stat card — Leads Generated */}
        <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-card-hover p-4 min-w-[140px] animate-float">
          <div className="text-xs text-gray-500 mb-1">Leads Generated</div>
          <div className="text-2xl font-bold text-navy-950">8,650</div>
          <div className="text-xs text-green-500 font-medium flex items-center gap-1 mt-1">
            <TrendingUp size={12} /> +112%
          </div>
          {/* Mini bar chart */}
          <div className="flex items-end gap-1 mt-2 h-8">
            {[3, 5, 4, 7, 6, 8, 9].map((h, i) => (
              <div key={i} className="flex-1 rounded-sm bg-accent-purple/20" style={{ height: `${h * 4}px` }}>
                <div className="w-full h-full rounded-sm bg-accent-purple" style={{ opacity: 0.4 + i * 0.08 }} />
              </div>
            ))}
          </div>
        </div>

        {/* Floating stat card — Total Growth */}
        <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-card-hover p-4 min-w-[130px]">
          <div className="text-xs text-gray-500 mb-1">Total Growth</div>
          <div className="text-2xl font-bold text-navy-950">72%</div>
          <div className="text-xs text-gray-400">vs last month</div>
          <div className="mt-2 h-8 relative overflow-hidden">
            <svg viewBox="0 0 100 32" className="w-full h-full">
              <polyline
                points="0,28 15,22 30,24 45,16 60,18 75,10 90,8 100,4"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Floating ROI card */}
        <div className="absolute -bottom-4 left-6 bg-white rounded-2xl shadow-card-hover p-4 min-w-[140px] animate-float" style={{ animationDelay: '1s' }}>
          <div className="text-xs text-gray-500 mb-1">ROI Improvement</div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 relative">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="14" fill="none" stroke="#ede9fe" strokeWidth="4" />
                <circle cx="18" cy="18" r="14" fill="none" stroke="#7c3aed" strokeWidth="4"
                  strokeDasharray={`${36 * Math.PI * 0.36} ${36 * Math.PI * 0.64}`} strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-accent-purple">36%</div>
            </div>
            <div>
              <div className="text-xl font-bold text-navy-950">36%</div>
              <div className="flex items-center gap-1 text-xs text-green-500">
                <TrendingUp size={10} /> Growth
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Trusted brands section
const brands = [
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Flipkart', logo: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Flipkart_logo.svg' },
  { name: 'Meesho', logo: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Meesho_Logo.svg' },
]

// Main service cards
const homeServices = [
  {
    category: 'Marketing Services',
    icon: Megaphone,
    tagline: 'Smart strategies that get you noticed, drive engagement and bring real results.',
    items: ['Digital Marketing', 'Content Creation', 'SEO & Social Media', 'Email Marketing', 'PPC & Ads Management', 'Lead Generation'],
    href: '/marketing-services',
    btnText: 'Learn More',
    color: 'from-purple-50 to-indigo-50',
    iconColor: 'text-accent-purple',
    illustration: '🎯',
  },
  {
    category: 'Software Solutions',
    icon: Code2,
    tagline: 'Scalable, secure and innovative software solutions tailored for modern businesses.',
    items: ['Custom Software', 'AI & Automation', 'Web & App Development', 'Data & Analytics', 'Cloud & DevOps', 'Enterprise Solutions'],
    href: '/software-services',
    btnText: 'Learn More',
    color: 'from-green-50 to-teal-50',
    iconColor: 'text-green-600',
    illustration: '💻',
  },
]

// Why choose us items
const whyUs = [
  { icon: Target, title: 'Result Driven Approach', desc: 'Every strategy is backed by data and focused on measurable outcomes.' },
  { icon: BarChart3, title: 'Cost-Effective Solutions', desc: 'High-quality services at affordable prices for businesses of all sizes.' },
  { icon: Users, title: 'Creative & Experienced Team', desc: 'A passionate team with expertise in marketing and technology.' },
  { icon: Star, title: 'Dedicated Support', desc: "We're always here when you need us, providing reliable ongoing support." },
]

export default function HomePage() {
  return (
    <>
      {/* SEO */}
      <title>SIMPLE MARKETING IDEAS | Marketing & Software Solutions</title>

      {/* ── HERO SECTION ─────────────────────────────────────────── */}
      <section className="bg-hero-gradient pt-12 pb-16 overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — Content */}
            <div className="animate-fade-in">
              <div className="section-label mb-4">
                <span className="w-4 h-0.5 bg-accent-purple" />
                Marketing. Technology. Growth.
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-950 leading-[1.15] mb-6">
                Creative Marketing.<br />
                Powerful Software.<br />
                <span className="gradient-text">Measurable Growth.</span>
              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
                We help brands with result-driven marketing strategies and build intelligent software solutions that transform businesses and create long-term value.
              </p>

              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/marketing-services" className="btn-dark">
                  Explore Marketing Services <ArrowRight size={16} />
                </Link>
                <Link to="/software-services" className="btn-primary">
                  Explore Software Solutions <ArrowRight size={16} />
                </Link>
              </div>

              {/* Trust bar */}
              <div>
                <p className="text-gray-400 text-sm mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-gray-300" />
                  Trusted by leading brands
                </p>
                <div className="flex items-center gap-6 flex-wrap">
                  {brands.map((brand) => (
                    <div key={brand.name} className="h-7 opacity-60 hover:opacity-100 transition-opacity">
                      {brand.logo ? (
                        <img src={brand.logo} alt={brand.name} className="h-full w-auto object-contain" />
                      ) : (
                        <span className="font-bold text-navy-950 text-sm">{brand.name}</span>
                      )}
                    </div>
                  ))}
                  <div className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded opacity-60 hover:opacity-100 transition-opacity">
                    B2BE
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Illustration */}
            <div className="animate-slide-in-right hidden lg:block">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICE CARDS SECTION ────────────────────────────────── */}
      <section className="py-6 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-6">
            {homeServices.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.category} className={`bg-gradient-to-br ${service.color} rounded-2xl border border-gray-100 p-8 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1`}>
                  <div className="flex items-start gap-5 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <Icon size={26} className={service.iconColor} />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-navy-950">
                        {service.category.split(' ')[0]}{' '}
                        <span className="gradient-text">{service.category.split(' ').slice(1).join(' ')}</span>
                      </h2>
                      <p className="text-gray-600 text-sm mt-1">{service.tagline}</p>
                    </div>
                  </div>

                  {/* Items grid */}
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle2 size={14} className="text-accent-purple flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <Link to={service.href} className="btn-primary inline-flex text-sm">
                    {service.btnText} <ArrowRight size={14} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────── */}
      <StatsBar variant="dark" />

      {/* ── WHY CHOOSE US ──────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="section-label mb-3 justify-center">Why Choose Us</div>
            <h2 className="section-title mb-4">
              Why Choose <span className="gradient-text">SIMPLE MARKETING IDEAS?</span>
            </h2>
            <p className="section-subtitle max-w-xl mx-auto">
              We are more than just a marketing agency — we are your growth partner.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="card p-6 text-center group">
                  <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-purple/10 transition-colors">
                    <Icon size={28} className="text-accent-purple" />
                  </div>
                  <h3 className="font-bold text-navy-950 mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TRUSTED CLIENTS ────────────────────────────────────────── */}
      <section className="py-14 bg-gray-50 border-y border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
            <div>
              <div className="section-label mb-2">Trusted By Businesses Like Yours</div>
              <h2 className="text-2xl font-bold text-navy-950">Our Clients</h2>
              <p className="text-gray-500 text-sm mt-1">We're proud to work with amazing businesses across different industries.</p>
            </div>
            <Link to="/our-work" className="btn-secondary whitespace-nowrap text-sm">
              View Our Work <ArrowRight size={14} />
            </Link>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-8 md:gap-12">
            {brands.map((brand) => (
              <div key={brand.name} className="h-10 opacity-50 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0">
                <img src={brand.logo} alt={brand.name} className="h-full w-auto object-contain" />
              </div>
            ))}
            <div className="bg-blue-600 text-white text-sm font-bold px-3 py-2 rounded opacity-50 hover:opacity-100 transition-opacity">
              B2BE
            </div>
            <span className="text-gray-400 text-sm font-medium">And Many More...</span>
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ────────────────────────────────────────────── */}
      <CTASection
        label="READY TO GROW YOUR BUSINESS?"
        title="Let's Grow Your Business Together"
        titleHighlight="Business"
        description="Have a project in mind? We'd love to hear about it and explore how we can help you achieve your goals."
        primaryBtn={{ text: 'Get a Free Consultation', href: '/contact' }}
        secondaryBtn={{ text: 'Contact Us', href: '/contact', external: false }}
        variant="gradient"
      />
    </>
  )
}
