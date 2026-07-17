import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)

  if (!body?.email) {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  const { email, username, gamerTag } = body

  console.log('[waitlist]', { email, username, gamerTag })

  if (process.env.RESEND_API_KEY) {
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'KultVibe <noreply@kultvibe.gg>',
        to: [email],
        subject: "You're on the KultVibe waitlist",
        html: `<p>Hey ${username || 'there'},</p><p>You're in. We'll reach out when Season 1 goes live.</p><p>— KultVibe</p>`,
      }),
    }).catch(() => null)
  }

  return NextResponse.json({ success: true })
}
