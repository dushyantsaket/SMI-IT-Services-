import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft, CheckCircle2, Star, ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'
import CTASection from '../components/CTASection'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  // 404 for unknown slugs
  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center py-20">
        <div className="text-6xl mb-6">🔍</div>
        <h1 className="text-3xl font-bold text-navy-950 mb-4">Project Not Found</h1>
        <p className="text-gray-500 mb-8">The project you're looking for doesn't exist or has been moved.</p>
        <div className="flex gap-4">
          <Link to="/our-work" className="btn-primary">
            <ArrowLeft size={16} /> Back to Our Work
          </Link>
          <Link to="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    )
  }

  // Other related projects
  const relatedProjects = projects
    .filter((p) => p.category === project.category && p.id !== project.id)
    .slice(0, 3)

  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className="pt-10 pb-16 bg-hero-gradient">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-accent-purple transition-colors">Home</Link>
            <span>/</span>
            <Link to="/our-work" className="hover:text-accent-purple transition-colors">Our Work</Link>
            <span>/</span>
            <span className="text-accent-purple font-medium">{project.title}</span>
          </nav>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — Details */}
            <div>
              <div className="inline-block bg-accent-purple/10 text-accent-purple text-sm font-semibold px-3 py-1 rounded-full mb-4">
                {project.categoryLabel}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy-950 leading-tight mb-4">
                {project.title}
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {project.description}
              </p>

              {/* Technology tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-primary-50 text-accent-purple text-sm font-medium rounded-full border border-primary-100">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.liveUrl ? (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    View Live Project <ExternalLink size={16} />
                  </a>
                ) : (
                  <Link to="/contact" className="btn-primary">
                    Start Your Project <ArrowRight size={16} />
                  </Link>
                )}
                <Link to="/our-work" className="btn-secondary">
                  <ArrowLeft size={16} /> All Projects
                </Link>
              </div>
            </div>

            {/* Right — Project image */}
            <div className="rounded-3xl overflow-hidden aspect-video shadow-card-hover">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY DETAILS ─────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 flex flex-col gap-10">
              {/* Challenge */}
              <div>
                <h2 className="text-2xl font-bold text-navy-950 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500 text-lg">⚡</span>
                  The Challenge
                </h2>
                <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl font-bold text-navy-950 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 text-lg">💡</span>
                  Our Solution
                </h2>
                <p className="text-gray-600 leading-relaxed">{project.solution}</p>
              </div>

              {/* Result */}
              <div className="bg-gradient-to-br from-primary-50 to-indigo-50 rounded-2xl p-6 border border-primary-100">
                <h2 className="text-2xl font-bold text-navy-950 mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-green-50 flex items-center justify-center text-green-500 text-lg">📈</span>
                  The Result
                </h2>
                <p className="text-gray-700 leading-relaxed">{project.result}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="flex flex-col gap-6">
              {/* Features */}
              <div className="card p-6">
                <h3 className="font-bold text-navy-950 mb-4">Key Features</h3>
                <ul className="flex flex-col gap-3">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5 text-sm text-gray-600">
                      <CheckCircle2 size={16} className="text-accent-purple flex-shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="card p-6">
                <h3 className="font-bold text-navy-950 mb-4">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary-50 text-accent-purple text-xs font-medium rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA card */}
              <div className="bg-accent-purple rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">Want a Similar Solution?</h3>
                <p className="text-purple-200 text-sm mb-4">Let's discuss your project and build something amazing together.</p>
                <Link to="/contact" className="btn-outline w-full justify-center text-sm">
                  Get in Touch <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── RELATED PROJECTS ────────────────────────────────────────── */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container-custom">
            <h2 className="text-2xl font-bold text-navy-950 mb-8">Related Projects</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProjects.map((p) => (
                <Link key={p.id} to={`/our-work/${p.slug}`} className="portfolio-card block group">
                  <div className="aspect-video overflow-hidden">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-accent-purple font-semibold">{p.categoryLabel}</span>
                    <h3 className="font-bold text-navy-950 mt-1 mb-2">{p.title}</h3>
                    <span className="text-accent-purple text-sm font-semibold flex items-center gap-1">
                      View Case Study <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <CTASection
        label="START YOUR PROJECT"
        title="Ready to Build Your Success Story?"
        titleHighlight="Success Story"
        description="Let's create something amazing together. Tell us about your project."
        primaryBtn={{ text: 'Start Your Project', href: '/contact' }}
        secondaryBtn={{ text: 'View All Projects', href: '/our-work', external: false }}
        variant="dark"
      />
    </>
  )
}
