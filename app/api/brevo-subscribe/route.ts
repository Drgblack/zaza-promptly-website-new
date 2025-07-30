import { NextRequest, NextResponse } from 'next/server'
import { BREVO_CONFIG } from '@/lib/brevo-config'

export async function POST(request: NextRequest) {
  try {
    const { email, listId } = await request.json()

    if (!email || !listId) {
      return NextResponse.json(
        { error: 'Email and listId are required' },
        { status: 400 }
      )
    }

    if (!BREVO_CONFIG.API_KEY) {
      console.error('BREVO_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Brevo API key not configured' },
        { status: 500 }
      )
    }

    // Add contact to Brevo list using API
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': BREVO_CONFIG.API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [parseInt(listId)],
        updateEnabled: true,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Brevo API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to subscribe to email list' },
        { status: response.status }
      )
    }

    const data = await response.json()
    console.log('Brevo subscription successful:', data)

    return NextResponse.json(
      { success: true, message: 'Successfully subscribed to email list' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Brevo subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 