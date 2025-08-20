import { NextRequest, NextResponse } from 'next/server'
import { sendEmailNotification, emailTemplates } from '@/lib/email'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, specialty, experience, motivation, contribution, locale } = body

    // Validate required fields
    if (!name || !email || !specialty || !experience || !motivation || !contribution) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Log the submission
    console.log('🎉 New form submission received:', {
      name,
      email,
      specialty,
      experience,
      motivation,
      contribution,
      locale,
      submittedAt: new Date().toISOString()
    })

    // Send email notification if configured
    if (process.env.SENDGRID_API_KEY || process.env.RESEND_API_KEY) {
      try {
        const emailTemplate = emailTemplates.newApplication({
          name,
          email,
          specialty,
          experience,
          motivation,
          contribution,
          locale
        })

        await sendEmailNotification({
          to: process.env.NOTIFICATION_EMAIL || 'admin@causafoundation.com',
          subject: emailTemplate.subject,
          html: emailTemplate.html
        })

        console.log('✅ Email notification sent successfully')
      } catch (emailError) {
        console.error('❌ Failed to send email notification:', emailError)
        // Don't fail the form submission if email fails
      }
    }

    // TODO: Add database storage here if needed
    // Example with Supabase:
    // const { data, error } = await supabase
    //   .from('applications')
    //   .insert([{
    //     name,
    //     email,
    //     specialty,
    //     experience,
    //     motivation,
    //     contribution,
    //     locale,
    //     submitted_at: new Date().toISOString()
    //   }])

    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully',
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Form submission error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
