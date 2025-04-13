export default {
  async fetch(request, env, ctx) {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Content-Type': 'application/json'
		};

		if (request.method === 'OPTIONS') {
			return new Response(null, { status: 204, headers });
		}
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), { status: 405, headers });
    }

    try {
      const { name, email, projectType, message } = await request.json();

      const formData = new URLSearchParams();
      formData.append('from', 'Flat18 Contact Form <web-contact-form@mg.flat18.co.uk>');
      formData.append('to', 'hello.flat18.co.uk@sinaswee.com');
      formData.append('subject', `New contact form submission from ${name}`);
      formData.append('text', `
Name: ${name}
Email: ${email}
Project Type: ${projectType}

Message:
${message}
      `.trim());

      const res = await fetch(`https://api.eu.mailgun.net/v3/${env.MAILGUN_DOMAIN}/messages`, {
        method: 'POST',
        headers: {
          Authorization: `Basic ${btoa(`api:${env.MAILGUN_API_KEY}`)}`,
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: formData
      });

      if (!res.ok) {
        const error = await res.text();
        console.error('Mailgun failed:', error);
        return new Response(JSON.stringify({ error: 'Failed to send message' }), { status: 500, headers });
      }

      return new Response(JSON.stringify({ success: true }), { status: 200, headers });

    } catch (err) {
      console.error('Error:', err);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500, headers });
    }
  }
};
