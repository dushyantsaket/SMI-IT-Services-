import {
  Megaphone, Search, Share2, Target, Mail, Pen,
  Star, TrendingUp, MapPin, Globe,
  Code2, Monitor, Cpu, ShoppingBag, Zap, Server,
  Database, Cloud, Bot, BarChart3, Shield, Lock,
  CreditCard, GitBranch, LineChart, Layers
} from 'lucide-react'

export const marketingServices = [
  {
    id: 'seo',
    icon: Search,
    title: 'SEO',
    description: 'Drive organic traffic and rank higher on search engines with data-driven SEO strategies.',
    href: '/marketing-services#seo',
  },
  {
    id: 'social-media',
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build brand presence and engage your audience across all major social platforms.',
    href: '/marketing-services#social-media',
  },
  {
    id: 'google-ads',
    icon: Target,
    title: 'Google Ads',
    description: 'Maximize ROI with expertly managed Google PPC campaigns that convert.',
    href: '/marketing-services#google-ads',
  },
  {
    id: 'meta-ads',
    icon: Megaphone,
    title: 'Meta Ads',
    description: 'Reach your ideal audience with precision-targeted Facebook and Instagram ads.',
    href: '/marketing-services#meta-ads',
  },
  {
    id: 'content-marketing',
    icon: Pen,
    title: 'Content Marketing',
    description: 'Create compelling content that attracts, engages and converts your target audience.',
    href: '/marketing-services#content-marketing',
  },
  {
    id: 'performance-marketing',
    icon: TrendingUp,
    title: 'Performance Marketing',
    description: 'Results-driven campaigns optimized for measurable business outcomes.',
    href: '/marketing-services#performance-marketing',
  },
  {
    id: 'branding',
    icon: Star,
    title: 'Branding',
    description: 'Build a memorable brand identity that resonates with your audience and stands out.',
    href: '/marketing-services#branding',
  },
  {
    id: 'lead-generation',
    icon: Users,
    title: 'Lead Generation',
    description: 'Generate high-quality leads and build a consistent sales pipeline for your business.',
    href: '/marketing-services#lead-generation',
  },
  {
    id: 'local-seo',
    icon: MapPin,
    title: 'Local SEO',
    description: 'Dominate local search results and attract customers in your target geographic area.',
    href: '/marketing-services#local-seo',
  },
  {
    id: 'email-marketing',
    icon: Mail,
    title: 'Email Marketing',
    description: 'Reach the right audience with compelling email campaigns that drive conversions.',
    href: '/marketing-services#email-marketing',
  },
]

export const softwareServices = [
  {
    id: 'custom-software',
    icon: Cpu,
    title: 'Custom Software Development',
    description: 'Tailor-made software solutions designed to solve your specific business challenges.',
    href: '/software-services#custom-software',
  },
  {
    id: 'web-development',
    icon: Monitor,
    title: 'Web Development',
    description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
    href: '/software-services#web-development',
  },
  {
    id: 'saas-development',
    icon: Cloud,
    title: 'SaaS Development',
    description: 'Scalable Software-as-a-Service products built to grow with your customer base.',
    href: '/software-services#saas',
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    title: 'E-commerce Development',
    description: 'Powerful online stores with seamless checkout, payment integration and order management.',
    href: '/software-services#ecommerce',
  },
  {
    id: 'api-development',
    icon: Zap,
    title: 'API Development',
    description: 'Robust RESTful and GraphQL APIs that power your applications and integrations.',
    href: '/software-services#api',
  },
  {
    id: 'backend-development',
    icon: Server,
    title: 'Backend Development',
    description: 'Secure, high-performance backend systems that scale with your business needs.',
    href: '/software-services#backend',
  },
  {
    id: 'cloud-solutions',
    icon: Cloud,
    title: 'Cloud Solutions',
    description: 'Cloud architecture, migration and deployment on AWS, GCP and Azure platforms.',
    href: '/software-services#cloud',
  },
  {
    id: 'database-solutions',
    icon: Database,
    title: 'Database Solutions',
    description: 'Optimized database design, management and performance tuning for your applications.',
    href: '/software-services#database',
  },
  {
    id: 'business-automation',
    icon: GitBranch,
    title: 'Business Automation',
    description: 'Streamline operations and eliminate manual work with intelligent automation systems.',
    href: '/software-services#automation',
  },
  {
    id: 'ai-integration',
    icon: Bot,
    title: 'AI Integration',
    description: 'Embed AI capabilities into your applications to unlock smarter business outcomes.',
    href: '/software-services#ai',
  },
]

export const softwareCapabilities = [
  { icon: Shield, title: 'Secure Architecture', description: 'Security-first design with encryption, authentication and protection against vulnerabilities.' },
  { icon: Layers, title: 'Scalable Infrastructure', description: 'Systems built to grow — from startup to enterprise scale without rebuilding.' },
  { icon: Zap, title: 'API Integration', description: 'Seamless integration with third-party services, payment gateways and external APIs.' },
  { icon: Cloud, title: 'Cloud Deployment', description: 'Deploy on AWS, GCP or Azure with CI/CD pipelines and automated scaling.' },
  { icon: Database, title: 'Database Management', description: 'Optimized SQL and NoSQL databases designed for performance and reliability.' },
  { icon: Lock, title: 'Authentication & Authorization', description: 'Secure user authentication with role-based access control and SSO support.' },
  { icon: CreditCard, title: 'Payment Integration', description: 'Integrate Razorpay, Stripe, PayPal and other payment gateways seamlessly.' },
  { icon: Globe, title: 'Third-party Integrations', description: 'Connect CRMs, analytics tools, marketing platforms and business software.' },
  { icon: LineChart, title: 'Performance Optimization', description: 'Speed audits, caching, CDN setup and code optimization for fast load times.' },
  { icon: Bot, title: 'AI Automation', description: 'Integrate machine learning and AI models to automate business processes.' },
]

// Import Users for lead-generation
import { Users } from 'lucide-react'
