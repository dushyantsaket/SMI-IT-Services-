import { Link } from 'react-router-dom'
import {
  ArrowRight, ChevronRight, CheckCircle2,
  Search, Share2, Target, Megaphone, Mail, Pen,
  Star, TrendingUp, MapPin, Users, Globe,
  BarChart3, Award
} from 'lucide-react'
import { testimonials } from '../data/testimonials'
import StatsBar from '../components/StatsBar'
import CTASection from '../components/CTASection'

const allMarketingServices = [
  { icon: Users, num: '01', title: 'Affiliate Marketing', desc: 'Earn and grow through performance-based marketing programs that drive real revenue.' },
  { icon: BarChart3, num: '02', title: 'Digital Marketing', desc: 'Complete online marketing solutions for your business across every digital channel.' },
  { icon: Mail, num: '03', title: 'Email Marketing', desc: 'Reach the right audience with targeted and compelling email campaigns that convert.' },
  { icon: Pen, num: '04', title: 'Graphic Design', desc: 'Stunning designs that make your brand stand out and leave a lasting impression.' },
  { icon: Target, num: '05', title: 'Lead Generation', desc: 'Get high-quality leads and build your sales pipeline with proven strategies.' },
  { icon: Star, num: '06', title: 'Logo Design', desc: 'Unique and memorable logos that perfectly capture your brand identity.' },
  { icon: Globe, num: '07', title: 'Online Service', desc: 'Professional online solutions tailored specifically to your business needs.' },
  { icon: TrendingUp, num: '08', title: 'Pay Per Click Consulting', desc: 'Maximize ROI with targeted and optimized advertising campaigns across platforms.' },
]

const marketingProcess = [
  { step: '01', title: 'Understand Your Goals', icon: '💬' },
  { step: '02', title: 'Create Strategy', icon: '🎯' },
  { step: '03', title: 'Implement Solutions', icon: '⚙️' },
  { step: '04', title: 'Track & Optimize', icon: '📊' },
  { step: '05', title: 'Achieve Growth', icon: '🏆' },
]

const whyChooseUs = [
  { icon: BarChart3, title: 'Result Driven Approach', desc: 'Unique ideas tailored to your business goals.' },
  { icon: Award, title: 'Cost-Effective Solutions', desc: 'High-quality services at affordable prices.' },
  { icon: Users, title: 'Creative & Experienced Team', desc: 'Passionate professionals dedicated to your success.' },
  { icon: Star, title: 'Dedicated Support', desc: "We're always here when you need us." },
]

const featuredProjects = [
  { title: 'Digital Marketing Campaign', tag: '+120% Leads', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=280&fit=crop' },
  { title: 'Social Media Growth', tag: '+80% Engagement', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=280&fit=crop' },
  { title: 'Brand Logo Design', tag: 'Unique Brand Identity', img: 'https://images.unsplash.com/photo-1524275539700-cf51138f679b?w=400&h=280&fit=crop' },
  { title: 'Email Marketing', tag: '+60% Conversions', img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=280&fit=crop' },
  { title: 'PPC Campaign', tag: '+3x ROI', img: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=280&fit=crop' },
  { title: 'Website Design', tag: 'Modern & Responsive', img: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=280&fit=crop' },
]

const impactStats = [
  { value: '8+', label: 'Services Offered', icon: '🚀' },
  { value: '53+', label: 'Customer Reviews', icon: '⭐' },
  { value: '500+', label: 'Happy Customers', icon: '👥' },
  { value: '4.8', label: 'Average Rating', icon: '🏆' },
]

const faqs = [
  { q: 'What services do you provide?', a: 'We provide digital marketing, SEO, social media, email marketing, graphic design, logo design, lead generation, PPC and more.' },
  { q: 'How can SIMPLE MARKETING IDEAS help my business?', a: 'We create tailored marketing strategies that increase your online visibility, generate quality leads and grow your revenue.' },
  { q: 'Do you work with startups?', a: 'Absolutely! We work with businesses of all sizes — from early-stage startups to established enterprises.' },
  { q: 'How much do your services cost?', a: 'Our pricing varies based on project scope and requirements. Contact us for a free consultation and customized quote.' },
  { q: 'How can I get started?', a: 'Simply click "Get a Free Consultation" or call us at +91 8085953085. We\'ll discuss your goals and create a custom plan.' },
]

export default function MarketingServicesPage() {
  return (
    <>
      {/* ── OUR SERVICES SECTION ─────────────────────────────────── */}
      <section className="py-20 bg-gray-50" id="services">
        <div className="container-custom">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-8 h-px bg-accent-purple" />
              <div className="section-label">Our Services</div>
              <span className="w-8 h-px bg-accent-purple" />
            </div>
            <h1 className="section-title mb-4">
              Marketing Agency Services by{' '}
              <span className="gradient-text">SIMPLE MARKETING IDEAS</span>
            </h1>
            <p className="section-subtitle max-w-2xl mx-auto">
              Everything you need to grow your brand, attract customers and increase revenue.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {allMarketingServices.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title} className="card p-5 group" id={service.title.toLowerCase().replace(/\s+/g, '-')}>
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-accent-purple/10 transition-colors">
                    <Icon size={22} className="text-accent-purple" />
                  </div>
                  <div className="text-xs text-accent-purple font-semibold mb-1">{service.num}.</div>
                  <h3 className="font-bold text-navy-950 mb-2 text-sm">{service.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{service.desc}</p>
                  <Link to="/contact" className="text-accent-purple text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                    Learn More <ArrowRight size={12} />
                  </Link>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK PROCESS ─────────────────────────────────────── */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left — process */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-px bg-accent-purple" />
                <div className="section-label">How We Work</div>
              </div>
              <h2 className="section-title mb-4">
                A Simple Process for <span className="gradient-text">Big Results</span>
              </h2>
              <p className="section-subtitle mb-10">
                We follow a proven process to understand your goals and deliver measurable growth.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                {marketingProcess.map((step, index) => (
                  <div key={step.step} className="flex items-center gap-3">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center text-2xl mb-2">
                        {step.icon}
                      </div>
                      <span className="text-xs text-accent-purple font-semibold">{step.step}</span>
                      <span className="text-xs text-navy-950 font-medium mt-1 max-w-[80px]">{step.title}</span>
                    </div>
                    {index < marketingProcess.length - 1 && (
                      <ChevronRight size={16} className="text-gray-300 flex-shrink-0 mb-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Right — quote card */}
            <div className="relative">
              <div className="bg-primary-50 rounded-3xl p-8 relative">
                <div className="text-5xl text-accent-purple font-serif mb-4">"</div>
                <p className="text-navy-950 font-semibold text-lg leading-relaxed mb-6">
                  Your Growth is Our Priority
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center text-white font-bold">
                    53+
                  </div>
                  <div>
                    <div className="font-semibold text-navy-950">Happy Clients</div>
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-purple/10 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-accent-blue/10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS / GALLERY ────────────────────────────── */}
      <section className="py-20 bg-gray-50" id="work">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-px bg-accent-purple" />
                <div className="section-label">Our Work</div>
              </div>
              <h2 className="section-title">
                Featured Projects & <span className="gradient-text">Gallery</span>
              </h2>
              <p className="text-gray-500 mt-2">Take a look at some of our recent work. Real results, real growth.</p>
            </div>
            <Link to="/our-work" className="btn-secondary whitespace-nowrap text-sm hidden md:inline-flex">
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredProjects.map((project) => (
              <Link to="/our-work" key={project.title} className="portfolio-card block">
                <div className="aspect-video overflow-hidden">
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-navy-950 text-sm">{project.title}</h3>
                  <p className="text-accent-purple text-xs font-medium mt-1">{project.tag}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 md:hidden">
            <Link to="/our-work" className="btn-secondary text-sm">
              View All Projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US / TESTIMONIALS ────────────────────────────── */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Why choose us */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-px bg-accent-purple" />
                <div className="section-label">Why Choose Us</div>
              </div>
              <h2 className="text-3xl font-bold text-navy-950 mb-4">
                Why Choose <span className="gradient-text">SIMPLE MARKETING IDEAS?</span>
              </h2>
              <p className="text-gray-500 mb-8">We are more than just a marketing agency — we are your growth partner.</p>
              <div className="grid grid-cols-2 gap-4">
                {whyChooseUs.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex flex-col items-center text-center p-4 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors group">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center mb-3 shadow-sm">
                        <Icon size={22} className="text-accent-purple" />
                      </div>
                      <h4 className="font-bold text-navy-950 text-sm mb-1">{item.title}</h4>
                      <p className="text-gray-500 text-xs">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Testimonials */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-px bg-accent-purple" />
                <div className="section-label">Testimonials</div>
              </div>
              <h2 className="text-3xl font-bold text-navy-950 mb-4">
                What Our <span className="gradient-text">Customers Say</span>
              </h2>
              <p className="text-gray-500 mb-8">53+ Users rated us 4.8 out of 5.</p>

              <div className="flex flex-col gap-4">
                {testimonials.slice(0, 2).map((t) => (
                  <div key={t.id} className="card p-5">
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-purple to-accent-blue flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {t.name[0]}
                      </div>
                      <div>
                        <div className="font-semibold text-navy-950 text-sm">{t.name}</div>
                        <div className="text-gray-400 text-xs">{t.role}, {t.company}</div>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} size={12} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Rating summary */}
                <div className="card p-5 flex items-center gap-4">
                  <div className="text-4xl font-black text-accent-purple">4.8/5</div>
                  <div>
                    <div className="flex gap-1 mb-1">
                      {[...Array(5)].map((_, i) => <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />)}
                    </div>
                    <div className="text-xs text-gray-500">53+ Reviews</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── IMPACT STATS ────────────────────────────────────────────── */}
      <section className="py-14 bg-navy-950">
        <div className="container-custom text-center mb-8">
          <div className="section-label mb-2 justify-center text-purple-400">Our Impact</div>
          <h2 className="text-2xl font-bold text-white">Proven Success in Numbers</h2>
        </div>
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-white/10">
            {impactStats.map((stat) => (
              <div key={stat.label} className="stats-card">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FREE CONSULTATION CTA ────────────────────────────────────── */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-primary-50 to-indigo-50 rounded-3xl p-8 md:p-12">
            <div>
              <div className="text-xs text-accent-purple font-semibold mb-2">Ready to Grow Your Business?</div>
              <h2 className="text-2xl md:text-3xl font-bold text-navy-950 mb-2">
                Ready to <span className="gradient-text">Grow Your Business?</span>
              </h2>
              <p className="text-gray-500 text-sm">Let's discuss how we can help you achieve your marketing goals.</p>
            </div>
            <div className="flex-shrink-0">
              <Link to="/contact" className="btn-primary whitespace-nowrap">
                Get a Free Consultation <ArrowRight size={16} />
              </Link>
              <div className="text-xs text-gray-400 text-center mt-2">✨ It's Free!</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50" id="faq">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* FAQ */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-px bg-accent-purple" />
                <div className="section-label">FAQ</div>
              </div>
              <h2 className="text-3xl font-bold text-navy-950 mb-8">
                Frequently Asked Questions
              </h2>
              <div className="flex flex-col gap-3">
                {faqs.map((faq, index) => (
                  <details key={index} className="card p-5 group open:shadow-card-hover transition-all">
                    <summary className="font-semibold text-navy-950 cursor-pointer flex items-center justify-between text-sm list-none">
                      {faq.q}
                      <ChevronRight size={16} className="text-accent-purple flex-shrink-0 group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="text-gray-500 text-sm mt-3 leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>

            {/* Latest Blog preview */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-8 h-px bg-accent-purple" />
                    <div className="section-label">Latest Insights</div>
                  </div>
                  <h2 className="text-3xl font-bold text-navy-950">
                    Our Blog & Resources
                  </h2>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  { title: '5 Digital Marketing Tips for Startups', date: 'Sep 10, 2026', read: '5 min read', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop' },
                  { title: 'How to Build a Strong Brand Identity', date: 'Sep 5, 2026', read: '4 min read', img: 'https://images.unsplash.com/photo-1524275539700-cf51138f679b?w=300&h=200&fit=crop' },
                  { title: 'The Future of Online Marketing in 2026', date: 'Aug 20, 2026', read: '6 min read', img: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=300&h=200&fit=crop' },
                ].map((post) => (
                  <div key={post.title} className="card flex gap-4 p-4 group cursor-pointer">
                    <div className="w-24 h-20 rounded-xl overflow-hidden flex-shrink-0">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="flex flex-col justify-between">
                      <h4 className="font-semibold text-navy-950 text-sm group-hover:text-accent-purple transition-colors">{post.title}</h4>
                      <div className="flex items-center gap-3 text-xs text-gray-400">
                        <span>{post.date}</span>
                        <span>·</span>
                        <span>{post.read}</span>
                      </div>
                      <span className="text-accent-purple text-xs font-semibold">Read More →</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER CTA ─────────────────────────────────────────────── */}
      <CTASection
        label="READY TO GROW?"
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
