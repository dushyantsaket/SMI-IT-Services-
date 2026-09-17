import { lazy, Suspense, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation, Navigate, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AdminLayout from './layouts/AdminLayout'

// Public Website Pages
const HomePage = lazy(() => import('./pages/HomePage'))
const SoftwareServicesPage = lazy(() => import('./pages/SoftwareServicesPage'))
const MarketingServicesPage = lazy(() => import('./pages/MarketingServicesPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const OurWorkPage = lazy(() => import('./pages/OurWorkPage'))
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

// Authentication
const LoginPage = lazy(() => import('./pages/LoginPage'))

// Admin Panel Pages
const AdminDashboardPage = lazy(() => import('./pages/admin/AdminDashboardPage'))
const AdminInquiriesPage = lazy(() => import('./pages/admin/AdminInquiriesPage'))
const AdminProjectsPage = lazy(() => import('./pages/admin/AdminProjectsPage'))
const AdminJobApplicationsPage = lazy(() => import('./pages/admin/AdminJobApplicationsPage'))
const AdminTasksPage = lazy(() => import('./pages/admin/AdminTasksPage'))
const AdminReportsPage = lazy(() => import('./pages/admin/AdminReportsPage'))
const AdminServicesPage = lazy(() => import('./pages/admin/AdminServicesPage'))
const AdminUsersPage = lazy(() => import('./pages/admin/AdminUsersPage'))
const AdminJobOpeningsPage = lazy(() => import('./pages/admin/AdminJobOpeningsPage'))
const AdminNewsPage = lazy(() => import('./pages/admin/AdminNewsPage'))
const AdminSettingsPage = lazy(() => import('./pages/admin/AdminSettingsPage'))

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])
  return null
}

// Loading fallback spinner
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        <p className="text-slate-500 text-xs font-semibold tracking-wide">Loading SMI Portal...</p>
      </div>
    </div>
  )
}

// Public Website Layout wrapper with Public Navbar and Footer
function PublicLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          {/* Public Website Routes */}
          <Route element={<PublicLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/software-services" element={<SoftwareServicesPage />} />
            <Route path="/marketing-services" element={<MarketingServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/our-work" element={<OurWorkPage />} />
            <Route path="/our-work/:slug" element={<ProjectDetailPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>

          {/* Standalone Authentication */}
          <Route path="/login" element={<LoginPage />} />

          {/* Admin Management Panel */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboardPage />} />
            <Route path="inquiries" element={<AdminInquiriesPage />} />
            <Route path="services" element={<AdminServicesPage />} />
            <Route path="projects" element={<AdminProjectsPage />} />
            <Route path="job-openings" element={<AdminJobOpeningsPage />} />
            <Route path="job-applications" element={<AdminJobApplicationsPage />} />
            <Route path="news" element={<AdminNewsPage />} />
            <Route path="users" element={<AdminUsersPage />} />
            <Route path="reports" element={<AdminReportsPage />} />
            <Route path="tasks" element={<AdminTasksPage />} />
            <Route path="settings" element={<AdminSettingsPage />} />
          </Route>

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}
