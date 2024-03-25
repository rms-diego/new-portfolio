'use client';
import Image from 'next/image';
import myImage from '@/assets/diego.jpg';
import { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

export function About({ ...rest }) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section
      {...rest}
      className="bg-slate-100 text-black  tall:py-10 p-10 flex flex-col gap-10 min-h-[50vh]"
    >
      <section
        className="flex flex-col gap-2 lg:px-0"
        data-aos="fade-right"
      >
        <h2 className="font-bold text-title-color text-4xl lg:text-center overflow-y-hidden">
          Sobre mim
        </h2>

        <section className="flex gap-5 items-center lg:flex-col">
          <Image
            alt="diego photo"
            src={myImage}
            width={400}
            height={400}
            className="rounded-xl"
          />

          <div className="flex flex-col gap-5 text-justify">
            <h3 className="font-bold text-title-color text-4xl text-center lg:text-2xl">
              Desenvolvedor fullstack
            </h3>

            <p className="md:tracking-tighter">
              Um desenvolvedor apaixonado por tecnologia. Venho explorando o
              mundo do desenvolvimento de software. Desde o frontend com React e
              Vue até o backend com Node.js e Java, estive estudando várias
              tecnologias, procurando sempre qualificar minha mão de obra. Estou
              sempre procurando por novos desafios e oportunidades para aprender
              e crescer. Além do trabalho, curto compartilhar o que sei através
              de comunidades open source, e adoro conhecer novas pessoas.
            </p>

            <p className="md:tracking-tighter">
              Um dos meus passatempos favoritos é a leitura de livros e mangás,
              além de maratonar filmes, séries e jogar. Tenho um interesse
              especial por temas como economia, filosofia e ficção em geral.
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}
