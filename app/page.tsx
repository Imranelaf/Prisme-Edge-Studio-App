import About from '@/components/common/About';
import { Card } from '@/components/common/Card';
import { Navbar } from '@/components/common/Navbar';
import { Slogan } from '@/components/common/Slogan';


export default function Home() {


  return (
    <>
      <Navbar />
      <Slogan />
      <Card />
      <About />
      
    </>
  );
}
