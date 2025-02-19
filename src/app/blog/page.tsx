import React from 'react';
import getPageMetadata from '@/lib/getPageMetadata';

export const metadata = getPageMetadata({ title: 'Blog', path: 'blog' });

const BlogPage = () => {
  return (
    <main className='flex h-96 flex-col items-center justify-center bg-gradient-to-b from-amber-50 to-orange-100 px-4 text-center'>
      <h1 className='text-jmb-red mb-4 text-4xl font-extrabold md:text-6xl'>
        Blog Coming Soon
      </h1>
      <p className='text-gray-700 md:text-xl'>
        We’re working on something exciting! Stay tuned for delicious updates
        and insightful stories.
      </p>
    </main>
  );
};

export default BlogPage;
