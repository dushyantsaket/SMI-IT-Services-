import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { company } from '../data/navigation'

const serviceOptions = [
  'Digital Marketing',
  'SEO',
  'Social Media Marketing',
  'Google Ads / Meta Ads',
  'Content Marketing',
  'Branding & Design',
  'Lead Generation',
  'Custom Software Development',
  'Web Development',
  'E-commerce Development',
  'SaaS Development',
  'API Development',
  'Cloud Solutions',
  'AI Integration',
  'Other',
]

const defaultForm = {
  name: '',
  email: '',
  phone: '',
  company: '',
  service: '',
  message: '',
}

function validate(form) {
  const errors = {}
  if (!form.name.trim()) errors.name = 'Name is required.'
  if (!form.email.trim()) {
    errors.email = 'Email is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!form.service) errors.service = 'Please select a service.'
  if (!form.message.trim()) {
    errors.message = 'Message is required.'
  } else if (form.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters.'
  }
  return errors
}

export default function ContactPage() {
  const [form, setForm] = useState(defaultForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('')

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }))
    }
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate(form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('loading')
    setErrorMessage('')

    try {
      const apiUrl = import.meta.env.VITE_API_URL || ''
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus('success')
        setForm(defaultForm)
      } else {
        setStatus('error')
        setErrorMessage(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('error')
      setErrorMessage('Could not connect to the server. Please try again or call us directly.')
    }
  }

  const mapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''

  return (
    <>
      {/* ── PAGE HEADER ────────────────────────────────────────────── */}
      <section className="pt-12 pb-16 bg-hero-gradient">
        <div className="container-custom text-center">
          <div className="section-label mb-4 justify-center">Get In Touch</div>
          <h1 className="section-title mb-4">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h1>
          <p className="section-subtitle max-w-lg mx-auto">
            Have a project in mind? We'd love to hear about it. Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ── CONTACT INFO CARDS ─────────────────────────────────────── */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: MapPin,
                title: 'Our Office',
                content: company.address.full,
                link: `https://maps.google.com/?q=${encodeURIComponent(company.address.full)}`,
              },
              {
                icon: Phone,
                title: 'Phone',
                content: company.phone,
                link: company.phoneHref,
              },
              {
                icon: Mail,
                title: 'Email',
                content: company.email,
                link: `mailto:${company.email}`,
              },
              {
                icon: Clock,
                title: 'Working Hours',
                content: company.workingHours,
                link: null,
              },
            ].map(({ icon: Icon, title, content, link }) => (
              <div key={title} className="card p-5 text-center group">
                <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent-purple/10 transition-colors">
                  <Icon size={22} className="text-accent-purple" />
                </div>
                <h3 className="font-bold text-navy-950 mb-2 text-sm">{title}</h3>
                {link ? (
                  <a href={link} target={link.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-gray-500 text-sm hover:text-accent-purple transition-colors leading-relaxed">
                    {content}
                  </a>
                ) : (
                  <p className="text-gray-500 text-sm leading-relaxed">{content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM + MAP ─────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-navy-950 mb-2">Send Us a Message</h2>
              <p className="text-gray-500 mb-8">Fill in the form and we'll be in touch as soon as possible.</p>

              {/* Success State */}
              {status === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6 flex items-start gap-3">
                  <CheckCircle2 size={22} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-green-800 mb-1">Message Sent!</h3>
                    <p className="text-green-700 text-sm">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {/* Error State */}
              {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-6 flex items-start gap-3">
                  <AlertCircle size={22} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-red-800 mb-1">Something Went Wrong</h3>
                    <p className="text-red-700 text-sm">{errorMessage}</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                {/* Name + Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`form-input ${errors.name ? 'border-red-400 focus:ring-red-300 focus:border-red-400' : ''}`}
                      disabled={status === 'loading'}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className={`form-input ${errors.email ? 'border-red-400 focus:ring-red-300 focus:border-red-400' : ''}`}
                      disabled={status === 'loading'}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Phone + Company */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="form-input"
                      disabled={status === 'loading'}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-company" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Company Name
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="form-input"
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="contact-service" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Service You're Interested In <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`form-input ${errors.service ? 'border-red-400 focus:ring-red-300 focus:border-red-400' : ''}`}
                    disabled={status === 'loading'}
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, goals and timeline..."
                    className={`form-input resize-none ${errors.message ? 'border-red-400 focus:ring-red-300 focus:border-red-400' : ''}`}
                    disabled={status === 'loading'}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  id="contact-submit"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-gray-400 text-center">
                  We typically respond within 24 hours. Your information is kept private and secure.
                </p>
              </form>
            </div>

            {/* Map */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-3xl font-bold text-navy-950 mb-2">Find Us Here</h2>
                <p className="text-gray-500 mb-6">
                  Visit our office in Vijay Nagar, Indore. We'd love to meet you in person.
                </p>
                <div className="flex flex-col gap-3 text-sm text-gray-600 mb-6">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={16} className="text-accent-purple flex-shrink-0 mt-0.5" />
                    <span>{company.address.full}</span>
                  </div>
                  <a href={company.phoneHref} className="flex items-center gap-2.5 hover:text-accent-purple transition-colors">
                    <Phone size={16} className="text-accent-purple flex-shrink-0" />
                    {company.phone}
                  </a>
                  <a href={`mailto:${company.email}`} className="flex items-center gap-2.5 hover:text-accent-purple transition-colors">
                    <Mail size={16} className="text-accent-purple flex-shrink-0" />
                    {company.email}
                  </a>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-3xl overflow-hidden border border-gray-200 shadow-card flex-1 min-h-[350px]">
                <iframe
                  title="Simple Marketing Ideas Location"
                  width="100%"
                  height="100%"
                  style={{ minHeight: '350px', border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJm2d-XQMdYzkRlYue3tAoDUI&key=${mapsApiKey || 'AIzaSyCwhlJKJiSztyGhz8ORWtd7TvPFe4y00DE'}`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
