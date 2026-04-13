import Mailgun from 'mailgun.js';
import FormData from 'form-data';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function getMailgun() {
  const key = process.env.MAILGUN_API_KEY;
  const domain = process.env.MAILGUN_DOMAIN;
  const from = process.env.MAILGUN_FROM;
  const to = process.env.MAILGUN_TO;
  if (!key || !domain || !from || !to) throw new Error('Mailgun env vars are not set');
  const mailgun = new Mailgun(FormData);
  return {
    mg: mailgun.client({ username: 'api', key }),
    domain,
    from,
    to,
  };
}

export async function POST(req: Request) {
  const { mg, domain, from, to } = getMailgun();

  const contentType = req.headers.get('content-type') || '';
  if (!contentType.includes('multipart/form-data')) {
    return new Response(JSON.stringify({ success: false, error: 'Expected multipart/form-data' }), { status: 400 });
  }

  const body = await req.formData();
  const email = body.get('email') || 'unknown@user';
  const message = body.get('message') || '';
  const files = body.getAll('files') as File[];

  const attachments = await Promise.all(
    files.map(async file => {
      const buffer = Buffer.from(await file.arrayBuffer());
      return { filename: file.name, data: buffer, contentType: file.type };
    })
  );

  try {
    const result = await mg.messages.create(domain, {
      from,
      to: [to],
      subject: '🛠️ New Issue Reported',
      text: `From: ${email}\n\nMessage:\n${message}`,
      ...(attachments.length ? { attachment: attachments } : {}),
    });

    return new Response(JSON.stringify({ success: true, data: result }), { status: 200 });
  } catch (error: any) {
    console.error('Mailgun error:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}
