'use client';

import { useState, useEffect, useRef } from 'react';
import { SidebarClose, SidebarOpen } from '@/data/icons/sidebar-icons';
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';

import CustomLink from './custom-link';
import { HeaderNavLinks } from '@/data/headerNavLinks';
import clsx from 'clsx';
import NavIcon, { Kind } from '@/data/icons/navbar-icon';

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const onToggleNav = () => {
    setIsOpen(status => {
      if (navRef.current) {
        if (status) {
          enableBodyScroll(navRef.current);
        } else {
          // Prevent scrolling
          disableBodyScroll(navRef.current);
        }
      }
      return !status;
    });
  };

  useEffect(() => {
    return clearAllBodyScrollLocks();
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className='relative z-50 flex items-center justify-center lg:hidden'
        aria-label='Toggle Menu'
      >
        <SidebarOpen />
      </button>

      <aside
        className={clsx(
          isOpen ? 'translate-x-0' : 'translate-x-full',
          'fixed inset-0 z-50 flex flex-col bg-amber-50 px-2 text-black transition-transform duration-500',
        )}
        ref={navRef}
      >
        <div className='border-jmb-red flex items-center justify-between border-b-4 px-4 py-10 pb-10'>
          <h2 className='text-3xl font-bold'>Menu</h2>
          <button onClick={() => setIsOpen(false)} aria-label='Close Menu'>
            <SidebarClose />
          </button>
        </div>

        <nav className='mt-6 flex flex-col gap-4 px-4 text-lg'>
          {HeaderNavLinks.map(link => (
            <CustomLink
              key={link.title}
              href={link.href}
              className={
                'flex items-center justify-start gap-4 text-2xl font-medium'
              }
              onClick={onToggleNav}
            >
              <NavIcon kind={link.icon as Kind} />
              {link.title}
            </CustomLink>
          ))}
        </nav>
      </aside>
    </>
  );
};

export default MobileNav;
