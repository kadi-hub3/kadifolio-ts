import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import {navItems} from '../data'
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className='max-w-7xl w-full'>
      <FloatingNav className='bg-gray-50' navItems={navItems} />
      <Hero/>
      <Grid />
      <Projects />
      </div>
    </main>
  );
}
