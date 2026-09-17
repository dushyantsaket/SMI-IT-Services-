import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Rocket, Users, Award, CheckCircle2 } from 'lucide-react'
import { projects, projectCategories } from '../data/projects'
import { testimonials } from '../data/testimonials'
import CTASection from '../components/CTASection'

const portfolioStats = [
  { value: '150+', label: 'Projects Delivered', icon: Rocket },
  { value: '100+', label: 'Happy Clients', icon: Users },
  { value: '4.8/5', label: 'Client Rating', icon: Star },
  { value: '2+', label: 'Years of Excellence', icon: Award },
]

const heroHighlights = [
  { icon: Award, label: 'Proven Results' },
  { icon: Users, label: 'Trusted by Clients' },
  { icon: Star, label: 'Quality Work' },
  { icon: Rocket, label: 'Continuous Growth' },
]

export default function OurWorkPage() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory)

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="pt-12 pb-16 bg-hero-gradient overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-accent-purple" />
                <div className="section-label">Our Work</div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy-950 leading-tight mb-6">
                Real Work.<br />
                <span className="gradient-text">Real Results.</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                Explore websites, software products and digital experiences we've worked on. From digital marketing campaigns to custom software solutions, we help businesses grow with creative ideas and modern technology.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/contact" className="btn-primary">
                  Start Your Project <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Talk to Our Experts
                </Link>
              </div>

              {/* Highlights */}
              <div className="flex flex-wrap gap-5">
                {heroHighlights.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2 text-sm text-gray-600">
                    <Icon size={16} className="text-accent-purple" />
                    {label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — illustration */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="bg-primary-50 rounded-3xl p-6 aspect-[4/3] overflow-hidden flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=450&fit=crop"
                    alt="Our work portfolio preview"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                {/* Floating stat */}
                <div className="absolute -top-3 -right-3 bg-white rounded-2xl shadow-card-hover p-4 text-center">
                  <div className="text-3xl font-black gradient-text">150+</div>
                  <div className="text-xs text-gray-500">Projects Delivered</div>
                </div>
                {/* Floating label */}
                <div className="absolute -bottom-3 left-6 bg-accent-purple text-white rounded-2xl shadow-cta px-4 py-2 text-sm font-semibold">
                  Clients Grow 3x Faster
                </div>
                {/* Handwritten style label */}
                <div className="absolute -top-6 left-4 text-accent-purple font-bold text-sm italic">
                  Ideas into Impact ✨
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CATEGORY FILTERS ───────────────────────────────────────── */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-btn ${
                  activeCategory === cat.id ? 'filter-btn-active' : 'filter-btn-inactive'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ──────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-custom">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <div className="text-4xl mb-4">🔍</div>
              <p>No projects found in this category.</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((project) => (
                <div key={project.id} className="portfolio-card group">
                  {/* Image */}
                  <div className="aspect-video overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    {/* Category badge */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-accent-purple text-xs font-semibold px-2.5 py-1 rounded-full">
                      {project.categoryLabel}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="font-bold text-navy-950 text-lg mb-2">{project.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 bg-primary-50 text-accent-purple rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs px-2 py-1 bg-gray-100 text-gray-500 rounded-full">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    <Link
                      to={`/our-work/${project.slug}`}
                      className="text-accent-purple text-sm font-semibold flex items-center gap-1.5 hover:gap-3 transition-all"
                    >
                      View Case Study <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────── */}
      <section className="py-14 bg-navy-950">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
            {portfolioStats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.label} className="stats-card">
                  <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center mb-3">
                    <Icon size={24} className="text-accent-purple" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ──────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-px bg-accent-purple" />
                <div className="section-label">Client Testimonials</div>
              </div>
              <h2 className="section-title">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-gray-500 mt-2">Real feedback from real businesses we've worked with.</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.id} className="card p-6">
                <p className="text-gray-600 leading-relaxed mb-5 italic text-sm">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center text-white font-bold flex-shrink-0">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-navy-950">{t.name}</div>
                    <div className="text-gray-400 text-xs">{t.role}, {t.company}</div>
                  </div>
                  <div className="ml-auto">
                    <div className="flex gap-0.5">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <CTASection
        label="READY TO CREATE YOUR SUCCESS STORY?"
        title="Let's Build Something Amazing Together."
        titleHighlight="Amazing"
        description="Get in touch with us today and let's discuss your project."
        primaryBtn={{ text: 'Get Free Consultation', href: '/contact' }}
        secondaryBtn={{ text: 'Schedule a Call', href: 'tel:+918085953085', external: true }}
        variant="dark"
      />
    </>
  )
}
