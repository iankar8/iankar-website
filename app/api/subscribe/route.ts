import { NextResponse } from 'next/server'

const MAILCHIMP_API_KEY = process.env.MAILCHIMP_API_KEY
const MAILCHIMP_LIST_ID = process.env.MAILCHIMP_PERSONAL_LIST_ID
const MAILCHIMP_DC = MAILCHIMP_API_KEY?.split('-').pop()

export async function POST(request: Request) {
  try {
    console.log('Newsletter subscription request received')
    const { email } = await request.json()
    console.log('Email:', email)
    
    if (!email || !email.includes('@')) {
      console.log('Invalid email format')
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    if (!MAILCHIMP_API_KEY || !MAILCHIMP_DC || !MAILCHIMP_LIST_ID) {
      console.error('Missing Mailchimp configuration:', {
        hasApiKey: !!MAILCHIMP_API_KEY,
        hasListId: !!MAILCHIMP_LIST_ID,
        hasDc: !!MAILCHIMP_DC
      })
      return NextResponse.json(
        { error: 'Newsletter configuration missing' },
        { status: 500 }
      )
    }

    console.log('Making request to Mailchimp API')
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
    console.log('Mailchimp response:', {
      status: response.status,
      ok: response.ok,
      data: data
    })

    if (!response.ok) {
      if (data.title === 'Member Exists') {
        console.log('Member already exists')
        return NextResponse.json(
          { error: "You're already subscribed!" },
          { status: 400 }
        )
      }
      if (data.detail?.includes('looks fake or invalid')) {
        console.log('Email looks fake or invalid')
        return NextResponse.json(
          { error: 'Please enter a valid email address' },
          { status: 400 }
        )
      }
      console.error('Mailchimp error:', data)
      throw new Error(data.detail || 'Failed to subscribe')
    }

    console.log('Successfully subscribed to newsletter')
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
