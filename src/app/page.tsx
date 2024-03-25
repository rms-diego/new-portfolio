import { Sidebar } from '@/components/sidebar';
import { HomeContent } from '@/components/homeContent';
import { About } from '@/components/about';
import { Skills } from '@/components/skills';
import { Resume } from '@/components/resume';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <main className="flex w-[100vw]">
      <Sidebar />

      <section className="flex-1 ml-[18.75rem] md:ml-0 tall:ml-0 overflow-x-hidden">
        <HomeContent id="home" />
        <About id="about" />
        <hr className="border border-title-color opacity-30" />

        <Skills />
        <hr className="border border-title-color opacity-30" />

        <Resume id="resume" />
        <hr className="border border-title-color opacity-30" />

        <Contact id="contact" />
      </section>
    </main>
  );
}
