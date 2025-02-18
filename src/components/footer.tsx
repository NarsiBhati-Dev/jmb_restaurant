'use client';

const Footer = () => {
  return (
    <footer className='mt-8 bg-black px-4 py-6 text-center text-gray-300 sm:px-6'>
      <p className='text-base font-medium sm:text-lg'>
        &copy; {new Date().getFullYear()} JMB Restaurant. All rights reserved.
      </p>
      {/* <p className='mt-2 text-sm sm:text-base'>
        Follow us on
        <a
          href='#'
          className='ml-1 underline transition-colors duration-200 hover:text-gray-400'
        >
          Instagram
        </a>{' '}
        |
        <a
          href='#'
          className='ml-1 underline transition-colors duration-200 hover:text-gray-400'
        >
          Facebook
        </a>
      </p> */}
      <p className='mt-4 text-xs text-gray-400 sm:text-sm'>
        Developed with ❤️ by <span className='font-semibold'>Narsi Bhati</span>
      </p>
    </footer>
  );
};

export default Footer;
