import getPageMetadata from '@/lib/getPageMetadata';
import Image from 'next/image';
import GoogleMap from '@/components/google-map';
import React from 'react';
import siteMetadata from '@/data/siteMetadata';
import { aboutImages } from '@/data/aboutImages';

export const metadata = getPageMetadata({
  title: 'About Us',
  path: 'about-us',
});

const AboutPage = () => {
  return (
    <main className='mx-auto max-w-5xl px-4 py-12 text-gray-800 md:px-8'>
      {/* Hero Section */}
      <section className='text-center'>
        <h1 className='text-jmb-red text-3xl font-bold md:text-6xl'>
          About <br /> {siteMetadata.headerTitle}
        </h1>
        <p className='mt-4 text-lg text-gray-600 md:text-2xl'>
          Serving the authentic taste of Rajasthan with love and tradition.
        </p>
        <div className='mt-8'>
          <Image
            src='/images/JaiMaaBhawani.webp'
            alt='Dal Bati Churma'
            width={700}
            height={500}
            priority
            className='mx-auto h-auto w-auto rounded-lg object-cover shadow-lg'
          />
        </div>
      </section>

      {/* Our Story */}
      <section className='mt-12'>
        <h2 className='text-2xl font-bold md:text-4xl'>Our Story</h2>
        <p className='mt-4 text-justify text-gray-700 md:text-xl'>
          Founded with a passion for authentic Rajasthani cuisine, JMB
          Restaurant has been serving delicious and traditional Dal Bati Churma
          for years. Our mission is to bring the taste of Rajasthan to every
          plate, made with fresh ingredients and love.
        </p>
      </section>

      {/* Our Specialties */}
      <section className='mt-12'>
        <h2 className='text-2xl font-bold md:text-4xl'>Our Specialties</h2>
        <ul className='mt-4 list-disc space-y-2 pl-6 text-gray-700 md:text-xl'>
          <li>Authentic Dal Bati Churma</li>
          <li>Freshly prepared traditional Rajasthani dishes</li>
          <li>Homely and welcoming atmosphere</li>
        </ul>
      </section>

      {/* Commitment to Quality */}
      <section className='mt-12'>
        <h2 className='text-2xl font-bold md:text-4xl'>Our Commitment</h2>
        <p className='mt-4 text-justify text-gray-700 md:text-xl'>
          We believe in using only the freshest ingredients, maintaining
          hygiene, and preserving the traditional flavors of Rajasthan. Every
          dish is made with care and love to bring you an unforgettable dining
          experience.
        </p>
      </section>

      {/* Photo Gallery */}
      <section className='mt-12'>
        <h2 className='text-2xl font-bold md:text-4xl'>Gallery</h2>
        <div className='mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 md:grid-cols-4'>
          {aboutImages.map((item, index) => (
            <div
              key={index}
              className='relative aspect-square w-full overflow-hidden rounded-lg shadow-md'
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={200}
                height={200}
                className='absolute inset-0 h-full w-full'
              />
            </div>
          ))}
        </div>
      </section>

      {/* Visit Us */}
      <section className='mt-12 w-full'>
        <h2 className='text-2xl font-bold md:text-4xl'>Visit Us</h2>
        <p className='mt-4 text-justify text-gray-700 md:text-xl'>
          Come experience the flavors of Rajasthan at JMB Restaurant. We are
          open every day to serve you!
        </p>

        <GoogleMap />
      </section>
    </main>
  );
};

export default AboutPage;
