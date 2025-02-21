import Image from 'next/image';
import Button from '@/components/button';

export default function NotFoundPage() {
  return (
    <main className='h-full px-2'>
      <section className='relative sm:h-64 md:h-screen'>
        {/* Background Image */}
        <Image
          src='/images/bg-image.webp'
          alt='Rajasthani Theme'
          width={400}
          height={500}
          priority
          className='h-full min-h-[30rem] w-full rounded-lg object-cover'
        />

        <section className='absolute right-0 bottom-0 left-0 flex flex-col items-center justify-center py-4 text-white md:pb-36 2xl:pb-40'>
          {/* 404 Message */}
          <h1 className='text-3xl font-extrabold md:mb-4 md:text-7xl'>404</h1>
          <h2 className='mb-8 text-2xl font-extrabold md:text-5xl'>
            PageNotFound
          </h2>
          <div className='text-jmb-red mb-4 border-b-2 text-5xl font-semibold md:text-[100px]'>
            पधारो सा!
            <div className='border-2 border-yellow-300'></div>
          </div>

          {/* Back to Homepage Button */}

          <Button variant={'primary'} size={'lg'}>
            Back to homepage
          </Button>
        </section>
      </section>
    </main>
  );
}
