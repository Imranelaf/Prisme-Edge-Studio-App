import About from '@/components/common/About';
import { Card } from '@/components/common/Card';
import { Navbar } from '@/components/common/Navbar';
import Newsletter from '@/components/common/NewsLetters';
import OurTeam from '@/components/common/OurTeam';
import { Slogan } from '@/components/common/Slogan';


export default function Home() {


  return (
    <>
      <Navbar />
      <Slogan />
      <Card />
      <About />
      <OurTeam />
      <Newsletter />
      
    </>
  );
}
