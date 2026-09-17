import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import { body, validationResult } from 'express-validator'
import { handleContactSubmission } from '../controllers/contactController.js'

export const contactRouter = Router()

// Stricter rate limit for contact form
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  message: { success: false, message: 'Too many contact form submissions. Please try again after an hour.' },
  standardHeaders: true,
  legacyHeaders: false,
})

// Validation rules
const contactValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required.')
    .isLength({ max: 100 }).withMessage('Name must not exceed 100 characters.'),

  body('email')
    .trim()
    .notEmpty().withMessage('Email is required.')
    .isEmail().withMessage('Please provide a valid email address.')
    .normalizeEmail(),

  body('phone')
    .optional({ checkFalsy: true })
    .trim()
    .matches(/^[+\d\s\-().]{7,20}$/).withMessage('Please provide a valid phone number.'),

  body('company')
    .optional({ checkFalsy: true })
    .trim()
    .isLength({ max: 100 }).withMessage('Company name must not exceed 100 characters.'),

  body('service')
    .trim()
    .notEmpty().withMessage('Please select a service.'),

  body('message')
    .trim()
    .notEmpty().withMessage('Message is required.')
    .isLength({ min: 10 }).withMessage('Message must be at least 10 characters.')
    .isLength({ max: 2000 }).withMessage('Message must not exceed 2000 characters.'),
]

// POST /api/contact
contactRouter.post('/', contactLimiter, contactValidation, async (req, res, next) => {
  // Check validation results
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: 'Validation failed. Please check your input.',
      errors: errors.array().map((e) => ({ field: e.path, message: e.msg })),
    })
  }

  try {
    await handleContactSubmission(req, res)
  } catch (err) {
    next(err)
  }
})
