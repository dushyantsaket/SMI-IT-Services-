/**
 * Centralized error handler middleware.
 * Must be the last middleware registered in app.js.
 */
export function errorHandler(err, req, res, next) {
  const isProduction = process.env.NODE_ENV === 'production'

  // Log error details in development
  if (!isProduction) {
    console.error('❌ Error:', err.message)
    if (err.stack) console.error(err.stack)
  } else {
    // Log structured error in production without exposing stack
    console.error(JSON.stringify({
      message: err.message,
      url: req.originalUrl,
      method: req.method,
      timestamp: new Date().toISOString(),
    }))
  }

  // Determine status code
  const statusCode = err.statusCode || err.status || 500

  return res.status(statusCode).json({
    success: false,
    message: isProduction
      ? 'An internal server error occurred. Please try again later.'
      : err.message,
    // Never expose stack trace in production
    ...(isProduction ? {} : { stack: err.stack }),
  })
}
