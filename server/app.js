import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import nodemailer from 'nodemailer'
import rateLimit from 'express-rate-limit'

const app = express()
const port = Number(process.env.PORT || 4000)

app.disable('x-powered-by')
app.use(helmet())
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173', methods: ['GET', 'POST'] }))
app.use(express.json({ limit: '20kb' }))

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 5,
  standardHeaders: 'draft-7',
  legacyHeaders: false,
  message: { error: 'Too many messages have been submitted. Please try again later.' },
})

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'portfolio-api' }))

app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, subject, message, website = '' } = req.body ?? {}
  if (typeof website === 'string' && website.trim() !== '') {
    return res.status(400).json({ error: 'Invalid submission.' })
  }

  const cleanName = typeof name === 'string' ? name.trim() : ''
  const cleanEmail = typeof email === 'string' ? email.trim() : ''
  const cleanSubject = typeof subject === 'string' ? subject.trim() : ''
  const cleanMessage = typeof message === 'string' ? message.trim() : ''

  if (cleanName.length < 2 || cleanName.length > 100)
    return res.status(400).json({ error: 'Please enter a name between 2 and 100 characters.' })
  if (cleanEmail.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail))
    return res.status(400).json({ error: 'Please enter a valid email address.' })
  if (cleanSubject.length < 3 || cleanSubject.length > 150)
    return res.status(400).json({ error: 'Please enter a subject between 3 and 150 characters.' })
  if (cleanMessage.length < 10 || cleanMessage.length > 5000)
    return res.status(400).json({ error: 'Your message must be between 10 and 5000 characters.' })

  const { SMTP_HOST, SMTP_PORT, SMTP_SECURE, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !CONTACT_TO || !CONTACT_FROM) {
    console.error('Contact API called without complete SMTP configuration.')
    return res.status(503).json({ error: 'The contact service is not configured yet. Please try again later or contact me through LinkedIn.' })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST, port: Number(SMTP_PORT || 587),
      secure: String(SMTP_SECURE).toLowerCase() === 'true',
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })
    await transporter.sendMail({
      from: CONTACT_FROM, to: CONTACT_TO,
      replyTo: { name: cleanName, address: cleanEmail },
      subject: `[Portfolio] ${cleanSubject}`,
      text: `New portfolio enquiry\n\nName: ${cleanName}\nEmail: ${cleanEmail}\nSubject: ${cleanSubject}\n\nMessage:\n${cleanMessage}`,
    })
    return res.status(200).json({ message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Contact email delivery failed:', error?.message || 'Unknown SMTP error')
    return res.status(502).json({ error: 'Email delivery failed. Please try again later.' })
  }
})

app.use((err, _req, res, _next) => {
  if (err instanceof SyntaxError && 'body' in err) return res.status(400).json({ error: 'Invalid JSON request body.' })
  console.error('Unhandled API error:', err?.message || err)
  return res.status(500).json({ error: 'An unexpected server error occurred.' })
})
app.listen(port, () => console.log(`Portfolio API listening on http://localhost:${port}`))
