import Image from 'next/image';
import Button from '@/components/button';

export default function NotFoundPage() {
  return (
    <main className='rounded-lg px-2'>
      <section className='relative min-h-[30rem] sm:h-64 md:h-screen'>
        {/* Background Image */}
        <Image
          src='/images/bg-image.webp'
          alt='Rajasthani Theme Background'
          width={1920}
          height={1080}
          priority
          className='h-full min-h-[30rem] rounded-lg object-cover'
        />
        <div className='absolute inset-0 bg-black/40' />{' '}
        {/* Overlay for better text readability */}
        <section className='absolute right-0 bottom-0 left-0 flex flex-col items-center justify-center pb-4 text-center text-white md:pb-36 2xl:pb-40'>
          {/* 404 Message */}
          <h1
            className='text-3xl font-extrabold md:mb-4 md:text-7xl'
            aria-label='Error 404'
          >
            404
          </h1>
          <h2 className='mb-8 text-2xl font-extrabold md:text-5xl'>
            Page Not Found
          </h2>
          <div className='relative mb-8'>
            <div className='text-jmb-red text-4xl font-semibold md:text-[100px]'>
              पधारो सा!
            </div>
            <div className='mt-2 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent'></div>
          </div>

          {/* Back to Homepage Button */}

          <Button variant={'primary'} size={'lg'} href='/'>
            Back to Homepage
          </Button>
        </section>
      </section>
    </main>
  );
}
