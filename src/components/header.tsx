import siteMetadata from '@/data/siteMetadata';
import React from 'react';
import Image from 'next/image';
import { HeaderNavLinks } from '@/data/headerNavLinks';
import Link from 'next/link';
import CustomLink from './custom-link';
import MobileNav from './mobile-nav';

const Header = () => {
  return (
    <header
      className='mb-4 flex items-center justify-between border-b-4 border-[#ff0000] py-8'
      aria-label='Header'
    >
      <Link
        href={'/'}
        className='flex items-center justify-between gap-4'
        aria-label={siteMetadata.title}
      >
        <Image
          src={'/images/jmb-logo.png'}
          alt={`${siteMetadata.title} - logo`}
          width={50}
          height={50}
          className='rounded-full border border-[#ff0000]'
          priority
        />
        <h1 className='border-l-2 border-[#ff0000] px-2 text-sm font-bold tracking-tight sm:block sm:text-xl md:text-2xl'>
          {siteMetadata.headerTitle}
        </h1>
      </Link>
      <div className='flex items-center justify-between'>
        <nav className='hidden items-center justify-between gap-4 md:flex md:text-lg md:font-medium'>
          {HeaderNavLinks.filter(link => link.title !== 'Home').map(link => (
            <CustomLink
              href={link.href}
              className='text-lg font-medium'
              key={link.title}
            >
              {link.title}
            </CustomLink>
          ))}
        </nav>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header;
