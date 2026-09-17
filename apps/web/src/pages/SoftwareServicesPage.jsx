import { Link } from 'react-router-dom'
import {
  ArrowRight, CheckCircle2, Code2, Cloud, Monitor, ShoppingBag,
  Server, Database, Zap, Bot, GitBranch, Cpu,
  Shield, Lock, CreditCard, Globe, LineChart, Layers,
  ChevronRight
} from 'lucide-react'
import { technologies } from '../data/technologies'
import StatsBar from '../components/StatsBar'
import CTASection from '../components/CTASection'

// Software hero illustration
function SoftwareHeroIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="bg-navy-950 rounded-3xl p-6 border border-white/10">
        {/* Window chrome */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <div className="flex-1 bg-white/10 rounded-full h-5 ml-2" />
        </div>
        {/* Dashboard content */}
        <div className="space-y-3">
          <div className="bg-white/10 rounded-xl p-4">
            <div className="text-white/60 text-xs mb-2">Building Digital Solutions</div>
            <div className="text-white font-bold text-lg">that Drive Real Impact.</div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {['Modern Technology', 'Scalable Architecture', 'AI-Powered Innovation', 'Cloud-Native Solutions'].map((item) => (
              <div key={item} className="bg-white/5 rounded-lg p-3 flex items-center gap-2">
                <CheckCircle2 size={14} className="text-accent-purple" />
                <span className="text-white/70 text-xs">{item}</span>
              </div>
            ))}
          </div>
          {/* Mini cards */}
          <div className="grid grid-cols-3 gap-2">
            {['AI Solutions', 'Cloud & DevOps', 'Data Analytics', 'Mobile Apps', 'Web Apps', 'Security'].map((item) => (
              <div key={item} className="bg-accent-purple/20 rounded-lg p-2 text-center">
                <div className="text-accent-purple text-xs font-medium">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Floating badge */}
      <div className="absolute -top-3 -right-3 bg-accent-purple text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-cta">
        Future Ready
      </div>
    </div>
  )
}

const softwareServices = [
  { icon: Cpu, title: 'Custom Software Development', desc: 'Tailor-made software solutions designed to solve your specific business challenges and automate workflows.' },
  { icon: Monitor, title: 'Web Development', desc: 'Modern, responsive websites and web applications built with cutting-edge technologies for optimal performance.' },
  { icon: Cloud, title: 'SaaS Development', desc: 'Scalable Software-as-a-Service products built to grow with your customer base from day one.' },
  { icon: ShoppingBag, title: 'E-commerce Solutions', desc: 'Powerful online stores with seamless checkout, payment integration and inventory management.' },
  { icon: Zap, title: 'API Development', desc: 'Robust RESTful and GraphQL APIs that power your applications and enable seamless third-party integrations.' },
  { icon: Server, title: 'Backend Development', desc: 'Secure, high-performance backend systems that scale reliably with your growing business needs.' },
  { icon: Cloud, title: 'Cloud Solutions', desc: 'Cloud architecture, migration and deployment on AWS, GCP and Azure with CI/CD pipelines.' },
  { icon: Database, title: 'Database Solutions', desc: 'Optimized database design, management and performance tuning for fast and reliable data access.' },
  { icon: GitBranch, title: 'Business Automation', desc: 'Streamline operations and eliminate manual work with intelligent, custom automation systems.' },
  { icon: Bot, title: 'AI Integration', desc: 'Embed AI capabilities and machine learning models into your applications for smarter outcomes.' },
]

const industryCategories = [
  { name: 'EdTech', desc: 'Smart digital solutions for modern education and learning.', emoji: '🎓' },
  { name: 'FinTech', desc: 'Secure, compliant and scalable solutions for financial services.', emoji: '💳' },
  { name: 'HealthTech', desc: 'Technology solutions that care for better health outcomes.', emoji: '🏥' },
  { name: 'E-Commerce', desc: 'Powerful platforms that drive online business growth.', emoji: '🛒' },
  { name: 'Real Estate', desc: 'Digital solutions to simplify property management.', emoji: '🏢' },
  { name: 'Logistics', desc: 'Intelligent systems to optimize delivery and operations.', emoji: '🚚' },
]

const developmentProcess = [
  { step: '01', title: 'Discover', desc: 'Understand business requirements, goals and technical constraints.' },
  { step: '02', title: 'Plan', desc: 'Create system architecture, tech stack and development roadmap.' },
  { step: '03', title: 'Design', desc: 'Create intuitive UI/UX wireframes and design prototypes.' },
  { step: '04', title: 'Develop', desc: 'Build scalable frontend and backend systems with clean code.' },
  { step: '05', title: 'Test', desc: 'Test functionality, performance, security and user experience.' },
  { step: '06', title: 'Deploy', desc: 'Deploy to production with CI/CD pipelines and monitoring.' },
  { step: '07', title: 'Maintain', desc: 'Monitor, optimize, scale and continuously improve the system.' },
]

const capabilities = [
  { icon: Shield, title: 'Secure Architecture', desc: 'Security-first design protecting against vulnerabilities and attacks.' },
  { icon: Layers, title: 'Scalable Infrastructure', desc: 'Systems designed to grow from startup to enterprise without rebuilding.' },
  { icon: Zap, title: 'API Integration', desc: 'Seamless connection with payment gateways and external services.' },
  { icon: Cloud, title: 'Cloud Deployment', desc: 'AWS, GCP or Azure with automated scaling and zero downtime.' },
  { icon: Database, title: 'Database Management', desc: 'SQL and NoSQL databases optimized for performance and reliability.' },
  { icon: Lock, title: 'Auth & Authorization', desc: 'Role-based access control, SSO and secure authentication flows.' },
  { icon: CreditCard, title: 'Payment Integration', desc: 'Razorpay, Stripe, PayPal and other payment gateways.' },
  { icon: Globe, title: 'Third-party Integrations', desc: 'CRMs, analytics, marketing tools and business software.' },
  { icon: LineChart, title: 'Performance Optimization', desc: 'Caching, CDN, code splitting for lightning-fast load times.' },
  { icon: Bot, title: 'AI Automation', desc: 'Machine learning and AI models integrated into your workflows.' },
]

export default function SoftwareServicesPage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────── */}
      <section className="bg-hero-gradient pt-12 pb-16 overflow-hidden" id="top">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="section-label mb-4">
                <span className="w-4 h-0.5 bg-accent-purple" />
                Software Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-950 leading-[1.15] mb-6">
                Intelligent Software.<br />
                Scalable Solutions.<br />
                <span className="gradient-text">Future Ready.</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
                We design, build and deliver secure, scalable and innovative software solutions that help businesses automate, innovate and grow in the digital era.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/contact" className="btn-primary">
                  Explore Our Solutions <ArrowRight size={16} />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Talk to Our Experts
                </Link>
              </div>
              {/* Feature pills */}
              <div className="flex flex-wrap gap-4">
                {['Scalable Architecture', 'Secure by Design', 'Future Ready Tech'].map((f) => (
                  <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="text-accent-purple" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Right */}
            <div className="hidden lg:block">
              <SoftwareHeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ── INDUSTRY SOLUTIONS ─────────────────────────────────────── */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 h-px bg-accent-purple" />
              <div className="section-label">Solutions For Every Industry</div>
              <span className="w-8 h-px bg-accent-purple" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industryCategories.map((cat) => (
              <div key={cat.name} className="card p-6 group cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-primary-50 flex items-center justify-center text-2xl">
                    {cat.emoji}
                  </div>
                  <div>
                    <h3 className="font-bold text-navy-950 text-lg">{cat.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{cat.desc}</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center group-hover:bg-accent-purple transition-colors">
                  <ChevronRight size={16} className="text-accent-purple group-hover:text-white transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE SERVICES ──────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 h-px bg-accent-purple" />
              <div className="section-label">Our Core Services</div>
              <span className="w-8 h-px bg-accent-purple" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" id="custom-software">
            {softwareServices.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="card p-5 group hover:border-accent-purple/30" id={service.title.toLowerCase().replace(/\s+/g, '-')}>
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-accent-purple group-hover:text-white transition-all">
                    <Icon size={22} className="text-accent-purple group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-navy-950 mb-2 text-sm leading-tight">{service.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{service.desc}</p>
                  <Link to="/contact" className="text-accent-purple text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ChevronRight size={12} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGY STACK ───────────────────────────────────────── */}
      <section className="py-20" id="technologies">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 h-px bg-accent-purple" />
              <div className="section-label">Technology We Work With</div>
              <span className="w-8 h-px bg-accent-purple" />
            </div>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {technologies.map((tech) => (
              <div key={tech.name} className="tech-logo-card group">
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.nextSibling.style.display = 'flex'
                  }}
                />
                <div className="hidden w-10 h-10 items-center justify-center text-2xl font-bold text-accent-purple">
                  {tech.name[0]}
                </div>
                <span className="text-xs text-gray-500 font-medium text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUSTED PARTNERS ─────────────────────────────────────────── */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="container-custom">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-accent-purple" />
              <div className="section-label">Trusted By Leading Partners</div>
              <span className="w-8 h-px bg-accent-purple" />
            </div>
          </div>
          <div className="flex items-center justify-center flex-wrap gap-10">
            {[
              { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
              { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
              { name: 'Flipkart', logo: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Flipkart_logo.svg' },
              { name: 'Meesho', logo: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Meesho_Logo.svg' },
            ].map((brand) => (
              <img key={brand.name} src={brand.logo} alt={brand.name} className="h-8 opacity-50 hover:opacity-100 filter grayscale hover:grayscale-0 transition-all duration-300" />
            ))}
            <div className="bg-blue-600 text-white text-sm font-bold px-3 py-2 rounded opacity-50 hover:opacity-100 transition-opacity">B2BE</div>
            <span className="text-gray-400 text-sm font-medium">And Many More...</span>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────────── */}
      <StatsBar variant="dark" />

      {/* ── DEVELOPMENT PROCESS ─────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="section-label mb-3 justify-center">Our Process</div>
            <h2 className="section-title mb-4">From Idea to <span className="gradient-text">Scalable Software</span></h2>
            <p className="section-subtitle max-w-xl mx-auto">A proven, transparent process from discovery to deployment and beyond.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentProcess.map((step, index) => (
              <div key={step.step} className="card p-6 relative overflow-hidden group">
                <div className="text-6xl font-black text-primary-100 absolute -top-2 -right-2 group-hover:text-primary-200 transition-colors">
                  {step.step}
                </div>
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-accent-purple text-white flex items-center justify-center font-bold text-lg mb-4">
                    {parseInt(step.step)}
                  </div>
                  <h3 className="font-bold text-navy-950 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
                {index < developmentProcess.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ChevronRight size={20} className="text-accent-purple" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="section-label mb-3 justify-center">Capabilities</div>
            <h2 className="section-title mb-4">
              Software <span className="gradient-text">Features & Capabilities</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {capabilities.map((cap) => {
              const Icon = cap.icon
              return (
                <div key={cap.title} className="card p-5 text-center group hover:border-accent-purple/30">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent-purple/10 transition-colors">
                    <Icon size={22} className="text-accent-purple" />
                  </div>
                  <h3 className="font-bold text-navy-950 text-sm mb-2">{cap.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{cap.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <CTASection
        label="HAVE AN IDEA?"
        title="Let's Build Something Amazing Together."
        titleHighlight="Amazing"
        description="From innovative software to intelligent systems — we turn your ideas into real digital products."
        primaryBtn={{ text: 'Start Your Project', href: '/contact' }}
        secondaryBtn={{ text: 'Schedule a Call', href: 'tel:+918085953085', external: true }}
        variant="dark"
      />
    </>
  )
}
