import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import { contactRouter } from './routes/contact.js'
import { errorHandler } from './middleware/errorHandler.js'

export function createApp() {
  const app = express()

  // ── Security middleware ──────────────────────────────────────────
  app.use(helmet())

  // ── CORS ────────────────────────────────────────────────────────
  const allowedOrigins = (process.env.CORS_ORIGIN || 'http://localhost:5173').split(',')
  app.use(cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g., Postman, curl)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error(`CORS: origin ${origin} not allowed`))
      }
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }))

  // ── Body parsing ─────────────────────────────────────────────────
  app.use(express.json({ limit: '10kb' }))
  app.use(express.urlencoded({ extended: true, limit: '10kb' }))

  // ── Rate limiting ─────────────────────────────────────────────────
  const globalLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
    message: { success: false, message: 'Too many requests. Please try again later.' },
  })
  app.use(globalLimiter)

  // ── Health check ──────────────────────────────────────────────────
  app.get('/api/health', (req, res) => {
    res.json({
      success: true,
      status: 'healthy',
      timestamp: new Date().toISOString(),
      service: 'Simple Marketing Ideas API',
    })
  })

  // ── Routes ────────────────────────────────────────────────────────
  app.use('/api/contact', contactRouter)

  // ── 404 handler ───────────────────────────────────────────────────
  app.use((req, res) => {
    res.status(404).json({ success: false, message: `Route ${req.method} ${req.originalUrl} not found` })
  })

  // ── Global error handler ──────────────────────────────────────────
  app.use(errorHandler)

  return app
}
