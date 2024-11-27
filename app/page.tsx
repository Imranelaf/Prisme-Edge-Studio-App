// page.tsx
import About from '@/components/common/About';
import { Card } from '@/components/common/Card';
import Newsletter from '@/components/common/NewsLetters';
import OurTeam from '@/components/common/OurTeam';
import { Slogan } from '@/components/common/Slogan';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Slogan />
      <Card />
      <About />
      <OurTeam />
      <Newsletter />
    </main>
  );
}