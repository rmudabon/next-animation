import { Navbar } from '@/components/home/navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className='flex dark:bg-slate-800 min-h-screen flex-col items-center justify-between p-24'>
        <div id='about'></div>
      </main>
    </>
  );
}
