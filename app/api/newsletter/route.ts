import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const subscriberSchema = z.object({
  email: z.string().email('Invalid email address'),
  source: z.string().optional().default('website'),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = subscriberSchema.parse(body);

    // Add subscriber to newsletter audience
    // Note: This requires setting up an audience in Resend dashboard
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    
    if (!audienceId) {
      console.error('RESEND_AUDIENCE_ID not configured');
      return NextResponse.json(
        { error: 'Newsletter service not configured' },
        { status: 500 }
      );
    }

    // Add contact to audience
    const { data: contact, error: contactError } = await resend.contacts.create({
      email,
      audienceId,
      firstName: '', // Optional - could be collected in form
      lastName: '',  // Optional - could be collected in form
    });

    if (contactError) {
      console.error('Error adding subscriber:', contactError);
      
      // Handle duplicate email case
      if (contactError.message?.includes('already exists')) {
        return NextResponse.json({
          success: true,
          message: 'You are already subscribed to our newsletter!'
        });
      }
      
      return NextResponse.json(
        { error: 'Failed to subscribe to newsletter' },
        { status: 500 }
      );
    }

    // Send welcome email
    const { error: emailError } = await resend.emails.send({
      from: 'ProFieldWork <noreply@profieldwork.com>',
      to: [email],
      subject: 'Welcome to ProFieldWork Newsletter!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #2563eb;">Welcome to ProFieldWork!</h1>
          <p>Thank you for subscribing to our newsletter. You'll receive the latest updates on:</p>
          <ul>
            <li>Offline-first technology innovations</li>
            <li>Field operations best practices</li>
            <li>Product announcements and features</li>
            <li>Industry insights and case studies</li>
          </ul>
          <p>Stay tuned for valuable content delivered right to your inbox!</p>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;" />
          <p style="color: #6b7280; font-size: 14px;">
            ProFieldWork - Transform your field operations with offline-first inspection software
          </p>
        </div>
      `,
    });

    if (emailError) {
      console.error('Error sending welcome email:', emailError);
      // Still count as successful subscription even if welcome email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter!',
      contactId: contact?.id
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}