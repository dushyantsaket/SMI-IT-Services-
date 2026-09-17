// Shared constants and types for Simple Marketing Ideas monorepo

export const COMPANY = {
  name: 'Simple Marketing Ideas',
  shortName: 'SMI',
  tagline: 'Creative Marketing. Powerful Software. Measurable Growth.',
  phone: '+91 8085953085',
  email: 'info@simplemarketingideas.com',
  address: {
    line1: '34 Pink City, First Phase',
    line2: 'Vijay Nagar, Indore',
    city: 'Indore',
    state: 'Madhya Pradesh',
    pincode: '452010',
    country: 'India',
    full: '34 Pink City, First Phase, Vijay Nagar, Indore, Madhya Pradesh, 452010',
  },
  socialLinks: {
    facebook: 'https://facebook.com/simplemarketingideas',
    instagram: 'https://instagram.com/simplemarketingideas',
    linkedin: 'https://linkedin.com/company/simplemarketingideas',
    youtube: 'https://youtube.com/@simplemarketingideas',
  },
  workingHours: 'Mon: 9:30am - 5pm, Tue - Sat: 10:30am - 5pm',
};

export const STATS = [
  { value: '100+', label: 'Projects Delivered' },
  { value: '53+', label: 'Happy Clients' },
  { value: '4.8', label: 'Client Rating' },
  { value: '2+', label: 'Years of Excellence' },
];

export const SERVICE_CATEGORIES = {
  MARKETING: 'marketing',
  SOFTWARE: 'software',
};

export const PROJECT_CATEGORIES = {
  ALL: 'all',
  WEBSITES: 'websites',
  SOFTWARE: 'software',
  ECOMMERCE: 'ecommerce',
  SAAS: 'saas',
  MARKETING: 'marketing',
  BRANDING: 'branding',
};

export const ROUTES = {
  HOME: '/',
  SOFTWARE_SERVICES: '/software-services',
  MARKETING_SERVICES: '/marketing-services',
  ABOUT: '/about',
  OUR_WORK: '/our-work',
  PROJECT_DETAIL: '/our-work/:slug',
  CONTACT: '/contact',
};
