import HomeContent from '@/components/homeContent';
import Sidebar from '@/components/sidebar';

export default function Home() {
  return (
    <main className="flex">
      <Sidebar />

      <section className="flex-1 pl-[18.75rem]">
        <HomeContent id="home" />
      </section>
    </main>
  );
}
