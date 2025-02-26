import getPageMetadata from '@/lib/getPageMetadata';
import Image from 'next/image';
import React from 'react';
import GoogleMap from '@/components/google-map';
import { aboutImages } from '@/data/aboutImages';
import { JSON_LD_About_Us } from '@/data/json-ld';
import Link from 'next/link';

export const metadata = getPageMetadata({
  title: 'About Us',
  path: 'about-us',
});

const AboutPage = () => {
  return (
    <main className='mx-auto max-w-5xl px-2 py-6 text-gray-800 sm:px-4 sm:py-12 md:px-8'>
      <header className='text-center'>
        <h1 className='text-jmb-red text-5xl font-bold md:text-6xl'>
          About Us
        </h1>
        <p className='mt-2 text-base text-gray-700 md:text-lg'>
          Serving the authentic taste of Rajasthan with love and tradition.
        </p>
      </header>

      {/* Hero Section */}
      <section className='text-center'>
        <div className='mt-8'>
          <Image
            src='/images/JaiMaaBhawani.webp'
            alt='Dal Bati Churma'
            width={700}
            height={500}
            priority
            className='mx-auto aspect-auto h-full w-full rounded-lg object-cover shadow-lg'
          />
        </div>
      </section>

      {/* Our Story */}
      <section className='mt-12'>
        <h2 className='text-3xl font-bold md:text-4xl'>Our Story</h2>
        <p className='mt-4 text-justify text-gray-700 md:text-xl'>
          Founded with a passion for authentic Rajasthani cuisine, JMB
          Restaurant has been serving delicious and traditional Dal Bati Churma
          for years. Our mission is to bring the taste of Rajasthan to every
          plate, made with fresh ingredients and love.
        </p>
      </section>

      {/* Our Specialties */}
      <section className='mt-12'>
        <h2 className='text-3xl font-bold md:text-4xl'>Our Specialties</h2>
        <ul className='mt-4 list-disc space-y-2 pl-6 text-gray-700 md:text-xl'>
          <li>Authentic Dal Bati Churma</li>
          <li>Freshly prepared traditional Rajasthani dishes</li>
          <li>Homely and welcoming atmosphere</li>
        </ul>
      </section>

      {/* Commitment to Quality */}
      <section className='mt-12'>
        <h2 className='text-3xl font-bold md:text-4xl'>Our Commitment</h2>
        <p className='mt-4 text-justify text-gray-700 md:text-xl'>
          We believe in using only the freshest ingredients, maintaining
          hygiene, and preserving the traditional flavors of Rajasthan. Every
          dish is made with care and love to bring you an unforgettable dining
          experience.
        </p>
      </section>

      {/* Photo Gallery */}
      <section className='mt-12'>
        <h2 className='text-3xl font-bold md:text-4xl'>Gallery</h2>
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
                className='aspect-auto h-full w-full transition-transform duration-300 hover:scale-120'
              />
            </div>
          ))}
        </div>
      </section>

      {/* Visit Us */}
      <section className='mt-12 w-full'>
        <h2 className='text-3xl font-bold md:text-4xl'>Visit Us</h2>
        <p className='mt-4 text-justify text-gray-700 md:text-xl'>
          Come experience the flavors of Rajasthan at JMB Restaurant. We are
          open every day to serve you!
        </p>

        <GoogleMap />
      </section>

      {/* CTA Section */}
      <section className='mt-16 text-center'>
        <div className='bg-jmb-red/10 rounded-lg p-8'>
          <h2 className='text-jmb-red text-2xl font-bold md:text-4xl'>
            Experience Authentic Rajasthani Cuisine
          </h2>
          <p className='mt-4 text-gray-700 md:text-xl'>
            Join us for a memorable dining experience with your family and
            friends.
          </p>
          <Link
            href='/menu'
            className='bg-jmb-red mt-6 inline-block rounded-lg px-8 py-3 text-lg font-bold text-white transition-transform hover:scale-105'
          >
            View Our Menu
          </Link>
        </div>
      </section>

      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD_About_Us) }}
      />
    </main>
  );
};

export default AboutPage;
