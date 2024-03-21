import Image from 'next/image';
import myImage from '@/assets/diego.jpg';

export function About({ ...rest }) {
  return (
    <section
      {...rest}
      className="bg-slate-100 text-black  tall:py-10 p-14 flex flex-col gap-10 min-h-[50vh]"
    >
      <section className="px-9 flex flex-col gap-2 lg:px-0">
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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
              quo quis perferendis distinctio recusandae quia magnam ut,
              voluptas facilis laborum ipsam ipsa ad itaque est, optio eum! Ea,
              voluptatibus beatae. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Porro quos placeat reprehenderit deleniti iure
              assumenda sapiente totam voluptates expedita maxime, qui, sed
              earum debitis minus doloremque. In veniam eius delectus.
            </p>
          </div>
        </section>
      </section>
    </section>
  );
}
