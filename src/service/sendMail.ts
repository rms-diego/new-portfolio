import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';

type MailArgs = {
  name: string;
  email: string;
  emailTitle: string;
  emailContent: string;
};

export async function sendMail({
  name,
  email,
  emailTitle,
  emailContent,
}: MailArgs) {
  try {
    const { MAILER_SEND_TOKEN, EMAIL } = process.env;

    const mailerSend = new MailerSend({ apiKey: MAILER_SEND_TOKEN! });

    const sentFrom = new Sender('diego.brito@arrowdigital.group', name);

    const recipients = [new Recipient(EMAIL!, name)];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject(emailTitle)
      .setText(emailContent);

    await mailerSend.email.send(emailParams);
  } catch (error: any) {
    console.log(error);
  }
}
