import { Link } from 'react-router-dom'
import { ArrowRight, Target, Users, Star, Eye, Heart, Lightbulb, BarChart3, Award } from 'lucide-react'
import StatsBar from '../components/StatsBar'
import CTASection from '../components/CTASection'

const whatMakesUsDifferent = [
  { icon: Lightbulb, title: 'Creative Strategies', desc: 'Unique ideas tailored to your business goals and target audience.' },
  { icon: Award, title: 'Cost-Effective Solutions', desc: 'High-quality services at affordable prices for businesses of all sizes.' },
  { icon: BarChart3, title: 'Measurable Results', desc: 'Data-driven approach for real, trackable growth and performance.' },
  { icon: Users, title: 'Dedicated Support', desc: "We're always here when you need us with reliable ongoing support." },
]

const ourValues = [
  { icon: '💡', title: 'Creativity', desc: 'We bring fresh, innovative ideas to every project.' },
  { icon: '🤝', title: 'Transparency', desc: 'Open communication at every stage of the project.' },
  { icon: '💪', title: 'Commitment', desc: 'Fully dedicated to delivering results that matter.' },
  { icon: '🏆', title: 'Client Success', desc: 'Your success is the only metric that counts.' },
]

const trustedBrands = [
  { name: 'AWS', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg' },
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'Flipkart', logo: 'https://upload.wikimedia.org/wikipedia/en/5/5c/Flipkart_logo.svg' },
  { name: 'Meesho', logo: 'https://upload.wikimedia.org/wikipedia/en/d/d5/Meesho_Logo.svg' },
]

export default function AboutPage() {
  return (
    <>
      {/* ── HERO SECTION ─────────────────────────────────────────── */}
      <section className="pt-12 pb-16 bg-hero-gradient overflow-hidden">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-8 h-px bg-accent-purple" />
                <div className="section-label">About Simple Marketing Ideas</div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-navy-950 leading-tight mb-6">
                We Are More Than a Marketing Agency.<br />
                We Are Your <span className="gradient-text">Growth Partner.</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
                At SIMPLE MARKETING IDEAS, we believe every business has a unique story. Our mission is to help you tell that story to the right audience with creative strategies, modern tools and measurable results.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/contact" className="btn-primary">
                  Get to Know Us <ArrowRight size={16} />
                </Link>
                <Link to="/marketing-services" className="btn-secondary">
                  Our Services <ArrowRight size={16} />
                </Link>
              </div>

              {/* Quick highlights */}
              <div className="flex flex-wrap gap-6">
                {[
                  { icon: Target, label: 'Result Driven Approach' },
                  { icon: Users, label: 'Creative & Experienced Team' },
                  { icon: Heart, label: 'Long-Term Partnerships' },
                ].map(({ icon: Icon, label }) => (
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
                <div className="bg-primary-50 rounded-3xl p-6 aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=450&fit=crop"
                    alt="Our creative team working together"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                {/* Floating label */}
                <div className="absolute -top-3 -right-3 bg-white rounded-2xl shadow-card-hover p-4 flex flex-col items-center">
                  <div className="font-black text-2xl gradient-text">Ideas</div>
                  <div className="font-black text-2xl gradient-text">Strategy</div>
                  <div className="font-black text-2xl gradient-text">Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ─────────────────────────────────────────────── */}
      <StatsBar variant="light" />

      {/* ── OUR STORY ─────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story text */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-px bg-accent-purple" />
                <div className="section-label">Our Story</div>
              </div>
              <h2 className="text-4xl font-bold text-navy-950 mb-6">
                From Ideas to <span className="gradient-text">Impact</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                SIMPLE MARKETING IDEAS was founded with a simple goal — to make high-quality marketing accessible for every business. What started as a small team with big ideas has now grown into a trusted marketing partner for startups, local businesses and growing brands across India.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                We combine creative thinking with data-driven strategies to deliver marketing solutions that not only look great but also generate real, measurable business results.
              </p>
              <blockquote className="border-l-4 border-accent-purple pl-5 py-2">
                <p className="text-navy-950 font-semibold italic text-lg">
                  "Our journey is driven by creativity, trust and a commitment to help businesses grow."
                </p>
              </blockquote>
            </div>

            {/* Mission / Vision / Values */}
            <div className="flex flex-col gap-6">
              {/* Story illustration */}
              <div className="rounded-3xl overflow-hidden aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=340&fit=crop"
                  alt="Team collaboration and planning"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid gap-4">
                {[
                  { icon: Target, label: 'Our Mission', color: 'text-accent-purple', text: 'To help businesses grow with innovative, affordable and result-driven marketing solutions.' },
                  { icon: Eye, label: 'Our Vision', color: 'text-accent-blue', text: 'To become a leading digital marketing partner for businesses in India and beyond.' },
                  { icon: Heart, label: 'Our Values', color: 'text-pink-500', text: 'Creativity, Transparency, Commitment and Client Success in everything we do.' },
                ].map(({ icon: Icon, label, color, text }) => (
                  <div key={label} className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-primary-50 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <Icon size={20} className={color} />
                    </div>
                    <div>
                      <div className={`font-bold text-sm mb-1 ${color}`}>{label}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ─────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-px bg-accent-purple" />
                <div className="section-label">Why Choose Us</div>
              </div>
              <h2 className="section-title mb-4">
                What Makes Us <span className="gradient-text">Different?</span>
              </h2>
              <p className="section-subtitle mb-10">
                We combine strategy, creativity and technology to deliver real results.
              </p>

              <div className="grid sm:grid-cols-2 gap-5">
                {whatMakesUsDifferent.map((item) => {
                  const Icon = item.icon
                  return (
                    <div key={item.title} className="flex flex-col items-center text-center p-5 rounded-2xl bg-white card group">
                      <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-3 group-hover:bg-accent-purple/10 transition-colors">
                        <Icon size={26} className="text-accent-purple" />
                      </div>
                      <h4 className="font-bold text-navy-950 mb-2 text-sm">{item.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Right illustration */}
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=650&fit=crop"
                  alt="Professional business consultant"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-6 -right-6 bg-white rounded-2xl shadow-card-hover p-4 text-center">
                <div className="text-lg font-black gradient-text">Your Success</div>
                <div className="text-lg font-black gradient-text">Our Priority</div>
              </div>
              <div className="absolute bottom-6 -left-6 bg-accent-purple text-white rounded-2xl shadow-cta p-4 text-center">
                <div className="text-2xl font-black">100%</div>
                <div className="text-xs">Client Focused</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OUR CLIENTS ──────────────────────────────────────────────── */}
      <section className="py-14 bg-white border-y border-gray-100">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-8 h-px bg-accent-purple" />
                <div className="section-label">Trusted By Businesses Like Yours</div>
              </div>
              <h2 className="text-2xl font-bold text-navy-950">Our Clients</h2>
              <p className="text-gray-500 text-sm mt-1">We're proud to work with amazing businesses across different industries.</p>
            </div>
            <Link to="/our-work" className="btn-secondary text-sm whitespace-nowrap">
              View Our Work <ArrowRight size={14} />
            </Link>
          </div>

          <div className="flex items-center justify-center flex-wrap gap-10">
            {trustedBrands.map((brand) => (
              <img key={brand.name} src={brand.logo} alt={brand.name} className="h-10 opacity-50 hover:opacity-100 filter grayscale hover:grayscale-0 transition-all duration-300" />
            ))}
            <div className="bg-blue-600 text-white text-sm font-bold px-3 py-2 rounded opacity-50 hover:opacity-100 transition-opacity">B2BE</div>
            <span className="text-gray-400 text-sm">And Many More...</span>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <CTASection
        label="LET'S GROW YOUR BUSINESS TOGETHER"
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
