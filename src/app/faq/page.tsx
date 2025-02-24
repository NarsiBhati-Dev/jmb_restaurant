import getPageMetadata from '@/lib/getPageMetadata';
import FaqCard from '../../components/faq-card';
import Button from '@/components/button';

export const metadata = getPageMetadata({ title: 'FAQ', path: 'faq' });

const FaqPage = () => {
  return (
    <div className='min-h-screen bg-yellow-50 px-6 text-gray-800 md:px-16 md:py-10'>
      <h1 className='text-jmb-red py-4 text-center text-4xl font-bold md:text-6xl'>
        Frequently Asked Questions
      </h1>
      <p className='mx-auto mt-4 max-w-2xl text-center text-lg tracking-tight text-gray-700 md:text-2xl'>
        Find answers to common questions about our food, services, and more!
      </p>

      <FaqCard />

      <div className='mt-12 text-center'>
        <p className='pb-4 text-lg font-medium'>Still have questions?</p>
        <Button size='lg' href='/contact-us' variant='primary'>
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default FaqPage;
