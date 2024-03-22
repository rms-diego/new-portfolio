type Props = {
  title: string;
  techs: string[];
};

export function TechnologyList({ title, techs }: Props) {
  return (
    <div className="flex flex-col  w-1/4 min-h-1/4 border border-transparent shadow-xl border-opacity-10 p-4 md:w-[80vw] lg:min-w-[50vw] md:min-h-80 rounded-md gap-2">
      <p className="text-center font-bold text-xl">{title}</p>
      <ol className="flex flex-col flex-wrap ">
        {techs.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ol>
    </div>
  );
}
