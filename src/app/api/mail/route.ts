import { sendMail } from '@/service/sendMail';
export async function POST(request: Request) {
  const { name, email, emailTitle, emailContent } = await request.json();

  await sendMail({ name, email, emailTitle, emailContent });

  return new Response(null, { status: 204 });
}
