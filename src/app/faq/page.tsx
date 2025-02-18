import getPageMetadata from '@/lib/getPageMetadata';
import FaqCom from '../../components/faq-com';

export const metadata = getPageMetadata({ title: 'FAQ', path: 'faq' });

const FaqPage = () => {
  return (
    <div className='min-h-screen bg-yellow-50 px-6 py-16 text-gray-800 md:px-16'>
      <h1 className='text-jmb-red text-center text-4xl font-bold'>
        Frequently Asked Questions
      </h1>
      <p className='mx-auto mt-4 max-w-2xl text-center tracking-tight text-gray-700 md:text-xl'>
        Find answers to common questions about our food, services, and more!
      </p>

      <FaqCom />

      <div className='mt-12 text-center'>
        <p className='text-lg font-medium'>Still have questions?</p>
        <button className='bg-jmb-red mt-4 rounded-lg px-6 py-3 text-lg font-bold text-white'>
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default FaqPage;
