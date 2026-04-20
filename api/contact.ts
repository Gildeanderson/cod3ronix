import type { IncomingMessage, ServerResponse } from 'node:http';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: IncomingMessage & { body: any; headers: any }, res: ServerResponse & { status: (code: number) => any; json: (body: any) => void; setHeader: (name: string, value: string) => void }) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  // CORS
  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];
  const origin = req.headers.origin || '';
  if (allowedOrigins.length > 0 && allowedOrigins.indexOf(origin) === -1 && origin !== '') {
    return res.status(403).json({ success: false, error: 'Origem não autorizada' });
  }
  res.setHeader('Access-Control-Allow-Origin', origin || '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const { name, email, message } = req.body;

  // Input validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Todos os campos são obrigatórios' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'E-mail inválido' });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'Cod3ronix <onboarding@resend.dev>',
      to: ['cod3ronix@gmail.com'],
      subject: `Novo Contato: ${name}`,
      html: `
        <h2>Novo contato recebido pelo site</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error('Erro Resend:', error);
      return res.status(400).json({ success: false, error: 'Falha ao enviar e-mail' });
    }

    console.log('E-mail enviado:', data);
    return res.status(200).json({ success: true, message: 'Mensagem enviada com sucesso!' });
  } catch (err) {
    console.error('Erro no servidor:', err);
    return res.status(500).json({ success: false, error: 'Erro interno no servidor' });
  }
}
