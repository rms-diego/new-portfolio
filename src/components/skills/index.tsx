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
        <h4 className="font-bold text-title-color text-4xl lg:text-center overflow-y-hidden">
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
              'Spring',
              'Node.js',
              'Express',
              'Fastify',
              'Nest.js',
              'Spring data JPA',
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
              'Imperative programming',
              'OOP programming',
              'Typescript',
              'Vitest | Jest | Mocha and Chai',
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
