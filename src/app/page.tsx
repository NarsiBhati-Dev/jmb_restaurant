import siteMetadata from '@/data/siteMetadata';
import Image from 'next/image';

export default function Home() {
  return (
    <main className='h-screen bg-black'>
      <Image
        src={'/images/bg-image.png'}
        alt={''}
        width={400}
        height={400}
        className='h-full w-full'
      />
    </main>
  );
}
