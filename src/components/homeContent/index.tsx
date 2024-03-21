import Image from 'next/image';
import React from 'react';

import mainImage from '@/assets/main-image.svg';

export default function HomeContent({ ...rest }) {
  return (
    <section
      {...rest}
      className="bg-primary-color text-black min-h-[100vh] flex justify-center items-center tall:py-10"
    >
      <div className="flex flex-col text-white w-1/2 gap-4 items-center animate__animated animate__flash">
        <Image
          width={350}
          height={350}
          alt="image"
          src={mainImage}
        />

        <h1
          className="font-bold text-4xl  md:text-2xl text-[#149ddd] text-center"
          data-aos="fade-right"
        >
          Bem vindo(a) ! 👋
        </h1>
        <p className="text-xl text-justify md:text-lg">
          Bem-vindo ao meu portfólio! Sou Diego Ramos, um desenvolvedor
          apaixonado por aprender e por tecnologia. Estar procurando novos
          desafios são o que me motiva, principalmente se for necessário
          aprender algo novo para solucioná-los.
        </p>
      </div>
    </section>
  );
}
