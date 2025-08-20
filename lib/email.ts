// Email service utility for form notifications
// You can use any of these services: SendGrid, Resend, Nodemailer, etc.

export interface EmailData {
  to: string
  subject: string
  html: string
  from?: string
}

// Option 1: SendGrid (Recommended for production)
export async function sendEmailWithSendGrid(emailData: EmailData) {
  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: emailData.to }],
          },
        ],
        from: { email: emailData.from || process.env.FROM_EMAIL || 'noreply@causafoundation.com' },
        subject: emailData.subject,
        content: [
          {
            type: 'text/html',
            value: emailData.html,
          },
        ],
      }),
    })

    if (!response.ok) {
      throw new Error(`SendGrid error: ${response.statusText}`)
    }

    return { success: true }
  } catch (error) {
    console.error('SendGrid email error:', error)
    throw error
  }
}

// Option 2: Resend (Alternative email service)
export async function sendEmailWithResend(emailData: EmailData) {
  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: emailData.from || process.env.FROM_EMAIL || 'noreply@causafoundation.com',
        to: [emailData.to],
        subject: emailData.subject,
        html: emailData.html,
      }),
    })

    if (!response.ok) {
      throw new Error(`Resend error: ${response.statusText}`)
    }

    return { success: true }
  } catch (error) {
    console.error('Resend email error:', error)
    throw error
  }
}

// Option 3: Nodemailer (For custom SMTP)
export async function sendEmailWithNodemailer(emailData: EmailData) {
  // This would require server-side implementation
  // You'd need to install nodemailer and configure SMTP
  throw new Error('Nodemailer not implemented - requires server-side setup')
}

// Main email function - choose your preferred service
export async function sendEmailNotification(emailData: EmailData) {
  // Choose your preferred email service
  if (process.env.SENDGRID_API_KEY) {
    return await sendEmailWithSendGrid(emailData)
  } else if (process.env.RESEND_API_KEY) {
    return await sendEmailWithResend(emailData)
  } else {
    // Fallback to console log for development
    console.log('Email would be sent:', emailData)
    return { success: true, message: 'Email logged (no service configured)' }
  }
}

// Email templates
export const emailTemplates = {
  newApplication: (data: {
    name: string
    email: string
    specialty: string
    experience: string
    motivation: string
    contribution: string
    locale: string
  }) => ({
    subject: 'New Community Application - Causa Foundation',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">New Community Application</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Specialty:</strong> ${data.specialty}</p>
        <p><strong>Experience:</strong> ${data.experience}</p>
        <p><strong>Motivation:</strong> ${data.motivation}</p>
        <p><strong>Contribution:</strong> ${data.contribution}</p>
        <p><strong>Locale:</strong> ${data.locale}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        <hr style="margin: 20px 0;">
        <p style="color: #666; font-size: 12px;">
          This email was sent from the Causa Foundation contact form.
        </p>
      </div>
    `
  })
}
