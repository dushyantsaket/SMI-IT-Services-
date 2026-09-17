import 'dotenv/config'
import { createApp } from './app.js'

const PORT = parseInt(process.env.API_PORT || '4000', 10)
const app = createApp()

const server = app.listen(PORT, () => {
  console.log(`✅ Simple Marketing Ideas API running on http://localhost:${PORT}`)
  console.log(`   Environment: ${process.env.NODE_ENV || 'development'}`)
  console.log(`   Health check: http://localhost:${PORT}/api/health`)
})

// Graceful shutdown
function shutdown(signal) {
  console.log(`\n🛑 Received ${signal}. Shutting down gracefully...`)
  server.close(() => {
    console.log('Server closed.')
    process.exit(0)
  })
  setTimeout(() => {
    console.error('Forced shutdown after timeout.')
    process.exit(1)
  }, 10_000)
}

process.on('SIGTERM', () => shutdown('SIGTERM'))
process.on('SIGINT', () => shutdown('SIGINT'))
process.on('uncaughtException', (err) => {
  console.error('Uncaught exception:', err)
  process.exit(1)
})
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled rejection:', reason)
  process.exit(1)
})
