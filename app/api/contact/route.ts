import { NextRequest, NextResponse } from 'next/server';

// Vercel Serverless Function for Contact Form
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Email content
    const emailContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="UTF-8">
        <title>New Contact Form Submission</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #991b1b, #7c2d12); color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 20px; border: 1px solid #ddd; border-radius: 0 0 10px 10px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #991b1b; margin-bottom: 5px; display: block; }
          .value { background: white; padding: 10px; border-radius: 5px; border: 1px solid #eee; }
          .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
          .badge { display: inline-block; background: #991b1b; color: white; padding: 5px 10px; border-radius: 5px; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>📬 New Contact Form Submission</h2>
            <p>EastFront PK - Contact Form</p>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">👤 Name:</div>
              <div class="value">${name}</div>
            </div>
            <div class="field">
              <div class="label">📧 Email:</div>
              <div class="value">${email}</div>
            </div>
            <div class="field">
              <div class="label">📞 Phone:</div>
              <div class="value">${phone || 'Not provided'}</div>
            </div>
            <div class="field">
              <div class="label">📋 Subject:</div>
              <div class="value">${subject || 'General Inquiry'}</div>
            </div>
            <div class="field">
              <div class="label">💬 Message:</div>
              <div class="value">${message.replace(/\n/g, '<br>')}</div>
            </div>
          </div>
          <div class="footer">
            <p>This message was sent from the EastFront PK website contact form.</p>
            <p>📅 ${new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const textContent = `
      New Contact Form Submission
      =========================
      
      Name: ${name}
      Email: ${email}
      Phone: ${phone || 'Not provided'}
      Subject: ${subject || 'General Inquiry'}
      
      Message:
      ${message}
      
      ----------------------------------------
      Sent from EastFront PK Website
      Date: ${new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}
    `;

    // Send email using Resend (free tier)
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is not configured');
      // For development, return success without sending email
      if (process.env.NODE_ENV === 'development') {
        console.log('Email would be sent to: eastfront13@gmail.com, info@eastfront.pk');
        console.log('Form Data:', { name, email, phone, subject, message });
        return NextResponse.json(
          { success: true, message: 'Form submitted successfully (development mode)' },
          { status: 200 }
        );
      }
      
      return NextResponse.json(
        { error: 'Email service not configured. Please contact admin.' },
        { status: 500 }
      );
    }

    // Send email using Resend API
    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'EastFront PK <noreply@eastfront.pk>',
        to: ['eastfront13@gmail.com', 'info@eastfront.pk'],
        subject: `New Contact Form: ${subject || 'General Inquiry'} from ${name}`,
        html: emailContent,
        text: textContent,
        reply_to: email,
      }),
    });

    if (!resendResponse.ok) {
      const error = await resendResponse.text();
      console.error('Resend API error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    const data = await resendResponse.json();
    console.log('Email sent successfully:', data);

    return NextResponse.json(
      { success: true, message: 'Message sent successfully!' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error. Please try again.' },
      { status: 500 }
    );
  }
}