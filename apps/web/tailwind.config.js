/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f0ff',
          100: '#e2e1ff',
          200: '#cbc8ff',
          300: '#aaa3ff',
          400: '#8674ff',
          500: '#6b4cff',
          600: '#5a2ef7',
          700: '#4c1de3',
          800: '#3f18bf',
          900: '#35179c',
          950: '#1f0b6b',
        },
        navy: {
          50: '#f0f4ff',
          100: '#dde6ff',
          200: '#c3d0ff',
          300: '#9db2ff',
          400: '#7088ff',
          500: '#4a5eff',
          600: '#2e38f5',
          700: '#2229e1',
          800: '#1e23b6',
          900: '#1e248f',
          950: '#0a0f2e',
        },
        accent: {
          purple: '#7c3aed',
          blue: '#2563eb',
          indigo: '#4f46e5',
          violet: '#6d28d9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
        'card-hover': '0 20px 40px -8px rgba(0, 0, 0, 0.12)',
        'cta': '0 8px 32px rgba(124, 58, 237, 0.3)',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '2rem',
          '2xl': '2rem',
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1400px',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #f8f7ff 0%, #eef2ff 50%, #f0f4ff 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0a0f2e 0%, #1e1b4b 50%, #0a0f2e 100%)',
        'purple-gradient': 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)',
        'blue-gradient': 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
      },
    },
  },
  plugins: [],
}
