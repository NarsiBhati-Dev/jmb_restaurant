import getPageMetadata from '@/lib/getPageMetadata';
import Image from 'next/image';
import React from 'react';
import { menuItems } from '@/data/menuList';
import MenuItemCard from '@/components/menu-item-card';

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
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3'>
            {items.map((item, index) => (
              <MenuItemCard
                name={item.name}
                image={item.image}
                price={item.price}
                description={item.description}
                key={index}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
};

export default MenuPage;
