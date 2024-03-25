'use client';
import { ResumeCard } from '../resumeCard';
import { courses } from '@/utils/academicEducation';
import { professionalExperience } from '@/utils/professionalExperience';
import { useEffect } from 'react';
import AOS from 'aos';

export function Resume({ ...rest }) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section
      {...rest}
      className="bg-slate-100 text-black  tall:py-10 p-10 flex flex-col gap-10"
    >
      <section className="flex flex-col gap-4 lg:px-0">
        <div className="flex flex-col gap-4 lg:items-center">
          <h5 className="font-bold text-title-color text-4xl lg:text-center overflow-y-hidden">
            Currículo
          </h5>

          <p className="text-lg text-justify max-w-[65vw] lg:max-w-[80vw] md:tracking-tighter">
            Durante minhas experiencias profissionais adquiri uma sólida base
            teórica e prática em diversas áreas da computação, incluindo
            algoritmos, estruturas de dados, programação orientada a objetos e
            desenvolvimento de software. Ampliando meu conhecimento e
            habilidades em tecnologia da informação.
          </p>
        </div>

        <div className="flex flex-col justify-center gap-10">
          <ResumeCard
            resumeTitle="Experiência"
            contentList={professionalExperience}
            data-aos="fade-right"
          />

          <ResumeCard
            resumeTitle="Formação acadêmica"
            contentList={courses}
            data-aos="fade-left"
          />
        </div>
      </section>
    </section>
  );
}
