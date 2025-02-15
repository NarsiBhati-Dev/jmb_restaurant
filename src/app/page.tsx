import siteMetadata from '@/data/siteMetadata';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex h-screen w-screen items-center justify-center gap-6 bg-black text-2xl text-white'>
      <Image
        src={'/images/jmb-logo.png'}
        alt={'JMB logo'}
        width={62}
        height={62}
      />{' '}
      <h1 className='text-5xl font-extrabold'>{siteMetadata.headerTitle}</h1>
    </main>
  );
}
