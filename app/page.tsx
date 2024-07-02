import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import {navItems} from '../data'
import HomeIntro from "@/components/HomeIntro";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-gray-600 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className='max-w-7xl w-full'>
        <FloatingNav className='bg-gray-50' navItems={navItems} />
        <Hero/>
        <HomeIntro />
        <Grid />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
