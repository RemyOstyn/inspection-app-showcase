import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 'dummy-key-for-build');

interface RecaptchaVerificationResult {
  success: boolean;
  score: number;
  action: string;
  error?: string;
}

async function verifyRecaptcha(token: string, expectedAction: string = 'contact_form'): Promise<RecaptchaVerificationResult> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const scoreThreshold = parseFloat(process.env.RECAPTCHA_SCORE_THRESHOLD || '0.5');
  
  if (!secretKey) {
    console.error('RECAPTCHA_SECRET_KEY not configured');
    return { success: false, score: 0, action: expectedAction, error: 'Configuration error' };
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    
    if (!data.success) {
      console.error('reCAPTCHA verification failed:', data['error-codes']);
      return { success: false, score: 0, action: expectedAction, error: 'Verification failed' };
    }
    
    // Check if the action matches (important for v3)
    if (data.action !== expectedAction) {
      console.error(`reCAPTCHA action mismatch: expected ${expectedAction}, got ${data.action}`);
      return { success: false, score: data.score || 0, action: data.action, error: 'Action mismatch' };
    }
    
    // Check score threshold
    const score = data.score || 0;
    const success = score >= scoreThreshold;
    
    if (!success) {
      console.warn(`reCAPTCHA score too low: ${score} < ${scoreThreshold}`);
    }
    
    return { success, score, action: data.action, error: success ? undefined : 'Score too low' };
  } catch (error) {
    console.error('reCAPTCHA verification failed:', error);
    return { success: false, score: 0, action: expectedAction, error: 'Network error' };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, industry, message, recaptchaToken } = body;

    // Validate required fields
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA v3
    if (!recaptchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification required' },
        { status: 400 }
      );
    }

    const recaptchaResult = await verifyRecaptcha(recaptchaToken, 'contact_form');
    if (!recaptchaResult.success) {
      console.error('reCAPTCHA verification failed:', {
        score: recaptchaResult.score,
        action: recaptchaResult.action,
        error: recaptchaResult.error
      });
      
      return NextResponse.json(
        { 
          error: 'Security verification failed. Please try again.',
          details: process.env.NODE_ENV === 'development' ? {
            score: recaptchaResult.score,
            threshold: parseFloat(process.env.RECAPTCHA_SCORE_THRESHOLD || '0.5'),
            error: recaptchaResult.error
          } : undefined
        },
        { status: 400 }
      );
    }
    
    // Log successful verification for monitoring
    console.log('reCAPTCHA verification successful:', {
      score: recaptchaResult.score,
      action: recaptchaResult.action,
      company: company // for spam analysis
    });

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || 'ProFieldWork <hello@profieldwork.com>',
      to: process.env.EMAIL_TO || 'contact@profieldwork.com',
      replyTo: email,
      subject: `Demo Request from ${name} at ${company}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Industry:</strong> ${industry}</p>
        <br>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <br>
        <hr>
        <p style="font-size: 12px; color: #666;">
          This email was sent from the ProFieldWork website contact form.
        </p>
      `,
      text: `
New Demo Request

Name: ${name}
Email: ${email}
Company: ${company}
${phone ? `Phone: ${phone}` : ''}
Industry: ${industry}

Message:
${message}

---
This email was sent from the ProFieldWork website contact form.
      `,
    });

    if (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    // Send auto-response to the user
    await resend.emails.send({
      from: process.env.EMAIL_FROM || 'ProFieldWork <hello@profieldwork.com>',
      to: email,
      subject: 'Thank you for your interest in ProFieldWork',
      html: `
        <h2>Thank you for reaching out, ${name}!</h2>
        <p>We've received your demo request and will get back to you within 24 hours.</p>
        <p>In the meantime, feel free to:</p>
        <ul>
          <li><a href="${process.env.NEXT_PUBLIC_CALENDLY_LINK || 'https://calendly.com/profieldwork-demo'}">Schedule a call</a> at your convenience</li>
          <li>Visit our <a href="https://www.profieldwork.com">website</a> to learn more about our features</li>
        </ul>
        <p>We look forward to showing you how ProFieldWork can transform your field operations!</p>
        <br>
        <p>Best regards,<br>The ProFieldWork Team</p>
      `,
      text: `
Thank you for reaching out, ${name}!

We've received your demo request and will get back to you within 24 hours.

In the meantime, feel free to:
- Schedule a call at your convenience: ${process.env.NEXT_PUBLIC_CALENDLY_LINK || 'https://calendly.com/profieldwork-demo'}
- Visit our website to learn more about our features: https://www.profieldwork.com

We look forward to showing you how ProFieldWork can transform your field operations!

Best regards,
The ProFieldWork Team
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error in contact form submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}