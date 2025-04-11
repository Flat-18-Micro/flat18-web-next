import formData from 'form-data';
import Mailgun from 'mailgun.js';

export async function POST(req) {
  try {
    const { name, email, projectType, message } = await req.json();

    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY,
    });

    const domain = process.env.MAILGUN_DOMAIN;

    await mg.messages.create(domain, {
      from: `Flat18 Contact Form <hello@flat18.co.uk>`,
      to: ['web-contact-form@flat18.co.uk'],
      subject: `New contact form submission from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Project Type: ${projectType}

Message:
${message}
      `.trim()
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Mailgun error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), { status: 500 });
  }
}