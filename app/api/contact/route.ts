import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, phone, industry, message } = body;

    // Validate required fields
    if (!name || !email || !company || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

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
          <li>Visit our <a href="https://profieldwork.com">website</a> to learn more about our features</li>
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
- Visit our website to learn more about our features: https://profieldwork.com

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