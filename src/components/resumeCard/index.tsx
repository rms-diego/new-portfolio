type Props = {
  resumeTitle: string;
  contentList: Array<{
    title: string;
    description?: string;
    duration?: string;
    technologies?: Array<string>;
  }>;
};

export function ResumeCard({ resumeTitle, contentList, ...rest }: Props) {
  return (
    <div
      {...rest}
      className="flex flex-col gap-1"
    >
      <p className="text-2xl font-bold text-title-color lg:text-center">
        {resumeTitle}
      </p>

      <ul className="flex flex-wrap lg:flex-col xl:flex-row">
        {contentList.map(({ title, duration, description, technologies }) => (
          <li
            key={title}
            className="border-transparent shadow-xl border-opacity-10 p-5 flex flex-col md:w-[80vw] xl:w-[50%] gap-4"
          >
            <p className="text-xl font-bold md:text-base">{title}</p>
            <p>Duração: {duration}</p>

            <p className="text-justify md:tracking-tighter">
              {description && `Descrição: ${description}`}
            </p>

            {technologies?.length && (
              <div className="flex flex-col">
                <p className="font-bold">Tecnologias usadas</p>
                <ul className="flex flex-wrap md:flex-col flex-1">
                  {technologies.map((technology) => (
                    <li
                      key={technology}
                      className="w-[50%] md:tracking-tighter"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
