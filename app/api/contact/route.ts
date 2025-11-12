import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Initialize Resend with API key from environment variables
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await request.json();
    const { name, email, projectType, timeline, message } = body;

    // Validate required fields
    if (!name || !email || !projectType || !timeline || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      // For now, just log the form submission and return success
      console.log('Form submission:', { name, email, projectType, timeline, message });
      return NextResponse.json(
        { message: 'Message received! I will contact you soon at ' + email },
        { status: 200 }
      );
    }

    // Format project type for display
    const projectTypeDisplay = projectType.split('-').map((word: string) =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');

    // Format timeline for display
    const timelineDisplay = timeline.split('-').map((word: string) =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');

    // Send email using Resend
    const fromEmail = process.env.FROM_EMAIL || 'onboarding@resend.dev';
    const data = await resend.emails.send({
      from: `Portfolio Contact Form <${fromEmail}>`,
      to: [process.env.CONTACT_EMAIL || 'abhay473165@gmail.com'],
      replyTo: email,
      subject: `New Project Inquiry: ${projectTypeDisplay}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Project Inquiry</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
              <h1 style="color: white; margin: 0; font-size: 24px;">🎯 New Project Inquiry</h1>
            </div>

            <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e5e7eb;">
              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #667eea;">
                <h2 style="margin-top: 0; color: #1f2937; font-size: 18px;">Contact Details</h2>
                <p style="margin: 10px 0;"><strong style="color: #4b5563;">Name:</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong style="color: #4b5563;">Email:</strong> <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">${email}</a></p>
              </div>

              <div style="background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; border-left: 4px solid #8b5cf6;">
                <h2 style="margin-top: 0; color: #1f2937; font-size: 18px;">Project Details</h2>
                <p style="margin: 10px 0;"><strong style="color: #4b5563;">Project Type:</strong> ${projectTypeDisplay}</p>
                <p style="margin: 10px 0;"><strong style="color: #4b5563;">Timeline:</strong> ${timelineDisplay}</p>
              </div>

              <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #764ba2;">
                <h2 style="margin-top: 0; color: #1f2937; font-size: 18px;">Message</h2>
                <p style="white-space: pre-wrap; color: #374151; line-height: 1.6;">${message}</p>
              </div>

              <div style="margin-top: 20px; padding: 15px; background: #eff6ff; border-radius: 8px; border: 1px solid #bfdbfe;">
                <p style="margin: 0; font-size: 14px; color: #1e40af;">
                  <strong>💡 Quick Reply:</strong> You can reply directly to this email to respond to ${name}.
                </p>
              </div>
            </div>

            <div style="margin-top: 20px; text-align: center; color: #6b7280; font-size: 12px;">
              <p>This email was sent from your portfolio contact form</p>
            </div>
          </body>
        </html>
      `,
      text: `
New Project Inquiry

Contact Details:
Name: ${name}
Email: ${email}

Project Details:
Project Type: ${projectTypeDisplay}
Timeline: ${timelineDisplay}

Message:
${message}

---
Reply directly to this email to respond to ${name}.
      `,
    });

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again or contact directly at abhay473165@gmail.com' },
      { status: 500 }
    );
  }
}
