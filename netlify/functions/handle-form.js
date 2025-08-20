exports.handler = async function(event, context) {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  try {
    // Parse form data
    const formData = new URLSearchParams(event.body)
    
    // Extract form fields
    const name = formData.get('name')
    const email = formData.get('email')
    const specialty = formData.get('specialty')
    const experience = formData.get('experience')
    const motivation = formData.get('motivation')
    const contribution = formData.get('contribution')
    const submittedAt = formData.get('submitted_at') || new Date().toISOString()
    const locale = formData.get('locale') || 'en'

    // Log the submission
    console.log('🎉 Form submission received:', {
      name,
      email,
      specialty,
      experience,
      motivation,
      contribution,
      submittedAt,
      locale
    })

    // Return success response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({
        success: true,
        message: 'Form submitted successfully',
        timestamp: new Date().toISOString()
      })
    }

  } catch (error) {
    console.error('❌ Form submission error:', error)
    
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type'
      },
      body: JSON.stringify({
        error: 'Internal server error',
        message: error.message
      })
    }
  }
}
