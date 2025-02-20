import siteMetadata from '@/data/siteMetadata';
import Image from 'next/image';
import Button from '@/components/button';
import FeaturesSection from '@/components/feature/features-section';
import TestimonialsSection from '@/components/testimonial/testimonials-section';

export default function Home() {
  return (
    <main className='h-full px-2'>
      {/* Hero Section */}
      <section className='relative sm:h-64 md:h-screen'>
        {/* Background Image */}
        <Image
          src='/images/bg-image.webp'
          alt='Background'
          width={500}
          height={500}
          priority
          className='min-h-[28rem] w-full rounded-xl object-cover sm:h-full'
        />

        {/* Hero Content */}
        <section className='absolute right-0 bottom-0 left-0 flex flex-col items-center pb-8 text-center sm:bottom-28 md:pb-16'>
          <h1 className='text-jmb-red text-2xl font-extrabold md:text-5xl xl:text-7xl'>
            {siteMetadata.headerTitleHindi}
          </h1>
          <h2 className='mb-6 rounded px-4 py-2 text-xl font-bold text-black sm:text-2xl md:text-3xl'>
            Taste of Rajasthan
          </h2>
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

      {/* About Us */}
      <section className='py-16 text-center'>
        <h2 className='text-jmb-red text-2xl font-bold md:text-4xl'>
          About JMB Restaurant
        </h2>
        <p className='mx-auto mt-4 max-w-3xl text-justify text-lg text-gray-700 md:text-xl'>
          Bringing the authentic taste of Rajasthan to your plate. Our dishes
          are prepared with fresh ingredients and traditional flavors to make
          every bite unforgettable.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className='bg-orange-100 py-16 text-center'>
        <h2 className='text-jmb-red text-3xl font-bold md:text-4xl'>
          Why Choose Us?
        </h2>
        <FeaturesSection />
      </section>

      {/* Our Specialties */}
      <section className='py-16 text-center'>
        <h2 className='text-jmb-red text-3xl font-bold md:text-4xl'>
          Our Specialties
        </h2>
        <div className='mt-6 flex flex-wrap justify-center gap-6'>
          {[
            { src: '/images/menu/dal-bati.webp', name: 'Dal Bati Churma' },
            { src: '/images/menu/churma.webp', name: 'Lasun Chatni' },
            { src: '/images/menu/masala-papad.webp', name: 'Masala Papad' },
          ].map((item, index) => (
            <div key={index} className='my-4 h-36 w-40'>
              <Image
                src={item.src}
                alt={item.name}
                width={160}
                height={160}
                className='h-full w-40 rounded-lg shadow-md'
              />
              <p className='mt-2 font-semibold'>{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className='bg-orange-100 py-16 text-center'>
        <h2 className='text-jmb-red text-3xl font-bold md:text-4xl'>
          What Our Customers Say
        </h2>
        <TestimonialsSection />
      </section>

      {/* Call to Action */}
      <section className='py-16 text-center'>
        <h2 className='text-jmb-red text-3xl font-bold md:text-4xl'>
          Ready to Taste Rajasthan?
        </h2>
        <p className='mt-4 text-lg text-gray-700 md:text-xl'>
          Visit us today or order online to enjoy the best Rajasthani cuisine.
        </p>
        <section className='mt-6 flex flex-wrap justify-center gap-4'>
          <Button size='lg' variant='primary' href='#OrderNow'>
            Order Now
          </Button>
          <Button size='lg' variant='secondary' href='/contact-us'>
            Visit Us
          </Button>
        </section>
      </section>
    </main>
  );
}
