import siteMetadata from '@/data/siteMetadata';
import Image from 'next/image';
import Button from '@/components/button';

export default function Home() {
  return (
    <main className='h-full px-2'>
      <section className='relative sm:h-64 md:h-screen'>
        {/* Background Image */}
        <Image
          src='/images/bg-home1.webp'
          alt='Background'
          width={500}
          height={500}
          priority
          className='min-h-[28rem] w-full rounded-xl object-cover sm:h-full'
        />

        {/* Hero Section */}
        <section className='absolute right-0 bottom-0 left-0 flex flex-col items-center pb-8 text-center sm:bottom-28 md:pb-16'>
          {/* Heading */}
          <h1 className='text-jmb-red text-2xl font-extrabold md:text-5xl xl:text-7xl'>
            {siteMetadata.headerTitleHindi}
          </h1>
          <h2 className='mb-6 rounded px-4 py-2 text-xl font-bold text-black sm:text-2xl md:text-3xl'>
            Taste of Rajasthan
          </h2>
          {/* Buttons */}
          <section className='mt-4 flex flex-wrap justify-center gap-4'>
            <Button size='md' variant='primary' href='#OrderNow'>
              Order Now
            </Button>
            <Button size='md' variant='secondary' href='/contact-us'>
              Visit Us
            </Button>
          </section>
        </section>
      </section>

      <section className='py-10 text-center'>
        <p className='text-xl font-bold md:text-2xl'>
          Welcome to JMB Restaurant! 🍽️
        </p>
      </section>
    </main>
  );
}
