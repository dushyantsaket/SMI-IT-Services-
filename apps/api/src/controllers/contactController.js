import nodemailer from 'nodemailer'

/**
 * Creates a Nodemailer transporter from environment variables.
 * Returns null if SMTP credentials are not configured.
 */
function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) {
    return null
  }
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: parseInt(SMTP_PORT || '587', 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASSWORD,
    },
  })
}

/**
 * Handles the contact form submission.
 * If SMTP is configured, sends an email notification.
 * Otherwise, logs the submission and returns a configuration error.
 */
export async function handleContactSubmission(req, res) {
  const { name, email, phone, company, service, message } = req.body

  const transporter = createTransporter()

  if (!transporter) {
    // Log the submission even without email — useful during development
    console.log('📩 Contact form submission (email not configured):', {
      name, email, phone: phone || '—', company: company || '—', service, timestamp: new Date().toISOString(),
    })

    return res.status(503).json({
      success: false,
      message: 'Email service is not configured on this server. Please contact us directly at info@simplemarketingideas.com or call +91 8085953085.',
    })
  }

  // Build email HTML
  const emailHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: linear-gradient(135deg, #7c3aed, #2563eb); padding: 24px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">New Contact Form Submission</h1>
        <p style="color: rgba(255,255,255,0.8); margin: 4px 0 0;">Simple Marketing Ideas Website</p>
      </div>
      <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 120px;">Name:</td>
            <td style="padding: 8px 0; color: #111827;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
            <td style="padding: 8px 0; color: #111827;"><a href="mailto:${email}" style="color: #7c3aed;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
            <td style="padding: 8px 0; color: #111827;">${phone || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Company:</td>
            <td style="padding: 8px 0; color: #111827;">${company || '—'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold; color: #374151;">Service:</td>
            <td style="padding: 8px 0; color: #111827;">${service}</td>
          </tr>
        </table>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 16px 0;" />
        <h3 style="margin: 0 0 8px; color: #374151;">Message:</h3>
        <p style="color: #111827; white-space: pre-wrap; background: white; padding: 12px; border-radius: 8px; border: 1px solid #e5e7eb;">${message}</p>
        <p style="color: #9ca3af; font-size: 12px; margin-top: 16px;">Submitted: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST</p>
      </div>
    </div>
  `

  // Send notification to company
  await transporter.sendMail({
    from: `"SMI Website" <${process.env.EMAIL_FROM}>`,
    to: process.env.EMAIL_TO || 'info@simplemarketingideas.com',
    replyTo: email,
    subject: `New Inquiry from ${name} — ${service}`,
    html: emailHtml,
  })

  // Send auto-reply to user
  await transporter.sendMail({
    from: `"Simple Marketing Ideas" <${process.env.EMAIL_FROM}>`,
    to: email,
    subject: 'We received your message! — Simple Marketing Ideas',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #7c3aed, #2563eb); padding: 24px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 20px;">Thank You, ${name}!</h1>
        </div>
        <div style="background: #f9fafb; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e5e7eb;">
          <p>We've received your inquiry about <strong>${service}</strong> and our team will get back to you within <strong>24 hours</strong>.</p>
          <p>In the meantime, feel free to:</p>
          <ul>
            <li>Call us at <a href="tel:+918085953085" style="color: #7c3aed;">+91 8085953085</a></li>
            <li>Email us at <a href="mailto:info@simplemarketingideas.com" style="color: #7c3aed;">info@simplemarketingideas.com</a></li>
          </ul>
          <p style="color: #9ca3af; font-size: 12px; margin-top: 24px;">
            Simple Marketing Ideas<br>
            34 Pink City, First Phase, Vijay Nagar, Indore, MP 452010
          </p>
        </div>
      </div>
    `,
  })

  console.log(`✅ Contact form processed: ${name} <${email}> — ${service}`)

  return res.status(200).json({
    success: true,
    message: 'Your message has been sent successfully! We will get back to you within 24 hours.',
  })
}
