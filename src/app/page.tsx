import { Sidebar } from '@/components/sidebar';
import { HomeContent } from '@/components/homeContent';
import { About } from '@/components/about/page';
import { Skills } from '@/components/skills';

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />

      <section className="flex-1 ml-[18.75rem] md:ml-0 tall:ml-0">
        <HomeContent id="home" />
        <About id="about" />

        <hr className="border border-title-color opacity-30" />
        <Skills />
      </section>
    </main>
  );
}
