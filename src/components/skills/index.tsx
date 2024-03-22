import { TechnologyList } from '../TechnologyList';

export function Skills({ ...rest }) {
  return (
    <section
      {...rest}
      className="bg-slate-100 text-black  tall:py-10 p-10 flex flex-col gap-10"
    >
      <section
        className="flex flex-col gap-4 lg:px-0"
        data-aos="fade-right"
      >
        <h4 className="font-bold text-title-color text-4xl lg:text-center">
          Tecnologias
        </h4>

        <div className="flex gap-5 lg:flex-col lg:items-center">
          <TechnologyList
            title="Front-End"
            techs={[
              'React',
              'React Native (expo)',
              'Next.js',
              'Zustand',
              'Redux',
              'Tailwind',
              'Scss',
            ]}
          />

          <TechnologyList
            title="Back-End"
            techs={[
              'Node.js',
              'Express',
              'Fastify',
              'Nest.js',
              'Prisma orm',
              'TypeORM',
              'Mongoose',
            ]}
          />

          <TechnologyList
            title="Cloud"
            techs={[
              'Vercel',
              'Heroku',
              'firebase',
              'supabase',
              'AWS EC2',
              'AWS S3',
              'AWS RDS',
            ]}
          />

          <TechnologyList
            title="Database"
            techs={['MySQL', 'Postgres', 'SQL lite', 'Mongo db', 'Redis']}
          />

          <TechnologyList
            title="Outros"
            techs={[
              'Typescript',
              'Imperative programming',
              'OOP programming',
              'SOLID',
              'Git',
              'Github',
              'Docker',
              'Linux',
            ]}
          />
        </div>
      </section>
    </section>
  );
}
