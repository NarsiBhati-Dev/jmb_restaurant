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
      className='border-jmb-red mb-4 flex items-center justify-between border-b-4 px-2 py-6 sm:px-6'
      aria-label='Header'
    >
      <Link
        href='/'
        className='flex items-center gap-2 sm:gap-4'
        aria-label={siteMetadata.title}
      >
        <Image
          src='/images/jmb-logo.png'
          alt={`${siteMetadata.title} - logo`}
          width={50}
          height={50}
          className='border-jmb-red w-12 rounded-full border sm:w-full'
          priority
        />
        <h1
          className='border-jmb-red border-l-2 px-2 text-[16px] font-extrabold tracking-tight whitespace-nowrap sm:px-4 md:text-2xl'
          aria-label={siteMetadata.title}
        >
          {siteMetadata.title}
        </h1>
      </Link>

      <div className='flex items-center'>
        <nav className='hidden items-center gap-x-6 font-medium lg:flex'>
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
