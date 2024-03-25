import { Resend } from 'resend';

export async function POST(request: Request) {
  const { name, email, emailTitle, emailContent } = await request.json();

  const { RESEND_API_KEY, EMAIL } = process.env;
  const resend = new Resend(RESEND_API_KEY!);

  const { error } = await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: [EMAIL!],
    subject: `Portfolio: ${name} - ${emailTitle}`,
    text: `${emailContent}\n\n Enviado por: ${email}`,
  });

  if (error) {
    const errorMessage = JSON.stringify(error);

    return new Response(errorMessage, { status: 400 });
  }

  return new Response(null, { status: 204 });
}
