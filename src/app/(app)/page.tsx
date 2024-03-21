import HomeContent from '@/components/homeContent';
import Sidebar from '@/components/sidebar';

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />

      <section className="flex-1 ml-[18.75rem] md:ml-0 tall:ml-0">
        <HomeContent id="home" />
      </section>
    </main>
  );
}
