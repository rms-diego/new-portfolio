import Image from 'next/image';
import React from 'react';

import mainImage from '@/assets/main-image.svg';

export default function HomeContent({ ...rest }) {
  return (
    <section
      {...rest}
      className="bg-primary-color text-black h-[100vh] flex justify-center items-center"
    >
      <div className="flex flex-col text-white w-1/2 gap-4 items-center animate__animated animate__flash">
        <Image
          width={350}
          height={350}
          alt="image"
          src={mainImage}
        />

        <h1
          className="font-bold text-4xl text-[#149ddd] aos-init aos-animate"
          data-aos="fade-right"
        >
          Bem vindo(a) ! 👋
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
          consectetur quos labore quo eligendi? Consequatur dolore laudantium,
          soluta quisquam obcaecati maxime atque id dicta a impedit corporis
          reprehenderit facere veniam.
        </p>
      </div>
    </section>
  );
}
