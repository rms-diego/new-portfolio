'use client';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Input } from '../input';
import AOS from 'aos';

export function Contact({ ...rest }) {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [emailTitle, setEmailTitle] = useState<string>('');
  const [emailContent, setEmailContent] = useState<string>('');

  useEffect(() => {
    AOS.init({});
  }, []);

  function handleChangeName({ target }: ChangeEvent<HTMLInputElement>) {
    const { value } = target;
    setName(value);
  }

  function handleChangeEmail({ target }: ChangeEvent<HTMLInputElement>) {
    const { value } = target;
    setEmail(value);
  }

  function handleChangeEmailTitle({ target }: ChangeEvent<HTMLInputElement>) {
    const { value } = target;
    setEmailTitle(value);
  }

  function handleChangeEmailContent({
    target,
  }: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = target;
    setEmailContent(value);
  }

  async function handleSubmitMail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    await fetch('/api/mail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, emailTitle, emailContent }),
    });

    setName('');
    setEmail('');
    setEmailTitle('');
    setEmailContent('');
  }

  return (
    <section
      {...rest}
      className="bg-slate-100 text-black  tall:py-10 p-5 flex flex-col gap-10 xl:items-center"
    >
      <section
        className="flex flex-col gap-2 lg:px-0 "
        data-aos="fade-up"
      >
        <p className="text-center font-bold text-title-color text-4xl lg:text-center overflow-y-hidden">
          Fale comigo
        </p>

        <form
          onSubmit={handleSubmitMail}
          className="flex flex-col gap-4 borde  items-center xl:w-[55vw] "
        >
          <Input
            label="Seu nome"
            inputType="text"
            value={name}
            handleChange={handleChangeName}
          />

          <Input
            label="Seu Email"
            inputType="email"
            value={email}
            handleChange={handleChangeEmail}
          />

          <Input
            label="Titulo do email"
            inputType="text"
            value={emailTitle}
            handleChange={handleChangeEmailTitle}
          />

          <label className="flex flex-col w-[70%]">
            Conteúdo
            <textarea
              rows={7}
              className="resize-none flex-1 border border-black p-2"
              value={emailContent}
              onChange={handleChangeEmailContent}
              required
            />
          </label>

          <button className="border border-black py-5 bg-primary-color text-white rounded-md px-8">
            Enviar
          </button>
        </form>
      </section>
    </section>
  );
}
