import React from 'react';
import getPageMetadata from '@/lib/getPageMetadata';

export const metadata = getPageMetadata({ title: 'Blog', path: 'blog' });

const BlogPage = () => {
  return <div>BlogPage</div>;
};

export default BlogPage;
