import { NextResponse } from 'next/server'

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_PERSONAL_LIST_ID
const MAILCHIMP_DC = MAILCHIMP_API_KEY?.split('-').pop()

export async function POST(request: Request) {
  try {
    console.log('Environment:', {
      hasApiKey: !!MAILCHIMP_API_KEY,
      listId: MAILCHIMP_LIST_ID,
      dc: MAILCHIMP_DC
    })

    const { email } = await request.json()
    console.log('Request:', { email })
    
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_DC || !MAILCHIMP_LIST_ID) {
      console.log('Missing config:', { MAILCHIMP_API_KEY, MAILCHIMP_DC, MAILCHIMP_LIST_ID })
      return NextResponse.json(
        { error: 'Newsletter configuration missing' },
        { status: 500 }
      )
    }

    const response = await fetch(
      `https://${MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
      {
        method: 'POST',
        headers: {
          Authorization: `apikey ${MAILCHIMP_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email_address: email,
          status: 'subscribed',
          tags: ['website-signup']
        }),
      }
    )

    const data = await response.json()
    console.log('Mailchimp response:', data)

    if (!response.ok) {
      if (data.title === 'Member Exists') {
        return NextResponse.json(
          { error: "You're already subscribed!" },
          { status: 400 }
        )
      }
      throw new Error(data.detail || 'Failed to subscribe')
    }

    return NextResponse.json({ 
      success: true,
      message: 'Successfully subscribed to the newsletter!'
    })
  } catch (error) {
    console.error('Newsletter error:', error)
    return NextResponse.json(
      { error: 'Failed to subscribe. Please try again later.' },
      { status: 500 }
    )
  }
}