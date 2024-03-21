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
      className="bg-slate-100 text-black  tall:py-10 p-14 flex flex-col gap-10 min-h-[50vh]"
    >
      <section
        className="px-9 flex flex-col gap-2 lg:px-0"
        data-aos="fade-right"
      >
        <h1 className="font-bold text-title-color text-4xl lg:text-center">
          Sobre mim
        </h1>

        <section className="flex gap-5 items-center lg:flex-col">
          <Image
            alt="diego photo"
            src={myImage}
            width={400}
            height={400}
            className="rounded-xl"
          />

          <div className="flex flex-col gap-5 text-justify">
            <h2 className="font-bold text-title-color text-4xl text-center lg:text-2xl">
              Desenvolvedor fullstack
            </h2>

            <p>
              Olá! Sou Diego Ramos, um Desenvolvedor fullstack apaixonado por
              tecnologia. Com mais de 3 anos de experiência na área, venho
              explorando o mundo do desenvolvimento de software. Desde o
              frontend com React e Vue até o backend com Node.js e Java, estive
              brincando com várias tecnologias e descobrindo maneiras de criar
              soluções usando a tecnologia. Estou sempre procurando por novos
              desafios e oportunidades para aprender e crescer. Além do
              trabalho, curto compartilhar o que sei através de comunidades open
              source, e adoro conhecer novas pessoas.
            </p>

            <p>
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
