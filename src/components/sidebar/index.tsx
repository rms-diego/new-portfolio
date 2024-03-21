import myImage from '@/assets/diego.jpg';
import Image from 'next/image';
import Link from 'next/link';

import {
  GithubLogo,
  LinkedinLogo,
  WhatsappLogo,
  Envelope,
  House,
  User,
  ReadCvLogo,
} from '@phosphor-icons/react/dist/ssr';

export default function Sidebar() {
  return (
    <aside className="flex flex-col justify-between p-4 bg-primary-color h-[100vh] w-[18.75rem] fixed">
      <section className="flex flex-col items-center gap-5">
        <div className="flex flex-col items-center gap-3">
          <Link
            href="/"
            className="hover:opacity-70 transition duration-500"
          >
            <Image
              src={myImage}
              alt="Diego photo"
              width={150}
              height={150}
              className="border border-border-image rounded-[50%] border-x-8 border-y-8"
            />
          </Link>
          <p className="font-bold text-white text-2xl">Diego Ramos</p>
        </div>

        <div className="text-white flex gap-2">
          <Link
            href="https://github.com/rms-diego"
            target="_blank"
            className="bg-[#2c2f3f] rounded-full bg-clip-padding-box p-1 hover:bg-background-icons transition duration-500"
          >
            <GithubLogo
              width={25}
              height={25}
            />
          </Link>

          <Link
            href="https://www.linkedin.com/in/diego-rbrito/"
            target="_blank"
            className="bg-[#2c2f3f] rounded-full bg-clip-padding-box p-1 hover:bg-background-icons transition duration-500"
          >
            <LinkedinLogo
              width={25}
              height={25}
            />
          </Link>

          <Link
            href="https://api.whatsapp.com/send?phone=5571993804648"
            target="_blank"
            className="bg-[#2c2f3f] rounded-full bg-clip-padding-box p-1 hover:bg-background-icons transition duration-500"
          >
            <WhatsappLogo
              width={25}
              height={25}
            />
          </Link>

          <Link
            href="#"
            className="bg-[#2c2f3f] rounded-full bg-clip-padding-box p-1 hover:bg-background-icons transition duration-500"
          >
            <Envelope
              width={25}
              height={25}
            />
          </Link>
        </div>

        <nav className="text-white flex flex-col self-start justify-between">
          <Link
            href="#"
            className="flex items-center gap-1 font-bold p-1 text-xl hover:text-blue-500 transition duration-500"
          >
            <House /> Home
          </Link>

          <Link
            href="#"
            className="flex items-center gap-1 font-bold p-1 text-xl hover:text-blue-500 transition duration-500"
          >
            <User /> Sobre mim
          </Link>

          <Link
            href="#"
            className="flex items-center gap-1 font-bold p-1 text-xl hover:text-blue-500 transition duration-500"
          >
            <ReadCvLogo /> Currículo
          </Link>

          <Link
            href="#"
            className="flex items-center gap-1 font-bold p-1 text-xl hover:text-blue-500 transition duration-500"
          >
            <Envelope /> Contato
          </Link>
        </nav>
      </section>

      <div className="self-center text-white flex flex-col items-center">
        <p>Desenvolvido por: rms-diego</p>
        <p>© Copyright Diego Ramos</p>
      </div>
    </aside>
  );
}
