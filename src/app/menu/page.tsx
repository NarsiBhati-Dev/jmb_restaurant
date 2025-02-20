import getPageMetadata from '@/lib/getPageMetadata';
import Image from 'next/image';
import React from 'react';
import { menuItems } from '@/data/menuList';

export const metadata = getPageMetadata({ title: 'Menu', path: 'menu' });

const MenuPage = () => {
  return (
    <main className='mx-auto max-w-5xl px-2 py-12 text-gray-800 md:px-8'>
      <h1 className='text-jmb-red mb-8 text-center text-4xl font-extrabold md:text-6xl'>
        Our Menu
      </h1>

      {Object.entries(menuItems).map(([category, items]) => (
        <section
          key={category}
          className='mb-12 rounded-lg bg-white p-4 shadow'
        >
          <h2 className='text-jmb-red mb-4 text-2xl font-bold capitalize md:text-3xl'>
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </h2>
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
            {items.map((item, index) => (
              <div key={index} className='flex flex-col items-center'>
                <div className='relative h-36 w-36 rounded-lg shadow-md md:h-44 md:w-44'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={200}
                    height={200}
                    className='h-full w-full rounded-lg'
                  />
                </div>
                <p className='mt-2 text-center text-[16px] font-semibold md:text-lg'>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default MenuPage;
